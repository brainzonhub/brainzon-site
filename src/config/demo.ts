// Centralized data configuration for the Book a Demo page

export interface SolutionOption {
  id: string;
  label: string;
  icon: string;
}

export interface CompanySizeOption {
  value: string;
  label: string;
}

export interface CurrentSystemOption {
  value: string;
  label: string;
}

export interface DemoBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
}

export interface TrustMetric {
  value: string;
  label: string;
  icon: string;
}

/* ──────────────────────────────────────── Solution Options ── */

export const solutionOptions: SolutionOption[] = [
  { id: "brainmkt", label: "BrainMKT (Marketing Management)", icon: "Megaphone" },
  { id: "braincrm", label: "BrainCRM (Customer Relationships)", icon: "Users" },
  { id: "brainerp", label: "BrainERP (Enterprise Operations)", icon: "Database" },
  { id: "brainbooks", label: "BrainBooks (Accounting Management)", icon: "Receipt" },
  { id: "odoo-bc-implementation", label: "Odoo / Dynamics 365 BC Implementation", icon: "Layers" },
  { id: "enterprise-integration", label: "Enterprise Integration Services", icon: "Network" },
  { id: "legacy-modernization", label: "Legacy System Modernization", icon: "RefreshCw" },
  { id: "custom-software", label: "Custom Software Engineering", icon: "Code2" },
];

/* ──────────────────────────────────────── Company Size ── */

export const companySizeOptions: CompanySizeOption[] = [
  { value: "", label: "Select company size" },
  { value: "1-10", label: "1–10 employees" },
  { value: "11-50", label: "11–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "201-500", label: "201–500 employees" },
  { value: "500+", label: "500+ employees" },
];

/* ──────────────────────────────────────── Current System ── */

export const currentSystemOptions: CurrentSystemOption[] = [
  { value: "", label: "Select current system" },
  { value: "excel", label: "Excel / Manual Process" },
  { value: "existing-erp", label: "Existing ERP" },
  { value: "existing-crm", label: "Existing CRM" },
  { value: "legacy-software", label: "Legacy Software" },
  { value: "multiple-systems", label: "Multiple Systems" },
  { value: "other", label: "Other" },
];

/* ──────────────────────────────────────── Why Schedule ── */

export const demoBenefits: DemoBenefit[] = [
  {
    title: "Understand Your Business",
    description:
      "Discuss your workflows, operational challenges, and transformation goals with our enterprise consultants.",
    icon: "Search",
  },
  {
    title: "Personalized Solution Strategy",
    description:
      "Get tailored platform recommendations (Brainzon products, Odoo, Dynamics 365 BC, or custom) based on your operating model.",
    icon: "Target",
  },
  {
    title: "Product & AI Agent Walkthrough",
    description:
      "Explore BrainMKT, BrainCRM, BrainERP, and BrainBooks live alongside their dedicated AI workflow assistants.",
    icon: "Monitor",
  },
  {
    title: "Transformation Roadmap",
    description:
      "Receive a phased implementation approach with discovery milestones, migration controls, and ROI projections.",
    icon: "Map",
  },
];

/* ──────────────────────────────────────── What Happens After ── */

export const demoTimeline: TimelineStep[] = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "Understand your business goals, current applications, data sources, and digital transformation priorities.",
  },
  {
    step: "02",
    title: "Solution Discussion",
    description:
      "Review suitable Brainzon solutions aligned to your operating requirements, governance rules, and budget.",
  },
  {
    step: "03",
    title: "Live Guided Demo",
    description:
      "Experience platform capabilities firsthand with a guided walkthrough of relevant modules and AI workflows.",
  },
  {
    step: "04",
    title: "Implementation Planning",
    description:
      "Create a phased delivery roadmap with data migration rehearsals, training, and cutover milestones.",
  },
];

/* ──────────────────────────────────────── Trust ── */

export const trustMetrics: TrustMetric[] = [
  { value: "100+", label: "Organizations Supported", icon: "Building2" },
  { value: "Global", label: "Technology Expertise", icon: "Globe" },
  { value: "Enterprise", label: "Grade Solutions", icon: "ShieldCheck" },
  { value: "Long-Term", label: "Partnership Model", icon: "Handshake" },
];

/* ──────────────────────────────────────── Hero Content ── */

export const demoHeroContent = {
  badge: "Book a Demo",
  headline: "See How Brainzon Connects Your Business Operations",
  subheadline:
    "Schedule a consultation with our experts to explore BrainMKT, BrainCRM, BrainERP, BrainBooks, enterprise platforms, integration, and modernization solutions.",
  primaryCta: "Book Your Demo",
  secondaryCta: "Talk to an Expert",
};

/* ──────────────────────────────────────── Final CTA ── */

export const demoFinalCta = {
  headline: "Ready to Build the Connected Era of Your Business?",
  cta: "Schedule Your Free Consultation",
};
