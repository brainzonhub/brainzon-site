export interface CaseStudyMetric {
  value: string;
  label: string;
  detail: string;
  progress: number;
}

export interface CaseStudyImplementationStep {
  title: string;
  description: string;
  duration: string;
}

export interface CaseStudyQuote {
  text: string;
  attribution: string;
  role: string;
}

export interface CaseStudyCta {
  label: string;
  href: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  description: string;
  clientName: string;
  clientSummary: string;
  industry: string;
  location: string;
  size: string;
  logo?: string;
  heroImage?: string;
  publishedDate: string;
  challengeHighlight: string;
  challenges: string[];
  beforeMetrics: Array<{ label: string; value: string }>;
  solutionSummary: string;
  products: string[];
  deploymentModel: string;
  features: string[];
  architecture: string[];
  implementationSteps: CaseStudyImplementationStep[];
  resultsMetrics: CaseStudyMetric[];
  resultsSummary: string;
  quote: CaseStudyQuote;
  relatedCaseStudies: string[];
  primaryCta: CaseStudyCta;
  secondaryCta: CaseStudyCta;
}

const standardImplementation: CaseStudyImplementationStep[] = [
  {
    title: "Discovery & Analysis",
    description: "Mapped critical processes, data dependencies, operational constraints, controls, and success measures with business and technology owners.",
    duration: "Weeks 1–2",
  },
  {
    title: "Solution Design",
    description: "Defined the target architecture, integration contracts, security boundaries, deployment model, and phased release plan.",
    duration: "Weeks 3–4",
  },
  {
    title: "Configuration & Customization",
    description: "Configured Brainzon platforms and implemented only the extensions required for differentiated client workflows.",
    duration: "Weeks 5–8",
  },
  {
    title: "Data Migration & Integration",
    description: "Cleansed master data, rehearsed migration, and connected source systems through observable, idempotent integration flows.",
    duration: "Weeks 7–10",
  },
  {
    title: "Testing & QA",
    description: "Validated functionality, performance, security, reconciliation, disaster recovery, and end-to-end business acceptance.",
    duration: "Weeks 9–11",
  },
  {
    title: "Training & Go-Live",
    description: "Prepared role-based training, cutover runbooks, support coverage, and a controlled production launch.",
    duration: "Week 12",
  },
  {
    title: "Post-Go-Live Optimization",
    description: "Monitored adoption and service health, resolved early exceptions, and tuned automation using measured outcomes.",
    duration: "Ongoing",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "smart-factory-iot-overhaul",
    title: "Factory Optimization & Smart Scheduling Overhaul",
    summary: "A connected ERP and industrial AI platform unified production planning, maintenance signals, and shop-floor execution for a growing manufacturer.",
    description: "How Brainzon combined BrainERP, BrainAI, and BrainConnect to reduce production cycle time and improve equipment effectiveness for Alim Agro Industries.",
    clientName: "Alim Agro Industries",
    clientSummary: "A multi-site food and agro-processing manufacturer coordinating raw-material intake, batch production, quality control, maintenance, warehousing, and regional distribution.",
    industry: "Manufacturing",
    location: "Dhaka, Bangladesh",
    size: "1,000+ employees across multiple production sites",
    heroImage: "/images/case-studies/enterprise-transformation.svg",
    publishedDate: "2026-07-17",
    challengeHighlight: "Disconnected schedules and delayed equipment signals created avoidable bottlenecks across production, maintenance, and material planning.",
    challenges: [
      "Production plans were maintained across spreadsheets and isolated line-level systems, limiting visibility into constraints and change impact.",
      "Maintenance teams responded to alarms after performance had already deteriorated, increasing unplanned stoppages and expedited parts demand.",
      "Inventory, procurement, quality, and production records were reconciled manually, delaying decisions and weakening schedule confidence.",
      "Leaders lacked a consistent view of cycle time, downtime causes, work-in-progress, and overall equipment effectiveness across plants.",
    ],
    beforeMetrics: [
      { label: "Schedule reconciliation", value: "2 days" },
      { label: "Unplanned downtime", value: "18 hrs/mo" },
      { label: "Production data delay", value: "8–24 hrs" },
    ],
    solutionSummary: "Brainzon established BrainERP as the operational system of record, connected plant events through BrainConnect, and used BrainAI to identify equipment anomalies and scheduling risk. A cloud-first analytics layer provided governed cross-site visibility without placing reporting load on transactional systems.",
    products: ["BrainERP", "BrainAI", "BrainConnect", "Cloud Transformation"],
    deploymentModel: "Hybrid cloud with plant-edge integration and a centrally governed regional data platform",
    features: [
      "Finite-capacity production scheduling",
      "Materials and work-in-progress visibility",
      "Condition-based maintenance recommendations",
      "Automated procurement and parts reservation",
      "Quality checkpoints and batch traceability",
      "Cross-site operational dashboards",
    ],
    architecture: ["Plant sensors & MES", "BrainConnect edge gateway", "BrainERP operations", "BrainAI prediction", "Cloud analytics"],
    implementationSteps: standardImplementation,
    resultsMetrics: [
      { value: "28%", label: "Faster cycle time", detail: "Measured across prioritized production lines after stabilization.", progress: 78 },
      { value: "40%", label: "Less unplanned downtime", detail: "Reduction in interruption hours for connected critical assets.", progress: 88 },
      { value: "15%", label: "OEE improvement", detail: "Availability, performance, and quality gains across the pilot scope.", progress: 66 },
      { value: "22%", label: "Lower expedite cost", detail: "Reduced emergency parts and material-ordering expenditure.", progress: 72 },
    ],
    resultsSummary: "The unified platform gave planners a current view of capacity and materials, helped maintenance teams intervene earlier, and provided leadership with consistent operational measures. Reported outcomes reflect the client-approved implementation scope and stabilization period.",
    quote: {
      text: "Brainzon helped us connect planning decisions with what was actually happening on the factory floor. Our teams now work from the same operational picture and can respond before a constraint becomes a production loss.",
      attribution: "Operations Transformation Sponsor",
      role: "Alim Agro Industries",
    },
    relatedCaseStudies: ["omnichannel-retail-inventory-sync"],
    primaryCta: { label: "Request a Demo", href: "/book-demo" },
    secondaryCta: { label: "Talk to Experts", href: "/contact" },
  },
  {
    slug: "omnichannel-retail-inventory-sync",
    title: "Omnichannel Stock Accuracy & Checkout Overhaul",
    summary: "A real-time inventory and order platform synchronized stores, ecommerce, warehouses, and customer engagement across a growing retail network.",
    description: "How Brainzon used BrainERP, BrainCRM, and BrainConnect to improve inventory accuracy and checkout throughput for Arabian Store BD.",
    clientName: "Arabian Store BD",
    clientSummary: "A multi-channel retailer serving customers through physical stores, ecommerce, warehouse fulfillment, and regional delivery partners.",
    industry: "Retail & E-commerce",
    location: "Dhaka, Bangladesh",
    size: "500+ employees across stores, warehouses, and digital operations",
    heroImage: "/images/case-studies/enterprise-transformation.svg",
    publishedDate: "2026-07-17",
    challengeHighlight: "Inventory updates moved through delayed batch processes, causing oversells, manual reconciliation, canceled orders, and inconsistent customer promises.",
    challenges: [
      "Store, ecommerce, and warehouse systems held different versions of sellable inventory and reservation state.",
      "Peak checkout traffic created stock conflicts and slow responses while teams manually investigated exceptions.",
      "Order and fulfillment status was fragmented across systems, limiting proactive customer communication.",
      "Daily reconciliation consumed operational capacity and still detected issues after customers had been affected.",
    ],
    beforeMetrics: [
      { label: "Inventory sync delay", value: "Up to 24 hrs" },
      { label: "Manual reconciliation", value: "30 hrs/wk" },
      { label: "Peak checkout capacity", value: "1× baseline" },
    ],
    solutionSummary: "Brainzon introduced a governed inventory service with atomic reservations, connected channels through BrainConnect events, synchronized operational and financial records in BrainERP, and used BrainCRM to provide consistent order status and service communication.",
    products: ["BrainERP", "BrainCRM", "BrainConnect", "Cloud Transformation"],
    deploymentModel: "Cloud-first regional deployment with resilient store integration and event-driven synchronization",
    features: [
      "Real-time inventory positions and reservations",
      "Event-driven POS and ecommerce synchronization",
      "Order orchestration and fulfillment visibility",
      "Automated inventory reconciliation",
      "Customer 360 order and service context",
      "Operational monitoring and replayable integrations",
    ],
    architecture: ["Stores & ecommerce", "BrainConnect event mesh", "Inventory & orders", "BrainERP finance", "BrainCRM service"],
    implementationSteps: standardImplementation,
    resultsMetrics: [
      { value: "99.9%", label: "Inventory accuracy", detail: "Reconciled accuracy across connected channels and locations.", progress: 99 },
      { value: "2.5×", label: "Checkout throughput", detail: "Peak transaction capacity after platform stabilization.", progress: 85 },
      { value: "82%", label: "Fewer cancellations", detail: "Reduction in cancellations attributable to stock discrepancies.", progress: 92 },
      { value: "65%", label: "Less manual reconciliation", detail: "Operational effort redirected from spreadsheet investigation.", progress: 80 },
    ],
    resultsSummary: "The retailer gained a reliable view of available inventory, protected checkout with reservations, and gave customer teams consistent order context. Reported outcomes reflect the connected store and ecommerce scope during the measured period.",
    quote: {
      text: "We can now make an inventory promise with confidence. Store teams, ecommerce operations, and customer service see the same order state, which has changed both our speed and our customer experience.",
      attribution: "Director of Digital Commerce",
      role: "Arabian Store BD",
    },
    relatedCaseStudies: ["smart-factory-iot-overhaul"],
    primaryCta: { label: "Request a Demo", href: "/book-demo" },
    secondaryCta: { label: "Talk to Experts", href: "/contact" },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
