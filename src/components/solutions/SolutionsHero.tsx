"use client";

import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EcosystemHeroDiagram } from "@/components/diagrams/EcosystemHeroDiagram";
import { cn } from "@/lib/utils";

export function SolutionsHero() {
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
          {/* Left copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="badge-accent animate-blink-accent">
              Enterprise Technology Ecosystem
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Build The Intelligent{" "}
              <span className="bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(0,156,180,0.18)] dark:drop-shadow-[0_0_20px_rgba(0,156,180,0.3)]">
                Enterprise Architecture
              </span>{" "}
              Of Tomorrow
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              From ERP and CRM platforms to AI, integrations, and cloud modernization, Brainzon designs complete technology ecosystems built around your business.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="#transformation-layers"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
                )}
              >
                <span>Start Your Transformation</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/book-demo"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/45 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200"
                )}
              >
                <span>Book Architecture Consultation</span>
                <ArrowRight size={16} className="text-primary" />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground/80">
              <div className="flex size-6 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary shrink-0">
                <Shield size={12} />
              </div>
              <span>Secure, stateless, and Strangler-compliant architectures.</span>
            </div>
          </div>

          {/* Right Column: Ecosystem Grid Connection Dashboard Graphic */}
          <EcosystemHeroDiagram className="lg:col-span-6" />
        </div>
      </Container>
    </section>
  );
}
