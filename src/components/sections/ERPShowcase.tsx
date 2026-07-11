"use client";

import { useState } from "react";
import Link from "next/link";
import { Database, Wallet, Package, HardHat, Users, BarChart3, ShieldCheck, ArrowRight, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type ERPModule = {
  id: string;
  name: string;
  icon: LucideIcon;
  metricLabel: string;
  metricValue: string;
  metricLabel2: string;
  metricValue2: string;
  details: string;
  graphType: "bars" | "sparkline" | "grid";
  graphData: number[];
};

const erpModules: ERPModule[] = [
  {
    id: "finance",
    name: "Finance & Ledger",
    icon: Wallet,
    metricLabel: "Audit Rating",
    metricValue: "AAA Secure",
    metricLabel2: "Ledger Sync",
    metricValue2: "Real-time",
    details: "Automated closing cycles, multi-entity consolidation, and AI audit readiness matching global compliance laws.",
    graphType: "sparkline",
    graphData: [30, 45, 40, 55, 60, 50, 65, 80]
  },
  {
    id: "inventory",
    name: "Inventory & Supply",
    icon: Package,
    metricLabel: "Stock Accuracy",
    metricValue: "99.98%",
    metricLabel2: "Warehouse Nodes",
    metricValue2: "14 Global",
    details: "Automated tracking, predictive replenishment triggers, and real-time inventory visibility across global warehouses.",
    graphType: "bars",
    graphData: [60, 80, 55, 70, 90, 65]
  },
  {
    id: "manufacturing",
    name: "Manufacturing Queue",
    icon: HardHat,
    metricLabel: "OEE Score",
    metricValue: "88.4%",
    metricLabel2: "Cycle Time",
    metricValue2: "-14% Reduction",
    details: "Advanced job-shop scheduling, capacity constraints planner, and IoT machinery integration on the production floor.",
    graphType: "grid",
    graphData: [1, 1, 0, 1, 1, 1, 1, 0, 1]
  },
  {
    id: "hr",
    name: "Human Resources",
    icon: Users,
    metricLabel: "Retention Rate",
    metricValue: "94.2%",
    metricLabel2: "Payroll Accuracy",
    metricValue2: "100% Perfect",
    details: "Unified payroll engines, benefit trackers, and performance reviews with direct compliance ledger integrations.",
    graphType: "sparkline",
    graphData: [70, 72, 75, 78, 81, 84, 86, 92]
  },
  {
    id: "bi",
    name: "Business Intelligence",
    icon: BarChart3,
    metricLabel: "Decision Latency",
    metricValue: "< 3 Sec",
    metricLabel2: "Data Pipelines",
    metricValue2: "32 Connected",
    details: "Continuous operational analytics, visual pipelines, and executive dashboards with auto-generated forecast reports.",
    graphType: "bars",
    graphData: [40, 50, 65, 80, 75, 95]
  }
];

export function ERPShowcase() {
  const [selectedModule, setSelectedModule] = useState<ERPModule>(erpModules[0] as ERPModule);

  return (
    <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptions */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 mb-6">
              Operations Control
            </span>
            <h2 className="text-heading-2 font-bold tracking-tight text-foreground">
              BrainERP Showcase
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Consolidate complex global operations into a single intelligent digital platform. Unify resource pipelines, finance control structures, and machinery intelligence workflows.
            </p>

            {/* List of modules to select */}
            <div className="mt-8 flex flex-col gap-2 w-full">
              {erpModules.map((mod) => {
                const Icon = mod.icon;
                const isSelected = selectedModule.id === mod.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setSelectedModule(mod)}
                    className={cn(
                      "w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isSelected 
                        ? "border-primary/50 bg-primary/10 text-foreground shadow-glow-primary" 
                        : "border-border bg-card/20 text-muted-foreground hover:bg-card/45 hover:text-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "flex size-8 items-center justify-center rounded-lg transition-colors",
                        isSelected ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                      )}>
                        <Icon size={16} />
                      </div>
                      <span className="text-xs font-bold">{mod.name}</span>
                    </div>
                    {isSelected && <div className="size-1.5 rounded-full bg-primary animate-pulse" />}
                  </button>
                );
              })}
            </div>

            <Link
              href="/products/brainerp"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:underline"
            >
              <span>Explore BrainERP Modules</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Column: Holographic Dashboard Simulator */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-elevated overflow-hidden backdrop-blur-md">
              {/* Outer decorative neon elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              
              {/* Control Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <Database size={16} className="text-primary animate-pulse" />
                  <span className="text-[11px] font-mono tracking-widest text-primary font-bold uppercase">
                    BrainERP Live Control Panel
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[9px] font-mono text-emerald-400">CORE AGENT CONNECTED</span>
                </div>
              </div>

              {/* Control Panel Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl border border-border/40 bg-muted/20">
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground">{selectedModule.metricLabel}</p>
                  <p className="text-base font-extrabold text-foreground mt-1">{selectedModule.metricValue}</p>
                </div>
                <div className="p-4 rounded-xl border border-border/40 bg-muted/20">
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground">{selectedModule.metricLabel2}</p>
                  <p className="text-base font-extrabold text-primary mt-1">{selectedModule.metricValue2}</p>
                </div>
              </div>

              {/* Simulated visual graph panel */}
              <div className="mt-6 p-4 rounded-xl border border-border/40 bg-muted/10 h-32 flex flex-col justify-between">
                <p className="text-[10px] text-muted-foreground font-mono">
                  {selectedModule.name} Active Pipeline Visualizer
                </p>

                {selectedModule.graphType === "sparkline" && (
                  <div className="flex items-end gap-1 h-14">
                    {selectedModule.graphData.map((val, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-primary/10 to-primary/60 hover:to-primary rounded-t transition-all" 
                        style={{ height: `${val}%` }} 
                      />
                    ))}
                  </div>
                )}

                {selectedModule.graphType === "bars" && (
                  <div className="flex items-end gap-2 h-14">
                    {selectedModule.graphData.map((val, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-secondary/10 to-secondary/60 hover:to-secondary rounded-t transition-all" 
                        style={{ height: `${val}%` }} 
                      />
                    ))}
                  </div>
                )}

                {selectedModule.graphType === "grid" && (
                  <div className="grid grid-cols-3 gap-2 h-14 items-center">
                    {selectedModule.graphData.map((val, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "h-3 rounded-full border transition-all",
                          val === 1 
                            ? "bg-primary/20 border-primary/50" 
                            : "bg-transparent border-border"
                        )} 
                      />
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center text-[8px] text-muted-foreground font-mono pt-2 border-t border-border/20">
                  <span>SEGMENT: {selectedModule.id.toUpperCase()}</span>
                  <span>STATUS: SYNCED</span>
                </div>
              </div>

              {/* Module Description Content */}
              <div className="mt-6 flex items-start gap-3 p-3.5 rounded-xl border border-border/60 bg-muted/5">
                <ShieldCheck className="text-primary mt-0.5 shrink-0" size={16} />
                <p className="text-[11px] text-muted-foreground leading-normal">
                  {selectedModule.details}
                </p>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
