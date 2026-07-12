export interface ContactOption {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  inquiryType: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const contactOptions: ContactOption[] = [
  {
    id: "sales",
    title: "Sales Inquiry",
    description: "Discuss products, custom enterprise solutions, pricing packages, and licensing details.",
    ctaText: "Contact Sales",
    inquiryType: "General Inquiry",
    iconName: "shopping-bag",
  },
  {
    id: "consultation",
    title: "Solution Consultation",
    description: "Explore how our core ERP, CRM, AI, or system integration platforms can transform your workflow.",
    ctaText: "Talk To Experts",
    inquiryType: "ERP Solutions",
    iconName: "presentation",
  },
  {
    id: "partnership",
    title: "Partnership",
    description: "Discuss strategic technology partnerships, integration opportunities, and business collaboration models.",
    ctaText: "Partner With Us",
    inquiryType: "Partnership",
    iconName: "handshake",
  },
  {
    id: "support",
    title: "Support",
    description: "Access existing customer assistance, service SLA request logging, and technical help desk channels.",
    ctaText: "Get Support",
    inquiryType: "General Inquiry",
    iconName: "life-buoy",
  },
];

export const inquiryTypes = [
  { value: "ERP Solutions", label: "ERP Solutions" },
  { value: "CRM Solutions", label: "CRM Solutions" },
  { value: "AI Solutions", label: "AI Solutions" },
  { value: "Integration Solutions", label: "Integration Solutions" },
  { value: "Modernization Services", label: "Modernization Services" },
  { value: "Cloud Services", label: "Cloud Services" },
  { value: "Partnership", label: "Partnership" },
  { value: "General Inquiry", label: "General Inquiry" },
] as const;

export const companySizes = [
  { value: "Startup", label: "Startup (1-10 employees)" },
  { value: "Small Business", label: "Small Business (11-50 employees)" },
  { value: "Mid-Market", label: "Mid-Market (51-500 employees)" },
  { value: "Enterprise", label: "Enterprise (500+ employees)" },
] as const;

export const companyContactInfo = {
  headquarters: {
    companyName: "Brainzon",
    country: "United States",
    address: "100 Pine Street, Suite 1250, San Francisco, CA 94111",
  },
  emails: {
    general: "info@brainzon.com",
    sales: "sales@brainzon.com",
    support: "support@brainzon.com",
    security: "security@brainzon.com",
  },
  phone: "+1 (800) 555-0199",
  businessHours: "Monday - Friday: 8:00 AM - 6:00 PM PST",
};

export const contactFAQs: FAQItem[] = [
  {
    question: "What solutions does Brainzon provide?",
    answer: "Brainzon offers a premium suite of digital transformation products and custom enterprise solutions: BrainERP (Enterprise Resource Planning), BrainCRM (Customer Relationship Management), BrainAI (Enterprise Artificial Intelligence), and BrainConnect (Integration Platform). We also provide end-to-end consulting, cloud transformation, and modernization services.",
  },
  {
    question: "Can Brainzon modernize existing software?",
    answer: "Yes, legacy application modernization is one of our primary service pillars. We wrap legacy databases, mainframe systems, and older software platforms in modern, containerized microservices APIs without disrupting your current operations, easing transition to the cloud.",
  },
  {
    question: "Does Brainzon support ERP implementation?",
    answer: "Absolutely. We provide full-lifecycle BrainERP implementation services, including business process alignment, custom module development (Finance, Supply Chain, HR), data migration, system testing, employee onboarding, and post-deployment support.",
  },
  {
    question: "Can Brainzon integrate existing systems?",
    answer: "Yes, using BrainConnect—our low-latency enterprise integration platform—we build secure workflow automations, sync data in real-time between legacy and SaaS systems, and establish robust, authenticated API structures.",
  },
  {
    question: "How can I request a product demo?",
    answer: "You can request a live, personalized product demonstration by submitting the contact form on this page with 'General Inquiry' or by selecting your specific product/solution of interest. A solutions engineer will reach out to schedule a demo tailored to your company's challenges.",
  },
];
