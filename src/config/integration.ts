export interface IntegrationChallenge {
  title: string;
  description: string;
  icon: string;
}

export interface BrainConnectFeature {
  title: string;
  description: string;
  icon: string;
  bullets: string[];
}

export interface IntegrationService {
  title: string;
  description: string;
  icon: string;
  targets: string[];
  features: string[];
}

export interface IntegrationUseCase {
  industry: string;
  icon: string;
  description: string;
  challenge: string;
  solution: string;
  benefit: string;
}

export interface IntegrationProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SecurityCard {
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseIntegrationCard {
  title: string;
  description: string;
  icon: string;
}

/* ──────────────────────────────────────── Challenges ── */

export const integrationChallenges: IntegrationChallenge[] = [
  {
    title: "Disconnected Applications",
    description: "Eliminate isolated systems and create a unified, real-time technology ecosystem across departments.",
    icon: "Unplug",
  },
  {
    title: "Manual Data Transfer",
    description: "Reduce repetitive copy-paste work and human errors through automated pipeline workflows.",
    icon: "Workflow",
  },
  {
    title: "Data Inconsistency",
    description: "Maintain accurate, synchronized, and audit-compliant business information across every database.",
    icon: "FileCheck",
  },
  {
    title: "Legacy Limitations",
    description: "Extend the operational lifecycle and value of existing core applications through modern APIs.",
    icon: "RefreshCw",
  },
  {
    title: "Slow Business Processes",
    description: "Improve response times and overall operational speed through trigger-based event automation.",
    icon: "Zap",
  },
];

/* ──────────────────────────────────────── BrainConnect Showcase ── */

export const brainConnectFeatures: BrainConnectFeature[] = [
  {
    title: "API Management",
    description: "Create, secure, and manage enterprise interfaces with a high-resilience gateway.",
    icon: "ShieldAlert",
    bullets: ["REST & SOAP API Integration", "Secure API Gateway controls", "Third-party developer portal", "Rate limiting and token checks"],
  },
  {
    title: "Application Integration",
    description: "Connect back-office, front-office, and client-facing touchpoints directly.",
    icon: "LayoutGrid",
    bullets: ["Core ERP integration modules", "CRM pipeline connections", "eCommerce inventory synchronization", "Cloud application endpoints"],
  },
  {
    title: "Data Synchronization",
    description: "Keep transactional and operational datasets in sync with low-latency mapping.",
    icon: "RefreshCcw",
    bullets: ["Real-time data exchange", "Master data management (MDM)", "Automated database sync", "Bidirectional pipeline routing"],
  },
  {
    title: "Workflow Automation",
    description: "Design trigger-based steps to run operations automatically without coding.",
    icon: "GitBranch",
    bullets: ["Multi-system process automation", "Dynamic business rules", "Event-driven workflow engines", "Condition-based branching"],
  },
  {
    title: "Monitoring & Analytics",
    description: "Track integrations health and message rates through visual dashboards.",
    icon: "TrendingUp",
    bullets: ["Real-time message monitoring", "Proactive error tracking", "Channel performance metrics", "Audit trail access logs"],
  },
];

/* ──────────────────────────────────────── Services ── */

export const integrationServices: IntegrationService[] = [
  {
    title: "ERP Integration",
    description: "Connect core ERP platform modules with CRM, supply chain, finance, and online storefronts.",
    icon: "Database",
    targets: ["BrainERP", "Odoo", "Microsoft Dynamics", "ERPNext"],
    features: ["Stock synchronization", "Order pipeline mapping", "Automated billing entry"],
  },
  {
    title: "CRM Integration",
    description: "Sync customer information and sales metrics directly into back-office databases.",
    icon: "Users",
    targets: ["BrainCRM", "Salesforce", "HubSpot", "Custom CRMs"],
    features: ["Contact sync", "Lead-to-order automation", "Customer 360 alignment"],
  },
  {
    title: "eCommerce Integration",
    description: "Unify digital stores, logistics channels, payment processors, and inventory engines.",
    icon: "ShoppingCart",
    targets: ["Shopify", "WooCommerce", "Stripe", "Custom checkouts"],
    features: ["Inventory updates", "Payment reconciliations", "Fulfillment updates"],
  },
  {
    title: "Legacy Modernization Integration",
    description: "Expose mainframe and legacy custom systems through secure cloud API connectors.",
    icon: "Cpu",
    targets: ["Legacy databases", "Mainframes", "On-prem servers"],
    features: ["Middleware routing", "API encapsulation", "Hybrid cloud secure tunnel"],
  },
  {
    title: "Custom API Development",
    description: "Build secure, reliable, and standardized connectors tailored to your business rules.",
    icon: "Code2",
    targets: ["REST APIs", "GraphQL web services", "Webhooks"],
    features: ["OAuth2 security", "High-throughput JSON payloads", "Detailed schema validation"],
  },
];

/* ──────────────────────────────────────── Use Cases ── */

export const integrationUseCases: IntegrationUseCase[] = [
  {
    industry: "Manufacturing",
    icon: "Factory",
    description: "Connected Shop-floor & Logistics",
    challenge: "Shop floor machinery IoT signals and warehouse inventories are disconnected from ERP scheduling.",
    solution: "Integrate IoT telemetry pipelines directly with BrainERP material requirements planning (MRP).",
    benefit: "Automatic production planning adjustments based on inventory rates and machine status.",
  },
  {
    industry: "Retail",
    icon: "Store",
    description: "Omnichannel Order Orchestration",
    challenge: "Online orders and in-store inventory levels are out of sync, leading to backorders.",
    solution: "Deploy BrainConnect to unify Shopify, POS terminals, ERP ledger, and warehouse databases.",
    benefit: "100% accurate real-time inventory count and automated dispatch routing.",
  },
  {
    industry: "Healthcare",
    icon: "HeartPulse",
    description: "Secure Patient & Inventory Sync",
    challenge: "Medical inventory usage is tracked manually and patient files lack integration with procurement.",
    solution: "Connect EMR databases, clinical equipment stock controls, and supply chain ERP modules securely.",
    benefit: "Automated replenishment of medical supplies based on patient procedure volumes.",
  },
  {
    industry: "Logistics",
    icon: "Truck",
    description: "Dynamic Route & Asset Management",
    challenge: "Fleet vehicle tracking coordinates and customer delivery notices operate on distinct systems.",
    solution: "Bridge GPS routing streams, customer CRM pipelines, and billing systems in one workflow.",
    benefit: "Real-time delivery status updates and automated shipping charge triggers.",
  },
  {
    industry: "Hospitality",
    icon: "Hotel",
    description: "Unified Guest Reservation Flow",
    challenge: "Booking portals, check-in desks, and billing ledgers operate on disconnected databases.",
    solution: "Connect Reservation Channels, Property Management Systems (PMS), and CRM engines.",
    benefit: "Automated billing reconciliations and instant loyalty tier upgrades upon check-in.",
  },
];

/* ──────────────────────────────────────── Process Timeline ── */

export const integrationProcessSteps: IntegrationProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description: "Analyze existing systems, database schemas, API capabilities, and transformation rules.",
  },
  {
    number: "02",
    title: "Architecture Design",
    description: "Design secure data flows, messaging queues, and system mapping diagrams.",
  },
  {
    number: "03",
    title: "Development & Config",
    description: "Configure BrainConnect connectors, build APIs, and construct event workflows.",
  },
  {
    number: "04",
    title: "Testing & Validation",
    description: "Validate connection reliability, load performance, error handling, and security policies.",
  },
  {
    number: "05",
    title: "Launch & Deployment",
    description: "Safely deploy the integration streams in hybrid or cloud production environments.",
  },
  {
    number: "06",
    title: "Monitoring & Tuning",
    description: "Provide continuous monitoring, performance tuning, and operational optimizations.",
  },
];

/* ──────────────────────────────────────── Security ── */

export const securityCards: SecurityCard[] = [
  {
    title: "Secure Data Exchange",
    description: "TLS 1.3 encryption in transit, AES-256 at rest, and secure HTTPS tunnel routing.",
    icon: "Shield",
  },
  {
    title: "Identity & Access Control",
    description: "OAuth2 authentication, JWT access tokens, role-based controls, and IP whitelist policies.",
    icon: "Key",
  },
  {
    title: "Proactive Monitoring",
    description: "Continuous health tracking, message delivery rate meters, and instant alert hooks.",
    icon: "Activity",
  },
  {
    title: "High-Resilience Scale",
    description: "Clustered deployment engines, message auto-retry queues, and failover pathways.",
    icon: "Layers",
  },
];

/* ──────────────────────────────────────── Why Choose ── */

export const whyChooseIntegration: WhyChooseIntegrationCard[] = [
  {
    title: "Integration Expertise",
    description: "Engineers with deep understanding of ERP, CRM, databases, legacy architectures, and modern cloud webhooks.",
    icon: "Award",
  },
  {
    title: "Platform-First Approach",
    description: "Deliver modular, reusable enterprise connectors that reduce future implementation timelines and costs.",
    icon: "Boxes",
  },
  {
    title: "Business-Led Execution",
    description: "We design integrations around business outcomes, operational bottlenecks, and performance targets.",
    icon: "Briefcase",
  },
  {
    title: "Modern API Architecture",
    description: "Cloud-native, event-driven pipelines designed for high throughput, scalability, and zero message drop.",
    icon: "Network",
  },
  {
    title: "Long-Term Advisory",
    description: "Dedicated support SLA, dashboard metrics monitoring, and regular scaling adjustments.",
    icon: "ShieldCheck",
  },
];

/* ──────────────────────────────────────── Hero Content ── */

export const integrationHeroContent = {
  badge: "Integration Ecosystem",
  headline: "Build a Connected Digital Enterprise With Intelligent Integration",
  subheadline: "Brainzon helps organizations connect ERP, CRM, eCommerce, legacy applications, and cloud systems through secure integrations, automated workflows, and real-time data synchronization.",
  primaryCta: "Explore Integration Solutions",
  secondaryCta: "Talk to an Integration Expert",
};

/* ──────────────────────────────────────── Final CTA ── */

export const integrationFinalCta = {
  headline: "Ready to Connect Your Digital Ecosystem?",
  description: "Talk with Brainzon integration experts and discover how to automate your business processes.",
  primaryButton: "Book Integration Consultation",
  secondaryButton: "Contact Experts",
};
