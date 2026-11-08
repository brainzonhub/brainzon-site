"use client";

import { useState } from "react";
import { Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Currency = "USD" | "BDT" | "EUR";

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: "$",
  BDT: "BDT ",
  EUR: "€",
};

export function BrainCRMROI() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [reps, setReps] = useState<number>(10);
  const [dealsPerRep, setDealsPerRep] = useState<number>(8);
  const [dealValue, setDealValue] = useState<number>(15000);
  const [winRate, setWinRate] = useState<number>(20);
  const [winGain, setWinGain] = useState<number>(2);
  const [hoursSaved, setHoursSaved] = useState<number>(3);

  const sym = CURRENCY_SYMBOLS[currency];
  const fmtCash = (n: number) => sym + Math.round(n).toLocaleString("en-US");

  // Calculations
  const monthlyPipeline = reps * dealsPerRep * dealValue;
  const yearlyBaseWon = monthlyPipeline * (winRate / 100) * 12;
  const yearlyAddedWon = monthlyPipeline * (winGain / 100) * 12;
  const monthlyHoursReturned = Math.round(reps * hoursSaved * 4.33);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 border-b border-border/40 bg-surface/30" id="roi">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[700px] h-[350px] rounded-full bg-radial-gradient from-emerald-500/10 via-primary/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border/80 bg-surface/80 text-xs font-bold tracking-widest uppercase text-primary mb-4 font-mono shadow-xs">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span>ROI estimate</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.14]">
            Put your{" "}
            <span className="inline-block whitespace-nowrap bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:250%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(0,156,180,0.18)]">
              own numbers
            </span>{" "}
            in
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A simple model with assumptions you control. It is an estimate for planning, not a promise.
          </p>
        </div>

        {/* ROI Calculator Card */}
        <div className="rounded-2xl border border-border/80 bg-card/80 dark:bg-card/40 backdrop-blur-md shadow-card p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Inputs: Sliders */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Currency Picker */}
              <div className="flex items-center justify-between pb-3 border-b border-border/60">
                <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                  Select Currency:
                </span>
                <div className="flex items-center gap-1 bg-surface p-1 rounded-lg border border-border/60">
                  {(["USD", "BDT", "EUR"] as const).map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => setCurrency(curr)}
                      className={cn(
                        "px-3 py-1 rounded-md text-xs font-mono font-bold transition-all cursor-pointer",
                        currency === curr 
                          ? "bg-primary text-primary-foreground shadow-xs" 
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Sales reps */}
              <div>
                <div className="flex justify-between items-center text-xs font-medium text-foreground mb-2">
                  <span>Sales reps</span>
                  <span className="font-mono font-bold text-sm bg-muted/60 px-2.5 py-0.5 rounded-md">{reps}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={reps}
                  onChange={(e) => setReps(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 2: New deals per rep */}
              <div>
                <div className="flex justify-between items-center text-xs font-medium text-foreground mb-2">
                  <span>New deals per rep each month</span>
                  <span className="font-mono font-bold text-sm bg-muted/60 px-2.5 py-0.5 rounded-md">{dealsPerRep}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={dealsPerRep}
                  onChange={(e) => setDealsPerRep(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 3: Average deal value */}
              <div>
                <div className="flex justify-between items-center text-xs font-medium text-foreground mb-2">
                  <span>Average deal value</span>
                  <span className="font-mono font-bold text-sm bg-muted/60 px-2.5 py-0.5 rounded-md">{fmtCash(dealValue)}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="200000"
                  step="1000"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 4: Current win rate */}
              <div>
                <div className="flex justify-between items-center text-xs font-medium text-foreground mb-2">
                  <span>Current win rate</span>
                  <span className="font-mono font-bold text-sm bg-muted/60 px-2.5 py-0.5 rounded-md">{winRate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  value={winRate}
                  onChange={(e) => setWinRate(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Assumptions Header */}
              <div className="pt-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                  Workflow Assumptions:
                </span>
              </div>

              {/* Slider 5: Win rate gain */}
              <div className="p-3 rounded-xl border border-primary/20 bg-primary/5">
                <div className="flex justify-between items-center text-xs font-semibold text-foreground mb-2">
                  <span>Win-rate gain from structured follow-up</span>
                  <span className="font-mono font-bold text-sm text-primary">+{winGain} pts</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={winGain}
                  onChange={(e) => setWinGain(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 6: Admin hours saved */}
              <div className="p-3 rounded-xl border border-secondary/20 bg-secondary/5">
                <div className="flex justify-between items-center text-xs font-semibold text-foreground mb-2">
                  <span>Admin hours saved per rep each week</span>
                  <span className="font-mono font-bold text-sm text-secondary">{hoursSaved} h</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={hoursSaved}
                  onChange={(e) => setHoursSaved(Number(e.target.value))}
                  className="w-full accent-secondary h-2 bg-secondary/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>

            </div>

            {/* Right Output Results Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-border/80 bg-gradient-to-br from-surface via-card to-muted/20 dark:from-slate-900/90 dark:via-slate-950/95 dark:to-slate-900/90">
              <div className="space-y-5">
                
                {/* Result 1: Monthly Pipeline */}
                <div>
                  <span className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                    Pipeline created each month
                  </span>
                  <span className="text-xl sm:text-2xl font-bold font-mono text-foreground">
                    {fmtCash(monthlyPipeline)}
                  </span>
                </div>

                {/* Result 2: Annual Base Won */}
                <div>
                  <span className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                    Won revenue each year today
                  </span>
                  <span className="text-xl sm:text-2xl font-bold font-mono text-muted-foreground">
                    {fmtCash(yearlyBaseWon)}
                  </span>
                </div>

                {/* Result 3: Added Won Revenue (Hero Accent) */}
                <div className="p-4 sm:p-5 rounded-xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent shadow-sm">
                  <span className="block text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Sparkles size={13} /> Added won revenue each year
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400">
                    +{fmtCash(yearlyAddedWon)}
                  </span>
                  <span className="block text-[11px] text-muted-foreground mt-1">
                    At your +{winGain} pts win-rate assumption
                  </span>
                </div>

                {/* Result 4: Selling Time Returned */}
                <div>
                  <span className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Clock size={13} className="text-[#009cb4]" /> Selling time returned each month
                  </span>
                  <span className="text-xl sm:text-2xl font-bold font-mono text-[#009cb4]">
                    {monthlyHoursReturned.toLocaleString("en-US")} hours
                  </span>
                </div>
              </div>

              {/* Bottom Formula Footnote */}
              <div className="pt-4 mt-6 border-t border-border/40 text-[10px] font-mono text-muted-foreground/70 leading-relaxed">
                Added revenue = reps × deals × deal value × win-rate gain × 12. Hours = reps × hours per week × 4.33.
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
