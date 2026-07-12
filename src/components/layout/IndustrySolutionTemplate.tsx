import Link from "next/link";
import { ArrowRight, ArrowLeft, AlertTriangle, Cpu, Sparkles, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Industry } from "@/config/industries";
import { getMenuIcon } from "@/components/navigation/menu-icons";
import { cn } from "@/lib/utils";

interface IndustrySolutionTemplateProps {
  industry: Industry;
}

export function IndustrySolutionTemplate({ industry }: IndustrySolutionTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-border/40 bg-background transition-colors duration-300">
        <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />
        <div 
          className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        />

        <Container>
          {/* Back link */}
          <div className="mb-8">
            <Link 
              href="/solutions" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft size={12} className="transform group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Solutions Overview</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 flex flex-col items-start">
              <span className="badge-accent">
                Industry Solution
              </span>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  {getMenuIcon(industry.icon, { size: 24 })}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                  {industry.name} Operations
                </h1>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mt-2 leading-tight">
                <span className="bg-brand-gradient bg-clip-text text-transparent">{industry.headline}</span>
              </h2>

              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {industry.description}
              </p>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-center relative w-full h-[220px] border border-border/40 rounded-3xl bg-surface/30 backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex size-20 items-center justify-center rounded-3xl bg-card border border-border shadow-glow-primary p-4 animate-[pulse_4s_ease-in-out_infinite]">
                  {getMenuIcon(industry.icon, { size: 36, className: "text-primary animate-pulse" })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Industry Challenges */}
      <section className="relative py-20 border-b border-border/40 bg-surface/30 transition-colors duration-300">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Key Industry Challenges
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Modern workflow blockers and operational bottlenecks limiting performance inside {industry.name.toLowerCase()} businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md shadow-card hover:border-secondary/35 transition-all duration-300 flex flex-col"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary mb-6 shrink-0">
                  <AlertTriangle size={18} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-3">
                  {challenge.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Brainzon Solution */}
      <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-transparent p-8 md:p-12 shadow-glow-primary">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
                  The Brainzon Solution
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {industry.solution}
                </p>
                <div className="flex flex-wrap gap-3">
                  {industry.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-surface border border-border text-foreground"
                    >
                      <Cpu size={12} className="text-primary" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Business Benefits */}
      <section className="relative py-20 border-b border-border/40 bg-surface/30 transition-colors duration-300">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Strategic Advantages
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Measurable improvement benchmarks generated by automating workflows and synchronizing endpoints with Brainzon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-md shadow-card hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Metric Accent */}
                <div className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-brand-gradient bg-clip-text text-transparent mb-4">
                  {benefit.metric}
                </div>
                
                <h3 className="text-sm font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. CTA Section */}
      <section className="relative py-20 bg-background transition-colors duration-300">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card/40 backdrop-blur-md p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Ready to Modernize Your Operations?
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Get in touch with a Brainzon Solutions Architect to map out a tailored integration blueprint for your {industry.name.toLowerCase()} operations.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="/talk-to-expert"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
                )}
              >
                <span>Consult an Architect</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/book-demo"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/40 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200"
                )}
              >
                <span>Request Custom Demo</span>
                <ArrowUpRight size={16} className="text-primary" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
