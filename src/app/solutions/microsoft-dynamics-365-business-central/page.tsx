import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Building2, 
  Code2, 
  Database, 
  Network, 
  GraduationCap, 
  ShieldCheck,
  HelpCircle
} from "lucide-react";

const pageUrl = new URL("/solutions/microsoft-dynamics-365-business-central", siteConfig.url).toString();
const title = "Microsoft Dynamics 365 Business Central Services | Brainzon";
const description = "Enterprise Microsoft Dynamics 365 Business Central implementation, AL extension development, legacy NAV migration, and Microsoft Cloud ecosystem integration services.";

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

const bcServices = [
  {
    title: "Process Assessment & Fit-Gap Discovery",
    description: "Detailed evaluation of financial operations, supply chain flows, and inventory controls against native Business Central capabilities to define a precise, de-risked implementation roadmap.",
    icon: Building2
  },
  {
    title: "AL Extension Development",
    description: "Upgrade-safe customization using modern AL code in Visual Studio Code. We extend standard tables, pages, and codeunits without touching base Microsoft source code.",
    icon: Code2
  },
  {
    title: "Legacy Dynamics NAV / On-Prem Migration",
    description: "Phased migration from legacy Dynamics NAV (Navision) or on-premise systems to Business Central Cloud with verified database cleansing, data transformation, and ledger reconciliation.",
    icon: Database
  },
  {
    title: "Microsoft 365 & Power Platform Synergy",
    description: "Unify Business Central with Microsoft Teams, Excel, Outlook, Power Automate, and custom Power BI executive dashboards for streamlined cross-departmental operations.",
    icon: Network
  },
  {
    title: "Cutover Rehearsals & Risk Mitigation",
    description: "Comprehensive dry runs and user acceptance testing (UAT) simulating production transaction volumes to validate interfaces and prevent operational cutover disruption.",
    icon: ShieldCheck
  },
  {
    title: "Enablement, Governance & Optimization",
    description: "Role-specific training for financial controllers, warehouse managers, and procurement staff, paired with proactive performance monitoring and ongoing environment management.",
    icon: GraduationCap
  }
];

const bcFaqs = [
  {
    question: "What organizations benefit most from Dynamics 365 Business Central?",
    answer: "Growing mid-market and enterprise businesses that require robust multi-currency financial compliance, complex inventory valuation, multi-site warehouse operations, and tight integration with the Microsoft 365 cloud ecosystem."
  },
  {
    question: "How does Brainzon ensure Business Central customizations remain upgradeable?",
    answer: "We develop all custom business logic strictly as modular AL extensions using official Microsoft events and telemetry hooks. Because core source code remains untouched, your Business Central tenant receives continuous, automated Microsoft cloud updates without breaking."
  },
  {
    question: "Can Brainzon migrate historical data from older Dynamics NAV versions?",
    answer: "Yes. We have specialized migration pipelines to migrate chart of accounts, dimensional data, historical ledger balances, customer/vendor master records, and open transaction lines with comprehensive audit verification."
  },
  {
    question: "Do you integrate Business Central with external third-party software?",
    answer: "Yes. Utilizing Business Central's modern OData, REST, and API endpoints, we connect your ERP to custom web portals, eCommerce platforms, third-party logistics (3PL) providers, and Brainzon applications."
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
        "name": "Microsoft Dynamics 365 Business Central",
        "item": pageUrl
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}/#service`,
    "name": "Microsoft Dynamics 365 Business Central Implementation Services",
    "serviceType": "Enterprise ERP Implementation and Consulting",
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
    "mainEntity": bcFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
] as const;

export default function BusinessCentralPage() {
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
              <span className="text-foreground">Dynamics 365 Business Central</span>
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
                Enterprise Platform Delivery
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Microsoft Dynamics 365{" "}
                <span className="bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(0,156,180,0.18)] dark:drop-shadow-[0_0_20px_rgba(0,156,180,0.3)]">
                  Business Central Services
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Scale your financial management, supply chain operations, and manufacturing processes on Microsoft&apos;s cloud ERP. Brainzon provides discovery, AL extension development, cutover rehearsals, and system integration.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
                >
                  <span>Book Business Central Consultation</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/solutions/erp"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/40 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200"
                >
                  <span>Compare ERP Solutions</span>
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
                PROVEN METHODOLOGY
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                End-to-End Business Central Consulting & Engineering
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether deploying a new tenant, modernizing legacy Dynamics NAV, or building complex AL extensions, we deliver structured risk mitigation at every project phase.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bcServices.map((service) => {
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

        {/* Technical Principles */}
        <section className="py-20 md:py-28 border-b border-border/40 bg-background">
          <Container>
            <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card/50 p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
                Why Enterprises Partner With Brainzon for Business Central
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                  <p>
                    <strong className="text-foreground">Modern AL Clean Code:</strong> We strictly follow Microsoft extension guidelines, ensuring your ERP environment is never locked into legacy codebases or prevented from receiving monthly cloud updates.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                  <p>
                    <strong className="text-foreground">Cross-Platform Data Orchestration:</strong> We connect Business Central with CRM, eCommerce, 3PL logistics, and proprietary Brainzon business applications via governed REST and OData pipelines.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                  <p>
                    <strong className="text-foreground">Rehearsed Safe Cutover:</strong> Real-world cutover rehearsals ensure zero ledger discrepancies, validated open balances, and a predictable go-live weekend.
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
                Business Central Questions & Implementation Answers
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {bcFaqs.map((faq) => (
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
                Evaluate Microsoft Dynamics 365 Business Central for your enterprise
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Connect with an enterprise solutions architect to evaluate licensing, fit-gap analysis, integration requirements, and delivery timelines.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
                >
                  <span>Book Discovery Session</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card text-foreground hover:bg-muted transition-colors duration-200"
                >
                  <span>Contact Solutions Team</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
