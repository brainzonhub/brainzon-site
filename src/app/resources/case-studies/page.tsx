import { Metadata } from "next";
import { getCaseStudies } from "@/lib/cms";
import { Container } from "@/components/layout/Container";
import { CaseStudyCard } from "@/components/ui";
import { ArrowLeft, Database, Users, Cpu, GitBranch, Grid, Building2, Layers } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PageProps {
  searchParams: Promise<{
    product?: string;
    industry?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Case Studies & Client Success Stories | Brainzon",
  description: "Browse real-world case studies showing how Brainzon deployed enterprise ERP, CRM, and AI solutions to optimize workflows and scale globally.",
  alternates: { canonical: "/resources/case-studies" },
  keywords: ["Brainzon Case Studies", "Client Success Stories", "ERP Implementation", "CRM Deployment", "Industrial AI Proof", "Enterprise Integrations"],
  openGraph: {
    title: "Case Studies & Client Success Stories | Brainzon",
    description: "Browse real-world case studies showing how Brainzon deployed enterprise ERP, CRM, and AI solutions to optimize workflows and scale globally.",
    type: "website",
    url: "/resources/case-studies",
  }
};

export default async function CaseStudiesListingPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const activeProduct = resolvedSearchParams.product || "";
  const activeIndustry = resolvedSearchParams.industry || "";

  const allStudies = await getCaseStudies();

  // Filter case studies
  const filteredStudies = allStudies.filter((study) => {
    const matchesProduct = !activeProduct || study.products.some(
      (p) => p.toLowerCase() === activeProduct.toLowerCase()
    );
    const matchesIndustry = !activeIndustry || study.industry.toLowerCase().includes(
      activeIndustry.toLowerCase()
    );
    return matchesProduct && matchesIndustry;
  });

  const products = [
    { name: "All Products", value: "", icon: <Grid size={12} /> },
    { name: "BrainERP", value: "BrainERP", icon: <Database size={12} /> },
    { name: "BrainCRM", value: "BrainCRM", icon: <Users size={12} /> },
    { name: "BrainAI", value: "BrainAI", icon: <Cpu size={12} /> },
    { name: "BrainConnect", value: "BrainConnect", icon: <GitBranch size={12} /> },
  ];

  const industries = [
    { name: "All Industries", value: "", icon: <Layers size={12} /> },
    { name: "Manufacturing", value: "Manufacturing", icon: <Building2 size={12} /> },
    { name: "Retail & E-commerce", value: "Retail", icon: <Building2 size={12} /> },
  ];

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1] mb-4">
              Case Studies
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mt-2 leading-[1.1]">
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(6,182,212,0.12)] dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">Client Success & Deployment Proofs</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Discover real-world outcomes, performance metrics, and workflow optimizations delivered by Brainzon platforms across industries.
            </p>
          </div>
        </Container>
      </section>

      {/* Grid List & Filters */}
      <section className="py-16 bg-surface/30 flex-1">
        <Container className="space-y-12">
          
          {/* Filter Toolbar */}
          <div className="p-6 rounded-2xl border border-border bg-card/25 backdrop-blur-md space-y-4">
            {/* Products Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground min-w-[100px]">
                Filter by Product:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {products.map((prod) => {
                  const isSelected = activeProduct === prod.value;
                  const queryParams = new URLSearchParams();
                  if (prod.value) queryParams.set("product", prod.value);
                  if (activeIndustry) queryParams.set("industry", activeIndustry);
                  const searchStr = queryParams.toString();
                  const href = `/resources/case-studies${searchStr ? `?${searchStr}` : ""}`;

                  return (
                    <Link
                      key={prod.name}
                      href={href}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border",
                        isSelected
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-card/15 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                      )}
                    >
                      {prod.icon}
                      <span>{prod.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Industry Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-4 border-t border-border/40">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground min-w-[100px]">
                Filter by Industry:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {industries.map((ind) => {
                  const isSelected = activeIndustry === ind.value;
                  const queryParams = new URLSearchParams();
                  if (activeProduct) queryParams.set("product", activeProduct);
                  if (ind.value) queryParams.set("industry", ind.value);
                  const searchStr = queryParams.toString();
                  const href = `/resources/case-studies${searchStr ? `?${searchStr}` : ""}`;

                  return (
                    <Link
                      key={ind.name}
                      href={href}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border",
                        isSelected
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-card/15 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                      )}
                    >
                      {ind.icon}
                      <span>{ind.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Grid display */}
          {filteredStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredStudies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center rounded-2xl border border-dashed border-border/60 p-8 bg-card/10">
              <div className="text-muted-foreground font-medium mb-2">
                No case studies found matching your criteria.
              </div>
              <p className="text-xs text-muted-foreground/60 max-w-sm mx-auto mb-6">
                Try resetting your products or industry filters.
              </p>
              <Link
                href="/resources/case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
              >
                Reset filters
              </Link>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
