"use client";

import React from "react";
import { 
  Megaphone, 
  Workflow, 
  Users, 
  Sparkles, 
  BarChart3, 
  ArrowRight,
  Calendar,
  Share2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MKTHeroDiagramProps {
  className?: string;
}

export function MKTHeroDiagram({ className }: MKTHeroDiagramProps) {
  return (
    <div className={cn(
      "relative w-full h-[320px] border border-border/40 rounded-3xl bg-surface/30 backdrop-blur-md overflow-hidden flex items-center justify-center transition-all duration-300 shadow-glow-primary",
      className
    )}>
      {/* Tech grid backdrop */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(30,51,77,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-primary/5 pointer-events-none" />

      {/* SVG Circuit Connections */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 400 300"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M 60 70 L 150 150" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 6" />
        <path d="M 60 230 L 150 150" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 6" />
        <path d="M 250 150 L 340 70" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 6" />
        <path d="M 250 150 L 340 230" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 6" />
      </svg>

      {/* Left Input Nodes: Channels & Planning */}
      <div className="absolute left-6 flex flex-col gap-10">
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-cyan-500/30 bg-card/80 shadow-md">
          <Calendar size={15} className="text-cyan-400" />
          <span className="text-xs font-semibold text-foreground">Campaign Plan</span>
        </div>
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-cyan-500/30 bg-card/80 shadow-md">
          <Share2 size={15} className="text-cyan-400" />
          <span className="text-xs font-semibold text-foreground">Ad Channels</span>
        </div>
      </div>

      {/* Central Node: BrainMKT Core + AI Agent */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="size-24 rounded-3xl border-2 border-cyan-500/50 bg-card/90 shadow-2xl flex flex-col items-center justify-center relative group">
          <div className="absolute -inset-1 rounded-3xl bg-cyan-500/20 blur-md pointer-events-none" />
          <Megaphone size={26} className="text-cyan-400 relative z-10 mb-1" />
          <span className="text-xs font-bold text-foreground relative z-10">BrainMKT</span>
          <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-400 relative z-10">Orchestrator</span>
        </div>
        <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[10px] font-medium shadow-sm">
          <Sparkles size={11} />
          <span>BrainMKT AI Agent</span>
        </div>
      </div>

      {/* Right Output Nodes: Scored Leads & Dashboards */}
      <div className="absolute right-6 flex flex-col gap-10">
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-sky-500/30 bg-card/80 shadow-md">
          <ArrowRight size={15} className="text-sky-400" />
          <span className="text-xs font-semibold text-foreground">CRM Lead Stream</span>
        </div>
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-sky-500/30 bg-card/80 shadow-md">
          <BarChart3 size={15} className="text-sky-400" />
          <span className="text-xs font-semibold text-foreground">ROI Metrics</span>
        </div>
      </div>
    </div>
  );
}
