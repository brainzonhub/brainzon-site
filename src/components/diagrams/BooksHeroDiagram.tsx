"use client";

import React from "react";
import { 
  Receipt, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  Wallet, 
  CreditCard,
  Scale
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BooksHeroDiagramProps {
  className?: string;
}

export function BooksHeroDiagram({ className }: BooksHeroDiagramProps) {
  return (
    <div className={cn(
      "relative w-full h-[320px] border border-border/40 rounded-3xl bg-surface/30 backdrop-blur-md overflow-hidden flex items-center justify-center transition-all duration-300 shadow-glow-primary",
      className
    )}>
      {/* Tech grid backdrop */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(30,51,77,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-primary/5 pointer-events-none" />

      {/* SVG Circuit Connections */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 400 300"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M 60 70 L 150 150" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 6" />
        <path d="M 60 230 L 150 150" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 6" />
        <path d="M 250 150 L 340 70" stroke="#059669" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 6" />
        <path d="M 250 150 L 340 230" stroke="#059669" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 6" />
      </svg>

      {/* Left Input Nodes: Feeds & Orders */}
      <div className="absolute left-6 flex flex-col gap-10">
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-emerald-500/30 bg-card/80 shadow-md">
          <Wallet size={15} className="text-emerald-400" />
          <span className="text-xs font-semibold text-foreground">Bank Feeds</span>
        </div>
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-emerald-500/30 bg-card/80 shadow-md">
          <CreditCard size={15} className="text-emerald-400" />
          <span className="text-xs font-semibold text-foreground">AP / AR Bills</span>
        </div>
      </div>

      {/* Central Node: BrainBooks Core + AI Agent */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="size-24 rounded-3xl border-2 border-emerald-500/50 bg-card/90 shadow-2xl flex flex-col items-center justify-center relative group">
          <div className="absolute -inset-1 rounded-3xl bg-emerald-500/20 blur-md pointer-events-none" />
          <Receipt size={26} className="text-emerald-400 relative z-10 mb-1" />
          <span className="text-xs font-bold text-foreground relative z-10">BrainBooks</span>
          <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 relative z-10">Audit Ledger</span>
        </div>
        <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-medium shadow-sm">
          <Sparkles size={11} />
          <span>BrainBooks AI Agent</span>
        </div>
      </div>

      {/* Right Output Nodes: Reports & Reconciliation */}
      <div className="absolute right-6 flex flex-col gap-10">
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-teal-500/30 bg-card/80 shadow-md">
          <Scale size={15} className="text-teal-400" />
          <span className="text-xs font-semibold text-foreground">Reconciliation</span>
        </div>
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-teal-500/30 bg-card/80 shadow-md">
          <ShieldCheck size={15} className="text-teal-400" />
          <span className="text-xs font-semibold text-foreground">Statutory P&L</span>
        </div>
      </div>
    </div>
  );
}
