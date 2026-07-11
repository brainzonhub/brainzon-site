export type ModernizationItem = { title: string; description: string; icon: string };
export type ModernizationService = ModernizationItem & { features: readonly string[] };

export const legacyTechnologies = ["VB6 Applications", "Delphi Software", "PowerBuilder Systems", "Classic ASP", "Desktop ERP", "Older .NET Framework"] as const;
export const modernTechnologies = [".NET 8", "React", "Angular", "Vue.js", "Node.js", "Python", "Cloud Native Architecture"] as const;

export const legacyChallenges = [
  { title: "High Maintenance Cost", description: "Reduce the cost and complexity of maintaining outdated systems.", icon: "CircleDollarSign" },
  { title: "Technology Limitations", description: "Move beyond unsupported technologies and outdated frameworks.", icon: "Blocks" },
  { title: "Security Risks", description: "Improve security with modern architecture and practices.", icon: "ShieldAlert" },
  { title: "Poor Scalability", description: "Build systems ready for future growth.", icon: "ChartNoAxesCombined" },
  { title: "Limited Integration", description: "Connect legacy applications with modern business ecosystems.", icon: "Unplug" },
] as const satisfies readonly ModernizationItem[];

export const modernizationServices = [
  { title: "Application Assessment", description: "Create an evidence-based view of application health, value, and risk.", icon: "ScanSearch", features: ["Current system analysis", "Business process review", "Technology evaluation", "Risk assessment"] },
  { title: "Architecture Modernization", description: "Reshape tightly coupled systems into maintainable modern platforms.", icon: "Network", features: ["Application architecture review", "Modern design patterns", "Cloud-ready planning"] },
  { title: "Application Migration", description: "Move critical workflows without losing operational continuity.", icon: "ArrowRightLeft", features: ["Desktop to web migration", "Client-server modernization", "Platform upgrades"] },
  { title: "Database Modernization", description: "Improve data integrity, performance, portability, and governance.", icon: "Database", features: ["SQL Server upgrade", "Database optimization", "Data migration"] },
  { title: "Cloud Transformation", description: "Deploy resilient applications on the cloud model that fits the business.", icon: "CloudCog", features: ["Azure migration", "AWS migration", "Google Cloud migration"] },
  { title: "Performance Optimization", description: "Remove bottlenecks across application, database, and infrastructure layers.", icon: "Gauge", features: ["Application tuning", "Query optimization", "Infrastructure improvement"] },
] as const satisfies readonly ModernizationService[];

export const technologyTransformations = [
  { legacy: "VB6", modern: ".NET 8 / .NET Core" }, { legacy: "Delphi", modern: "React + .NET" },
  { legacy: "PowerBuilder", modern: "Angular + APIs" }, { legacy: "Classic ASP", modern: "Node.js / .NET" },
  { legacy: ".NET Framework", modern: ".NET 8 + Cloud Native" },
] as const;
export const migrationBenefits = ["Better performance", "Improved security", "Modern user experience", "Easier maintenance", "Cloud readiness", "Integration capability"] as const;

export const modernizationSteps = [
  { number: "01", title: "Assessment & Discovery", description: "Analyze existing applications, architecture, and business requirements." },
  { number: "02", title: "Modernization Strategy", description: "Create roadmap, technology selection, and migration plan." },
  { number: "03", title: "Architecture Design", description: "Design scalable modern architecture." },
  { number: "04", title: "Development & Migration", description: "Modernize application components and migrate data." },
  { number: "05", title: "Testing & Quality Assurance", description: "Validate performance, security, and functionality." },
  { number: "06", title: "Deployment", description: "Release modernized application with minimal disruption." },
  { number: "07", title: "Optimization & Support", description: "Continuously improve performance and reliability." },
] as const;

export const architectureLayers = [
  { title: "Presentation Layer", icon: "PanelsTopLeft", technologies: ["React", "Angular", "Vue.js"] },
  { title: "Application Layer", icon: "Boxes", technologies: [".NET", "Node.js", "Python"] },
  { title: "Integration Layer", icon: "Cable", technologies: ["BrainConnect", "APIs", "Workflow Automation"] },
  { title: "Data Layer", icon: "Database", technologies: ["SQL Server", "PostgreSQL", "Cloud Databases"] },
  { title: "Infrastructure", icon: "Cloud", technologies: ["Azure", "AWS", "Google Cloud"] },
] as const;

export const databaseCapabilities = ["Database Assessment", "Data Migration", "SQL Optimization", "Schema Modernization", "Cloud Database Migration", "Performance Improvement"] as const;
export const cloudPlatforms = [
  { title: "Microsoft Azure", description: "Cloud migration and enterprise hosting.", icon: "Cloud" },
  { title: "AWS", description: "Scalable infrastructure transformation.", icon: "ServerCog" },
  { title: "Google Cloud", description: "Modern cloud-native solutions.", icon: "CloudCog" },
] as const satisfies readonly ModernizationItem[];
export const cloudBenefits = ["High availability", "Better security", "Scalability", "Lower maintenance cost", "Remote accessibility"] as const;
export const modernizationBenefits = [
  { title: "Deep Technical Expertise", description: "Experience across legacy and modern technologies.", icon: "BadgeCheck" },
  { title: "Business-First Approach", description: "Modernization aligned with business goals.", icon: "BriefcaseBusiness" },
  { title: "Safe Migration Strategy", description: "Reduce risk with structured transformation.", icon: "ShieldCheck" },
  { title: "Modern Architecture", description: "Build scalable solutions for the future.", icon: "Layers3" },
  { title: "Long-Term Partnership", description: "Continuous support after modernization.", icon: "Handshake" },
] as const satisfies readonly ModernizationItem[];
