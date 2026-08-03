"use client";

import React from "react";
import { 
  Code2, 
  Cloud, 
  Database, 
  RefreshCw, 
  Wrench,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServicesHeroDiagramProps {
  className?: string;
}

export function ServicesHeroDiagram({ className }: ServicesHeroDiagramProps) {
  return (
    <div className={cn(
      "relative w-full h-[340px] border border-border/40 rounded-3xl bg-surface/30 backdrop-blur-md overflow-hidden flex items-center justify-center transition-all duration-300 shadow-glow-primary",
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
        <path d="M 70 75 C 130 75, 150 150, 200 150" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />
        <path d="M 70 225 C 130 225, 150 150, 200 150" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />
        <path d="M 200 150 C 250 150, 270 75, 330 75" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />
        <path d="M 200 150 C 250 150, 270 225, 330 225" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />

        {/* Animated Data Streams */}
        <path d="M 70 75 C 130 75, 150 150, 200 150" stroke="var(--primary)" className="opacity-70 circuit-flow-in" strokeWidth="1.5" />
        <path d="M 70 225 C 130 225, 150 150, 200 150" stroke="var(--accent)" className="opacity-70 circuit-flow-in" strokeWidth="1.5" />
        <path d="M 200 150 C 250 150, 270 75, 330 75" stroke="var(--primary)" className="opacity-70 circuit-flow-out" strokeWidth="1.5" />
        <path d="M 200 150 C 250 150, 270 225, 330 225" stroke="var(--secondary)" className="opacity-75 circuit-flow-out" strokeWidth="1.5" />

        {/* Decorative Concentric Rings around Central Core */}
        <circle cx="200" cy="150" r="32" stroke="var(--primary)" strokeWidth="0.75" strokeDasharray="4 8" className="opacity-45 spin-concentric" />
        <circle cx="200" cy="150" r="40" stroke="var(--secondary)" strokeWidth="0.75" strokeDasharray="6 12" className="opacity-35 spin-concentric-rev" />
      </svg>

      {/* ================= LEFT COLUMN ================= */}
      {/* 1. Custom Software (Top Left) */}
      <div className="absolute left-4 top-[25%] -translate-y-1/2 z-10 w-[125px]">
        <div className="flex flex-col p-2.5 rounded-xl border border-primary/20 bg-card/85 backdrop-blur-xs shadow-sm hover:border-primary/40 hover:scale-105 transition-all duration-300 group">
          <div className="flex items-center gap-1.5 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Code2 className="size-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[9px] font-bold text-foreground truncate">Custom SaaS</span>
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Stack:</span>
              <span className="text-primary font-bold">TypeScript</span>
            </div>
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>API:</span>
              <span className="text-emerald-500 font-bold">GraphQL</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Cloud Setup (Bottom Left) */}
      <div className="absolute left-4 bottom-[25%] translate-y-1/2 z-10 w-[125px]">
        <div className="flex flex-col p-2.5 rounded-xl border border-accent/20 bg-card/85 backdrop-blur-xs shadow-sm hover:border-accent/40 hover:scale-105 transition-all duration-300 group">
          <div className="flex items-center gap-1.5 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-accent/10 text-accent">
              <Cloud className="size-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[9px] font-bold text-foreground truncate">Cloud & DevOps</span>
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Cluster:</span>
              <span className="text-accent font-bold">AWS / K8s</span>
            </div>
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Uptime:</span>
              <span className="text-emerald-500 font-bold">99.99%</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CENTER CORE ================= */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative size-16 rounded-2xl bg-card border border-primary/40 shadow-glow-primary p-2 flex flex-col items-center justify-center backdrop-blur-md animate-[pulse_4s_ease-in-out_infinite] group cursor-pointer">
          <div className="flex size-7 items-center justify-center rounded-xl bg-primary/10 text-primary mb-1">
            <Wrench className="size-4 animate-spin [animation-duration:8s]" />
          </div>
          <span className="text-[7.5px] font-mono font-extrabold text-foreground uppercase tracking-widest">
            SERVICES
          </span>
          <span className="text-[6.5px] font-mono text-primary font-bold tracking-tighter">
            ENGINE
          </span>
        </div>
      </div>

      {/* ================= RIGHT COLUMN ================= */}
      {/* 3. ERP Systems (Top Right) */}
      <div className="absolute right-4 top-[25%] -translate-y-1/2 z-10 w-[125px]">
        <div className="flex flex-col p-2.5 rounded-xl border border-primary/20 bg-card/85 backdrop-blur-xs shadow-sm hover:border-primary/40 hover:scale-105 transition-all duration-300 group">
          <div className="flex items-center gap-1.5 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Database className="size-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[9px] font-bold text-foreground truncate">ERP Consulting</span>
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Engine:</span>
              <span className="text-primary font-bold">Odoo/BC</span>
            </div>
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Auditing:</span>
              <span className="text-emerald-500 font-bold">Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Legacy Refactoring (Bottom Right) */}
      <div className="absolute right-4 bottom-[25%] translate-y-1/2 z-10 w-[125px]">
        <div className="flex flex-col p-2.5 rounded-xl border border-secondary/20 bg-card/85 backdrop-blur-xs shadow-sm hover:border-secondary/40 hover:scale-105 transition-all duration-300 group">
          <div className="flex items-center gap-1.5 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-secondary/10 text-secondary">
              <RefreshCw className="size-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[9px] font-bold text-foreground truncate">Modernization</span>
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Refactor:</span>
              <span className="text-secondary font-bold">Monolith</span>
            </div>
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Target:</span>
              <span className="text-emerald-500 font-bold">Microservice</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar at Bottom */}
      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[8px] font-mono text-muted-foreground/70 border-t border-border/20 pt-1.5">
        <div className="flex items-center gap-1">
          <CheckCircle2 className="size-2.5 text-emerald-500" />
          <span className="font-bold text-foreground">DELIVERY READY</span>
        </div>
        <span className="tracking-widest uppercase">PRO-SERVICES SUITE</span>
      </div>
    </div>
  );
}
