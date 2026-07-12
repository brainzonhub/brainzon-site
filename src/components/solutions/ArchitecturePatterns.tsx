"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { architectureScenarios } from "@/config/solutions";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function ArchitecturePatterns() {
  const [activeTabId, setActiveTabId] = useState<string>(architectureScenarios[0]?.id || "");
  const activeScenario = architectureScenarios.find(s => s.id === activeTabId) || architectureScenarios[0]!;

  return (
    <section className="relative py-20 border-b border-border/40 bg-background">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="badge-accent">Architectural Blueprints</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Architectures Designed For Real Business Needs
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Standardized deployment patterns that solve systemic challenges. Inspect the flow blueprints for our common integration scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Tab Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-2.5 w-full">
            {architectureScenarios.map((sc) => {
              const isActive = activeTabId === sc.id;
              return (
                <button
                  key={sc.id}
                  onClick={() => setActiveTabId(sc.id)}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all duration-300 backdrop-blur-sm shadow-sm flex flex-col items-start gap-1 group",
                    isActive 
                      ? "border-primary bg-primary/5 text-foreground shadow-[0_0_15px_rgba(6,182,212,0.1)]" 
                      : "border-border/60 bg-card hover:border-border hover:bg-muted/30 text-muted-foreground hover:text-foreground"
                  )}
                >
                  <h3 className={cn("text-sm font-bold transition-colors", isActive ? "text-primary" : "text-foreground")}>
                    {sc.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed line-clamp-2 mt-0.5">
                    {sc.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Scenario Flow Visualizer */}
          <div className="lg:col-span-8 flex flex-col gap-6 w-full">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-elevated backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-border pb-4 font-mono text-[9px] tracking-widest text-primary">
                <span>BLUEPRINT SYSTEM FLOW</span>
                <span className="text-emerald-500 font-bold flex items-center gap-1">
                  <ShieldCheck size={10} /> SECURITY AUDITED
                </span>
              </div>

              {/* Node flow diagram */}
              <div className="mt-8">
                <h4 className="text-xs font-mono font-bold tracking-wider text-foreground mb-4">
                  LOGICAL COMPONENT TOPOLOGY:
                </h4>
                
                <div className="flex flex-col md:flex-row items-center justify-start gap-4 py-4 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                  {activeScenario.nodes.map((node, index) => (
                    <div key={node.label} className="flex flex-col md:flex-row items-center w-full md:w-auto shrink-0">
                      <div className={cn(
                        "p-4 rounded-xl border text-center w-full md:w-44 shrink-0 shadow-sm transition-all duration-300",
                        node.highlight 
                          ? "border-primary bg-primary/5 shadow-glow-primary scale-105" 
                          : "border-border/80 bg-background/50"
                      )}>
                        <p className={cn("text-xs font-bold", node.highlight ? "text-primary" : "text-foreground")}>
                          {node.label}
                        </p>
                        <p className="text-[9px] font-mono text-muted-foreground mt-1">
                          {node.role}
                        </p>
                      </div>
                      
                      {index < activeScenario.nodes.length - 1 && (
                        <div className="flex items-center justify-center py-2 md:py-0 md:px-2 text-primary shrink-0 rotate-90 md:rotate-0">
                          <ArrowRight size={16} className="animate-pulse" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Blueprint details */}
              <div className="mt-8 pt-6 border-t border-border/60">
                <h4 className="text-xs font-mono font-bold tracking-wider text-foreground mb-2">
                  ARCHITECTURAL DESIGN BLUEPRINT:
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {activeScenario.blueprint}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Pattern verified under Next.js 16/Tailwind v4Strangler Compliance standards.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
