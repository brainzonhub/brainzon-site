"use client";

import { CheckCircle2, Cpu, Database, Users, Network, RefreshCw } from "lucide-react";
import { transformationCards } from "@/config/solutions";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function TransformationLayers() {
  return (
    <section id="transformation-layers" className="relative py-20 border-b border-border/40 bg-surface/30">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="badge-accent">Corporate Modernization</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Transform Every Layer Of Your Business
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            By aligning enterprise applications, data messaging layers, intelligence algorithms, and modernization frameworks, we help organizations run more efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {transformationCards.map((card, index) => {
            const isPrimary = card.color === "primary";
            const isSecondary = card.color === "secondary";
            
            // Assign icon based on tech title
            let IconComp = Database;
            if (card.tech === "BrainCRM") IconComp = Users;
            else if (card.tech === "BrainAI") IconComp = Cpu;
            else if (card.tech === "BrainConnect") IconComp = Network;
            else if (card.tech.includes("Modern")) IconComp = RefreshCw;

            return (
              <div 
                key={card.title}
                className={cn(
                  "flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-border bg-card backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1.5",
                  isPrimary ? "hover:border-primary/45 hover:shadow-[0_8px_30px_rgba(6,182,212,0.06)]" :
                  isSecondary ? "hover:border-secondary/45 hover:shadow-[0_8px_30px_rgba(239,68,68,0.06)]" :
                  "hover:border-accent/45 hover:shadow-[0_8px_30px_rgba(234,179,8,0.06)]"
                )}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={cn(
                      "flex size-10 items-center justify-center rounded-xl transition-transform duration-300",
                      isPrimary ? "bg-primary/10 text-primary" :
                      isSecondary ? "bg-secondary/10 text-secondary" :
                      "bg-accent/10 text-accent"
                    )}>
                      <IconComp size={18} />
                    </div>
                    <span className="font-mono text-[9px] text-muted-foreground/80 tracking-widest uppercase">
                      LAYER {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-foreground mt-4">
                    {card.title}
                  </h3>
                  <span className={cn(
                    "text-[10px] font-mono font-bold tracking-wider uppercase mt-1 inline-block",
                    isPrimary ? "text-primary" : isSecondary ? "text-secondary" : "text-accent"
                  )}>
                    {card.tech}
                  </span>
                  
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-border/60">
                  <h4 className="text-[10px] font-mono font-bold text-foreground tracking-wider uppercase mb-3">
                    CORE CAPABILITIES:
                  </h4>
                  <ul className="grid gap-2">
                    {card.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-xs text-muted-foreground font-semibold">
                        <CheckCircle2 size={12} className={cn(
                          "shrink-0",
                          isPrimary ? "text-primary/70" : isSecondary ? "text-secondary/70" : "text-accent/70"
                        )} />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
