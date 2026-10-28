# Brainzon Design System (2026 Edition)

## Brand Positioning & Aesthetic Vision

**Enterprise Software • AI Agents • Integration • Modernization**

Brainzon's digital identity blends enterprise reliability with futuristic high-technology precision. The aesthetic reflects intelligent, connected operations.

### Visual Themes
- **Intelligent:** Data-rich dashboards, live status indicators, AI agent contextual cards.
- **Modern & Premium:** Deep navy foundations, glassmorphism, subtle micro-glows, precision typography.
- **Secure & Robust:** High-contrast borders, structured data grids, accessible color palettes.
- **Global Enterprise:** Clean layout hierarchy, professional typography, multi-theme adaptability.

---

## Theme Architecture

Full support for three theme states managed via `next-themes`:
1. **System Theme (Default)**: Automatically synchronizes with OS preference.
2. **Dark Theme**: High-tech enterprise command center aesthetic.
3. **Light Theme**: Clean, executive corporate aesthetic with soft surfaces and rich typography.

### Core CSS Variables & Color Tokens
```css
:root {
  /* Light Theme */
  --background: #FFFFFF;
  --foreground: #0F172A;
  --card: #F8FAFC;
  --card-border: #E2E8F0;
  --primary: #0F172A;
  --secondary: #475569;
  --accent-cyan: #0891B2;
  --accent-blue: #2563EB;
  --accent-brand: #DC2626;
  --muted: #64748B;
}

.dark {
  /* Dark Theme */
  --background: #020817;
  --foreground: #F8FAFC;
  --card: rgba(15, 23, 42, 0.7);
  --card-border: rgba(30, 41, 59, 0.8);
  --primary: #38BDF8;
  --secondary: #94A3B8;
  --accent-cyan: #06B6D4;
  --accent-blue: #3B82F6;
  --accent-brand: #EF4444;
  --muted: #64748B;
}
```

---

## Typography

- **Primary Font Family:** Geist Sans / Inter (clean, geometric sans-serif for optimal enterprise readability).
- **Monospace Font Family:** Geist Mono / JetBrains Mono (for code snippets, API endpoints, and system architecture schemas).
- **Scale:**
  - `Hero Display`: 48px – 64px (`text-5xl` / `text-6xl`), Bold / ExtraBold, tracking-tight.
  - `Section Title`: 32px – 40px (`text-3xl` / `text-4xl`), SemiBold.
  - `Card Header`: 18px – 24px (`text-lg` / `text-2xl`), Medium / SemiBold.
  - `Body`: 15px – 16px (`text-base`), Regular / Medium, line-height 1.6.
  - `Caption / Micro-copy`: 12px – 13px (`text-xs` / `text-sm`), uppercase tracking-wider.

---

## Mega Menu Navigation Specification

The header navigation is organized around Brainzon's 2026 core pillars:

```text
├── Products
│   ├── BrainMKT          (Marketing management & campaign coordination)
│   ├── BrainCRM          (Customer relationship management & sales pipeline)
│   ├── BrainERP          (Enterprise resource planning & operations)
│   └── BrainBooks        (Accounting management, payables & receivables)
├── Solutions
│   ├── Enterprise Platforms
│   │   ├── Odoo Solution Services
│   │   └── Microsoft Dynamics 365 Business Central
│   ├── Custom Enterprise Applications (Portals, APIs, workflow tools)
│   └── Enterprise Integration Services (APIs, sync, workflows, monitoring)
├── Modernization
│   └── Legacy System Modernization (Assessment, 6 pathways, continuous migration)
├── Services
│   ├── Custom Software Engineering (.NET, Node.js, Python, Modular design)
│   └── Cloud & DevOps Transformation (AWS, Azure, Hybrid, CI/CD, Kubernetes)
├── Company
│   ├── About Brainzon
│   └── Careers
└── Resources
    ├── Blog & Insights
    └── Case Studies & Transformation Patterns
```

Each navigation item in the Mega Menu features:
- **Icon:** Consistent Lucide React icon with contextual glow.
- **Title:** Clear, official product/service name.
- **Description:** Concise 1-line business purpose.
- **Interactive State:** Hover pill highlight with subtle transition.

---

## UI Components & Micro-interactions

### 1. Cards & Glass Panels
- **Backdrop Blur:** `backdrop-blur-md` for floating navigation and elevated status cards.
- **Borders:** 1px subtle border (`border-slate-200` in light, `border-slate-800` in dark) with hover state glowing accent (`hover:border-cyan-500/50`).
- **Radius:** Standard `rounded-xl` (12px) or `rounded-2xl` (16px).

### 2. Product & AI Agent Badges
- **Product Domain Pill:** e.g., `Marketing`, `CRM`, `ERP`, `Accounting`.
- **AI Agent Indicator:** Distinctive pill badge highlighting the dedicated AI assistant (e.g., `BrainMKT AI Agent`, `BrainCRM AI Agent`, `BrainERP AI Agent`, `BrainBooks AI Agent`).
- **Status Indicator:** Pulse dot showing active, connected status.

### 3. Buttons & CTAs
- **Primary CTA:** Brand gradient or high-contrast cyan accent button (`bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20`).
- **Secondary CTA:** Sleek outline button (`border border-slate-700 hover:bg-slate-800 text-slate-200`).
- **Ghost CTA:** Text link with subtle arrow slide on hover (`group-hover:translate-x-1 transition-transform`).

### 4. Motion & Transitions (Framer Motion)
- **Entrance Animations:** Smooth fade-and-slide up (`opacity: 0, y: 20` -> `opacity: 1, y: 0`) with 0.4s – 0.6s easing.
- **Hover Micro-interactions:** Scale up slightly (`scale: 1.02`), illuminate border, and brighten icon colors.
- **Transitions:** Professional and restrained; avoid excessive or dizzying motion.
