# Brainzon Development Guidelines (2026 Edition)

These guidelines govern the engineering and content practices across the Brainzon website platform (`brainzon-site`).

---

## 1. Domain Accuracy & Governance

When building or updating product, solution, and service pages:

- **Follow the 2026 Products & Services Guide:** All product names, capabilities, AI agent descriptions, enterprise platforms, and integration features must conform to Brainzon's official 2026 specifications.
- **Accurate Product Lineup:**
  - 4 Business Applications: `BrainMKT`, `BrainCRM`, `BrainERP`, `BrainBooks`.
  - 4 Product-Specific AI Agents: `BrainMKT AI Agent`, `BrainCRM AI Agent`, `BrainERP AI Agent`, `BrainBooks AI Agent`.
  - Enterprise Platform Solutions: Odoo, Microsoft Dynamics 365 Business Central, Custom Enterprise Applications.
  - Enterprise Integration Services & Legacy Modernization.
- **Platform-Neutral & Honest Claims:**
  - Do NOT claim vendor certifications, authorized reseller status, or formal partnerships unless formally confirmed.
  - Position Brainzon as an independent, skilled implementation, engineering, and modernization partner.
- **Responsible AI Compliance:**
  - State clearly that AI agents are workflow assistants operating with human review.
  - Do NOT state or imply that AI agents autonomously execute payments, post unapproved financial journals, or bypass compliance workflows without human sign-off.

---

## 2. Architecture & Rendering Model

- **Next.js App Router & React 19:**
  - Standardize on React Server Components (RSC) for page routes, content sections, and static layouts.
  - Use `'use client'` only when state, browser events, or browser APIs are required (e.g., forms, menus, modals, theme toggling).
- **Data-Driven Architecture:**
  - All navigation links, product metadata, feature matrices, solution lists, and pricing/demo configurations must reside in `src/config/*`.
  - Never hardcode menu structures or product catalogues in JSX components.

---

## 3. TypeScript Standards

- **Strict Mode Enforced:**
  - Zero `any` policy. Code with `any` will fail CI/CD typechecking (`pnpm typecheck`).
  - Use explicit `interface` and `type` declarations.
  - Keep types centralized in `src/types/` or co-located with dedicated config schemas.
- **Runtime Validation:**
  - Validate all inbound user submissions (Contact forms, Demo scheduling) using Zod schemas located in `src/lib/*-schema.ts`.

---

## 4. Styling & Theme Conventions

- **Tailwind CSS v4:**
  - Prefer utility classes and custom CSS variables defined in `src/styles/design-tokens.css` and `src/styles/globals.css`.
  - Do not write repetitive ad-hoc CSS styles.
- **Theme Support (`next-themes`):**
  - All components must look crisp and high-contrast in both **Dark** and **Light** modes.
  - Support `system` theme as default.
  - Always use semantic color classes (e.g., `bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-800`).

---

## 5. SEO & Metadata Standards

Every page route (`page.tsx`) must export a strongly-typed `metadata` object or `generateMetadata` function:

- **Required Metadata:**
  - `title`: Page Title | Brainzon
  - `description`: Crisp, benefit-driven 150-160 character summary.
  - `openGraph`: Title, description, URL, image, siteName (`Brainzon`).
  - `twitter`: Card format (`summary_large_image`), title, description.
  - `alternates`: Canonical URL.
- **Structured Data:** Include JSON-LD where applicable (Organization, SoftwareApplication, Service, BreadcrumbList).

---

## 6. Performance & Quality Benchmarks

- **Image Optimization:** Always use `next/image` with WebP/AVIF formats, specified aspect ratios, and responsive sizes.
- **Bundle Optimization:** Avoid importing entire libraries when named imports are available (e.g., Lucide React icons).
- **Automated Verification:**
  - Run `pnpm check` (combining ESLint and `tsc --noEmit`) before committing.
  - Ensure all unit and security tests pass (`pnpm test`).
