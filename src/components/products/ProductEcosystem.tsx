"use client";

import { useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Database, Users, Network, Code, Globe, ShoppingBag, ShieldAlert } from "lucide-react";

interface NodeData {
  id: string;
  name: string;
  type: "product" | "external";
  x: number;
  y: number;
  icon: ComponentType<{ size?: number }>;
  color: string;
  description: string;
  capabilities: string[];
}

export function ProductEcosystem() {
  const [hoveredNode, setHoveredNode] = useState<NodeData | null>(null);

  const nodes: NodeData[] = [
    {
      id: "brainai",
      name: "BrainAI",
      type: "product",
      x: 250,
      y: 200,
      icon: Cpu,
      color: "text-primary border-primary bg-primary/5",
      description: "Cognitive Intelligence Layer orchestrating all data flows and predictive metrics.",
      capabilities: ["LLM Assistants", "Document Parsing", "Predictive Analytics"]
    },
    {
      id: "brainerp",
      name: "BrainERP",
      type: "product",
      x: 100,
      y: 100,
      icon: Database,
      color: "text-violet-400 border-violet-500 bg-violet-500/5",
      description: "Enterprise operations core managing ledgers, inventory, and supply lines.",
      capabilities: ["Finance", "Inventory Control", "Procurement Automation"]
    },
    {
      id: "braincrm",
      name: "BrainCRM",
      type: "product",
      x: 400,
      y: 100,
      icon: Users,
      color: "text-amber-500 border-amber-500 bg-amber-500/5",
      description: "Unified relationship manager linking pipelines, customer 360, and support channels.",
      capabilities: ["Lead Scoring", "Pipeline Forecasts", "Customer 360 View"]
    },
    {
      id: "brainconnect",
      name: "BrainConnect",
      type: "product",
      x: 250,
      y: 350,
      icon: Network,
      color: "text-secondary border-secondary bg-secondary/5",
      description: "High-throughput messaging queue connecting internal assets to external targets.",
      capabilities: ["API Gateway", "Kafka Events", "Change Data Capture"]
    },
    // External Systems
    {
      id: "legacy",
      name: "Legacy Apps",
      type: "external",
      x: 60,
      y: 280,
      icon: ShieldAlert,
      color: "text-rose-400 border-rose-500/30 bg-rose-500/5",
      description: "On-Premises or legacy backends connected via secure modernization pipes.",
      capabilities: ["AS400 Mainframes", "COBOL Code Bases", "Direct Database Bridges"]
    },
    {
      id: "ecommerce",
      name: "eCommerce",
      type: "external",
      x: 440,
      y: 280,
      icon: ShoppingBag,
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/5",
      description: "Digital web storefront systems feeding customer logs into BrainCRM.",
      capabilities: ["Storefront Catalogs", "Transaction Handlers", "Cart Analytics"]
    },
    {
      id: "apis",
      name: "External APIs",
      type: "external",
      x: 100,
      y: 450,
      icon: Code,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
      description: "Third-party application endpoints connected via REST and GraphQL engines.",
      capabilities: ["Payment Integrations", "Shipping webhooks", "Identity Providers"]
    },
    {
      id: "cloud",
      name: "Cloud Storage",
      type: "external",
      x: 400,
      y: 450,
      icon: Globe,
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
      description: "Distributed cloud buckets and datalakes parsed by BrainAI OCR models.",
      capabilities: ["Amazon S3", "Azure Blob", "Google Cloud Storage"]
    }
  ];

  // Map out connection lines from nodes
  // Central node (BrainAI) connects to core products and core products connect to external integrations.
  const connections = [
    { from: "brainai", to: "brainerp", color: "stroke-primary/30" },
    { from: "brainai", to: "braincrm", color: "stroke-primary/30" },
    { from: "brainai", to: "brainconnect", color: "stroke-primary/30" },
    { from: "brainconnect", to: "legacy", color: "stroke-secondary/20" },
    { from: "brainconnect", to: "apis", color: "stroke-secondary/20" },
    { from: "brainconnect", to: "cloud", color: "stroke-secondary/20" },
    { from: "braincrm", to: "ecommerce", color: "stroke-amber-500/20" },
    { from: "brainerp", to: "legacy", color: "stroke-violet-500/20" }
  ];

  const getNodeCoords = (id: string) => {
    const node = nodes.find((n) => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <section className="py-24 bg-card/10 border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand/5 opacity-40 pointer-events-none" />
      <Container className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Col: Explanatory Copy */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 border border-secondary/20">
            Enterprise Architecture
          </span>
          <h2 className="text-heading-2 font-bold tracking-tight">
            Connected Enterprise Ecosystem
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Brainzon platforms operate as an interconnected ecosystem. <strong>BrainAI</strong> serves as the unified cognitive layer, analyzing operational flows from <strong>BrainERP</strong>, customer engagement from <strong>BrainCRM</strong>, and data transactions routed by <strong>BrainConnect</strong>.
          </p>
          <div className="p-5 rounded-2xl border border-border bg-card-opaque shadow-sm text-xs text-muted-foreground space-y-2">
            <span className="font-bold text-foreground block">💡 Interactivity Tip</span>
            Hover over any node in the architectural map to view its integration summary and detailed capabilities.
          </div>
        </div>

        {/* Right Col: Interactive Visual Map */}
        <div className="lg:col-span-7 relative bg-card-opaque border border-border/80 rounded-3xl p-6 sm:p-10 shadow-card min-h-[550px] flex items-center justify-center overflow-x-auto">
          <div className="relative w-[500px] h-[500px] shrink-0">
            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
              <defs>
                <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {connections.map((conn, idx) => {
                const start = getNodeCoords(conn.from);
                const end = getNodeCoords(conn.to);
                return (
                  <g key={idx}>
                    <motion.path
                      d={`M ${start.x} ${start.y} Q ${(start.x + end.x) / 2} ${(start.y + end.y) / 2 - 20} ${end.x} ${end.y}`}
                      fill="none"
                      className={conn.color}
                      strokeWidth="2"
                    />
                    {/* Animated moving dash pulse */}
                    <motion.path
                      d={`M ${start.x} ${start.y} Q ${(start.x + end.x) / 2} ${(start.y + end.y) / 2 - 20} ${end.x} ${end.y}`}
                      fill="none"
                      stroke="url(#primaryGrad)"
                      strokeWidth="2"
                      strokeDasharray="10 15"
                      animate={{ strokeDashoffset: [-30, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Render Nodes */}
            {nodes.map((node) => {
              const Icon = node.icon;
              const isProduct = node.type === "product";
              return (
                <div
                  key={node.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                  style={{ top: node.y, left: node.x }}
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`flex items-center justify-center rounded-2xl border bg-card-opaque transition-all duration-300 shadow-sm ${node.color} ${isProduct ? "size-14" : "size-12"}`}
                  >
                    <Icon size={isProduct ? 24 : 18} />
                  </motion.div>
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 text-[10px] font-bold text-foreground bg-card-opaque/90 px-1.5 py-0.5 rounded border border-border/40 whitespace-nowrap shadow-xs">
                    {node.name}
                  </span>
                </div>
              );
            })}

            {/* Hover Tooltip Overlay */}
            <AnimatePresence>
              {hoveredNode && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="absolute bottom-4 left-4 right-4 z-30 p-5 rounded-2xl border border-border bg-card-opaque shadow-elevated"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${hoveredNode.type === "product" ? "bg-primary/10 text-primary border border-primary/20" : "bg-muted text-muted-foreground border border-border"}`}>
                      {hoveredNode.type === "product" ? "Core Platform" : "System Target"}
                    </span>
                    <h4 className="text-sm font-bold text-foreground">{hoveredNode.name}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{hoveredNode.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {hoveredNode.capabilities.map((c) => (
                      <span key={c} className="text-[9px] font-semibold bg-muted/60 text-foreground border border-border/50 px-2 py-0.5 rounded">
                        {c}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </Container>
    </section>
  );
}
