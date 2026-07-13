"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function ProductCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-technology opacity-20 pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card-opaque p-8 md:p-16 text-center space-y-8 shadow-elevated relative overflow-hidden">
          {/* Subtle borders glow */}
          <div className="absolute inset-0 border border-primary/20 rounded-3xl pointer-events-none" />

          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 border border-secondary/20 shadow-[0_0_12px_rgba(239,68,68,0.1)]">
              Digital Transformation Partner
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              See How Brainzon Products Can Transform Your Business
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Unlock productivity gains, automate complex enterprise transaction ledgers, and scale customer pipelines with unified workflows.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/95 shadow-glow-primary transition-all duration-200"
            >
              <span>Book a Demo</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card-opaque text-foreground hover:bg-muted/40 hover:border-foreground/20 transition-all duration-200"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
