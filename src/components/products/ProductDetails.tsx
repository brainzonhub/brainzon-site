"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getMenuIcon } from "@/components/navigation/menu-icons";
import { productsConfig } from "@/config/products";
import {
  DollarSign, Package, ShoppingCart, Cpu, Users, BarChart3, Target, LayoutDashboard,
  Mail, TrendingUp, Brain, AlertTriangle, Key, GitBranch, RefreshCw, Activity,
  ArrowRight, Check
} from "lucide-react";

// Helper to resolve detailed icons
function getDetailedIcon(name: string, className?: string) {
  const props = { className: className || "size-6", size: 24 };
  switch (name) {
    case "DollarSign": return <DollarSign {...props} />;
    case "Package": return <Package {...props} />;
    case "ShoppingCart": return <ShoppingCart {...props} />;
    case "Cpu": return <Cpu {...props} />;
    case "Users": return <Users {...props} />;
    case "BarChart3": return <BarChart3 {...props} />;
    case "Target": return <Target {...props} />;
    case "LayoutDashboard": return <LayoutDashboard {...props} />;
    case "Mail": return <Mail {...props} />;
    case "TrendingUp": return <TrendingUp {...props} />;
    case "Brain": return <Brain {...props} />;
    case "AlertTriangle": return <AlertTriangle {...props} />;
    case "Key": return <Key {...props} />;
    case "GitBranch": return <GitBranch {...props} />;
    case "RefreshCw": return <RefreshCw {...props} />;
    case "Activity": return <Activity {...props} />;
    default: return <Cpu {...props} />;
  }
}

export function ProductDetails() {
  const [activeTab, setActiveTab] = useState(productsConfig[0]!.slug);
  const activeProduct = productsConfig.find((p) => p.slug === activeTab) || productsConfig[0]!;

  // Helper to color active tabs
  const getTabColor = (slug: string, isActive: boolean) => {
    if (!isActive) return "border-transparent text-muted-foreground hover:text-foreground";
    switch (slug) {
      case "brainai": return "border-primary text-primary bg-primary/5";
      case "brainerp": return "border-violet-500 text-violet-400 bg-violet-500/5";
      case "braincrm": return "border-amber-500 text-amber-500 bg-amber-500/5";
      case "brainconnect": return "border-secondary text-secondary bg-secondary/5";
      default: return "border-primary text-primary bg-primary/5";
    }
  };

  const getThemeColorClass = (slug: string) => {
    switch (slug) {
      case "brainai": return "text-primary";
      case "brainerp": return "text-violet-400";
      case "braincrm": return "text-amber-500";
      case "brainconnect": return "text-secondary";
      default: return "text-primary";
    }
  };

  const getNodeColorClass = (type: string) => {
    switch (type) {
      case "core": return "bg-primary/10 border-primary/40 text-primary shadow-glow-primary";
      case "service": return "bg-violet-500/10 border-violet-500/30 text-violet-400";
      case "storage": return "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
      case "gateway": return "bg-secondary/10 border-secondary/30 text-secondary";
      default: return "bg-muted border-border";
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <Container className="space-y-12">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-heading-2 font-bold tracking-tight">
            Comprehensive Platform Deep Dive
          </h2>
          <p className="text-sm text-muted-foreground">
            Select a product below to explore its modular architecture, core features, benefits, and system integrations.
          </p>
        </div>

        {/* Tabs Control */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-muted/40 border border-border/80 max-w-2xl mx-auto">
          {productsConfig.map((product) => {
            const isActive = activeTab === product.slug;
            return (
              <button
                key={product.slug}
                type="button"
                onClick={() => setActiveTab(product.slug)}
                className={`flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold rounded-xl border transition-all duration-300 ${getTabColor(product.slug, isActive)}`}
              >
                {getMenuIcon(product.icon, { size: 14 })}
                <span>{product.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-12 gap-12 pt-8"
          >
            {/* Left Col: Capabilities & Benefits */}
            <div className="lg:col-span-7 space-y-10">
              {/* Product Intro */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Detailed Modules</span>
                <h3 className="text-2xl font-extrabold text-foreground">
                  {activeProduct.headline}
                </h3>
              </div>

              {/* Grid of detailed features */}
              <div className="grid sm:grid-cols-2 gap-6">
                {activeProduct.detailedFeatures.map((feat) => (
                  <div key={feat.title} className="p-5 rounded-2xl border border-border/50 bg-card-opaque shadow-sm flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl bg-muted border border-border/40 shrink-0 ${getThemeColorClass(activeProduct.slug)}`}>
                      {getDetailedIcon(feat.icon)}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-foreground">{feat.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits with key metrics */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Expected Business Outcomes</span>
                <div className="grid sm:grid-cols-3 gap-4">
                  {activeProduct.benefits.map((b) => (
                    <div key={b.title} className="p-5 rounded-2xl border border-border bg-card-opaque text-center relative overflow-hidden">
                      {/* Metric Callout */}
                      {b.metric && (
                        <div className={`text-3xl font-extrabold mb-1 tracking-tight ${getThemeColorClass(activeProduct.slug)}`}>
                          {b.metric}
                        </div>
                      )}
                      <h4 className="text-xs font-bold text-foreground mb-1">{b.title}</h4>
                      <p className="text-[10px] text-muted-foreground leading-relaxed">{b.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: System Architecture View & Integrations */}
            <div className="lg:col-span-5 space-y-8">
              {/* System Architecture Block */}
              <div className="p-6 sm:p-8 rounded-3xl border border-border bg-card-opaque shadow-card space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-foreground">{activeProduct.architecture.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{activeProduct.architecture.description}</p>
                </div>

                {/* Topology list */}
                <div className="space-y-4">
                  {activeProduct.architecture.layers.map((layer) => (
                    <div key={layer.name} className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{layer.name}</span>
                      <div className="flex flex-col gap-2">
                        {layer.nodes.map((node) => (
                          <div key={node.name} className={`flex items-center justify-between p-3 rounded-xl border text-xs ${getNodeColorClass(node.type)}`}>
                            <div>
                              <span className="font-bold block">{node.name}</span>
                              <span className="text-[10px] opacity-80 mt-0.5 block">{node.description}</span>
                            </div>
                            <span className="text-[9px] font-mono uppercase tracking-wider border border-current px-2 py-0.5 rounded-full shrink-0">
                              {node.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrations Chips */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Supported Integrations</span>
                <div className="flex flex-wrap gap-2">
                  {activeProduct.integrations.map((integration) => (
                    <span key={integration} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card-opaque text-xs font-medium text-foreground">
                      <Check size={12} className="text-emerald-500" />
                      {integration}
                    </span>
                  ))}
                </div>
              </div>

              {/* Product Direct CTA */}
              <div className="pt-2">
                <Link
                  href="/book-demo"
                  className="inline-flex w-full items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-foreground text-background hover:bg-foreground/90 transition-all font-semibold text-sm shadow-elevated"
                >
                  <span>Request Custom {activeProduct.name} Demo</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
