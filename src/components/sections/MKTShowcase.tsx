"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Megaphone, 
  Share2, 
  Users, 
  FileCheck2, 
  ArrowRightLeft, 
  ShieldCheck, 
  ArrowRight, 
  type LucideIcon 
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type MKTModule = {
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

const mktModules: MKTModule[] = [
  {
    id: "campaigns",
    name: "Campaign Planner",
    icon: Megaphone,
    metricLabel: "Campaign Velocity",
    metricValue: "+45% Faster",
    metricLabel2: "Milestone Sync",
    metricValue2: "Real-time",
    details: "Collaborative marketing calendars, milestone dependencies, asset owner assignments, and automated launch readiness tracking.",
    graphType: "bars",
    graphData: [45, 60, 75, 90, 85, 95]
  },
  {
    id: "channels",
    name: "Multi-Channel Hub",
    icon: Share2,
    metricLabel: "Channel Reach",
    metricValue: "1.4M Global",
    metricLabel2: "Avg RoAS",
    metricValue2: "3.8x Return",
    details: "Unified connectors for Google, Meta, and LinkedIn with central ad budget pacing and cross-channel performance analytics.",
    graphType: "sparkline",
    graphData: [30, 48, 42, 60, 68, 62, 78, 92]
  },
  {
    id: "audiences",
    name: "Audience Segmentation",
    icon: Users,
    metricLabel: "Cohort Accuracy",
    metricValue: "99.4%",
    metricLabel2: "Active Segments",
    metricValue2: "24 Cohorts",
    details: "Dynamic behavioral criteria, real-time subscriber enrichment, and privacy-safe boundary controls without data silos.",
    graphType: "grid",
    graphData: [1, 1, 1, 1, 0, 1, 1, 1, 1]
  },
  {
    id: "content",
    name: "Content & Approvals",
    icon: FileCheck2,
    metricLabel: "Approval Cycle",
    metricValue: "< 4 Hours",
    metricLabel2: "Brand Check",
    metricValue2: "100% Compliant",
    details: "Structured creative reviews, copy staging, legal approval checkpoints, and automated multi-channel publishing triggers.",
    graphType: "bars",
    graphData: [50, 65, 70, 85, 90, 100]
  },
  {
    id: "handoff",
    name: "CRM Lead Dispatcher",
    icon: ArrowRightLeft,
    metricLabel: "Handoff Latency",
    metricValue: "Near Instant",
    metricLabel2: "Lead Attribution",
    metricValue2: "100% Verified",
    details: "Instant event streaming that dispatches scored marketing leads directly into BrainCRM pipelines with complete journey attribution.",
    graphType: "sparkline",
    graphData: [40, 55, 50, 70, 75, 85, 90, 98]
  }
];

export function MKTShowcase() {
  const [selectedModule, setSelectedModule] = useState<MKTModule>(mktModules[0] as MKTModule);

  return (
    <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptions */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-500 bg-cyan-500/10 border border-cyan-500/20 mb-6">
              Marketing Orchestration
            </span>
            <h2 className="text-heading-2 font-bold tracking-tight text-foreground">
              BrainMKT Showcase
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Coordinate high-velocity marketing initiatives, multi-channel campaigns, and automated audience segmentation with seamless CRM lead handoffs.
            </p>

            {/* List of modules to select */}
            <div className="mt-8 flex flex-col gap-2 w-full">
              {mktModules.map((mod) => {
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
                        ? "border-cyan-500/50 bg-cyan-500/10 text-foreground shadow-sm" 
                        : "border-border bg-card/20 text-muted-foreground hover:bg-card/45 hover:text-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "flex size-8 items-center justify-center rounded-lg transition-colors",
                        isSelected ? "bg-cyan-500/20 text-cyan-500 dark:text-cyan-400" : "bg-muted text-muted-foreground"
                      )}>
                        <Icon size={16} />
                      </div>
                      <span className="text-xs font-bold">{mod.name}</span>
                    </div>
                    {isSelected && <div className="size-1.5 rounded-full bg-cyan-500 animate-pulse" />}
                  </button>
                );
              })}
            </div>

            <Link
              href="/products/brainmkt"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              <span>Explore BrainMKT Modules</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Column: Interactive Live Campaign Engine Simulator */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-elevated overflow-hidden backdrop-blur-md">
              {/* Outer decorative neon elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Control Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <Megaphone size={16} className="text-cyan-500 animate-pulse" />
                  <span className="text-[11px] font-mono tracking-widest text-cyan-600 dark:text-cyan-400 font-bold uppercase">
                    BrainMKT Live Campaign Engine
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
                  <p className="text-base font-extrabold text-cyan-600 dark:text-cyan-400 mt-1">{selectedModule.metricValue2}</p>
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
                        className="flex-1 bg-gradient-to-t from-cyan-500/10 to-cyan-500/60 hover:to-cyan-500 rounded-t transition-all" 
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
                        className="flex-1 bg-gradient-to-t from-cyan-500/20 to-cyan-500/80 hover:to-cyan-500 rounded-t transition-all" 
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
                            ? "bg-cyan-500/20 border-cyan-500/50" 
                            : "bg-transparent border-border"
                        )} 
                      />
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center text-[8px] text-muted-foreground font-mono pt-2 border-t border-border/20">
                  <span>SEGMENT: {selectedModule.id.toUpperCase()}</span>
                  <span>STATUS: SYNCED W/ CRM</span>
                </div>
              </div>

              {/* Module Description Content */}
              <div className="mt-6 flex items-start gap-3 p-3.5 rounded-xl border border-border/60 bg-muted/5">
                <ShieldCheck className="text-cyan-500 mt-0.5 shrink-0" size={16} />
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
