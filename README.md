# Brainzon Enterprise Website

The official enterprise digital platform for **Brainzon** — a global software company and enterprise digital transformation partner. Built as a high-performance, multi-page web application featuring proprietary SaaS product showcase, solutions, legacy application modernization services, and dynamic content resources.

**Positioning Statement:** *"Digital Transformation Partner for Modern Businesses"*

---

## 🚀 Core Product Ecosystem

Brainzon provides enterprise-grade platforms designed for scale, intelligence, and integration:

*   **[BrainERP](https://brainzon.com/products/brainerp)**: Enterprise Resource Planning platform covering Finance, Procurement, Manufacturing, Inventory, HR, and Business Intelligence.
*   **[BrainCRM](https://brainzon.com/products/braincrm)**: Customer Relationship Management platform featuring 360° Customer View, Sales Pipelines, Lead Management, and Marketing Automation.
*   **[BrainAI](https://brainzon.com/products/brainai)**: Enterprise Artificial Intelligence platform offering Document Intelligence, Predictive Analytics, OCR Automation, and Generative AI Assistants.
*   **[BrainConnect](https://brainzon.com/products/brainconnect)**: Integration Platform enabling seamless API Management, Workflow Automation, and Data Synchronization across legacy and cloud systems.

---

## 🛠️ Technology Stack

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router, React Server Components)
*   **Library:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes) (Dark / Light / System support)
*   **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
*   **Content & MDX:** [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) & [gray-matter](https://github.com/jonschlinkert/gray-matter)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Package Manager:** [pnpm](https://pnpm.io/)

---

## 📁 Repository Structure

```text
brainzon-site/
├── src/
│   ├── app/                    # Next.js App Router pages & API routes
│   │   ├── (marketing pages)   # /, /modernization, /book-demo, /contact
│   │   ├── company/            # /company/about, /company/careers, /company/partners
│   │   ├── products/           # /products, /products/[brainerp|braincrm|brainai|brainconnect]
│   │   ├── services/           # /services, /services/custom-development, /services/cloud-services
│   │   ├── solutions/          # /solutions, /solutions/[erp|crm|ai|integration]
│   │   ├── resources/          # /resources, /resources/blog, /resources/case-studies
│   │   ├── sitemap.ts          # Dynamic SEO Sitemap
│   │   └── robots.ts           # Robots.txt handler
│   ├── components/             # Reusable UI & Layout components
│   │   ├── layout/             # Navbar, MegaMenu, Footer, ThemeSwitcher
│   │   ├── ui/                 # Buttons, Cards, Glass Panels, Inputs
│   │   └── sections/           # Hero, Features, Stats, CTA, Testimonials
│   ├── config/                 # Navigation, Site Metadata, & Business Configs
│   ├── content/                # MDX content files (Blog posts, Case Studies)
│   ├── hooks/                  # Custom React Hooks
│   ├── lib/                    # Utilities, MDX parsing, Security helpers
│   ├── styles/                 # Global CSS & Tailwind design tokens
│   └── types/                  # TypeScript interface definitions
├── public/                     # Static assets (images, logos, favicon)
├── package.json
└── README.md
```

---

## 🚦 Getting Started

### Prerequisites

*   **Node.js**: v20.x or higher
*   **pnpm**: v9.x or higher

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/brainzonhub/brainzon-site.git
cd brainzon-site
pnpm install
```

### Development Server

Run the development server locally:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the Next.js development server with Webpack. |
| `pnpm build` | Compiles and builds the production bundle. |
| `pnpm start` | Runs the compiled production server. |
| `pnpm lint` | Runs ESLint to check code quality and rules. |
| `pnpm typecheck` | Runs TypeScript compiler check (`tsc --noEmit`). |
| `pnpm test` | Runs unit tests (e.g., MDX security tests). |
| `pnpm check` | Runs both `lint` and `typecheck` in sequence. |

---

## 🎨 Design System & Visual Direction

*   **Theme Concept:** Premium enterprise technology with dark dashboard aesthetics and clean corporate light modes.
*   **Color Palette:**
    *   *Navy Base:* Deep navy background gradients (`#0B1120`, `#0F172A`)
    *   *Technology Accents:* Cyan technology glow (`#06B6D4`) and vibrant Indigo/Violet
    *   *Brand Highlights:* Crimson / Orange brand focal points
*   **Styling Elements:** Glassmorphism (`backdrop-blur`), subtle glowing borders, interactive hover states, and responsive mega-navigation menus.

---

## 🔒 Security & Code Standards

*   **Strict Typing:** Zero `any` usage policy across all app routes and components.
*   **Content Security:** MDX rendering is sanitized with custom AST validation to protect against malicious injections.
*   **Form Validation:** All public inputs (Demo requests, Contact forms) are validated client and server-side via Zod schemas.
*   **SEO & Metadata:** Every route exports static/dynamic `Metadata` including OpenGraph, Twitter Cards, and canonical URLs.

---

## 📄 License

Copyright © Brainzon Enterprise Technologies. All rights reserved.
