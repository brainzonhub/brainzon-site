import React from "react";
import { Container } from "@/components/layout/Container";
import { crmProcessSteps } from "@/config/crm";
import { cn } from "@/lib/utils";

export default function CRMImplementation() {
  return (
    <section className="relative py-24 border-b border-border bg-card/5 transition-colors duration-300 overflow-hidden">
      {/* Background radial glows and gradient shapes */}
      <div className="absolute inset-0 bg-surface-glow opacity-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 h-[300px] w-[300px] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-30 blur-2xl pointer-events-none" />

      <Container>
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/10 text-xs font-mono font-bold tracking-widest text-secondary uppercase mb-4">
            Deployment Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
            Enterprise CRM Implementation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Our systematic, zero-interruption migration and implementation process takes you from initial discovery to active enterprise pipeline performance.
          </p>
        </div>

        {/* ─────────── Desktop Timeline (lg:block) ─────────── */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Horizontal line running across the timeline */}
          <div className="absolute top-[48px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-secondary/20 via-primary/30 to-secondary/20 -z-10" />

          <div className="grid grid-cols-6 gap-6 relative">
            {crmProcessSteps.map((step, idx) => {
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Step Bubble */}
                  <div
                    className={cn(
                      "size-24 rounded-full border border-border bg-card shadow-card flex items-center justify-center transition-all duration-300 relative z-10",
                      "group-hover:border-secondary/50 group-hover:shadow-glow-secondary group-hover:scale-105"
                    )}
                  >
                    {/* Inner Circle Glow */}
                    <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-secondary/10 via-transparent to-primary/15 opacity-60" />
                    
                    <span className="text-xl font-mono font-extrabold text-foreground group-hover:text-secondary transition-colors duration-300 relative z-20">
                      {step.number}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <div className="mt-6 px-2">
                    <h4 className="text-sm font-bold text-foreground group-hover:text-secondary transition-colors duration-200 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─────────── Mobile Timeline (lg:hidden) ─────────── */}
        <div className="lg:hidden relative max-w-xl mx-auto px-4">
          {/* Vertical connecting line */}
          <div className="absolute left-[34px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-secondary/30 via-primary/30 to-secondary/30 -z-10" />

          <div className="space-y-10">
            {crmProcessSteps.map((step, idx) => {
              return (
                <div key={idx} className="flex gap-6 group items-start">
                  {/* Step Bubble */}
                  <div
                    className={cn(
                      "size-12 rounded-full border border-border bg-card shadow-card flex items-center justify-center shrink-0 transition-all duration-300 relative z-10",
                      "group-hover:border-secondary/50 group-hover:shadow-glow-secondary"
                    )}
                  >
                    <span className="text-sm font-mono font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>

                  {/* Text Container */}
                  <div className="flex-1 pt-1.5">
                    <h4 className="text-sm font-bold text-foreground group-hover:text-secondary transition-colors duration-200 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
