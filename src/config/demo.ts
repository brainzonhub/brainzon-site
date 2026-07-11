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
  { id: "brainerp", label: "BrainERP", icon: "Database" },
  { id: "braincrm", label: "BrainCRM", icon: "Users" },
  { id: "brainai", label: "BrainAI", icon: "Cpu" },
  { id: "brainconnect", label: "BrainConnect", icon: "Network" },
  { id: "erp-implementation", label: "ERP Implementation", icon: "Package" },
  { id: "legacy-modernization", label: "Legacy Modernization", icon: "RefreshCw" },
  { id: "custom-software", label: "Custom Software Development", icon: "Code2" },
  { id: "cloud-solutions", label: "Cloud Solutions", icon: "Cloud" },
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
      "Discuss your workflows, challenges, and transformation goals with our enterprise consultants.",
    icon: "Search",
  },
  {
    title: "Personalized Solution Strategy",
    description:
      "Get tailored recommendations based on your industry, scale, and business requirements.",
    icon: "Target",
  },
  {
    title: "Product Walkthrough",
    description:
      "Explore BrainERP, BrainCRM, AI capabilities, integrations, and automation features live.",
    icon: "Monitor",
  },
  {
    title: "Transformation Roadmap",
    description:
      "Receive a clear implementation approach with milestones, timelines, and ROI projections.",
    icon: "Map",
  },
];

/* ──────────────────────────────────────── What Happens After ── */

export const demoTimeline: TimelineStep[] = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "Understand your business goals, current systems, and digital transformation priorities.",
  },
  {
    step: "02",
    title: "Solution Discussion",
    description:
      "Review suitable Brainzon solutions aligned to your operational requirements and industry.",
  },
  {
    step: "03",
    title: "Live Demo",
    description:
      "Experience platform capabilities firsthand with a guided walkthrough of relevant modules.",
  },
  {
    step: "04",
    title: "Implementation Planning",
    description:
      "Create a detailed transformation roadmap with timelines, resource allocation, and milestones.",
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
  headline: "See How Brainzon Can Modernize Your Business",
  subheadline:
    "Schedule a personalized consultation with our experts to explore ERP, CRM, AI, automation, and software modernization solutions designed around your business goals.",
  primaryCta: "Book Your Demo",
  secondaryCta: "Talk to an Expert",
};

/* ──────────────────────────────────────── Final CTA ── */

export const demoFinalCta = {
  headline: "Ready to Build the Next Era of Your Business?",
  cta: "Schedule Your Free Consultation",
};
