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
