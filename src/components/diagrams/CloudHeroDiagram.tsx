"use client";

import React, { useState } from "react";
import { 
  Cloud, 
  Server, 
  ShieldCheck, 
  GitBranch, 
  Activity, 
  Cpu,
  Globe,
  HardDrive
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CloudHeroDiagramProps {
  className?: string;
}

const cloudNodes = [
  {
    id: "aws",
    title: "AWS Cloud Infra",
    icon: Server,
    tech: "EC2 / S3 / Lambda",
    color: "primary",
    coords: { x: 75, y: 75 },
    desc: "Multi-AZ AWS Auto-Scaling Infrastructure"
  },
  {
    id: "devops",
    title: "DevOps & GitOps",
    icon: GitBranch,
    tech: "Terraform / CI/CD",
    color: "accent",
    coords: { x: 75, y: 225 },
    desc: "Automated Infrastructure-as-Code Pipelines"
  },
  {
    id: "azure_gcp",
    title: "Azure & GCP Mesh",
    icon: Globe,
    tech: "AKS / GKE Clusters",
    color: "primary",
    coords: { x: 325, y: 75 },
    desc: "Hybrid Multi-Cloud Kubernetes Service Mesh"
  },
  {
    id: "monitoring",
    title: "24/7 Telemetry",
    icon: Activity,
    tech: "Datadog / Prometheus",
    color: "secondary",
    coords: { x: 325, y: 225 },
    desc: "Real-time Telemetry & Security Incident Alerts"
  }
];

export function CloudHeroDiagram({ className }: CloudHeroDiagramProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const activeObj = cloudNodes.find((n) => n.id === hoveredNode);

  return (
    <div className={cn(
      "relative w-full h-[350px] border border-border/40 rounded-3xl bg-surface/30 backdrop-blur-md overflow-hidden flex items-center justify-center transition-all duration-300 shadow-glow-primary group",
      className
    )}>
      {/* Tech grid backdrop */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(30,51,77,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

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
            animation: spin-slow 16s linear infinite;
          }
          .spin-concentric-rev {
            transform-origin: 200px 150px;
            animation: spin-slow 11s linear infinite reverse;
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
          stroke="var(--primary)" 
          className={cn("circuit-flow-in", hoveredNode === "aws" ? "opacity-100" : "opacity-60")} 
          strokeWidth={hoveredNode === "aws" ? 2.5 : 1.5} 
        />
        <path 
          d="M 75 225 C 130 225, 150 150, 200 150" 
          stroke="var(--accent)" 
          className={cn("circuit-flow-in", hoveredNode === "devops" ? "opacity-100" : "opacity-60")} 
          strokeWidth={hoveredNode === "devops" ? 2.5 : 1.5} 
        />
        <path 
          d="M 200 150 C 250 150, 270 75, 325 75" 
          stroke="var(--primary)" 
          className={cn("circuit-flow-out", hoveredNode === "azure_gcp" ? "opacity-100" : "opacity-60")} 
          strokeWidth={hoveredNode === "azure_gcp" ? 2.5 : 1.5} 
        />
        <path 
          d="M 200 150 C 250 150, 270 225, 325 225" 
          stroke="var(--secondary)" 
          className={cn("circuit-flow-out", hoveredNode === "monitoring" ? "opacity-100" : "opacity-60")} 
          strokeWidth={hoveredNode === "monitoring" ? 2.5 : 1.5} 
        />

        {/* Concentric Rotating Rings */}
        <circle cx="200" cy="150" r="32" stroke="var(--primary)" strokeWidth="0.75" strokeDasharray="4 8" className="opacity-45 spin-concentric" />
        <circle cx="200" cy="150" r="44" stroke="var(--accent)" strokeWidth="0.75" strokeDasharray="6 12" className="opacity-35 spin-concentric-rev" />
      </svg>

      {/* ================= LEFT COLUMN NODES ================= */}
      {/* Node 1: AWS Cloud Infra */}
      <div 
        className="absolute left-3 top-[25%] -translate-y-1/2 z-10 w-[130px] cursor-pointer"
        onMouseEnter={() => setHoveredNode("aws")}
        onMouseLeave={() => setHoveredNode(null)}
      >
        <div className={cn(
          "flex flex-col p-2.5 rounded-xl border bg-card/85 backdrop-blur-xs shadow-sm transition-all duration-300 group",
          hoveredNode === "aws" 
            ? "border-primary shadow-[0_0_15px_rgba(6,182,212,0.3)] scale-105 bg-card" 
            : "border-primary/20 hover:border-primary/40"
        )}>
          <div className="flex items-center gap-1.5 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Server className="size-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[9px] font-bold text-foreground truncate">AWS Cloud Infra</span>
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Compute:</span>
              <span className="text-primary font-bold">EC2 / Lambda</span>
            </div>
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Availability:</span>
              <span className="text-emerald-500 font-bold">99.99% Multi-AZ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Node 2: DevOps & GitOps */}
      <div 
        className="absolute left-3 bottom-[25%] translate-y-1/2 z-10 w-[130px] cursor-pointer"
        onMouseEnter={() => setHoveredNode("devops")}
        onMouseLeave={() => setHoveredNode(null)}
      >
        <div className={cn(
          "flex flex-col p-2.5 rounded-xl border bg-card/85 backdrop-blur-xs shadow-sm transition-all duration-300 group",
          hoveredNode === "devops" 
            ? "border-accent shadow-[0_0_15px_rgba(234,179,8,0.3)] scale-105 bg-card" 
            : "border-accent/20 hover:border-accent/40"
        )}>
          <div className="flex items-center gap-1.5 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-accent/10 text-accent">
              <GitBranch className="size-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[9px] font-bold text-foreground truncate">DevOps & GitOps</span>
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>IaC Engine:</span>
              <span className="text-accent font-bold">Terraform</span>
            </div>
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Deploy Pipeline:</span>
              <span className="text-emerald-500 font-bold">Automated CI</span>
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
                ● SYNCED
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center">
              <div className="flex size-7 items-center justify-center rounded-xl bg-primary/10 text-primary mb-1">
                <Cloud className="size-4 animate-pulse" />
              </div>
              <span className="text-[7.5px] font-mono font-extrabold text-foreground uppercase tracking-wider">
                CLOUD HUB
              </span>
              <span className="text-[6.5px] font-mono text-primary font-bold tracking-tighter">
                MULTI-REGION
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ================= RIGHT COLUMN NODES ================= */}
      {/* Node 3: Azure & GCP Mesh */}
      <div 
        className="absolute right-3 top-[25%] -translate-y-1/2 z-10 w-[130px] cursor-pointer"
        onMouseEnter={() => setHoveredNode("azure_gcp")}
        onMouseLeave={() => setHoveredNode(null)}
      >
        <div className={cn(
          "flex flex-col p-2.5 rounded-xl border bg-card/85 backdrop-blur-xs shadow-sm transition-all duration-300 group",
          hoveredNode === "azure_gcp" 
            ? "border-primary shadow-[0_0_15px_rgba(6,182,212,0.3)] scale-105 bg-card" 
            : "border-primary/20 hover:border-primary/40"
        )}>
          <div className="flex items-center gap-1.5 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Globe className="size-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[9px] font-bold text-foreground truncate">Azure & GCP Mesh</span>
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Service Mesh:</span>
              <span className="text-primary font-bold">AKS / GKE K8s</span>
            </div>
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Routing:</span>
              <span className="text-emerald-500 font-bold">Global DNS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Node 4: 24/7 Telemetry */}
      <div 
        className="absolute right-3 bottom-[25%] translate-y-1/2 z-10 w-[130px] cursor-pointer"
        onMouseEnter={() => setHoveredNode("monitoring")}
        onMouseLeave={() => setHoveredNode(null)}
      >
        <div className={cn(
          "flex flex-col p-2.5 rounded-xl border bg-card/85 backdrop-blur-xs shadow-sm transition-all duration-300 group",
          hoveredNode === "monitoring" 
            ? "border-secondary shadow-[0_0_15px_rgba(239,68,68,0.3)] scale-105 bg-card" 
            : "border-secondary/20 hover:border-secondary/40"
        )}>
          <div className="flex items-center gap-1.5 mb-1 border-b border-border/20 pb-1">
            <div className="flex size-5 items-center justify-center rounded-md bg-secondary/10 text-secondary">
              <Activity className="size-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[9px] font-bold text-foreground truncate">24/7 Security</span>
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Metrics:</span>
              <span className="text-secondary font-bold">Prometheus</span>
            </div>
            <div className="flex items-center justify-between text-[7.5px] text-muted-foreground font-mono">
              <span>Response:</span>
              <span className="text-emerald-500 font-bold">&lt;60s Auto-Alert</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar at Bottom */}
      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[8px] font-mono text-muted-foreground/70 border-t border-border/20 pt-1.5">
        <div className="flex items-center gap-1">
          <ShieldCheck className="size-2.5 text-emerald-500" />
          <span className="font-bold text-foreground">
            {activeObj ? activeObj.desc.toUpperCase() : "HOVER CLOUD NODES FOR TELEMETRY"}
          </span>
        </div>
        <span className="tracking-widest uppercase text-primary font-bold">HYBRID CLOUD PLATFORM</span>
      </div>
    </div>
  );
}
