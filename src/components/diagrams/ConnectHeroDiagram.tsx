"use client";

import React from "react";
import { 
  GitBranch, 
  Globe, 
  Database,
  Cloud,
  Activity,
  Key,
  RefreshCw
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ConnectHeroDiagramProps {
  className?: string;
}

export function ConnectHeroDiagram({ className }: ConnectHeroDiagramProps) {
  return (
    <div className={cn(
      "relative w-full h-[320px] border border-border/40 rounded-3xl bg-surface/30 backdrop-blur-md overflow-hidden flex items-center justify-center transition-all duration-300 shadow-glow-primary",
      className
    )}>
      {/* Tech grid backdrop */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(30,51,77,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      {/* SVG Circuit Connections */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 400 300"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <style>{`
          @keyframes dash-in {
            to {
              stroke-dashoffset: -40;
            }
          }
          @keyframes dash-out {
            to {
              stroke-dashoffset: -40;
            }
          }
          .circuit-flow-in {
            stroke-dasharray: 6 12;
            animation: dash-in 2.5s linear infinite;
          }
          .circuit-flow-out {
            stroke-dasharray: 6 12;
            animation: dash-out 2s linear infinite;
          }
          @keyframes spin-slow {
            to {
              transform: rotate(360deg);
            }
          }
          .spin-concentric {
            transform-origin: 200px 150px;
            animation: spin-slow 15s linear infinite;
          }
          .spin-concentric-rev {
            transform-origin: 200px 150px;
            animation: spin-slow 10s linear infinite reverse;
          }
        `}</style>

        {/* Base Static Circuits */}
        {/* Top-Left to Center */}
        <path d="M 70 75 C 130 75, 150 150, 200 150" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />
        {/* Bottom-Left to Center */}
        <path d="M 70 225 C 130 225, 150 150, 200 150" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />
        {/* Center to Top-Right */}
        <path d="M 200 150 C 250 150, 270 75, 330 75" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />
        {/* Center to Bottom-Right */}
        <path d="M 200 150 C 250 150, 270 225, 330 225" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />

        {/* Animated Data Streams */}
        <path d="M 70 75 C 130 75, 150 150, 200 150" stroke="var(--primary)" className="opacity-70 circuit-flow-in" strokeWidth="1.5" />
        <path d="M 70 225 C 130 225, 150 150, 200 150" stroke="var(--primary)" className="opacity-70 circuit-flow-in" strokeWidth="1.5" />
        <path d="M 200 150 C 250 150, 270 75, 330 75" stroke="var(--primary)" className="opacity-70 circuit-flow-out" strokeWidth="1.5" />
        <path d="M 200 150 C 250 150, 270 225, 330 225" stroke="var(--secondary)" className="opacity-75 circuit-flow-out" strokeWidth="1.5" />

        {/* Decorative Concentric Rings around Engine */}
        <circle cx="200" cy="150" r="32" stroke="var(--primary)" strokeWidth="0.75" strokeDasharray="4 8" className="opacity-45 spin-concentric" />
        <circle cx="200" cy="150" r="40" stroke="var(--secondary)" strokeWidth="0.75" strokeDasharray="6 12" className="opacity-35 spin-concentric-rev" />
      </svg>

      {/* ================= LEFT COLUMN ================= */}
      {/* 1. SaaS API Ingress (Top Left) */}
      <div className="absolute left-4 top-[25%] -translate-y-1/2 z-10 w-[120px]">
        <div className="flex flex-col p-2 rounded-xl border border-primary/20 bg-card/75 backdrop-blur-xs shadow-sm hover:border-primary/40 hover:scale-105 hover:bg-card transition-all duration-300 group">
          <div className="flex items-center gap-1.5 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Globe className="size-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[9px] font-bold text-foreground truncate">SaaS Ingress</span>
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <span className="text-[7.5px] text-muted-foreground truncate">SAP & Odoo endpoints</span>
            <span className="text-[6.5px] font-mono text-primary font-semibold flex items-center gap-0.5">
              <Key className="size-2 text-cyan-400" /> OAuth 2.0 Secure
            </span>
          </div>
        </div>
      </div>

      {/* 2. Database Sync CDC (Bottom Left) */}
      <div className="absolute left-4 top-[75%] -translate-y-1/2 z-10 w-[120px]">
        <div className="flex flex-col p-2 rounded-xl border border-violet-500/20 bg-card/75 backdrop-blur-xs shadow-sm hover:border-violet-500/40 hover:scale-105 hover:bg-card transition-all duration-300 group">
          <div className="flex items-center gap-1.5 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-violet-500/10 text-violet-400 animate-pulse">
              <Database className="size-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[9px] font-bold text-foreground truncate">DB Sync (CDC)</span>
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <span className="text-[7.5px] text-muted-foreground truncate">PostgreSQL Logstream</span>
            <span className="text-[6.5px] font-mono text-violet-400 font-semibold flex items-center gap-0.5">
              <RefreshCw className="size-2 text-violet-400 animate-spin" /> Bi-directional
            </span>
          </div>
        </div>
      </div>

      {/* ================= CENTER COLUMN ================= */}
      {/* Workflow Orchestration Engine Hub */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group">
        <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary bg-background shadow-[0_0_24px_rgba(6,182,212,0.3)] dark:shadow-[0_0_36px_rgba(6,182,212,0.45)] p-2.5 animate-[pulse_3s_ease-in-out_infinite] group-hover:scale-110 transition-transform duration-300">
          <GitBranch className="text-primary size-5.5 animate-pulse" />
        </div>
        <div className="mt-2.5 bg-background/90 border border-primary/20 backdrop-blur-xs rounded-md px-1.5 py-0.5 shadow-sm text-center">
          <span className="block text-[8px] font-mono text-muted-foreground leading-none">ORCHESTRATOR</span>
          <span className="text-[8px] font-bold text-cyan-400 font-mono mt-0.5">SLA: 99.99%</span>
        </div>
      </div>

      {/* ================= RIGHT COLUMN ================= */}
      {/* 3. Cloud Warehouse Storage (Top Right) */}
      <div className="absolute right-4 top-[25%] -translate-y-1/2 z-10 w-[120px]">
        <div className="flex flex-col p-2 rounded-xl border border-emerald-500/20 bg-card/75 backdrop-blur-xs shadow-sm hover:border-emerald-500/40 hover:scale-105 hover:bg-card transition-all duration-300 group">
          <div className="flex items-center gap-1 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-500">
              <Cloud className="size-3" />
            </div>
            <span className="text-[9px] font-bold text-foreground">Data Lake</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[7.5px] text-muted-foreground truncate">AWS S3 / Azure Blob</span>
            <span className="text-[7px] text-emerald-400 font-mono">JSON / Parquet Map</span>
          </div>
          <div className="mt-1 bg-emerald-500/10 text-emerald-500 text-[6.5px] px-1 py-0.25 rounded w-max font-semibold">
            Streaming
          </div>
        </div>
      </div>

      {/* 4. Event Stream Queuing (Bottom Right) */}
      <div className="absolute right-4 top-[75%] -translate-y-1/2 z-10 w-[120px]">
        <div className="flex flex-col p-2 rounded-xl border border-rose-500/20 bg-card/75 backdrop-blur-xs shadow-sm hover:border-rose-500/40 hover:scale-105 hover:bg-card transition-all duration-300 group">
          <div className="flex items-center gap-1 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-rose-500/10 text-rose-500">
              <Activity className="size-3 animate-[pulse_2s_infinite]" />
            </div>
            <span className="text-[9px] font-bold text-foreground">Event Stream</span>
          </div>
          <div className="flex flex-col mt-0.5">
            <span className="text-[7.5px] font-bold text-foreground leading-none truncate">Kafka / RabbitMQ</span>
            <span className="text-[6.5px] text-muted-foreground leading-none mt-1">Flow: 450 req/s</span>
          </div>
          <div className="mt-1.5 h-1 w-full bg-muted/40 rounded-full overflow-hidden">
            <div className="h-full w-[78%] bg-rose-500 rounded-full animate-[pulse_2.5s_infinite]" />
          </div>
        </div>
      </div>

      {/* Info Overlay Bottom Panel */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-muted-foreground/60 border-t border-border/20 pt-3 pointer-events-none">
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
          <span>ROUTE GATEWAY: ACTIVE</span>
        </div>
        <span>ENCRYPTED TRANSACTION PIPELINE</span>
      </div>
    </div>
  );
}
