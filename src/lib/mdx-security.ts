const ALLOWED_PROTOCOLS = new Set(["https:", "http:", "mailto:", "tel:"]);
const BLOCKED_MDX_ELEMENTS = new Set([
  "iframe",
  "object",
  "embed",
  "script",
  "form",
  "base",
  "meta",
]);

type UrlValidationOptions = {
  allowHttp?: boolean;
  allowMailto?: boolean;
  allowTel?: boolean;
};

type MdxAstNode = {
  type?: string;
  name?: string | null;
  children?: MdxAstNode[];
};

const CONTROL_OR_SPACE = /[\u0000-\u0020\u007f]/g;
const EXPLICIT_PROTOCOL = /^[a-z][a-z\d+.-]*:/i;

/**
 * Validates destinations supplied by MDX content before they reach a browser
 * URL-bearing attribute. Relative URLs remain relative; absolute URLs must use
 * an explicitly permitted protocol.
 */
export function isAllowedMdxUrl(
  value: unknown,
  options: UrlValidationOptions = {},
): value is string {
  if (typeof value !== "string") return false;

  const candidate = value.trim();
  if (!candidate) return false;

  // Browsers treat backslashes and protocol-relative paths inconsistently.
  // Neither form is a valid internal relative URL for MDX content.
  if (candidate.startsWith("//") || candidate.startsWith("\\\\")) return false;

  const compact = candidate.replace(CONTROL_OR_SPACE, "");
  const protocolMatch = compact.match(EXPLICIT_PROTOCOL);

  if (!protocolMatch) {
    return (
      candidate.startsWith("/") ||
      candidate.startsWith("./") ||
      candidate.startsWith("../") ||
      candidate.startsWith("?") ||
      candidate.startsWith("#")
    );
  }

  const protocol = protocolMatch[0].toLowerCase();
  if (!ALLOWED_PROTOCOLS.has(protocol)) return false;
  if (protocol === "http:" && options.allowHttp !== true) return false;
  if (protocol === "mailto:" && options.allowMailto === false) return false;
  if (protocol === "tel:" && options.allowTel === false) return false;

  try {
    // URL parsing catches malformed absolute URLs while mailto/tel remain valid.
    new URL(compact);
    return true;
  } catch {
    return false;
  }
}

export function getSafeMdxUrl(
  value: unknown,
  options: UrlValidationOptions = {},
): string | null {
  return isAllowedMdxUrl(value, options) ? value.trim() : null;
}

export function isExternalMdxUrl(value: string): boolean {
  return /^https?:/i.test(value.replace(CONTROL_OR_SPACE, ""));
}

export function getSafeExternalRel(
  target: string | undefined,
  rel: string | undefined,
): string | undefined {
  if (target !== "_blank") return rel;

  return Array.from(
    new Set([...(rel?.split(/\s+/) ?? []), "noopener", "noreferrer"]),
  )
    .filter(Boolean)
    .join(" ");
}

/**
 * Raw HTML is not required by Brainzon insight content. This remark plugin
 * removes raw HTML and lowercase MDX JSX elements before React evaluation,
 * while retaining approved PascalCase MDX components.
 */
export function disableRawHtmlInMdx() {
  return (tree: MdxAstNode): void => {
    sanitizeChildren(tree);
  };
}

function sanitizeChildren(node: MdxAstNode): void {
  if (!Array.isArray(node.children)) return;

  node.children = node.children.filter((child) => {
    if (child.type === "html") return false;

    if (
      child.type === "mdxJsxFlowElement" ||
      child.type === "mdxJsxTextElement"
    ) {
      const name = child.name ?? "";
      if (!name || name === name.toLowerCase()) return false;
      if (BLOCKED_MDX_ELEMENTS.has(name.toLowerCase())) return false;
    }

    sanitizeChildren(child);
    return true;
  });
}
