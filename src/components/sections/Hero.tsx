"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Shield, 
  Database, 
  Users, 
  Cpu, 
  Network, 
  Briefcase, 
  Package, 
  GitBranch, 
  RefreshCw, 
  Code2, 
  Cloud 
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const nodes = [
  {
    id: "erp",
    title: "BrainERP",
    icon: Database,
    type: "core",
    pos: "top-[20%] left-[50%]",
    coords: { x: 250, y: 100 },
    color: "primary",
    dur: "1.8s",
    desc: "Proprietary ERP engine managing Finance, Procurement, Manufacturing, and HR."
  },
  {
    id: "crm",
    title: "BrainCRM",
    icon: Users,
    type: "core",
    pos: "top-[50%] left-[20%]",
    coords: { x: 100, y: 250 },
    color: "secondary",
    dur: "2.0s",
    desc: "Advanced CRM engine tracking lead pipelines and automating campaign schedules."
  },
  {
    id: "ai",
    title: "BrainAI",
    icon: Cpu,
    type: "core",
    pos: "top-[50%] left-[80%]",
    coords: { x: 400, y: 250 },
    color: "accent",
    dur: "1.6s",
    desc: "Enterprise AI running cognitive model workflows and predictive forecasting."
  },
  {
    id: "connect",
    title: "BrainConnect",
    icon: Network,
    type: "core",
    pos: "top-[80%] left-[50%]",
    coords: { x: 250, y: 400 },
    color: "primary",
    dur: "2.2s",
    desc: "High-speed integration gateway bridging enterprise databases and API endpoints."
  },
  {
    id: "dynamics",
    title: "Dynamics 365 BC",
    icon: Briefcase,
    type: "partner",
    pos: "top-[18%] left-[24%]",
    coords: { x: 120, y: 90 },
    color: "primary",
    dur: "2.5s",
    desc: "Microsoft ERP modernization and custom power platform workflows."
  },
  {
    id: "odoo",
    title: "Odoo",
    icon: Package,
    type: "partner",
    pos: "top-[32%] left-[12%]",
    coords: { x: 60, y: 160 },
    color: "secondary",
    dur: "2.3s",
    desc: "Modular business system integrations and tailored app customizations."
  },
  {
    id: "erpnext",
    title: "ERPNext",
    icon: GitBranch,
    type: "partner",
    pos: "top-[68%] left-[12%]",
    coords: { x: 60, y: 340 },
    color: "accent",
    dur: "2.7s",
    desc: "Rapid open-source ERP setup, migration, and custom field automations."
  },
  {
    id: "modernization",
    title: "Modernization",
    icon: RefreshCw,
    type: "service",
    pos: "top-[18%] left-[76%]",
    coords: { x: 380, y: 90 },
    color: "secondary",
    dur: "2.6s",
    desc: "Refactoring legacy codebases into modern cloud-native architectures."
  },
  {
    id: "custom",
    title: "Custom Software",
    icon: Code2,
    type: "service",
    pos: "top-[32%] left-[88%]",
    coords: { x: 440, y: 160 },
    color: "primary",
    dur: "2.4s",
    desc: "Bespoke scalable applications built using React, Next.js, and Node.js."
  },
  {
    id: "cloud",
    title: "Cloud",
    icon: Cloud,
    type: "service",
    pos: "top-[68%] left-[88%]",
    coords: { x: 440, y: 340 },
    color: "accent",
    dur: "2.8s",
    desc: "High-resilience cloud architecture setup on AWS, Azure, and Google Cloud."
  }
];

export function Hero() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const activeNodeObj = nodes.find((n) => n.id === hoveredNode);
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-20 border-b border-border/40 bg-background transition-colors duration-300">
      {/* Dynamic background glows */}
      <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      {/* Decorative tech grid backdrop */}
      <div 
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading and copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="badge-accent animate-blink-accent">
              Enterprise Software, Reimagined
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1]">
              Architecting the <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(6,182,212,0.12)] dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                Next Era
              </span>{" "}
              of Enterprise Innovation
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Unifying proprietary ERP engines, pipeline CRMs, predictive AI, and cloud legacy modernization into one secure, high-resilience digital foundation.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="/solutions"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                )}
              >
                <span>Explore Ecosystem</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/40 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                <span>Consult an Expert</span>
                <ArrowRight size={16} className="text-primary" />
              </Link>
            </div>

            {/* Micro-trust banner */}
            <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground/80">
              <div className="flex size-6 items-center justify-center rounded-full bg-accent/10 border border-accent/20 text-accent shrink-0">
                <Shield size={12} />
              </div>
              <span>Built for ambitious teams modernizing what matters.</span>
            </div>
          </div>          {/* Right Column: Ecosystem Grid Connection Dashboard Graphic */}
          <div className="lg:col-span-6 flex justify-center relative w-full h-[400px] sm:h-[480px] md:h-[520px] -mt-4 lg:mt-0 lg:translate-y-[20px]">
            {/* SVG Topology Connections Map */}
            <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none" viewBox="0 0 500 500" preserveAspectRatio="none">
              {/* Glow Filters */}
              <defs>
                <filter id="glow-cyan-packet" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glow-red-packet" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glow-yellow-packet" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Dynamic Concentric Orbiting Rings for high-tech background */}
              <circle cx="250" cy="250" r="180" fill="none" stroke="currentColor" className="text-border/15" strokeWidth="1" strokeDasharray="6 8" />
              <circle cx="250" cy="250" r="100" fill="none" stroke="currentColor" className="text-border/10" strokeWidth="1" />
              <circle cx="250" cy="250" r="60" fill="none" stroke="currentColor" className="text-border/20" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Render dynamic connection lines */}
              {nodes.map((node) => {
                const isHovered = hoveredNode === node.id;
                const isCore = node.type === "core";
                let strokeColorClass = "text-border/55 dark:text-border/25";
                let glowFilter = undefined;
                let strokeWidth = isCore ? 2.0 : 1.25;

                if (isHovered) {
                  strokeWidth = isCore ? 3.0 : 2.0;
                  glowFilter = `url(#glow-${node.color}-packet)`;
                  if (node.color === "primary") strokeColorClass = "text-primary dark:text-cyan-400";
                  else if (node.color === "secondary") strokeColorClass = "text-secondary dark:text-red-400";
                  else strokeColorClass = "text-accent dark:text-yellow-300";
                }

                return (
                  <path
                    key={`line-${node.id}`}
                    d={`M 250 250 L ${node.coords.x} ${node.coords.y}`}
                    stroke="currentColor"
                    className={cn(strokeColorClass, "transition-all duration-300")}
                    strokeWidth={strokeWidth}
                    strokeDasharray={!isCore ? "4 4" : undefined}
                    filter={glowFilter}
                  />
                );
              })}

              {/* Render animated packet circles flying along connection paths */}
              {nodes.map((node) => {
                const isHovered = hoveredNode === node.id;
                let packetColor = "#06b6d4"; // default primary
                if (node.color === "secondary") packetColor = "#ef4444";
                else if (node.color === "accent") packetColor = "#eab308";

                const duration = isHovered ? "0.8s" : node.dur;

                return (
                  <circle
                    key={`packet-${node.id}`}
                    r={isHovered ? 4.5 : 2.5}
                    fill={packetColor}
                    filter={`url(#glow-${node.color}-packet)`}
                  >
                    <animateMotion dur={duration} repeatCount="indefinite" path={`M 250 250 L ${node.coords.x} ${node.coords.y}`} />
                  </circle>
                );
              })}
            </svg>

            {/* Center Hub Core */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-30">
              {/* Rotating outer frame rings */}
              <div className="absolute inset-[-12px] rounded-full border border-dashed border-primary/20 dark:border-primary/10 animate-[spin_25s_linear_infinite] pointer-events-none" />
              <div className="absolute inset-[-6px] rounded-full border border-primary/15 dark:border-primary/5 animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />

              <div 
                className={cn(
                  "relative size-36 sm:size-40 rounded-full bg-card/95 border border-border shadow-glow-primary flex flex-col items-center justify-center p-3 text-center backdrop-blur-md transition-all duration-300",
                  hoveredNode ? "border-primary/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] scale-[1.03]" : "shadow-glow-primary"
                )}
              >
                {activeNodeObj ? (
                  <div className="flex flex-col items-center animate-fade-in">
                    {/* Hovered node active display */}
                    <div className={cn(
                      "flex size-10 items-center justify-center rounded-xl p-2 mb-1.5 transition-colors",
                      activeNodeObj.color === "primary" ? "bg-primary/10 text-primary" :
                      activeNodeObj.color === "secondary" ? "bg-secondary/10 text-secondary" :
                      "bg-accent/10 text-accent"
                    )}>
                      <activeNodeObj.icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-foreground">
                      {activeNodeObj.title}
                    </span>
                    <p className="text-[8px] sm:text-[9px] text-muted-foreground leading-normal mt-1 line-clamp-3 px-1">
                      {activeNodeObj.desc}
                    </p>
                    <span className={cn(
                      "text-[7px] font-mono font-bold mt-1 tracking-widest uppercase",
                      activeNodeObj.color === "primary" ? "text-primary dark:text-cyan-300" :
                      activeNodeObj.color === "secondary" ? "text-secondary dark:text-red-400" :
                      "text-accent dark:text-yellow-300"
                    )}>
                      ● ONLINE
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="relative size-12 rounded-xl bg-card border border-border p-2 flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite]">
                      <Image
                        src="/icon.png"
                        alt="Brainzon Icon"
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[8px] font-mono font-semibold tracking-widest text-muted-foreground uppercase mt-2">
                      CORE INTEG-HUB
                    </span>
                    <span className="text-[7px] text-muted-foreground/60 mt-0.5 animate-pulse">
                      Hover nodes to scan
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Peripheral Nodes mapping */}
            {nodes.map((node) => {
              const isHovered = hoveredNode === node.id;
              let borderClass = "border-border bg-card/90";
              let hoverBorderClass = "";
              const shadowClass = "shadow-card";
              let iconBgClass = "bg-muted text-muted-foreground";

              if (node.color === "primary") {
                hoverBorderClass = "hover:border-primary hover:shadow-[0_0_15px_rgba(6,182,212,0.35)]";
                iconBgClass = isHovered ? "bg-primary/25 text-primary" : "bg-primary/10 text-primary";
                if (isHovered) {
                  borderClass = "border-primary shadow-[0_0_18px_rgba(6,182,212,0.45)] bg-card/95 scale-105";
                }
              } else if (node.color === "secondary") {
                hoverBorderClass = "hover:border-secondary hover:shadow-[0_0_15px_rgba(239,68,68,0.35)]";
                iconBgClass = isHovered ? "bg-secondary/25 text-secondary" : "bg-secondary/10 text-secondary";
                if (isHovered) {
                  borderClass = "border-secondary shadow-[0_0_18px_rgba(239,68,68,0.45)] bg-card/95 scale-105";
                }
              } else {
                hoverBorderClass = "hover:border-accent hover:shadow-[0_0_15px_rgba(234,179,8,0.35)]";
                iconBgClass = isHovered ? "bg-accent/25 text-accent" : "bg-accent/10 text-accent";
                if (isHovered) {
                  borderClass = "border-accent shadow-[0_0_18px_rgba(234,179,8,0.45)] bg-card/95 scale-105";
                }
              }

              return (
                <div 
                  key={node.id} 
                  className={cn("absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all", node.pos)}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-md transition-all duration-300 cursor-pointer group select-none",
                    borderClass,
                    hoverBorderClass,
                    shadowClass
                  )}>
                    <div className={cn("flex size-4 items-center justify-center rounded-full transition-colors", iconBgClass)}>
                      <node.icon size={10} />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-wider text-foreground">{node.title}</span>
                    {node.type === "core" && (
                      <span className={cn(
                        "size-1 rounded-full shrink-0",
                        isHovered ? "animate-ping" : "animate-pulse",
                        node.color === "primary" ? "bg-primary" :
                        node.color === "secondary" ? "bg-secondary" :
                        "bg-accent"
                      )} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hero Footer Bar: One Intelligent Foundation */}
        <div className="mt-8 md:mt-12 pt-8 border-t border-border/40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
            {/* Heading Block */}
            <div className="flex flex-col justify-center p-3 text-left">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="relative flex size-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-mono">Core Architecture</span>
              </div>
              <h3 className="text-xl font-extrabold text-foreground tracking-tight leading-snug">
                One Intelligent Foundation
              </h3>
              <p className="text-xs text-muted-foreground mt-2.5 leading-relaxed">
                Transforming enterprise workflows with secure, high-resilience systems built for scale.
              </p>
            </div>

            {/* Card 1: ERP & Operations */}
            <div className="flex flex-col justify-between p-5 rounded-2xl border border-border/40 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 group cursor-pointer text-left relative overflow-hidden">
              <span className="absolute top-4 right-4 text-[9px] font-mono text-primary/40 font-bold tracking-wider select-none">
                [SYS.01]
              </span>
              <div>
                <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Database size={16} />
                </div>
                <h4 className="text-[13px] font-bold text-foreground mt-4 group-hover:text-primary transition-colors duration-200">
                  ERP & Operations
                </h4>
                <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                  Streamline processes, optimize resources, and drive discrete manufacturing performance.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/30 flex items-center gap-2 text-[9px] font-mono text-primary">
                <span>●</span>
                <span>SYSTEM CORE</span>
              </div>
            </div>

            {/* Card 2: CRM & Growth */}
            <div className="flex flex-col justify-between p-5 rounded-2xl border border-border/40 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm hover:border-secondary/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] transition-all duration-300 group cursor-pointer text-left relative overflow-hidden">
              <span className="absolute top-4 right-4 text-[9px] font-mono text-secondary/40 font-bold tracking-wider select-none">
                [SYS.02]
              </span>
              <div>
                <div className="flex size-9 items-center justify-center rounded-xl bg-secondary/10 border border-secondary/20 text-secondary shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Users size={16} />
                </div>
                <h4 className="text-[13px] font-bold text-foreground mt-4 group-hover:text-secondary transition-colors duration-200">
                  CRM & Growth
                </h4>
                <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                  Deepen relationships, accelerate pipeline velocity, and automate outreach schedules.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/30 flex items-center gap-2 text-[9px] font-mono text-secondary">
                <span>●</span>
                <span>RELATIONAL LAYER</span>
              </div>
            </div>

            {/* Card 3: AI & Intelligence */}
            <div className="flex flex-col justify-between p-5 rounded-2xl border border-border/40 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(234,179,8,0.15)] transition-all duration-300 group cursor-pointer text-left relative overflow-hidden">
              <span className="absolute top-4 right-4 text-[9px] font-mono text-accent/40 font-bold tracking-wider select-none">
                [SYS.03]
              </span>
              <div>
                <div className="flex size-9 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-accent shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Cpu size={16} />
                </div>
                <h4 className="text-[13px] font-bold text-foreground mt-4 group-hover:text-accent transition-colors duration-200">
                  AI & Intelligence
                </h4>
                <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                  Embed predictive models, document reasoning pipelines, and conversational assistant features.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/30 flex items-center gap-2 text-[9px] font-mono text-accent">
                <span>●</span>
                <span>COGNITIVE LAYER</span>
              </div>
            </div>

            {/* Card 4: Legacy Modernization */}
            <div className="flex flex-col justify-between p-5 rounded-2xl border border-border/40 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 group cursor-pointer text-left relative overflow-hidden">
              <span className="absolute top-4 right-4 text-[9px] font-mono text-primary/40 font-bold tracking-wider select-none">
                [SYS.04]
              </span>
              <div>
                <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <GitBranch size={16} />
                </div>
                <h4 className="text-[13px] font-bold text-foreground mt-4 group-hover:text-primary transition-colors duration-200">
                  Legacy Modernization
                </h4>
                <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                  Re-platform monolithic databases into scalable containerized cloud microservices.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/30 flex items-center gap-2 text-[9px] font-mono text-primary">
                <span>●</span>
                <span>CLOUD TRANSITION</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
