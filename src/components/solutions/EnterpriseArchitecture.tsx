"use client";

import { useState } from "react";
import { ChevronRight, Layers, Monitor, Cpu, Network, Server, Play } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { architectureLayers, ArchLayer } from "@/config/solutions";
import { cn } from "@/lib/utils";

export function EnterpriseArchitecture() {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);
  const activeLayerObj = (architectureLayers[selectedLayerIndex] || architectureLayers[0]) as ArchLayer;

  return (
    <section className="relative py-20 border-b border-border/40 bg-surface/30">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="badge-accent">Intelligent Enterprise Blueprint</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            One Digital Foundation. Endless Business Possibilities.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Brainzon designs decoupled, multi-tiered enterprise topologies that split presentation, business rules, intelligence modules, and hosting pipelines for independent scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Interactive Stack Visualizer */}
          <div className="lg:col-span-6 flex flex-col gap-3.5 w-full">
            <h3 className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase mb-2">
              Select layer to inspect blueprint:
            </h3>
            {architectureLayers.map((layer, index) => {
              const isActive = selectedLayerIndex === index;
              let activeColorClass = "border-primary/45 bg-primary/5 text-primary";
              if (index === 1) activeColorClass = "border-secondary/45 bg-secondary/5 text-secondary";
              else if (index === 2) activeColorClass = "border-accent/45 bg-accent/5 text-accent";
              else if (index === 3) activeColorClass = "border-primary/45 bg-primary/5 text-primary";
              else if (index === 4) activeColorClass = "border-secondary/45 bg-secondary/5 text-secondary";

              return (
                <button
                  key={layer.number}
                  onClick={() => setSelectedLayerIndex(index)}
                  className={cn(
                    "w-full text-left p-4.5 rounded-xl border border-border/60 bg-card backdrop-blur-sm shadow-sm transition-all duration-300 flex items-center justify-between group",
                    isActive ? activeColorClass : "hover:border-border hover:bg-muted/30"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span className={cn(
                      "font-mono text-xs font-bold px-2 py-1 rounded bg-muted/60 text-muted-foreground transition-colors",
                      isActive && "bg-foreground/10 text-foreground"
                    )}>
                      L{layer.number}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {layer.title}
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight 
                    size={16} 
                    className={cn(
                      "text-muted-foreground/60 transition-transform duration-300",
                      isActive ? "translate-x-1 text-current rotate-90 lg:rotate-0" : "group-hover:translate-x-0.5"
                    )} 
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Selected Layer Blueprint Preview Panel */}
          <div className="lg:col-span-6 h-full flex flex-col">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-elevated h-full min-h-[360px] flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
              {/* Subtle background tech symbols */}
              <div className="absolute right-[-4%] top-[-4%] -z-10 text-muted/30 pointer-events-none select-none">
                {selectedLayerIndex === 0 && <Monitor size={220} />}
                {selectedLayerIndex === 1 && <Layers size={220} />}
                {selectedLayerIndex === 2 && <Cpu size={220} />}
                {selectedLayerIndex === 3 && <Network size={220} />}
                {selectedLayerIndex === 4 && <Server size={220} />}
              </div>

              <div>
                <div className="flex items-center justify-between border-b border-border pb-4 font-mono text-[9px] tracking-widest text-primary">
                  <span>LAYER METRICS</span>
                  <span className="text-emerald-500 font-bold">● TELEMETRY VERIFIED</span>
                </div>

                <div className="mt-6">
                  <span className="font-mono text-[10px] font-bold text-primary uppercase bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                    Layer {activeLayerObj.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-3">
                    {activeLayerObj.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {activeLayerObj.description}
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-foreground mb-3">
                    LAYER COMPONENTS & SERVICES:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeLayerObj.components.map((comp) => (
                      <li 
                        key={comp} 
                        className="flex items-center gap-2 rounded-lg border border-border/80 bg-background/50 px-3.5 py-2 text-xs font-semibold text-foreground hover:border-primary/45 transition-colors"
                      >
                        <Play size={8} className="text-primary fill-primary shrink-0" />
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                <span>Decoupled API-First Standard</span>
                <span className="text-primary">Reliability: 99.99%</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
