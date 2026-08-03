"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Layout, 
  Network, 
  Database, 
  ShieldCheck, 
  Cpu,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomDevHeroDiagramProps {
  className?: string;
}

const serviceNodes = [
  {
    id: "saas",
    title: "SaaS Platforms",
    icon: Layout,
    tech: "Next.js / TS",
    color: "primary",
    coords: { x: 75, y: 75 },
    desc: "Multi-tenant SaaS & Role Auth"
  },
  {
    id: "microservices",
    title: "Microservices",
    icon: Network,
    tech: "Docker / K8s",
    color: "accent",
    coords: { x: 75, y: 225 },
    desc: "Event-driven microservices"
  },
  {
    id: "api",
    title: "API Gateways",
    icon: Zap,
    tech: "gRPC / GraphQL",
    color: "primary",
    coords: { x: 325, y: 75 },
    desc: "High-throughput validation"
  },
  {
    id: "ledger",
    title: "Ledger Systems",
    icon: Database,
    tech: "PostgreSQL ACID",
    color: "secondary",
    coords: { x: 325, y: 225 },
    desc: "Double-entry transaction audit"
  }
];

export function CustomDevHeroDiagram({ className }: CustomDevHeroDiagramProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const activeObj = serviceNodes.find((n) => n.id === hoveredNode);

  return (
    <div className={cn(
      "relative w-full h-[350px] border border-border/40 rounded-3xl bg-surface/30 backdrop-blur-md overflow-hidden flex items-center justify-center transition-all duration-300 shadow-glow-primary group",
      className
    )}>
      {/* Tech grid backdrop */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(30,51,77,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      {/* SVG Topology Connections */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 400 300"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <style>{`
          @keyframes dash-in {
            to { stroke-dashoffset: -40; }
          }
          @keyframes dash-out {
            to { stroke-dashoffset: -40; }
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
            to { transform: rotate(360deg); }
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
        <path d="M 75 75 C 130 75, 150 150, 200 150" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />
        <path d="M 75 225 C 130 225, 150 150, 200 150" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />
        <path d="M 200 150 C 250 150, 270 75, 325 75" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />
        <path d="M 200 150 C 250 150, 270 225, 325 225" stroke="currentColor" className="text-border/30" strokeWidth="1.5" />

        {/* Animated Active Circuit Flow Streams */}
        <path 
          d="M 75 75 C 130 75, 150 150, 200 150" 
          stroke={hoveredNode === "saas" ? "var(--primary)" : "var(--primary)"} 
          className={cn("circuit-flow-in", hoveredNode === "saas" ? "opacity-100" : "opacity-60")} 
          strokeWidth={hoveredNode === "saas" ? 2.5 : 1.5} 
        />
        <path 
          d="M 75 225 C 130 225, 150 150, 200 150" 
          stroke="var(--accent)" 
          className={cn("circuit-flow-in", hoveredNode === "microservices" ? "opacity-100" : "opacity-60")} 
          strokeWidth={hoveredNode === "microservices" ? 2.5 : 1.5} 
        />
        <path 
          d="M 200 150 C 250 150, 270 75, 325 75" 
          stroke="var(--primary)" 
          className={cn("circuit-flow-out", hoveredNode === "api" ? "opacity-100" : "opacity-60")} 
          strokeWidth={hoveredNode === "api" ? 2.5 : 1.5} 
        />
        <path 
          d="M 200 150 C 250 150, 270 225, 325 225" 
          stroke="var(--secondary)" 
          className={cn("circuit-flow-out", hoveredNode === "ledger" ? "opacity-100" : "opacity-60")} 
          strokeWidth={hoveredNode === "ledger" ? 2.5 : 1.5} 
        />

        {/* Concentric Rotating Rings */}
        <circle cx="200" cy="150" r="32" stroke="var(--primary)" strokeWidth="0.75" strokeDasharray="4 8" className="opacity-45 spin-concentric" />
        <circle cx="200" cy="150" r="42" stroke="var(--secondary)" strokeWidth="0.75" strokeDasharray="6 12" className="opacity-35 spin-concentric-rev" />
      </svg>

      {/* ================= LEFT COLUMN NODES ================= */}
      {/* Node 1: SaaS Platforms */}
      <div 
        className="absolute left-3 top-[25%] -translate-y-1/2 z-10 w-[130px] cursor-pointer"
        onMouseEnter={() => setHoveredNode("saas")}
        onMouseLeave={() => setHoveredNode(null)}
      >
        <div className={cn(
          "flex flex-col p-2.5 rounded-xl border bg-card/85 backdrop-blur-xs shadow-sm transition-all duration-300 group",
          hoveredNode === "saas" 
            ? "border-primary shadow-[0_0_15px_rgba(6,182,212,0.3)] scale-105 bg-card" 
            : "border-primary/20 hover:border-primary/40"
        )}>
          <div className="flex items-center gap-1.5 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Layout className="size-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[9px] font-bold text-foreground truncate">SaaS Architectures</span>
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Tenant:</span>
              <span className="text-primary font-bold">Multi-DB</span>
            </div>
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Security:</span>
              <span className="text-emerald-500 font-bold">RBAC Auth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Node 2: Microservices */}
      <div 
        className="absolute left-3 bottom-[25%] translate-y-1/2 z-10 w-[130px] cursor-pointer"
        onMouseEnter={() => setHoveredNode("microservices")}
        onMouseLeave={() => setHoveredNode(null)}
      >
        <div className={cn(
          "flex flex-col p-2.5 rounded-xl border bg-card/85 backdrop-blur-xs shadow-sm transition-all duration-300 group",
          hoveredNode === "microservices" 
            ? "border-accent shadow-[0_0_15px_rgba(234,179,8,0.3)] scale-105 bg-card" 
            : "border-accent/20 hover:border-accent/40"
        )}>
          <div className="flex items-center gap-1.5 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-accent/10 text-accent">
              <Network className="size-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[9px] font-bold text-foreground truncate">Microservices</span>
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Event Stream:</span>
              <span className="text-accent font-bold">Kafka/Redis</span>
            </div>
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Pods:</span>
              <span className="text-emerald-500 font-bold">K8s Scaling</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CENTER CORE HUB ================= */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className={cn(
          "relative size-18 rounded-2xl bg-card border border-primary/40 p-2.5 flex flex-col items-center justify-center backdrop-blur-md transition-all duration-300 cursor-pointer select-none",
          hoveredNode ? "border-primary scale-110 shadow-[0_0_20px_rgba(6,182,212,0.35)]" : "shadow-glow-primary animate-[pulse_4s_ease-in-out_infinite]"
        )}>
          {activeObj ? (
            <div className="flex flex-col items-center text-center animate-fade-in">
              <div className="flex size-7 items-center justify-center rounded-xl bg-primary/10 text-primary mb-1">
                <activeObj.icon className="size-4" />
              </div>
              <span className="text-[7px] font-mono font-bold text-foreground truncate max-w-[60px]">
                {activeObj.title}
              </span>
              <span className="text-[6px] font-mono text-primary font-bold">
                ● ACTIVE
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center">
              <div className="flex size-7 items-center justify-center rounded-xl bg-primary/10 text-primary mb-1">
                <Code2 className="size-4 animate-pulse" />
              </div>
              <span className="text-[7.5px] font-mono font-extrabold text-foreground uppercase tracking-wider">
                DEV CORE
              </span>
              <span className="text-[6.5px] font-mono text-primary font-bold tracking-tighter">
                ENGINEERING
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ================= RIGHT COLUMN NODES ================= */}
      {/* Node 3: API Gateways */}
      <div 
        className="absolute right-3 top-[25%] -translate-y-1/2 z-10 w-[130px] cursor-pointer"
        onMouseEnter={() => setHoveredNode("api")}
        onMouseLeave={() => setHoveredNode(null)}
      >
        <div className={cn(
          "flex flex-col p-2.5 rounded-xl border bg-card/85 backdrop-blur-xs shadow-sm transition-all duration-300 group",
          hoveredNode === "api" 
            ? "border-primary shadow-[0_0_15px_rgba(6,182,212,0.3)] scale-105 bg-card" 
            : "border-primary/20 hover:border-primary/40"
        )}>
          <div className="flex items-center gap-1.5 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Zap className="size-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[9px] font-bold text-foreground truncate">API Gateways</span>
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Protocol:</span>
              <span className="text-primary font-bold">gRPC/REST</span>
            </div>
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Latency:</span>
              <span className="text-emerald-500 font-bold">&lt;12ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Node 4: Ledger & Audit */}
      <div 
        className="absolute right-3 bottom-[25%] translate-y-1/2 z-10 w-[130px] cursor-pointer"
        onMouseEnter={() => setHoveredNode("ledger")}
        onMouseLeave={() => setHoveredNode(null)}
      >
        <div className={cn(
          "flex flex-col p-2.5 rounded-xl border bg-card/85 backdrop-blur-xs shadow-sm transition-all duration-300 group",
          hoveredNode === "ledger" 
            ? "border-secondary shadow-[0_0_15px_rgba(239,68,68,0.3)] scale-105 bg-card" 
            : "border-secondary/20 hover:border-secondary/40"
        )}>
          <div className="flex items-center gap-1.5 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-secondary/10 text-secondary">
              <Database className="size-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[9px] font-bold text-foreground truncate">Ledger Audits</span>
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Compliance:</span>
              <span className="text-secondary font-bold">ACID Double</span>
            </div>
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Audit Log:</span>
              <span className="text-emerald-500 font-bold">Immutable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar at Bottom */}
      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[8px] font-mono text-muted-foreground/70 border-t border-border/20 pt-1.5">
        <div className="flex items-center gap-1">
          <ShieldCheck className="size-2.5 text-emerald-500" />
          <span className="font-bold text-foreground">
            {activeObj ? activeObj.desc.toUpperCase() : "HOVER NODES TO INSPECT SPEC"}
          </span>
        </div>
        <span className="tracking-widest uppercase text-primary font-bold">TAILORED SAAS ENGINE</span>
      </div>
    </div>
  );
}
