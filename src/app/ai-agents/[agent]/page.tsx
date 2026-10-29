import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { aiAgentsConfig, getAIAgentBySlug } from "@/config/ai-agents";
import { Container } from "@/components/layout/Container";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  UserCheck, 
  Sparkles, 
  ChevronRight,
  HelpCircle,
  Activity,
  Check
} from "lucide-react";

interface PageProps {
  params: Promise<{ agent: string }>;
}

export function generateStaticParams() {
  return aiAgentsConfig.map((a) => ({ agent: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { agent: agentSlug } = await params;
  const agent = getAIAgentBySlug(agentSlug);
  if (!agent) return {};

  const pageUrl = new URL(`/ai-agents/${agent.slug}`, siteConfig.url).toString();

  return {
    title: { absolute: agent.metaTitle },
    description: agent.metaDescription,
    alternates: { canonical: pageUrl },
    keywords: agent.keywords,
    openGraph: {
      title: agent.metaTitle,
      description: agent.metaDescription,
      url: pageUrl,
      type: "website",
      siteName: siteConfig.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: agent.metaTitle,
      description: agent.metaDescription,
    },
  };
}

export default async function ProductAIAgentPage({ params }: PageProps) {
  const { agent: agentSlug } = await params;
  const agent = getAIAgentBySlug(agentSlug);

  if (!agent) {
    notFound();
  }

  const pageUrl = new URL(`/ai-agents/${agent.slug}`, siteConfig.url).toString();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": agent.name,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web-based, Cloud, SaaS",
      "description": agent.heroDescription,
      "url": pageUrl,
      "featureList": agent.coreCapabilities.map((c) => c.title),
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0.00",
        "description": "Included with Brainzon enterprise platform subscription. Contact sales for implementation details."
      },
      "publisher": {
        "@type": "Organization",
        "name": "Brainzon",
        "url": siteConfig.url
      }
    },
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
          "item": new URL("/ai-agents", siteConfig.url).toString()
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": agent.name,
          "item": pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": agent.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  // Accent gradient styling based on product color
  const colorAccents = {
    cyan: {
      badgeBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400",
      gradient: "from-cyan-500 via-teal-400 to-primary",
      glow: "drop-shadow-[0_0_20px_rgba(6,182,212,0.2)]",
      borderHover: "hover:border-cyan-500/40",
      iconBg: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
    },
    amber: {
      badgeBg: "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400",
      gradient: "from-amber-500 via-orange-400 to-primary",
      glow: "drop-shadow-[0_0_20px_rgba(245,158,11,0.2)]",
      borderHover: "hover:border-amber-500/40",
      iconBg: "bg-amber-500/10 text-amber-500 border-amber-500/20"
    },
    violet: {
      badgeBg: "bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400",
      gradient: "from-violet-500 via-purple-400 to-primary",
      glow: "drop-shadow-[0_0_20px_rgba(139,92,246,0.2)]",
      borderHover: "hover:border-violet-500/40",
      iconBg: "bg-violet-500/10 text-violet-500 border-violet-500/20"
    },
    emerald: {
      badgeBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",
      gradient: "from-emerald-500 via-teal-400 to-primary",
      glow: "drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]",
      borderHover: "hover:border-emerald-500/40",
      iconBg: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
    }
  }[agent.color];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
        }}
      />

      {/* Breadcrumb Navigation Bar */}
      <section className="border-b border-border/40 bg-surface/30 py-3 text-xs text-muted-foreground">
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 font-medium flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} className="text-muted-foreground/50" />
            <Link href="/ai-agents" className="hover:text-primary transition-colors">AI Agents</Link>
            <ChevronRight size={12} className="text-muted-foreground/50" />
            <span className="text-foreground">{agent.name}</span>
          </nav>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-border/40 bg-background">
        <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${colorAccents.badgeBg}`}>
                  <Sparkles size={12} />
                  <span>{agent.badge}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium border border-border/60 bg-muted/30 text-muted-foreground">
                  <ProductIcon product={agent.productSlug} size={14} />
                  <span>Integrated with {agent.productName}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <ShieldCheck size={11} />
                  <span>Human-in-the-Loop Enforced</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1]">
                {agent.name}{" "}
                <span className={`block mt-2 bg-gradient-to-r ${colorAccents.gradient} bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow ${colorAccents.glow}`}>
                  {agent.subheadline}
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {agent.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
                >
                  <span>Schedule {agent.name} Demo</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={agent.productHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/60 hover:bg-muted/50 text-foreground transition-all duration-200"
                >
                  <ProductIcon product={agent.productSlug} size={16} />
                  <span>Explore {agent.productName} App</span>
                </Link>
              </div>

              {/* Quick assurance pills */}
              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-t border-border/40 pt-4">
                <div className="flex items-center gap-1.5">
                  <UserCheck size={14} className="text-primary" />
                  <span>Role-based permissions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock size={14} className="text-primary" />
                  <span>Isolated tenant privacy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Activity size={14} className="text-primary" />
                  <span>Grounded source audit trail</span>
                </div>
              </div>
            </div>

            {/* Right Column: Governance Status Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl border border-border bg-card/70 backdrop-blur-md shadow-card relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-border/50">
                  <div className="flex items-center gap-2">
                    <div className={`flex size-8 items-center justify-center rounded-lg border ${colorAccents.iconBg}`}>
                      <ProductIcon product={agent.productSlug} size={16} />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-foreground">{agent.name}</h2>
                      <span className="text-[10px] text-muted-foreground">Deterministic Assistant</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Active Guardrails
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="p-3.5 rounded-xl bg-muted/40 border border-border/50">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-1">
                      MANDATORY HUMAN CONTROL GATE
                    </span>
                    <p className="text-xs font-medium text-foreground leading-snug">
                      {agent.humanReviewControl}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-muted/40 border border-border/50">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-1">
                      OPERATIONAL BOUNDARY RULE
                    </span>
                    <p className="text-xs font-medium text-foreground leading-snug">
                      {agent.governanceSummary}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-muted/40 border border-border/50">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-1">
                      DATA SOURCE GROUNDING
                    </span>
                    <p className="text-xs font-medium text-foreground leading-snug">
                      Responses are strictly derived from approved {agent.productName} transactional database tables with full citation history.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 text-center">
                  <Link
                    href="/ai-agents"
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Compare all four product AI agents</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-20 bg-surface/20 border-b border-border/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">CAPABILITY MATRIX</span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              What the {agent.name} Does
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              Designed as a force multiplier for {agent.productName} users, removing repetitive operational friction while preserving human oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {agent.coreCapabilities.map((cap) => (
              <div 
                key={cap.title}
                className={`p-7 rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-200 ${colorAccents.borderHover}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${colorAccents.badgeBg}`}>
                    {cap.tag}
                  </span>
                  <CheckCircle2 size={16} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Supervised Step-by-Step Workflow */}
      <section className="py-20 bg-background border-b border-border/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">GOVERNED WORKFLOW</span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              How Human-in-the-Loop Operates in Practice
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              Every critical action passes through a clear staging, review, and authorization checkpoint before execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {agent.supervisedWorkflows.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl border border-border bg-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold font-mono text-primary/40">{step.step}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border/60 px-2 py-0.5 rounded bg-muted/30">
                      {step.phase}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                  <div className="space-y-3 mt-4 text-xs">
                    <div className="p-2.5 rounded-lg bg-muted/40 border border-border/40">
                      <span className="text-[9px] font-mono font-bold text-muted-foreground uppercase block mb-1">
                        Agent Action:
                      </span>
                      <p className="text-foreground/90">{step.agentAction}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50">
                  <div className="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                    <span className="text-[9px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase flex items-center gap-1 mb-1">
                      <ShieldCheck size={10} />
                      Human Checkpoint:
                    </span>
                    <p className="text-[11px] text-foreground/80 font-medium">{step.humanGate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Integration with Parent Product */}
      <section className="py-20 bg-surface/20 border-b border-border/40">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card p-8 md:p-12 shadow-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-border/50">
              <div className="flex items-center gap-4">
                <div className={`flex size-14 items-center justify-center rounded-2xl border ${colorAccents.iconBg}`}>
                  <ProductIcon product={agent.productSlug} size={28} />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">ECOSYSTEM ARCHITECTURE</span>
                  <h2 className="text-2xl font-bold text-foreground">{agent.parentIntegration.title}</h2>
                </div>
              </div>
              <Link
                href={agent.productHref}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all border border-primary/20 shrink-0"
              >
                <span>View {agent.productName} Product</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
              {agent.parentIntegration.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {agent.parentIntegration.dataPoints.map((dp) => (
                <div key={dp} className="flex items-start gap-2.5 p-3 rounded-xl bg-muted/30 border border-border/40 text-xs text-foreground/90">
                  <Check size={14} className="text-primary mt-0.5 shrink-0" />
                  <span>{dp}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Governance & Trust Framework */}
      <section className="py-20 bg-background border-b border-border/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">TRUST & SAFETY</span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Enterprise AI Safety Boundaries
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              Brainzon adheres to strict principles that protect client privacy, maintain auditability, and uphold legal and operational compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {agent.governanceFramework.map((g) => (
              <div key={g.title} className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Lock size={18} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{g.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{g.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-surface/20 border-b border-border/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">FAQ</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Common questions about implementing the {agent.name} in enterprise environments.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {agent.faqs.map((faq) => (
              <div key={faq.question} className="p-6 rounded-2xl border border-border bg-card shadow-xs">
                <h3 className="text-base font-bold text-foreground flex items-center gap-2 mb-2">
                  <HelpCircle size={16} className="text-primary shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-background">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card p-8 md:p-12 text-center shadow-card relative overflow-hidden">
            <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
              <Sparkles size={24} />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Deploy the {agent.name} in Your Organization
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Schedule a demonstration with our solution architects to review data connectors, security boundaries, and custom workflow staging for {agent.productName}.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
              >
                <span>Book Architecture Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card hover:bg-muted/50 text-foreground transition-all duration-200"
              >
                <span>Contact AI Solutions Team</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
