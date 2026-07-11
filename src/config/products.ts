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

export interface Product {
  name: string;
  slug: string;
  description: string;
  headline: string;
  features: string[]; // For homepage compatibility
  detailedFeatures: DetailedFeature[];
  benefits: Benefit[];
  architecture: ArchitectureData;
  integrations: string[];
  icon: string;
  href: string;
}

export const productsConfig: Product[] = [
  {
    name: "BrainERP",
    slug: "brainerp",
    description: "Enterprise Resource Planning platform to synchronize finance, inventory, manufacturing, and HR operations.",
    headline: "Unify Operations, Finance, and Resources in Real Time",
    features: [
      "Finance & Ledger Management",
      "Real-time Inventory Control",
      "Strategic Procurement Engines",
      "Advanced Manufacturing Schedulers",
      "Human Resource Systems",
      "Enterprise Business Intelligence"
    ],
    detailedFeatures: [
      {
        title: "Finance & Ledger Management",
        description: "Complete general ledger tracking, accounts payable/receivable automation, multi-currency reporting, and automated tax compliance engines.",
        icon: "DollarSign"
      },
      {
        title: "Real-time Inventory Control",
        description: "Live item tracking across multi-site warehouses, automatic reorder threshold alerts, and intelligent shelf-life optimization rules.",
        icon: "Package"
      },
      {
        title: "Strategic Procurement",
        description: "Automate vendor evaluation workflows, contract auditing, purchase order tracking, and sourcing analytics tools.",
        icon: "ShoppingCart"
      },
      {
        title: "Advanced Manufacturing Schedulers",
        description: "MRP planning engines, interactive shop-floor control schedules, capacity forecasting, and bill-of-materials orchestration.",
        icon: "Cpu"
      },
      {
        title: "Human Resource Systems",
        description: "Global payroll administration, employee lifecycle tracking, timesheet automation, and performance analytics hubs.",
        icon: "Users"
      },
      {
        title: "Enterprise Business Intelligence",
        description: "Interactive executive dashboards, custom reporting generators, real-time KPI alerts, and predictive business forecasting models.",
        icon: "BarChart3"
      }
    ],
    benefits: [
      {
        title: "Operational Efficiency",
        description: "Reduce core administrative overhead with end-to-end automation across functional teams.",
        metric: "35%"
      },
      {
        title: "Audit Readiness",
        description: "Ensure standard compliance with pre-configured reports, secure ledger records, and tracking logs.",
        metric: "100%"
      },
      {
        title: "Working Capital Gains",
        description: "Optimize storage overhead and procurement schedules to unlock immediate capital.",
        metric: "18%"
      }
    ],
    architecture: {
      title: "BrainERP Platform Topology",
      description: "Designed on a modular ledger-centric microservices framework, built with high security and latency parameters.",
      layers: [
        {
          name: "Gateway & Integration Layer",
          nodes: [
            { name: "Load Balancer", type: "gateway", description: "Distributes transactions across node pools." },
            { name: "REST/GraphQL API", type: "gateway", description: "Standard endpoints for third-party client consumption." }
          ]
        },
        {
          name: "Core Processing Engines",
          nodes: [
            { name: "Ledger Service", type: "core", description: "Processes financial operations with ACID compliance." },
            { name: "MRP Planner", type: "core", description: "Orchestrates factory resource schedulers." },
            { name: "BI Analytics Engine", type: "service", description: "Runs aggregations for operations intelligence." }
          ]
        },
        {
          name: "Storage & Persistence",
          nodes: [
            { name: "Main DB (PostgreSQL)", type: "storage", description: "Holds critical transaction records with partition clustering." },
            { name: "Cache (Redis)", type: "storage", description: "Speeds up ledger balances query response rates." }
          ]
        }
      ]
    },
    integrations: ["Dynamics 365 BC", "Odoo", "ERPNext", "AWS S3", "Azure Active Directory", "SAP"],
    icon: "database",
    href: "/products/brainerp"
  },
  {
    name: "BrainCRM",
    slug: "braincrm",
    description: "Customer Relationship Management platform to drive lead conversion, automate marketing, and offer customer 360 views.",
    headline: "Convert Pipelines and Streamline Customer Journeys",
    features: [
      "Lead Management & Tracking",
      "Visual Sales Pipeline",
      "Customer 360 Overview Portal",
      "Advanced Marketing Automation"
    ],
    detailedFeatures: [
      {
        title: "Lead Management & Scoring",
        description: "Analyze conversion probability, log lead activity, and route prospects using predictive priority engines.",
        icon: "Target"
      },
      {
        title: "Visual Sales Pipeline",
        description: "Track deal progression with interactive drag-and-drop boards, automatic pipeline value forecasts, and task reminders.",
        icon: "LayoutDashboard"
      },
      {
        title: "Customer 360 Portal",
        description: "Unify support history, purchase records, communication logs, and preference parameters in one single pane.",
        icon: "Users"
      },
      {
        title: "Marketing Automation",
        description: "Launch dynamic multi-channel campaigns, track engagement webhooks, and evaluate campaign attribution models.",
        icon: "Mail"
      }
    ],
    benefits: [
      {
        title: "Conversion Gains",
        description: "Boost deal closing velocity and conversion percentages through automated lead scoring structures.",
        metric: "24%"
      },
      {
        title: "Team Efficiency",
        description: "Equip sales reps with integrated notes, templates, and trigger-based email actions.",
        metric: "40%"
      },
      {
        title: "Retention Improvement",
        description: "Proactively resolve customer issues with a centralized view of support tickets and engagement telemetry.",
        metric: "15%"
      }
    ],
    architecture: {
      title: "BrainCRM Topology & Services",
      description: "Architected for high-frequency customer interaction data ingestion and real-time activity streaming.",
      layers: [
        {
          name: "Ingestion Layer",
          nodes: [
            { name: "Webhook Gateway", type: "gateway", description: "Accepts web event streams from marketing platforms." },
            { name: "API Gateway", type: "gateway", description: "Secures and routes dashboard requests." }
          ]
        },
        {
          name: "Telemetry & Action Engines",
          nodes: [
            { name: "Lead Scorer", type: "core", description: "Processes predictive conversion likelihood." },
            { name: "Workflows Service", type: "core", description: "Triggers actions on deal stage changes." }
          ]
        },
        {
          name: "Persistence & Graph Layer",
          nodes: [
            { name: "Relation Store", type: "storage", description: "Stores customer record trees." },
            { name: "Search Index", type: "storage", description: "Provides instant name/company queries using Elasticsearch." }
          ]
        }
      ]
    },
    integrations: ["Salesforce", "HubSpot", "Twilio", "Mailchimp", "Stripe", "Zendesk"],
    icon: "users",
    href: "/products/braincrm"
  },
  {
    name: "BrainAI",
    slug: "brainai",
    description: "Enterprise Artificial Intelligence platform providing document intelligence, predictive analytics, and generative assistants.",
    headline: "Predict, Parse, and Automate with Cognitive AI",
    features: [
      "Interactive AI Assistant",
      "Cognitive Document Intelligence",
      "Predictive & Descriptive Analytics",
      "Tailored Generative AI Engines"
    ],
    detailedFeatures: [
      {
        title: "Cognitive Document Intelligence",
        description: "Extract semantic tables, entity fields, and metadata signatures from unstructured PDFs and images.",
        icon: "FileText"
      },
      {
        title: "Predictive & Forecast Engines",
        description: "Predict supply demand, customer churn probabilities, and financial trends using custom time-series models.",
        icon: "TrendingUp"
      },
      {
        title: "Tailored Generative AI",
        description: "Deploy domain-specific LLM assistants equipped with secure Retrieval-Augmented Generation (RAG) over local document storage.",
        icon: "Brain"
      },
      {
        title: "Real-time Anomaly Detection",
        description: "Flag fraudulent transaction balances, cyber activity anomalies, and hardware wear alerts instantly.",
        icon: "AlertTriangle"
      }
    ],
    benefits: [
      {
        title: "Manual Labor Reductions",
        description: "Automate invoice scanning, support ticket triage, and data entry reviews with semantic models.",
        metric: "80%"
      },
      {
        title: "Forecast Accuracy",
        description: "Refine resource allocation plans with automated multivariate forecast models.",
        metric: "92%"
      },
      {
        title: "Decision Support Speed",
        description: "Deliver instant, secure corporate knowledge lookups to teams via semantic search interfaces.",
        metric: "10x"
      }
    ],
    architecture: {
      title: "BrainAI Machine Learning Stack",
      description: "A state-of-the-art secure inference cluster supporting semantic indexing, local document vectors, and modular model configurations.",
      layers: [
        {
          name: "Model Interface Layer",
          nodes: [
            { name: "Chat Gateway", type: "gateway", description: "Orchestrates prompt flows and token streaming." },
            { name: "Document Parser", type: "gateway", description: "Performs OCR and layout structural reviews." }
          ]
        },
        {
          name: "Inference & Vector Processing",
          nodes: [
            { name: "LLM Cluster", type: "core", description: "Executes local model inference (Llama/Gemma pools)." },
            { name: "RAG Retrieval Engine", type: "core", description: "Performs semantic text chunk similarity sweeps." }
          ]
        },
        {
          name: "Vector DB & Weights Storage",
          nodes: [
            { name: "Vector Store", type: "storage", description: "Holds high-dimensional document embedding vectors." },
            { name: "Weights Cache", type: "storage", description: "Caches common context weights for fast inference responses." }
          ]
        }
      ]
    },
    integrations: ["OpenAI", "Hugging Face", "Pinecone", "AWS SageMaker", "Postgres pgvector", "LangChain"],
    icon: "cpu",
    href: "/products/brainai"
  },
  {
    name: "BrainConnect",
    slug: "brainconnect",
    description: "Integration platform to orchestrate APIs, automate enterprise workflows, and synchronize databases.",
    headline: "Orchestrate Enterprise Data Flows and API Pipelines",
    features: [
      "High-throughput API Integration",
      "Dynamic Workflow Automation",
      "Bi-directional Data Synchronization"
    ],
    detailedFeatures: [
      {
        title: "API Integration Engine",
        description: "Configure REST, SOAP, and GraphQL integrations with automatic schema validation and credential vaults.",
        icon: "Key"
      },
      {
        title: "Visual Workflow Designer",
        description: "Orchestrate multi-step pipelines with drag-and-drop conditions, error retry triggers, and parallel processing branches.",
        icon: "GitBranch"
      },
      {
        title: "Bi-directional Sync Hub",
        description: "Keep local databases and cloud platforms in perfect sync using change-data-capture (CDC) listeners.",
        icon: "RefreshCw"
      },
      {
        title: "Enterprise Log & Audit",
        description: "Audit every payload, review historical transaction trace logs, and set threshold alerts.",
        icon: "Activity"
      }
    ],
    benefits: [
      {
        title: "Shorter Setup Cycles",
        description: "Connect legacy ERP database schemas to modern SaaS applications with zero custom code templates.",
        metric: "75%"
      },
      {
        title: "System Sync SLA",
        description: "Achieve near zero latency event delivery rates with automatic retry queues.",
        metric: "99.99%"
      },
      {
        title: "Integration Outage Drops",
        description: "Proactively resolve API failures via automatic notification webhooks.",
        metric: "60%"
      }
    ],
    architecture: {
      title: "BrainConnect Integration Architecture",
      description: "An event-driven integration framework designed for scale, queue management, and transaction logging.",
      layers: [
        {
          name: "Ingestion & Queue Layer",
          nodes: [
            { name: "API Gateway", type: "gateway", description: "Ingests webhook calls with rate limit protection." },
            { name: "Kafka Queue Cluster", type: "core", description: "Guarantees ordering and durability of messages." }
          ]
        },
        {
          name: "Orchestration & Rules Engines",
          nodes: [
            { name: "Flow Engine", type: "core", description: "Parses and executes visual pipeline workflow trees." },
            { name: "Transformer Service", type: "service", description: "Performs JSON/XML/CSV payload mappings." }
          ]
        },
        {
          name: "State & Vault Storage",
          nodes: [
            { name: "Vault Store", type: "storage", description: "Stores API tokens and authorization certs securely." },
            { name: "State Cache (Redis)", type: "storage", description: "Caches run execution states and trace log snapshots." }
          ]
        }
      ]
    },
    integrations: ["RabbitMQ", "Kafka", "Zapier", "AWS EventBridge", "HashiCorp Vault", "Azure Service Bus"],
    icon: "network",
    href: "/products/brainconnect"
  }
];
