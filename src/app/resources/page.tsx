import { Metadata } from "next";
import { getBlogPosts, getCaseStudies } from "@/lib/cms";
import { Container } from "@/components/layout/Container";
import { BlogCard, CaseStudyCard } from "@/components/ui";
import { ArrowRight, BookOpen, Layers } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources Hub - Technical Insights & Case Studies",
  description: "Explore technical architectures, client case studies, and engineering guidelines from the Brainzon software teams.",
  openGraph: {
    title: "Resources Hub - Technical Insights & Case Studies",
    description: "Explore technical architectures, client case studies, and engineering guidelines from the Brainzon software teams.",
    type: "website"
  }
};

export default async function ResourcesPage() {
  const posts = await getBlogPosts();
  const studies = await getCaseStudies();

  // Take recent items
  const recentPosts = posts.slice(0, 3);
  const recentStudies = studies.slice(0, 2);

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
          <div className="max-w-4xl flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 mb-6">
              Knowledge Base
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Resources Hub
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mt-2 leading-tight">
              <span className="bg-brand-gradient bg-clip-text text-transparent">Insights, Case Studies, & Blueprints</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Explore custom-trained LLM models, ledger database optimizations, and client transformation blueprints compiled by our software architects.
            </p>
          </div>
        </Container>
      </section>

      {/* Sections Wrapper */}
      <section className="py-20 bg-surface/30">
        <Container>
          {/* Recent Case Studies */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/40">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Layers size={18} />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  Recent Case Studies
                </h2>
              </div>
              <Link 
                href="/resources/case-studies"
                className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:underline group"
              >
                <span>All Case Studies</span>
                <ArrowRight size={12} className="transform group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentStudies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          </div>

          {/* Recent Blog Posts */}
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/40">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BookOpen size={18} />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  Recent Articles
                </h2>
              </div>
              <Link 
                href="/resources/blog"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline group"
              >
                <span>All Articles</span>
                <ArrowRight size={12} className="transform group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
