"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  Shield, 
  Database, 
  Users,
  Cpu, 
  GitBranch 
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { HeroProjectsSlider } from "@/components/sections/HeroProjectsSlider";
import { cn } from "@/lib/utils";

const architecturePillars = [
  {
    id: "erp",
    title: "ERP & Operations",
    description: "Finance, inventory, and supply chain synchronized on a real-time ledger.",
    icon: Database,
    color: "primary" as const,
    href: "/products/brainerp",
    metric: "99.99% Availability",
  },
  {
    id: "crm",
    title: "CRM & Growth",
    description: "Omnichannel customer pipelines, predictive lead scoring, and automated outreach.",
    icon: Users,
    color: "secondary" as const,
    href: "/products/braincrm",
    metric: "Real-Time Pipeline Sync",
  },
  {
    id: "ai",
    title: "AI & Intelligence",
    description: "Autonomous task agents, enterprise document reasoning, and private secure LLMs.",
    icon: Cpu,
    color: "accent" as const,
    href: "/solutions/ai",
    metric: "Private Agent Workflows",
  },
  {
    id: "modernization",
    title: "Legacy Modernization",
    description: "Refactor legacy monolithic systems into scalable containerized cloud microservices.",
    icon: GitBranch,
    color: "primary" as const,
    href: "/services/modernization",
    metric: "Zero-Downtime Migration",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-20 border-b border-border/40 bg-background transition-colors duration-300">
      {/* Dynamic background glows */}
      <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      {/* Decorative tech grid backdrop */}
      <div 
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading and copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="badge-accent animate-blink-accent">
              Enterprise Software, Reimagined
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1]">
              Architecting the <br className="hidden sm:inline" />
              <span className="bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(0,156,180,0.18)] dark:drop-shadow-[0_0_20px_rgba(0,156,180,0.3)]">
                Next Era
              </span>{" "}
              of Enterprise Innovation
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Connecting operations, customer relationships, marketing, and accounting through proprietary applications and dedicated AI agents, alongside enterprise platforms and legacy modernization.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="/solutions"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                )}
              >
                <span>Explore Ecosystem</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="https://calendly.com/brainzon/new-meeting" target="_blank" rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/40 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                <span>Consult an Expert</span>
                <ArrowRight size={16} className="text-primary" />
              </Link>
            </div>

            {/* Micro-trust banner */}
            <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground/80">
              <div className="flex size-6 items-center justify-center rounded-full bg-accent/10 border border-accent/20 text-accent shrink-0">
                <Shield size={12} />
              </div>
              <span>Built for ambitious teams modernizing what matters.</span>
            </div>
          </div>

          {/* Right Column: 4 Projects Dashboard Slider with Animated Text */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <HeroProjectsSlider />
          </div>
        </div>

        {/* Hero Architecture Section: One Intelligent Foundation */}
        <div className="mt-10 md:mt-14 pt-8 md:pt-10 border-t border-border/40">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 text-left">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-primary uppercase tracking-widest font-mono">
                  Core Architecture
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                One Intelligent Foundation
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl">
                A connected enterprise foundation unifying business operations, customer growth, and AI.
              </p>
            </div>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-card/60 backdrop-blur-sm text-xs font-mono text-muted-foreground shrink-0 self-start sm:self-auto">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              <span>All Systems Operational</span>
              <span className="text-border">|</span>
              <span className="text-foreground/90 font-semibold">99.99% SLA</span>
            </div>
          </div>

          {/* 4 Concise & Easy Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {architecturePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.id}
                  href={pillar.href}
                  className="group relative flex flex-col justify-between p-5 rounded-2xl border border-border/60 bg-card/50 hover:bg-card/90 hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200 text-left"
                >
                  <div>
                    {/* Icon + Top Action Arrow */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className={cn(
                        "flex size-9 items-center justify-center rounded-xl border transition-colors",
                        pillar.color === "primary" ? "bg-primary/10 border-primary/20 text-primary group-hover:bg-primary/15" :
                        pillar.color === "secondary" ? "bg-secondary/10 border-secondary/20 text-secondary group-hover:bg-secondary/15" :
                        "bg-accent/10 border-accent/20 text-accent group-hover:bg-accent/15"
                      )}>
                        <Icon size={18} />
                      </div>
                      <span className="inline-flex items-center text-xs text-muted-foreground/60 group-hover:text-primary transition-colors font-medium">
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Clean Metric Tag */}
                  <div className="mt-4 pt-3 border-t border-border/40 flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-emerald-500/80" />
                    <span>{pillar.metric}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
