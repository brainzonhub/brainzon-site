"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import {
  Database,
  Users,
  ShoppingCart,
  UserCheck,
  Landmark,
  Network,
  GitBranch,
  RefreshCw,
  Cpu,
  Shield,
  HardDrive,
  Cloud,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

interface NodeItem {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

const businessApps: NodeItem[] = [
  { id: "erp", name: "ERP Systems", description: "BrainERP & external ERPs. Syncs inventory and records.", icon: Database },
  { id: "crm", name: "CRM Platforms", description: "BrainCRM & HubSpot. Tracks pipelines and contacts.", icon: Users },
  { id: "ecommerce", name: "eCommerce", description: "Shopify & custom storefronts. Orchestrates checkouts.", icon: ShoppingCart },
  { id: "hr", name: "HR Systems", description: "BambooHR & Workday. Connects employee records.", icon: UserCheck },
  { id: "finance", name: "Finance Tools", description: "Stripe & QuickBooks. Automates invoice flows.", icon: Landmark },
];

const integrationComponents: NodeItem[] = [
  { id: "gateway", name: "API Gateway", description: "Handles secure endpoints and rate-limiting.", icon: Network },
  { id: "workflow", name: "Workflow Engine", description: "Executes business logic rules and event triggers.", icon: GitBranch },
  { id: "mapping", name: "Data Mapping", description: "Translates different document structures.", icon: RefreshCw },
  { id: "transform", name: "Transformation Engine", description: "Converts XML, JSON, CSV in real-time.", icon: Cpu },
  { id: "security", name: "Security Layer", description: "Applies OAuth2, encryption, and IP checks.", icon: Shield },
];

const dataComponents: NodeItem[] = [
  { id: "databases", name: "Databases", description: "PostgreSQL, Mongo, SQL Server transactions.", icon: HardDrive },
  { id: "storage", name: "Cloud Storage", description: "AWS S3 and cloud storage for log files.", icon: Cloud },
  { id: "analytics", name: "Analytics & BI", description: "Snowflake & BI tools for data warehousing.", icon: BarChart3 },
];

// Active paths mapping category to connected nodes
const flowConnections: Record<string, { integration: number[]; data: number[] }> = {
  erp: { integration: [1, 2], data: [0, 2] },
  crm: { integration: [0, 4], data: [0] },
  ecommerce: { integration: [0, 2, 3], data: [0, 2] },
  hr: { integration: [2, 4], data: [1] },
  finance: { integration: [3, 4], data: [0, 1] },
};

export function IntegrationArchitecture() {
  const [activeCategory, setActiveCategory] = useState<string | null>("ecommerce");

  // Determine if a connection between a business app (index i) and integration component (index j) is active
  const isPathActiveL1 = (appId: string, intIdx: number) => {
    if (!activeCategory) return true;
    if (activeCategory !== appId) return false;
    return flowConnections[appId]?.integration.includes(intIdx) ?? false;
  };

  // Determine if a connection between an integration component (index j) and data component (index k) is active
  const isPathActiveL2 = (intIdx: number, dataIdx: number) => {
    if (!activeCategory) return true;
    const activeConn = flowConnections[activeCategory];
    if (!activeConn) return false;
    return activeConn.integration.includes(intIdx) && activeConn.data.includes(dataIdx);
  };

  // Check if specific node is highlighted
  const isNodeActive = (layer: "app" | "integration" | "data", id: string, idx?: number) => {
    if (!activeCategory) return false;
    if (layer === "app") return activeCategory === id;
    if (layer === "integration") return flowConnections[activeCategory]?.integration.includes(idx ?? -1) ?? false;
    if (layer === "data") return flowConnections[activeCategory]?.data.includes(idx ?? -1) ?? false;
    return false;
  };

  return (
    <section className="relative border-b border-border bg-background py-20 sm:py-28 overflow-hidden">
      {/* Background Visual Enhancements */}
      <div className="absolute inset-0 bg-surface-glow opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4">
            Architecture Topology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Hybrid Enterprise Integration Architecture
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            BrainConnect bridges your transactional applications, workflow policies, and central data warehouses through a highly resilient, low-latency orchestration grid.
          </p>
          <p className="mt-2 text-xs text-primary font-medium">
            💡 Click any Business Application to isolate its integration pipeline.
          </p>
        </div>

        {/* ─────────── Desktop Canvas (lg:block) ─────────── */}
        <div className="hidden lg:block relative mx-auto w-full max-w-5xl h-[650px] mt-12">
          {/* SVG Connection Lines Overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            {/* Styles for dashed animations */}
            <style>{`
              @keyframes dash {
                to {
                  stroke-dashoffset: -40;
                }
              }
              .path-inactive {
                stroke: var(--color-border);
                opacity: 0.12;
                stroke-width: 1;
                transition: all 0.5s ease;
              }
              .path-active {
                stroke: var(--color-primary, #06b6d4);
                opacity: 0.85;
                stroke-width: 2.5;
                stroke-dasharray: 6 3;
                animation: dash 1.5s linear infinite;
                transition: all 0.5s ease;
                filter: drop-shadow(0 0 3px rgba(6, 182, 212, 0.4));
              }
            `}</style>

            {/* Layer 1 (Business Apps) -> Layer 2 (BrainConnect) */}
            {businessApps.map((app, appIdx) => {
              const x1 = 10 + appIdx * 20;
              const y1 = 15;
              return integrationComponents.map((int, intIdx) => {
                const x2 = 10 + intIdx * 20;
                const y2 = 45;
                const active = isPathActiveL1(app.id, intIdx);
                // Calculate smooth sigmoid curve
                const d = `M ${x1} ${y1} C ${x1} 30, ${x2} 30, ${x2} ${y2}`;

                return (
                  <path
                    key={`l1-path-${app.id}-${int.id}`}
                    d={d}
                    className={active ? "path-active" : "path-inactive"}
                  />
                );
              });
            })}

            {/* Layer 2 (BrainConnect) -> Layer 3 (Data Layer) */}
            {integrationComponents.map((int, intIdx) => {
              const x1 = 10 + intIdx * 20;
              const y1 = 60;
              return dataComponents.map((data, dataIdx) => {
                const x2 = 20 + dataIdx * 30;
                const y2 = 85;
                const active = isPathActiveL2(intIdx, dataIdx);
                // Calculate smooth sigmoid curve
                const d = `M ${x1} ${y1} C ${x1} 72.5, ${x2} 72.5, ${x2} ${y2}`;

                return (
                  <path
                    key={`l2-path-${int.id}-${data.id}`}
                    d={d}
                    className={active ? "path-active" : "path-inactive"}
                  />
                );
              });
            })}
          </svg>

          {/* Layer 1: Business Applications Layer */}
          <div className="absolute top-[2%] left-0 w-full flex justify-between px-[5%] z-10">
            {businessApps.map((app) => {
              const Icon = app.icon;
              const active = isNodeActive("app", app.id);
              return (
                <button
                  key={app.id}
                  onClick={() => setActiveCategory(activeCategory === app.id ? null : app.id)}
                  className={cn(
                    "w-[17%] text-left p-4 rounded-xl border transition-all duration-300 backdrop-blur-sm cursor-pointer",
                    active
                      ? "border-primary bg-primary/10 shadow-glow-primary translate-y-[-2px]"
                      : "border-border/40 bg-card/40 hover:border-primary/40 hover:bg-card/60"
                  )}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={cn(
                      "p-1.5 rounded-lg border transition-all duration-300",
                      active ? "border-primary/40 bg-primary/20 text-primary" : "border-border/60 bg-surface/50 text-muted-foreground"
                    )}>
                      <Icon className="size-4" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Layer 1</span>
                  </div>
                  <h4 className="text-xs font-bold text-foreground">{app.name}</h4>
                  <p className="text-[9px] text-muted-foreground mt-1 leading-normal">{app.description}</p>
                </button>
              );
            })}
          </div>

          {/* Layer 2 Wrapper: BrainConnect Integration Platform */}
          <div className="absolute top-[40%] left-[3%] right-[3%] h-[165px] rounded-2xl border border-primary/15 bg-primary/5 backdrop-blur-sm z-10 flex flex-col p-4 shadow-inner">
            <div className="flex justify-between items-center mb-2.5 px-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                Layer 2: BrainConnect Orchestration Hub
              </span>
              <span className="text-[9px] font-mono text-muted-foreground/50">SECURE TRANSACTION FLOW</span>
            </div>

            <div className="flex justify-between w-full h-full">
              {integrationComponents.map((int, idx) => {
                const Icon = int.icon;
                const active = isNodeActive("integration", int.id, idx);
                return (
                  <div
                    key={int.id}
                    className={cn(
                      "w-[18%] p-3 rounded-lg border transition-all duration-300 flex flex-col justify-center",
                      active
                        ? "border-primary/70 bg-background/80 shadow-glow-primary/20"
                        : "border-border/30 bg-card/20 opacity-60"
                    )}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className={cn("size-3.5", active ? "text-primary" : "text-muted-foreground")} />
                      <span className="text-[10px] font-bold text-foreground">{int.name}</span>
                    </div>
                    <p className="text-[9px] text-muted-foreground leading-normal">{int.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Layer 3: Data Layer */}
          <div className="absolute bottom-[2%] left-0 w-full flex justify-around px-[10%] z-10">
            {dataComponents.map((data, idx) => {
              const Icon = data.icon;
              const active = isNodeActive("data", data.id, idx);
              return (
                <div
                  key={data.id}
                  className={cn(
                    "w-[24%] p-4 rounded-xl border transition-all duration-300 backdrop-blur-sm",
                    active
                      ? "border-primary bg-primary/10 shadow-glow-primary"
                      : "border-border/40 bg-card/40 opacity-70"
                  )}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={cn(
                      "p-1.5 rounded-lg border",
                      active ? "border-primary/40 bg-primary/20 text-primary" : "border-border/60 bg-surface/50 text-muted-foreground"
                    )}>
                      <Icon className="size-4" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Layer 3</span>
                  </div>
                  <h4 className="text-xs font-bold text-foreground">{data.name}</h4>
                  <p className="text-[9px] text-muted-foreground mt-1 leading-normal">{data.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─────────── Mobile Layout (lg:hidden) ─────────── */}
        <div className="lg:hidden mt-8 space-y-8">
          {/* Row 1 selection */}
          <div className="rounded-2xl border border-border bg-card/20 p-4">
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">1. Select Application</h3>
            <div className="grid grid-cols-2 gap-2">
              {businessApps.map((app) => {
                const Icon = app.icon;
                const active = activeCategory === app.id;
                return (
                  <button
                    key={app.id}
                    onClick={() => setActiveCategory(active === true ? null : app.id)}
                    className={cn(
                      "p-3 rounded-xl border text-left transition-all duration-200",
                      active
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border/40 bg-card/40 text-muted-foreground"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 text-primary shrink-0" />
                      <span className="text-xs font-bold text-foreground">{app.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 2 integration flow */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 relative">
            <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-8 h-8 rounded-full bg-border border border-border flex items-center justify-center text-muted-foreground">
              ↓
            </div>
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 mt-2">
              2. BrainConnect Actions
            </h3>
            <div className="space-y-2">
              {integrationComponents.map((int, idx) => {
                const Icon = int.icon;
                const active = isNodeActive("integration", int.id, idx);
                return (
                  <div
                    key={int.id}
                    className={cn(
                      "p-3 rounded-xl border flex items-start gap-3 transition-all duration-300",
                      active ? "border-primary/60 bg-background" : "border-border/20 bg-card/10 opacity-40"
                    )}
                  >
                    <Icon className={cn("size-5 mt-0.5 shrink-0", active ? "text-primary animate-pulse" : "text-muted-foreground")} />
                    <div>
                      <h4 className="text-xs font-bold text-foreground">{int.name}</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{int.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 3 data sink */}
          <div className="rounded-2xl border border-border bg-card/20 p-4 relative">
            <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-8 h-8 rounded-full bg-border border border-border flex items-center justify-center text-muted-foreground">
              ↓
            </div>
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 mt-2">
              3. Target Storage & Processing
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {dataComponents.map((data, idx) => {
                const Icon = data.icon;
                const active = isNodeActive("data", data.id, idx);
                return (
                  <div
                    key={data.id}
                    className={cn(
                      "p-3 rounded-xl border flex items-center gap-3 transition-all duration-300",
                      active ? "border-primary bg-primary/10" : "border-border/20 bg-card/10 opacity-40"
                    )}
                  >
                    <Icon className={cn("size-5 shrink-0", active ? "text-primary" : "text-muted-foreground")} />
                    <div>
                      <h4 className="text-xs font-bold text-foreground">{data.name}</h4>
                      <p className="text-[10px] text-muted-foreground">{data.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
