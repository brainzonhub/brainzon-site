import assert from "node:assert/strict";
import test from "node:test";
import {
  disableRawHtmlInMdx,
  getSafeExternalRel,
  getSafeMdxUrl,
  isAllowedMdxUrl,
  isExternalMdxUrl,
} from "./mdx-security.ts";

test("rejects dangerous and unapproved URL protocols", () => {
  const malicious = [
    "javascript:alert(1)",
    "JaVaScRiPt:alert(1)",
    "java\nscript:alert(1)",
    "data:text/html,<script>alert(1)</script>",
    "vbscript:msgbox(1)",
    "file:///etc/passwd",
    "blob:https://example.com/id",
    "//evil.example/payload",
    "\\\\evil.example\\payload",
  ];

  for (const url of malicious) {
    assert.equal(isAllowedMdxUrl(url, { allowHttp: true }), false, url);
    assert.equal(getSafeMdxUrl(url, { allowHttp: true }), null, url);
  }
});

test("allows legitimate internal, fragment, contact, and HTTPS URLs", () => {
  const legitimate = [
    "/products/brainerp",
    "./related",
    "../insights",
    "?page=2",
    "#architecture",
    "https://brainzon.com/insights/example",
    "mailto:security@brainzon.com",
    "tel:+880123456789",
  ];

  for (const url of legitimate) {
    assert.equal(isAllowedMdxUrl(url), true, url);
    assert.equal(getSafeMdxUrl(url), url, url);
  }
});

test("allows HTTP only when the caller explicitly opts in", () => {
  assert.equal(isAllowedMdxUrl("http://localhost:3000"), false);
  assert.equal(
    isAllowedMdxUrl("http://localhost:3000", { allowHttp: true }),
    true,
  );
});

test("identifies external HTTP(S) links", () => {
  assert.equal(isExternalMdxUrl("https://brainzon.com"), true);
  assert.equal(isExternalMdxUrl("http://localhost:3000"), true);
  assert.equal(isExternalMdxUrl("/insights"), false);
  assert.equal(isExternalMdxUrl("mailto:security@brainzon.com"), false);
});

test("hardens links that open a new browsing context", () => {
  assert.equal(
    getSafeExternalRel("_blank", "nofollow noopener"),
    "nofollow noopener noreferrer",
  );
  assert.equal(getSafeExternalRel("_self", "nofollow"), "nofollow");
});

test("removes raw HTML and lowercase MDX elements while retaining components", () => {
  const tree = {
    type: "root",
    children: [
      { type: "html", value: "<script>alert(1)</script>" },
      ...["iframe", "object", "embed", "script", "form", "base", "meta"].map(
        (name) => ({
          type: "mdxJsxFlowElement",
          name,
          children: [{ type: "text", value: "blocked" }],
        }),
      ),
      {
        type: "mdxJsxFlowElement",
        name: "div",
        children: [{ type: "text", value: "raw HTML" }],
      },
      {
        type: "mdxJsxFlowElement",
        name: "CTAButton",
        children: [{ type: "text", value: "allowed" }],
      },
      { type: "paragraph", children: [{ type: "text", value: "markdown" }] },
    ],
  };

  disableRawHtmlInMdx()(tree);

  assert.deepEqual(
    tree.children.map((node) => ("name" in node ? node.name : node.type)),
    ["CTAButton", "paragraph"],
  );
});
