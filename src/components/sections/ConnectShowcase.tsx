"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GitBranch, Database, Shuffle, Users, CheckCircle, Zap, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function ConnectShowcase() {
  const [syncState, setSyncState] = useState<"idle" | "mapping" | "syncing" | "complete">("idle");
  const [progress, setProgress] = useState(0);

  const startSync = () => {
    if (syncState !== "idle") return;
    setSyncState("mapping");
    setProgress(0);
  };

  useEffect(() => {
    if (syncState === "mapping") {
      const timeout = setTimeout(() => {
        setSyncState("syncing");
      }, 1000);
      return () => clearTimeout(timeout);
    }

    if (syncState === "syncing") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setSyncState("complete");
            return 100;
          }
          return prev + 10;
        });
      }, 200);
      return () => clearInterval(interval);
    }

    if (syncState === "complete") {
      const timeout = setTimeout(() => {
        setSyncState("idle");
        setProgress(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [syncState]);

  return (
    <section className="relative py-20 border-b border-border/40 bg-surface transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Diagram */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-elevated overflow-hidden backdrop-blur-md">
              {/* Decorative top-right grid glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

              {/* Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <GitBranch size={16} className="text-primary animate-pulse" />
                  <span className="text-[11px] font-mono tracking-widest text-primary font-bold uppercase">
                    BrainConnect Integration Hub
                  </span>
                </div>
                <button
                  type="button"
                  onClick={startSync}
                  disabled={syncState !== "idle"}
                  className={cn(
                    "px-3 py-1 text-[10px] font-bold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    syncState === "idle" 
                      ? "bg-primary text-primary-foreground hover:opacity-90 cursor-pointer" 
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  )}
                >
                  {syncState === "idle" && "Trigger Sync Pipeline"}
                  {syncState === "mapping" && "Mapping Schema..."}
                  {syncState === "syncing" && `Syncing... ${progress}%`}
                  {syncState === "complete" && "Sync Complete!"}
                </button>
              </div>

              {/* Integration Mapping canvas */}
              <div className="relative flex items-center justify-between mt-12 mb-8 h-28">
                
                {/* Left Node: ERP Source */}
                <div className="z-10 flex flex-col items-center gap-2 p-3 rounded-xl border border-border bg-card/90 shadow-card w-24">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Database size={16} />
                  </div>
                  <span className="text-[10px] font-bold">BrainERP</span>
                  <span className="text-[8px] text-muted-foreground uppercase">Source DB</span>
                </div>

                {/* Central Connect Hub */}
                <div className="z-10 flex flex-col items-center justify-center size-16 rounded-full border border-border bg-card/90 shadow-glow-primary animate-pulse">
                  <Shuffle size={20} className="text-primary animate-[spin_10s_linear_infinite]" />
                </div>

                {/* Right Node: CRM Target */}
                <div className="z-10 flex flex-col items-center gap-2 p-3 rounded-xl border border-border bg-card/90 shadow-card w-24">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Users size={16} />
                  </div>
                  <span className="text-[10px] font-bold">BrainCRM</span>
                  <span className="text-[8px] text-muted-foreground uppercase">Target DB</span>
                </div>

                {/* Connecting Lines */}
                <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 h-0.5 bg-border/40 -z-10" />

                {/* Animated payloads on sync */}
                {syncState === "syncing" && (
                  <>
                    <div 
                      className="absolute size-2.5 rounded-full bg-primary shadow-glow-primary -translate-y-1/2 top-1/2 -z-5 animate-[ping_1.5s_infinite]"
                      style={{ left: `${15 + progress * 0.7}%` }}
                    />
                    <div 
                      className="absolute size-2 rounded-full bg-secondary shadow-glow-secondary -translate-y-1/2 top-1/2 -z-5"
                      style={{ left: `${15 + progress * 0.7}%` }}
                    />
                  </>
                )}

              </div>

              {/* Status bar & validation indicators */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-border/40">
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                  <div className={cn(
                    "size-1.5 rounded-full",
                    syncState === "idle" ? "bg-muted-foreground/60" : "bg-emerald-500"
                  )} />
                  <span>Schema Mapping: {syncState === "idle" ? "Idle" : "Verified"}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                  <div className={cn(
                    "size-1.5 rounded-full",
                    syncState === "complete" ? "bg-emerald-500" : "bg-muted-foreground/60"
                  )} />
                  <span>Sync Verification: {syncState === "complete" ? "Passed" : "Pending"}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Descriptions */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 mb-6">
              Data Orchestration
            </span>
            <h2 className="text-heading-2 font-bold tracking-tight text-foreground">
              BrainConnect Platform
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Eliminate information silos entirely. BrainConnect links CRM leads to ERP databases and legacy operational frameworks using automated high-throughput APIs.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5 shrink-0">
                  <Zap size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Workflow Automation</h4>
                  <p className="text-[11px] text-muted-foreground leading-normal mt-0.5">
                    Trigger operations in third-party systems automatically when ERP changes occur.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary mt-0.5 shrink-0">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Secure Bi-directional Sync</h4>
                  <p className="text-[11px] text-muted-foreground leading-normal mt-0.5">
                    Real-time conflict resolution policies ensure database records are synced perfectly.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/products/brainconnect"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:underline"
            >
              <span>Explore BrainConnect Features</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}
