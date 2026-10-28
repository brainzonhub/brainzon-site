"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp,
  Workflow
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ProductLogo, type ProductSlug } from "@/components/ui/ProductIcon";
import { cn } from "@/lib/utils";

type ProductTab = {
  id: ProductSlug;
  name: string;
  badge?: string;
  role: string;
  tag: string;
  headline: string;
  description: string;
  metric: string;
  metricLabel: string;
  metricSub: string;
  pillars: { title: string; desc: string }[];
  integrations: string[];
  color: "cyan" | "amber" | "violet" | "emerald";
  href: string;
};

const productsData: ProductTab[] = [
  {
    id: "brainmkt",
    name: "BrainMKT",
    badge: "New",
    role: "Marketing & Growth",
    tag: "Marketing Orchestration",
    headline: "Coordinate Campaigns, Audiences, and High-Velocity Growth",
    description: "Plan collaborative initiatives, orchestrate multi-channel publishing, segment audiences dynamically, and dispatch scored leads directly to CRM.",
    metric: "+45%",
    metricLabel: "Campaign Velocity",
    metricSub: "Faster execution from strategy planning to multi-channel dispatch.",
    pillars: [
      { title: "Campaign Planner", desc: "Collaborative marketing calendars, milestone dependencies, and creative asset approvals." },
      { title: "Audience Segmentation", desc: "Dynamic behavioral cohort lists with enterprise-grade privacy boundary controls." },
      { title: "CRM Lead Dispatcher", desc: "Instant event streaming to BrainCRM pipelines with complete touchpoint attribution." }
    ],
    integrations: ["BrainCRM", "Google Ads", "Meta Ads", "LinkedIn API"],
    color: "cyan",
    href: "/products/brainmkt"
  },
  {
    id: "braincrm",
    name: "BrainCRM",
    role: "Sales & Relationships",
    tag: "Customer Relationship Management",
    headline: "Unify Customer Journeys, Visual Pipelines, and Retention",
    description: "Maintain comprehensive Customer 360 profiles, visualize deal stages, automate follow-up schedules, and bridge customer service with sales operations.",
    metric: "24%",
    metricLabel: "Win Rate Gain",
    metricSub: "Increased closing velocity through automated lead qualification and follow-up.",
    pillars: [
      { title: "Customer 360", desc: "Centralized account records, relationship graphs, and chronological interaction history." },
      { title: "Visual Pipeline", desc: "Interactive Kanban deal stages, probability weighting, and revenue forecasting." },
      { title: "Service Coordination", desc: "Ticket dispatching, escalation tracking, and direct handoffs between support and sales." }
    ],
    integrations: ["BrainERP", "BrainMKT", "Twilio", "Zendesk", "Google Workspace"],
    color: "amber",
    href: "/products/braincrm"
  },
  {
    id: "brainerp",
    name: "BrainERP",
    role: "Supply Chain & Ops",
    tag: "Enterprise Resource Planning",
    headline: "Orchestrate Operations, Inventory, and Global Supply Chains",
    description: "Manage multi-warehouse inventory, automate procurement requisitions, track bills of materials, and sync production floors with financial ledgers.",
    metric: "99.98%",
    metricLabel: "Inventory Accuracy",
    metricSub: "Real-time multi-warehouse stock tracking with automated replenishment.",
    pillars: [
      { title: "Inventory & WMS", desc: "Multi-site stock tracking, barcode workflows, and predictive reorder triggers." },
      { title: "Procurement & POs", desc: "Automated vendor purchase requisitions, approval gates, and 3-way matching." },
      { title: "Manufacturing Queue", desc: "Discrete work orders, BOM capacity constraints, and production telemetry." }
    ],
    integrations: ["BrainCRM", "BrainBooks", "Shopify Plus", "Amazon FBA", "FedEx APIs"],
    color: "violet",
    href: "/products/brainerp"
  },
  {
    id: "brainbooks",
    name: "BrainBooks",
    badge: "New",
    role: "Accounting & Ledgers",
    tag: "Accounting & Ledger Intelligence",
    headline: "Automate General Ledgers, Bank Reconciliations, and Audits",
    description: "Deploy immutable double-entry bookkeeping, automate accounts payable/receivable, reconcile bank statement feeds, and maintain audit trails.",
    metric: "-18 Days",
    metricLabel: "DSO Reduction",
    metricSub: "Accelerated cash flow collections with automated invoice and bank matching.",
    pillars: [
      { title: "General Ledger", desc: "Immutable double-entry chart of accounts conforming to GAAP and IFRS standards." },
      { title: "AP / AR Automation", desc: "Automated invoice dispatch from ERP fulfillment and multi-bank feed matching." },
      { title: "Audit Trail & Tax", desc: "Complete journal entry provenance, statutory P&L reports, and closing automation." }
    ],
    integrations: ["BrainERP", "BrainCRM", "Plaid", "Stripe", "QuickBooks Importer"],
    color: "emerald",
    href: "/products/brainbooks"
  }
];

export function ProductEcosystem() {
  const [activeSlug, setActiveSlug] = useState<ProductSlug>("brainmkt");
  const activeProduct = productsData.find((p) => p.id === activeSlug) || productsData[0]!;

  const getThemeStyles = (color: ProductTab["color"]) => {
    switch (color) {
      case "cyan":
        return {
          tabActive: "border-cyan-500/60 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.2)]",
          glow: "bg-cyan-500/15",
          badge: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/25",
          accentText: "text-cyan-600 dark:text-cyan-400",
          metricCard: "border-cyan-500/30 bg-cyan-500/5",
          button: "bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm hover:shadow-cyan-500/25",
          dot: "bg-cyan-500",
          border: "border-cyan-500/30"
        };
      case "amber":
        return {
          tabActive: "border-amber-500/60 bg-amber-500/10 shadow-[0_0_20px_rgba(251,191,36,0.2)]",
          glow: "bg-amber-500/15",
          badge: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25",
          accentText: "text-amber-600 dark:text-amber-400",
          metricCard: "border-amber-500/30 bg-amber-500/5",
          button: "bg-amber-600 hover:bg-amber-700 text-white shadow-sm hover:shadow-amber-500/25",
          dot: "bg-amber-500",
          border: "border-amber-500/30"
        };
      case "violet":
        return {
          tabActive: "border-violet-500/60 bg-violet-500/10 shadow-[0_0_20px_rgba(167,139,250,0.2)]",
          glow: "bg-violet-500/15",
          badge: "text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/25",
          accentText: "text-violet-600 dark:text-violet-400",
          metricCard: "border-violet-500/30 bg-violet-500/5",
          button: "bg-violet-600 hover:bg-violet-700 text-white shadow-sm hover:shadow-violet-500/25",
          dot: "bg-violet-500",
          border: "border-violet-500/30"
        };
      case "emerald":
        return {
          tabActive: "border-emerald-500/60 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.2)]",
          glow: "bg-emerald-500/15",
          badge: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
          accentText: "text-emerald-600 dark:text-emerald-400",
          metricCard: "border-emerald-500/30 bg-emerald-500/5",
          button: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-emerald-500/25",
          dot: "bg-emerald-500",
          border: "border-emerald-500/30"
        };
    }
  };

  const theme = getThemeStyles(activeProduct.color);

  return (
    <section className="relative py-20 border-b border-border/40 bg-surface transition-colors duration-300 overflow-hidden">
      {/* Background ambient lighting */}
      <div className={cn("absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[120px] pointer-events-none opacity-40 transition-all duration-500", theme.glow)} />

      <Container className="relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
            One Connected Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Four Core Applications. One Unified Foundation.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Synchronize marketing, customer relationships, operational logistics, and financial ledgers across an integrated enterprise data fabric.
          </p>
        </div>

        {/* Interactive 4-Product Segmented Switcher */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {productsData.map((prod) => {
            const isSelected = prod.id === activeSlug;
            const tabTheme = getThemeStyles(prod.color);

            return (
              <button
                key={prod.id}
                type="button"
                onClick={() => setActiveSlug(prod.id)}
                className={cn(
                  "relative p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer group flex flex-col justify-between",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isSelected
                    ? cn("bg-card shadow-elevated border-2", tabTheme.tabActive)
                    : "border-border/60 bg-card/40 hover:bg-card/75 hover:border-border"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="py-1">
                    <ProductLogo
                      product={prod.id}
                      height={32}
                      className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
                      priority
                    />
                    <span className="sr-only">{prod.name}</span>
                  </div>
                  {prod.badge && (
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                      {prod.badge}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <p className="text-[11px] sm:text-xs text-muted-foreground font-medium truncate">
                    {prod.role}
                  </p>
                  {isSelected && (
                    <span className={cn("size-2 rounded-full animate-pulse shrink-0", tabTheme.dot)} />
                  )}
                </div>

                {/* Bottom active indicator line */}
                {isSelected && (
                  <motion.div
                    layoutId="activeProductPill"
                    className={cn("absolute -bottom-px left-4 right-4 h-0.5 rounded-full", tabTheme.dot)}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage: Interactive Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-3xl border border-border/80 bg-card/70 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-elevated"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Value Proposition & Pillars */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <ProductLogo
                      product={activeProduct.id}
                      height={32}
                      className="h-7 sm:h-8 w-auto object-contain"
                      priority
                    />
                    <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border", theme.badge)}>
                      <Activity size={12} />
                      {activeProduct.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                    {activeProduct.headline}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {activeProduct.description}
                  </p>
                </div>

                {/* 3 Core Capability Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {activeProduct.pillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="p-3.5 rounded-xl border border-border/50 bg-muted/15 space-y-1.5"
                    >
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className={theme.accentText} />
                        <h4 className="text-xs font-bold text-foreground truncate">{pillar.title}</h4>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Primary CTA Links */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    href={activeProduct.href}
                    className={cn(
                      "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200",
                      theme.button
                    )}
                  >
                    <span>Explore {activeProduct.name}</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/book-demo"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-border/80 bg-card hover:bg-muted/40 text-foreground transition-colors"
                  >
                    <span>Schedule Architecture Walkthrough</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Telemetry & Impact Card */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl border border-border/70 bg-muted/20 space-y-5">
                  
                  {/* Metric Spotlight */}
                  <div className={cn("p-4 rounded-xl border flex items-center justify-between", theme.metricCard)}>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                        Verified Impact
                      </span>
                      <span className={cn("text-3xl sm:text-4xl font-black mt-0.5 block tracking-tight", theme.accentText)}>
                        {activeProduct.metric}
                      </span>
                      <span className="text-xs font-bold text-foreground mt-0.5 block">
                        {activeProduct.metricLabel}
                      </span>
                    </div>
                    <div className="max-w-[140px] text-right">
                      <p className="text-[10px] text-muted-foreground leading-normal">
                        {activeProduct.metricSub}
                      </p>
                    </div>
                  </div>

                  {/* Connected Enterprise Ingestion Flow */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Workflow size={12} className={theme.accentText} />
                      Connected Enterprise Flow
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProduct.integrations.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-card border border-border/70 text-foreground/90 shadow-2xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Real-time sync guarantee */}
                  <div className="pt-3 border-t border-border/40 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <span className={cn("size-1.5 rounded-full animate-ping", theme.dot)} />
                      <span>DATA FABRIC ACTIVE</span>
                    </span>
                    <span className="text-foreground/80 font-bold">100% DETERMINISTIC</span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
