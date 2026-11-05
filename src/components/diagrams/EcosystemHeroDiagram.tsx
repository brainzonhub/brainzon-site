"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  GitBranch, 
  RefreshCw, 
  Code2, 
  Cloud 
} from "lucide-react";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { OdooIcon, Dynamics365BCIcon } from "@/components/navigation/menu-icons";
import { cn } from "@/lib/utils";

export const ecosystemNodes = [
  {
    id: "erp",
    title: "BrainERP",
    icon: "brainerp",
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
    icon: "braincrm",
    type: "core",
    pos: "top-[50%] left-[20%]",
    coords: { x: 100, y: 250 },
    color: "secondary",
    dur: "2.0s",
    desc: "Advanced CRM engine tracking lead pipelines and automating campaign schedules."
  },
  {
    id: "mkt",
    title: "BrainMKT",
    icon: "brainmkt",
    type: "core",
    pos: "top-[50%] left-[80%]",
    coords: { x: 400, y: 250 },
    color: "accent",
    dur: "1.6s",
    desc: "Marketing management engine coordinating campaigns, content schedules, and lead handoffs."
  },
  {
    id: "books",
    title: "BrainBooks",
    icon: "brainbooks",
    type: "core",
    pos: "top-[80%] left-[50%]",
    coords: { x: 250, y: 400 },
    color: "primary",
    dur: "2.2s",
    desc: "Accounting management platform for structured ledgers, cash flow, and reconciliations."
  },
  {
    id: "dynamics",
    title: "Dynamics 365 BC",
    icon: Dynamics365BCIcon,
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
    icon: OdooIcon,
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

interface EcosystemHeroDiagramProps {
  className?: string;
}

export function EcosystemHeroDiagram({ className }: EcosystemHeroDiagramProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const activeNodeObj = ecosystemNodes.find((n) => n.id === hoveredNode);

  return (
    <div className={cn("flex justify-center relative w-full h-[400px] sm:h-[480px] md:h-[520px] -mt-4 lg:mt-0 lg:translate-y-[20px]", className)}>
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
        {ecosystemNodes.map((node) => {
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
        {ecosystemNodes.map((node) => {
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
                {typeof activeNodeObj.icon === "string" ? <ProductIcon product={activeNodeObj.icon} size={24} /> : <activeNodeObj.icon size={22} />}
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
              <div className="relative size-12 sm:size-14 rounded-2xl bg-[#009CB4]/10 dark:bg-[#009CB4]/15 border border-[#009CB4]/30 dark:border-[#009CB4]/45 flex items-center justify-center p-2 mb-1.5 shadow-[0_2px_12px_rgba(0,156,180,0.25)] animate-[pulse_4s_ease-in-out_infinite]">
                <div className="relative size-full">
                  <Image
                    src="/brainzon-brand-mark.png"
                    alt="Brainzon Brand Icon"
                    fill
                    sizes="56px"
                    className="object-contain drop-shadow-[0_2px_8px_rgba(0,156,180,0.25)]"
                    priority
                  />
                </div>
              </div>
              <span className="text-[9px] font-mono font-bold tracking-widest text-foreground uppercase mt-0.5">
                BRAINZON CORE
              </span>
              <span className="text-[7.5px] text-muted-foreground mt-0.5 animate-pulse">
                Hover nodes to inspect
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Peripheral Nodes mapping */}
      {ecosystemNodes.map((node) => {
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
                {typeof node.icon === "string" ? <ProductIcon product={node.icon} size={12} /> : <node.icon size={10} />}
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
  );
}
