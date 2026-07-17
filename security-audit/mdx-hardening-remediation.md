# MDX Hardening Remediation

Date: 2026-07-18  
Finding remediated: HD-001 from `harmful-download-links-report.md`

## Security behavior

- MDX URL handling is centralized in `src/lib/mdx-security.ts`.
- Internal root-relative, dot-relative, query, and fragment URLs are accepted.
- `https:`, `mailto:`, and `tel:` URLs are accepted by default.
- `http:` is accepted only when a caller explicitly sets `allowHttp: true`; the production MDX renderer does not opt in.
- `javascript:`, `data:`, `vbscript:`, `file:`, `blob:`, unknown protocols, protocol-relative URLs, UNC-style paths, empty values, and control-character-obfuscated protocols are rejected.
- Rejected CTA/native links render as inert text rather than navigable elements. Rejected insight images are omitted.
- External CTA links use a new browsing context and include `rel="noopener noreferrer"`.
- Any MDX link with `target="_blank"` receives deduplicated `noopener noreferrer` values while preserving existing rel tokens.
- Raw HTML is not required by current insight content and is removed at the MDX AST stage.
- Lowercase raw MDX JSX elements are removed while approved PascalCase components remain available.
- `iframe`, `object`, `embed`, `script`, `form`, `base`, and `meta` also have deny-by-default renderers as defense in depth.

## Modified files

| File | Change |
|---|---|
| `src/lib/mdx-security.ts` | Added centralized URL policy, external-link rel hardening, and the raw-HTML removal plugin. |
| `src/components/ui/MdxComponents.tsx` | Applied URL validation to native links, CTA buttons, and insight images; added blocked-element renderers. |
| `src/app/insights/[slug]/page.tsx` | Enabled the raw-HTML removal plugin for `MDXRemote`. |
| `src/lib/mdx-security.test.ts` | Added malicious/legitimate URL, HTTP opt-in, external-link, rel, and AST sanitization tests. |
| `package.json` | Added the `npm test` command using Node's built-in test runner. |
| `tsconfig.json` | Enabled type-safe `.ts` imports for the native TypeScript test runner under the existing no-emit configuration. |
| `security-audit/mdx-hardening-remediation.md` | Added this implementation and verification record. |

No MDX content, layout, CSS, or visual design was changed.

## Verification

- `npm test`: 6 passed, 0 failed.
- `npm run typecheck`: passed.
- `npm run lint`: passed with 3 unrelated pre-existing unused-import warnings.
- `npm run build`: passed; 52/52 pages generated and all six insight routes prerendered.

