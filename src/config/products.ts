export interface Benefit {
  title: string;
  description: string;
  metric?: string;
}

export interface ArchitectureNode {
  name: string;
  type: "core" | "service" | "storage" | "gateway";
  description: string;
}

export interface ArchitectureLayer {
  name: string;
  nodes: ArchitectureNode[];
}

export interface ArchitectureData {
  title: string;
  description: string;
  layers: ArchitectureLayer[];
}

export interface DetailedFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProductAIAgent {
  name: string;
  context: string;
  assistance: string[];
  controls: string[];
}

export interface Product {
  name: string;
  slug: string;
  description: string;
  headline: string;
  highlight?: string;
  features: string[]; // For homepage compatibility
  detailedFeatures: DetailedFeature[];
  benefits: Benefit[];
  architecture: ArchitectureData;
  integrations: string[];
  icon: string;
  href: string;
  aiAgent?: ProductAIAgent;
}

export const productsConfig: Product[] = [
  {
    name: "BrainMKT",
    slug: "brainmkt",
    description: "Marketing management platform to plan campaigns, coordinate multi-channel content, organize audiences, and streamline CRM lead handoffs.",
    headline: "Coordinate Campaigns, Audiences, and High-Velocity Growth",
    highlight: "High-Velocity Growth",
    features: [
      "Campaign Planning & Calendars",
      "Multi-Channel Coordination",
      "Audience Segmentation Lists",
      "Content & Asset Approval Workflows",
      "Automated CRM Lead Handoff",
      "Marketing Performance Analytics"
    ],
    detailedFeatures: [
      {
        title: "Marketing Planning & Calendars",
        description: "Organize strategic goals, campaign plans, collaborative calendars, asset owners, timelines, and launch milestones.",
        icon: "Megaphone"
      },
      {
        title: "Campaign Coordination",
        description: "Track live campaign status, multi-channel tasks, deliverables, creative approvals, and next operational steps.",
        icon: "Workflow"
      },
      {
        title: "Audience Segmentation",
        description: "Structure dynamic audience groups and targeted campaign lists using validated criteria and data privacy boundaries.",
        icon: "Users"
      },
      {
        title: "Content & Publishing Workflows",
        description: "Coordinate content production tasks, publishing schedules, creative assets, peer reviews, and legal approval steps.",
        icon: "FileText"
      },
      {
        title: "Seamless CRM Lead Handoff",
        description: "Directly stream marketing campaign responses and scored leads into BrainCRM workflows for immediate sales engagement.",
        icon: "ArrowRight"
      },
      {
        title: "Performance Visibility & ROI",
        description: "Consolidate campaign reach, conversion milestones, attribution indicators, and channel spend metrics into unified dashboards.",
        icon: "BarChart3"
      }
    ],
    benefits: [
      {
        title: "Campaign Velocity",
        description: "Cut campaign kickoff and asset approval turnaround times with structured reviews.",
        metric: "45%"
      },
      {
        title: "Lead Handoff Speed",
        description: "Eliminate manual export-import cycles by piping qualified responders directly into CRM.",
        metric: "Near Instant"
      },
      {
        title: "Attribution Clarity",
        description: "Align marketing budget allocations to verified downstream pipeline conversion results.",
        metric: "100%"
      }
    ],
    architecture: {
      title: "BrainMKT Platform Topology",
      description: "Cloud-native event-driven marketing orchestration architecture with campaign scheduler queues and webhook connectors.",
      layers: [
        {
          name: "Channel & Ingestion Layer",
          nodes: [
            { name: "Channel Connectors", type: "gateway", description: "Aggregates ad platform webhooks and social responses." },
            { name: "Event Gateway", type: "gateway", description: "Secures external click and lead submission endpoints." }
          ]
        },
        {
          name: "Orchestration & Workflow Engine",
          nodes: [
            { name: "Campaign Planner", type: "core", description: "Manages calendar dependencies and milestone triggers." },
            { name: "Audience Segmenter", type: "core", description: "Computes dynamic cohort lists using privacy-safe rules." },
            { name: "Lead Dispatcher", type: "service", description: "Pipes verified leads into CRM workflows." }
          ]
        },
        {
          name: "Analytics & Persistence",
          nodes: [
            { name: "Campaign Datastore", type: "storage", description: "Maintains relational campaign schedules and creative assets." },
            { name: "Attribution Cache", type: "storage", description: "Accelerates dashboard queries for channel attribution metrics." }
          ]
        }
      ]
    },
    integrations: ["BrainCRM", "Google Ads", "Meta Ads", "LinkedIn Campaign Manager", "Mailchimp", "HubSpot", "Zapier"],
    icon: "brainmkt",
    href: "/products/brainmkt",
    aiAgent: {
      name: "BrainMKT AI Agent",
      context: "Marketing Management",
      assistance: [
        "Campaign executive summaries",
        "Planning & calendar scheduling support",
        "Creative copy drafting & variants",
        "Marketing performance queries"
      ],
      controls: [
        "Content review step required",
        "Brand guideline adherence checks",
        "Human publishing approval",
        "Audience privacy access boundaries"
      ]
    }
  },
  {
    name: "BrainCRM",
    slug: "braincrm",
    description: "Customer Relationship Management platform to organize customer information, manage leads and opportunities, coordinate follow-up, and empower sales and support.",
    headline: "Convert Pipelines and Streamline Customer Journeys",
    highlight: "Customer Journeys",
    features: [
      "Customer 360 & Account Records",
      "Lead Capture & Qualification",
      "Visual Sales Pipeline",
      "Multi-Channel Interaction History",
      "Customer Service Coordination",
      "Predictive CRM Analytics"
    ],
    detailedFeatures: [
      {
        title: "Customer Records & Profiles",
        description: "Maintain comprehensive customer profiles, relationship context, interaction history, and hierarchical account information.",
        icon: "Users"
      },
      {
        title: "Lead Management & Scoring",
        description: "Support lead capture, automated qualification, territory assignment, activity tracking, and conversion visibility.",
        icon: "Target"
      },
      {
        title: "Visual Sales Pipeline",
        description: "Track opportunity stages, next actions, pipeline value, probability weighting, and forecast-oriented reporting.",
        icon: "LayoutDashboard"
      },
      {
        title: "Unified Engagement History",
        description: "Consolidate sales meetings, marketing touches, email threads, and service tickets into a single chronological timeline.",
        icon: "Clock"
      },
      {
        title: "Customer Service Coordination",
        description: "Manage request ownership, ticket routing, communication history, and service SLA visibility.",
        icon: "HeartHandshake"
      },
      {
        title: "CRM Reporting & Velocity",
        description: "Review sales activity volume, win rates, conversion stages, and team pipeline movements with executive exports.",
        icon: "BarChart3"
      }
    ],
    benefits: [
      {
        title: "Conversion Gains",
        description: "Boost deal closing velocity and conversion percentages through automated lead scoring and structured follow-up.",
        metric: "24%"
      },
      {
        title: "Sales Team Efficiency",
        description: "Equip sales teams with unified notes, pre-approved proposal templates, and scheduled follow-up alerts.",
        metric: "40%"
      },
      {
        title: "Account Retention",
        description: "Proactively resolve customer issues with a centralized view of support tickets and engagement telemetry.",
        metric: "18%"
      }
    ],
    architecture: {
      title: "BrainCRM Topology & Services",
      description: "High-frequency interaction architecture designed for real-time customer event streaming and pipeline auditability.",
      layers: [
        {
          name: "Ingestion & Communication Layer",
          nodes: [
            { name: "Interaction Gateway", type: "gateway", description: "Accepts email threads, form captures, and support webhooks." },
            { name: "API Gateway", type: "gateway", description: "Secures client portal and mobile app endpoints." }
          ]
        },
        {
          name: "Pipeline & Service Engines",
          nodes: [
            { name: "Lead Qualification Engine", type: "core", description: "Evaluates lead score and automated territory routing." },
            { name: "Opportunity Pipeline", type: "core", description: "Manages deal stage state transitions and audit logs." },
            { name: "Service Ticket Router", type: "service", description: "Dispatches customer inquiries by skill and priority." }
          ]
        },
        {
          name: "Customer Graph & Storage",
          nodes: [
            { name: "Customer Graph DB", type: "storage", description: "Maintains relational hierarchies between accounts and contacts." },
            { name: "Search & Telemetry Index", type: "storage", description: "Powers instant sub-second customer record searches." }
          ]
        }
      ]
    },
    integrations: ["BrainMKT", "BrainERP", "BrainBooks", "Twilio", "Stripe", "Zendesk", "Microsoft 365", "Google Workspace"],
    icon: "braincrm",
    href: "/products/braincrm",
    aiAgent: {
      name: "BrainCRM AI Agent",
      context: "Customer Relationships",
      assistance: [
        "Customer account context summaries",
        "Record & interaction history discovery",
        "Pipeline deal probability queries",
        "Personalized client follow-up drafts"
      ],
      controls: [
        "User role data permissions enforced",
        "Duplicate customer context validation",
        "Review before external email dispatch",
        "No autonomous contract commitments"
      ]
    }
  },
  {
    name: "BrainERP",
    slug: "brainerp",
    description: "Enterprise Resource Planning platform to coordinate operations across finance, inventory, warehouse, procurement, sales, and manufacturing.",
    headline: "Unify Operations, Supply Chain, and Resources in Real Time",
    highlight: "Real Time",
    features: [
      "Operational Coordination",
      "Multi-Warehouse Inventory Control",
      "Strategic Procurement & POs",
      "Advanced Manufacturing Scheduling",
      "Sales Order Fulfillment",
      "Executive Operational Reporting"
    ],
    detailedFeatures: [
      {
        title: "Operational Coordination",
        description: "Coordinate relevant business operations in a consistent, unified environment aligned with your operating model.",
        icon: "Workflow"
      },
      {
        title: "Multi-Warehouse Inventory",
        description: "Real-time stock visibility across multi-site warehouses, automatic reorder threshold triggers, and shelf-life tracking.",
        icon: "Package"
      },
      {
        title: "Strategic Procurement",
        description: "Manage supplier records, purchase requisitions, multi-tier approval hierarchies, and vendor evaluation metrics.",
        icon: "ShoppingCart"
      },
      {
        title: "Manufacturing & Operations",
        description: "Support production planning, bill of materials (BOM), shop-floor control, capacity forecasting, and work orders.",
        icon: "Cpu"
      },
      {
        title: "Sales Order Fulfillment",
        description: "Connect customer sales orders directly with inventory allocation, shipping logistics, and invoicing workflows.",
        icon: "Truck"
      },
      {
        title: "Management Reporting",
        description: "Interactive operational dashboards, exception monitoring, supply chain KPIs, and cost variance reporting.",
        icon: "BarChart3"
      }
    ],
    benefits: [
      {
        title: "Operational Efficiency",
        description: "Reduce administrative overhead with end-to-end operational coordination across departments.",
        metric: "35%"
      },
      {
        title: "Working Capital Optimization",
        description: "Optimize stock carrying costs and purchase order batching to free up liquid operating capital.",
        metric: "20%"
      },
      {
        title: "Audit Readiness",
        description: "Ensure complete transaction traceability with immutable stock movement and procurement logs.",
        metric: "100%"
      }
    ],
    architecture: {
      title: "BrainERP Platform Topology",
      description: "Designed on a modular ledger-centric microservices framework with ACID transaction guarantees and enterprise audit trails.",
      layers: [
        {
          name: "Gateway & Integration Layer",
          nodes: [
            { name: "Enterprise Gateway", type: "gateway", description: "Distributes transactional requests across cluster nodes." },
            { name: "B2B / EDI Interface", type: "gateway", description: "Secure interfaces for supplier and logistics interchange." }
          ]
        },
        {
          name: "Operational Engines",
          nodes: [
            { name: "Inventory Controller", type: "core", description: "Maintains real-time multi-site stock allocation state." },
            { name: "Procurement Engine", type: "core", description: "Orchestrates purchase approval matrices and vendor POs." },
            { name: "MRP Scheduler", type: "core", description: "Computes material requirements and factory work orders." }
          ]
        },
        {
          name: "Storage & Persistence",
          nodes: [
            { name: "Operational DB (PostgreSQL)", type: "storage", description: "Encapsulates transaction tables with partition clustering." },
            { name: "State Cache (Redis)", type: "storage", description: "Accelerates inventory lookups and active session caches." }
          ]
        }
      ]
    },
    integrations: ["BrainCRM", "BrainBooks", "Dynamics 365 BC", "Odoo", "Shopify Plus", "Amazon FBA", "FedEx / UPS APIs"],
    icon: "brainerp",
    href: "/products/brainerp",
    aiAgent: {
      name: "BrainERP AI Agent",
      context: "Operations & Supply Chain",
      assistance: [
        "Operational inventory queries",
        "Supply chain exception summaries",
        "Production trend explanations",
        "Procurement workflow insights"
      ],
      controls: [
        "Strict transaction authorization",
        "Source record traceability",
        "Human approval for stock adjustments",
        "No autonomous purchase approvals"
      ]
    }
  },
  {
    name: "BrainBooks",
    slug: "brainbooks",
    description: "Accounting management platform positioned to maintain structured financial records, coordinate accounts receivable/payable, and streamline reconciliation.",
    headline: "Precision Accounting, Audit-Ready Ledgers, and Cash Flow Clarity",
    highlight: "Cash Flow Clarity",
    features: [
      "Structured General Ledger",
      "Accounts Receivable Automation",
      "Accounts Payable & Due Dates",
      "Cash & Bank Feeds",
      "Reconciliation & Internal Controls",
      "Statutory Financial Reporting"
    ],
    detailedFeatures: [
      {
        title: "General Ledger & Accounts",
        description: "Organize custom chart of accounts, multi-currency journal entries, and fiscal closing periods under approved accounting models.",
        icon: "BookOpen"
      },
      {
        title: "Accounts Receivable (AR)",
        description: "Automate customer invoicing, track outstanding balances, review aging summaries, and record payment receipts.",
        icon: "Receipt"
      },
      {
        title: "Accounts Payable (AP)",
        description: "Coordinate supplier bills, verify three-way PO matches, schedule due dates, and streamline payment preparation.",
        icon: "CreditCard"
      },
      {
        title: "Cash & Bank Activity",
        description: "Record bank account transactions, reconcile bank statements automatically, and monitor live liquid cash positions.",
        icon: "Wallet"
      },
      {
        title: "Reconciliation & Controls",
        description: "Support transaction rule matching, variance review steps, role-based controls, and traceable journal audit trails.",
        icon: "ShieldCheck"
      },
      {
        title: "Financial Reporting",
        description: "Generate compliant balance sheets, profit & loss (P&L) statements, cash flow statements, and statutory tax reports.",
        icon: "BarChart3"
      }
    ],
    benefits: [
      {
        title: "Month-End Close Speed",
        description: "Accelerate month-end closing cycles by ingesting approved operational transactions from BrainERP.",
        metric: "50%"
      },
      {
        title: "Reconciliation Accuracy",
        description: "Eliminate manual bank matching errors with automated transaction reconciliation rules.",
        metric: "99.8%"
      },
      {
        title: "Audit Compliance",
        description: "Provide external auditors with complete timestamped journal histories and approval trails.",
        metric: "100%"
      }
    ],
    architecture: {
      title: "BrainBooks Financial Architecture",
      description: "Compliant double-entry financial accounting ledger with strict immutability, role-segregated controls, and audit verification.",
      layers: [
        {
          name: "Bank & Transaction Ingestion",
          nodes: [
            { name: "Bank Feeds Gateway", type: "gateway", description: "Securely ingests statement lines via Open Banking APIs." },
            { name: "ERP Ingestion Bridge", type: "gateway", description: "Receives validated transaction batches from operational ERP." }
          ]
        },
        {
          name: "Ledger & Compliance Engine",
          nodes: [
            { name: "Double-Entry Posting Engine", type: "core", description: "Enforces debit/credit equality with ACID compliance." },
            { name: "Reconciliation Matcher", type: "service", description: "Automates rule-based matching of bank and ledger entries." },
            { name: "Period-Close Governor", type: "core", description: "Locks closed fiscal periods against retrospective adjustments." }
          ]
        },
        {
          name: "Ledger Persistence & Audit Vault",
          nodes: [
            { name: "Immutable Ledger Store", type: "storage", description: "Appends journal lines to cryptographically verified storage." },
            { name: "Financial Reporting Datamart", type: "storage", description: "Powers rapid P&L and Balance Sheet aggregations." }
          ]
        }
      ]
    },
    integrations: ["BrainERP", "BrainCRM", "Plaid", "Stripe", "QuickBooks Data Importer", "Xero Sync", "Standard Tax Authorities"],
    icon: "brainbooks",
    href: "/products/brainbooks",
    aiAgent: {
      name: "BrainBooks AI Agent",
      context: "Accounting & Finance",
      assistance: [
        "Financial statement summaries",
        "Journal entry & ledger discovery",
        "Report variance explanations",
        "Reconciliation & review notes preparation"
      ],
      controls: [
        "Strict financial access permissions",
        "Comprehensive journal audit logging",
        "ZERO autonomous payment approvals",
        "Human review required for postings"
      ]
    }
  }
];
