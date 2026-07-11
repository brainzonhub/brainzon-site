export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  content: string;
}

export interface CaseStudy {
  title: string;
  slug: string;
  excerpt: string;
  client: string;
  industry: string;
  metric: string;
  challenge: string;
  solution: string;
  results: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "Modernizing Legacy ERP Systems for the Cloud Era",
    slug: "modernizing-legacy-erp-systems",
    excerpt: "How enterprise businesses wrap monolithic systems with API gateways to achieve real-time synchronization and scale.",
    date: "July 10, 2026",
    author: "Sarah Jenkins (Solution Architect)",
    readTime: "5 min read",
    category: "Enterprise Architecture",
    content: "Legacy ERP platforms represent the operational core of many enterprises. However, their monolithic design, closed databases, and lack of real-time event publishing create barriers to digital transformation..."
  },
  {
    title: "The ROI of Predictive AI in Smart Manufacturing",
    slug: "benefits-of-predictive-ai-maintenance",
    excerpt: "Leveraging IoT streams and anomaly detection algorithms to minimize shop-floor machine outage downtime.",
    date: "July 05, 2026",
    author: "Dr. Aris Vance (Head of AI)",
    readTime: "6 min read",
    category: "Artificial Intelligence",
    content: "Unplanned machinery outages cost manufacturing operations billions annually. By introducing predictive anomaly tracking, factories can detect structural wear signs weeks before failure events occur..."
  },
  {
    title: "Building a Resilient Omnichannel Retail Platform",
    slug: "building-omnichannel-retail-inventory",
    excerpt: "Syncing storefront transactions, physical inventory locations, and delivery fleets with zero sync lag.",
    date: "June 28, 2026",
    author: "David Chen (Lead Engineer)",
    readTime: "4 min read",
    category: "Retail Commerce",
    content: "Omnichannel success hinges on a simple metric: absolute accuracy. If an item is bought online but warehouse inventory data lags, order cancellations occur, harming client trust..."
  }
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Factory Optimization & Smart Scheduling Overhaul",
    slug: "smart-factory-iot-overhaul",
    excerpt: "How a global manufacturing client reduced shop-floor cycle times by 28% and increased OEE using BrainERP and BrainAI.",
    client: "Alim Agro Industries",
    industry: "Manufacturing",
    metric: "28% Cycle Time Drop",
    challenge: "Disorganized assembly line schedules and unmonitored machine wear caused frequent cycle bottlenecks.",
    solution: "Brainzon deployed BrainERP modules and BrainAI anomaly analytics to coordinate schedules and flag machinery wear.",
    results: [
      "Cycle times dropped by 28% in 3 months.",
      "Unplanned outages reduced by 40%.",
      "OEE improved by 15% overall."
    ]
  },
  {
    title: "Omnichannel Stock Accuracy & Checkout Overhaul",
    slug: "omnichannel-retail-inventory-sync",
    excerpt: "Synchronizing physical store shelves and eCommerce warehouses to maintain 99.9% inventory database accuracy.",
    client: "Arabian Store BD",
    industry: "Retail & E-commerce",
    metric: "99.9% Sync Accuracy",
    challenge: "Inconsistent stock counts between checkout endpoints and web portals led to high order cancellations.",
    solution: "Synchronized database pipelines utilizing BrainConnect API nodes and automated inventory triggers.",
    results: [
      "Inventory records synchronized with 99.9% database accuracy.",
      "Order cancellations dropped to zero.",
      "Checkouts throughput scaled by 2.5x."
    ]
  }
];
