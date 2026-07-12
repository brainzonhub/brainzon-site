export interface Solution {
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  icon: string;
  href: string;
}

export const solutionsConfig: Solution[] = [
  {
    title: "ERP Solutions",
    slug: "erp",
    description: "Unify business processes and back-office operations into a single intelligent platform.",
    benefits: [
      "Process efficiency improvement",
      "Centralized organizational database",
      "Unified regulatory compliance and audit trails"
    ],
    icon: "building-2",
    href: "/solutions/erp"
  },
  {
    title: "CRM Solutions",
    slug: "crm",
    description: "Scale sales, marketing, and client support workflows with actionable intelligence.",
    benefits: [
      "Higher sales conversion rates",
      "Automated outreach campaigns",
      "Shorter response times and personalized service"
    ],
    icon: "heart-handshake",
    href: "/solutions/crm"
  },
  {
    title: "AI Transformation Solutions",
    slug: "ai",
    description: "Incorporate specialized neural models and LLMs to solve complex automation tasks.",
    benefits: [
      "Automation of repetitive cognitive tasks",
      "Enhanced decision analytics and forecasting",
      "Personalized chat, search, and generation utilities"
    ],
    icon: "sparkles",
    href: "/solutions/ai"
  },
  {
    title: "Integration Solutions",
    slug: "integration",
    description: "Connect legacy core systems, SaaS tools, and cloud services in a unified network.",
    benefits: [
      "Elimination of organizational data silos",
      "Zero-downtime message queuing",
      "Scalable microservices communication"
    ],
    icon: "git-branch",
    href: "/solutions/integration"
  }
];

// Solutions Architecture Page Custom Types and Configurations
export interface ArchLayer {
  number: string;
  title: string;
  description: string;
  components: string[];
}

export const architectureLayers: ArchLayer[] = [
  {
    number: "01",
    title: "Experience Layer",
    description: "Multi-channel user interfaces built for modern digital engagement.",
    components: ["Web Applications", "Mobile Applications", "Customer Portals", "Employee Portals"]
  },
  {
    number: "02",
    title: "Business Application Layer",
    description: "Intelligent business workflow and operational execution systems.",
    components: ["BrainERP", "BrainCRM", "Custom Enterprise Applications"]
  },
  {
    number: "03",
    title: "Intelligence Layer",
    description: "Cognitive model reasoning and analytics pipeline layers.",
    components: ["BrainAI Models", "Predictive Analytics", "Workflow Automation", "Machine Learning Services"]
  },
  {
    number: "04",
    title: "Integration Layer",
    description: "Low-latency communications fabric connecting applications and files.",
    components: ["BrainConnect Fabric", "Enterprise Service Bus", "API Gateway", "Data Sync Services"]
  },
  {
    number: "05",
    title: "Infrastructure Layer",
    description: "Highly secure, multi-region cloud runtime architectures.",
    components: ["Microsoft Azure", "Amazon Web Services (AWS)", "Google Cloud", "Secure Database Engines"]
  }
];

export interface TransformationCard {
  title: string;
  tech: string;
  capabilities: string[];
  description: string;
  color: "primary" | "secondary" | "accent";
}

export const transformationCards: TransformationCard[] = [
  {
    title: "Operations Transformation",
    tech: "BrainERP",
    capabilities: ["Finance & Treasury", "Inventory Control", "Smart Procurement", "Discrete Manufacturing", "Workforce HR"],
    description: "Consolidate and streamline corporate resources, ledger items, and logistics pipelines into one unified execution model.",
    color: "primary"
  },
  {
    title: "Customer Transformation",
    tech: "BrainCRM",
    capabilities: ["Customer 360 Telemetry", "Sales Pipeline Automation", "Outreach Schedules", "Customer Support Center"],
    description: "Modernize sales funnels, support ticketing, and outbound communications into a unified relational channel.",
    color: "secondary"
  },
  {
    title: "Intelligence Transformation",
    tech: "BrainAI",
    capabilities: ["Conversational Assistants", "Document Intelligence", "Predictive Forecasting", "Cognitive Automations"],
    description: "Embed localized Large Language Models and custom machine learning inference endpoints straight into core systems.",
    color: "accent"
  },
  {
    title: "Connectivity Transformation",
    tech: "BrainConnect",
    capabilities: ["Low-Latency API Integrations", "Workflow Event Brokers", "Real-Time Telemetry Sync", "File Pipeline Queues"],
    description: "Connect multi-source databases, legacy codebases, and partner software endpoints with a zero-downtime messaging framework.",
    color: "primary"
  },
  {
    title: "Modernization Transformation",
    tech: "Modern Cloud Architecture",
    capabilities: ["Monolithic Refactoring", "Microservices Architecture", "Serverless Architectures", "High-Availability DB Migrations"],
    description: "Transition aged legacy applications into containerized cloud-native microservices platforms without operational pauses.",
    color: "secondary"
  }
];

export interface ArchScenario {
  id: string;
  title: string;
  description: string;
  nodes: { label: string; role: string; highlight?: boolean }[];
  blueprint: string;
}

export const architectureScenarios: ArchScenario[] = [
  {
    id: "erp-pattern",
    title: "Modern ERP Architecture",
    description: "A centralized operation engine linking localized front-ends, pipeline databases, and BI reporting tools.",
    nodes: [
      { label: "Core Database", role: "PostgreSQL High Availability", highlight: true },
      { label: "BrainERP", role: "Operations Layer", highlight: true },
      { label: "CRM Sync Interface", role: "BrainConnect Bridge" },
      { label: "Ledger Pipeline", role: "Real-time Audits" },
      { label: "Analytics Panel", role: "Business Intelligence" }
    ],
    blueprint: "Establishes a single source of truth across operations. Eliminates manual reporting steps and secures transactions."
  },
  {
    id: "ai-pattern",
    title: "AI-Powered Enterprise",
    description: "Secure data extraction pipeline feeding a sandboxed model system for automation and analysis.",
    nodes: [
      { label: "Telemetry Database", role: "Vector Storage", highlight: true },
      { label: "BrainAI Agent", role: "Semantic Parser", highlight: true },
      { label: "ERP/CRM Data Sync", role: "Ingestion Pipeline" },
      { label: "Prompt Guardrail", role: "Security Layer" },
      { label: "User Client Portal", role: "UI Interaction" }
    ],
    blueprint: "Embeds natural language document reasoning directly inside enterprise operations safely, avoiding public API exposures."
  },
  {
    id: "connect-pattern",
    title: "Connected Enterprise",
    description: "A distributed microservices map connected by a message queue bus with dynamic API routing.",
    nodes: [
      { label: "Event Message Bus", role: "RabbitMQ/Kafka Broker", highlight: true },
      { label: "API Gateway", role: "Reverse Proxy & Auth", highlight: true },
      { label: "BrainConnect Engine", role: "Telemetry Routing" },
      { label: "Government System API", role: "External Endpoint" },
      { label: "Partner SaaS ERP", role: "System Endpoint" }
    ],
    blueprint: "Eliminates hardcoded point-to-point connections. If one service encounters an issue, messages queue up without causing fatal system failures."
  },
  {
    id: "migration-pattern",
    title: "Legacy Modernization",
    description: "Re-platforming monolothic database legacy software into containerized cloud modules.",
    nodes: [
      { label: "Legacy Database", role: "On-Prem SQL (Decom)", highlight: false },
      { label: "Strangler Gateway", role: "Routing Traffic Proxy", highlight: true },
      { label: "Containerized App", role: "Docker/Kubernetes Pods", highlight: true },
      { label: "Amazon Web Services", role: "Target Cloud Platform" },
      { label: "Observability Stack", role: "Grafana & Telemetry" }
    ],
    blueprint: "Applies the Strangler Fig pattern, routing specific service traffic from legacy systems to containerized cloud APIs incrementally."
  }
];

export interface IndustryScenario {
  title: string;
  description: string;
  layers: { name: string; components: string[] }[];
}

export const industryScenarios: IndustryScenario[] = [
  {
    title: "Manufacturing",
    description: "Real-time production automation linking shopfloor machinery telemetry, inventory levels, and logistics pipelines.",
    layers: [
      { name: "Execution", components: ["BrainERP Manufacturing", "MES Hardware Integrations", "PLC Telemetry Ingest"] },
      { name: "Intelligence", components: ["Predictive Maintenance Models", "Supply Chain Analytics"] },
      { name: "Integration", components: ["BrainConnect Event Bus", "Warehouse RFID Scanner Hub"] }
    ]
  },
  {
    title: "Retail & eCommerce",
    description: "High-volume transactional system connecting online storefronts, POS terminals, and backend warehouses.",
    layers: [
      { name: "Experience", components: ["Storefront Web/Mobile", "POS Terminal Software", "Partner Portals"] },
      { name: "Business Logic", components: ["BrainCRM Loyalty System", "BrainERP Inventory Sync"] },
      { name: "Payments", components: ["Stripe/Adyen API Gateways", "Dynamic Tax Engine Sync"] }
    ]
  },
  {
    title: "Healthcare",
    description: "HIPAA-compliant, high-availability architecture linking Patient Records (EHR) and operations scheduling.",
    layers: [
      { name: "Security", components: ["End-to-End Database Encryption", "Audited OAuth2 Access Controls"] },
      { name: "Applications", components: ["EHR Sync Gateways", "BrainERP Hospital Operations", "Staff Scheduling Engine"] },
      { name: "Analysis", components: ["BrainAI Document Telemetry", "Patient Flow Predictor Models"] }
    ]
  },
  {
    title: "Hospitality & Travel",
    description: "Resilient reservation flow linking multi-channel booking systems, property operations, and customer profiles.",
    layers: [
      { name: "Booking Channels", components: ["GDS Booking APIs", "Direct Web Reservation Engine", "Mobile Booking App"] },
      { name: "Operations", components: ["Property Management System (PMS)", "BrainERP Procurement Ledger"] },
      { name: "Growth", components: ["BrainCRM Customer 360 Profile", "Automated Rewards Scheduler"] }
    ]
  },
  {
    title: "Logistics & Fleet",
    description: "Dynamic routing and vehicle allocation tracking connected with freight scheduling and resource ledgers.",
    layers: [
      { name: "Fleet Telemetry", components: ["GPS Tracker Streams", "Route Optimizer Core", "Driver Mobile Clients"] },
      { name: "Backoffice", components: ["BrainERP Logistics Ledger", "Fleet Invoicing Automation"] },
      { name: "Integrations", components: ["BrainConnect Event Bus", "Government Customs APIs"] }
    ]
  }
];

export interface TechItem {
  category: string;
  items: string[];
}

export const technologyStack: TechItem[] = [
  { category: "Frontend Presentation", items: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend Microservices", items: ["Node.js", "Python (FastAPI)", ".NET Core", "Go (low-latency brokers)"] },
  { category: "Database & Vector", items: ["PostgreSQL (HA Cluster)", "Microsoft SQL Server", "Redis Cache", "pgvector (AI Indexes)"] },
  { category: "Cloud Infrastructure", items: ["Microsoft Azure", "Amazon Web Services (AWS)", "Docker & Kubernetes", "Terraform IaC"] },
  { category: "Enterprise Integration", items: ["BrainConnect ESB", "RESTful / GraphQL APIs", "Apache Kafka", "gRPC Communication"] }
];

export interface TimelineStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const timelineJourney: TimelineStep[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Enterprise Assessment",
    description: "Our solutions architects analyze your current software stack, identify silos, and document data pipelines and bottlenecks."
  },
  {
    number: "02",
    title: "Architect",
    subtitle: "Ecosystem Design",
    description: "We compile blueprint layouts detailing target data models, API integrations, container specs, and AI security parameters."
  },
  {
    number: "03",
    title: "Transform",
    subtitle: "Controlled Implementation",
    description: "We deploy ERP/CRM platforms, build customized API brokers, set up cloud environments, and migrate data databases in increments."
  },
  {
    number: "04",
    title: "Optimize",
    subtitle: "Continuous Performance",
    description: "We monitor telemetry, optimize query performance, expand automation paths, and iterate architectural configurations."
  }
];

export interface WhyPoint {
  title: string;
  description: string;
}

export const whyBrainzonPoints: WhyPoint[] = [
  {
    title: "Business + Technology Alignment",
    description: "We don't build technology for technology's sake. Every database scheme, integration path, and microservice is designed around clear corporate KPI outputs."
  },
  {
    title: "Enterprise-Grade Engineering",
    description: "All configurations are built using strict TypeScript, stateless REST APIs, highly available databases, and containerized runtimes built for global operations."
  },
  {
    title: "Built Future-Ready",
    description: "Our digital systems are prepared out-of-the-box for cognitive AI models, semantic vectors, high-volume event streaming, and serverless scale."
  },
  {
    title: "Complete Transformative Partner",
    description: "We guide you along the entire roadmap—from initial discovery workshops and database designs to implementation, support, and managed upgrades."
  }
];
