import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { ArrowRight, ChevronRight } from "lucide-react";
import { getInsights } from "@/lib/insights";
import { InsightCard, CaseStudyCard } from "@/components/ui";
import { caseStudies } from "@/config/case-studies";

const pageUrl = new URL("/resources", siteConfig.url).toString();
const title = "Enterprise Architecture Resources & Blueprints | Brainzon";
const description = "Technical insights, architectural blueprints, database migration strategies, and real client transformation case studies from Brainzon engineers.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default async function ResourcesPage() {
  const insights = await getInsights();
  const recentStudies = caseStudies.slice(0, 2);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.url },
        { "@type": "ListItem", "position": 2, "name": "Resources", "item": pageUrl }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <section className="border-b border-border/40 bg-surface/30 py-3 text-xs text-muted-foreground">
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} className="text-muted-foreground/50" />
            <span className="text-foreground">Resources</span>
          </nav>
        </Container>
      </section>

      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-border/40 bg-background">
        <Container>
          <div className="max-w-4xl flex flex-col items-start text-left">
            <span className="badge-accent">Architecture Knowledge Base</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1] mb-4">
              Engineering Insights & Transformation Resources
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Explore in-depth architectural guides, real-world transformation benchmarks, and engineering documentation written by Brainzon practitioners.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-surface/20 border-b border-border/40">
        <Container>
          <div className="flex items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">PUBLICATIONS</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Latest Engineering Insights</h2>
            </div>
            <Link href="/insights" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
              <span>View all insights</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.slice(0, 3).map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-background">
        <Container>
          <div className="flex items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">REAL-WORLD IMPACT</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Transformation Case Studies</h2>
            </div>
            <Link href="/resources/case-studies" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
              <span>View all case studies</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
