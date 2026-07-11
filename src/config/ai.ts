export interface AIChallenge {
  title: string;
  description: string;
  icon: string;
}

export interface BrainAIFeature {
  title: string;
  description: string;
  icon: string;
  bullets: string[];
}

export interface AIFunctionSolution {
  title: string;
  description: string;
  icon: string;
  useCases: string[];
}

export interface GenerativeAICapability {
  title: string;
  description: string;
  icon: string;
}

export interface AIProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface AISecurityCard {
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseAICard {
  title: string;
  description: string;
  icon: string;
}

/* ──────────────────────────────────────── Challenges ── */

export const aiChallenges: AIChallenge[] = [
  {
    title: "Data Overload",
    description: "Transform large, unstructured volumes of business data and document archives into clear actionable insights.",
    icon: "Database",
  },
  {
    title: "Manual Operations",
    description: "Automate repetitive, high-volume cognitive tasks to improve workforce productivity and decrease errors.",
    icon: "Cpu",
  },
  {
    title: "Slow Decision Making",
    description: "Enable real-time data analysis, predictive forecasting, and trend evaluation for rapid decision execution.",
    icon: "TrendingUp",
  },
  {
    title: "Customer Expectations",
    description: "Deliver personalized, natural language digital assistant experiences across customer touchpoints.",
    icon: "Users",
  },
  {
    title: "Disconnected Knowledge",
    description: "Create a single secure entry point to query organizational wikis, contract details, and system files.",
    icon: "Search",
  },
];

/* ──────────────────────────────────────── BrainAI Features ── */

export const brainAIFeatures: BrainAIFeature[] = [
  {
    title: "AI Business Assistant",
    description: "Natural language interface to coordinate scheduling, data entry, and info retrieval.",
    icon: "Sparkles",
    bullets: ["Corporate knowledge base assistant", "Dynamic natural language search", "Employee task assistant", "Multi-platform chatbot gateways"],
  },
  {
    title: "Generative AI Solutions",
    description: "Secure, local models custom-tuned on your business data to generate summaries and recommendations.",
    icon: "BrainCircuit",
    bullets: ["Context-aware reports summary", "Intelligent workflow suggestions", "Predictive email drafts generation", "Dynamic document assembly"],
  },
  {
    title: "Document Intelligence",
    description: "Ingest and process unstructured invoices, purchase orders, and legal agreements in seconds.",
    icon: "FileCheck",
    bullets: ["Dynamic OCR text capture", "Auto document classification", "Key-value pair data extraction", "Secure metadata extraction"],
  },
  {
    title: "Predictive Analytics",
    description: "Uncover hidden operational patterns and anticipate future supply and financial fluctuations.",
    icon: "ChartNoAxesCombined",
    bullets: ["Operational trend forecasting", "Continuous anomaly detection", "Financial risk evaluation metrics", "Automatic demand forecasting"],
  },
  {
    title: "AI Automation",
    description: "Automate system logic and workflow routing using trigger-based cognitive decisions.",
    icon: "GitBranch",
    bullets: ["Condition-based routing", "Automated email parsing and action", "Continuous validation pipelines", "Smart system sync"],
  },
];

/* ──────────────────────────────────────── Function Solutions ── */

export const aiFunctionSolutions: AIFunctionSolution[] = [
  {
    title: "Finance AI",
    description: "Incorporate intelligent forecasting models and risk analysis checks across all ledgers.",
    icon: "Landmark",
    useCases: ["Intelligent financial forecasting", "Proactive fraud indicator flags", "Automated financial summaries"],
  },
  {
    title: "Sales AI",
    description: "Optimize revenue pipelines with predictive lead scoring and customer relationship signals.",
    icon: "Handshake",
    useCases: ["Predictive customer lead scoring", "Client interaction analytics", "Revenue forecast accuracy model"],
  },
  {
    title: "Customer Service AI",
    description: "Deliver 24/7 client resolution channels with specialized conversational agents.",
    icon: "MessageSquareText",
    useCases: ["Conversational helper chatbots", "Intelligent support routing", "Real-time query summary generation"],
  },
  {
    title: "Operations AI",
    description: "Improve processing capacity, logistics timing, and material usage forecasting.",
    icon: "Factory",
    useCases: ["Dynamic demand forecasting", "Resource availability schedule model", "Operational workflow optimization"],
  },
  {
    title: "HR AI",
    description: "Streamline talent acquisition timelines and analyze workforce distribution analytics.",
    icon: "Users",
    useCases: ["Applicant resume screening assistance", "Workforce distribution analytics", "Employee feedback trend analysis"],
  },
];

/* ──────────────────────────────────────── Generative AI ── */

export const generativeAICapabilities: GenerativeAICapability[] = [
  {
    title: "AI Knowledge Assistant",
    description: "Secure semantic search to instantly parse, locate, and summarize internal wiki resources and data files.",
    icon: "BookOpen",
  },
  {
    title: "Document AI",
    description: "Automated analysis of contract compliance rules, liability clauses, and complex billing documents.",
    icon: "FileText",
  },
  {
    title: "AI Copilot",
    description: "Inline assistance tools that make smart operational recommendations directly inside ERP workflow modules.",
    icon: "Compass",
  },
  {
    title: "Custom AI Agents",
    description: "Deploy task-oriented agents that coordinate multi-step background data synchronizations automatically.",
    icon: "Workflow",
  },
];

/* ──────────────────────────────────────── Integration Options ── */

export const aiIntegrationOptions = [
  { name: "BrainERP Core", description: "Operational sync" },
  { name: "BrainCRM Pipeline", description: "Lead scoring" },
  { name: "BrainConnect iPaaS", description: "Workflow triggers" },
  { name: "Microsoft Dynamics", description: "Cloud synchronization" },
  { name: "Enterprise Databases", description: "SQL/NoSQL ingestion" },
  { name: "Cloud Platforms", description: "Azure/AWS endpoints" },
  { name: "Custom APIs & Hubs", description: "Webhook data loops" },
];

/* ──────────────────────────────────────── Process Timeline ── */

export const aiProcessSteps: AIProcessStep[] = [
  {
    number: "01",
    title: "AI Assessment",
    description: "Evaluate your business workflows to map out high-ROI practical automation opportunities.",
  },
  {
    number: "02",
    title: "Data Analysis",
    description: "Audit existing database endpoints, data quality standards, and access credentials.",
  },
  {
    number: "03",
    title: "AI Strategy",
    description: "Design secure solution architectures, data pipelines, and target model configurations.",
  },
  {
    number: "04",
    title: "Prototype Development",
    description: "Build a sandbox prototype to validate AI performance, accuracy, and system integration.",
  },
  {
    number: "05",
    title: "Enterprise Deployment",
    description: "Deploy production-grade, secure models inside hybrid-cloud or private network setups.",
  },
  {
    number: "06",
    title: "Model Optimization",
    description: "Regularly monitor telemetry indicators to fine-tune weighting, prompt layers, and accuracy.",
  },
];

/* ──────────────────────────────────────── Security ── */

export const aiSecurityCards: AISecurityCard[] = [
  {
    title: "Strict Data Privacy",
    description: "Models do not utilize your proprietary training data or inputs to train public networks.",
    icon: "ShieldAlert",
  },
  {
    title: "Secure AI Architecture",
    description: "Fully compliant with enterprise-grade data access controls, audit trail logging, and encryption standard.",
    icon: "Lock",
  },
  {
    title: "Human-in-the-Loop Controls",
    description: "Designed to recommend decisions and generate insights, keeping humans in final approval authority.",
    icon: "UserCheck",
  },
  {
    title: "Scalable Deployment",
    description: "Robust execution loops running on high-throughput private endpoints built to adjust to load shifts.",
    icon: "Server",
  },
];

/* ──────────────────────────────────────── Why Choose ── */

export const whyChooseAI: WhyChooseAICard[] = [
  {
    title: "Business-Focused AI",
    description: "We deploy practical AI targeted to improve operational metrics, decrease costs, and increase automation rates.",
    icon: "Target",
  },
  {
    title: "Enterprise Software Expertise",
    description: "Specialist history across back-office ERP platforms, CRM systems, API synchronization middleware, and cloud transformation.",
    icon: "Briefcase",
  },
  {
    title: "Custom Model Development",
    description: "We build, fine-tune, and containerize models specifically designed for unique industry contexts.",
    icon: "Code2",
  },
  {
    title: "End-to-End Delivery",
    description: "Coordinate the complete timeline from early compliance strategy through integration, launch, and monthly updates.",
    icon: "Activity",
  },
];

/* ──────────────────────────────────────── Hero Content ── */

export const aiHeroContent = {
  badge: "Artificial Intelligence",
  headline: "Unlock the Power of Enterprise AI With BrainAI",
  subheadline: "Brainzon delivers secure and scalable AI solutions that automate processes, enhance customer experiences, and help organizations make smarter decisions.",
  primaryCta: "Explore AI Solutions",
  secondaryCta: "Talk to an AI Expert",
};

/* ──────────────────────────────────────── Final CTA ── */

export const aiFinalCta = {
  headline: "Ready to Build an Intelligent Enterprise?",
  description: "Discuss your AI transformation goals with Brainzon experts.",
  primaryButton: "Book AI Consultation",
  secondaryButton: "Contact AI Experts",
};
