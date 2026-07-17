# Brainzon Harmful Download Link Audit

Audit date: 2026-07-17  
Repository revision: `37539dd` (`dev`, also matching `main`, `origin/main`, and `origin/dev` when inspected)  
Scope: repository source, content, public assets, configuration, API routes, lockfile, workflows/deployment files, and available Git history. Generated output, dependency folders, caches, and Git objects were excluded from content scanning as requested.

## Executive Summary

- **Overall risk:** Low; no confirmed issue in the audited repository.
- **Confirmed harmful findings:** 0
- **High-risk suspicious findings:** 0
- **Medium-risk findings:** 1 hardening gap, not currently exploited
- **Benign download links reviewed:** 0 (the current site exposes no download links)
- **Most likely cause of the Search Console warning:** a production-only or historical condition not represented by the inspected revision, such as a prior deployment, compromised DNS/deployment account, injected edge response, stale indexed URL, or an external destination that was present at crawl time. The live apex redirect is normal and the current homepage returns HTML, not a downloadable attachment.
- **Likely origin:** Not confirmed in repository code, committed content, public assets, configuration, dependencies, or current production homepage headers. Production/deployment history and Search Console example URLs must be correlated to identify the original source.

No committed executable, installer, archive, macro-enabled document, browser extension, disk image, or script payload was found under `public/`. No code path sets `Content-Disposition: attachment`, serves `application/octet-stream`, creates blob downloads, auto-clicks anchors, proxies files, generates signed download URLs, or redirects a user-controlled destination. No service worker, middleware, `vercel.json`, manifest, download route, or third-party script loader exists in this revision.

## Method and Scope

The audit covered all tracked application files and the locations that exist in this repository: `src/app`, `src/components`, `src/content`, `src/config`, `src/lib`, `src/hooks`, `src/styles`, `public`, `.github`, root configuration, `package.json`, `pnpm-lock.yaml`, sitemap/robots code, API routes, MDX, and all available commits (14 commits, from `590fa0c` through `37539dd`). There are no root `app/`, `pages/`, `posts/`, `docs/`, `scripts/`, `vercel.json`, middleware, service-worker, or manifest files.

Searches included dangerous file extensions, download/attachment APIs, redirect APIs, client navigation, blob/object URLs, dynamic anchors, frames/objects/embeds, encoded/evaluated code, injected scripts, external URLs, shorteners/file hosts, lifecycle scripts, shell download tools, and Git history introduction/removal patterns.

The audit did not print or inspect private `.env` values. Only `.env.example` variable names/default localhost values and source-level environment-variable usage were reviewed.

## Confirmed Findings

No confirmed harmful findings were identified.

## Suspicious Findings Requiring Verification

### HD-001 — MDX components accept unrestricted destinations

- **Severity:** Medium
- **Confidence:** High that the hardening gap exists; high that it is not exploited by current content
- **Source file:** `src/components/ui/MdxComponents.tsx`
- **Exact lines:** 8-17 and 118-130
- **Relevant excerpt:**

  ```tsx
  interface CTAButtonProps {
    href: string;
  }

  <Link href={href}>

  interface InsightImageProps {
    src: string;
  }

  <Image src={src} ... />
  ```

- **Page or route affected:** `/insights/[slug]`
- **Link or destination domain:** Content-defined; current files use only internal paths
- **Downloaded file type:** None currently
- **Trigger mechanism:** User clicks an MDX `CTAButton`; `InsightImage` loads when rendered
- **Automatic or user-initiated:** CTA is user-initiated; image is automatic
- **URL user-controlled:** Not by an unauthenticated web user. It is controlled by trusted repository content authors/committers.
- **Redirect chain:** None in current content
- **Why it requires verification:** The rendering boundary does not enforce internal URLs, HTTPS, allowed schemes, or an approved host list. A compromised content pipeline or malicious commit could introduce a harmful external link without modifying React code. All six current MDX files were inspected: every `CTAButton` targets an internal Brainzon route, and every featured image targets a local PNG under `/images/insights/`.
- **Recommended remediation:** After approval, validate MDX link/image props at render or content-build time. Allow relative internal URLs by default; explicitly allow `https:` destinations from an approved host list; reject `javascript:`, `data:`, `blob:`, protocol-relative, shortened, IP-literal, and executable/archive-looking destinations. Add a CI content-link policy test.

This finding does **not** explain the current Search Console warning based on the committed content inspected.

## External URL Inventory

| URL or domain | Source file | Line | Route | Purpose | HTTPS | Redirected | Download-related | Risk | Notes |
|---|---|---:|---|---|---|---|---|---|---|
| `https://brainzon.com` | `src/config/env.ts`; multiple metadata files | 1 and derived | Site-wide metadata | Default canonical origin | Yes | Yes, production HEAD returned 308 to `https://www.brainzon.com/` | No | Low | Vercel redirect; no arbitrary target |
| `https://www.brainzon.com` | `src/config/legal.ts`, company metadata | 5 and metadata references | Legal/company metadata | Canonical company URL | Yes | No | No | Low | Production HEAD returned `200 text/html`, `Content-Disposition: inline` |
| `https://github.com` | `src/components/layout/Footer.tsx` | 83 | All pages | Generic GitHub social link | Yes | No in safe check | No | Low | User-initiated; root domain, not a release/download URL |
| `https://github.com/brainzonhub` | `src/app/page.tsx` | 46 | `/` | Organization structured data | Yes | Not checked | No | Low | Machine-readable JSON-LD only |
| `https://linkedin.com` | `src/components/layout/Footer.tsx` | 92 | All pages | Generic LinkedIn social link | Yes | Yes, to `https://www.linkedin.com/` | No | Low | User-initiated; safe metadata check returned HTML |
| `https://www.linkedin.com/company/brainzon` | `src/app/page.tsx`, `src/app/company/about/page.tsx` | 47; 43 | `/`, `/company/about` | Organization structured data | Yes | Not checked | No | Low | Machine-readable JSON-LD only |
| `https://www.linkedin.com/sharing/share-offsite/` | `src/app/insights/[slug]/page.tsx` | 243, 298 | `/insights/[slug]` | Share current Brainzon insight | Yes | Not checked | No | Low | `url` is constructed from a fixed Brainzon origin plus a repository-derived slug |
| `https://twitter.com` | `src/components/layout/Footer.tsx` | 101 | All pages | Generic X/Twitter social link | Yes | No in safe check | No | Low | User-initiated; safe metadata check returned HTML |
| `https://twitter.com/brainzon` | `src/app/page.tsx`, `src/app/company/about/page.tsx` | 48; 44 | `/`, `/company/about` | Organization structured data | Yes | Not checked | No | Low | Machine-readable JSON-LD only |
| `https://twitter.com/intent/tweet` | `src/app/insights/[slug]/page.tsx` | 252, 307 | `/insights/[slug]` | Share current Brainzon insight | Yes | Not checked | No | Low | Fixed host; parameters are URL encoded |
| `https://schema.org/*` | Multiple page metadata files | Multiple | Multiple | JSON-LD vocabulary identifiers | Yes | No | No | None | Not user navigation or script loading |
| `http://localhost:3000` | `.env.example` | 2 | Development only | Example site origin | No | No | No | None | Not a production destination unless deployment is misconfigured |
| `http://localhost:3001` | `.env.example`, `src/config/env.ts` | 5; 2 | Development/config | Example admin origin | No | No | No | None | No current rendered link or request uses `adminSiteUrl` |
| `https://api.mycms.com/posts` | `src/lib/cms.ts` | 9 | None | Commented future example | Yes | No | No | None | Comment only; never executed |
| `http://www.w3.org/2000/svg` | SVG/XML namespace declarations | Multiple | Asset/inline SVG | Namespace identifier | No | No | No | None | Not a network request |

No URL shorteners, file-hosting services, raw GitHub URLs, release URLs, Discord/Telegram/CDN URLs, IP-literal URLs, punycode domains, or visually confusable Unicode domains were found.

## Public File Inventory

Detected types are based on file signatures/content inspection for PNG/ICO/SVG and extension/content agreement. No extension/type mismatch or multiple-extension filename was observed.

| File | Detected MIME/type | Extension | Size | Referenced from | Risk | Notes |
|---|---|---:|---:|---|---|---|
| `public/favicon.ico` is not present; active favicon is `src/app/favicon.ico` | `image/x-icon` | `.ico` | 4,286 B | Next.js App Router convention | Low | Standard image container; not executable |
| `public/logo.png` | `image/png` (400x100) | `.png` | 31,027 B | `src/components/ui/logo.tsx` | Low | SHA-256 `a1f8876dd3a11cc2ca79330569d8d532e8848d0ee2bc3d03a4175d6b7c384b49` |
| `public/icon.png` | `image/png` | `.png` | 164,257 B | `src/components/sections/Hero.tsx` | Low | SHA-256 `5508eda4745f318df1598fee80ad5bfc03742d7d3f80c917daa4bc3dbf33e60a` |
| `public/file.svg` | `image/svg+xml` | `.svg` | 391 B | No application reference found | Low | Standard Next starter asset; no scripts/external references |
| `public/globe.svg` | `image/svg+xml` | `.svg` | 1,035 B | No application reference found | Low | Standard Next starter asset; no scripts/external references |
| `public/next.svg` | `image/svg+xml` | `.svg` | 1,375 B | No application reference found | Low | Standard Next starter asset; no scripts/external references |
| `public/vercel.svg` | `image/svg+xml` | `.svg` | 128 B | No application reference found | Low | Standard Next starter asset; no scripts/external references |
| `public/window.svg` | `image/svg+xml` | `.svg` | 385 B | No application reference found | Low | Standard Next starter asset; no scripts/external references |
| `public/images/case-studies/enterprise-transformation.svg` | `image/svg+xml` | `.svg` | 2,797 B | `src/config/case-studies.ts` | Low | Static drawing; no scripts/external references |
| `public/images/insights/architecting-multi-tenant-saas-databases.png` | `image/png` | `.png` | 891,469 B | Matching MDX frontmatter | Low | Static featured image |
| `public/images/insights/benefits-of-predictive-ai-maintenance.png` | `image/png` | `.png` | 875,041 B | Matching MDX frontmatter | Low | Static featured image |
| `public/images/insights/building-omnichannel-retail-inventory.png` | `image/png` | `.png` | 958,127 B | Matching MDX frontmatter | Low | Static featured image |
| `public/images/insights/enhancing-customer-360-sentiment-analysis.png` | `image/png` | `.png` | 850,535 B | Matching MDX frontmatter | Low | Static featured image |
| `public/images/insights/modernizing-legacy-erp-systems.png` | `image/png` | `.png` | 776,632 B | Matching MDX frontmatter | Low | Static featured image |
| `public/images/insights/optimizing-erp-procurement-workflows.png` | `image/png` | `.png` | 1,119,415 B | Matching MDX frontmatter | Low | Static featured image |

## Redirect and Rewrite Inventory

| Source | Route/trigger | Target | Control | Assessment |
|---|---|---|---|---|
| Production Vercel response (metadata-only HEAD, 2026-07-17) | `https://brainzon.com/` | `https://www.brainzon.com/` | Deployment/platform configuration, not present in repo | Fixed same-brand HTTPS redirect; benign |
| `src/components/ui/InsightFilters.tsx:50-69` | Insight filter query parameters | Current internal pathname plus reconstructed `URLSearchParams` | User controls filter values, not origin/path | Internal navigation only; no open redirect |
| `src/components/legal/CopySectionLink.tsx:8` | Copy section link | Current URL with repository-defined hash | Current browser URL | Clipboard-only; no navigation or download |

`next.config.ts` contains only `reactStrictMode: true` and `poweredByHeader: false`. It defines no redirects, rewrites, remote image patterns, or external headers. No middleware, `vercel.json`, route-handler redirect, service worker, meta refresh, HTTP 3xx application response, `window.location`, `window.open`, `location.assign/replace`, `redirect()`, `permanentRedirect()`, or `NextResponse.redirect()` exists in repository code.

## Third-Party Script Inventory

| Provider/domain | Source | Loading method | Production use | Risk | Notes |
|---|---|---|---|---|---|
| None | N/A | N/A | No | None | No `next/script`, remote `<script src>`, tag manager, analytics, chat widget, injected executable HTML, iframe, object, or embed was found |

The numerous `dangerouslySetInnerHTML` occurrences emit `application/ld+json` structured data built from repository constants/configuration. Several call `.replace(/</g, "\\u003c")`; others serialize fixed local objects without user-controlled fields. None loads a script URL or executable JavaScript. `src/components/solutions/erp/ERPIntegration.tsx` uses `dangerouslySetInnerHTML` for a numeric CSS width custom property, not HTML from an external source.

## Package and Build Script Review

- `package.json` has only `dev`, `build`, `start`, `lint`, `typecheck`, and `check` scripts.
- No `preinstall`, `postinstall`, `prepare`, `prebuild`, or `postbuild` project lifecycle scripts exist.
- No project script uses `curl`, `wget`, PowerShell download commands, remote shell execution, or writes/injects files into `public/`.
- Direct dependencies are common Next.js/UI/form/MDX packages: Next, React, next-mdx-remote, gray-matter, next-themes, react-hook-form, zod, lucide-react, framer-motion, clsx, and tailwind-merge.
- `napi-postinstall@0.3.4` appears transitively under `unrs-resolver@1.12.2`, with platform-specific optional resolver bindings. This is part of the lint/build resolution toolchain and is not used by production application routes to download or serve files.
- Lockfile package URLs are registry integrity metadata; no unexplained remote binary URL or install-time shell download command was found.
- A runtime package-tree command was blocked by sandbox permissions when pnpm attempted to initialize its user-level store. The lockfile relationship above was inspected directly, so no package installation or executable run was needed.

## Git History Findings

- Available history contains 14 commits from 2026-07-11 through 2026-07-17.
- `git log -S"Content-Disposition" --all` returned no commit.
- The only history hit for `download` was commit `338dee8` (`All pages added`). Inspection shows it introduced a CRM demo metric named **Resource Downloads**, stored as a number used in a lead-score simulator. It does not create a link, response, file, or download.
- External URLs introduced across history are Brainzon canonical URLs, Schema.org identifiers, the three social domains, social share endpoints, SVG namespace identifiers, and a commented CMS example.
- Public brand images were introduced by `8312b4f`; the case-study SVG and six insight PNGs were introduced by `c4cc4ef`. No executable/archive file was ever listed under `public/` in available history.
- Earlier `next.config.ts` changes (`b1583ac`, `0b7fcc1`) leave no redirect/rewrite or remote-host configuration in the current revision.
- No suspicious link or file removal was found that would directly explain a previously crawled harmful-download URL.

## Benign Findings

- Footer links to GitHub, LinkedIn, and Twitter/X are ordinary user-initiated HTTPS links to the providers' root pages. Safe checks returned HTML; none points to a release or file.
- Insight sharing links target official LinkedIn and Twitter/X share endpoints. The shared URL is a fixed `https://brainzon.com/insights/` origin with a repository-derived slug and is URL encoded.
- All six MDX CTAs point to internal routes: `/products/brainerp`, `/modernization`, `/products/braincrm`, `/contact`, `/solutions/integration`, and `/products/brainai`.
- All public assets are images, and all current MDX featured images use local image paths.
- API routes accept and validate contact/demo JSON and return JSON. They do not accept redirect destinations, proxy URLs, fetch remote content, or return files.
- The contact schema accepts a company website string and normalizes missing schemes for validation, but the value is only submitted to `/api/contact` and logged by the placeholder handler. It is not rendered as a link, fetched, redirected to, or downloaded.
- Search/filter parameters affect only local filtering and internal query-string navigation.
- The production apex currently returns a Vercel 308 redirect to the `www` hostname. The `www` homepage HEAD response is `200`, `Content-Type: text/html; charset=utf-8`, and `Content-Disposition: inline`.

## Recommended Remediation Plan

### 1. Immediate containment

1. In Google Search Console, export every example URL, detection date, and referring page for the **Links to harmful downloads** issue.
2. Check each example URL with a metadata-only request and Vercel deployment/log history. Do not browse or download a flagged payload directly.
3. Verify current DNS records, Vercel domains, redirects, edge middleware/settings, environment variables, team membership, access logs, and recent deployments against known-good ownership.
4. If any flagged route still resolves, temporarily return `410 Gone` or a safe internal page while preserving evidence.

### 2. Code or content removal

No harmful repository content is currently identified for removal. After approval, add the MDX URL-policy control described in HD-001 and remove unused starter SVG assets to reduce future audit surface (cleanup only; they are not harmful).

### 3. Redirect correction

Keep a single canonical HTTPS redirect from apex to `www` (or the reverse) and verify it in Vercel project/domain settings. Confirm there are no dashboard-level redirects absent from source control and no wildcard redirect capable of forwarding arbitrary paths/queries to external hosts.

### 4. Third-party script cleanup

There are no third-party scripts in this revision. Confirm the deployed HTML matches this fact and that no tag-manager or platform-level injection exists.

### 5. Dependency remediation

Run dependency review and vulnerability scanning in CI from the frozen lockfile. Keep lockfile integrity enforced and restrict/approve install scripts. No dependency currently explains a harmful download link.

### 6. Credential rotation, if compromise is suspected

If deployment/DNS history shows unauthorized activity, rotate Vercel tokens, Git provider tokens, DNS registrar credentials, webhook secrets, and relevant API keys; revoke unknown sessions; require MFA; review team membership and audit logs. Do not rotate solely because Search Console issued the warning without compromise evidence.

### 7. Production redeployment

Deploy a clean build from a reviewed commit and frozen lockfile. Purge/revalidate platform caches and verify representative routes, old flagged URLs, sitemap entries, and both hostnames.

### 8. Google Search Console review request

After all example URLs are resolved and verification checks pass, request a review. State that the repository, deployed headers/routes, assets, redirect configuration, and historical changes were audited; describe any production-only cause found and the exact containment/remediation performed.

## Verification Checklist

- [ ] Search Console example URLs and detection timestamps have been exported and correlated with deployment IDs.
- [ ] Every flagged URL returns safe HTML, a fixed same-site redirect, `404`, or `410`; none returns an attachment/octet-stream response.
- [ ] `brainzon.com` and `www.brainzon.com` have an intentional, fixed HTTPS canonical redirect chain with no arbitrary target.
- [ ] Current deployed HTML and RSC payloads contain no unexpected external domains, hidden links, encoded URLs, injected scripts, or download attributes.
- [ ] Production sitemap and robots output contain only expected Brainzon routes.
- [ ] No executable/archive/macro-enabled file is present in the deployment output or public object storage.
- [ ] No middleware, Vercel dashboard rule, DNS record, edge function, serverless function, or legacy deployment serves an unreviewed redirect/download.
- [ ] Vercel deployment history and access/audit logs show no unauthorized changes.
- [ ] DNS registrar, Git provider, and Vercel accounts have MFA and only expected members/tokens.
- [ ] MDX/content destinations are restricted by an approved scheme/domain policy and checked in CI.
- [ ] Dependencies install from the frozen lockfile; lifecycle scripts and vulnerability findings have been reviewed.
- [ ] A clean production deployment has been scanned from multiple unauthenticated clients/user agents.
- [ ] Google Safe Browsing/Search Console retest shows no remaining affected URLs before review submission.

## Audit Conclusion

The inspected repository does not contain a confirmed harmful download link or mechanism. The current production root response metadata also does not behave as a download. The Search Console warning should therefore be investigated primarily as a production-history, deployment-account, DNS/edge, stale-index, or formerly reachable URL issue. HD-001 is a worthwhile defense-in-depth correction but is not evidence of the reported incident.
