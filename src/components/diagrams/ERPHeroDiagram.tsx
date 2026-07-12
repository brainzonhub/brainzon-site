"use client";

import React from "react";
import { 
  DollarSign, 
  Package, 
  ShoppingCart, 
  Cpu, 
  Users, 
  BarChart3, 
  Database 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ERPHeroDiagramProps {
  className?: string;
}

export function ERPHeroDiagram({ className }: ERPHeroDiagramProps) {
  return (
    <div className={cn(
      "relative w-full h-[320px] border border-border/40 rounded-3xl bg-surface/30 backdrop-blur-md overflow-hidden flex items-center justify-center transition-all duration-300 shadow-glow-primary",
      className
    )}>
      {/* Dynamic tech grid backdrop */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(30,51,77,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      {/* SVG Connections & Flows */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 400 300"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="cyan-to-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <style>{`
          @keyframes dash-in {
            to {
              stroke-dashoffset: -40;
            }
          }
          @keyframes dash-out {
            to {
              stroke-dashoffset: 40;
            }
          }
          .flow-line-in {
            stroke-dasharray: 6 12;
            animation: dash-in 2s linear infinite;
          }
          .flow-line-out {
            stroke-dasharray: 6 12;
            animation: dash-out 2s linear infinite;
          }
        `}</style>

        {/* Connections Background (Static dim lines) */}
        {/* Top Left: Finance */}
        <path d="M 200 150 C 130 150, 100 50, 70 50" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />
        {/* Top Right: Inventory */}
        <path d="M 200 150 C 270 150, 300 50, 330 50" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />
        {/* Mid Left: Procurement */}
        <path d="M 200 150 L 45 150" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />
        {/* Mid Right: Manufacturing */}
        <path d="M 200 150 L 355 150" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />
        {/* Bottom Left: HR */}
        <path d="M 200 150 C 130 150, 100 250, 70 250" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />
        {/* Bottom Right: Analytics */}
        <path d="M 200 150 C 270 150, 300 250, 330 250" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />

        {/* Animated Flow Lines */}
        {/* Finance -> Center (Transactions flowing IN) */}
        <path d="M 200 150 C 130 150, 100 50, 70 50" stroke="var(--primary)" className="opacity-70 flow-line-in" strokeWidth="1.5" />
        {/* Inventory -> Center (Stock level logs flowing IN) */}
        <path d="M 200 150 C 270 150, 300 50, 330 50" stroke="var(--primary)" className="opacity-70 flow-line-in" strokeWidth="1.5" />
        {/* Procurement -> Center (Purchase orders flowing IN) */}
        <path d="M 200 150 L 45 150" stroke="var(--primary)" className="opacity-70 flow-line-in" strokeWidth="1.5" />
        {/* Manufacturing -> Center (Shopfloor schedules flowing IN) */}
        <path d="M 200 150 L 355 150" stroke="var(--primary)" className="opacity-70 flow-line-in" strokeWidth="1.5" />
        {/* HR -> Center (Timesheet logs flowing IN) */}
        <path d="M 200 150 C 130 150, 100 250, 70 250" stroke="var(--primary)" className="opacity-70 flow-line-in" strokeWidth="1.5" />
        {/* Center -> Analytics (BI Reports flowing OUT) */}
        <path d="M 200 150 C 270 150, 300 250, 330 250" stroke="var(--secondary)" className="opacity-75 flow-line-out" strokeWidth="1.5" />
      </svg>

      {/* Center Ledger Node */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 group">
        <div className="flex size-14 items-center justify-center rounded-2xl border-2 border-primary bg-background shadow-[0_0_20px_rgba(6,182,212,0.35)] dark:shadow-[0_0_30px_rgba(6,182,212,0.5)] p-3 animate-[pulse_3s_ease-in-out_infinite] group-hover:scale-105 transition-transform duration-300">
          <Database className="text-primary size-7 animate-pulse" />
        </div>
        <div className="mt-2 bg-background/80 border border-primary/20 backdrop-blur-xs rounded-md px-2 py-0.5 shadow-sm">
          <span className="text-[9px] font-mono font-bold text-foreground tracking-wider uppercase">CORE LEDGER</span>
        </div>
      </div>

      {/* Satellite Node Cards */}
      {/* 1. Finance (Top Left) */}
      <div className="absolute left-[17.5%] top-[16.7%] -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex items-center gap-1.5 p-1.5 pr-2.5 rounded-xl border border-border bg-card/75 backdrop-blur-xs shadow-sm hover:border-primary/40 hover:scale-105 hover:bg-card transition-all duration-300 group">
          <div className="flex size-6 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
            <DollarSign className="size-3.5 group-hover:rotate-12 transition-transform" />
          </div>
          <span className="text-[10px] font-bold text-foreground tracking-tight">Finance</span>
        </div>
      </div>

      {/* 2. Inventory (Top Right) */}
      <div className="absolute right-[17.5%] top-[16.7%] translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex items-center gap-1.5 p-1.5 pr-2.5 rounded-xl border border-border bg-card/75 backdrop-blur-xs shadow-sm hover:border-primary/40 hover:scale-105 hover:bg-card transition-all duration-300 group">
          <div className="flex size-6 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500">
            <Package className="size-3.5 group-hover:bounce transition-transform" />
          </div>
          <span className="text-[10px] font-bold text-foreground tracking-tight">Inventory</span>
        </div>
      </div>

      {/* 3. Procurement (Mid Left) */}
      <div className="absolute left-[11%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex items-center gap-1.5 p-1.5 pr-2.5 rounded-xl border border-border bg-card/75 backdrop-blur-xs shadow-sm hover:border-primary/40 hover:scale-105 hover:bg-card transition-all duration-300 group">
          <div className="flex size-6 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500">
            <ShoppingCart className="size-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <span className="text-[10px] font-bold text-foreground tracking-tight">Sourcing</span>
        </div>
      </div>

      {/* 4. Manufacturing (Mid Right) */}
      <div className="absolute right-[11%] top-[50%] translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex items-center gap-1.5 p-1.5 pr-2.5 rounded-xl border border-border bg-card/75 backdrop-blur-xs shadow-sm hover:border-primary/40 hover:scale-105 hover:bg-card transition-all duration-300 group">
          <div className="flex size-6 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-500">
            <Cpu className="size-3.5 animate-[spin_6s_linear_infinite]" />
          </div>
          <span className="text-[10px] font-bold text-foreground tracking-tight">Factory</span>
        </div>
      </div>

      {/* 5. HR (Bottom Left) */}
      <div className="absolute left-[17.5%] bottom-[16.7%] -translate-x-1/2 translate-y-1/2 z-10">
        <div className="flex items-center gap-1.5 p-1.5 pr-2.5 rounded-xl border border-border bg-card/75 backdrop-blur-xs shadow-sm hover:border-primary/40 hover:scale-105 hover:bg-card transition-all duration-300 group">
          <div className="flex size-6 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-500">
            <Users className="size-3.5 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-[10px] font-bold text-foreground tracking-tight">HR & Payroll</span>
        </div>
      </div>

      {/* 6. Analytics (Bottom Right) */}
      <div className="absolute right-[17.5%] bottom-[16.7%] translate-x-1/2 translate-y-1/2 z-10">
        <div className="flex items-center gap-1.5 p-1.5 pr-2.5 rounded-xl border border-border bg-card/75 backdrop-blur-xs shadow-sm hover:border-primary/40 hover:scale-105 hover:bg-card transition-all duration-300 group">
          <div className="flex size-6 items-center justify-center rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-500">
            <BarChart3 className="size-3.5 group-hover:scale-y-110 transition-transform" />
          </div>
          <span className="text-[10px] font-bold text-foreground tracking-tight">Analytics</span>
        </div>
      </div>

      {/* Info Overlay Bottom Panel */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-muted-foreground/60 border-t border-border/20 pt-3 pointer-events-none">
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>LEDGER STATUS: ACTIVE</span>
        </div>
        <span>ENCRYPTED TRANSACTION TUNNELS</span>
      </div>
    </div>
  );
}
