"use client";

import { useState } from "react";
import { 
  Building2, 
  Trophy, 
  UserCheck, 
  Receipt, 
  Calendar, 
  Paperclip,
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
  const [manualConvert, setManualConvert] = useState<"idle" | "converting" | "converted">("idle");

  const triggerConvert = () => {
    setManualConvert("converting");
    setTimeout(() => {
      setManualConvert("converted");
    }, 800);
  };

  const resetConvert = () => {
    setManualConvert("idle");
  };

  // Card 2: Visual pipeline stage state
  const PIPELINE_STAGES = [
    { name: "Prospecting", prob: "10%", weighted: "BDT 85,000", color: "#009cb4" },
    { name: "Qualification", prob: "50%", weighted: "BDT 425,000", color: "#8b5cf6" },
    { name: "Proposal", prob: "80%", weighted: "BDT 680,000", color: "#fac316" },
  ] as const;
  const [activeStage, setActiveStage] = useState<number | null>(null);

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
    { id: "files", label: "NDA Document", info: "Signed_NDA_v2.pdf • 1.4 MB", icon: Paperclip, color: "#10b981" },
  ];

  // Card 6: Interactive Quotas Rep state
  const [selectedRep, setSelectedRep] = useState<"team" | "AU" | "SR" | "TH">("team");
  const REP_DATA = {
    team: { name: "Full Sales Team", attainment: 82, won: "BDT 4.60M", target: "BDT 5.60M" },
    AU: { name: "Admin User", attainment: 92, won: "BDT 2.10M", target: "BDT 2.28M" },
    SR: { name: "Sharmin Nahar", attainment: 74, won: "BDT 1.48M", target: "BDT 2.00M" },
    TH: { name: "Tasnim Habib", attainment: 61, won: "BDT 1.02M", target: "BDT 1.32M" },
  };
  const activeRepInfo = REP_DATA[selectedRep];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 border-b border-border/40 bg-background">
      <style>{`
        /* Header Gradient Flow */
        @keyframes bento-gradient-pan {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-bento-title-gradient {
          background-size: 250% 100%;
          animation: bento-gradient-pan 6s ease-in-out infinite;
        }

        /* Card 1: Beam Pulse & Pop-in */
        @keyframes bento-beam {
          0% { left: 0%; opacity: 0; }
          15%, 85% { opacity: 1; }
          100% { left: calc(100% - 8px); opacity: 0; }
        }
        @keyframes bento-pop-in {
          0%, 12% { opacity: 0; transform: translateX(-14px) scale(0.92); }
          24%, 88% { opacity: 1; transform: translateX(0) scale(1); }
          100% { opacity: 0; transform: translateX(8px); }
        }
        .animate-beam-dot-1 {
          animation: bento-beam 2.4s linear infinite;
        }
        .animate-beam-dot-2 {
          animation: bento-beam 2.4s linear infinite 0.8s;
        }
        .animate-beam-dot-3 {
          animation: bento-beam 2.4s linear infinite 1.6s;
        }
        .animate-pop-1 {
          animation: bento-pop-in 4.8s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        .animate-pop-2 {
          animation: bento-pop-in 4.8s cubic-bezier(0.16, 1, 0.3, 1) infinite 0.35s;
        }
        .animate-pop-3 {
          animation: bento-pop-in 4.8s cubic-bezier(0.16, 1, 0.3, 1) infinite 0.7s;
        }

        /* Card 2: Pipeline Slide Card */
        @keyframes bento-slide-card {
          0%, 18% { transform: translateX(0) rotate(0); }
          24% { transform: translateX(20%) rotate(3deg) translateY(-6px); }
          34%, 52% { transform: translateX(calc(100% + 8px)) rotate(0); }
          58% { transform: translateX(calc(120% + 8px)) rotate(3deg) translateY(-6px); }
          68%, 90% { transform: translateX(calc(200% + 16px)) rotate(0); }
          100% { transform: translateX(0); }
        }
        .animate-pipeline-slide {
          animation: bento-slide-card 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Card 4: Staggered Tasks Tick & Strike */
        @keyframes bento-check {
          0%, 8% { background-color: transparent; border-color: rgba(148, 163, 184, 0.3); }
          14%, 80% { background-color: #10b981; border-color: #10b981; }
          92%, 100% { background-color: transparent; border-color: rgba(148, 163, 184, 0.3); }
        }
        @keyframes bento-strike {
          0%, 10% { opacity: 1; text-decoration: none; }
          16%, 80% { opacity: 0.45; text-decoration: line-through; }
          92%, 100% { opacity: 1; text-decoration: none; }
        }

        /* Card 5: Orbital Spin & Counter-rotation */
        @keyframes bento-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes bento-spin-reverse {
          to { transform: rotate(-360deg); }
        }
        .animate-orbit-ring-1 {
          animation: bento-spin 18s linear infinite;
        }
        .animate-orbit-ring-2 {
          animation: bento-spin-reverse 28s linear infinite;
        }
        .animate-orbit-counter-1 {
          animation: bento-spin-reverse 18s linear infinite;
        }
        .animate-orbit-counter-2 {
          animation: bento-spin 28s linear infinite;
        }

        /* Card 6: Target Fill Bar */
        @keyframes bento-fill {
          0% { transform: scaleX(0); }
          30%, 90% { transform: scaleX(1); }
          100% { transform: scaleX(1); opacity: 0.5; }
        }
        .animate-quota-fill {
          transform-origin: left;
          animation: bento-fill 5s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}</style>

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

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.14] max-w-4xl mx-auto">
            <span>Built around how deals</span>{" "}
            <span className="inline-block whitespace-nowrap bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:250%_auto] bg-clip-text text-transparent animate-bento-title-gradient drop-shadow-[0_0_15px_rgba(0,156,180,0.18)] dark:drop-shadow-[0_0_20px_rgba(0,156,180,0.3)]">
              actually&nbsp;move
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
                  <span className={cn("size-2 rounded-full", manualConvert === "converted" ? "bg-emerald-500 animate-pulse" : "bg-primary animate-ping")} />
                  {manualConvert === "converted" ? "Transaction Committed (1-Step)" : "Live Conversion Engine"}
                </span>

                <button
                  type="button"
                  onClick={manualConvert === "converted" ? resetConvert : triggerConvert}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 transition-colors cursor-pointer"
                >
                  {manualConvert === "converted" ? (
                    <>
                      <RotateCcw size={11} /> Replay
                    </>
                  ) : (
                    <>
                      <Zap size={11} /> Convert Lead
                    </>
                  )}
                </button>
              </div>

              {/* Conversion Diagram */}
              <div className="flex items-center justify-between gap-2 sm:gap-4 my-auto">
                {/* Qualified Lead Card */}
                <div className="shrink-0 p-3 sm:p-4 rounded-xl border border-border/80 bg-background/95 shadow-sm text-left max-w-[160px] sm:max-w-[200px] transition-all">
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider font-mono bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      Qualified Lead
                    </span>
                  </div>
                  <b className="block text-xs sm:text-sm font-bold text-foreground truncate">
                    Nadia Rahman
                  </b>
                  <small className="block text-[11px] text-muted-foreground truncate font-medium">
                    Delta Agro Industries Ltd
                  </small>
                </div>

                {/* Animated Light Beam with 3 Traveling Photon Dots */}
                <div className="relative flex-1 min-w-[36px] sm:min-w-[80px] h-0.5 bg-gradient-to-r from-primary/30 via-violet-500/50 to-primary/30 mx-1">
                  <i className="absolute -top-[3px] size-2 rounded-full bg-white shadow-[0_0_12px_3px_#009cb4] animate-beam-dot-1" />
                  <i className="absolute -top-[3px] size-2 rounded-full bg-white shadow-[0_0_12px_3px_#8b5cf6] animate-beam-dot-2" />
                  <i className="absolute -top-[3px] size-2 rounded-full bg-white shadow-[0_0_12px_3px_#f1384a] animate-beam-dot-3" />
                </div>

                {/* Single Transaction Outputs (Popping in with smooth staggered keyframes) */}
                <div className="shrink-0 flex flex-col gap-2 min-w-[125px] sm:min-w-[155px]">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-bold shadow-xs transition-all animate-pop-1 bg-[#009cb4]/10 border-[#009cb4]/40 text-foreground">
                    <UserCheck size={13} className="text-[#009cb4] shrink-0" />
                    <span>Contact</span>
                    <span className="ml-auto text-[10px] text-emerald-600 dark:text-emerald-400">✓</span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-bold shadow-xs transition-all animate-pop-2 bg-[#8b5cf6]/10 border-[#8b5cf6]/40 text-foreground">
                    <Building2 size={13} className="text-[#8b5cf6] shrink-0" />
                    <span>Account</span>
                    <span className="ml-auto text-[10px] text-emerald-600 dark:text-emerald-400">✓</span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-bold shadow-xs transition-all animate-pop-3 bg-[#fac316]/10 border-[#fac316]/40 text-foreground">
                    <Trophy size={13} className="text-[#fac316] shrink-0" />
                    <span>Opportunity</span>
                    <span className="ml-auto text-[10px] text-emerald-600 dark:text-emerald-400">✓</span>
                  </div>
                </div>
              </div>

              {/* Bottom detail */}
              <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>Database Atomic Boundary</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">1 Transaction Committed</span>
              </div>
            </div>

            <h3 className="mt-5 text-lg sm:text-xl font-bold text-foreground">
              One-step lead conversion
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Converting a lead creates the contact, account and opportunity in a single transaction. Nothing is left half-created, and a lead cannot be converted twice.
            </p>
          </TiltCard>

          {/* Card 2: Visual sales pipeline (Animated Slide Card with Stage Click Override) */}
          <TiltCard>
            {/* Interactive Visual Canvas */}
            <div className="relative min-h-[210px] w-full rounded-xl border border-border/60 bg-gradient-to-br from-surface via-card to-muted/20 dark:from-slate-900/90 dark:via-slate-950/95 dark:to-slate-900/90 overflow-hidden flex flex-col justify-between p-3.5 sm:p-4">
              
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-muted-foreground">Stages & Weighted Prob:</span>
                <span className="font-bold text-primary font-mono">
                  {activeStage !== null ? PIPELINE_STAGES[activeStage]?.prob : "Auto Following"}
                </span>
              </div>

              {/* 3 Clickable Columns with Sliding Deal Card */}
              <div className="relative grid grid-cols-3 gap-2 flex-1 items-stretch">
                {PIPELINE_STAGES.map((stg, idx) => (
                  <button
                    key={stg.name}
                    type="button"
                    onClick={() => setActiveStage(activeStage === idx ? null : idx)}
                    className={cn(
                      "rounded-xl border p-2 text-left flex flex-col justify-between transition-all cursor-pointer relative",
                      activeStage === idx 
                        ? "bg-card shadow-sm border-primary/60 ring-2 ring-primary/20" 
                        : "bg-surface/50 border-border/60 hover:bg-card/60"
                    )}
                    style={{ borderTopColor: stg.color, borderTopWidth: 2 }}
                  >
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-foreground truncate block">
                        {stg.name}
                      </span>
                      <span className="text-[9px] font-mono text-muted-foreground block">
                        {stg.prob} prob
                      </span>
                    </div>

                    <div className="h-8 rounded-lg bg-muted/40 border border-dashed border-border/40 mt-auto" />
                  </button>
                ))}

                {/* Animated Deal Card */}
                {activeStage === null ? (
                  /* Continuous smooth animated card traversing stages */
                  <div 
                    className="absolute top-8 left-1 w-[calc((100%-16px)/3)] p-2 rounded-lg bg-background border-l-2 border-primary border border-border shadow-md animate-pipeline-slide pointer-events-none z-10"
                  >
                    <b className="block text-[10px] sm:text-[11px] font-bold text-foreground truncate">CRM Rollout</b>
                    <small className="block text-[9px] sm:text-[10px] font-bold text-emerald-600 dark:text-emerald-400 font-mono">BDT 850,000</small>
                  </div>
                ) : (
                  /* Pinned to manually selected stage */
                  <div 
                    className="absolute top-8 p-2 rounded-lg bg-background border-l-2 border-primary border border-border shadow-md z-10 transition-all duration-300"
                    style={{
                      left: `calc(${activeStage * 33.33}% + 4px)`,
                      width: "calc((100% - 16px) / 3)"
                    }}
                  >
                    <b className="block text-[10px] sm:text-[11px] font-bold text-foreground truncate">CRM Rollout</b>
                    <small className="block text-[9px] sm:text-[10px] font-bold text-emerald-600 dark:text-emerald-400 font-mono">BDT 850,000</small>
                  </div>
                )}
              </div>

              {/* Bottom Weighted Telemetry */}
              <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground mt-2">
                <span>Weighted Forecast:</span>
                <span className="font-bold text-foreground font-mono">
                  {activeStage !== null ? PIPELINE_STAGES[activeStage]?.weighted : "Dynamic Stage Totals"}
                </span>
              </div>
            </div>

            <h3 className="mt-5 text-lg sm:text-xl font-bold text-foreground">
              Visual sales pipeline
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Drag deals between stages or use the keyboard menu. Stage totals and weighted values follow.
            </p>
          </TiltCard>

          {/* Card 3: Server-authoritative quotations (Interactive Discount Stepper) */}
          <TiltCard>
            {/* Interactive Visual Canvas */}
            <div className="relative min-h-[210px] w-full rounded-xl border border-border/60 bg-gradient-to-br from-surface via-card to-muted/20 dark:from-slate-900/90 dark:via-slate-950/95 dark:to-slate-900/90 overflow-hidden flex flex-col justify-between p-4 sm:p-5 font-mono text-xs">
              
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-muted-foreground font-mono">Discount Rule:</span>
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
                          : "bg-surface text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 my-auto">
                <div className="flex justify-between text-muted-foreground text-[11px]">
                  <span>Enterprise License × 4</span>
                  <span className="text-foreground">480,000</span>
                </div>
                <div className="flex justify-between text-amber-500 text-[11px]">
                  <span>Discount {discountPercent}%</span>
                  <span>− {discountAmount.toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-[11px]">
                  <span>Tax 15% (VAT)</span>
                  <span className="text-foreground">+ {taxAmount.toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-dashed border-border/80 flex items-baseline justify-between">
                <span className="font-bold text-foreground text-xs">Grand total</span>
                <b className="text-base sm:text-lg font-bold text-primary font-mono">
                  BDT {grandTotal.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                </b>
              </div>

              {/* Bottom detail */}
              <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>Calculated: Server Decimal</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% Deterministic</span>
              </div>
            </div>

            <h3 className="mt-5 text-lg sm:text-xl font-bold text-foreground">
              Server-authoritative quotations
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Discounts, taxes and totals are calculated in decimal on the server. The PDF comes from the saved quotation.
            </p>
          </TiltCard>

          {/* Card 4: Follow-ups that do not slip (Tasks with Check Animations) */}
          <TiltCard>
            {/* Interactive Visual Canvas */}
            <div className="relative min-h-[210px] w-full rounded-xl border border-border/60 bg-gradient-to-br from-surface via-card to-muted/20 dark:from-slate-900/90 dark:via-slate-950/95 dark:to-slate-900/90 overflow-hidden flex flex-col justify-between p-3.5 sm:p-4 text-xs">
              
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-muted-foreground">Work Queue Follow-ups:</span>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                  {3 - Object.values(tasks).filter(Boolean).length} pending
                </span>
              </div>

              {/* Tasks List */}
              <div className="space-y-2 my-auto">
                {/* Task 1 */}
                <div 
                  onClick={() => toggleTask("task1")}
                  className={cn(
                    "flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer",
                    tasks.task1 ? "bg-muted/40 border-border opacity-70" : "bg-card border-border/80 hover:border-primary/40 shadow-xs"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div 
                      className={cn(
                        "size-4 rounded-md border flex items-center justify-center shrink-0 transition-colors",
                        tasks.task1 ? "bg-emerald-500 border-emerald-500 text-white" : "border-muted-foreground/30 bg-background"
                      )}
                      style={!tasks.task1 ? { animation: "bento-check 6s ease infinite" } : undefined}
                    >
                      {tasks.task1 && <Check size={11} />}
                    </div>
                    <span 
                      className={cn("text-[11px] font-medium truncate", tasks.task1 && "line-through text-muted-foreground")}
                      style={!tasks.task1 ? { animation: "bento-strike 6s ease infinite" } : undefined}
                    >
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
                    tasks.task2 ? "bg-muted/40 border-border opacity-70" : "bg-card border-border/80 hover:border-primary/40 shadow-xs"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div 
                      className={cn(
                        "size-4 rounded-md border flex items-center justify-center shrink-0 transition-colors",
                        tasks.task2 ? "bg-emerald-500 border-emerald-500 text-white" : "border-muted-foreground/30 bg-background"
                      )}
                      style={!tasks.task2 ? { animation: "bento-check 6s ease infinite 1.3s" } : undefined}
                    >
                      {tasks.task2 && <Check size={11} />}
                    </div>
                    <span 
                      className={cn("text-[11px] font-medium truncate", tasks.task2 && "line-through text-muted-foreground")}
                      style={!tasks.task2 ? { animation: "bento-strike 6s ease infinite 1.3s" } : undefined}
                    >
                      Send revised proposal
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
                      Contract review
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
                <span>Work Queue SLA</span>
                <span className="text-primary font-bold">Zero Slip Protocol</span>
              </div>
            </div>

            <h3 className="mt-5 text-lg sm:text-xl font-bold text-foreground">
              Follow-ups that do not slip
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Tasks, calls and meetings in one work queue, with due-today, overdue and calendar views.
            </p>
          </TiltCard>

          {/* Card 5: Customer 360 (Concentric Orbital Rings with Counter-Rotating Nodes) */}
          <TiltCard>
            {/* Interactive Visual Canvas */}
            <div className="relative min-h-[210px] w-full rounded-xl border border-border/60 bg-gradient-to-br from-surface via-card to-muted/20 dark:from-slate-900/90 dark:via-slate-950/95 dark:to-slate-900/90 overflow-hidden flex flex-col justify-between p-3.5 sm:p-4">
              
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">Single Customer View:</span>
                <span className="font-bold text-primary font-mono">360° Timeline</span>
              </div>

              {/* Concentric Spinning Orbital System */}
              <div className="relative h-32 my-auto flex items-center justify-center overflow-hidden">
                {/* Center Core Building */}
                <div className="relative z-10 size-12 rounded-2xl bg-gradient-to-br from-[#009cb4] to-[#8b5cf6] flex items-center justify-center text-white shadow-xl shadow-[#009cb4]/40">
                  <Building2 size={22} />
                </div>

                {/* Inner Ring (110px, spins 18s) */}
                <div className="absolute size-[110px] rounded-full border border-dashed border-border/80 animate-orbit-ring-1 pointer-events-none">
                  {/* Inner Node 1 (Contact) */}
                  <div 
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer"
                    onClick={() => setActiveOrbitNode(activeOrbitNode === "contact" ? null : "contact")}
                  >
                    <div className="size-7 rounded-lg bg-card border border-border flex items-center justify-center text-[#009cb4] shadow-sm hover:scale-125 transition-all animate-orbit-counter-1">
                      <UserCheck size={13} />
                    </div>
                  </div>
                  {/* Inner Node 2 (Quotation) */}
                  <div 
                    className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer"
                    onClick={() => setActiveOrbitNode(activeOrbitNode === "quotation" ? null : "quotation")}
                  >
                    <div className="size-7 rounded-lg bg-card border border-border flex items-center justify-center text-[#f1384a] shadow-sm hover:scale-125 transition-all animate-orbit-counter-1">
                      <Receipt size={13} />
                    </div>
                  </div>
                </div>

                {/* Outer Ring (176px, spins 28s reverse) */}
                <div className="absolute size-[176px] rounded-full border border-dashed border-border/60 animate-orbit-ring-2 pointer-events-none">
                  {/* Outer Node 1 (Deal) at top */}
                  <div 
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer"
                    onClick={() => setActiveOrbitNode(activeOrbitNode === "deal" ? null : "deal")}
                  >
                    <div className="size-7 rounded-lg bg-card border border-border flex items-center justify-center text-[#fac316] shadow-sm hover:scale-125 transition-all animate-orbit-counter-2">
                      <Trophy size={13} />
                    </div>
                  </div>
                  {/* Outer Node 2 (Calendar) at bottom-left */}
                  <div 
                    className="absolute bottom-3 left-2 pointer-events-auto cursor-pointer"
                    onClick={() => setActiveOrbitNode(activeOrbitNode === "calendar" ? null : "calendar")}
                  >
                    <div className="size-7 rounded-lg bg-card border border-border flex items-center justify-center text-[#8b5cf6] shadow-sm hover:scale-125 transition-all animate-orbit-counter-2">
                      <Calendar size={13} />
                    </div>
                  </div>
                  {/* Outer Node 3 (Files) at bottom-right */}
                  <div 
                    className="absolute bottom-3 right-2 pointer-events-auto cursor-pointer"
                    onClick={() => setActiveOrbitNode(activeOrbitNode === "files" ? null : "files")}
                  >
                    <div className="size-7 rounded-lg bg-card border border-border flex items-center justify-center text-[#10b981] shadow-sm hover:scale-125 transition-all animate-orbit-counter-2">
                      <Paperclip size={13} />
                    </div>
                  </div>
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
                    <span className="text-muted-foreground/60">5 entities connected</span>
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

          {/* Card 6: Targets, quotas and commissions (Wide: Spans 2 cols on lg) */}
          <TiltCard className="lg:col-span-2">
            {/* Interactive Visual Canvas */}
            <div className="relative min-h-[210px] w-full rounded-xl border border-border/60 bg-gradient-to-br from-surface via-card to-muted/20 dark:from-slate-900/90 dark:via-slate-950/95 dark:to-slate-900/90 overflow-hidden flex flex-col justify-between p-4 sm:p-5 font-mono">
              
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-bold">Team target this quarter</span>
                <div className="flex items-center gap-1.5">
                  {(["team", "AU", "SR", "TH"] as const).map((rep) => (
                    <button
                      key={rep}
                      type="button"
                      onClick={() => setSelectedRep(rep)}
                      className={cn(
                        "px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-all cursor-pointer",
                        selectedRep === rep 
                          ? "bg-primary text-primary-foreground shadow-xs" 
                          : "bg-surface/80 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {rep}
                    </button>
                  ))}
                  <b className="ml-2 text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400">
                    {activeRepInfo.attainment}% attained
                  </b>
                </div>
              </div>

              {/* Main Glowing Target Progress Bar with Continuous Animated Fill */}
              <div className="my-auto space-y-3">
                <div className="h-3 w-full rounded-full bg-muted/60 overflow-hidden p-0.5 border border-border/50">
                  <div 
                    className="h-full rounded-full bg-[linear-gradient(to_right,#009cb4,#fac316,#10b981)] animate-quota-fill shadow-sm"
                    style={{ width: `${activeRepInfo.attainment}%` }}
                  />
                </div>

                {/* Rep breakdown rows */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[10px]">AU</span>
                    <div className="h-1.5 flex-1 rounded-full bg-muted/60 overflow-hidden">
                      <div className="h-full bg-primary rounded-full animate-quota-fill" style={{ width: "92%" }} />
                    </div>
                    <span className="text-[10px] text-muted-foreground">92%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="size-6 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] flex items-center justify-center font-bold text-[10px]">SR</span>
                    <div className="h-1.5 flex-1 rounded-full bg-muted/60 overflow-hidden">
                      <div className="h-full bg-[#8b5cf6] rounded-full animate-quota-fill" style={{ width: "74%" }} />
                    </div>
                    <span className="text-[10px] text-muted-foreground">74%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="size-6 rounded-full bg-[#fac316]/10 text-[#fac316] flex items-center justify-center font-bold text-[10px]">TH</span>
                    <div className="h-1.5 flex-1 rounded-full bg-muted/60 overflow-hidden">
                      <div className="h-full bg-[#fac316] rounded-full animate-quota-fill" style={{ width: "61%" }} />
                    </div>
                    <span className="text-[10px] text-muted-foreground">61%</span>
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry */}
              <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
                <span>Won: <b className="text-foreground">{activeRepInfo.won}</b> / Quota: {activeRepInfo.target}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Commission Rules Enforced</span>
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
