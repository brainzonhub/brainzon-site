import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  Settings2, 
  Database, 
  Network, 
  GraduationCap, 
  ShieldCheck,
  HelpCircle
} from "lucide-react";

const pageUrl = new URL("/solutions/odoo", siteConfig.url).toString();
const title = "Odoo Implementation & Integration Services | Brainzon";
const description = "Professional Odoo ERP implementation, module configuration, Python customization, safe data migration, and third-party API integration services tailored to your business.";

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

const odooServices = [
  {
    title: "Discovery & Fit-Gap Assessment",
    description: "We map your current business processes against native Odoo standard capabilities, establishing clear data boundaries and identifying genuine custom module requirements versus configurable standard workflows.",
    icon: Settings2
  },
  {
    title: "Modular Suite Configuration",
    description: "Expert configuration of core Odoo apps including CRM, Sales, Purchase, Inventory, Manufacturing (MRP), Project, and Accounting, configured for audit-ready GAAP and IFRS compliance.",
    icon: Layers
  },
  {
    title: "Custom Python & Module Extension",
    description: "When unique industry rules demand custom logic, our senior engineers build isolated, maintainable Odoo modules using standard ORM principles, ensuring effortless future version upgrades.",
    icon: ShieldCheck
  },
  {
    title: "Data Migration & Reconciliation",
    description: "Safe extraction, cleansing, transformation, and automated validation of legacy master records—including historical ledgers, bills of materials (BOM), customers, and active open orders.",
    icon: Database
  },
  {
    title: "Enterprise Application Integration",
    description: "Seamless integration between Odoo and external eCommerce storefronts (Shopify, WooCommerce), payment gateways, logistics carriers, Brainzon applications, and enterprise BI reporting suites.",
    icon: Network
  },
  {
    title: "Enablement, Cutover & Support",
    description: "Role-based end-user training, cutover rehearsals to eliminate unexpected downtime, hypercare go-live assistance, and ongoing SLA-backed maintenance and performance optimization.",
    icon: GraduationCap
  }
];

const odooFaqs = [
  {
    question: "Why choose Brainzon for Odoo implementation?",
    answer: "Brainzon approaches Odoo with a business-first engineering perspective. We prioritize native modular configuration to minimize technical debt, while delivering clean, upgrade-safe Python extensions only where strictly justified by competitive differentiation."
  },
  {
    question: "Can Brainzon migrate data from legacy ERP systems into Odoo?",
    answer: "Yes. We execute scripted migration pipelines with dual-entry verification, migrating historical ledger balances, customer lists, vendor catalogs, inventory valuations, and open orders with complete audit traceability."
  },
  {
    question: "Do you integrate Odoo with other applications and APIs?",
    answer: "Yes. Our Enterprise Integration practice builds governed REST, XML-RPC, and webhook interfaces connecting Odoo to external CRM systems, legacy operational databases, warehouse scanners, and payment networks."
  },
  {
    question: "How do you handle Odoo version upgrades for customized setups?",
    answer: "By keeping customizations strictly separated in standalone modular extensions and adhering to Odoo's official framework conventions, your core system remains clean and prepared for seamless future version upgrades."
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
        "name": "Solutions",
        "item": `${siteConfig.url}/solutions`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Odoo Services",
        "item": pageUrl
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}/#service`,
    "name": "Brainzon Odoo Implementation & Integration Services",
    "serviceType": "ERP Implementation and Consulting",
    "provider": {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      "name": "Brainzon",
      "url": siteConfig.url
    },
    "description": description,
    "areaServed": "Worldwide"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": odooFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
] as const;

export default function OdooSolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <div className="flex flex-col min-h-screen bg-background text-foreground">
        {/* Breadcrumb Navigation */}
        <section className="border-b border-border/40 bg-surface/30 py-3 text-xs text-muted-foreground">
          <Container>
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 font-medium">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={12} className="text-muted-foreground/50" />
              <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
              <ChevronRight size={12} className="text-muted-foreground/50" />
              <span className="text-foreground">Odoo ERP</span>
            </nav>
          </Container>
        </section>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border/40">
          <div className="absolute top-[-15%] left-[-10%] -z-10 h-[65%] w-[65%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-15%] right-[-10%] -z-10 h-[65%] w-[65%] rounded-full bg-radial-gradient from-secondary/10 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

          <Container>
            <div className="max-w-4xl flex flex-col items-start text-left">
              <span className="badge-accent">
                Platform-Neutral Enterprise Advisory
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Odoo Implementation &{" "}
                <span className="bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(0,156,180,0.18)] dark:drop-shadow-[0_0_20px_rgba(0,156,180,0.3)]">
                  Integration Services
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Unify finance, sales, inventory, manufacturing, and customer service. Brainzon delivers structured fit-gap discovery, controlled modular configuration, Python extensions, and governed integrations that scale with your operational growth.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
                >
                  <span>Request Odoo Fit-Gap Consultation</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/solutions/erp"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/40 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200"
                >
                  <span>Compare ERP Platforms</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-28 border-b border-border/40 bg-surface/20">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">
                FULL-LIFECYCLE DELIVERY
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Comprehensive Odoo Solution Services
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                From initial business discovery and schema mapping to custom Python module development and continuous support, we ensure your Odoo deployment aligns with business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {odooServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.title}
                    className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs transition-all duration-200 hover:border-primary/45 hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                        <IconComponent size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2.5">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Technical Advantages */}
        <section className="py-20 md:py-28 border-b border-border/40 bg-background">
          <Container>
            <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card/50 p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
                Our Architectural Approach to Odoo
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                  <p>
                    <strong className="text-foreground">Standard Over Custom:</strong> We maximize native configuration to preserve stability and minimize long-term total cost of ownership (TCO).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                  <p>
                    <strong className="text-foreground">Isolated Clean Architecture:</strong> Necessary business logic is encapsulated in custom modules according to Odoo SDK best practices so updates never break core data models.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                  <p>
                    <strong className="text-foreground">Governed API Integration:</strong> Interfaces with external CRM, ERP, and payment systems are backed by message queues and automated error recovery.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-20 border-b border-border/40 bg-surface/30">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-primary">
                <HelpCircle size={14} />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Odoo Implementation & Support Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {odooFaqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-border bg-card/80 p-6 shadow-xs">
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
                Plan your Odoo implementation with enterprise confidence
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Schedule a discovery session with a senior ERP architect to review your workflows and evaluate operational requirements.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card text-foreground hover:bg-muted transition-colors duration-200"
                >
                  <span>Contact Our Team</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
