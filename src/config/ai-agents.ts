export interface AIAgentCapability {
  title: string;
  description: string;
  tag: string;
}

export interface AIAgentWorkflowStep {
  step: string;
  phase: string;
  title: string;
  agentAction: string;
  humanGate: string;
}

export interface AIAgentGovernancePoint {
  title: string;
  description: string;
}

export interface AIAgentFAQ {
  question: string;
  answer: string;
}

export interface AIAgentConfig {
  slug: string;
  name: string;
  productName: "BrainMKT" | "BrainCRM" | "BrainERP" | "BrainBooks";
  productSlug: "brainmkt" | "braincrm" | "brainerp" | "brainbooks";
  productHref: string;
  badge: string;
  headline: string;
  subheadline: string;
  heroDescription: string;
  color: "cyan" | "amber" | "violet" | "emerald";
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  humanReviewControl: string;
  governanceSummary: string;
  coreCapabilities: AIAgentCapability[];
  supervisedWorkflows: AIAgentWorkflowStep[];
  governanceFramework: AIAgentGovernancePoint[];
  parentIntegration: {
    title: string;
    description: string;
    dataPoints: string[];
  };
  faqs: AIAgentFAQ[];
}

export const aiAgentsConfig: AIAgentConfig[] = [
  {
    slug: "brainmkt-ai-agent",
    name: "BrainMKT AI Agent",
    productName: "BrainMKT",
    productSlug: "brainmkt",
    productHref: "/products/brainmkt",
    badge: "Marketing Operations AI",
    headline: "Supervised AI Assistant for Marketing Planning & Campaigns",
    subheadline: "Accelerate campaign drafting, audience segmentation, and lead qualification with human-in-the-loop publishing controls.",
    heroDescription: "The BrainMKT AI Agent operates natively within the BrainMKT marketing management suite. It analyzes engagement trends, drafts multi-channel campaign copy, suggests optimal audience segments, and prepares qualified leads for CRM handoff—while keeping marketing leaders in full editorial control.",
    color: "cyan",
    metaTitle: "BrainMKT AI Agent | AI Marketing Planning & Campaign Automation",
    metaDescription: "Discover Brainzon's BrainMKT AI Agent. Embedded marketing operations assistant for campaign drafting, audience segmentation, and lead qualification with mandatory human review gates.",
    keywords: [
      "BrainMKT AI Agent",
      "AI marketing assistant",
      "marketing campaign management software",
      "AI marketing agent",
      "marketing workflow automation",
      "lead qualification AI",
      "marketing operations software"
    ],
    humanReviewControl: "Content review and marketing manager sign-off required prior to campaign release or ad dispatch.",
    governanceSummary: "Operates exclusively within marketing asset boundaries; cannot initiate public communications or disburse advertising budgets autonomously.",
    coreCapabilities: [
      {
        title: "Multi-Channel Campaign Drafting",
        description: "Generates multi-stage email sequences, landing page draft copy, and social announcements aligned to designated buyer personas.",
        tag: "Content Generation"
      },
      {
        title: "Dynamic Audience Segmentation",
        description: "Scans past campaign responsiveness and behavioral triggers to propose targeted audience cohorts without exposing raw PII.",
        tag: "Audience Intelligence"
      },
      {
        title: "A/B Subject & Messaging Optimization",
        description: "Recommends subject line variations, call-to-action phrasing, and send-time distributions backed by historical open-rate benchmarks.",
        tag: "Performance Tuning"
      },
      {
        title: "CRM Lead Scoring & Handoff",
        description: "Evaluates respondent engagement scores and stages high-intent leads for sales routing directly into BrainCRM.",
        tag: "Pipeline Alignment"
      }
    ],
    supervisedWorkflows: [
      {
        step: "01",
        phase: "Brief & Discovery",
        title: "Campaign Parameters Ingestion",
        agentAction: "Scans approved marketing briefs, brand tone guidelines, and historical conversion metrics.",
        humanGate: "Marketing strategist specifies campaign objectives, target audience, and channel constraints."
      },
      {
        step: "02",
        phase: "Drafting & Staging",
        title: "Asset & Sequence Preparation",
        agentAction: "Drafts email nurture sequences, CTA variants, and segment criteria in staging status.",
        humanGate: "Agent cannot publish. All staged materials are submitted to the marketing review queue."
      },
      {
        step: "03",
        phase: "Inspection & Sign-Off",
        title: "Editorial & Compliance Review",
        agentAction: "Flags brand guideline deviations, missing UTM parameters, or unverified claims.",
        humanGate: "Marketing manager validates copy, approves schedule, and authorizes release."
      },
      {
        step: "04",
        phase: "Execution & Handoff",
        title: "Governed Dispatch & Lead Routing",
        agentAction: "Monitors real-time responses and pre-stages scored leads into the sales intake queue.",
        humanGate: "Sales and marketing leads review lead qualification thresholds and accept pipeline handoffs."
      }
    ],
    governanceFramework: [
      {
        title: "No Autonomous Publishing",
        description: "Every campaign, email sequence, and ad draft requires human sign-off before public distribution."
      },
      {
        title: "Brand Guideline Adherence",
        description: "Prompts are constrained by approved corporate messaging standards, disclaimers, and tone rules."
      },
      {
        title: "Audience Privacy Protection",
        description: "Audience segmentation works on aggregated behavioural metrics with strict PII masking."
      },
      {
        title: "Traceable Audit Trail",
        description: "All draft iterations, reviewer modifications, and approval timestamps are logged for compliance."
      }
    ],
    parentIntegration: {
      title: "Deep Native Integration with BrainMKT",
      description: "Unlike generic generative AI tools that operate in disconnected browser tabs, the BrainMKT AI Agent lives inside your campaign calendar, template library, and lead scoring matrices.",
      dataPoints: [
        "Direct access to BrainMKT campaign asset repositories",
        "Seamless lead record sync into BrainCRM",
        "Permission-aware role boundaries matching user marketing permissions",
        "Unified reporting dashboards correlating agent drafts with pipeline ROI"
      ]
    },
    faqs: [
      {
        question: "Can the BrainMKT AI Agent send emails or launch campaigns on its own?",
        answer: "No. Brainzon enforces strict human-in-the-loop controls. The AI Agent can only draft campaigns, propose audience cohorts, and stage sequences. Every public communication requires explicit approval by an authorized marketing manager."
      },
      {
        question: "How does the agent know our company's brand voice?",
        answer: "The agent is grounded in your approved BrainMKT brand guidelines, product positioning documents, and historical high-performing content templates, ensuring consistent messaging across all generated drafts."
      },
      {
        question: "How does BrainMKT AI Agent connect with sales teams?",
        answer: "When integrated with BrainCRM, the agent scores incoming campaign engagement and automatically prepares qualified lead records with full touchpoint context for sales team review."
      }
    ]
  },
  {
    slug: "braincrm-ai-agent",
    name: "BrainCRM AI Agent",
    productName: "BrainCRM",
    productSlug: "braincrm",
    productHref: "/products/braincrm",
    badge: "Customer Intelligence AI",
    headline: "Supervised AI Assistant for Sales Pipelines & Customer Context",
    subheadline: "Synthesize customer interactions, detect deal health risks, and draft tailored follow-ups under sales rep supervision.",
    heroDescription: "The BrainCRM AI Agent is an embedded workflow assistant for relationship-driven sales and account management. It consolidates multi-channel interaction history, transcribes meeting action items, surfaces deal velocity risks, and prepares customized proposals—all within role-based access boundaries.",
    color: "amber",
    metaTitle: "BrainCRM AI Agent | AI Sales Assistant & Deal Intelligence",
    metaDescription: "Discover Brainzon's BrainCRM AI Agent. Embedded relationship intelligence for customer timeline summaries, deal health scoring, and follow-up proposal preparation with mandatory sales approval.",
    keywords: [
      "BrainCRM AI Agent",
      "AI CRM assistant",
      "customer relationship management software",
      "AI sales assistant",
      "deal intelligence AI",
      "sales pipeline automation",
      "CRM workflow assistant"
    ],
    humanReviewControl: "Human review mandated before external customer communication, contract dispatch, or quote issuance.",
    governanceSummary: "Restricted by authenticated user role permissions; strictly masks sensitive customer PII and prevents unauthorized data export.",
    coreCapabilities: [
      {
        title: "Multi-Touchpoint Timeline Summaries",
        description: "Synthesizes emails, meeting notes, call logs, and support tickets into an executive customer brief in seconds.",
        tag: "Relationship Context"
      },
      {
        title: "Pipeline Deal Health & Velocity Scoring",
        description: "Identifies stalled opportunities, delayed responses, and decision-maker turnover to flag pipeline risks early.",
        tag: "Deal Intelligence"
      },
      {
        title: "Meeting Note & Action Item Extraction",
        description: "Transforms unstructured call recordings and meeting transcripts into structured CRM action items and next steps.",
        tag: "Productivity"
      },
      {
        title: "Commercial Follow-Up Proposal Staging",
        description: "Drafts tailored follow-up emails, quote summaries, and scope outlines ready for the account executive's final review.",
        tag: "Sales Acceleration"
      }
    ],
    supervisedWorkflows: [
      {
        step: "01",
        phase: "Context Ingestion",
        title: "Interaction History Aggregation",
        agentAction: "Consolidates past account interactions, pending tickets, and active deal stages.",
        humanGate: "Agent accesses only accounts permitted to the authenticated sales representative."
      },
      {
        step: "02",
        phase: "Analysis & Scoring",
        title: "Deal Momentum Evaluation",
        agentAction: "Calculates stage duration, response latency, and engagement variance against healthy benchmarks.",
        humanGate: "Sales rep reviews risk flags and determines appropriate strategy."
      },
      {
        step: "03",
        phase: "Drafting & Staging",
        title: "Follow-Up Proposal Drafting",
        agentAction: "Generates tailored email response and proposal recap matching discussion points.",
        humanGate: "Rep edits copy, confirms pricing terms, and authorizes transmission."
      },
      {
        step: "04",
        phase: "Operational Handoff",
        title: "Order & Provisioning Coordination",
        agentAction: "Stages closed-won opportunity data for delivery handoff to BrainERP.",
        humanGate: "Sales director and operations manager verify terms before operational execution."
      }
    ],
    governanceFramework: [
      {
        title: "No Unattended Customer Contact",
        description: "The agent cannot send emails, SMS, or quotes directly to customers without human authorization."
      },
      {
        title: "Strict Role-Based Field Access",
        description: "Sensitive commercial fields (margins, customer credit terms) respect user permission tiers."
      },
      {
        title: "Grounded in Authoritative Records",
        description: "All summaries cite specific email IDs, call dates, and CRM activity records to prevent hallucinations."
      },
      {
        title: "Zero Data Leakage Across Tenants",
        description: "Client CRM information is never used to train global public language models."
      }
    ],
    parentIntegration: {
      title: "Deep Native Integration with BrainCRM",
      description: "Embedded directly into BrainCRM contact cards, deal boards, and activity feeds, providing instantaneous operational context without third-party plugins.",
      dataPoints: [
        "Direct link between CRM deals and BrainERP inventory availability",
        "Automatic synchronization with BrainMKT campaign lead sources",
        "Bi-directional audit logging of all agent summaries and rep actions",
        "Custom field awareness for industry-specific CRM workflows"
      ]
    },
    faqs: [
      {
        question: "Can the BrainCRM AI Agent negotiate terms or discount pricing?",
        answer: "No. The BrainCRM AI Agent is an analytical and drafting assistant. It can summarize past agreed pricing or suggest standard catalog tiers, but pricing adjustments and discounts strictly require human authorization."
      },
      {
        question: "Does the agent access emails from personal or non-CRM mailboxes?",
        answer: "No. The agent only accesses communications explicitly logged within the authorized BrainCRM account records in compliance with your organization's corporate data policy."
      },
      {
        question: "How does BrainCRM AI Agent transition closed deals to ERP?",
        answer: "When a deal is marked Won, the agent packages customer requirements, delivery addresses, and approved product line items for verification and handoff into BrainERP."
      }
    ]
  },
  {
    slug: "brainerp-ai-agent",
    name: "BrainERP AI Agent",
    productName: "BrainERP",
    productSlug: "brainerp",
    productHref: "/products/brainerp",
    badge: "Operations & Supply Chain AI",
    headline: "Supervised AI Assistant for ERP Operations & Inventory Coordination",
    subheadline: "Scan stockout risks, detect supplier lead-time variances, and stage purchase orders under operations manager oversight.",
    heroDescription: "The BrainERP AI Agent monitors operational telemetry across inventory, procurement, production schedules, and warehouse fulfillment. It surfaces operational bottlenecks, flags supply chain lead-time anomalies, and drafts purchase orders—requiring explicit authorization for any transaction execution.",
    color: "violet",
    metaTitle: "BrainERP AI Agent | AI Operations & Supply Chain Assistant",
    metaDescription: "Discover Brainzon's BrainERP AI Agent. Embedded operations assistant for inventory stockout prevention, MRP forecasting, and purchase order drafting with mandatory manager authorization.",
    keywords: [
      "BrainERP AI Agent",
      "AI ERP assistant",
      "enterprise resource planning software",
      "AI operations assistant",
      "supply chain AI",
      "inventory management software",
      "ERP workflow automation"
    ],
    humanReviewControl: "Transaction authorization and manager sign-off required for purchase order issuance or stock adjustments.",
    governanceSummary: "Read-only ledger visibility; cannot execute stock movements, write down assets, or trigger supplier disbursements autonomously.",
    coreCapabilities: [
      {
        title: "Multi-Warehouse Inventory Stockout Scans",
        description: "Monitors stock levels, minimum reorder thresholds, and depletion velocity across regional warehouses in real time.",
        tag: "Inventory Control"
      },
      {
        title: "MRP Demand & Lead-Time Variance Forecasting",
        description: "Projects component requirements against active manufacturing orders and highlights supplier delivery delays.",
        tag: "Demand Forecasting"
      },
      {
        title: "Draft Purchase Requisition Staging",
        description: "Pre-fills purchase orders with preferred supplier catalogs, contract pricing, and estimated delivery dates.",
        tag: "Procurement Staging"
      },
      {
        title: "Production Bottleneck & Capacity Diagnostics",
        description: "Identifies work-center overutilization, machine downtime risks, and material shortfall constraints.",
        tag: "Shop-Floor Visibility"
      }
    ],
    supervisedWorkflows: [
      {
        step: "01",
        phase: "Monitoring & Scan",
        title: "Operational Threshold Monitoring",
        agentAction: "Continuously scans inventory SKU levels, bill-of-materials dependencies, and supplier delivery dates.",
        humanGate: "Operations parameters (safety stock, lead-time tolerance) are defined by plant management."
      },
      {
        step: "02",
        phase: "Exception Detection",
        title: "Bottleneck & Variance Flagging",
        agentAction: "Detects extended vendor lead time that endangers an upcoming production schedule batch.",
        humanGate: "Procurement officer evaluates alternative approved vendors and confirms requirement."
      },
      {
        step: "03",
        phase: "Requisition Staging",
        title: "Purchase Order Preparation",
        agentAction: "Generates draft Purchase Requisition with item codes, quantities, and contracted rates.",
        humanGate: "Operations manager reviews requisition against budget and signs off authorization."
      },
      {
        step: "04",
        phase: "General Ledger Flow",
        title: "Committed Cost Flow to BrainBooks",
        agentAction: "Transfers committed purchase order data into BrainBooks accounts payable register.",
        humanGate: "Financial controller audits order commitment against fiscal quarter procurement limits."
      }
    ],
    governanceFramework: [
      {
        title: "Zero Autonomous Transaction Execution",
        description: "The agent cannot approve purchase orders, alter inventory records, or issue supplier payments."
      },
      {
        title: "Read-Only Operational Boundaries",
        description: "Telemetry analysis occurs in a sandboxed analytical layer without transactional database locking."
      },
      {
        title: "Strict Separation of Duties",
        description: "Requisition staging and authorization gates enforce corporate governance and auditability."
      },
      {
        title: "Full Auditability",
        description: "Every anomaly flag, recommendation source calculation, and manager decision is permanently recorded."
      }
    ],
    parentIntegration: {
      title: "Deep Native Integration with BrainERP",
      description: "Embedded within BrainERP's inventory registers, bills of materials, and production scheduling modules, providing actionable operational context where decisions happen.",
      dataPoints: [
        "Real-time stock balance synchronization across multiple warehouses",
        "Direct connection to BrainBooks general ledger for committed cost tracking",
        "Live status updates from BrainCRM customer order commitments",
        "Granular plant-level and warehouse-level access control"
      ]
    },
    faqs: [
      {
        question: "Can the BrainERP AI Agent place orders with suppliers automatically?",
        answer: "No. The agent prepares draft purchase requisitions based on validated safety stock formulas. A human procurement manager must review, modify if necessary, and explicitly sign off on the order."
      },
      {
        question: "How does the agent handle supplier price fluctuations?",
        answer: "The agent compares current quotes against contracted rate cards in BrainERP and flags any price variance exceeding approved tolerances for purchasing manager review."
      },
      {
        question: "Does the BrainERP AI Agent work for manufacturing and distribution?",
        answer: "Yes. It supports bill of materials (BOM) explosion, multi-site warehouse balancing, and distribution logistics tracking."
      }
    ]
  },
  {
    slug: "brainbooks-ai-agent",
    name: "BrainBooks AI Agent",
    productName: "BrainBooks",
    productSlug: "brainbooks",
    productHref: "/products/brainbooks",
    badge: "Financial Governance AI",
    headline: "Supervised AI Assistant for Accounting & Ledger Reconciliation",
    subheadline: "Accelerate bank reconciliation, analyze aging variance, and stage month-end entries with zero autonomous payout authority.",
    heroDescription: "The BrainBooks AI Agent assists finance and accounting teams in maintaining pristine, audit-ready financial records. It matches bank feed statements against ledger lines, analyzes accounts receivable and payable aging variances, and drafts month-end closing entries—operating under strict double-entry validation rules.",
    color: "emerald",
    metaTitle: "BrainBooks AI Agent | AI Accounting Assistant & Reconciliation",
    metaDescription: "Discover Brainzon's BrainBooks AI Agent. Embedded financial assistance for bank statement matching, AR/AP aging variance analysis, and month-end closing with zero autonomous payment approval.",
    keywords: [
      "BrainBooks AI Agent",
      "AI accounting assistant",
      "accounting management software",
      "financial reconciliation AI",
      "accounts payable automation",
      "general ledger AI",
      "business accounting software"
    ],
    humanReviewControl: "Strict financial permissions; zero autonomous payment, fund transfer, or irreversible journal posting authority.",
    governanceSummary: "Enforces double-entry accounting integrity; cannot execute payouts, modify closed periods, or alter statutory tax configurations without controller sign-off.",
    coreCapabilities: [
      {
        title: "Automated Bank Statement Line Matching",
        description: "Compares bank transaction feeds against posted customer receipts and vendor payments to propose reconciliation pairs.",
        tag: "Reconciliation"
      },
      {
        title: "AR & AP Aging Variance Analysis",
        description: "Scans open receivables and payables to detect aging anomalies, dispute patterns, and upcoming cashflow bottlenecks.",
        tag: "Working Capital"
      },
      {
        title: "Month-End Close Checklist Staging",
        description: "Prepares recurring depreciation schedules, accrual journal drafts, and prepayments for controller inspection.",
        tag: "Period-End Close"
      },
      {
        title: "Financial Report Movement Explanations",
        description: "Produces natural-language summaries explaining period-over-period budget variances and operating margin shifts.",
        tag: "Management Reporting"
      }
    ],
    supervisedWorkflows: [
      {
        step: "01",
        phase: "Feed Ingestion",
        title: "Bank Statement Line Matching",
        agentAction: "Ingests daily bank feed entries and matches against validated BrainBooks invoices and payment receipts.",
        humanGate: "Unmatched items or variance amounts are flagged for bookkeeper review."
      },
      {
        step: "02",
        phase: "Aging Diagnostic",
        title: "Receivables & Payables Variance Review",
        agentAction: "Generates aging summary tables highlighting overdue accounts and upcoming supplier liabilities.",
        humanGate: "Credit controller reviews aging flags and assigns follow-up priorities."
      },
      {
        step: "03",
        phase: "Close Staging",
        title: "Month-End Accruals & Adjustments",
        agentAction: "Stages draft adjusting entries for depreciation and prepaid expenses according to GAAP/IFRS rules.",
        humanGate: "Chief Financial Officer or Controller reviews debit/credit balance and signs off posting."
      },
      {
        step: "04",
        phase: "Audit Preparation",
        title: "Source Document Citation & Trail",
        agentAction: "Links each draft journal entry to source purchase orders, receipts, and bank transaction references.",
        humanGate: "External auditors review traceable evidence trails without manual document collation."
      }
    ],
    governanceFramework: [
      {
        title: "Zero Autonomous Payout Authority",
        description: "The agent possesses no programmatic capability to execute bank transfers, issue checks, or disburse funds."
      },
      {
        title: "Enforced Double-Entry Balance",
        description: "Every draft entry must balance debit and credit accounts before being submitted for review."
      },
      {
        title: "Immutable Closed Period Protection",
        description: "The agent cannot edit, unfreeze, or stage entries into locked prior accounting fiscal periods."
      },
      {
        title: "Statutory Compliance Separation",
        description: "Tax rules and currency adjustments remain strictly under configured controller policy."
      }
    ],
    parentIntegration: {
      title: "Deep Native Integration with BrainBooks",
      description: "Directly embedded in BrainBooks general ledger, sub-ledgers, and financial reporting modules, eliminating manual data re-keying from external operational systems.",
      dataPoints: [
        "Automated transaction posting from validated BrainERP operational movements",
        "Direct invoice settlement reconciliation from BrainCRM sales milestones",
        "Role-based segregation of duties preventing unauthorized access to executive payroll data",
        "Exportable audit packages with verifiable source citations"
      ]
    },
    faqs: [
      {
        question: "Can the BrainBooks AI Agent approve or execute payments?",
        answer: "No. The BrainBooks AI Agent strictly has zero autonomous payment authority. It can match statements and prepare payables lists, but all disbursements require multi-signatory human approval through approved banking channels."
      },
      {
        question: "Does the agent understand GAAP and IFRS accounting principles?",
        answer: "Yes. The agent is configured to stage entries that adhere to standard double-entry bookkeeping rules, ensuring debits equal credits and linking every entry to traceable source records."
      },
      {
        question: "How does BrainBooks AI Agent connect with operational inventory in BrainERP?",
        answer: "When goods are received or shipped in BrainERP, the operational data flows into BrainBooks where the agent prepares the matching inventory and cost-of-goods-sold journal entries for review."
      }
    ]
  }
];

export function getAIAgentBySlug(slug: string): AIAgentConfig | undefined {
  return aiAgentsConfig.find((a) => a.slug === slug);
}
