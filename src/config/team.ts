export type TeamGroup = 
  | "executive" 
  | "architecture-analysis" 
  | "engineering-qa" 
  | "sales-service";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  group: TeamGroup;
  image: string;
  imageAlt: string;
  summary: string;
  expertise: string[];
  linkedinUrl?: string;
  featured?: boolean;
  displayOrder: number;
}

export const teamMembers: TeamMember[] = [
  // 1. Executive Leadership
  {
    id: "member-01-ceo",
    name: "Ahasan Habib",
    role: "Chief Executive Officer (CEO)",
    group: "executive",
    image: "/images/team/ahasan-habib-ceo.jpg",
    imageAlt: "Ahasan Habib - CEO",
    summary: "Strategic technology leader with 16+ years of experience driving enterprise digital transformation, ERP consulting, cloud adoption, and global business growth.",
    expertise: ["Enterprise Strategy", "ERP & Cloud Transformation", "Executive Leadership", "Global Expansion"],
    linkedinUrl: "https://www.linkedin.com/in/ahasanhabib-erp/",
    featured: true,
    displayOrder: 1,
  },
  {
    id: "member-02-cto",
    name: "Rezaul Islam",
    role: "Chief Technology Officer (CTO)",
    group: "executive",
    image: "/images/team/member-02-cto.svg",
    imageAlt: "Rezaul Islam - CTO",
    summary: "Engineering executive and principal system architect with 14+ years of experience leading enterprise software development, distributed microservices, multi-cloud Kubernetes infrastructure, and zero-downtime database transformations for global platforms.",
    expertise: ["Distributed Systems", "Cloud Infrastructure", "System Architecture", "Security & SRE"],
    linkedinUrl: "https://linkedin.com",
    featured: true,
    displayOrder: 2,
  },
  {
    id: "member-03-cmo",
    name: "Sophia Martinez",
    role: "Chief Marketing Officer (CMO)",
    group: "executive",
    image: "/images/team/member-03-cmo.svg",
    imageAlt: "Sophia Martinez - CMO",
    summary: "Growth strategist overseeing global brand positioning, B2B enterprise client acquisition, and strategic technology ecosystem partnerships.",
    expertise: ["Brand Strategy", "Enterprise Marketing", "B2B Expansion", "Market Intelligence"],
    linkedinUrl: "https://linkedin.com",
    featured: true,
    displayOrder: 3,
  },

  // 2. Architecture & System Analysis
  {
    id: "member-04-architect",
    name: "Marcus Vance",
    role: "Principal Software Architect",
    group: "architecture-analysis",
    image: "/images/team/member-04-architect.svg",
    imageAlt: "Marcus Vance - Principal Software Architect",
    summary: "Deep-tech software architect leading Clean Architecture, Domain-Driven Design (DDD), and high-throughput gRPC/Kafka microservice designs.",
    expertise: ["Clean Architecture", "gRPC & Kafka", ".NET 9 / C#", "Domain-Driven Design"],
    linkedinUrl: "https://linkedin.com",
    displayOrder: 4,
  },
  {
    id: "member-05-analyst",
    name: "Elena Rostova",
    role: "Lead Enterprise System Analyst",
    group: "architecture-analysis",
    image: "/images/team/member-05-analyst.svg",
    imageAlt: "Elena Rostova - Lead System Analyst",
    summary: "Specializes in auditing legacy enterprise codebases, relational data schema mapping, GAP analysis, and functional specification modeling.",
    expertise: ["System GAP Analysis", "Data Schema Mapping", "Requirements Spec", "Process Optimization"],
    linkedinUrl: "https://linkedin.com",
    displayOrder: 5,
  },
  {
    id: "member-06-erp",
    name: "Priya Patel",
    role: "Lead ERP Solutions Specialist",
    group: "architecture-analysis",
    image: "/images/team/member-06-erp.svg",
    imageAlt: "Priya Patel - Lead ERP Specialist",
    summary: "Certified ERP consultant with deep implementation expertise in Microsoft Dynamics 365 Business Central, Odoo Enterprise, and ERPNext.",
    expertise: ["Dynamics 365 BC", "Odoo Enterprise", "ERPNext & Frappe", "General Ledger Config"],
    linkedinUrl: "https://linkedin.com",
    displayOrder: 6,
  },

  // 3. Engineering, AI & QA
  {
    id: "member-07-developer",
    name: "James Wilson",
    role: "Senior Full-Stack Lead Developer",
    group: "engineering-qa",
    image: "/images/team/member-07-developer.svg",
    imageAlt: "James Wilson - Full-Stack Lead Developer",
    summary: "Expert in building resilient web platforms, multi-tenant database layers, and high-concurrency APIs using Next.js 16, TypeScript, and .NET Core.",
    expertise: ["Next.js 16 / React 19", "TypeScript", "PostgreSQL", "Node.js & Go"],
    linkedinUrl: "https://linkedin.com",
    displayOrder: 7,
  },
  {
    id: "member-08-devops",
    name: "Viktor Novak",
    role: "Cloud Infrastructure & DevOps Lead",
    group: "engineering-qa",
    image: "/images/team/member-08-devops.svg",
    imageAlt: "Viktor Novak - Cloud & DevOps Lead",
    summary: "Site Reliability Engineer (SRE) managing Terraform IaC automation, Kubernetes (EKS/AKS) clusters, and 24/7 telemetry on AWS & Azure.",
    expertise: ["Terraform IaC", "Kubernetes (K8s)", "AWS / Azure Mesh", "GitOps CI/CD"],
    linkedinUrl: "https://linkedin.com",
    displayOrder: 8,
  },
  {
    id: "member-09-qa",
    name: "Sarah Jenkins",
    role: "Lead QA & Automation Engineer",
    group: "engineering-qa",
    image: "/images/team/member-09-qa.svg",
    imageAlt: "Sarah Jenkins - Lead QA Engineer",
    summary: "Quality assurance lead crafting automated E2E testing pipelines, API stress performance tests, and security vulnerability audits.",
    expertise: ["Test Automation", "E2E Testing", "Load & Stress Testing", "Security Auditing"],
    linkedinUrl: "https://linkedin.com",
    displayOrder: 9,
  },
  {
    id: "member-10-uiux",
    name: "Lucas Vance",
    role: "Senior UI/UX & Product Design Lead",
    group: "engineering-qa",
    image: "/images/team/member-10-uiux.svg",
    imageAlt: "Lucas Vance - UI/UX Design Lead",
    summary: "Design architect shaping modern, glassmorphic enterprise user interfaces, accessible design systems, and seamless user experiences.",
    expertise: ["Design Systems", "User Experience (UX)", "Figma Prototyping", "Design Tokens"],
    linkedinUrl: "https://linkedin.com",
    displayOrder: 10,
  },
  {
    id: "member-11-ai",
    name: "Dr. Aris Thorne",
    role: "Lead AI & Machine Learning Engineer",
    group: "engineering-qa",
    image: "/images/team/member-11-ai.svg",
    imageAlt: "Dr. Aris Thorne - Lead AI Engineer",
    summary: "AI specialist developing LLM integration pipelines, predictive analytics engines, vector search databases, and natural language processing agents.",
    expertise: ["LLM Integration", "Predictive Analytics", "Python AI/ML", "Vector Search"],
    linkedinUrl: "https://linkedin.com",
    displayOrder: 11,
  },

  // 4. Sales & Customer Success
  {
    id: "member-12-sales",
    name: "Michael Thorne",
    role: "Director of Global Enterprise Sales",
    group: "sales-service",
    image: "/images/team/member-12-sales.svg",
    imageAlt: "Michael Thorne - Sales Director",
    summary: "Drives strategic client engagements, enterprise partnership agreements, and consultative technical solution scoping across global markets.",
    expertise: ["Enterprise Sales", "Client Partnerships", "Solution Scoping", "Global Accounts"],
    linkedinUrl: "https://linkedin.com",
    displayOrder: 12,
  },
  {
    id: "member-13-service",
    name: "Amanda Foster",
    role: "Head of Customer Success & Managed Services",
    group: "sales-service",
    image: "/images/team/member-13-service.svg",
    imageAlt: "Amanda Foster - Customer Success Head",
    summary: "Leads post-implementation support, 24/7 SLA management, client onboarding, and continuous enterprise account optimization.",
    expertise: ["Customer Success", "24/7 Managed SLAs", "Client Onboarding", "Account Growth"],
    linkedinUrl: "https://linkedin.com",
    displayOrder: 13,
  },
];
