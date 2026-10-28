"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Receipt, 
  CreditCard, 
  Wallet, 
  Scale, 
  ShieldCheck, 
  ArrowRight, 
  type LucideIcon 
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type BooksModule = {
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

const booksModules: BooksModule[] = [
  {
    id: "general-ledger",
    name: "General Ledger",
    icon: BookOpen,
    metricLabel: "Audit Readiness",
    metricValue: "GAAP & IFRS",
    metricLabel2: "Closing Velocity",
    metricValue2: "50% Faster",
    details: "Immutable double-entry chart of accounts, multi-currency journals, and compliant fiscal period closing engines.",
    graphType: "sparkline",
    graphData: [35, 50, 45, 60, 70, 65, 80, 95]
  },
  {
    id: "receivables",
    name: "Accounts Receivable",
    icon: Receipt,
    metricLabel: "DSO Reduction",
    metricValue: "-18 Days",
    metricLabel2: "Auto-Invoicing",
    metricValue2: "99.5% On-Time",
    details: "Automated invoice dispatch from ERP order fulfillment, payment gateway reconciliation, and aging balance trackers.",
    graphType: "bars",
    graphData: [55, 70, 65, 80, 85, 95]
  },
  {
    id: "payables",
    name: "Accounts Payable",
    icon: CreditCard,
    metricLabel: "3-Way PO Match",
    metricValue: "100% Perfect",
    metricLabel2: "Early Discount ROI",
    metricValue2: "94% Captured",
    details: "Automated supplier bill matching against ERP purchase orders, payment approval matrices, and fraud prevention controls.",
    graphType: "grid",
    graphData: [1, 1, 1, 1, 1, 1, 0, 1, 1]
  },
  {
    id: "banking",
    name: "Cash & Bank Feeds",
    icon: Wallet,
    metricLabel: "Reconcile Accuracy",
    metricValue: "99.8% Match",
    metricLabel2: "Liquid Cash Runway",
    metricValue2: "Real-Time",
    details: "Direct Open Banking feed ingestion, auto-categorization rules, variance review, and continuous liquidity monitoring.",
    graphType: "sparkline",
    graphData: [40, 55, 60, 75, 80, 75, 90, 92]
  },
  {
    id: "compliance",
    name: "Tax & Financial Reports",
    icon: Scale,
    metricLabel: "Ledger Accuracy",
    metricValue: "100% Balanced",
    metricLabel2: "Statutory Filings",
    metricValue2: "Auto-Prepared",
    details: "One-click balance sheets, P&L statements, multi-jurisdiction VAT/sales tax summaries, and traceable audit logs.",
    graphType: "bars",
    graphData: [60, 65, 80, 75, 90, 98]
  }
];

export function BooksShowcase() {
  const [selectedModule, setSelectedModule] = useState<BooksModule>(booksModules[0] as BooksModule);

  return (
    <section className="relative py-20 border-b border-border/40 bg-surface transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Desktop): Interactive Live Financial Ledger Simulator */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-elevated overflow-hidden backdrop-blur-md">
              {/* Outer decorative neon elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Control Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <Scale size={16} className="text-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-bold uppercase">
                    BrainBooks Live Financial Ledger
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[9px] font-mono text-emerald-400">LEDGER BALANCED</span>
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
                  <p className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">{selectedModule.metricValue2}</p>
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
                        className="flex-1 bg-gradient-to-t from-emerald-500/10 to-emerald-500/60 hover:to-emerald-500 rounded-t transition-all" 
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
                        className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-500/80 hover:to-emerald-500 rounded-t transition-all" 
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
                            ? "bg-emerald-500/20 border-emerald-500/50" 
                            : "bg-transparent border-border"
                        )} 
                      />
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center text-[8px] text-muted-foreground font-mono pt-2 border-t border-border/20">
                  <span>SEGMENT: {selectedModule.id.toUpperCase()}</span>
                  <span>STATUS: SYNCED W/ ERP</span>
                </div>
              </div>

              {/* Module Description Content */}
              <div className="mt-6 flex items-start gap-3 p-3.5 rounded-xl border border-border/60 bg-muted/5">
                <ShieldCheck className="text-emerald-500 mt-0.5 shrink-0" size={16} />
                <p className="text-[11px] text-muted-foreground leading-normal">
                  {selectedModule.details}
                </p>
              </div>

            </div>
          </div>

          {/* Right Column (Desktop): Descriptions */}
          <div className="lg:col-span-5 flex flex-col items-start text-left order-1 lg:order-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-6">
              Financial Accounting
            </span>
            <h2 className="text-heading-2 font-bold tracking-tight text-foreground">
              BrainBooks Showcase
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Maintain double-entry accounting precision, automate accounts receivable and payable, and stream bank reconciliations into audit-ready financial statements.
            </p>

            {/* List of modules to select */}
            <div className="mt-8 flex flex-col gap-2 w-full">
              {booksModules.map((mod) => {
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
                        ? "border-emerald-500/50 bg-emerald-500/10 text-foreground shadow-sm" 
                        : "border-border bg-card/20 text-muted-foreground hover:bg-card/45 hover:text-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "flex size-8 items-center justify-center rounded-lg transition-colors",
                        isSelected ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" : "bg-muted text-muted-foreground"
                      )}>
                        <Icon size={16} />
                      </div>
                      <span className="text-xs font-bold">{mod.name}</span>
                    </div>
                    {isSelected && <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                  </button>
                );
              })}
            </div>

            <Link
              href="/products/brainbooks"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Explore BrainBooks Modules</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}
