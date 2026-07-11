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
    technology: ["Next.js", "TypeScript", "Node.js", "Go", "PostgreSQL", "Docker"],
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
    headline: "Strategic Blueprinting, Optimizations, and Operational Audits",
    description: "Expert consulting to help you audit business operations, design target software specs, and successfully transition to modern ERP platforms.",
    features: [
      "Workflow Gap Analysis",
      "Procurement & Inventory Auditing",
      "User Acceptance & Training Sprints"
    ],
    capabilities: [
      {
        title: "Sourcing & SCM Audits",
        description: "Analyze supply chain workflows, materials ordering thresholds, and warehousing layouts to identify bottleneck factors.",
        icon: "Package"
      },
      {
        title: "System Auditing & Security Reviews",
        description: "Enforce division of duties controls, database access auditing, and audit logs.",
        icon: "ShieldCheck"
      },
      {
        title: "Legacy System Replacements",
        description: "Create migration pathways to replace old back-office database schemas with modern structures.",
        icon: "RefreshCw"
      }
    ],
    process: [
      {
        step: "01",
        title: "Workflow Discovery",
        description: "Map current finance, warehouse sorting, and procurement procedures to logical system entities."
      },
      {
        step: "02",
        title: "Gap Analysis Review",
        description: "Identify operational bottlenecks, determine custom module needs, and draft integration schemas."
      },
      {
        step: "03",
        title: "User Training & Go-live",
        description: "Run UAT testing cycles, train operational personnel on the new screens, and execute final cutover sequences."
      }
    ],
    technology: ["BrainERP", "Dynamics 365 BC", "Odoo", "ERPNext", "SAP Core", "PostgreSQL"],
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
