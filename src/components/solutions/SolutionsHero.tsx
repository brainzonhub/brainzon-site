"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Database, Network, Users, Code, Cloud, Shield, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const diagramNodes = [
  {
    id: "ai",
    title: "BrainAI",
    icon: Cpu,
    type: "core",
    pos: "top-[12%] left-[50%]",
    coords: { x: 250, y: 60 },
    color: "accent",
    desc: "Proprietary AI engine running cognitive workflows, predictive models, and vector semantic searches."
  },
  {
    id: "erp",
    title: "BrainERP",
    icon: Database,
    type: "core",
    pos: "top-[30%] left-[15%]",
    coords: { x: 75, y: 150 },
    color: "primary",
    desc: "Enterprise Resource Planning platform managing finances, HR, inventories, and manufacturing ledgers."
  },
  {
    id: "crm",
    title: "BrainCRM",
    icon: Users,
    type: "core",
    pos: "top-[30%] left-[85%]",
    coords: { x: 425, y: 150 },
    color: "secondary",
    desc: "Advanced Customer Relationship Management platform tracking sales pipelines and lead outreach."
  },
  {
    id: "connect",
    title: "BrainConnect",
    icon: Network,
    type: "core",
    pos: "top-[50%] left-[50%]",
    coords: { x: 250, y: 250 },
    color: "primary",
    desc: "Event-driven ESB message broker syncing databases and high-throughput external API targets."
  },
  {
    id: "erpsystems",
    title: "ERP Systems",
    icon: Database,
    type: "connector",
    pos: "top-[70%] left-[15%]",
    coords: { x: 75, y: 350 },
    color: "primary",
    desc: "Integrations with legacy/partner systems like Microsoft Dynamics 365, Odoo, and SAP Core."
  },
  {
    id: "ecommerce",
    title: "eCommerce",
    icon: Cloud,
    type: "connector",
    pos: "top-[70%] left-[50%]",
    coords: { x: 250, y: 350 },
    color: "primary",
    desc: "Online shopping engines, transaction checkouts, and customer point-of-sale interfaces."
  },
  {
    id: "apis",
    title: "External APIs",
    icon: Code,
    type: "connector",
    pos: "top-[70%] left-[85%]",
    coords: { x: 425, y: 350 },
    color: "accent",
    desc: "Government tax reporting systems, shipping courier webhooks, and secure payment processors."
  },
  {
    id: "legacy",
    title: "Legacy Modernization",
    icon: RefreshCw,
    type: "modernization",
    pos: "top-[86%] left-[50%]",
    coords: { x: 250, y: 430 },
    color: "secondary",
    desc: "Aged monolithic codebases, mainframe SQL setups, and legacy on-premises applications."
  },
  {
    id: "cloud",
    title: "Modern Cloud Applications",
    icon: Cloud,
    type: "modernization",
    pos: "top-[96%] left-[50%]",
    coords: { x: 250, y: 480 },
    color: "primary",
    desc: "Decoupled serverless APIs and secure container runtimes deployed on Amazon Web Services or Azure."
  }
];

const connectionPaths = [
  // AI to ERP
  { id: "ai-to-erp", path: "M 250 75 L 250 110 H 75 L 75 135", color: "primary", dur: "2.4s" },
  // AI to CRM
  { id: "ai-to-crm", path: "M 250 75 L 250 110 H 425 L 425 135", color: "secondary", dur: "2.8s" },
  // ERP to Connect
  { id: "erp-to-connect", path: "M 75 165 L 75 200 H 250 L 250 235", color: "primary", dur: "2.2s" },
  // CRM to Connect
  { id: "crm-to-connect", path: "M 425 165 L 425 200 H 250 L 250 235", color: "secondary", dur: "2.5s" },
  // Connect to ERP Systems
  { id: "connect-to-erpsystems", path: "M 250 265 L 250 300 H 75 L 75 335", color: "primary", dur: "2.6s" },
  // Connect to eCommerce
  { id: "connect-to-ecommerce", path: "M 250 265 L 250 335", color: "primary", dur: "2.0s" },
  // Connect to External APIs
  { id: "connect-to-apis", path: "M 250 265 L 250 300 H 425 L 425 335", color: "accent", dur: "2.4s" },
  // Legacy to Cloud
  { id: "legacy-to-cloud", path: "M 250 445 L 250 465", color: "secondary", dur: "1.8s" }
];

export function SolutionsHero() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const isPathHighlighted = (pathId: string) => {
    if (!hoveredNodeId) return false;
    if (hoveredNodeId === "ai") return pathId.startsWith("ai-to-");
    if (hoveredNodeId === "erp") return pathId === "ai-to-erp" || pathId === "erp-to-connect";
    if (hoveredNodeId === "crm") return pathId === "ai-to-crm" || pathId === "crm-to-connect";
    if (hoveredNodeId === "connect") return pathId.endsWith("-to-connect") || pathId.startsWith("connect-to-");
    if (hoveredNodeId === "erpsystems") return pathId === "connect-to-erpsystems";
    if (hoveredNodeId === "ecommerce") return pathId === "connect-to-ecommerce";
    if (hoveredNodeId === "apis") return pathId === "connect-to-apis";
    if (hoveredNodeId === "legacy" || hoveredNodeId === "cloud") return pathId === "legacy-to-cloud";
    return false;
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 border-b border-border/40 bg-background transition-colors duration-300">
      {/* Dynamic background glows */}
      <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      {/* Grid backdrop */}
      <div 
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="badge-accent animate-blink-accent">
              Enterprise Technology Ecosystem
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Build The Intelligent{" "}
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(6,182,212,0.12)] dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                Enterprise Architecture
              </span>{" "}
              Of Tomorrow
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              From ERP and CRM platforms to AI, integrations, and cloud modernization, Brainzon designs complete technology ecosystems built around your business.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="#transformation-layers"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
                )}
              >
                <span>Start Your Transformation</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/book-demo"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/45 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200"
                )}
              >
                <span>Book Architecture Consultation</span>
                <ArrowRight size={16} className="text-primary" />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground/80">
              <div className="flex size-6 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary shrink-0">
                <Shield size={12} />
              </div>
              <span>Secure, stateless, and Strangler-compliant architectures.</span>
            </div>
          </div>

          {/* Right Column: Hierarchical Architecture Map */}
          <div className="lg:col-span-6 flex flex-col gap-4 w-full">
            {/* Diagram Container - Padding reduced to p-4 to let elements fill the frame */}
            <div className="relative w-full h-[520px] sm:h-[540px] md:h-[560px] rounded-2xl border border-border/40 bg-slate-900/5 dark:bg-card/25 backdrop-blur-sm overflow-hidden p-4 shadow-sm flex items-center justify-center">
              
              {/* SVG connections layout */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500" preserveAspectRatio="none">
                <defs>
                  <filter id="glow-cyan-line" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="glow-red-line" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="glow-yellow-line" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Draw high-contrast static and dynamic hierarchical lines */}
                {connectionPaths.map((conn) => {
                  const highlighted = isPathHighlighted(conn.id);
                  let strokeColorClass = "text-slate-300 dark:text-slate-800/80";
                  let filterGlow = undefined;
                  let strokeWidth = 1.75;

                  if (highlighted) {
                    strokeWidth = 3.0;
                    filterGlow = `url(#glow-${conn.color === "primary" ? "cyan" : conn.color === "secondary" ? "red" : "yellow"}-line)`;
                    if (conn.color === "primary") strokeColorClass = "text-primary dark:text-cyan-400";
                    else if (conn.color === "secondary") strokeColorClass = "text-secondary dark:text-red-400";
                    else strokeColorClass = "text-accent dark:text-yellow-300";
                  }

                  return (
                    <path 
                      key={conn.id}
                      d={conn.path}
                      fill="none"
                      stroke="currentColor"
                      className={cn(strokeColorClass, "transition-all duration-300")}
                      strokeWidth={strokeWidth}
                      filter={filterGlow}
                    />
                  );
                })}

                {/* Data packet flows */}
                {connectionPaths.map((conn) => {
                  const highlighted = isPathHighlighted(conn.id);
                  let packetColor = "#06b6d4"; // default primary
                  if (conn.color === "secondary") packetColor = "#ef4444";
                  else if (conn.color === "accent") packetColor = "#eab308";

                  const duration = highlighted ? "0.9s" : conn.dur;

                  return (
                    <circle 
                      key={`packet-${conn.id}`}
                      r={highlighted ? 4.5 : 2.5}
                      fill={packetColor}
                      filter={`url(#glow-${conn.color === "primary" ? "cyan" : conn.color === "secondary" ? "red" : "yellow"}-line)`}
                    >
                      <animateMotion dur={duration} repeatCount="indefinite" path={conn.path} />
                    </circle>
                  );
                })}
              </svg>

              {/* Hierarchical Nodes */}
              {diagramNodes.map((node) => {
                const isHovered = hoveredNodeId === node.id;
                let borderClass = "border-border bg-card/90";
                let hoverBorderClass = "";
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
                    className={cn("absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300", node.pos)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                  >
                    {/* Floating details tooltip - appears next to the hovered component */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className={cn(
                            "absolute z-40 bg-card/95 border border-border/80 p-3 rounded-xl shadow-elevated backdrop-blur-md w-48 text-left pointer-events-none",
                            // Position dynamically based on node placement to prevent edge clipping
                            node.id === "ai" ? "top-[115%] left-[50%] -translate-x-1/2" :
                            "bottom-[115%] left-[50%] -translate-x-1/2"
                          )}
                        >
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <div className={cn(
                              "flex size-4.5 items-center justify-center rounded text-primary bg-primary/10",
                              node.color === "secondary" && "text-secondary bg-secondary/10",
                              node.color === "accent" && "text-accent bg-accent/10"
                            )}>
                              <node.icon size={10} />
                            </div>
                            <span className="text-[10px] font-bold text-foreground font-mono uppercase tracking-wider">
                              {node.title}
                            </span>
                          </div>
                          <p className="text-[9px] text-muted-foreground leading-normal">
                            {node.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Node Card Button */}
                    <div className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-md transition-all duration-300 cursor-pointer group select-none shadow-sm",
                      borderClass,
                      hoverBorderClass
                    )}>
                      <div className={cn("flex size-4.5 items-center justify-center rounded-full transition-colors shrink-0", iconBgClass)}>
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
        </div>
      </Container>
    </section>
  );
}
