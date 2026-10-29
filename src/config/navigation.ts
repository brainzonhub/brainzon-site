export interface SubNavItem {
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  iconName: string;
  badge?: string;
  aiAgent?: string;
  color?: "cyan" | "amber" | "violet" | "emerald" | "blue" | "default";
}

export interface AIAgentItem {
  title: string;
  subtitle: string;
  description: string;
  product: string;
  href: string;
  iconName: string;
  controls: string;
  color: "cyan" | "amber" | "violet" | "emerald";
  capabilities: string[];
}

export interface NavSection {
  title: string;
  description?: string;
  items: SubNavItem[];
}

export interface NavFeaturedBanner {
  tag: string;
  title: string;
  description: string;
  href: string;
  ctaText?: string;
}

export interface CapabilityItem {
  name: string;
  description: string;
  href: string;
  iconName?: string;
}

export interface CapabilityCategory {
  category: string;
  items: CapabilityItem[];
}

export interface NavItem {
  title: string;
  href?: string;
  badge?: string;
  layout?: "split" | "columns-3" | "columns-2" | "default";
  featured?: NavFeaturedBanner;
  sections?: NavSection[];
  items?: SubNavItem[];
  capabilities?: CapabilityCategory[];
  aiAgents?: AIAgentItem[];
}

export const navigationConfig: NavItem[] = [
  {
    title: "Products",
    href: "/products",
    layout: "split",
    featured: {
      tag: "Connected Platform",
      title: "One Connected Enterprise Foundation",
      description: "Explore unified data models, deterministic AI agents, and cross-platform integrations.",
      href: "/products",
      ctaText: "View Overview",
    },
    items: [
      {
        title: "BrainMKT",
        subtitle: "Marketing Management",
        description: "Multi-channel campaign planning, audience segmentation, content workflows, and CRM lead handoff.",
        href: "/products/brainmkt",
        iconName: "brainmkt",
        badge: "New",
        aiAgent: "BrainMKT AI Agent",
        color: "cyan",
      },
      {
        title: "BrainCRM",
        subtitle: "Customer Relationship Management",
        description: "Unified customer records, deal pipeline, multi-channel touchpoints, and coordinated service delivery.",
        href: "/products/braincrm",
        iconName: "braincrm",
        aiAgent: "BrainCRM AI Agent",
        color: "amber",
      },
      {
        title: "BrainERP",
        subtitle: "Enterprise Resource Planning",
        description: "Operational coordination across inventory, procurement, bill of materials, and financial ledgers.",
        href: "/products/brainerp",
        iconName: "brainerp",
        aiAgent: "BrainERP AI Agent",
        color: "violet",
      },
      {
        title: "BrainBooks",
        subtitle: "Accounting Management",
        description: "Structured double-entry ledgers, accounts payable/receivable, bank reconciliation, and compliance.",
        href: "/products/brainbooks",
        iconName: "brainbooks",
        badge: "New",
        aiAgent: "BrainBooks AI Agent",
        color: "emerald",
      },
      {
        title: "Product AI Agents",
        subtitle: "Enterprise Workflow Assistants",
        description: "Supervised domain assistants for marketing, CRM, ERP, and accounting workflows.",
        href: "/ai-agents",
        iconName: "sparkles",
        badge: "New",
        color: "violet",
      },
    ],
    aiAgents: [
      {
        title: "BrainMKT AI Agent",
        subtitle: "Marketing Planning & Campaign Optimization",
        description: "Drafts email sequences, segments responding audiences, and coordinates lead handoff to CRM under marketing manager review.",
        product: "BrainMKT",
        href: "/ai-agents/brainmkt-ai-agent",
        iconName: "brainmkt",
        controls: "Content review & publishing approval required",
        color: "cyan",
        capabilities: ["Campaign Draft Generation", "Audience Segmentation", "A/B Subject Optimization", "CRM Lead Routing"],
      },
      {
        title: "BrainCRM AI Agent",
        subtitle: "Customer Timeline & Deal Intelligence",
        description: "Summarizes multi-touchpoint interaction history, flags pipeline risks, and stages customized follow-up proposals.",
        product: "BrainCRM",
        href: "/ai-agents/braincrm-ai-agent",
        iconName: "braincrm",
        controls: "Human review before external customer communication",
        color: "amber",
        capabilities: ["Touchpoint History Summary", "Deal Health Scoring", "Meeting Note Extraction", "Proposal Follow-up Staging"],
      },
      {
        title: "BrainERP AI Agent",
        subtitle: "Operations & Supply Chain Operations",
        description: "Scans inventory levels across warehouses, flags supplier lead-time exceptions, and drafts purchase orders for manager sign-off.",
        product: "BrainERP",
        href: "/ai-agents/brainerp-ai-agent",
        iconName: "brainerp",
        controls: "Transaction authorization required for PO execution",
        color: "violet",
        capabilities: ["Inventory Exception Scan", "MRP Demand Forecasting", "Reorder Threshold Flags", "Draft PO Staging"],
      },
      {
        title: "BrainBooks AI Agent",
        subtitle: "Accounting & Ledger Reconciliation",
        description: "Matches bank statement lines, analyzes AP/AR aging variances, and drafts month-end reconciliation entries with zero autonomous payout authority.",
        product: "BrainBooks",
        href: "/ai-agents/brainbooks-ai-agent",
        iconName: "brainbooks",
        controls: "Strict financial permissions; zero autonomous payments",
        color: "emerald",
        capabilities: ["Bank Statement Line Matching", "AP/AR Variance Analysis", "Reconciliation Draft Notes", "Audit Trail Compliance"],
      },
    ],
    capabilities: [
      {
        category: "Core Capabilities",
        items: [
          {
            name: "Master Data Fabric",
            description: "Unified customer, product & financial models",
            href: "/products",
            iconName: "layers",
          },
          {
            name: "Multi-Warehouse MRP",
            description: "Real-time inventory routing & reorder points",
            href: "/products/brainerp",
            iconName: "boxes",
          },
          {
            name: "Customer 360",
            description: "Cross-departmental touchpoint history",
            href: "/products/braincrm",
            iconName: "usercheck",
          },
          {
            name: "Double-Entry Ledgers",
            description: "Strict GAAP/IFRS financial compliance",
            href: "/products/brainbooks",
            iconName: "scale",
          },
        ],
      },
      {
        category: "Platform Controls",
        items: [
          {
            name: "Human Approval Gates",
            description: "Review thresholds for critical actions",
            href: "/solutions/integration",
            iconName: "shieldcheck",
          },
          {
            name: "Audit & Provenance",
            description: "Traceable decision logs & rationale history",
            href: "/resources",
            iconName: "filetext",
          },
          {
            name: "Role Permissions",
            description: "Granular RBAC & field-level masking",
            href: "/solutions/integration",
            iconName: "lock",
          },
          {
            name: "API & Webhook Hub",
            description: "Governed REST, SOAP, and dead-letter queues",
            href: "/solutions/integration",
            iconName: "network",
          },
        ],
      },
      {
        category: "Deployment & Trust",
        items: [
          {
            name: "Platform-Neutral",
            description: "Runs alongside Odoo, Dynamics 365, or bespoke apps",
            href: "/solutions",
            iconName: "compass",
          },
          {
            name: "Zero Lock-In",
            description: "Open schemas with full customer data ownership",
            href: "/resources",
            iconName: "shield",
          },
          {
            name: "Compliance Ready",
            description: "SOC2, GDPR, and ISO-aligned security controls",
            href: "/resources",
            iconName: "award",
          },
          {
            name: "High-Availability SLAs",
            description: "Multi-region cloud and hybrid deployments",
            href: "/services/cloud",
            iconName: "server",
          },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    layout: "columns-3",
    featured: {
      tag: "Platform-Neutral",
      title: "Enterprise Solutions & Integration",
      description: "Select, configure, and connect the software platforms that best match your processes and TCO.",
      href: "/solutions",
      ctaText: "Explore Solutions",
    },
    sections: [
      {
        title: "Enterprise Platforms",
        description: "Implementation, customization & fit-gap delivery",
        items: [
          {
            title: "Odoo Solution Services",
            subtitle: "Full-Suite ERP & Modular Apps",
            description: "Discovery, fit-gap analysis, controlled customization, data migration, and enablement.",
            href: "/solutions/odoo",
            iconName: "layers",
          },
          {
            title: "Microsoft Dynamics 365 BC",
            subtitle: "Finance & Operations",
            description: "Process assessment, AL extensions, validation, cutover rehearsals, and ecosystem integration.",
            href: "/solutions/microsoft-dynamics-365-business-central",
            iconName: "building-2",
          },
          {
            title: "Custom Enterprise Applications",
            subtitle: "Bespoke Portals & High-Throughput APIs",
            description: "Tailored customer portals, internal operational tools, and domain-specific workflow systems.",
            href: "/services/custom-development",
            iconName: "code-2",
          },
        ],
      },
      {
        title: "Connected Operations",
        description: "Modernization, middleware & cloud infrastructure",
        items: [
          {
            title: "Enterprise Integration Services",
            subtitle: "Connected Operations",
            description: "Governed REST, SOAP, GraphQL, OData, and webhook interfaces with dead-letter queues.",
            href: "/solutions/integration",
            iconName: "network",
          },
          {
            title: "Legacy Modernization",
            subtitle: "6 Staged Pathways",
            description: "Step-by-step risk mitigation: Encapsulate, Rehost, Replatform, Refactor, Rearchitect, Replace.",
            href: "/services/modernization",
            iconName: "refreshcw",
          },
          {
            title: "Cloud & DevOps Transformation",
            subtitle: "Infrastructure Reliability",
            description: "Containerized workloads, cloud/hybrid architecture, CI/CD pipelines, and observability.",
            href: "/services/cloud",
            iconName: "cloud",
          },
        ],
      },
      {
        title: "By Industry",
        description: "Tailored domain workflows & compliant models",
        items: [
          {
            title: "Manufacturing & Assembly",
            subtitle: "Shop floor & MRP",
            description: "Bill of materials, multi-stage production scheduling, and inventory traceability.",
            href: "/solutions/manufacturing",
            iconName: "factory",
          },
          {
            title: "Retail & Omnichannel",
            subtitle: "POS & Unified Catalog",
            description: "Omnichannel inventory sync, customer records, and automated replenishment.",
            href: "/solutions/retail",
            iconName: "shoppingbag",
          },
          {
            title: "Logistics & Supply Chain",
            subtitle: "Fleet & Warehouse Operations",
            description: "Multi-warehouse dispatch, freight tracking, and delivery route coordination.",
            href: "/solutions/logistics",
            iconName: "truck",
          },
          {
            title: "Healthcare & Pharmaceuticals",
            subtitle: "Compliance & Traceability",
            description: "Batch validation, regulatory compliance, and encrypted patient/record workflows.",
            href: "/solutions/healthcare",
            iconName: "heartpulse",
          },
          {
            title: "Professional Services",
            subtitle: "Project Accounting & Time",
            description: "Milestone-based billing, resource allocation, and profitability analytics.",
            href: "/solutions",
            iconName: "briefcase",
          },
        ],
      },
    ],
  },
  {
    title: "Modernization",
    href: "/services",
    layout: "columns-3",
    featured: {
      tag: "Zero-Downtime Delivery",
      title: "6 Staged Modernization Pathways",
      description: "Reduce technical debt while preserving core business continuity through cutover rehearsals.",
      href: "/services/modernization",
      ctaText: "Modernization Framework",
    },
    sections: [
      {
        title: "Engineering Services",
        description: "Full-lifecycle enterprise software engineering",
        items: [
          {
            title: "Custom Software Engineering",
            subtitle: "Application Services",
            description: "Modular services in .NET, Node.js, and Python with domain-oriented design.",
            href: "/services/custom-development",
            iconName: "code-2",
          },
          {
            title: "Cloud & DevOps Transformation",
            subtitle: "Infrastructure Reliability",
            description: "Cloud/hybrid deployments, containerized workloads, CI/CD pipelines, and telemetry.",
            href: "/services/cloud",
            iconName: "cloud",
          },
        ],
      },
      {
        title: "Advisory & Consulting",
        description: "Strategic guidance & architecture alignment",
        items: [
          {
            title: "Legacy System Modernization",
            subtitle: "Technical Debt Reduction",
            description: "Assessment, architecture redesign, database refactoring, and controlled cutovers.",
            href: "/services/modernization",
            iconName: "refreshcw",
          },
          {
            title: "ERP & Architecture Consulting",
            subtitle: "Advisory & Fit-Gap",
            description: "Process evaluation, data ownership mapping, master data rules, and delivery roadmaps.",
            href: "/services/erp-consulting",
            iconName: "briefcase",
          },
        ],
      },
      {
        title: "Modernization Pathways",
        description: "Standardized risk-reduction methodology",
        items: [
          {
            title: "Encapsulate & Rehost",
            subtitle: "API Wrapping & Cloud Shift",
            description: "Preserve legacy assets while publishing governed modern APIs to new consumers.",
            href: "/services/modernization",
            iconName: "shield",
          },
          {
            title: "Replatform & Refactor",
            subtitle: "Code & Runtime Tuning",
            description: "Upgrade underlying platforms and eliminate technical debt in active modules.",
            href: "/services/modernization",
            iconName: "sliders",
          },
          {
            title: "Rearchitect & Replace",
            subtitle: "Modular Transformation",
            description: "Transition monolithic core systems into scalable modular services and platforms.",
            href: "/services/modernization",
            iconName: "workflow",
          },
        ],
      },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    layout: "columns-3",
    featured: {
      tag: "Knowledge Base",
      title: "Enterprise Architecture Insights",
      description: "Technical articles, real customer benchmarks, and architectural blueprints.",
      href: "/insights",
      ctaText: "Browse Insights",
    },
    sections: [
      {
        title: "Learn & Insights",
        description: "Technical guides & transformation case studies",
        items: [
          {
            title: "Insights & Engineering Blog",
            subtitle: "Technical Architecture",
            description: "In-depth articles on modern architectures, database design, and cloud transformation.",
            href: "/insights",
            iconName: "filetext",
          },
          {
            title: "Case Studies & ROI",
            subtitle: "Client Impact",
            description: "Real-world transformation patterns, operational outcomes, and business impact.",
            href: "/resources/case-studies",
            iconName: "graduationcap",
          },
          {
            title: "Architecture & Specifications",
            subtitle: "Technical Documentation",
            description: "Technical reference manuals covering system capabilities, integration patterns, and data models.",
            href: "/resources",
            iconName: "bookopen",
          },
        ],
      },
      {
        title: "Company & Partners",
        description: "About Brainzon & ecosystem collaboration",
        items: [
          {
            title: "About Brainzon",
            subtitle: "Vision & Leadership",
            description: "Learn about Brainzon's mission, leadership, and digital transformation roadmap.",
            href: "/company/about",
            iconName: "globe",
          },
          {
            title: "Careers & Culture",
            subtitle: "Join Our Team",
            description: "Explore engineering, architecture, and enterprise transformation opportunities.",
            href: "/company/careers",
            iconName: "users",
          },
          {
            title: "Partner Ecosystem",
            subtitle: "Global Collaboration",
            description: "Ecosystem collaboration across enterprise software, cloud, and integration delivery.",
            href: "/company/partners",
            iconName: "hearthandshake",
          },
          {
            title: "Contact Us",
            subtitle: "Enterprise Advisory",
            description: "Connect with our solution architects and enterprise transformation advisors.",
            href: "/contact",
            iconName: "mail",
          },
        ],
      },
      {
        title: "Trust & Governance",
        description: "Security, compliance & operational policies",
        items: [
          {
            title: "Security & Compliance",
            subtitle: "Enterprise Protection",
            description: "Data encryption, SOC2 readiness, role-based access, and isolated environments.",
            href: "/security-policy",
            iconName: "shieldcheck",
          },
          {
            title: "Privacy Policy",
            subtitle: "Data Governance",
            description: "Transparent data retention, client data ownership, and strict confidentiality.",
            href: "/privacy-policy",
            iconName: "lock",
          },
          {
            title: "Terms of Service",
            subtitle: "Service Agreements",
            description: "Enterprise SLAs, delivery warranties, and professional service terms.",
            href: "/terms-of-service",
            iconName: "scale",
          },
        ],
      },
    ],
  },
];
