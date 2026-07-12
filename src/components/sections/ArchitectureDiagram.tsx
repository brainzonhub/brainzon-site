import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { ArchitectureData } from "@/config/products";
import { Server, ArrowDown, Database, Cpu, Network } from "lucide-react";

interface ArchitectureDiagramProps {
  architecture: ArchitectureData;
}

export function ArchitectureDiagram({ architecture }: ArchitectureDiagramProps) {
  return (
    <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Platform Architecture & Topology
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {architecture.description} Built on modular microservices supporting high availability, strict isolation, and database durability.
          </p>
        </div>

        {/* Visual Diagram Board */}
        <div className="relative max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl border border-border bg-card/20 backdrop-blur-md shadow-elevated overflow-hidden">
          {/* Tech grid backdrop */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(30,51,77,0.06)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

          <div className="flex flex-col gap-0 relative">
            {architecture.layers.map((layer, layerIdx) => (
              <div key={layer.name} className="flex flex-col items-center w-full">
                {/* Custom Centralized Data Bus Connector */}
                {layerIdx > 0 && (
                  <div className="relative w-full h-16 flex flex-col justify-center items-center my-2">
                    {/* Vertical Pipeline bus */}
                    <div className="absolute top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-primary/60 via-secondary/70 to-primary/40" />
                    
                    {/* Glowing flow dots */}
                    <div className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_var(--primary)] animate-[bounce_2s_infinite]" />
                    <div className="absolute w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_var(--secondary)] animate-[bounce_3s_infinite_reverse] top-[30%]" />
                    
                    {/* Mini Flow Labels */}
                    <span className="absolute left-[52%] text-[7.5px] font-mono text-muted-foreground/60 tracking-wider">
                      DATA INGESTION BUS
                    </span>
                  </div>
                )}

                {/* Layer Frame with Sci-Fi target corners */}
                <div className="relative w-full rounded-2xl border border-border/40 bg-surface/30 p-6 flex flex-col items-center backdrop-blur-xs transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.03)] group">
                  {/* Tech Target Corners */}
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-primary/40 rounded-tl" />
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-primary/40 rounded-tr" />
                  <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-primary/40 rounded-bl" />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-primary/40 rounded-br" />

                  {/* Layer Header Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20 shadow-sm">
                      {layer.name}
                    </span>
                  </div>

                  {/* Nodes Grid inside layer */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center">
                    {layer.nodes.map((node) => {
                      // Custom node styling and theme colors
                      const config = {
                        gateway: {
                          border: "hover:border-primary/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]",
                          text: "text-primary",
                          bar: "bg-primary",
                          load: "12%",
                          metric: "QPS: 820"
                        },
                        core: {
                          border: "hover:border-secondary/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]",
                          text: "text-secondary",
                          bar: "bg-secondary",
                          load: "8%",
                          metric: "CPU: 0.04%"
                        },
                        service: {
                          border: "hover:border-accent/50 hover:shadow-[0_0_15px_rgba(234,179,8,0.15)]",
                          text: "text-accent",
                          bar: "bg-accent",
                          load: "15%",
                          metric: "LATENCY: 4ms"
                        },
                        storage: {
                          border: "hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]",
                          text: "text-blue-400",
                          bar: "bg-blue-500",
                          load: "4%",
                          metric: "IOPS: 12.4K"
                        }
                      }[node.type] || {
                        border: "hover:border-border",
                        text: "text-foreground",
                        bar: "bg-border",
                        load: "0%",
                        metric: "OK"
                      };

                      return (
                        <div
                          key={node.name}
                          className={cn(
                            "relative flex flex-col p-4 rounded-xl border border-border/40 bg-card/65 shadow-sm transition-all duration-300 hover:-translate-y-0.5",
                            config.border
                          )}
                        >
                          {/* Live Diagnostics LED */}
                          <div className="absolute top-4 right-4 flex items-center gap-1.5">
                            <span className="text-[7px] font-mono font-bold text-emerald-500 tracking-wider">ACTIVE</span>
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                            </span>
                          </div>

                          <div className="flex items-center gap-2 mb-2">
                            {node.type === "storage" && <Database size={13} className="text-blue-400" />}
                            {node.type === "core" && <Cpu size={13} className="text-secondary" />}
                            {node.type === "gateway" && <Network size={13} className="text-primary" />}
                            {node.type === "service" && <Server size={13} className="text-accent" />}
                            <span className="text-xs font-bold text-foreground pr-8 truncate">{node.name}</span>
                          </div>
                          
                          <p className="text-[11px] text-muted-foreground leading-normal mt-1 flex-1">
                            {node.description}
                          </p>

                          {/* Tech Diagnostic Load Bar */}
                          <div className="mt-4 pt-3 border-t border-border/10 flex flex-col gap-1.5">
                            <div className="flex items-center justify-between text-[8px] font-mono text-muted-foreground/60">
                              <span>{config.metric}</span>
                              <span>LOAD: {config.load}</span>
                            </div>
                            <div className="w-full h-[3px] bg-muted/20 rounded-full overflow-hidden">
                              <div className={cn("h-full rounded-full transition-all duration-500", config.bar)} style={{ width: config.load }} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flow Indicator tags */}
          <div className="absolute top-4 left-4 text-[9px] font-mono text-muted-foreground/40">
            SYSTEM INTEGRITY: SECURE
          </div>
          <div className="absolute bottom-4 right-4 text-[9px] font-mono text-muted-foreground/40">
            ENCRYPTED NETWORK TUNNELS
          </div>
        </div>
      </Container>
    </section>
  );
}
