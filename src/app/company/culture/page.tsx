import { Metadata } from "next";
import { companyConfig } from "@/config/company";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Cpu, Heart, TrendingUp, Sparkles, Smile } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Culture - Life at Brainzon",
  description: "Explore the culture of engineering excellence, collaboration, and continuous professional growth at Brainzon.",
  openGraph: {
    title: "Our Culture - Life at Brainzon",
    description: "Explore the culture of engineering excellence, collaboration, and continuous professional growth at Brainzon.",
    type: "website"
  }
};

export default function CulturePage() {
  const { culture } = companyConfig;

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
            <span className="badge-accent">
              Team & Collaboration
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Company Culture
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mt-2 leading-tight">
              <span className="bg-brand-gradient bg-clip-text text-transparent">{culture.headline}</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              {culture.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Behaviors We Value */}
      <section className="relative py-20 bg-surface/30 border-b border-border/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Behaviors We Value
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We look for individuals who are proactive, curious, and committed to helping clients solve operational problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culture.behaviors.map((behavior) => {
              const IconComponent = {
                Cpu,
                Heart,
                TrendingUp
              }[behavior.icon] || Smile;

              return (
                <div
                  key={behavior.title}
                  className="group relative p-6 sm:p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 shrink-0">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {behavior.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {behavior.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Culture details */}
      <section className="relative py-20 bg-background">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card/25 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Flat Hierarchy & High Ownership
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We don’t believe in micro-management. Our teams manage their own tasks, cooperate directly with stakeholders, and continuously validate their architectures. We sponsor training programs, technical books, and support open-source contributions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-border/40 bg-surface/30">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card/40 backdrop-blur-md p-8 md:p-12 text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Want to join the team?
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-lg mx-auto">
              Explore open software developer and architect positions at Brainzon.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
              <Link
                href="/company/careers"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200"
              >
                <span>View Career Openings</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
