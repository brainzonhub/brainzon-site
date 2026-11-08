"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Target, 
  LayoutDashboard, 
  Users, 
  Clock, 
  Receipt, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  Maximize2, 
  X,
  ExternalLink,
  type LucideIcon 
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type CRMModule = {
  id: string;
  name: string;
  icon: LucideIcon;
  metricLabel: string;
  metricValue: string;
  metricLabel2: string;
  metricValue2: string;
  details: string;
  screenshot: string;
  urlPath: string;
};

const crmModules: CRMModule[] = [
  {
    id: "lead-scoring",
    name: "Lead Qualification & Scoring",
    icon: Target,
    metricLabel: "Conversion Velocity",
    metricValue: "+38% Faster",
    metricLabel2: "Qualification Rate",
    metricValue2: "94.2% Verified",
    details: "Automated intent scoring, territory routing, qualification checklists, and instant handoff from marketing campaigns.",
    screenshot: "/images/products/braincrm/app-leads.jpg",
    urlPath: "braincrm.workspace / sales / leads"
  },
  {
    id: "pipeline",
    name: "Visual Sales Pipeline",
    icon: LayoutDashboard,
    metricLabel: "Pipeline Value",
    metricValue: "BDT 10.6M Active",
    metricLabel2: "Forecast Accuracy",
    metricValue2: "92.8% Confidence",
    details: "Kanban deal stages, probability weighting, revenue forecasting, and milestone-based deal velocity tracking.",
    screenshot: "/images/products/braincrm/app-pipeline.jpg",
    urlPath: "braincrm.workspace / sales / visual-pipeline"
  },
  {
    id: "customer-360",
    name: "Customer 360 Profiles",
    icon: Users,
    metricLabel: "Profile Depth",
    metricValue: "Complete 360°",
    metricLabel2: "Account Retention",
    metricValue2: "98.6% Loyalty",
    details: "Centralized account hierarchies, cross-department relationship intelligence, contact maps, and unified interaction logs.",
    screenshot: "/images/products/braincrm/app-customer360.jpg",
    urlPath: "braincrm.workspace / sales / accounts / customer-360"
  },
  {
    id: "timeline",
    name: "Engagement Timeline",
    icon: Clock,
    metricLabel: "Touchpoint Tracking",
    metricValue: "100% Real-time",
    metricLabel2: "Response Time",
    metricValue2: "< 15 Mins",
    details: "Chronological activity streams consolidating meetings, email threads, calls, and service tickets into a single unified timeline.",
    screenshot: "/images/products/braincrm/app-activities.jpg",
    urlPath: "braincrm.workspace / activities / work-queue"
  },
  {
    id: "service",
    name: "Quotations & Commercial Flow",
    icon: Receipt,
    metricLabel: "Commercial Accuracy",
    metricValue: "100% Server Decimal",
    metricLabel2: "Turnaround Velocity",
    metricValue2: "4.9 / 5.0 Rating",
    details: "Line items, discounts, VAT taxes with server-authoritative calculations, revisions, and automated client PDF output.",
    screenshot: "/images/products/braincrm/app-quotation.jpg",
    urlPath: "braincrm.workspace / commercial / quotations"
  }
];

export function CRMShowcase() {
  const [selectedModule, setSelectedModule] = useState<CRMModule>(crmModules[0] as CRMModule);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="relative py-20 border-b border-border/40 bg-surface transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Module Navigation & Descriptions */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 mb-6">
              Customer Relationship Management
            </span>
            <h2 className="text-heading-2 font-bold tracking-tight text-foreground">
              BrainCRM Showcase
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Consolidate customer journeys, visual pipelines, and multi-channel touchpoints under one unified platform. Track leads, sync operations, and automate outreach schedules.
            </p>

            {/* List of modules to select */}
            <div className="mt-8 flex flex-col gap-2 w-full">
              {crmModules.map((mod) => {
                const Icon = mod.icon;
                const isSelected = selectedModule.id === mod.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setSelectedModule(mod)}
                    className={cn(
                      "w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isSelected 
                        ? "border-amber-500/50 bg-amber-500/10 text-foreground shadow-sm" 
                        : "border-border bg-card/20 text-muted-foreground hover:bg-card/45 hover:text-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "flex size-8 items-center justify-center rounded-lg transition-colors",
                        isSelected ? "bg-amber-500/20 text-amber-500 dark:text-amber-400" : "bg-muted text-muted-foreground"
                      )}>
                        <Icon size={16} />
                      </div>
                      <span className="text-xs font-bold">{mod.name}</span>
                    </div>
                    {isSelected && <div className="size-1.5 rounded-full bg-amber-500 animate-pulse" />}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products/braincrm"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 shadow-sm transition-all"
              >
                <span>Explore Full BrainCRM</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/product-tour.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Interactive Tour</span>
                <ExternalLink size={13} />
              </Link>
            </div>
          </div>

          {/* Right Column: Original BrainCRM Screenshot Display */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-border bg-card shadow-elevated overflow-hidden backdrop-blur-md">
              
              {/* Outer decorative ambient glows */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Browser Mockup Chrome Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/40 border-b border-border/80">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="size-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="size-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>

                {/* URL Bar */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-background/80 border border-border/60 text-[10px] font-mono text-muted-foreground max-w-[280px] sm:max-w-[340px] truncate shadow-xs">
                  <Lock size={10} className="text-emerald-500 shrink-0" />
                  <span className="truncate">{selectedModule.urlPath}</span>
                </div>

                {/* Zoom / Lightbox Trigger */}
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="flex items-center gap-1 text-[10px] font-mono font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  title="Enlarge screenshot"
                >
                  <Maximize2 size={12} />
                  <span className="hidden sm:inline">Zoom</span>
                </button>
              </div>

              {/* Screenshot Image Frame */}
              <div 
                className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 group cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              >
                <Image
                  key={selectedModule.screenshot}
                  src={selectedModule.screenshot}
                  alt={selectedModule.name}
                  width={2160}
                  height={1350}
                  priority
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Subtle Hover Overlay with Inspect Badge */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background/90 text-foreground border border-border text-xs font-semibold shadow-lg backdrop-blur-md">
                    <Maximize2 size={13} className="text-amber-500" />
                    <span>Click to enlarge screenshot</span>
                  </div>
                </div>

                {/* Live System Badge */}
                <div className="absolute bottom-3 left-3 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-background/90 backdrop-blur-md border border-border/80 text-foreground shadow-sm">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Original Production View</span>
                  </span>
                </div>
              </div>

              {/* Bottom Telemetry Strip & Metrics */}
              <div className="p-4 sm:p-5 bg-card border-t border-border/60">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="p-2.5 sm:p-3 rounded-xl border border-border/60 bg-muted/20">
                    <p className="text-[9px] uppercase tracking-wider font-mono text-muted-foreground">
                      {selectedModule.metricLabel}
                    </p>
                    <p className="text-sm sm:text-base font-extrabold text-foreground mt-0.5 font-mono">
                      {selectedModule.metricValue}
                    </p>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl border border-border/60 bg-muted/20">
                    <p className="text-[9px] uppercase tracking-wider font-mono text-muted-foreground">
                      {selectedModule.metricLabel2}
                    </p>
                    <p className="text-sm sm:text-base font-extrabold text-amber-600 dark:text-amber-400 mt-0.5 font-mono">
                      {selectedModule.metricValue2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 text-[11px] text-muted-foreground">
                  <ShieldCheck size={14} className="text-amber-500 mt-0.5 shrink-0" />
                  <p className="leading-relaxed">
                    {selectedModule.details}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>

      {/* Lightbox Zoom Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[92vh] flex flex-col rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <span className="size-2 rounded-full bg-emerald-400" />
                <span className="font-bold">{selectedModule.name}</span>
                <span className="text-slate-500 hidden sm:inline">— {selectedModule.urlPath}</span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="size-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close enlarged preview"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body: Full Image */}
            <div className="overflow-auto max-h-[calc(92vh-50px)] p-2 bg-slate-950 flex items-center justify-center">
              <Image
                src={selectedModule.screenshot}
                alt={selectedModule.name}
                width={2160}
                height={1350}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
