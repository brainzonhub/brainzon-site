"use client";

import { Check, Database, Gauge, TrendingUp, Zap, Shield, RefreshCw, MoveRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { databaseCapabilities } from "@/config/modernization";
import { ModernizationSectionHeader } from "./ModernizationSectionHeader";
import { cn } from "@/lib/utils";

const metricsData = [
  { label: "Query Speed", before: 35, after: 94, unit: "%" },
  { label: "Data Integrity", before: 48, after: 99, unit: "%" },
  { label: "Availability", before: 72, after: 99.99, unit: "%" },
  { label: "Storage Efficiency", before: 42, after: 88, unit: "%" },
];

const performanceStats = [
  { icon: Zap, label: "Query Latency", value: "< 5ms", sub: "p99 response" },
  { icon: TrendingUp, label: "Throughput", value: "10×", sub: "faster reads" },
  { icon: Shield, label: "Encryption", value: "AES-256", sub: "at rest & transit" },
  { icon: RefreshCw, label: "Replication", value: "Multi-region", sub: "active-active" },
];

export function DatabaseModernization() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-28 transition-colors duration-300">
      {/* Subtle radial glow */}
      <div className="absolute top-0 right-0 -z-10 h-[60%] w-[40%] rounded-full bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />

      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* ── Left column: header + capability list ── */}
          <div className="flex flex-col">
            <ModernizationSectionHeader
              align="left"
              eyebrow="Data foundation"
              title="Unlock More Value From Your Data"
              description="Modernize schemas, queries, platforms, and governance so data becomes faster, safer, and ready for analytics and AI."
            />

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {databaseCapabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-xs font-semibold text-foreground backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-default"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Performance stats strip */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {performanceStats.map(({ icon: Icon, label, value, sub }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-xl border border-border/40 bg-card/40 p-3 backdrop-blur-sm"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/15">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold text-foreground">{value}</p>
                    <p className="text-[9px] font-mono text-muted-foreground">{label}</p>
                    <p className="text-[9px] text-muted-foreground/70">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: visual panel ── */}
          <div className="flex flex-col gap-4">
            {/* Panel header */}
            <div className="rounded-2xl border border-border/40 bg-card/45 p-5 shadow-sm backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-border/50 pb-4">
                <span className="font-mono text-[9px] font-bold tracking-widest text-primary uppercase">
                  Database Modernization
                </span>
                <Gauge className="size-4 text-primary animate-pulse" />
              </div>

              {/* Legacy → Modern flow */}
              <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-4 text-center">
                  <Database className="mx-auto size-6 text-secondary" />
                  <p className="mt-2 text-xs font-bold text-foreground">Legacy Database</p>
                  <p className="mt-0.5 text-[9px] font-mono text-muted-foreground">Tightly coupled</p>
                  <span className="mt-2 inline-block rounded border border-secondary/20 bg-secondary/10 px-2 py-0.5 text-[8px] font-mono font-bold text-secondary">
                    MIGRATION SOURCE
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1 text-primary">
                  <MoveRight className="size-5 animate-pulse" />
                  <span className="text-[8px] font-mono text-muted-foreground/70 rotate-0 text-center leading-tight">
                    TRANSFORM
                  </span>
                </div>

                <div className="rounded-xl border border-primary/25 bg-primary/5 p-4 text-center shadow-glow-primary">
                  <Database className="mx-auto size-6 text-primary" />
                  <p className="mt-2 text-xs font-bold text-foreground">Modern Data Platform</p>
                  <p className="mt-0.5 text-[9px] font-mono text-muted-foreground">Optimized + governed</p>
                  <span className="mt-2 inline-block rounded border border-primary/20 bg-primary/10 px-2 py-0.5 text-[8px] font-mono font-bold text-primary">
                    TARGET STATE
                  </span>
                </div>
              </div>
            </div>

            {/* Performance improvement chart panel */}
            <div className="rounded-2xl border border-border/40 bg-card/45 p-5 shadow-sm backdrop-blur-sm">
              <p className="mb-4 text-[9px] font-mono font-bold tracking-widest text-muted-foreground uppercase">
                Performance Impact
              </p>
              <div className="flex flex-col gap-3">
                {metricsData.map(({ label, before, after }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between text-[9px] font-mono">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="text-primary font-bold">{after}{label === "Availability" ? "%" : "%"}</span>
                    </div>
                    <div className="relative h-1.5 w-full rounded-full bg-border/40 overflow-hidden">
                      {/* Before bar (dimmed) */}
                      <div
                        className="absolute left-0 top-0 h-full rounded-full bg-secondary/30"
                        style={{ width: `${before}%` }}
                      />
                      {/* After bar */}
                      <div
                        className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-primary/70 to-primary transition-all duration-700"
                        style={{ width: `${after}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-muted-foreground/60">
                      <span>Before: {before}%</span>
                      <span className={cn(
                        "font-bold",
                        after - before > 30 ? "text-emerald-500" : "text-primary"
                      )}>↑ +{Math.round(after - before)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
