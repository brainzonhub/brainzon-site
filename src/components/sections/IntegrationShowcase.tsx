"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Database, Shuffle, Users, CheckCircle, Zap, ArrowRight, Network } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function IntegrationShowcase() {
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
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

              {/* Header inside mockup */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <Network size={16} className="text-primary" />
                  <span className="text-xs font-bold text-foreground">
                    Enterprise Integration Topology
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">
                    STATUS: {syncState === "idle" ? "ACTIVE" : syncState.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Node to Node Visualization */}
              <div className="py-8 grid grid-cols-3 gap-2 items-center">
                
                {/* Source Node */}
                <div className="flex flex-col items-center gap-2 p-3 rounded-xl border border-border/60 bg-muted/20 text-center">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Database size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-foreground block">BrainERP</span>
                    <span className="text-[9px] text-muted-foreground font-mono">Ledger &amp; Stock</span>
                  </div>
                </div>

                {/* Integration Pipe */}
                <div className="flex flex-col items-center justify-center gap-2 relative">
                  <div className="w-full flex items-center justify-center relative">
                    <div className="w-full h-1 bg-border/40 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="absolute size-6 rounded-full border border-border bg-card flex items-center justify-center text-primary shadow-xs">
                      <Shuffle size={12} className={cn(syncState === "syncing" && "animate-spin")} />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {syncState === "idle" && "Governed API Pipe"}
                    {syncState === "mapping" && "Validating Contract..."}
                    {syncState === "syncing" && `Syncing (${progress}%)`}
                    {syncState === "complete" && "Payloads Verified"}
                  </span>
                </div>

                {/* Target Node */}
                <div className="flex flex-col items-center gap-2 p-3 rounded-xl border border-border/60 bg-muted/20 text-center">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Users size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-foreground block">BrainCRM</span>
                    <span className="text-[9px] text-muted-foreground font-mono">Orders &amp; Invoices</span>
                  </div>
                </div>

              </div>

              {/* Action Trigger */}
              <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">
                  Idempotent endpoints • Dead-letter recovery queues
                </span>
                <button
                  type="button"
                  onClick={startSync}
                  disabled={syncState !== "idle"}
                  className={cn(
                    "px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground shadow-glow-primary transition-all cursor-pointer",
                    syncState !== "idle" && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {syncState === "idle" ? "Simulate API Sync" : "Syncing..."}
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Descriptions */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 mb-6">
              Connected Operations
            </span>
            <h2 className="text-heading-2 font-bold tracking-tight text-foreground">
              Enterprise Integration Services
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Eliminate data silos across Brainzon products, enterprise platforms (Odoo, Dynamics 365 BC), third-party SaaS, databases, and legacy systems with governed API architectures.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5 shrink-0">
                  <Zap size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Governed API Interfaces</h4>
                  <p className="text-[11px] text-muted-foreground leading-normal mt-0.5">
                    Design and implement reusable REST, SOAP, GraphQL, OData, and webhook architectures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary mt-0.5 shrink-0">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Data Synchronization &amp; Monitoring</h4>
                  <p className="text-[11px] text-muted-foreground leading-normal mt-0.5">
                    Define system-of-record ownership, conflict management, and automated dead-letter queues.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/solutions/integration"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:underline"
            >
              <span>Explore Integration Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}
