"use client";

import { useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { Megaphone, Database, Users, Receipt, Code, Globe, ShoppingBag, ShieldAlert } from "lucide-react";

interface NodeData {
  id: string;
  name: string;
  type: "product" | "external";
  x: number;
  y: number;
  icon: ComponentType<{ size?: number }> | string;
  color: string;
  description: string;
  capabilities: string[];
}

export function ProductEcosystem() {
  const [hoveredNode, setHoveredNode] = useState<NodeData | null>(null);

  const nodes: NodeData[] = [
    {
      id: "brainmkt",
      name: "BrainMKT",
      type: "product",
      x: 140,
      y: 120,
      icon: "brainmkt",
      color: "text-cyan-400 border-cyan-500 bg-cyan-500/5",
      description: "Marketing management engine coordinating campaigns, audiences, and lead handoffs.",
      capabilities: ["Campaign Planning", "Audience Segmentation", "BrainMKT AI Agent"]
    },
    {
      id: "braincrm",
      name: "BrainCRM",
      type: "product",
      x: 360,
      y: 120,
      icon: "braincrm",
      color: "text-amber-500 border-amber-500 bg-amber-500/5",
      description: "Customer relationship manager linking pipelines, customer 360, and support channels.",
      capabilities: ["Lead Qualification", "Visual Pipeline", "BrainCRM AI Agent"]
    },
    {
      id: "brainerp",
      name: "BrainERP",
      type: "product",
      x: 360,
      y: 320,
      icon: "brainerp",
      color: "text-violet-400 border-violet-500 bg-violet-500/5",
      description: "Enterprise operations core coordinating inventory, procurement, and manufacturing.",
      capabilities: ["Inventory Control", "Procurement POs", "BrainERP AI Agent"]
    },
    {
      id: "brainbooks",
      name: "BrainBooks",
      type: "product",
      x: 140,
      y: 320,
      icon: "brainbooks",
      color: "text-emerald-400 border-emerald-500 bg-emerald-500/5",
      description: "Structured double-entry accounting ledger with automated reconciliations and compliance.",
      capabilities: ["General Ledger", "AR / AP Workflows", "BrainBooks AI Agent"]
    },
    // External Systems
    {
      id: "legacy",
      name: "Legacy Systems",
      type: "external",
      x: 460,
      y: 450,
      icon: ShieldAlert,
      color: "text-rose-400 border-rose-500/30 bg-rose-500/5",
      description: "On-Premises or legacy backends connected via governed modernization APIs.",
      capabilities: ["Mainframes", "Legacy Databases", "Controlled Cutover"]
    },
    {
      id: "ecommerce",
      name: "eCommerce",
      type: "external",
      x: 480,
      y: 200,
      icon: ShoppingBag,
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/5",
      description: "Digital web storefront systems feeding customer orders into BrainCRM and BrainERP.",
      capabilities: ["Storefront Catalogs", "Transaction Handlers", "Cart Sync"]
    },
    {
      id: "apis",
      name: "Banking & Tax APIs",
      type: "external",
      x: 40,
      y: 450,
      icon: Code,
      color: "text-teal-400 border-teal-500/30 bg-teal-500/5",
      description: "Bank statement feeds and tax authority endpoints connected via secure bridges.",
      capabilities: ["Open Banking Feeds", "Payment Gateways", "Statutory Filings"]
    },
    {
      id: "cloud",
      name: "Ad Networks",
      type: "external",
      x: 40,
      y: 200,
      icon: Globe,
      color: "text-blue-400 border-blue-500/30 bg-blue-500/5",
      description: "External advertising platforms and social channels streaming campaign responses.",
      capabilities: ["Google Ads", "Meta Ads", "LinkedIn API"]
    }
  ];

  const connections = [
    { from: "brainmkt", to: "braincrm", color: "stroke-cyan-500/30" },
    { from: "braincrm", to: "brainerp", color: "stroke-amber-500/30" },
    { from: "brainerp", to: "brainbooks", color: "stroke-violet-500/30" },
    { from: "brainbooks", to: "brainmkt", color: "stroke-emerald-500/30" },
    { from: "brainmkt", to: "cloud", color: "stroke-blue-500/20" },
    { from: "braincrm", to: "ecommerce", color: "stroke-indigo-500/20" },
    { from: "brainerp", to: "legacy", color: "stroke-rose-500/20" },
    { from: "brainbooks", to: "apis", color: "stroke-teal-500/20" }
  ];

  const getNodeCoords = (id: string) => {
    const node = nodes.find((n) => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <section className="py-24 bg-card/20 border-y border-border/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />

      <Container className="space-y-16 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
            Interactive Ecosystem
          </span>
          <h2 className="text-heading-2 font-bold tracking-tight">
            One Connected Enterprise Foundation
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            BrainMKT, BrainCRM, BrainERP, and BrainBooks synchronize seamlessly. Hover over each node to view integration touchpoints and dedicated AI agent roles.
          </p>
        </div>

        {/* Diagram Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* SVG Map Canvas */}
          <div className="lg:col-span-2 relative h-[450px] w-full rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md p-4 flex items-center justify-center overflow-hidden">
            <svg
              className="absolute inset-0 size-full"
              viewBox="0 0 520 480"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Connection Curves */}
              {connections.map((c, i) => {
                const from = getNodeCoords(c.from);
                const to = getNodeCoords(c.to);
                return (
                  <path
                    key={i}
                    d={`M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${(from.y + to.y) / 2 - 20} ${to.x} ${to.y}`}
                    fill="none"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                    className={c.color}
                  />
                );
              })}
            </svg>

            {/* Nodes */}
            <div className="relative size-full">
              {nodes.map((node) => {
                const IconComponent = node.icon;
                const isHovered = hoveredNode?.id === node.id;
                return (
                  <motion.div
                    key={node.id}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center gap-2 group z-20`}
                    style={{ left: `${(node.x / 520) * 100}%`, top: `${(node.y / 480) * 100}%` }}
                    onMouseEnter={() => setHoveredNode(node)}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div
                      className={`size-12 rounded-2xl border flex items-center justify-center shadow-lg transition-all duration-300 ${node.color} ${
                        isHovered ? "ring-4 ring-primary/20 scale-110" : ""
                      }`}
                    >
                      {typeof node.icon === "string" ? <ProductIcon product={node.icon} size={26} /> : <IconComponent size={20} />}
                    </div>
                    <span className="text-[11px] font-bold text-foreground bg-card/80 px-2 py-0.5 rounded-md border border-border/40 backdrop-blur-sm whitespace-nowrap">
                      {node.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Details / Interactive Panel */}
          <div className="lg:col-span-1 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md p-6 h-[450px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {hoveredNode ? (
                <motion.div
                  key={hoveredNode.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <div className={`size-10 rounded-xl border flex items-center justify-center ${hoveredNode.color}`}>
                      {typeof hoveredNode.icon === "string" ? <ProductIcon product={hoveredNode.icon} size={24} /> : <hoveredNode.icon size={20} />}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground">
                        {hoveredNode.name}
                      </h4>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        {hoveredNode.type === "product" ? "Core Application" : "Integration Node"}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {hoveredNode.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">
                      Core Scope:
                    </span>
                    <ul className="space-y-1.5">
                      {hoveredNode.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="size-1.5 rounded-full bg-primary" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center size-full text-center space-y-4">
                  <div className="size-12 rounded-full border border-dashed border-border flex items-center justify-center text-muted-foreground">
                    <Database size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-foreground">
                      Explore the Connected Foundation
                    </h4>
                    <p className="text-xs text-muted-foreground max-w-xs">
                      Hover over any node in the topology diagram to reveal capability sets, data flows, and dedicated AI agent assistance.
                    </p>
                  </div>
                </div>
              )}
            </AnimatePresence>

            <div className="border-t border-border/50 pt-4 text-[11px] text-muted-foreground">
              Architecture: Business-led, Modular, API-first &amp; Observable
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
