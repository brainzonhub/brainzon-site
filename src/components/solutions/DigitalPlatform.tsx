"use client";

import { useState } from "react";
import { Cpu, Database, Users, Network, Settings, ExternalLink, RefreshCw } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const integrations = [
  { id: "legacy", name: "Legacy Applications", type: "system", desc: "Outdated databases and monolithic ERP software scheduled for strangler pattern modernization." },
  { id: "govt", name: "Government APIs", type: "api", desc: "VAT verification systems, customs clearance APIs, and regulatory reporting ledgers." },
  { id: "pay", name: "Payment Gateways", type: "gateway", desc: "High-volume external processors including Stripe, Adyen, and localized banking portals." },
  { id: "ecommerce", name: "eCommerce Stores", type: "storefront", desc: "Public digital storefront clients built on custom React channels, Shopify, or Odoo POS." },
  { id: "thirdparty", name: "Partner SaaS ERPs", type: "saas", desc: "External business systems and supplier databases connected to sync telemetry." }
];

export function DigitalPlatform() {
  const [selectedIntegration, setSelectedIntegration] = useState<string | null>(null);
  const activeInt = integrations.find(i => i.id === selectedIntegration);

  return (
    <section className="relative py-20 border-b border-border/40 bg-background">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="badge-accent">Platform Integration Architecture</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            The Brainzon Digital Platform
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            The central backbone connects proprietary engines with external APIs and legacy applications in a unified, event-driven mesh architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Dynamic Integration Map */}
          <div className="lg:col-span-7 flex justify-center relative w-full h-[380px] sm:h-[450px]">
            {/* SVG connections map */}
            <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none" viewBox="0 0 500 500" preserveAspectRatio="none">
              <defs>
                <filter id="glow-cyan" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Dynamic communication channels */}
              {integrations.map((item, idx) => {
                const isActive = selectedIntegration === item.id;
                // Calculate radial layout points for external nodes (bottom hemisphere)
                // Narrow the spread from 150 deg (5*PI/6) to 30 deg (PI/6) to avoid overlaps at y = 50%
                const angle = (5 * Math.PI / 6) - (idx * (2 * Math.PI / 3) / 4);
                const x = 250 + 190 * Math.cos(angle);
                const y = 250 + 170 * Math.sin(angle);
                
                return (
                  <g key={`group-${item.id}`}>
                    <path
                      d={`M 250 250 Q ${250 + (x - 250)/2} ${250 + (y - 250)/2 - 30} ${x} ${y}`}
                      stroke="currentColor"
                      className={cn(
                        isActive ? "text-primary dark:text-cyan-400" : "text-border/45",
                        "transition-all duration-300 fill-none"
                      )}
                      strokeWidth={isActive ? 2.5 : 1.25}
                      strokeDasharray={!isActive ? "4 4" : undefined}
                      filter={isActive ? "url(#glow-cyan)" : undefined}
                    />
                    <circle r={isActive ? 4.5 : 2.5} fill={isActive ? "#06b6d4" : "transparent"}>
                      <animateMotion 
                        dur={isActive ? "1.0s" : "3.0s"} 
                        repeatCount="indefinite" 
                        path={`M 250 250 Q ${250 + (x - 250)/2} ${250 + (y - 250)/2 - 30} ${x} ${y}`} 
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Core 3 Main connection lines */}
              <line x1="250" y1="250" x2="250" y2="100" stroke="currentColor" className="text-border/65" strokeWidth="1.5" />
              <line x1="250" y1="250" x2="100" y2="250" stroke="currentColor" className="text-border/65" strokeWidth="1.5" />
              <line x1="250" y1="250" x2="400" y2="250" stroke="currentColor" className="text-border/65" strokeWidth="1.5" />
            </svg>

            {/* Central Integrator Hub: BrainConnect */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="size-20 rounded-2xl border border-primary/30 bg-card/95 flex flex-col items-center justify-center p-2 text-center shadow-glow-primary backdrop-blur-md">
                <Network size={20} className="text-primary animate-pulse" />
                <span className="text-[8px] font-mono font-bold text-foreground mt-1">BrainConnect</span>
                <span className="text-[6px] font-mono text-muted-foreground mt-0.5">ESB CORE</span>
              </div>
            </div>

            {/* Top Node: BrainAI */}
            <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="size-16 rounded-xl border border-accent/30 bg-card flex flex-col items-center justify-center p-1 text-center shadow-glow-accent">
                <Cpu size={16} className="text-accent" />
                <span className="text-[8px] font-mono font-bold text-foreground mt-0.5">BrainAI</span>
              </div>
            </div>

            {/* Left Node: BrainERP */}
            <div className="absolute top-[50%] left-[20%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="size-16 rounded-xl border border-primary/30 bg-card flex flex-col items-center justify-center p-1 text-center shadow-glow-primary">
                <Database size={16} className="text-primary" />
                <span className="text-[8px] font-mono font-bold text-foreground mt-0.5">BrainERP</span>
              </div>
            </div>

            {/* Right Node: BrainCRM */}
            <div className="absolute top-[50%] left-[80%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="size-16 rounded-xl border border-secondary/30 bg-card flex flex-col items-center justify-center p-1 text-center shadow-glow-secondary">
                <Users size={16} className="text-secondary" />
                <span className="text-[8px] font-mono font-bold text-foreground mt-0.5">BrainCRM</span>
              </div>
            </div>

            {/* Peripheral External Systems (Bottom Half Circle) */}
            {integrations.map((item, idx) => {
              const isActive = selectedIntegration === item.id;
              const angle = (5 * Math.PI / 6) - (idx * (2 * Math.PI / 3) / 4);
              const xPos = 50 + 38 * Math.cos(angle); // Expanded radial percentages for layout breathing room
              const yPos = 50 + 34 * Math.sin(angle);
 
              return (
                <div 
                  key={item.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300"
                  style={{ left: `${xPos}%`, top: `${yPos}%` }}
                  onMouseEnter={() => setSelectedIntegration(item.id)}
                  onMouseLeave={() => setSelectedIntegration(null)}
                >
                  <div className={cn(
                    "flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[8px] font-mono transition-all duration-300 bg-card shadow-sm cursor-pointer select-none",
                    isActive ? "border-primary text-primary scale-105 shadow-glow-primary" : "border-border text-muted-foreground hover:border-border hover:text-foreground"
                  )}>
                    <Settings size={8} className={cn("shrink-0", isActive && "animate-spin")} />
                    <span>{item.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Integration Spec Details */}
          <div className="lg:col-span-5 h-full flex flex-col justify-center">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-card h-full min-h-[280px] flex flex-col justify-between backdrop-blur-md">
              {activeInt ? (
                <div>
                  <div className="flex items-center gap-2 text-primary font-mono text-[9px] uppercase tracking-widest">
                    <RefreshCw size={10} className="animate-spin" /> Ingestion Tunnel Active
                  </div>
                  <h3 className="text-lg font-bold text-foreground mt-3 flex items-center gap-2">
                    {activeInt.name} <ExternalLink size={14} className="text-primary" />
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
                    {activeInt.desc}
                  </p>
                  <div className="mt-6 p-4 rounded-xl bg-muted/40 border border-border/80">
                    <span className="text-[8px] font-mono font-bold tracking-wider text-foreground block mb-2">CONNECTOR TELEMETRY SPECS:</span>
                    <ul className="text-[9px] font-mono text-muted-foreground space-y-1.5">
                      <li>• Exchange Protocol: REST APIs (JSON) / GraphQL</li>
                      <li>• Auth Verification: OAuth2 Client Credentials</li>
                      <li>• Queue Type: AMQP Messaging (RabbitMQ broker)</li>
                      <li>• Error Handling: Strangler-Compliant Strangler Filter</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center h-full py-12">
                  <Network size={36} className="text-muted-foreground/60 animate-pulse mb-3" />
                  <h3 className="text-sm font-bold text-foreground">Interactive Connectivity Inspection</h3>
                  <p className="text-[11px] text-muted-foreground mt-2 max-w-xs leading-relaxed">
                    Hover or tap any of the external connector systems (e.g. Payments, eCommerce, Government APIs) to trace data routes and inspection metrics.
                  </p>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-border/60 text-[10px] text-muted-foreground font-mono">
                Platform Standard: Event-Driven AMQP 1.0 Mesh
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
