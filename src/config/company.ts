export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface CultureValue {
  title: string;
  description: string;
  icon: string;
}

export interface StrategicPartner {
  name: string;
  description: string;
  icon: string;
  tier: string;
}

export interface CareerRole {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export interface CompanyStatistic {
  value: string;
  label: string;
}

export interface CompanyCapability {
  title: string;
  description: string;
  icon: string;
}

export interface EngineeringPrinciple {
  title: string;
  description: string;
}

export interface PartnershipStep {
  step: string;
  title: string;
  description: string;
}

export const companyConfig = {
  about: {
    title: "About Brainzon",
    headline: "Architecting Digital Foundations Of Tomorrow",
    description: "Brainzon is a global technology partner helping organizations modernize their operations through innovative software solutions. We unify proprietary ERP engines, pipeline CRMs, predictive AI, and cloud legacy modernization into one secure, high-resilience digital foundation.",
    philosophy: "We provide flexible, dedicated development teams made up of proactive and creative professionals who adapt seamlessly to our clients’ unique business needs. By working closely with our clients, we don’t just build software; we help accelerate business growth, improve operational efficiency, and create long-term value.",
    vision: "To become a trusted global technology partner recognized for innovation, quality, and customer success.",
    mission: "To empower organizations worldwide with reliable, scalable, and intelligent technology solutions that create measurable business impact."
  },
  statistics: [
    { value: "100+", label: "Clients Supported" },
    { value: "Global", label: "Technology Partner" },
    { value: "Multiple", label: "Industries Served" },
    { value: "Modern", label: "Technology Stack" }
  ] as CompanyStatistic[],
  values: [
    {
      title: "Customer Success First",
      description: "Our clients' success defines our success. We deeply understand business challenges and deliver solutions that create measurable impact and sustainable growth.",
      icon: "UserCheck"
    },
    {
      title: "Innovation with Purpose",
      description: "We embrace innovation not for trends, but for results. By leveraging modern technologies and best practices, we build future-ready solutions that solve real business problems.",
      icon: "Lightbulb"
    },
    {
      title: "Collaboration",
      description: "We work as an extension of our clients' teams. Through close collaboration and shared goals, we build long-term partnerships—not just projects.",
      icon: "Users"
    },
    {
      title: "Transparency & Trust",
      description: "We believe strong partnerships are built on honesty, open communication, and accountability. We maintain full transparency in processes, timelines, and deliverables.",
      icon: "ShieldAlert"
    },
    {
      title: "Excellence",
      description: "We are committed to delivering reliable, scalable, and high-quality software solutions. From planning to deployment, excellence is embedded in every step of our work.",
      icon: "Award"
    }
  ] as CoreValue[],
  capabilities: [
    {
      title: "Enterprise Platforms",
      description: "Build and implement ERP, CRM, and business applications.",
      icon: "LayoutDashboard"
    },
    {
      title: "AI Transformation",
      description: "Create intelligent systems using AI automation and analytics.",
      icon: "Sparkles"
    },
    {
      title: "Software Modernization",
      description: "Transform legacy applications into modern cloud-ready platforms.",
      icon: "Cpu"
    },
    {
      title: "Integration Engineering",
      description: "Connect business systems through secure integration architecture.",
      icon: "Network"
    },
    {
      title: "Custom Development",
      description: "Build scalable software solutions tailored to business needs.",
      icon: "Code"
    }
  ] as CompanyCapability[],
  engineeringPhilosophy: [
    {
      title: "Business First",
      description: "Technology decisions are driven by real business outcomes."
    },
    {
      title: "Quality Engineering",
      description: "Reliable architecture, clean code, and scalable solutions."
    },
    {
      title: "Continuous Innovation",
      description: "Adopting modern technologies to solve evolving challenges."
    },
    {
      title: "Long-Term Partnership",
      description: "Growing together beyond project delivery."
    }
  ] as EngineeringPrinciple[],
  partnershipApproach: [
    {
      step: "01",
      title: "Understand",
      description: "Analyze business goals."
    },
    {
      step: "02",
      title: "Design",
      description: "Create solution architecture."
    },
    {
      step: "03",
      title: "Build",
      description: "Develop and implement."
    },
    {
      step: "04",
      title: "Grow",
      description: "Continuously optimize."
    }
  ] as PartnershipStep[],
  technologyStack: {
    frontend: ["Next.js", "React", "Angular", "TypeScript", "Tailwind CSS"],
    backend: [".NET", "Node.js", "Python", "Go"],
    database: ["SQL Server", "PostgreSQL", "Redis", "MongoDB"],
    cloud: ["Azure", "AWS", "Google Cloud", "Kubernetes"],
    ai: ["Generative AI", "Machine Learning", "Inference Pools", "Semantic Search"]
  },
  culture: {
    headline: "Driven by Innovation, Collaboration, and Real Value",
    description: "At Brainzon, our culture is built on innovation, collaboration, and a strong commitment to delivering real business value. We foster an environment where people are empowered to think creatively, act responsibly, and grow continuously—both professionally and personally.",
    behaviors: [
      {
        title: "Empowered Thinking",
        description: "We encourage our engineers to take ownership, challenge assumptions, and propose novel architectural designs.",
        icon: "Cpu"
      },
      {
        title: "Client-Centric Mindset",
        description: "We put our clients at the center of everything we do. Our teams deeply understand business challenges and work proactively to deliver solutions that drive efficiency.",
        icon: "Heart"
      },
      {
        title: "Continuous Growth",
        description: "Continuous learning is in our DNA. We support certification paths, host technical sessions, and encourage continuous cross-functional skills training.",
        icon: "TrendingUp"
      }
    ] as CultureValue[]
  },
  partners: [
    {
      name: "Odoo",
      description: "Authorized implementation partner offering end-to-end customization, CRM setup, and unified manufacturing pipeline designs.",
      icon: "Globe",
      tier: "Enterprise Partner"
    },
    {
      name: "Microsoft Dynamics 365",
      description: "Gold integration provider optimizing Business Central, asset registers, and financial reporting modules.",
      icon: "Cpu",
      tier: "Integration Provider"
    },
    {
      name: "Amazon Web Services",
      description: "Certified Cloud Architects hosting high-throughput compute pools and secure DevOps environments.",
      icon: "Cloud",
      tier: "Cloud infrastructure"
    },
    {
      name: "Google Cloud",
      description: "Strategic AI partner building custom machine learning pipelines and real-time document parsing engines.",
      icon: "Sparkles",
      tier: "AI Platform Partner"
    },
    {
      name: "Microsoft Azure",
      description: "Securing corporate databases, hybrid cloud clusters, and strict data residency compliance controls.",
      icon: "ShieldCheck",
      tier: "Security & Cloud"
    }
  ] as StrategicPartner[],
  careers: {
    headline: "Build the Future of Enterprise Software",
    description: "Work with elite engineers and architects to design next-generation SaaS products, ERP systems, and cloud pipelines. We support flexible setups, continuous learning, and premium tools.",
    roles: [
      {
        title: "Senior Full-Stack Engineer",
        department: "Product Engineering",
        location: "Dhaka (Hybrid) / Remote",
        type: "Full-Time",
        description: "Help build and scale the Next.js and TypeScript frontend layer of our BrainCRM and BrainERP software systems."
      },
      {
        title: "DevOps & Cloud Infrastructure Architect",
        department: "Platform Operations",
        location: "Remote",
        type: "Full-Time",
        description: "Design multi-cloud Kubernetes architectures, GitOps CI/CD loops, and automated security posture gates."
      },
      {
        title: "Solution Architect (ERP Consulting)",
        department: "Solutions Advisory",
        location: "Dhaka (Hybrid)",
        type: "Full-Time",
        description: "Consult with enterprise clients to audit supply chains, model inventory database schemas, and lead ERP migration sprints."
      }
    ] as CareerRole[]
  }
};

export type CompanyConfigType = typeof companyConfig;
