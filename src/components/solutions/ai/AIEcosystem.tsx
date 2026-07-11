"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import {
  Database,
  Users,
  FileText,
  HardDrive,
  AppWindow,
  BrainCircuit,
  Sparkles,
  MessageSquareCode,
  LineChart,
  GitBranch,
  Landmark,
  Handshake,
  Factory,
  MessageSquareText,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

interface NodeItem {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

const dataSources: NodeItem[] = [
  { id: "erp_data", name: "ERP Data", description: "Transactional records, inventory status, operation logs", icon: Database },
  { id: "crm_data", name: "CRM Data", description: "Customer interaction histories, sales pipeline, support logs", icon: Users },
  { id: "documents", name: "Documents", description: "Invoices, legal contracts, wikis, unstructured text files", icon: FileText },
  { id: "databases", name: "Databases", description: "SQL/NoSQL relational data hubs, data lakes", icon: HardDrive },
  { id: "applications", name: "Applications", description: "SaaS APIs, custom hooks, communication nodes", icon: AppWindow },
];

const aiLayerComponents: NodeItem[] = [
  { id: "ml", name: "Machine Learning", description: "Pattern indexing and automated data grouping", icon: BrainCircuit },
  { id: "gen_ai", name: "Generative AI", description: "Context-aware generation, content summary", icon: Sparkles },
  { id: "nlp", name: "Natural Language", description: "Entity resolution and sentiment analysis rules", icon: MessageSquareCode },
  { id: "predictive", name: "Predictive Models", description: "Revenue projections and resource forecasts", icon: LineChart },
  { id: "automation", name: "Automation Engine", description: "Intelligent workflow execution and task routing", icon: GitBranch },
];

const businessLayerComponents: NodeItem[] = [
  { id: "finance", name: "Finance", description: "Cash flow modeling and ledger risk tracking", icon: Landmark },
  { id: "sales", name: "Sales", description: "Lead scoring, meeting intelligence, conversions", icon: Handshake },
  { id: "operations", name: "Operations", description: "Dynamic demand calculations and stock rules", icon: Factory },
  { id: "customer_service", name: "Customer Service", description: "Automated routing and instant ticket resolution", icon: MessageSquareText },
  { id: "management", name: "Management", description: "Decision intelligence portals and risk compliance reports", icon: Briefcase },
];

const flowConnections: Record<string, { ai: number[]; business: number[] }> = {
  erp_data: { ai: [0, 3, 4], business: [0, 2] },
  crm_data: { ai: [0, 2, 3], business: [1, 3] },
  documents: { ai: [1, 2], business: [3, 4] },
  databases: { ai: [0, 3, 4], business: [0, 2, 4] },
  applications: { ai: [1, 4], business: [1, 2, 3] },
};

export function AIEcosystem() {
  const [activeSource, setActiveSource] = useState<string | null>("erp_data");

  const isPathActiveL1 = (sourceId: string, aiIdx: number) => {
    if (!activeSource) return true;
    if (activeSource !== sourceId) return false;
    return flowConnections[sourceId]?.ai.includes(aiIdx) ?? false;
  };

  const isPathActiveL2 = (aiIdx: number, bizIdx: number) => {
    if (!activeSource) return true;
    const connections = flowConnections[activeSource];
    if (!connections) return false;
    return connections.ai.includes(aiIdx) && connections.business.includes(bizIdx);
  };

  const isNodeActive = (layer: "source" | "ai" | "business", id: string, idx?: number) => {
    if (!activeSource) return false;
    if (layer === "source") return activeSource === id;
    if (layer === "ai") return flowConnections[activeSource]?.ai.includes(idx ?? -1) ?? false;
    if (layer === "business") return flowConnections[activeSource]?.business.includes(idx ?? -1) ?? false;
    return false;
  };

  return (
    <section className="relative border-b border-border bg-background py-20 sm:py-28 overflow-hidden animate-fade-in">
      {/* Background Visual Enhancements */}
      <div className="absolute inset-0 bg-surface-glow opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4">
            Ecosystem Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Enterprise AI Pipeline Flow
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            BrainAI ingests enterprise datasets, routes them through cognitive models, and feeds insights directly into active business operations.
          </p>
          <p className="mt-2 text-xs text-primary font-medium">
            💡 Click any Data Source below to isolate its active AI processing pipeline.
          </p>
        </div>

        {/* Desktop Canvas */}
        <div className="hidden lg:block relative mx-auto w-full max-w-5xl h-[650px] mt-12">
          {/* SVG Connection Lines Overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <style>{`
              @keyframes dashFlow {
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
                animation: dashFlow 1.5s linear infinite;
                transition: all 0.5s ease;
                filter: drop-shadow(0 0 3px rgba(6, 182, 212, 0.4));
              }
            `}</style>

            {/* Layer 1 (Data Sources) -> Layer 2 (BrainAI Layer) */}
            {dataSources.map((source, srcIdx) => {
              const x1 = 10 + srcIdx * 20;
              const y1 = 15;
              return aiLayerComponents.map((ai, aiIdx) => {
                const x2 = 10 + aiIdx * 20;
                const y2 = 45;
                const active = isPathActiveL1(source.id, aiIdx);
                const d = `M ${x1} ${y1} C ${x1} 30, ${x2} 30, ${x2} ${y2}`;

                return (
                  <path
                    key={`l1-path-${source.id}-${ai.id}`}
                    d={d}
                    className={active ? "path-active" : "path-inactive"}
                  />
                );
              });
            })}

            {/* Layer 2 (BrainAI Layer) -> Layer 3 (Business Layer) */}
            {aiLayerComponents.map((ai, aiIdx) => {
              const x1 = 10 + aiIdx * 20;
              const y1 = 60;
              return businessLayerComponents.map((biz, bizIdx) => {
                const x2 = 10 + bizIdx * 20;
                const y2 = 85;
                const active = isPathActiveL2(aiIdx, bizIdx);
                const d = `M ${x1} ${y1} C ${x1} 72.5, ${x2} 72.5, ${x2} ${y2}`;

                return (
                  <path
                    key={`l2-path-${ai.id}-${biz.id}`}
                    d={d}
                    className={active ? "path-active" : "path-inactive"}
                  />
                );
              });
            })}
          </svg>

          {/* Layer 1: Data Sources Layer */}
          <div className="absolute top-[2%] left-0 w-full flex justify-between px-[5%] z-10">
            {dataSources.map((source) => {
              const Icon = source.icon;
              const active = isNodeActive("source", source.id);
              return (
                <button
                  key={source.id}
                  onClick={() => setActiveSource(activeSource === source.id ? null : source.id)}
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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Source</span>
                  </div>
                  <h4 className="text-xs font-bold text-foreground">{source.name}</h4>
                  <p className="text-[9px] text-muted-foreground mt-1 leading-normal">{source.description}</p>
                </button>
              );
            })}
          </div>

          {/* Layer 2 Wrapper: BrainAI Processing Layer */}
          <div className="absolute top-[40%] left-[3%] right-[3%] h-[165px] rounded-2xl border border-primary/15 bg-primary/5 backdrop-blur-sm z-10 flex flex-col p-4 shadow-inner">
            <div className="flex justify-between items-center mb-2.5 px-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                BrainAI Central Processing Core
              </span>
              <span className="text-[9px] font-mono text-muted-foreground/50">COGNITIVE COMPUTE NODE</span>
            </div>

            <div className="flex justify-between w-full h-full">
              {aiLayerComponents.map((ai, idx) => {
                const Icon = ai.icon;
                const active = isNodeActive("ai", ai.id, idx);
                return (
                  <div
                    key={ai.id}
                    className={cn(
                      "w-[18%] p-3 rounded-lg border transition-all duration-300 flex flex-col justify-center",
                      active
                        ? "border-primary/70 bg-background/80 shadow-glow-primary/20"
                        : "border-border/30 bg-card/20 opacity-60"
                    )}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className={cn("size-3.5", active ? "text-primary animate-pulse" : "text-muted-foreground")} />
                      <span className="text-[10px] font-bold text-foreground">{ai.name}</span>
                    </div>
                    <p className="text-[9px] text-muted-foreground leading-normal">{ai.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Layer 3: Business Layer */}
          <div className="absolute bottom-[2%] left-0 w-full flex justify-between px-[5%] z-10">
            {businessLayerComponents.map((biz, idx) => {
              const Icon = biz.icon;
              const active = isNodeActive("business", biz.id, idx);
              return (
                <div
                  key={biz.id}
                  className={cn(
                    "w-[17%] p-4 rounded-xl border transition-all duration-300 backdrop-blur-sm",
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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Action</span>
                  </div>
                  <h4 className="text-xs font-bold text-foreground">{biz.name}</h4>
                  <p className="text-[9px] text-muted-foreground mt-1 leading-normal">{biz.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden mt-8 space-y-8">
          {/* Layer 1 selectors */}
          <div className="rounded-2xl border border-border bg-card/20 p-4">
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">1. Data Sources</h3>
            <div className="grid grid-cols-2 gap-2">
              {dataSources.map((source) => {
                const Icon = source.icon;
                const active = activeSource === source.id;
                return (
                  <button
                    key={source.id}
                    onClick={() => setActiveSource(active ? null : source.id)}
                    className={cn(
                      "p-3 rounded-xl border text-left transition-all duration-200",
                      active
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border/40 bg-card/40 text-muted-foreground"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 text-primary shrink-0" />
                      <span className="text-xs font-bold text-foreground">{source.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Layer 2 Flow */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 relative">
            <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-8 h-8 rounded-full bg-border border border-border flex items-center justify-center text-muted-foreground">
              ↓
            </div>
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 mt-2">
              2. BrainAI Processing Core
            </h3>
            <div className="space-y-2">
              {aiLayerComponents.map((ai, idx) => {
                const Icon = ai.icon;
                const active = isNodeActive("ai", ai.id, idx);
                return (
                  <div
                    key={ai.id}
                    className={cn(
                      "p-3 rounded-xl border flex items-start gap-3 transition-all duration-300",
                      active ? "border-primary/60 bg-background" : "border-border/20 bg-card/10 opacity-40"
                    )}
                  >
                    <Icon className={cn("size-5 mt-0.5 shrink-0", active ? "text-primary animate-pulse" : "text-muted-foreground")} />
                    <div>
                      <h4 className="text-xs font-bold text-foreground">{ai.name}</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{ai.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Layer 3 Flow */}
          <div className="rounded-2xl border border-border bg-card/20 p-4 relative">
            <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-8 h-8 rounded-full bg-border border border-border flex items-center justify-center text-muted-foreground">
              ↓
            </div>
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 mt-2">
              3. Business Actions & Output
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {businessLayerComponents.map((biz, idx) => {
                const Icon = biz.icon;
                const active = isNodeActive("business", biz.id, idx);
                return (
                  <div
                    key={biz.id}
                    className={cn(
                      "p-3 rounded-xl border flex items-center gap-3 transition-all duration-300",
                      active ? "border-primary bg-primary/10" : "border-border/20 bg-card/10 opacity-40"
                    )}
                  >
                    <Icon className={cn("size-5 shrink-0", active ? "text-primary" : "text-muted-foreground")} />
                    <div>
                      <h4 className="text-xs font-bold text-foreground">{biz.name}</h4>
                      <p className="text-[10px] text-muted-foreground">{biz.description}</p>
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
