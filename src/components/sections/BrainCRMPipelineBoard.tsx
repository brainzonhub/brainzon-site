"use client";

import { useState } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  Trophy, 
  TrendingUp 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Deal {
  id: number;
  name: string;
  account: string;
  value: number;
  stage: number;
}

const STAGES = [
  { name: "Prospecting", prob: 10, color: "#009cb4" },
  { name: "Qualification", prob: 25, color: "#3b82f6" },
  { name: "Proposal / Quote", prob: 50, color: "#8b5cf6" },
  { name: "Negotiation", prob: 75, color: "#fac316" },
  { name: "Closed Won", prob: 100, color: "#10b981" },
];

const INITIAL_DEALS: Deal[] = [
  { id: 1, name: "AI Automated Workflow Pilot", account: "Apex Global Holdings", value: 450000, stage: 0 },
  { id: 2, name: "CRM Rollout", account: "Delta Agro Industries", value: 850000, stage: 0 },
  { id: 3, name: "ERP & CRM Unified Solution", account: "Beximco Innovations", value: 1200000, stage: 1 },
  { id: 4, name: "Nationwide Fiber Network CRM", account: "Grameen Digital Solutions", value: 3500000, stage: 2 },
  { id: 5, name: "Hospital Management Cloud Platform", account: "Square HealthTech", value: 2800000, stage: 3 },
  { id: 6, name: "Logistics Tracking Portal", account: "Bengal Logistics & Supply", value: 1800000, stage: 4 },
];

export function BrainCRMPipelineBoard() {
  const [deals, setDeals] = useState<Deal[]>(INITIAL_DEALS);
  const [statusMessage, setStatusMessage] = useState<string>("Sample deals for illustration. Amounts in BDT.");
  const [draggedDealId, setDraggedDealId] = useState<number | null>(null);
  const [dragOverStage, setDragOverStage] = useState<number | null>(null);
  const [celebrateWon, setCelebrateWon] = useState<boolean>(false);

  const fmt = (n: number) => "BDT " + Math.round(n).toLocaleString("en-US");

  // Calculations
  const openDeals = deals.filter((d) => d.stage < STAGES.length - 1);
  const wonDeals = deals.filter((d) => d.stage === STAGES.length - 1);
  const openPipeline = openDeals.reduce((acc, d) => acc + d.value, 0);
  const weightedForecast = openDeals.reduce((acc, d) => {
    const stageInfo = STAGES[d.stage];
    return acc + (d.value * (stageInfo ? stageInfo.prob : 0)) / 100;
  }, 0);
  const wonRevenue = wonDeals.reduce((acc, d) => acc + d.value, 0);

  const moveDeal = (id: number, targetStage: number) => {
    if (targetStage < 0 || targetStage >= STAGES.length) return;
    const deal = deals.find((d) => d.id === id);
    if (!deal || deal.stage === targetStage) return;

    setDeals((prev) =>
      prev.map((d) => (d.id === id ? { ...d, stage: targetStage } : d))
    );

    const stageInfo = STAGES[targetStage];
    if (targetStage === STAGES.length - 1) {
      setCelebrateWon(true);
      setTimeout(() => setCelebrateWon(false), 2200);
      setStatusMessage(`🎉 ${deal.name} is Closed Won! ${fmt(deal.value)} moved from forecast to won revenue.`);
    } else {
      setStatusMessage(`${deal.name} moved to ${stageInfo?.name} (${stageInfo?.prob}% probability).`);
    }
  };

  const resetBoard = () => {
    setDeals(INITIAL_DEALS);
    setStatusMessage("Board reset. Sample deals for illustration. Amounts in BDT.");
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 border-b border-border/40 bg-surface/30" id="pipeline-demo">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[400px] rounded-full bg-radial-gradient from-secondary/10 via-primary/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border/80 bg-surface/80 text-xs font-bold tracking-widest uppercase text-primary mb-4 font-mono shadow-xs">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span>Try the pipeline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.14]">
            Move a deal.{" "}
            <span className="inline-block whitespace-nowrap bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:250%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(0,156,180,0.18)]">
              Watch the forecast change.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Drag a card to another stage, or use the arrows on each card. Weighted forecast is each deal value multiplied by its stage probability, the same rule the product uses.
          </p>
        </div>

        {/* Board Container */}
        <div className="rounded-2xl border border-border/80 bg-card/80 dark:bg-card/40 backdrop-blur-md shadow-card p-5 sm:p-6 lg:p-8">
          
          {/* Top Live Telemetry Stats */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/60">
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              {/* Open pipeline */}
              <div>
                <span className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                  Open pipeline
                </span>
                <span className="text-lg sm:text-2xl font-bold font-mono text-foreground">
                  {fmt(openPipeline)}
                </span>
              </div>

              {/* Weighted forecast */}
              <div>
                <span className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1">
                  <TrendingUp size={12} className="text-[#009cb4]" /> Weighted forecast
                </span>
                <span className="text-lg sm:text-2xl font-bold font-mono text-[#009cb4]">
                  {fmt(weightedForecast)}
                </span>
              </div>

              {/* Won */}
              <div>
                <span className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Trophy size={12} className="text-emerald-500" /> Won
                </span>
                <span className="text-lg sm:text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  {fmt(wonRevenue)}
                </span>
              </div>
            </div>

            {/* Reset Button */}
            <button
              type="button"
              onClick={resetBoard}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border/80 bg-surface/80 hover:bg-surface text-xs font-semibold text-foreground transition-all cursor-pointer shadow-xs"
            >
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
          </div>

          {/* 5 Interactive Pipeline Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mt-6 items-start">
            {STAGES.map((stage, stageIdx) => {
              const stageDeals = deals.filter((d) => d.stage === stageIdx);
              const stageTotal = stageDeals.reduce((a, d) => a + d.value, 0);
              const isOver = dragOverStage === stageIdx;

              return (
                <section
                  key={stage.name}
                  onDragOver={(e) => {
                    e.preventDefault();
                    if (draggedDealId !== null) setDragOverStage(stageIdx);
                  }}
                  onDragLeave={() => setDragOverStage(null)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragOverStage(null);
                    if (draggedDealId !== null) {
                      moveDeal(draggedDealId, stageIdx);
                      setDraggedDealId(null);
                    }
                  }}
                  className={cn(
                    "flex flex-col rounded-xl border p-3 min-h-[300px] transition-all",
                    isOver 
                      ? "bg-primary/5 border-primary ring-2 ring-primary/20" 
                      : "bg-surface/50 border-border/60 hover:border-border"
                  )}
                  style={{ borderTopColor: stage.color, borderTopWidth: 3 }}
                >
                  {/* Column Header */}
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-border/40">
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-foreground">
                        <span>{stage.name}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-muted text-muted-foreground">
                          {stage.prob}%
                        </span>
                      </div>
                      <span className="block text-[11px] font-mono text-muted-foreground mt-0.5">
                        {stageDeals.length} {stageDeals.length === 1 ? "deal" : "deals"} • {fmt(stageTotal)}
                      </span>
                    </div>
                  </div>

                  {/* Deals List */}
                  <div className="flex-1 space-y-2.5">
                    {stageDeals.length === 0 ? (
                      <div className="h-24 flex items-center justify-center border border-dashed border-border/60 rounded-lg text-[11px] text-muted-foreground/60 font-mono">
                        Drop deal here
                      </div>
                    ) : (
                      stageDeals.map((deal) => {
                        const isBeingDragged = draggedDealId === deal.id;
                        return (
                          <article
                            key={deal.id}
                            draggable
                            onDragStart={() => setDraggedDealId(deal.id)}
                            onDragEnd={() => {
                              setDraggedDealId(null);
                              setDragOverStage(null);
                            }}
                            className={cn(
                              "p-3 rounded-xl border bg-background/95 shadow-sm text-left transition-all cursor-grab active:cursor-grabbing",
                              isBeingDragged && "opacity-40 scale-95",
                              deal.stage === STAGES.length - 1 && "border-emerald-500/40 bg-emerald-500/5"
                            )}
                            style={{ borderLeftColor: stage.color, borderLeftWidth: 3 }}
                          >
                            <h4 className="text-xs font-bold text-foreground leading-snug truncate">
                              {deal.name}
                            </h4>
                            <p className="text-[10px] text-muted-foreground truncate mt-0.5">
                              {deal.account}
                            </p>

                            <div className="flex items-center justify-between pt-2 mt-2 border-t border-border/40 text-[11px]">
                              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                                {fmt(deal.value)}
                              </span>

                              {/* Stage navigation arrow buttons */}
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  disabled={deal.stage === 0}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    moveDeal(deal.id, deal.stage - 1);
                                  }}
                                  className="size-6 rounded flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-20 disabled:pointer-events-none transition-colors"
                                  title="Move to previous stage"
                                >
                                  <ArrowLeft size={11} />
                                </button>
                                <button
                                  type="button"
                                  disabled={deal.stage === STAGES.length - 1}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    moveDeal(deal.id, deal.stage + 1);
                                  }}
                                  className="size-6 rounded flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-20 disabled:pointer-events-none transition-colors"
                                  title="Move to next stage"
                                >
                                  <ArrowRight size={11} />
                                </button>
                              </div>
                            </div>
                          </article>
                        );
                      })
                    )}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Bottom Telemetry Status Line */}
          <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className={cn("size-2 rounded-full", celebrateWon ? "bg-emerald-500 animate-ping" : "bg-[#009cb4]")} />
              <span>{statusMessage}</span>
            </span>
            <span className="hidden sm:inline text-muted-foreground/60">
              Interactive Forecast Sandbox
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
