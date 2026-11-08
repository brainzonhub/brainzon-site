"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Trophy, 
  UserCheck, 
  Receipt, 
  Calendar, 
  Check,
  RotateCcw,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

// Tilt wrapper for cards
function TiltCard({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col p-5 sm:p-6 rounded-2xl border border-border/80 bg-card/80 dark:bg-card/40 backdrop-blur-md shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow-primary/25",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BrainCRMBento() {
  // Card 1: One-step lead conversion state
  const [convertState, setConvertState] = useState<"idle" | "converting" | "converted">("idle");
  const [convertAuto, setConvertAuto] = useState(true);

  useEffect(() => {
    if (!convertAuto) return;
    const interval = setInterval(() => {
      setConvertState("converting");
      setTimeout(() => {
        setConvertState("converted");
        setTimeout(() => {
          setConvertState("idle");
        }, 3200);
      }, 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, [convertAuto]);

  const triggerConvert = () => {
    setConvertAuto(false);
    setConvertState("converting");
    setTimeout(() => {
      setConvertState("converted");
    }, 800);
  };

  const resetConvert = () => {
    setConvertState("idle");
    setConvertAuto(true);
  };

  // Card 2: Visual pipeline stage state
  const PIPELINE_STAGES = [
    { name: "Prospecting", prob: "10%", weighted: "BDT 85,000", color: "#009cb4" },
    { name: "Qualification", prob: "50%", weighted: "BDT 425,000", color: "#8b5cf6" },
    { name: "Proposal", prob: "80%", weighted: "BDT 680,000", color: "#fac316" },
  ] as const;
  const [pipelineStage, setPipelineStage] = useState<0 | 1 | 2>(1);

  // Card 3: Interactive Quotations state
  const [discountPercent, setDiscountPercent] = useState<number>(5);
  const basePrice = 480000;
  const discountAmount = basePrice * (discountPercent / 100);
  const taxAmount = (basePrice - discountAmount) * 0.15;
  const grandTotal = (basePrice - discountAmount) + taxAmount;

  // Card 4: Interactive Work Queue Tasks state
  const [tasks, setTasks] = useState({
    task1: false,
    task2: false,
    task3: false,
  });

  const toggleTask = (key: keyof typeof tasks) => {
    setTasks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Card 5: Customer 360 interactive orbit state
  const [activeOrbitNode, setActiveOrbitNode] = useState<string | null>(null);
  const ORBIT_NODES = [
    { id: "contact", label: "Contact", info: "Nadia Rahman • VP Purchasing", icon: UserCheck, color: "#009cb4" },
    { id: "quotation", label: "Quotation", info: "QT-2026-089 • BDT 524,400", icon: Receipt, color: "#f1384a" },
    { id: "deal", label: "Opportunity", info: "CRM Rollout • BDT 850,000", icon: Trophy, color: "#fac316" },
    { id: "calendar", label: "Meeting", info: "Strategy Sync • Tomorrow 10 AM", icon: Calendar, color: "#8b5cf6" },
  ];

  // Card 6: Interactive Quotas Rep state
  const [selectedRep, setSelectedRep] = useState<"team" | "AU" | "SR" | "TH">("team");
  const REP_DATA = {
    team: { name: "Full Sales Team", attainment: 82, won: "BDT 4.60M", target: "BDT 5.60M", deals: 8 },
    AU: { name: "Admin User", attainment: 92, won: "BDT 2.10M", target: "BDT 2.28M", deals: 4 },
    SR: { name: "Sharmin Nahar", attainment: 74, won: "BDT 1.48M", target: "BDT 2.00M", deals: 2 },
    TH: { name: "Tasnim Habib", attainment: 61, won: "BDT 1.02M", target: "BDT 1.32M", deals: 2 },
  };
  const activeRepInfo = REP_DATA[selectedRep];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 border-b border-border/40 bg-background">
      {/* Dynamic background ambient glows */}
      <div className="absolute top-1/4 left-1/4 -z-10 w-[550px] h-[550px] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 w-[550px] h-[550px] rounded-full bg-radial-gradient from-secondary/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border/80 bg-surface/80 text-xs font-bold tracking-widest uppercase text-primary mb-4 font-mono shadow-xs">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span>Why BrainCRM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Built around how deals{" "}
            <span className="bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(0,156,180,0.18)]">
              actually move
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Six things sales teams rely on every day, each enforced by the product instead of left to memory.
          </p>
        </div>

        {/* 6 Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          
          {/* Card 1: One-step lead conversion (Wide: spans 2 cols on lg) */}
          <TiltCard className="lg:col-span-2">
            {/* Interactive Visual Canvas */}
            <div className="relative min-h-[210px] w-full rounded-xl border border-border/60 bg-gradient-to-br from-surface via-card to-muted/20 dark:from-slate-900/90 dark:via-slate-950/95 dark:to-slate-900/90 overflow-hidden flex flex-col justify-between p-4 sm:p-5">
              
              {/* Header status strip */}
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <span className={cn("size-2 rounded-full", convertState === "converted" ? "bg-emerald-500 animate-pulse" : "bg-primary")} />
                  {convertState === "converted" ? "Transaction Committed (1-Step)" : "Lead Qualified"}
                </span>

                <button
                  type="button"
                  onClick={convertState === "converted" ? resetConvert : triggerConvert}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 transition-colors cursor-pointer"
                >
                  {convertState === "converted" ? (
                    <>
                      <RotateCcw size={11} /> Replay Flow
                    </>
                  ) : (
                    <>
                      <Zap size={11} /> Click to Convert
                    </>
                  )}
                </button>
              </div>

              {/* Conversion Diagram */}
              <div className="flex items-center justify-between gap-2 sm:gap-4 my-auto">
                {/* Qualified Lead Card */}
                <div className="shrink-0 p-3 sm:p-4 rounded-xl border border-border/80 bg-background/95 shadow-sm text-left max-w-[160px] sm:max-w-[200px] transition-all">
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider font-mono",
                      convertState === "converted" ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                    )}>
                      {convertState === "converted" ? "Converted ✓" : "Qualified"}
                    </span>
                  </div>
                  <b className="block text-xs sm:text-sm font-bold text-foreground truncate">
                    Nadia Rahman
                  </b>
                  <small className="block text-[11px] text-muted-foreground truncate font-medium">
                    Delta Agro Industries Ltd
                  </small>
                </div>

                {/* Animated Connecting Beam */}
                <div className="relative flex-1 min-w-[30px] sm:min-w-[60px] h-0.5 bg-border/80 mx-1">
                  <motion.div 
                    animate={convertState === "converting" ? { width: ["0%", "100%"] } : { width: convertState === "converted" ? "100%" : "0%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-primary via-purple-500 to-emerald-400 shadow-sm"
                  />
                  {convertState === "converting" && (
                    <motion.span 
                      animate={{ left: ["0%", "95%"] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="absolute -top-1.5 size-3.5 rounded-full bg-white shadow-[0_0_12px_4px_#f1384a]"
                    />
                  )}
                </div>

                {/* 3 Resulting Entities */}
                <div className="flex flex-col gap-1.5 shrink-0">
                  <motion.div 
                    animate={convertState === "converted" ? { scale: [1, 1.05, 1], borderColor: "#009cb4" } : {}}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold shadow-xs transition-colors",
                      convertState === "converted" ? "bg-[#009cb4]/10 border-[#009cb4]/40 text-foreground" : "bg-background/90 border-border/80 text-muted-foreground"
                    )}
                  >
                    <UserCheck size={13} className="text-[#009cb4]" />
                    <span className="truncate">Contact</span>
                    {convertState === "converted" && <Check size={12} className="text-emerald-500 ml-auto" />}
                  </motion.div>

                  <motion.div 
                    animate={convertState === "converted" ? { scale: [1, 1.05, 1], borderColor: "#8b5cf6" } : {}}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold shadow-xs transition-colors",
                      convertState === "converted" ? "bg-purple-500/10 border-purple-500/40 text-foreground" : "bg-background/90 border-border/80 text-muted-foreground"
                    )}
                  >
                    <Building2 size={13} className="text-purple-500" />
                    <span className="truncate">Account</span>
                    {convertState === "converted" && <Check size={12} className="text-emerald-500 ml-auto" />}
                  </motion.div>

                  <motion.div 
                    animate={convertState === "converted" ? { scale: [1, 1.05, 1], borderColor: "#fac316" } : {}}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold shadow-xs transition-colors",
                      convertState === "converted" ? "bg-amber-500/10 border-amber-500/40 text-foreground" : "bg-background/90 border-border/80 text-muted-foreground"
                    )}
                  >
                    <Trophy size={13} className="text-amber-500" />
                    <span className="truncate">Opportunity</span>
                    {convertState === "converted" && <Check size={12} className="text-emerald-500 ml-auto" />}
                  </motion.div>
                </div>
              </div>

              {/* Bottom detail */}
              <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>Atomic Transaction Lock: Enforced</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Zero Duplicate Risk</span>
              </div>
            </div>

            <h3 className="mt-5 text-lg sm:text-xl font-bold text-foreground">
              One-step lead conversion
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Converting a lead creates the contact, account and opportunity in a single transaction. Nothing is left half-created, and a lead cannot be converted twice.
            </p>
          </TiltCard>

          {/* Card 2: Visual sales pipeline (Interactive Stage Click) */}
          <TiltCard>
            {/* Interactive Visual Canvas */}
            <div className="relative min-h-[210px] w-full rounded-xl border border-border/60 bg-gradient-to-br from-surface via-card to-muted/20 dark:from-slate-900/90 dark:via-slate-950/95 dark:to-slate-900/90 overflow-hidden flex flex-col justify-between p-3.5 sm:p-4">
              
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-muted-foreground">Click stages to advance deal:</span>
                <span className="font-bold text-primary font-mono">{PIPELINE_STAGES[pipelineStage].prob}</span>
              </div>

              {/* 3 Clickable Columns */}
              <div className="grid grid-cols-3 gap-2 flex-1">
                {PIPELINE_STAGES.map((stg, idx) => {
                  const isCurrent = pipelineStage === idx;
                  return (
                    <button
                      key={stg.name}
                      type="button"
                      onClick={() => setPipelineStage(idx as 0 | 1 | 2)}
                      className={cn(
                        "rounded-xl border p-2 text-left flex flex-col justify-between transition-all cursor-pointer relative",
                        isCurrent 
                          ? "bg-card shadow-sm border-primary/60 ring-2 ring-primary/20" 
                          : "bg-surface/50 border-border/60 hover:bg-card/60"
                      )}
                    >
                      <span className="text-[10px] sm:text-[11px] font-bold text-foreground truncate block">
                        {stg.name}
                      </span>
                      <span className="text-[9px] font-mono text-muted-foreground block">
                        {stg.prob} prob
                      </span>

                      {/* Animated Deal Card inside the selected column */}
                      {isCurrent && (
                        <motion.div
                          layoutId="active-deal-card"
                          className="mt-2 p-2 rounded-lg bg-background border-l-2 border-primary border border-border shadow-md"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        >
                          <b className="block text-[11px] font-bold text-foreground truncate">CRM Rollout</b>
                          <small className="block text-[10px] font-bold text-emerald-600 dark:text-emerald-400 font-mono">BDT 850,000</small>
                        </motion.div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Bottom Weighted Telemetry */}
              <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground mt-2">
                <span>Weighted Forecast:</span>
                <span className="font-bold text-foreground font-mono">{PIPELINE_STAGES[pipelineStage].weighted}</span>
              </div>
            </div>

            <h3 className="mt-5 text-lg sm:text-xl font-bold text-foreground">
              Visual sales pipeline
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Drag deals between stages or use the keyboard menu. Stage totals and weighted values follow instantly.
            </p>
          </TiltCard>

          {/* Card 3: Server-authoritative quotations (Interactive Discount Stepper) */}
          <TiltCard>
            {/* Interactive Visual Canvas */}
            <div className="relative min-h-[210px] w-full rounded-xl border border-border/60 bg-gradient-to-br from-surface via-card to-muted/20 dark:from-slate-900/90 dark:via-slate-950/95 dark:to-slate-900/90 overflow-hidden flex flex-col justify-between p-4 sm:p-5 font-mono text-xs">
              
              {/* Discount selector pills */}
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-muted-foreground font-sans">Adjust Discount:</span>
                <div className="flex items-center gap-1">
                  {[0, 5, 10, 15].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setDiscountPercent(pct)}
                      className={cn(
                        "px-1.5 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer",
                        discountPercent === pct 
                          ? "bg-primary text-primary-foreground shadow-xs" 
                          : "bg-surface border border-border text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Line Item Calculation rows */}
              <div className="space-y-1.5 my-auto">
                <div className="flex justify-between text-muted-foreground text-[11px]">
                  <span>Enterprise License × 4</span>
                  <span className="text-foreground font-semibold">480,000</span>
                </div>
                <div className="flex justify-between text-rose-500 text-[11px]">
                  <span>Discount ({discountPercent}%)</span>
                  <span>− {discountAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-[11px]">
                  <span>Tax (15% VAT)</span>
                  <span className="text-foreground font-semibold">+ {taxAmount.toLocaleString()}</span>
                </div>
                <div className="border-t border-border/70 pt-2 flex justify-between items-center text-foreground font-bold">
                  <span className="text-xs font-sans">Grand Total:</span>
                  <b className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    BDT {grandTotal.toLocaleString()}
                  </b>
                </div>
              </div>

              {/* Server note */}
              <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>Decimal Precision: Exact</span>
                <span className="text-primary font-bold">Server Verified</span>
              </div>
            </div>

            <h3 className="mt-5 text-lg sm:text-xl font-bold text-foreground">
              Server-authoritative quotations
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Discounts, taxes and totals are calculated in decimal on the server. The PDF comes from the saved quotation.
            </p>
          </TiltCard>

          {/* Card 4: Follow-ups that do not slip (Interactive Clickable Tasks) */}
          <TiltCard>
            {/* Interactive Visual Canvas */}
            <div className="relative min-h-[210px] w-full rounded-xl border border-border/60 bg-gradient-to-br from-surface via-card to-muted/20 dark:from-slate-900/90 dark:via-slate-950/95 dark:to-slate-900/90 overflow-hidden flex flex-col justify-between p-3.5 sm:p-4 text-xs">
              
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-muted-foreground font-sans">Interactive Work Queue:</span>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                  {Object.values(tasks).filter(Boolean).length}/3 completed
                </span>
              </div>

              {/* 3 Clickable Tasks */}
              <div className="space-y-2 my-auto">
                {/* Task 1 */}
                <div 
                  onClick={() => toggleTask("task1")}
                  className={cn(
                    "flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer",
                    tasks.task1 ? "bg-muted/40 border-border opacity-70" : "bg-card border-border/80 hover:border-primary/50 shadow-xs"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={cn(
                      "size-4 rounded-md border flex items-center justify-center shrink-0 transition-colors",
                      tasks.task1 ? "bg-emerald-500 border-emerald-500 text-white" : "border-border/80 bg-background"
                    )}>
                      {tasks.task1 && <Check size={11} />}
                    </div>
                    <span className={cn("text-[11px] font-medium truncate", tasks.task1 && "line-through text-muted-foreground")}>
                      Discovery call with Nadia
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full shrink-0 font-mono">
                    {tasks.task1 ? "Done ✓" : "Today"}
                  </span>
                </div>

                {/* Task 2 */}
                <div 
                  onClick={() => toggleTask("task2")}
                  className={cn(
                    "flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer",
                    tasks.task2 ? "bg-muted/40 border-border opacity-70" : "bg-card border-border/80 hover:border-primary/50 shadow-xs"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={cn(
                      "size-4 rounded-md border flex items-center justify-center shrink-0 transition-colors",
                      tasks.task2 ? "bg-emerald-500 border-emerald-500 text-white" : "border-border/80 bg-background"
                    )}>
                      {tasks.task2 && <Check size={11} />}
                    </div>
                    <span className={cn("text-[11px] font-medium truncate", tasks.task2 && "line-through text-muted-foreground")}>
                      Send revised proposal & PDF
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-sky-600 dark:text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full shrink-0 font-mono">
                    {tasks.task2 ? "Done ✓" : "Tomorrow"}
                  </span>
                </div>

                {/* Task 3 */}
                <div 
                  onClick={() => toggleTask("task3")}
                  className={cn(
                    "flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer",
                    tasks.task3 ? "bg-muted/40 border-border opacity-70" : "bg-rose-500/5 border-rose-500/30 hover:border-rose-500/60 shadow-xs"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={cn(
                      "size-4 rounded-md border flex items-center justify-center shrink-0 transition-colors",
                      tasks.task3 ? "bg-emerald-500 border-emerald-500 text-white" : "border-rose-500/50 bg-background"
                    )}>
                      {tasks.task3 && <Check size={11} />}
                    </div>
                    <span className={cn("text-[11px] font-medium truncate", tasks.task3 ? "line-through text-muted-foreground" : "text-rose-600 dark:text-rose-400")}>
                      Contract legal sign-off
                    </span>
                  </div>
                  <span className={cn(
                    "text-[10px] font-extrabold px-2 py-0.5 rounded-full shrink-0 font-mono",
                    tasks.task3 ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/15 text-rose-600 dark:text-rose-400 animate-pulse"
                  )}>
                    {tasks.task3 ? "Done ✓" : "Overdue"}
                  </span>
                </div>
              </div>

              {/* Bottom detail */}
              <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>View Mode: All Queues</span>
                <span className="text-primary font-bold">Zero Slip SLA</span>
              </div>
            </div>

            <h3 className="mt-5 text-lg sm:text-xl font-bold text-foreground">
              Follow-ups that do not slip
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Tasks, calls and meetings in one work queue, with due-today, overdue and calendar views.
            </p>
          </TiltCard>

          {/* Card 5: Customer 360 (Interactive Orbit Nodes with Popover) */}
          <TiltCard>
            {/* Interactive Visual Canvas */}
            <div className="relative min-h-[210px] w-full rounded-xl border border-border/60 bg-gradient-to-br from-surface via-card to-muted/20 dark:from-slate-900/90 dark:via-slate-950/95 dark:to-slate-900/90 overflow-hidden flex flex-col justify-between p-3.5 sm:p-4">
              
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">Click orbit nodes to inspect:</span>
                <span className="font-bold text-purple-500 font-mono">Customer 360</span>
              </div>

              {/* Orbit Viewport */}
              <div className="relative h-28 my-auto flex items-center justify-center">
                {/* Center Core */}
                <div className="relative z-10 size-11 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary/30">
                  <Building2 size={18} />
                </div>

                {/* 4 Interactive Orbiting Nodes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-28 rounded-full border border-dashed border-border/60 animate-orbit-1" />
                </div>

                {/* 4 Clickable Hotspot Pills around the core */}
                <div className="absolute inset-0 flex items-center justify-around pointer-events-none">
                  {ORBIT_NODES.map((node) => {
                    const Icon = node.icon;
                    const isSelected = activeOrbitNode === node.id;
                    return (
                      <button
                        key={node.id}
                        type="button"
                        onClick={() => setActiveOrbitNode(isSelected ? null : node.id)}
                        className={cn(
                          "pointer-events-auto size-7 rounded-lg border flex items-center justify-center shadow-md transition-all cursor-pointer",
                          isSelected 
                            ? "scale-125 ring-2 ring-primary bg-primary text-primary-foreground" 
                            : "bg-card border-border hover:scale-110 text-muted-foreground hover:text-foreground"
                        )}
                        style={{ color: isSelected ? undefined : node.color }}
                        title={node.label}
                      >
                        <Icon size={13} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Orbit Detail Popover */}
              <div className="pt-2 border-t border-border/40 text-[11px] font-mono text-muted-foreground min-h-[24px]">
                {activeOrbitNode ? (
                  <div className="flex items-center justify-between font-bold text-foreground truncate">
                    <span className="truncate">{ORBIT_NODES.find((n) => n.id === activeOrbitNode)?.info}</span>
                    <span className="text-primary text-[10px] ml-2 shrink-0">Live Linked ✓</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span>Central Account: Delta Agro Ltd</span>
                    <span className="text-muted-foreground/60">4 entities active</span>
                  </div>
                )}
              </div>
            </div>

            <h3 className="mt-5 text-lg sm:text-xl font-bold text-foreground">
              Customer 360
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Contacts, deals, quotations, activities, notes and files around every account, on one timeline.
            </p>
          </TiltCard>

          {/* Card 6: Targets, quotas and commissions (Interactive Rep Toggle) */}
          <TiltCard className="lg:col-span-2">
            {/* Interactive Visual Canvas */}
            <div className="relative min-h-[210px] w-full rounded-xl border border-border/60 bg-gradient-to-br from-surface via-card to-muted/20 dark:from-slate-900/90 dark:via-slate-950/95 dark:to-slate-900/90 overflow-hidden flex flex-col justify-between p-4 sm:p-5 font-mono">
              
              {/* Rep selector tabs */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-sans text-muted-foreground">Select Rep Telemetry:</span>
                <div className="flex items-center gap-1.5">
                  {(["team", "AU", "SR", "TH"] as const).map((rep) => (
                    <button
                      key={rep}
                      type="button"
                      onClick={() => setSelectedRep(rep)}
                      className={cn(
                        "px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer",
                        selectedRep === rep
                          ? "bg-primary text-primary-foreground shadow-xs"
                          : "bg-surface border border-border/80 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {rep === "team" ? "Team Total" : rep}
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Bar & Rep Headline */}
              <div className="space-y-2 my-auto">
                <div className="flex justify-between items-baseline text-xs">
                  <span className="font-bold text-foreground">{activeRepInfo.name}</span>
                  <b className="text-base sm:text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    {activeRepInfo.attainment}% attained
                  </b>
                </div>

                <div className="w-full h-3.5 rounded-full bg-muted/60 border border-border/50 overflow-hidden p-0.5">
                  <motion.div
                    key={`rep-bar-${selectedRep}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${activeRepInfo.attainment}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-[#009cb4] via-amber-400 to-emerald-400 shadow-sm"
                  />
                </div>

                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>Won: <b className="text-foreground">{activeRepInfo.won}</b></span>
                  <span>Target: <b className="text-foreground">{activeRepInfo.target}</b></span>
                  <span>Deals Won: <b className="text-foreground">{activeRepInfo.deals}</b></span>
                </div>
              </div>

              {/* Commission approval footer */}
              <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
                <span>Commission Tier: Gold (8%)</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">1-Click Payroll Export Ready</span>
              </div>
            </div>

            <h3 className="mt-5 text-lg sm:text-xl font-bold text-foreground">
              Targets, quotas and commissions
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Set targets per rep and team, follow attainment against won revenue, and run commission plans with an approval step. Figures above are illustrative.
            </p>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}
