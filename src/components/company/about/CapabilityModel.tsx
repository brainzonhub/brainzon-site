"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Cpu, Network, Database, Brain, Globe, Cloud, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";

interface LayerProps {
  index: number;
  title: string;
  subtitle: string;
  items: string[];
  icon: React.ReactNode;
  themeClass: string;
  lineColor: string;
}

function ArchitectureLayer({ index, title, subtitle, items, icon, themeClass, lineColor }: LayerProps) {
  return (
    <motion.div 
      className="flex flex-col items-center w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Vertical connector pipeline */}
      {index > 0 && (
        <div className="relative w-full h-12 flex justify-center items-center my-1">
          <div className={`absolute top-0 bottom-0 w-[2px] ${lineColor} opacity-50`} />
          <div className="absolute w-2 h-2 rounded-full bg-cyan-400 animate-[ping_2s_infinite]" />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_var(--primary)] animate-[bounce_2s_infinite]" />
        </div>
      )}

      {/* Layer glass card */}
      <div className={`relative w-full max-w-3xl rounded-2xl border border-border/40 bg-surface/30 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-glow-primary group`}>
        {/* Sci-Fi brackets */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/30 rounded-tl" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/30 rounded-tr" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/30 rounded-bl" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/30 rounded-br" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Icon & Title */}
          <div className="md:col-span-4 flex items-center gap-3">
            <div className={`flex size-10 items-center justify-center rounded-xl bg-card border border-border shrink-0 ${themeClass}`}>
              {icon}
            </div>
            <div>
              <span className="block text-[8px] font-mono text-muted-foreground/60 tracking-wider">LAYER 0{5 - index}</span>
              <h4 className="text-sm font-bold text-foreground tracking-tight">{title}</h4>
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-5 text-left md:border-l md:border-border/10 md:pl-4">
            <p className="text-[11px] sm:text-xs text-muted-foreground leading-normal font-medium">
              {subtitle}
            </p>
          </div>

          {/* Tag labels */}
          <div className="md:col-span-3 flex flex-wrap gap-1.5 justify-start md:justify-end">
            {items.map((item) => (
              <span 
                key={item} 
                className="text-[8px] font-mono font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-background/80 border border-border/20 text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CapabilityModel() {
  const layers = [
    {
      title: "Business Transformation",
      subtitle: "Unifying operations, logistics, customer experience, and business strategy to accelerate organizational efficiency.",
      items: ["SaaS Growth", "Compliance", "Audits"],
      icon: <Globe className="size-5 text-secondary" />,
      themeClass: "text-secondary border-secondary/20 shadow-glow-secondary/20",
      lineColor: "bg-gradient-to-b from-secondary to-primary"
    },
    {
      title: "Enterprise Applications",
      subtitle: "BrainERP for ledger and inventory automation. BrainCRM for pipeline acceleration and Customer 360 engagement.",
      items: ["BrainERP", "BrainCRM"],
      icon: <Database className="size-5 text-primary" />,
      themeClass: "text-primary border-primary/20 shadow-glow-primary/20",
      lineColor: "bg-gradient-to-b from-primary to-accent"
    },
    {
      title: "Intelligent Systems",
      subtitle: "Leveraging BrainAI for document intelligence parsing, supply chain predictive analytics, and local RAG models.",
      items: ["BrainAI", "LLM Pool"],
      icon: <Sparkles className="size-5 text-cyan-400" />,
      themeClass: "text-cyan-400 border-cyan-400/20 shadow-glow-primary/20",
      lineColor: "bg-gradient-to-b from-cyan-400 to-violet-500"
    },
    {
      title: "Integration Platform",
      subtitle: "Using BrainConnect for real-time Kafka queues, bi-directional Change-Data-Capture logs, and secure API gateways.",
      items: ["BrainConnect", "Webhooks"],
      icon: <Network className="size-5 text-violet-400" />,
      themeClass: "text-violet-400 border-violet-500/20 shadow-glow-secondary/20",
      lineColor: "bg-gradient-to-b from-violet-500 to-emerald-500"
    },
    {
      title: "Modern Cloud Architecture",
      subtitle: "Secure deployment models using AWS, Microsoft Azure, Google Cloud platform nodes, and Kubernetes clusters.",
      items: ["Multi-Cloud", "K8s", "DevOps"],
      icon: <Cloud className="size-5 text-emerald-400" />,
      themeClass: "text-emerald-400 border-emerald-500/20 shadow-glow-primary/20",
      lineColor: "bg-emerald-500"
    }
  ];

  return (
    <section className="relative py-24 bg-background border-b border-border/40 overflow-hidden">
      {/* Tech grid backdrop */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(30,51,77,0.04)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
            OUR TECHNOLOGY DNA
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-4">
            The Brainzon Capability Stack
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
            From low-level cloud nodes and integration pipelines to cognitive intelligence algorithms and strategic business transformation.
          </p>
        </div>

        {/* Vertically Stacked Architecture */}
        <div className="relative flex flex-col items-center max-w-4xl mx-auto">
          {layers.map((layer, idx) => (
            <ArchitectureLayer 
              key={layer.title}
              index={idx}
              title={layer.title}
              subtitle={layer.subtitle}
              items={layer.items}
              icon={layer.icon}
              themeClass={layer.themeClass}
              lineColor={layer.lineColor}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
