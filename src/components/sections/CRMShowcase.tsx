"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Target, 
  LayoutDashboard, 
  Users, 
  Clock, 
  HeartHandshake, 
  ShieldCheck, 
  ArrowRight, 
  type LucideIcon 
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type CRMModule = {
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

const crmModules: CRMModule[] = [
  {
    id: "lead-scoring",
    name: "Lead Qualification & Scoring",
    icon: Target,
    metricLabel: "Conversion Velocity",
    metricValue: "+38% Faster",
    metricLabel2: "Qualification Rate",
    metricValue2: "94.2% Verified",
    details: "Automated intent scoring, territory routing, qualification checklists, and instant handoff from marketing campaigns.",
    graphType: "bars",
    graphData: [45, 60, 70, 85, 80, 95]
  },
  {
    id: "pipeline",
    name: "Visual Sales Pipeline",
    icon: LayoutDashboard,
    metricLabel: "Pipeline Value",
    metricValue: "$2.4M Active",
    metricLabel2: "Forecast Accuracy",
    metricValue2: "92.8% Confidence",
    details: "Kanban deal stages, probability weighting, revenue forecasting, and milestone-based deal velocity tracking.",
    graphType: "sparkline",
    graphData: [35, 45, 40, 60, 65, 55, 75, 90]
  },
  {
    id: "customer-360",
    name: "Customer 360 Profiles",
    icon: Users,
    metricLabel: "Profile Depth",
    metricValue: "Complete 360°",
    metricLabel2: "Account Retention",
    metricValue2: "98.6% Loyalty",
    details: "Centralized account hierarchies, cross-department relationship intelligence, contact maps, and unified interaction logs.",
    graphType: "grid",
    graphData: [1, 1, 1, 1, 1, 1, 1, 0, 1]
  },
  {
    id: "timeline",
    name: "Engagement Timeline",
    icon: Clock,
    metricLabel: "Touchpoint Tracking",
    metricValue: "100% Real-time",
    metricLabel2: "Response Time",
    metricValue2: "< 15 Mins",
    details: "Chronological activity streams consolidating meetings, email threads, calls, and service tickets into a single unified timeline.",
    graphType: "sparkline",
    graphData: [25, 40, 35, 50, 65, 70, 85, 95]
  },
  {
    id: "service",
    name: "Customer Service Coordination",
    icon: HeartHandshake,
    metricLabel: "First Contact SLA",
    metricValue: "99.2% Met",
    metricLabel2: "CSAT Score",
    metricValue2: "4.9 / 5.0",
    details: "Integrated ticket dispatching, escalation workflows, SLA alerts, and direct handoffs between support and account managers.",
    graphType: "bars",
    graphData: [50, 65, 75, 80, 90, 100]
  }
];

export function CRMShowcase() {
  const [selectedModule, setSelectedModule] = useState<CRMModule>(crmModules[0] as CRMModule);

  return (
    <section className="relative py-20 border-b border-border/40 bg-surface transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptions */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 mb-6">
              Customer Relationship Management
            </span>
            <h2 className="text-heading-2 font-bold tracking-tight text-foreground">
              BrainCRM Showcase
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Consolidate customer journeys, visual pipelines, and multi-channel touchpoints under one unified platform. Track leads, sync operations, and automate outreach schedules.
            </p>

            {/* List of modules to select */}
            <div className="mt-8 flex flex-col gap-2 w-full">
              {crmModules.map((mod) => {
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
                        ? "border-amber-500/50 bg-amber-500/10 text-foreground shadow-sm" 
                        : "border-border bg-card/20 text-muted-foreground hover:bg-card/45 hover:text-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "flex size-8 items-center justify-center rounded-lg transition-colors",
                        isSelected ? "bg-amber-500/20 text-amber-500 dark:text-amber-400" : "bg-muted text-muted-foreground"
                      )}>
                        <Icon size={16} />
                      </div>
                      <span className="text-xs font-bold">{mod.name}</span>
                    </div>
                    {isSelected && <div className="size-1.5 rounded-full bg-amber-500 animate-pulse" />}
                  </button>
                );
              })}
            </div>

            <Link
              href="/products/braincrm"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:underline"
            >
              <span>Explore BrainCRM Modules</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Column: Interactive Live Pipeline Engine Simulator */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-elevated overflow-hidden backdrop-blur-md">
              {/* Outer decorative neon elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Control Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <LayoutDashboard size={16} className="text-amber-500 animate-pulse" />
                  <span className="text-[11px] font-mono tracking-widest text-amber-600 dark:text-amber-400 font-bold uppercase">
                    BrainCRM Live Pipeline Engine
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[9px] font-mono text-emerald-400">AI AGENT CONNECTED</span>
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
                  <p className="text-base font-extrabold text-amber-600 dark:text-amber-400 mt-1">{selectedModule.metricValue2}</p>
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
                        className="flex-1 bg-gradient-to-t from-amber-500/10 to-amber-500/60 hover:to-amber-500 rounded-t transition-all" 
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
                        className="flex-1 bg-gradient-to-t from-amber-500/20 to-amber-500/80 hover:to-amber-500 rounded-t transition-all" 
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
                            ? "bg-amber-500/20 border-amber-500/50" 
                            : "bg-transparent border-border"
                        )} 
                      />
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center text-[8px] text-muted-foreground font-mono pt-2 border-t border-border/20">
                  <span>PIPELINE: {selectedModule.id.toUpperCase()}</span>
                  <span>STATUS: SYNCED W/ ERP &amp; MKT</span>
                </div>
              </div>

              {/* Module Description Content */}
              <div className="mt-6 flex items-start gap-3 p-3.5 rounded-xl border border-border/60 bg-muted/5">
                <ShieldCheck className="text-amber-500 mt-0.5 shrink-0" size={16} />
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
