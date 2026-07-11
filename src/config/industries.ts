export interface IndustryChallenge {
  title: string;
  description: string;
}

export interface IndustryBenefit {
  title: string;
  description: string;
  metric: string;
}

export interface Industry {
  name: string;
  slug: string;
  headline: string;
  description: string;
  challenges: IndustryChallenge[];
  solution: string;
  benefits: IndustryBenefit[];
  techStack: string[];
  icon: string;
  href: string;
}

export const industriesConfig: Industry[] = [
  {
    name: "Manufacturing",
    slug: "manufacturing",
    headline: "Optimize Factory Output, Supply Chains, and Smart Scheduling",
    description: "High-performance enterprise software integrations linking shop floor machinery, supply logistics, and resource capacity planning.",
    challenges: [
      {
        title: "Capacity Bottlenecks",
        description: "Manual shop scheduling leads to idle machine cycles and capacity imbalances."
      },
      {
        title: "Inventory Delays",
        description: "Failing to sync raw materials procurement with active manufacturing runs creates downstream delay cascades."
      },
      {
        title: "Predictive Breakdowns",
        description: "Unexpected machine fatigue events trigger unplanned facility downtime and expensive repair runs."
      }
    ],
    solution: "Brainzon unifies shop-floor IoT tracking, predictive machine maintenance schedules, and global inventory syncing into a single, high-fidelity operations interface.",
    benefits: [
      {
        title: "Cycle Time Reductions",
        description: "Optimize manufacturing sequences automatically based on real-time orders.",
        metric: "28%"
      },
      {
        title: "OEE Improvement",
        description: "Reduce machine idle times and balance factory workflows.",
        metric: "15%"
      },
      {
        title: "Maintenance Outage Drops",
        description: "Resolve structural wear issues proactively using predictive anomaly models.",
        metric: "40%"
      }
    ],
    techStack: ["BrainERP (MRP & Inventory)", "BrainAI Predictive Anomaly", "BrainConnect IoT Pipelines"],
    icon: "factory",
    href: "/solutions/manufacturing"
  },
  {
    name: "Retail",
    slug: "retail",
    headline: "Omnichannel Commerce, Smart Inventory, and Personalized Journeys",
    description: "Connect physical POS endpoints, e-commerce stores, client customer loyalty platforms, and back-office delivery systems.",
    challenges: [
      {
        title: "Stock-out Risks",
        description: "Mismatched stock counts between brick-and-mortar stores and online catalogs lead to unfulfilled orders and client friction."
      },
      {
        title: "Low Client Engagement",
        description: "Siloed customer purchase data prevents target marketing and loyalty outreach programs."
      },
      {
        title: "Delivery Latency",
        description: "Decentralized warehouse locations and unoptimized dispatch paths slow down last-mile shipping operations."
      }
    ],
    solution: "Brainzon integrates real-time inventory syncing across all commerce channels, client profiles, and automated delivery pipelines.",
    benefits: [
      {
        title: "Inventory Accuracy",
        description: "Sync store shelves and online warehouses instantly.",
        metric: "99.9%"
      },
      {
        title: "Customer Conversion",
        description: "Deliver automated, targeted outreach sequences using CRM data.",
        metric: "35%"
      },
      {
        title: "Order Fulfillment Speed",
        description: "Optimize shipping routes and warehouse dispatch coordinates.",
        metric: "2.5x"
      }
    ],
    techStack: ["BrainCRM Pipeline", "BrainERP Warehouse Management", "BrainConnect API Integration"],
    icon: "shopping-bag",
    href: "/solutions/retail"
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    headline: "Secure Patient Portals, Compliance, and Medical Operations",
    description: "HIPAA-aligned platforms that streamline staff scheduling, patient pipelines, records scanning, and billing syncs.",
    challenges: [
      {
        title: "Data Fragmentation",
        description: "Fragmented patient health records across legacy databases cause clinician delays and diagnostics errors."
      },
      {
        title: "Compliance Auditing",
        description: "Navigating complex security guidelines (HIPAA/GDPR) manually risks auditing penalties."
      },
      {
        title: "Administrative Fatigue",
        description: "Clinicians spending excess hours manually writing diagnostics and charts instead of focus care."
      }
    ],
    solution: "Brainzon bridges patient data flows securely, automates administrative charting via document intelligence, and simplifies auditing controls.",
    benefits: [
      {
        title: "Paperwork Reduction",
        description: "Extract patient records and clinical intake documents automatically.",
        metric: "70%"
      },
      {
        title: "Audit Compliance",
        description: "Enforce data encryption protocols and complete access logs.",
        metric: "100%"
      },
      {
        title: "Patient Triage Speed",
        description: "Resolve waiting list backlogs with automated queue management.",
        metric: "30%"
      }
    ],
    techStack: ["BrainAI Document Intelligence", "BrainConnect HIPAA Pipelines", "BrainCRM Patient Management"],
    icon: "heart-pulse",
    href: "/solutions/healthcare"
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    headline: "Guest Management, Reservation Syncing, and Billing Systems",
    description: "Enterprise dashboards coordinating property management (PMS), reservation portals, and guest services workflows.",
    challenges: [
      {
        title: "Booking Over-allocations",
        description: "Lagging channel manager syncs between booking agencies trigger double-booking events."
      },
      {
        title: "Guest Profile Silos",
        description: "Lack of unified history prevents front-of-house staff from personalizing guest experiences."
      },
      {
        title: "Service Flow Bottlenecks",
        description: "Manual room status tracking delays cleaning updates and guest check-ins."
      }
    ],
    solution: "Brainzon synchronizes property bookings, unifies guest interaction profiles, and automates housekeeping service alerts.",
    benefits: [
      {
        title: "Double-Booking Drops",
        description: "Perform real-time reservation checks across booking APIs.",
        metric: "0%"
      },
      {
        title: "Guest Satisfaction Score",
        description: "Equip guest services with loyalty records and historic preferences.",
        metric: "95%"
      },
      {
        title: "Room Turnover Rate",
        description: "Optimize cleaning schedules with instant room status updates.",
        metric: "20%"
      }
    ],
    techStack: ["BrainCRM Guest Loyalty", "BrainConnect PMS Gateways", "BrainERP Asset Management"],
    icon: "hotel",
    href: "/solutions/hospitality"
  },
  {
    name: "Logistics",
    slug: "logistics",
    headline: "Fleet Tracking, Route Optimizations, and Warehouse Syncs",
    description: "Supply chain control hubs coordinating dispatch systems, real-time fleet telematics, and inventory locations.",
    challenges: [
      {
        title: "Inefficient Fleet Routing",
        description: "Unoptimized transit schedules lead to high fuel overheads and delay penalties."
      },
      {
        title: "Lack of Route Visibility",
        description: "Unpredictable transit status reports prevent accurate customer delivery notifications."
      },
      {
        title: "Warehouse Sorting Friction",
        description: "Disorganized warehouse sorting sequences create bottlenecks at shipping bays."
      }
    ],
    solution: "Brainzon optimizes dispatch routing, streams live transit coordinates, and automates sorting sequence queues.",
    benefits: [
      {
        title: "Fuel & Mileage Savings",
        description: "Run predictive routing algorithms based on live traffic reports.",
        metric: "22%"
      },
      {
        title: "On-Time Delivery Rate",
        description: "Improve ETA accuracy with continuous location tracking.",
        metric: "98.8%"
      },
      {
        title: "Dock Turnaround Speed",
        description: "Minimize shipping bay congestion with sequential arrival routing.",
        metric: "35%"
      }
    ],
    techStack: ["BrainConnect Event Pipelines", "BrainAI Route Optimizers", "BrainERP Fleet Management"],
    icon: "truck",
    href: "/solutions/logistics"
  },
  {
    name: "Construction",
    slug: "construction",
    headline: "Project Schedulers, Material Procurement, and Cost Trackers",
    description: "Unify jobsite schedules, subcontractor tracking, materials logistics, and project cost compliance.",
    challenges: [
      {
        title: "Budget Overruns",
        description: "Disconnected material purchasing schedules lead to waste and cost overruns."
      },
      {
        title: "Jobsite Delays",
        description: "Poor alignment between resource arrival dates and workforce schedules halts progress."
      },
      {
        title: "Compliance Reporting",
        description: "Failing to catalog worker safety logs and subcontractor permits risks compliance violations."
      }
    ],
    solution: "Brainzon automates purchase order approvals, matches resource arrivals with field schedules, and catalogs compliance logs.",
    benefits: [
      {
        title: "Budget Adherence",
        description: "Enforce procurement controls and track material cost projections.",
        metric: "96%"
      },
      {
        title: "Schedule Delay Reductions",
        description: "Align workforce scheduling with real-time supply chain updates.",
        metric: "15%"
      },
      {
        title: "Compliance Log Accuracy",
        description: "Unify permit tracking, worker safety checklists, and subcontractor certifications.",
        metric: "100%"
      }
    ],
    techStack: ["BrainERP Sourcing & Finance", "BrainConnect Field APIs", "BrainCRM Partner Portal"],
    icon: "hard-hat",
    href: "/solutions/construction"
  }
];
