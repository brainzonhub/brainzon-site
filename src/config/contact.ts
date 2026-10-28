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
    description: "Explore how our core applications (BrainMKT, BrainCRM, BrainERP, BrainBooks) or integration services can transform your operations.",
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
    question: "What products and services does Brainzon provide?",
    answer: "Brainzon offers four proprietary business applications—BrainMKT (Marketing Management), BrainCRM (Customer Relationship Management), BrainERP (Enterprise Resource Planning), and BrainBooks (Accounting Management)—each supported by a dedicated AI agent. We also provide implementation services for Odoo and Microsoft Dynamics 365 Business Central, enterprise integration services, custom engineering, and legacy system modernization.",
  },
  {
    question: "Can Brainzon modernize existing legacy software?",
    answer: "Yes, legacy system modernization is a core capability. We assess aging applications and databases, and execute staged modernization through the 6 pathways: Retain & improve, Rehost, Re-platform, Refactor, Replace, and Retire, ensuring data continuity and zero unplanned disruption.",
  },
  {
    question: "Does Brainzon support ERP and platform implementation?",
    answer: "Absolutely. We follow a platform-neutral approach: evaluating whether BrainERP, Odoo, Microsoft Dynamics 365 Business Central, or a custom application best fits your operating model, workflows, and total cost of ownership.",
  },
  {
    question: "How does Brainzon integrate disparate business systems?",
    answer: "Through our Enterprise Integration Services, we design governed REST, SOAP, GraphQL, OData, and webhook interfaces, orchestrate multi-step automated workflows, implement reliable data synchronization, and build observability runbooks with automated dead-letter recovery.",
  },
  {
    question: "How can I request a product demo?",
    answer: "You can request an interactive product demonstration by submitting our demo booking form or contacting sales. An enterprise solution architect will coordinate a session focused on your specific business requirements.",
  },
];
