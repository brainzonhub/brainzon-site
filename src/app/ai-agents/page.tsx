import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  FileCheck2, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  HelpCircle
} from "lucide-react";

const pageUrl = new URL("/ai-agents", siteConfig.url).toString();
const title = "AI Agents for Business Operations | Brainzon";
const description = "Explore Brainzon's four product-specific AI agents: BrainMKT, BrainCRM, BrainERP, and BrainBooks AI Agents. Embedded deterministic assistance with permission-aware boundaries and human review gates.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const aiAgentsList = [
  {
    id: "brainmkt-ai-agent",
    name: "BrainMKT AI Agent",
    product: "BrainMKT",
    productHref: "/products/brainmkt",
    tagline: "Marketing Planning & Campaign Optimization",
    description: "Assists marketing teams by generating campaign draft variations, analyzing response engagement rates, segmenting targeted customer lists, and coordinating scored lead handoff to CRM under human review.",
    controls: "Content review and publishing sign-off required prior to campaign release.",
    color: "cyan",
    capabilities: [
      "Multi-channel campaign draft generation",
      "Dynamic audience criteria segmentation",
      "A/B subject line and copy variation testing",
      "Automated lead routing and handoff to BrainCRM"
    ],
    governance: "Operates exclusively within marketing asset schemas; cannot initiate external communications autonomously."
  },
  {
    id: "braincrm-ai-agent",
    name: "BrainCRM AI Agent",
    product: "BrainCRM",
    productHref: "/products/braincrm",
    tagline: "Customer Timeline & Deal Intelligence",
    description: "Synthesizes multi-touchpoint interaction history, flags customer retention risks, transcribes meeting summaries, and stages follow-up proposals for sales representative review.",
    controls: "Human review mandated before external customer communication or quote transmission.",
    color: "amber",
    capabilities: [
      "Cross-channel interaction timeline summaries",
      "Pipeline deal risk and momentum scoring",
      "Customer meeting notes extraction and task staging",
      "Draft commercial follow-up proposal preparation"
    ],
    governance: "Restricted by user role-based permissions; masks sensitive customer personally identifiable information (PII)."
  },
  {
    id: "brainerp-ai-agent",
    name: "BrainERP AI Agent",
    product: "BrainERP",
    productHref: "/products/brainerp",
    tagline: "Operations & Supply Chain Optimization",
    description: "Continuously monitors warehouse inventory thresholds, highlights supplier lead-time variances, and stages draft purchase requisitions for operations manager authorization.",
    controls: "Transaction authorization and manager sign-off required for purchase order execution.",
    color: "violet",
    capabilities: [
      "Multi-warehouse inventory stockout exception scans",
      "Material Requirements Planning (MRP) demand forecasting",
      "Supplier delivery lead-time variance tracking",
      "Pre-filled purchase order requisition staging"
    ],
    governance: "Read-only ledger visibility; cannot execute stock movements or trigger supplier payments."
  },
  {
    id: "brainbooks-ai-agent",
    name: "BrainBooks AI Agent",
    product: "BrainBooks",
    productHref: "/products/brainbooks",
    tagline: "Accounting & Ledger Reconciliation",
    description: "Assists financial controllers by matching bank statement lines, analyzing aging account payables and receivables variances, and staging month-end closing entries.",
    controls: "Strict double-entry validation; zero autonomous payout or fund transfer authority.",
    color: "emerald",
    capabilities: [
      "Bank statement line matching and variance flagging",
      "AP/AR aging risk analysis and cash runway reporting",
      "Draft month-end ledger reconciliation notes",
      "Complete immutable audit trail provenance logging"
    ],
    governance: "Zero financial execution authority. Every draft ledger journal entry requires licensed human authorization."
  }
];

const governancePillars = [
  {
    title: "Permission-Aware Access",
    description: "Every agent query and action executes strictly within the authenticated user's granular role-based access control (RBAC) boundaries. If a user cannot view a financial ledger or lead record, neither can the agent.",
    icon: Lock
  },
  {
    title: "Mandatory Human Approval Gates",
    description: "Consequential operational actions—such as sending marketing emails, submitting customer quotes, approving purchase orders, or posting ledger entries—always require human review and sign-off.",
    icon: UserCheck
  },
  {
    title: "Zero Autonomous Payout Authority",
    description: "Brainzon's AI agents have zero authority to disburse funds, execute banking transactions, or modify signed contracts. Financial integrity and GAAP/IFRS auditability remain completely non-negotiable.",
    icon: ShieldCheck
  },
  {
    title: "Deterministic Grounding & Audit Logging",
    description: "Agent reasoning is grounded strictly in confirmed ERP, CRM, and accounting datasets. Every recommendation includes traceable data provenance, transparent rationale, and immutable timestamped audit logs.",
    icon: FileCheck2
  }
];

const aiFaqs = [
  {
    question: "How do Brainzon AI Agents differ from generic chatbots?",
    answer: "Unlike broad conversational models, Brainzon AI Agents are deeply integrated into specific business software domains (BrainMKT, BrainCRM, BrainERP, and BrainBooks). They understand operational data schemas, respect field-level security permissions, and operate with strict human-in-the-loop governance rather than answering speculatively."
  },
  {
    question: "Can Brainzon AI Agents take autonomous actions on my company data?",
    answer: "No. Brainzon enforces strict governance gates. Agents can search, summarize, forecast, and stage drafts (such as purchase requisitions or email drafts), but consequential actions always require deliberate authorization by an authorized human operator."
  },
  {
    question: "Is customer data used to train shared public foundation models?",
    answer: "Never. Customer operational datasets remain private, isolated within your enterprise tenant environment, and are never used to train global or public models. Strict data privacy and tenant segregation are maintained at all times."
  },
  {
    question: "Do the AI agents work across platforms like Odoo or Microsoft Dynamics 365?",
    answer: "Brainzon provides integration engineering services to connect product workflows and agent intelligence with enterprise platforms like Odoo and Microsoft Dynamics 365 Business Central through governed APIs and webhook queues."
  }
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Agents",
        "item": pageUrl
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}/#service`,
    "name": "Brainzon Product-Specific AI Agents",
    "serviceType": "Enterprise AI Workflow Assistance",
    "provider": {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      "name": "Brainzon",
      "url": siteConfig.url
    },
    "description": description,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Product-Specific AI Assistants",
      "itemListElement": aiAgentsList.map((agent, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": agent.name,
          "description": agent.description
        },
        "position": idx + 1
      }))
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": aiFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
] as const;

export default function AIAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <div className="flex flex-col min-h-screen bg-background text-foreground">
        {/* Breadcrumb Bar */}
        <section className="border-b border-border/40 bg-surface/30 py-3 text-xs text-muted-foreground">
          <Container>
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 font-medium">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={12} className="text-muted-foreground/50" />
              <span className="text-foreground">AI Agents</span>
            </nav>
          </Container>
        </section>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border/40">
          <div className="absolute top-[-15%] left-[-10%] -z-10 h-[65%] w-[65%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-15%] right-[-10%] -z-10 h-[65%] w-[65%] rounded-full bg-radial-gradient from-accent/10 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

          <Container>
            <div className="max-w-4xl flex flex-col items-start text-left">
              <span className="badge-accent">
                Domain-Grounded Intelligence
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Product-Specific AI Agents for{" "}
                <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(6,182,212,0.12)]">
                  Business Operations
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Brainzon embeds focused, deterministic AI assistants directly into each core business application: Marketing, CRM, ERP, and Accounting. Every agent operates within strict role permissions with human approval gates.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
                >
                  <span>Request AI Agent Demo</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/40 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200"
                >
                  <span>View Product Suite</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* 4 Dedicated AI Agents Grid */}
        <section className="py-20 md:py-28 border-b border-border/40 bg-surface/20">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">
                FOCUSED WORKFLOW ENGINES
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Four Dedicated Agents for Four Core Domains
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Rather than deploying an ungoverned general assistant, each Brainzon agent is strictly bounded by its operational application domain and data schemas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {aiAgentsList.map((agent) => (
                <article
                  key={agent.id}
                  id={agent.id}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card transition-all duration-300 hover:border-primary/45 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-11 items-center justify-center rounded-xl bg-muted border border-border/60">
                          <ProductIcon product={agent.product} size={22} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            <Link href={`/ai-agents/${agent.id}`} className="hover:text-primary transition-colors">
                              {agent.name}
                            </Link>
                          </h3>
                          <span className="text-xs font-mono text-primary font-medium">
                            Part of {agent.product}
                          </span>
                        </div>
                      </div>
                      <span className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                        Domain Agent
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold text-foreground/90 mt-2 mb-3">
                      {agent.tagline}
                    </h4>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {agent.description}
                    </p>

                    <div className="space-y-2.5 mb-6 pt-5 border-t border-border/60">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground/80 block">
                        Assistance Capabilities:
                      </span>
                      {agent.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2 text-xs text-foreground/80">
                          <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5 mb-6 text-xs text-muted-foreground leading-relaxed">
                      <strong className="text-foreground font-semibold block mb-1">Human Approval Threshold:</strong>
                      {agent.controls}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
                    <Link
                      href={`/ai-agents/${agent.id}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-xs"
                    >
                      <span>{agent.name} Details</span>
                      <ArrowRight size={13} />
                    </Link>
                    <Link
                      href={agent.productHref}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>View {agent.product} App</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Responsible AI Governance Framework */}
        <section className="py-20 md:py-28 border-b border-border/40 bg-background">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="badge-accent">
                Enterprise Trust & Safety
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Responsible AI Architecture Built for Enterprise Governance
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Practical business intelligence requires safety, privacy, and deterministic reliability. We reject loose speculation in favor of strict architectural controls.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {governancePillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex flex-col p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-200 hover:border-primary/40"
                  >
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 shrink-0">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-20 border-b border-border/40 bg-surface/30">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-primary">
                <HelpCircle size={14} />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Everything You Need to Know About Brainzon AI Agents
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {aiFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-border bg-card/80 p-6 shadow-xs"
                >
                  <h3 className="text-base font-bold text-foreground mb-2.5">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-background">
          <Container>
            <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card/70 backdrop-blur-md p-8 md:p-12 text-center relative overflow-hidden shadow-elevated">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                Ready to introduce supervised AI assistance to your workflows?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Connect with our solutions architects to assess operational fit, review governance thresholds, and arrange an interactive pilot.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
                >
                  <span>Book Strategy Demo</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card text-foreground hover:bg-muted transition-colors duration-200"
                >
                  <span>Contact Sales</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
