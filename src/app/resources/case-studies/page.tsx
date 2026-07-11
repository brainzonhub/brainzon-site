import { Metadata } from "next";
import { getCaseStudies } from "@/lib/cms";
import { Container } from "@/components/layout/Container";
import { CaseStudyCard } from "@/components/ui";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies - Client Success & Implementations",
  description: "Browse case studies showing how Brainzon deployed ERP, CRM, and AI solutions to optimize client business workflows.",
  openGraph: {
    title: "Case Studies - Client Success & Implementations",
    description: "Browse case studies showing how Brainzon deployed ERP, CRM, and AI solutions to optimize client business workflows.",
    type: "website"
  }
};

export default async function CaseStudiesListingPage() {
  const studies = await getCaseStudies();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-border/40 bg-background">
        <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />
        <div 
          className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        />

        <Container>
          {/* Back link */}
          <div className="mb-8">
            <Link 
              href="/resources" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft size={12} className="transform group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Resources Hub</span>
            </Link>
          </div>

          <div className="max-w-4xl flex flex-col items-start text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Case Studies
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mt-2 leading-tight">
              <span className="bg-brand-gradient bg-clip-text text-transparent">Client Success & Deployment Proofs</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Discover real-world outcomes, performance metrics, and workflow optimizations delivered by Brainzon platforms across industries.
            </p>
          </div>
        </Container>
      </section>

      {/* Grid List */}
      <section className="py-20 bg-surface/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
