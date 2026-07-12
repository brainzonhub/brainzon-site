"use client";

import { Container } from "@/components/layout/Container";
import { modernizationSteps } from "@/config/modernization";
import { ModernizationSectionHeader } from "./ModernizationSectionHeader";
import { cn } from "@/lib/utils";

export function ModernizationApproach() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-28 transition-colors duration-300">
      {/* Background glow accents */}
      <div className="absolute top-[30%] left-[-15%] -z-10 h-[50%] w-[50%] rounded-full bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] -z-10 h-[50%] w-[50%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-30 blur-3xl pointer-events-none" />

      <Container>
        <ModernizationSectionHeader
          eyebrow="Controlled transformation"
          title="Our Modernization Approach"
          description="A structured delivery model protects business continuity while moving each capability toward its target architecture."
        />

        {/* Timeline Container */}
        <div className="relative mt-16 lg:mt-24">
          {/* Futuristic timeline pipeline tracking line */}
          <div className="absolute top-[28px] left-[5%] right-[5%] hidden h-[2px] bg-border/40 lg:block pointer-events-none" aria-hidden="true" />
          <div 
            className="absolute top-[28px] left-[5%] right-[5%] hidden h-[2px] bg-gradient-to-r from-primary via-secondary to-accent opacity-70 lg:block pointer-events-none animate-pulse" 
            aria-hidden="true" 
          />

          <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-7 lg:gap-4">
            {modernizationSteps.map((step, index) => {
              // Alternate glow border colors across phases
              let themeColorClass = "text-primary border-primary/30 shadow-glow-primary bg-primary/10";
              let hoverCardClass = "hover:border-primary/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]";
              
              if (index % 3 === 1) {
                themeColorClass = "text-secondary border-secondary/30 shadow-glow-secondary bg-secondary/10";
                hoverCardClass = "hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]";
              } else if (index % 3 === 2) {
                themeColorClass = "text-accent border-accent/30 shadow-glow-accent bg-accent/10";
                hoverCardClass = "hover:border-accent/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)]";
              }

              return (
                <li 
                  key={step.number} 
                  className={cn(
                    "flex flex-col items-center lg:items-stretch text-center lg:text-left group relative",
                    "rounded-2xl border border-border/40 lg:border-0 bg-card/25 lg:bg-transparent p-5 lg:p-0 shadow-sm lg:shadow-none backdrop-blur-sm lg:backdrop-blur-none"
                  )}
                >
                  {/* Step Bubble Ring Indicator */}
                  <div className="flex items-center justify-center w-full mb-6 relative">
                    {/* Ring Pulse outer boundary */}
                    <span 
                      className={cn(
                        "absolute size-14 rounded-full border opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none",
                        index % 3 === 0 ? "border-primary/20" :
                        index % 3 === 1 ? "border-secondary/20" :
                        "border-accent/20"
                      )} 
                    />
                    <span 
                      className={cn(
                        "relative z-10 flex size-12 items-center justify-center rounded-full border font-mono text-xs font-extrabold backdrop-blur-md transition-all duration-300 group-hover:scale-105",
                        themeColorClass
                      )}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Card content body */}
                  <div 
                    className={cn(
                      "flex-1 rounded-xl lg:border lg:border-border/30 lg:bg-card/45 lg:p-4 lg:shadow-sm lg:backdrop-blur-sm transition-all duration-300",
                      hoverCardClass
                    )}
                  >
                    <span className="text-[9px] font-mono tracking-widest text-muted-foreground/80 block mb-1.5 uppercase">
                      PHASE 0{step.number}
                    </span>
                    <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary lg:group-hover:text-foreground transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
