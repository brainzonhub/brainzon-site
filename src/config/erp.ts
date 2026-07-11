export type ERPItem = {
  title: string;
  description: string;
  icon: string;
};

export type ERPModule = ERPItem & { features: readonly string[] };
export type ERPPlatform = ERPItem & { bestFor: string; capabilities: readonly string[]; href: string; featured?: boolean };
export type ERPIndustry = ERPItem & { challenge: string; solution: string; benefit: string };

export const erpChallenges = [
  { title: "Disconnected Systems", description: "Eliminate fragmented applications and centralize business data.", icon: "Unplug" },
  { title: "Manual Processes", description: "Automate repetitive operations and improve productivity.", icon: "Workflow" },
  { title: "Limited Visibility", description: "Get real-time insights across departments.", icon: "Eye" },
  { title: "Growth Challenges", description: "Build a scalable foundation for expansion.", icon: "TrendingUp" },
] as const satisfies readonly ERPItem[];

export const erpModules = [
  { title: "Finance & Accounting", description: "Control financial operations with accuracy and confidence.", icon: "Landmark", features: ["General Ledger", "Accounts Payable", "Accounts Receivable", "Tax Management", "Financial Reports"] },
  { title: "Sales & CRM", description: "Connect revenue operations with a complete customer view.", icon: "Handshake", features: ["Lead Management", "Opportunity Tracking", "Sales Orders", "Customer Management"] },
  { title: "Inventory & Warehouse", description: "Maintain precise stock visibility across every location.", icon: "Boxes", features: ["Multi-Warehouse", "Stock Management", "Batch Tracking", "Inventory Reports"] },
  { title: "Procurement", description: "Standardize sourcing and supplier operations.", icon: "ShoppingCart", features: ["Supplier Management", "Purchase Orders", "Procurement Workflow"] },
  { title: "Manufacturing", description: "Coordinate materials, capacity, and production execution.", icon: "Factory", features: ["BOM", "Production Planning", "Work Orders"] },
  { title: "Human Resources", description: "Manage the workforce from one secure operating system.", icon: "Users", features: ["Employee Management", "Attendance", "Payroll"] },
  { title: "Business Intelligence", description: "Turn operational data into timely decisions.", icon: "ChartNoAxesCombined", features: ["Dashboards", "KPI Monitoring", "Analytics"] },
] as const satisfies readonly ERPModule[];

export const erpPlatforms = [
  { title: "BrainERP", description: "Brainzon's unified ERP platform for finance, operations, supply chain, sales, and workforce management.", icon: "BrainCircuit", bestFor: "Growing businesses requiring a customized ERP ecosystem.", capabilities: ["Unified operations", "Flexible modules", "Custom workflows"], href: "/products/brainerp", featured: true },
  { title: "Microsoft Dynamics 365 Business Central", description: "A connected business management solution for organizations invested in Microsoft Cloud.", icon: "Microsoft", bestFor: "Enterprise organizations requiring Microsoft ecosystem integration.", capabilities: ["Microsoft 365 integration", "Finance", "Supply chain"], href: "/book-demo" },
  { title: "Odoo ERP", description: "A modular suite for organizations that want flexible, extensible business applications.", icon: "Blocks", bestFor: "Flexible modular ERP implementation.", capabilities: ["Modular applications", "CRM", "Operations"], href: "/book-demo" },
  { title: "ERPNext", description: "An open-source platform for organizations seeking transparent and adaptable ERP ownership.", icon: "CodeXml", bestFor: "Open-source ERP adoption.", capabilities: ["Open-source platform", "Accounting", "Manufacturing"], href: "/book-demo" },
] as const satisfies readonly ERPPlatform[];

export const erpImplementationSteps = [
  { number: "01", title: "Business Discovery", description: "Analyze workflows and requirements." },
  { number: "02", title: "Solution Design", description: "Create ERP roadmap and architecture." },
  { number: "03", title: "Configuration & Customization", description: "Configure modules and develop required features." },
  { number: "04", title: "Data Migration", description: "Securely migrate existing data." },
  { number: "05", title: "Testing", description: "Functional and user acceptance testing." },
  { number: "06", title: "Training & Deployment", description: "Launch and support users." },
  { number: "07", title: "Optimization", description: "Continuous improvement." },
] as const;

export const erpIndustries = [
  { title: "Manufacturing", icon: "Factory", description: "Connected production control", challenge: "Variable demand and disconnected shop-floor data.", solution: "Unify MRP, production, quality, and inventory.", benefit: "Higher throughput and dependable delivery planning." },
  { title: "Retail & eCommerce", icon: "Store", description: "Omnichannel operations", challenge: "Fragmented orders, inventory, and customer data.", solution: "Synchronize commerce, warehouses, finance, and CRM.", benefit: "Accurate stock and faster fulfillment." },
  { title: "Healthcare", icon: "HeartPulse", description: "Secure resource management", challenge: "Complex procurement, assets, and regulatory controls.", solution: "Connect finance, inventory, workforce, and reporting.", benefit: "Stronger governance and service continuity." },
  { title: "Hospitality", icon: "Hotel", description: "Multi-property visibility", challenge: "Distributed purchasing, staffing, and property performance.", solution: "Centralize procurement, finance, assets, and HR.", benefit: "Consistent guest operations and cost control." },
  { title: "Construction", icon: "HardHat", description: "Project financial control", challenge: "Budget leakage and limited project visibility.", solution: "Link projects, procurement, resources, and accounting.", benefit: "Real-time margin and project performance." },
  { title: "Logistics", icon: "Truck", description: "Connected fleet operations", challenge: "Disjointed warehouse, fleet, and billing workflows.", solution: "Coordinate inventory, transport, costs, and invoicing.", benefit: "Faster movement and more accurate costing." },
  { title: "Energy", icon: "Zap", description: "Asset-intensive operations", challenge: "Complex assets, maintenance, and compliance reporting.", solution: "Unify assets, procurement, workforce, and analytics.", benefit: "Improved uptime and operational control." },
  { title: "Agriculture", icon: "Sprout", description: "Field-to-finance management", challenge: "Seasonal planning and fragmented farm operations.", solution: "Connect inputs, inventory, production, sales, and finance.", benefit: "Better yield economics and traceability." },
] as const satisfies readonly ERPIndustry[];

export const erpBenefits = [
  { title: "ERP Expertise", description: "Experience across modern ERP platforms.", icon: "BadgeCheck" },
  { title: "Business-Centric Approach", description: "Solutions designed around your workflows.", icon: "BriefcaseBusiness" },
  { title: "Scalable Architecture", description: "Ready for future growth.", icon: "Layers3" },
  { title: "End-to-End Support", description: "Implementation, training, and optimization.", icon: "LifeBuoy" },
  { title: "Enterprise Quality", description: "Secure and reliable solutions.", icon: "ShieldCheck" },
] as const satisfies readonly ERPItem[];

export const erpIntegrations = ["CRM", "eCommerce", "Payment Systems", "Banking", "External APIs", "Warehouse", "Legacy Applications"] as const;
export const erpHeroModules = ["Finance", "Inventory", "Sales", "Manufacturing", "HR", "Analytics", "CRM"] as const;
