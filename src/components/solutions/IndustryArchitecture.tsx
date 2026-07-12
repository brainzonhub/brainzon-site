"use client";

import { Check } from "lucide-react";
import { industryScenarios } from "@/config/solutions";
import { Container } from "@/components/layout/Container";

export function IndustryArchitecture() {
  return (
    <section className="relative py-20 border-b border-border/40 bg-surface/30">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="badge-accent">Segment Specific Blueprints</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Industry-Specific Digital Solutions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            By adapting modular service buses, vector indexes, and custom schema sets, we build architectures optimized for specific industry needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {industryScenarios.map((ind) => (
            <div 
              key={ind.title}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-border bg-card backdrop-blur-sm shadow-sm hover:border-primary/45 transition-all duration-300 group cursor-default"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase block mb-1">
                  INDUSTRY BLUEPRINT
                </span>
                <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {ind.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-2.5 leading-relaxed">
                  {ind.description}
                </p>

                <div className="mt-6 pt-5 border-t border-border/60 space-y-4">
                  {ind.layers.map((lyr) => (
                    <div key={lyr.name} className="flex flex-col gap-1.5">
                      <span className="text-[9px] font-mono font-bold text-foreground/80 uppercase tracking-wider block">
                        {lyr.name} Modules:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {lyr.components.map((comp) => (
                          <span 
                            key={comp} 
                            className="inline-flex items-center gap-1 rounded bg-muted/65 border border-border/60 text-[9px] font-mono text-muted-foreground font-semibold px-2 py-1 hover:border-primary/30 hover:text-foreground transition-colors"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 text-[10px] text-muted-foreground/80 font-mono flex items-center gap-1.5">
                <Check size={12} className="text-emerald-500" /> Pre-configured scheme ready
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
