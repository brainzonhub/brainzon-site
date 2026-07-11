export interface CRMChallenge {
  title: string;
  description: string;
  icon: string;
}

export interface BrainCRMFeature {
  title: string;
  description: string;
  icon: string;
  bullets: string[];
}

export interface CRMAiCapability {
  title: string;
  description: string;
  icon: string;
}

export interface CRMFunctionFeature {
  title: string;
  description: string;
  icon: string;
  useCases: string[];
}

export interface CustomerJourneyStep {
  number: string;
  title: string;
  description: string;
}

export interface CRMProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface CRMIndustry {
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseCRMCard {
  title: string;
  description: string;
  icon: string;
}

/* ──────────────────────────────────────── Challenges ── */

export const crmChallenges: CRMChallenge[] = [
  {
    title: "Disconnected Customer Data",
    description: "Bring fragmented information together from spreadsheets, email inboxes, and notes into one source of truth.",
    icon: "Database",
  },
  {
    title: "Manual Sales Processes",
    description: "Automate lead routing, follow-up notifications, and pipeline entries to save operational time.",
    icon: "Workflow",
  },
  {
    title: "Limited Customer Visibility",
    description: "Map and analyze every client touchpoint across support, billing, sales, and marketing streams in real-time.",
    icon: "Eye",
  },
  {
    title: "Poor Customer Engagement",
    description: "Eliminate generic blasts and deliver personalized communication sequences at every stage of the lifecycle.",
    icon: "Users",
  },
  {
    title: "Unpredictable Sales Growth",
    description: "Leverage smart forecasting reports and pipeline visualizations to plan your sales team targets.",
    icon: "TrendingUp",
  },
];

/* ──────────────────────────────────────── BrainCRM Features ── */

export const brainCRMFeatures: BrainCRMFeature[] = [
  {
    title: "Customer 360",
    description: "Maintain a complete history of customer profiles, interactions, and metrics.",
    icon: "Users",
    bullets: ["Unified customer profiles", "Detailed interaction history", "Cross-departmental insights", "Dynamic relationship timeline"],
  },
  {
    title: "Sales Management",
    description: "Coordinate opportunity pipelines and lead workflows from raw contact to conversion.",
    icon: "TrendingUp",
    bullets: ["Lead qualification workflows", "Visual pipeline tracking", "Automatic sales reminders", "Accurate revenue forecasting"],
  },
  {
    title: "Marketing Automation",
    description: "Deploy personalized communication sequences based on customer actions.",
    icon: "Send",
    bullets: ["Automated email campaigns", "Dynamic customer segmentation", "Landing page trackers", "Performance ROI metrics"],
  },
  {
    title: "Customer Support",
    description: "Track support ticket categories, agent queues, and communication histories.",
    icon: "LifeBuoy",
    bullets: ["Support ticket mapping", "Automated service routing", "SLA threshold tracking", "Support channel analysis"],
  },
  {
    title: "CRM Analytics",
    description: "Turn sales and relationship datasets into clean, actionable dashboards.",
    icon: "ChartNoAxesCombined",
    bullets: ["Custom sales dashboards", "Detailed rep performance logs", "Customer retention indicators", "Revenue conversion reports"],
  },
];

/* ──────────────────────────────────────── AI Capabilities ── */

export const crmAiCapabilities: CRMAiCapability[] = [
  {
    title: "AI Lead Scoring",
    description: "Automatically evaluate and score incoming leads based on engagement levels and historic wins.",
    icon: "Sparkles",
  },
  {
    title: "Customer Prediction",
    description: "Forecast purchase frequencies, model customer lifetime value (LTV), and flag churn indicators.",
    icon: "Cpu",
  },
  {
    title: "Sales Recommendations",
    description: "Provide recommendations for the next best action and email copy suggestions directly to sales representatives.",
    icon: "Compass",
  },
  {
    title: "Automated Insights",
    description: "Uncover relationship signals, search queries, and purchase trends across large client datasets.",
    icon: "Search",
  },
];

/* ──────────────────────────────────────── Integration Options ── */

export const crmIntegrationOptions = [
  { name: "BrainERP Operations", description: "Bridges customer deals with billing, warehouses, and fulfillment modules." },
  { name: "BrainConnect iPaaS", description: "Configures webhook triggers, API syncs, and event-driven automation." },
  { name: "External Databases", description: "Connects securely with legacy custom SQL databases or cloud datastores." },
];

/* ──────────────────────────────────────── Function Features ── */

export const crmFunctionFeatures: CRMFunctionFeature[] = [
  {
    title: "Sales Teams",
    description: "Provide the tools required to track deals, communicate, and automate admin tasks.",
    icon: "Target",
    useCases: ["Visual deal pipeline management", "Automated task and call notifications", "Mobile-ready CRM dashboard interface"],
  },
  {
    title: "Marketing Teams",
    description: "Segment and target customer cohorts based on real-time activity and purchase histories.",
    icon: "Megaphone",
    useCases: ["Dynamic cohort segmentation", "Personalized campaign sequencing", "Integrated web traffic trackers"],
  },
  {
    title: "Customer Service Teams",
    description: "Manage client tickets, resolve inquiries, and coordinate team SLAs.",
    icon: "MessageSquare",
    useCases: ["Multi-channel support tickets", "Automatic client routing logic", "SLA performance monitoring graphs"],
  },
  {
    title: "Management Teams",
    description: "Monitor organizational performance, sales velocity, and client retention patterns.",
    icon: "Presentation",
    useCases: ["Enterprise performance dashboards", "Monthly revenue analytics reporting", "Customer lifetime value forecasting"],
  },
];

/* ──────────────────────────────────────── Journey ── */

export const customerJourneySteps: CustomerJourneyStep[] = [
  {
    number: "01",
    title: "Lead Capture",
    description: "Automatically log incoming customer details from contact forms, chat requests, and campaigns.",
  },
  {
    number: "02",
    title: "Qualification",
    description: "Score and distribute leads to appropriate sales representatives based on business requirements.",
  },
  {
    number: "03",
    title: "Engagement",
    description: "Initiate personalized follow-ups, product demos, and proposal sequences.",
  },
  {
    number: "04",
    title: "Conversion",
    description: "Secure deal approvals, synchronize contracts, and trigger onboarding pipelines.",
  },
  {
    number: "05",
    title: "Retention",
    description: "Deliver continuous updates, target campaigns, and provide proactive support check-ins.",
  },
];

/* ──────────────────────────────────────── Process Timeline ── */

export const crmProcessSteps: CRMProcessStep[] = [
  {
    number: "01",
    title: "Business Discovery",
    description: "Analyze your sales cycles, support workflows, and target pipeline metrics.",
  },
  {
    number: "02",
    title: "CRM Strategy",
    description: "Formulate database mapping guidelines, integration specifications, and dashboard targets.",
  },
  {
    number: "03",
    title: "Configuration",
    description: "Customize fields, build automation rules, set up templates, and customize user permissions.",
  },
  {
    number: "04",
    title: "Data Migration",
    description: "Clean, translate, and migrate existing customer data securely from legacy tools.",
  },
  {
    number: "05",
    title: "Training & Deployment",
    description: "Conduct training sessions and safely roll out the platform globally.",
  },
  {
    number: "06",
    title: "Optimization",
    description: "Review system usage records and execute continuous updates to workflows and reports.",
  },
];

/* ──────────────────────────────────────── Industries ── */

export const crmIndustries: CRMIndustry[] = [
  {
    title: "Retail",
    description: "Omnichannel customer engagement, loyalty point integrations, and checkout campaign sync.",
    icon: "Store",
  },
  {
    title: "Healthcare",
    description: "HIPAA-compliant patient communications, appointment setups, and service alerts.",
    icon: "HeartPulse",
  },
  {
    title: "Hospitality",
    description: "Manage guest stays, reservation histories, food preferences, and feedback profiles.",
    icon: "Hotel",
  },
  {
    title: "Manufacturing",
    description: "dealer, vendor, and wholesale pipeline distribution management.",
    icon: "Factory",
  },
  {
    title: "Financial Services",
    description: "Coordinate client lifecycles, portfolio logs, and support interactions securely.",
    icon: "Landmark",
  },
  {
    title: "B2B Enterprises",
    description: "Complex account mapping, multi-stage sales tracking, and team task queues.",
    icon: "Briefcase",
  },
];

/* ──────────────────────────────────────── Why Choose ── */

export const whyChooseCRM: WhyChooseCRMCard[] = [
  {
    title: "Customer-Centric Focus",
    description: "We align platform configurations around user workflows and customer relationship outcomes.",
    icon: "Heart",
  },
  {
    title: "Enterprise Architecture",
    description: "Secure, reliable, and compliant configurations built to scale dynamically with record expansions.",
    icon: "ShieldCheck",
  },
  {
    title: "iPaaS & ERP Integration",
    description: "Deep expertise linking client-facing pipelines directly to inventory, billing, and ERP databases.",
    icon: "Network",
  },
  {
    title: "AI-Powered Strategy",
    description: "Configure predictive capabilities, automated scores, and smart prompts to help sales teams.",
    icon: "BrainCircuit",
  },
  {
    title: "Continuous Partnership",
    description: "Regular check-ins, custom reporting tweaks, training sessions, and performance improvements.",
    icon: "Handshake",
  },
];

/* ──────────────────────────────────────── Hero Content ── */

export const crmHeroContent = {
  badge: "Customer Intelligence",
  headline: "Build Smarter Customer Relationships With BrainCRM",
  subheadline: "Brainzon helps organizations manage customers, automate sales processes, personalize engagement, and unlock actionable insights through intelligent CRM technology.",
  primaryCta: "Explore CRM Solutions",
  secondaryCta: "Book CRM Consultation",
};

/* ──────────────────────────────────────── Final CTA ── */

export const crmFinalCta = {
  headline: "Ready to Build Stronger Customer Relationships?",
  description: "Talk with Brainzon CRM experts and discover how intelligent CRM can accelerate your business growth.",
  primaryButton: "Book CRM Consultation",
  secondaryButton: "Contact Experts",
};
