# Brainzon Next.js Architecture (2026 Edition)

This document outlines the architectural conventions, route hierarchy, data contracts, and design principles for the `brainzon-site` enterprise web application.

---

## 1. Directory Structure

```text
src/
├── app/                        # Next.js App Router (RSC & Client components)
│   ├── (marketing)/            # Public marketing landing pages
│   │   ├── page.tsx            # Enterprise Homepage
│   │   ├── book-demo/          # Demo booking workflow
│   │   └── contact/            # Enterprise inquiries
│   ├── products/               # Proprietary Business Applications
│   │   ├── page.tsx            # Ecosystem overview (BrainMKT + BrainCRM + BrainERP + BrainBooks)
│   │   ├── brainmkt/           # Marketing Management & BrainMKT AI Agent
│   │   ├── braincrm/           # Customer Relationship Management & BrainCRM AI Agent
│   │   ├── brainerp/           # Enterprise Resource Planning & BrainERP AI Agent
│   │   └── brainbooks/         # Accounting Management & BrainBooks AI Agent
│   ├── solutions/              # Solutions & Platforms
│   │   ├── page.tsx            # Solutions portfolio overview
│   │   ├── enterprise-platforms/ # Odoo & Microsoft Dynamics 365 Business Central
│   │   ├── custom-enterprise/  # Custom Enterprise Applications & Portals
│   │   └── integration/        # Enterprise Integration Services
│   ├── modernization/          # Legacy System Modernization (6 Pathways)
│   ├── services/               # Professional Engineering Services
│   │   ├── page.tsx            # Services overview
│   │   ├── custom-development/ # Custom Enterprise Software (.NET, Node.js, Python)
│   │   └── cloud/              # Cloud, Hybrid & DevOps Transformation
│   ├── company/                # Corporate identity
│   │   ├── about/              # About Brainzon & Leadership
│   │   ├── careers/            # Careers & Culture
│   │   └── partners/           # Partner Ecosystem
│   ├── resources/              # Dynamic content hub
│   │   ├── page.tsx            # Resources index
│   │   ├── blog/               # Industry insights & technical articles
│   │   └── case-studies/       # Transformation patterns & use cases
│   ├── sitemap.ts              # Dynamic XML sitemap generator
│   └── robots.ts               # Web crawler directive handler
├── components/                 # Reusable UI component library
│   ├── layout/                 # Global layout primitives (Navbar, MegaMenu, Footer, ThemeToggle)
│   ├── sections/               # Composite page sections (Hero, Features, Workflows, CTA, FAQ)
│   └── ui/                     # Atoms & molecules (Buttons, Cards, GlassPanels, Badges, Modals)
├── config/                     # Single source of truth for site data & content
│   ├── products.ts             # 4 Business Applications & dedicated AI agent capabilities
│   ├── solutions.ts            # Enterprise platforms (Odoo, Business Central, Custom)
│   ├── integration.ts          # Enterprise Integration Services & design checklist
│   ├── modernization.ts        # Legacy modernization pathways & services
│   ├── services.ts             # Engineering, cloud, and architecture capabilities
│   ├── navigation.ts           # MegaMenu and footer navigation hierarchies
│   ├── site.ts                 # Global metadata, branding, and contact channels
│   └── theme.ts                # Theme variables and color palette tokens
├── content/                    # Local MDX content files
├── hooks/                      # Custom React hooks
├── lib/                        # Server & client utilities, schemas (Zod), and sanitizers
├── styles/                     # Tailwind CSS v4 tokens and global stylesheets
└── types/                      # Shared TypeScript domain models & component props
```

---

## 2. Core Offerings & Domain Architecture

Brainzon's digital experience is architected around **One Connected Enterprise Foundation**:

### A. Business Applications
1. **BrainMKT (`/products/brainmkt`):** Marketing management, campaign orchestration, audience segmentation, content workflows, lead handoff.
2. **BrainCRM (`/products/braincrm`):** Customer 360, lead management, sales pipeline, interaction timelines, service coordination.
3. **BrainERP (`/products/brainerp`):** Operational coordination, inventory/warehouse, procurement, manufacturing, and operations management.
4. **BrainBooks (`/products/brainbooks`):** General ledger, accounts receivable, accounts payable, cash/bank activity, reconciliations, financial statements.

### B. Product-Specific AI Agents
Every business application includes an embedded context-aware AI agent:
- **BrainMKT AI Agent:** Campaign summaries, content assistance, performance Q&A.
- **BrainCRM AI Agent:** Customer record discovery, interaction summaries, pipeline inquiries, follow-up drafts.
- **BrainERP AI Agent:** Operational queries, exception summaries, trend analysis, supply chain insights.
- **BrainBooks AI Agent:** Entry lookup, variance explanations, reconciliation notes, financial summaries.
*(Strict constraint: AI agents are workflow assistants; human approval is mandatory for financial postings, payments, and customer-facing communications.)*

### C. Enterprise Platform Solutions
- **Odoo Solution Services:** Fit-gap, configuration, controlled customization, data migration, user enablement.
- **Microsoft Dynamics 365 Business Central Services:** Finance/operations assessment, extensions, ecosystem integration, cutover validation.
- **Custom Enterprise Applications:** Portals, bespoke microservices, internal dashboards, and domain-specific engines.

### D. Enterprise Integration Services
- Governed APIs (REST, SOAP, GraphQL, OData, webhooks), bi-directional data synchronization, workflow automation, and monitoring/observability with dead-letter queues.

### E. Legacy System Modernization
- Systematic technical debt reduction via the **6 Modernization Pathways**: *Retain & improve, Rehost, Re-platform, Refactor, Replace, and Retire*.

---

## 3. Architecture Principles

1. **Business-Led:** Anchor architecture choices in measurable business outcomes rather than technology for its own sake.
2. **Modular & Composable:** Maintain clear service boundaries, reusable components, and decoupled data schemas.
3. **API-First & Integration-Ready:** Treat data interfaces as structured contracts with versioning, idempotency, and explicit error handling.
4. **Secure by Design:** Zero-trust principles, least-privilege scoping, input validation via Zod, and data privacy governance.
5. **Observable:** Structured logging, client-side error boundaries, automated health probes, and auditability.
6. **Data-Driven UI:** Decouple copy, navigation menus, and product specifications into typed config files (`src/config/*`). Zero hardcoded repeated strings.

---

## 4. Rendering & Performance Rules

- **Server Components by Default:** Keep all pages and non-interactive sections as React Server Components (RSC) to maximize SEO and minimize client bundle size.
- **Client Components (`'use client'`):** Restricted strictly to:
  - Theme toggling (`next-themes`)
  - Interactive navigation (MegaMenu open/close, mobile drawers)
  - Interactive forms and validation (`react-hook-form`, `zod`)
  - Framer Motion animations and interactive tabs/filters
- **Asset Optimization:** Use `next/image` with explicit width/height or `fill` plus responsive `sizes` attributes for all visual assets.
- **Strict Typing:** All components and configuration items must be strictly typed without `any`.
