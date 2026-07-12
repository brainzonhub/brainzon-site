"use client";

import Link from "next/link";
import { ArrowRight, Cpu, DatabaseZap, Shield } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { legacyTechnologies, modernTechnologies } from "@/config/modernization";
import { cn } from "@/lib/utils";

export function ModernizationHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 border-b border-border/40 bg-background transition-colors duration-300">
      {/* Dynamic background glows */}
      <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      {/* Grid backdrop */}
      <div 
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="badge-accent animate-blink-accent">
              Legacy Application Modernization
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Transform Legacy Systems Into{" "}
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(6,182,212,0.12)] dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                Modern Digital Platforms
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Brainzon helps businesses modernize outdated applications, upgrade technology platforms, migrate databases, and build scalable cloud architectures without disrupting operations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="/book-demo"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 text-xs font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200 whitespace-nowrap"
                )}
              >
                <span>Start Modernization Assessment</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/company/about"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 text-xs font-semibold rounded-lg border border-border bg-card/45 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200 whitespace-nowrap"
                )}
              >
                <span>Talk To Modernization Experts</span>
                <ArrowRight size={14} className="text-primary" />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground/80">
              <div className="flex size-6 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary shrink-0">
                <Shield size={12} />
              </div>
              <span>Safeguard data integrity and pipeline connectivity throughout migrations.</span>
            </div>
          </div>

          {/* Right Column: Visual Pipeline Schema */}
          <div className="lg:col-span-6 flex justify-center relative w-full">
            <div 
              className="w-full rounded-2xl border border-border/40 bg-slate-900/5 dark:bg-card/25 p-5 shadow-sm backdrop-blur-sm sm:p-6" 
              aria-label="Legacy to modern application transformation pipeline"
            >
              <div className="mb-5 flex items-center justify-between border-b border-border/85 pb-4 font-mono text-[9px] tracking-widest text-muted-foreground">
                <span>TRANSFORMATION PIPELINE</span>
                <span className="text-emerald-500 font-bold">ENGINE ACTIVE</span>
              </div>

              <div className="grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr]">
                {/* Legacy Column */}
                <div className="rounded-xl border border-red-500/15 bg-red-500/5 p-4 flex flex-col justify-between">
                  <p className="text-[10px] font-bold tracking-wider text-red-500 font-mono">LEGACY SOURCE</p>
                  <div className="mt-4 grid gap-2 flex-1 justify-center">
                    {legacyTechnologies.map((item) => (
                      <span 
                        key={item} 
                        className="rounded-lg border border-border bg-card/90 px-3 py-2 text-[10px] font-mono font-semibold text-foreground shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mid Transformation Core */}
                <div className="flex flex-row items-center justify-center gap-2 py-2 text-primary sm:flex-col shrink-0">
                  <span className="h-px flex-1 animate-pulse bg-gradient-to-r from-red-500 to-primary sm:h-12 sm:w-px sm:flex-none" />
                  <span className="flex size-14 animate-[pulse_2.5s_ease-in-out_infinite] items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-glow-primary backdrop-blur-sm shrink-0">
                    <Cpu size={22} className="animate-pulse" />
                  </span>
                  <ArrowRight className="size-4 text-primary sm:rotate-90" />
                </div>

                {/* Modern Destination Column */}
                <div className="rounded-xl border border-primary/15 bg-primary/5 p-4 flex flex-col justify-between">
                  <p className="text-[10px] font-bold tracking-wider text-primary font-mono">MODERN PLATFORM</p>
                  <div className="mt-4 grid gap-2 flex-1 justify-center">
                    {modernTechnologies.map((item) => (
                      <span 
                        key={item} 
                        className="flex items-center gap-2 rounded-lg border border-border bg-card/90 px-3 py-2 text-[10px] font-mono font-semibold text-foreground shadow-sm"
                      >
                        <DatabaseZap size={11} className="text-primary" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
