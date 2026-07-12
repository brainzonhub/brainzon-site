"use client";

import { CheckSquare } from "lucide-react";
import { technologyStack } from "@/config/solutions";
import { Container } from "@/components/layout/Container";

export function TechnologyFoundation() {
  return (
    <section className="relative py-20 border-b border-border/40 bg-background">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="badge-accent">Core Tech Infrastructure</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Built With Modern Enterprise Technologies
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            We build corporate applications using highly available, battle-tested programming runtimes, modern database engines, and secure cloud platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {technologyStack.map((tech) => (
            <div 
              key={tech.category}
              className="flex flex-col justify-between p-5 rounded-xl border border-border/70 bg-card/60 backdrop-blur-sm shadow-sm hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <h3 className="text-xs font-mono font-bold text-foreground tracking-wider uppercase block border-b border-border/80 pb-2 mb-4">
                  {tech.category}
                </h3>
                <ul className="space-y-3">
                  {tech.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground font-semibold">
                      <CheckSquare size={13} className="text-primary/70 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-border/40 text-[9px] font-mono text-muted-foreground/60">
                Ver: Enterprise Stable
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
