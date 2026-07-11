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

export const companyConfig = {
  about: {
    title: "About Brainzon",
    headline: "Architecting Digital Transformation Worldwide",
    description: "Brainzon is a leading software development company, trusted by businesses worldwide for delivering high-quality, innovative digital solutions. Since our inception in 2020, we have successfully partnered with 100+ clients across the globe.",
    philosophy: "We provide flexible, dedicated development teams made up of proactive and creative professionals who adapt seamlessly to our clients’ unique business needs. By working closely with our clients, we don’t just build software; we help accelerate business growth, improve operational efficiency, and create long-term value.",
    vision: "To be recognized as the most trusted and innovative software development partner globally, continuously setting industry standards for quality, reliability, and client satisfaction. We aspire to foster long-term relationships with our clients, helping them achieve their goals and expand their potential through advanced technology solutions.",
    mission: "To empower businesses worldwide by delivering cutting-edge software solutions through a team of proactive, creative developers. We are committed to closely collaborating with our clients, understanding their unique needs, and providing superior quality services that drive innovation and sustainable business growth."
  },
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
      title: "Collaboration & Partnership",
      description: "We work as an extension of our clients' teams. Through close collaboration and shared goals, we build long-term partnerships—not just projects.",
      icon: "Users"
    },
    {
      title: "Transparency & Trust",
      description: "We believe strong partnerships are built on honesty, open communication, and accountability. We maintain full transparency in processes, timelines, and deliverables.",
      icon: "ShieldAlert"
    },
    {
      title: "Excellence in Quality",
      description: "We are committed to delivering reliable, scalable, and high-quality software solutions. From planning to deployment, excellence is embedded in every step of our work.",
      icon: "Award"
    }
  ] as CoreValue[],
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
