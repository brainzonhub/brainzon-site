"use client";

import { ShieldCheck, Cpu, Code2, Users2 } from "lucide-react";
import { whyBrainzonPoints } from "@/config/solutions";
import { Container } from "@/components/layout/Container";

export function WhyBrainzonSolutions() {
  return (
    <section className="relative py-20 border-b border-border/40 bg-background">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="badge-accent">Why Choose Brainzon</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Architectural Excellence By Design
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            We combine systems engineering disciplines with modern software stacks to build digital platforms that drive corporate KPIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {whyBrainzonPoints.map((point, index) => {
            // Assign icons dynamically
            let IconComp = ShieldCheck;
            if (index === 1) IconComp = Code2;
            else if (index === 2) IconComp = Cpu;
            else if (index === 3) IconComp = Users2;

            return (
              <div 
                key={point.title}
                className="flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card/45 backdrop-blur-sm shadow-sm hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <IconComp size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
