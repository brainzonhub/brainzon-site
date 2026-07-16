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
