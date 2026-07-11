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
        <div className="relative max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl border border-border bg-card/20 backdrop-blur-md shadow-elevated">
          {/* Decorative grid backdrop */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(30,51,77,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

          <div className="flex flex-col gap-10">
            {architecture.layers.map((layer, layerIdx) => (
              <div key={layer.name} className="flex flex-col items-center">
                {/* Arrow Connector between layers */}
                {layerIdx > 0 && (
                  <div className="flex flex-col items-center gap-1 mb-8 text-primary">
                    <ArrowDown size={18} className="animate-[bounce_3s_infinite]" />
                    <div className="w-[1.5px] h-4 bg-gradient-to-b from-primary to-transparent" />
                  </div>
                )}

                {/* Layer Frame */}
                <div className="w-full rounded-2xl border border-border/40 bg-surface/50 p-6 flex flex-col items-center">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase mb-6 bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                    {layer.name}
                  </span>

                  {/* Nodes Grid inside layer */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center">
                    {layer.nodes.map((node) => {
                      // Custom node rendering colors
                      const borderColors = {
                        gateway: "hover:border-primary/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]",
                        core: "hover:border-secondary/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]",
                        service: "hover:border-accent/50 hover:shadow-[0_0_15px_rgba(234,179,8,0.15)]",
                        storage: "hover:border-primary/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      }[node.type] || "hover:border-border";

                      return (
                        <div
                          key={node.name}
                          className={cn(
                            "flex flex-col p-4 rounded-xl border border-border/40 bg-card shadow-sm transition-all duration-300",
                            borderColors
                          )}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            {node.type === "storage" && <Database size={12} className="text-primary" />}
                            {node.type === "core" && <Cpu size={12} className="text-secondary" />}
                            {node.type === "gateway" && <Network size={12} className="text-primary" />}
                            {node.type === "service" && <Server size={12} className="text-accent" />}
                            <span className="text-xs font-bold text-foreground">{node.name}</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-normal mt-1 flex-1">
                            {node.description}
                          </p>
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
            SECURE INFRASTRUCTURE NETWORK
          </div>
          <div className="absolute bottom-4 right-4 text-[9px] font-mono text-muted-foreground/40">
            ENCRYPTED (TLS 1.3)
          </div>
        </div>
      </Container>
    </section>
  );
}
