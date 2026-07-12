"use client";

import Link from "next/link";
import { MessageSquareCode, CalendarRange } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function SolutionsCTA() {
  return (
    <section className="relative py-20 bg-surface/30">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[380px] w-[380px] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl p-8 sm:p-12 text-center shadow-elevated relative overflow-hidden">
          {/* Subtle tech border lines */}
          <div className="absolute inset-0 border border-dashed border-primary/10 rounded-3xl pointer-events-none" />

          <span className="badge-accent">Architect Workshop</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-4 leading-tight">
            Ready To Design Your Digital Future?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Work with Brainzon architects to build a scalable enterprise technology roadmap, map out databases, and design low-latency service connections.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-demo"
              className={cn(
                "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-bold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
              )}
            >
              <CalendarRange size={16} />
              <span>Book Architecture Consultation</span>
            </Link>
            <Link
              href="/talk-to-expert"
              className={cn(
                "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-bold rounded-lg border border-border bg-background/50 hover:bg-muted/40 transition-colors duration-200"
              )}
            >
              <MessageSquareCode size={16} className="text-primary" />
              <span>Talk To Experts</span>
            </Link>
          </div>

          <div className="mt-8 text-xs text-muted-foreground/80 font-mono">
            No obligation. Blueprints are strangler-pattern validated.
          </div>
        </div>
      </Container>
    </section>
  );
}
