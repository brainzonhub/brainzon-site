"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  ShieldCheck,
  Pause,
  Play,
  TrendingUp,
  Sparkles,
  Zap
} from "lucide-react";
import { ProductIcon, type ProductSlug } from "@/components/ui/ProductIcon";
import { cn } from "@/lib/utils";

export interface ProjectSlide {
  id: ProductSlug;
  name: string;
  shortTag: string;
  badge: string;
  headline: string;
  metric: string;
  metricLabel: string;
  metricIcon: typeof TrendingUp;
  url: string;
  href: string;
  image: string;
  themeColor: string;
  glowColor: string;
  borderHover: string;
}

const PROJECT_SLIDES: ProjectSlide[] = [
  {
    id: "brainerp",
    name: "BrainERP",
    shortTag: "ERP Core",
    badge: "Operations & Supply Chain",
    headline: "Multi-Warehouse Logistics & Real-Time Ledgers",
    metric: "99.98%",
    metricLabel: "Inventory Accuracy",
    metricIcon: TrendingUp,
    url: "app.brainzon.com/erp/dashboard",
    href: "/products/brainerp",
    image: "/images/dashboards/brainerp-dashboard.jpg",
    themeColor: "#009cb4",
    glowColor: "rgba(0, 156, 180, 0.28)",
    borderHover: "hover:border-[#009cb4]/60",
  },
  {
    id: "braincrm",
    name: "BrainCRM",
    shortTag: "CRM Growth",
    badge: "Customer Growth & Pipeline",
    headline: "Predictive Lead Scoring & Deal Velocity",
    metric: "3.4x",
    metricLabel: "Pipeline Velocity",
    metricIcon: Zap,
    url: "app.brainzon.com/crm/workspace",
    href: "/products/braincrm",
    image: "/images/dashboards/braincrm-dashboard.jpg",
    themeColor: "#f1384a",
    glowColor: "rgba(241, 56, 74, 0.28)",
    borderHover: "hover:border-[#f1384a]/60",
  },
  {
    id: "brainmkt",
    name: "BrainMKT",
    shortTag: "Marketing Hub",
    badge: "Campaign Telemetry & Velocity",
    headline: "Omnichannel Publishing & Asset Studio",
    metric: "+45%",
    metricLabel: "Execution Speed",
    metricIcon: Sparkles,
    url: "app.brainzon.com/mkt/workspace",
    href: "/products/brainmkt",
    image: "/images/dashboards/brainmkt-dashboard.jpg",
    themeColor: "#fac316",
    glowColor: "rgba(250, 195, 22, 0.28)",
    borderHover: "hover:border-[#fac316]/60",
  },
  {
    id: "brainbooks",
    name: "BrainBooks",
    shortTag: "Books & Tax",
    badge: "Financial Ledger & Compliance",
    headline: "Audit-Ready Double-Entry Ledgers & VAT",
    metric: "-18 Days",
    metricLabel: "DSO Collection",
    metricIcon: TrendingUp,
    url: "app.brainzon.com/books/dashboard",
    href: "/products/brainbooks",
    image: "/images/dashboards/brainbooks-dashboard.png",
    themeColor: "#0065bd",
    glowColor: "rgba(0, 101, 189, 0.28)",
    borderHover: "hover:border-[#0065bd]/60",
  },
];

const SLIDE_DURATION = 5500; // 5.5 seconds

interface HeroProjectsSliderProps {
  className?: string;
}

export function HeroProjectsSlider({ className }: HeroProjectsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeProject = PROJECT_SLIDES[currentIndex] ?? PROJECT_SLIDES[0]!;
  const MetricIcon = activeProject.metricIcon;

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PROJECT_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PROJECT_SLIDES.length) % PROJECT_SLIDES.length);
  }, []);

  const handleSelect = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay management
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused, handleNext]);

  return (
    <div 
      className={cn("relative w-full flex flex-col gap-3 group/slider select-none", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient Dynamic Glow tied to active project color */}
      <div 
        className="absolute -inset-4 sm:-inset-6 -z-10 rounded-3xl opacity-40 blur-3xl pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle at 60% 40%, ${activeProject.glowColor}, transparent 70%)`
        }}
      />

      {/* Top Interactive Tabs Bar */}
      <div className="flex items-center justify-between gap-1 p-1.5 rounded-2xl bg-card/85 backdrop-blur-md border border-border/70 shadow-sm">
        {/* 4 Segmented Interactive Tabs */}
        <div className="grid grid-cols-4 gap-1 w-full">
          {PROJECT_SLIDES.map((project, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => handleSelect(idx)}
                className={cn(
                  "relative flex items-center justify-center gap-1.5 sm:gap-2 px-2 py-2 rounded-xl text-left transition-colors duration-200 cursor-pointer overflow-hidden group/tab",
                  isActive ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
                )}
                aria-label={`Switch to ${project.name} dashboard`}
              >
                {/* Active Sliding Pill Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="active-hero-tab"
                    className="absolute inset-0 bg-background rounded-xl border border-border/80 shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}

                {/* Tab Content */}
                <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 truncate">
                  <ProductIcon 
                    product={project.id} 
                    size={16} 
                    className="shrink-0 transition-transform duration-200 group-hover/tab:scale-110" 
                  />
                  <span className="text-[11px] sm:text-xs font-mono tracking-tight truncate">
                    {project.name}
                  </span>
                </div>

                {/* Animated progress underline */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-muted/60 overflow-hidden z-10">
                    <motion.div
                      key={`progress-${idx}-${currentIndex}`}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? undefined : "100%" }}
                      transition={{ 
                        duration: isPaused ? 0 : SLIDE_DURATION / 1000, 
                        ease: "linear" 
                      }}
                      className="h-full"
                      style={{ backgroundColor: project.themeColor }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Action Controls: Pause & Arrow Navigation */}
        <div className="hidden sm:flex items-center gap-1 pl-1.5 border-l border-border/50 shrink-0">
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className="flex size-7 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
            title={isPaused ? "Resume auto-play" : "Pause auto-play"}
            aria-label={isPaused ? "Resume auto-play" : "Pause auto-play"}
          >
            {isPaused ? <Play size={11} /> : <Pause size={11} />}
          </button>
          <button
            type="button"
            onClick={handlePrev}
            className="flex size-7 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
            aria-label="Previous project"
          >
            <ChevronLeft size={13} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex size-7 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
            aria-label="Next project"
          >
            <ChevronRight size={13} />
          </button>
        </div>
      </div>

      {/* Main Showcase Browser Frame Card */}
      <div className="relative rounded-2xl border border-border/80 bg-card backdrop-blur-md shadow-card overflow-hidden transition-all duration-300">
        
        {/* Browser Window Header Chrome */}
        <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-border/60 bg-muted/30">
          {/* macOS traffic light window dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="size-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 shadow-xs" />
            <span className="size-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 shadow-xs" />
            <span className="size-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]/40 shadow-xs" />
          </div>

          {/* Centered Mock SSL URL Bar */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-background border border-border/50 text-[10px] sm:text-[11px] font-mono text-muted-foreground max-w-[220px] sm:max-w-xs truncate mx-2 shadow-xs">
            <ShieldCheck size={11} className="text-emerald-500 shrink-0" />
            <span className="text-foreground/90 truncate">{activeProject.url}</span>
          </div>

          {/* Live Indicator & Quick Explore Link */}
          <Link
            href={activeProject.href}
            className="flex items-center gap-1.5 shrink-0 text-muted-foreground hover:text-primary transition-colors group/explore"
            title={`Explore ${activeProject.name}`}
          >
            <span className="relative flex size-2">
              <span 
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: activeProject.themeColor }}
              />
              <span 
                className="relative inline-flex rounded-full size-2"
                style={{ backgroundColor: activeProject.themeColor }}
              />
            </span>
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase hidden sm:inline">
              LIVE
            </span>
            <ArrowUpRight size={12} className="group-hover/explore:translate-x-0.5 group-hover/explore:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Dashboard Screenshot Preview Area */}
        <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-slate-900 overflow-hidden group/canvas">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.32, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Clickable Image that navigates to the project */}
              <Link
                href={activeProject.href}
                className="block relative w-full h-full cursor-pointer"
                title={`Click to explore ${activeProject.name}`}
              >
                <Image
                  src={activeProject.image}
                  alt={`${activeProject.name} Dashboard Interface`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  unoptimized
                  className="object-cover object-top w-full h-full transition-transform duration-500 group-hover/canvas:scale-[1.015]"
                />

                {/* Subtle Vignette Overlay for border definition */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5 pointer-events-none" />

                {/* Bottom Gentle Contrast Gradient for floating badge */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 via-black/15 to-transparent pointer-events-none" />
              </Link>

              {/* Floating Live Telemetry Metric Badge (Top-Right) */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.1 }}
                className="absolute top-3 right-3 z-10 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/95 backdrop-blur-md border border-border shadow-md"
              >
                <MetricIcon size={11} style={{ color: activeProject.themeColor }} />
                <span className="text-[10px] font-mono text-muted-foreground">
                  {activeProject.metricLabel}:
                </span>
                <span 
                  className="text-[11px] font-mono font-bold"
                  style={{ color: activeProject.themeColor }}
                >
                  {activeProject.metric}
                </span>
              </motion.div>

              {/* Floating Animated Headline Pill (Bottom-Left) */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.15 }}
                className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between gap-2 pointer-events-none"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-background/95 backdrop-blur-md border border-border/80 shadow-md text-[11px] max-w-[85%] truncate pointer-events-auto">
                  <span 
                    className="size-2 rounded-full shrink-0 animate-pulse"
                    style={{ backgroundColor: activeProject.themeColor }}
                  />
                  <span className="font-bold text-foreground shrink-0 font-mono">
                    {activeProject.name}
                  </span>
                  <span className="text-muted-foreground truncate hidden sm:inline">
                    — {activeProject.headline}
                  </span>
                </div>

                {/* Interactive Click-through pill */}
                <Link
                  href={activeProject.href}
                  className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-background/95 backdrop-blur-md border border-border/80 text-[10px] font-mono font-semibold text-foreground hover:text-primary transition-colors shadow-md pointer-events-auto"
                >
                  <span>Explore</span>
                  <ArrowUpRight size={11} />
                </Link>
              </motion.div>

              {/* In-Image Hover Navigation Chevrons */}
              <div className="absolute inset-y-0 left-2 z-10 flex items-center opacity-0 group-hover/canvas:opacity-100 transition-opacity duration-200">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="flex size-8 items-center justify-center rounded-full bg-background/90 backdrop-blur-md border border-border/80 shadow-md text-foreground hover:bg-background hover:scale-110 transition-all cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={16} />
                </button>
              </div>

              <div className="absolute inset-y-0 right-2 z-10 flex items-center opacity-0 group-hover/canvas:opacity-100 transition-opacity duration-200">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="flex size-8 items-center justify-center rounded-full bg-background/90 backdrop-blur-md border border-border/80 shadow-md text-foreground hover:bg-background hover:scale-110 transition-all cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Slide Dots & Arrows */}
      <div className="flex sm:hidden items-center justify-between px-1">
        <div className="flex items-center gap-1.5">
          {PROJECT_SLIDES.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              type="button"
              onClick={() => handleSelect(idx)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                idx === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground/60"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handlePrev}
            className="p-1.5 rounded-lg border border-border/60 bg-card text-muted-foreground cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="p-1.5 rounded-lg border border-border/60 bg-card text-muted-foreground cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
