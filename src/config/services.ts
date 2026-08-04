export interface ServiceCapability {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  slug: string;
  headline: string;
  description: string;
  features: string[]; // For homepage compatibility
  capabilities: ServiceCapability[];
  process: ServiceProcessStep[];
  technology: string[];
  icon: string;
  href: string;
}

export const servicesConfig: Service[] = [
  {
    title: "Custom Enterprise Software Development",
    slug: "custom-development",
    headline: "Tailor-made Enterprise Platforms Built for Scale",
    description: "Architecting, coding, and deploying highly secure, cloud-native customized software platforms engineered to fit your proprietary workflows.",
    features: [
      "Tailored SaaS Architectures",
      "Microservice & API Coding",
      "Legacy Code Refactoring & Wrapping"
    ],
    capabilities: [
      {
        title: "SaaS Platforms & Web Apps",
        description: "Deploy scalable web architectures utilizing modern frameworks, multi-tenant databases, and granular role permissions.",
        icon: "Layout"
      },
      {
        title: "Microservices & High-throughput APIs",
        description: "Build event-driven microservices communicating via secure, validated API protocols.",
        icon: "Network"
      },
      {
        title: "Secure Transaction Ledger Systems",
        description: "Integrate ACID-compliant transaction records, ledger logging, and double-entry auditing systems.",
        icon: "Database"
      }
    ],
    process: [
      {
        step: "01",
        title: "Architecture Workshop",
        description: "Gather operational requirements, document data schemas, and compile technical system specs."
      },
      {
        step: "02",
        title: "Iterative Development",
        description: "Write modular TypeScript services, review codebase changes, and run continuous integration tests."
      },
      {
        step: "03",
        title: "Deployment & Validation",
        description: "Orchestrate production deployment using container pools, verify performance tuning, and run compliance audits."
      }
    ],
    technology: [
      ".NET 9 / C#",
      "ASP.NET Core",
      "Next.js 16", 
      "React 19", 
      "TypeScript", 
      "Node.js", 
      "Go (Golang)", 
      "Python / FastAPI", 
      "Entity Framework Core",
      "SQL Server / T-SQL",
      "PostgreSQL", 
      "Redis Caching", 
      "MongoDB", 
      "SignalR Real-time",
      "Docker Containers", 
      "Kubernetes (K8s)", 
      "Apache Kafka", 
      "AWS / Azure DevOps", 
      "CI/CD Pipelines"
    ],
    icon: "cpu",
    href: "/services/custom-development"
  },
  {
    title: "Cloud & Managed Services",
    slug: "cloud",
    headline: "Secure, Highly Available Multi-Cloud Architectures",
    description: "Continuous infrastructure support, DevOps pipeline creation, security posture audits, and multi-cloud transformations.",
    features: [
      "AWS/Azure/GCP Infrastructure Management",
      "DevOps Automation & CI/CD Pipelines",
      "24/7 Security & Performance Monitoring"
    ],
    capabilities: [
      {
        title: "Cloud-native Migrations",
        description: "Transition legacy codebases and databases to AWS, Azure, or GCP with zero business disruption.",
        icon: "Cloud"
      },
      {
        title: "DevOps & GitOps Pipelines",
        description: "Automate deployment environments using infrastructure-as-code and automated pipelines.",
        icon: "GitBranch"
      },
      {
        title: "24/7 Operations Monitoring",
        description: "Establish live telemetry alerts, security auditing, and automated container scaling policies.",
        icon: "Activity"
      }
    ],
    process: [
      {
        step: "01",
        title: "Infrastructure Assessment",
        description: "Audit current host setups, compute utilization profiles, security groups, and identify cost-saving targets."
      },
      {
        step: "02",
        title: "IaC Blueprint Design",
        description: "Define target cloud infrastructure structures using Terraform or CloudFormation scripts."
      },
      {
        step: "03",
        title: "Zero-Downtime Cutover",
        description: "Perform secure data replication sweeps, execute failover drills, and point DNS records to cloud routes."
      }
    ],
    technology: ["Terraform", "Docker", "Kubernetes", "AWS Cloud", "Microsoft Azure", "Google Cloud"],
    icon: "network",
    href: "/services/cloud"
  },
  {
    title: "Enterprise ERP Consulting",
    slug: "erp-consulting",
    headline: "Turnkey Implementation & Customization for Dynamics 365 BC, Odoo & ERPNext",
    description: "End-to-end implementation, seamless data migration, and deep customization for the world's leading readymade ERP platforms: Microsoft Dynamics 365 Business Central, Odoo, and ERPNext — engineered to fit your exact business workflows.",
    features: [
      "Dynamics 365 BC Implementation",
      "Odoo & ERPNext Customization",
      "Legacy System Data Migration"
    ],
    capabilities: [
      {
        title: "Dynamics 365 BC Implementation",
        description: "Full Microsoft cloud ERP deployment, chart of accounts setup, supply chain integration, and custom AL language extension development.",
        icon: "Building2"
      },
      {
        title: "Odoo Modular ERP Customization",
        description: "Modular Odoo implementation across CRM, Sales, POS, and Manufacturing with custom Python and OWL view modules.",
        icon: "Boxes"
      },
      {
        title: "ERPNext Open-Source Development",
        description: "Agile ERPNext deployment on Frappe framework with custom Doctypes, server scripts, and zero vendor lock-in.",
        icon: "Layers"
      }
    ],
    process: [
      {
        step: "01",
        title: "Platform Selection & Discovery",
        description: "Evaluate your operational workflows to select the best-fit base platform (Dynamics 365 BC, Odoo, or ERPNext) and map data schemas."
      },
      {
        step: "02",
        title: "Implementation & Customization",
        description: "Configure core finance & SCM modules, write custom extensions, and run seamless data migration sweeps from legacy systems."
      },
      {
        step: "03",
        title: "UAT, Go-Live & 24/7 Support",
        description: "Conduct user acceptance testing, train operational teams, execute final cutover, and provide ongoing 24/7 system maintenance."
      }
    ],
    technology: [
      "Dynamics 365 BC", 
      "Odoo ERP", 
      "ERPNext", 
      "AL Language", 
      "Python / OWL", 
      "Frappe Framework", 
      "SQL Server (T-SQL)", 
      "PostgreSQL", 
      "Power BI", 
      "REST / GraphQL APIs"
    ],
    icon: "database",
    href: "/services/erp-consulting"
  },
  {
    title: "Legacy System Modernization",
    slug: "modernization",
    headline: "Wrap, Refactor, and Transition Legacy Codebases",
    description: "Incorporate modern API wrappers, strangler refactoring patterns, and unified database layers to breathe new life into older enterprise monoliths.",
    features: [
      "Monolith Deconstruction Sprints",
      "API Wrapping & Security Layers",
      "Real-time Data Replication Syncs"
    ],
    capabilities: [
      {
        title: "Monolith Deconstruction",
        description: "Break down large legacy codebases into modern microservices without service disruptions.",
        icon: "GitFork"
      },
      {
        title: "Database Schema Refactoring",
        description: "Migrate old, unindexed schemas to structured, optimized database tables.",
        icon: "Database"
      },
      {
        title: "API Wrapping & Layering",
        description: "Envelop old terminal code or legacy systems with secure, authenticated REST/GraphQL API wrappers.",
        icon: "Code2"
      }
    ],
    process: [
      {
        step: "01",
        title: "System Code Analysis",
        description: "Scan current legacy code, catalog data schemas, and identify dependency graphs."
      },
      {
        step: "02",
        title: "Incremental Refactoring",
        description: "Apply the Strangler Fig pattern to replace segments with modern microservices."
      },
      {
        step: "03",
        title: "System Synchronization",
        description: "Perform dual-write sync loops to ensure absolute data parity before final cutover."
      }
    ],
    technology: ["Next.js", "TypeScript", "BrainConnect", "Docker", "PostgreSQL", "Apache Kafka"],
    icon: "refresh-cw",
    href: "/services/modernization"
  }
];
