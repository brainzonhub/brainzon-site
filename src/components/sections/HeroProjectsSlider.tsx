"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck,
  Pause,
  Play
} from "lucide-react";
import { ProductIcon, type ProductSlug } from "@/components/ui/ProductIcon";
import { cn } from "@/lib/utils";

export interface ProjectSlide {
  id: ProductSlug;
  name: string;
  badge: string;
  headline: string;
  metric: string;
  metricLabel: string;
  url: string;
  href: string;
  image: string;
  themeColor: string;
  glowColor: string;
}

const PROJECT_SLIDES: ProjectSlide[] = [
  {
    id: "brainerp",
    name: "BrainERP",
    badge: "Operations & Supply Chain Core",
    headline: "Unified Operational & Multi-Warehouse Supply Chain Visibility",
    metric: "99.98%",
    metricLabel: "Inventory Accuracy",
    url: "app.brainzon.com/erp/dashboard",
    href: "/products/brainerp",
    image: "/images/dashboards/brainerp-dashboard.jpg",
    themeColor: "#009cb4",
    glowColor: "rgba(0, 156, 180, 0.22)",
  },
  {
    id: "braincrm",
    name: "BrainCRM",
    badge: "Customer Growth & Pipeline Workspace",
    headline: "Unified Customer 360 & Predictive Sales Forecasting",
    metric: "3.4x",
    metricLabel: "Pipeline Velocity",
    url: "app.brainzon.com/crm/workspace",
    href: "/products/braincrm",
    image: "/images/dashboards/braincrm-dashboard.jpg",
    themeColor: "#f1384a",
    glowColor: "rgba(241, 56, 74, 0.22)",
  },
  {
    id: "brainmkt",
    name: "BrainMKT",
    badge: "Marketing Velocity Hub",
    headline: "Collaborative Campaign Orchestration & Audience Growth",
    metric: "+45%",
    metricLabel: "Campaign Velocity",
    url: "app.brainzon.com/mkt/workspace",
    href: "/products/brainmkt",
    image: "/images/dashboards/brainmkt-dashboard.jpg",
    themeColor: "#fac316",
    glowColor: "rgba(250, 195, 22, 0.22)",
  },
  {
    id: "brainbooks",
    name: "BrainBooks",
    badge: "Accounting & Tax Compliance Ledger",
    headline: "Audit-Ready Double-Entry Ledgers & Bank Reconciliations",
    metric: "-18 Days",
    metricLabel: "DSO Reduction",
    url: "app.brainzon.com/books/dashboard",
    href: "/products/brainbooks",
    image: "/images/dashboards/brainbooks-dashboard.png",
    themeColor: "#0065bd",
    glowColor: "rgba(0, 101, 189, 0.22)",
  },
];

const SLIDE_DURATION = 5500; // 5.5 seconds per slide

interface HeroProjectsSliderProps {
  className?: string;
}

export function HeroProjectsSlider({ className }: HeroProjectsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeProject = PROJECT_SLIDES[currentIndex] ?? PROJECT_SLIDES[0]!;

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
      className={cn("relative w-full flex flex-col gap-3 group/slider", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient Radial Background Glow tied to active project color */}
      <div 
        className="absolute -inset-4 sm:-inset-6 -z-10 rounded-3xl opacity-50 blur-3xl pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle at 60% 40%, ${activeProject.glowColor}, transparent 70%)`
        }}
      />

      {/* 4 Projects Interactive Navigation Tabs */}
      <div className="flex items-center justify-between gap-1.5 p-1 rounded-2xl bg-card/80 backdrop-blur-md border border-border/60 shadow-xs">
        <div className="grid grid-cols-4 gap-1 w-full">
          {PROJECT_SLIDES.map((project, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => handleSelect(idx)}
                className={cn(
                  "relative flex items-center justify-center gap-1.5 sm:gap-2 px-2 py-2 sm:py-2.5 rounded-xl text-left transition-all duration-300 overflow-hidden cursor-pointer",
                  isActive
                    ? "bg-card shadow-sm border border-border text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                )}
                aria-label={`View ${project.name} dashboard`}
              >
                {/* Product Icon */}
                <ProductIcon product={project.id} size={16} className="shrink-0" />
                
                {/* Product Name */}
                <span className="text-[11px] sm:text-xs font-mono font-medium truncate hidden sm:inline">
                  {project.name}
                </span>

                {/* Progress bar on active tab */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-muted overflow-hidden">
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

        {/* Small Pause / Play and Arrows controls */}
        <div className="hidden sm:flex items-center gap-1 pl-1 shrink-0">
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

      {/* Main Showcase Card: Browser Frame + Dashboard Preview */}
      <div className="relative rounded-2xl border border-border/70 bg-card/90 backdrop-blur-md shadow-card overflow-hidden transition-all duration-300">
        
        {/* Browser Top Window Chrome */}
        <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-border/60 bg-muted/30">
          {/* Window control dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="size-2.5 rounded-full bg-rose-500/80" />
            <span className="size-2.5 rounded-full bg-amber-500/80" />
            <span className="size-2.5 rounded-full bg-emerald-500/80" />
          </div>

          {/* Centered Mock URL Bar */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-background/80 border border-border/40 text-[10px] sm:text-[11px] font-mono text-muted-foreground max-w-[240px] sm:max-w-xs truncate mx-2">
            <ShieldCheck size={11} className="text-emerald-500 shrink-0" />
            <span className="text-foreground/80 truncate">{activeProject.url}</span>
          </div>

          {/* Live Platform Badge + Link */}
          <Link
            href={activeProject.href}
            className="flex items-center gap-1.5 shrink-0 hover:text-primary transition-colors group/link"
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
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-muted-foreground group-hover/link:text-primary">
              Live
            </span>
            <ArrowRight size={11} className="text-muted-foreground group-hover/link:text-primary group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Dashboard Screenshot Preview Area with Click-Through */}
        <Link
          href={activeProject.href}
          className="relative aspect-[16/9.5] sm:aspect-[16/9] w-full bg-slate-950/40 overflow-hidden group block cursor-pointer"
          title={`Click to explore ${activeProject.name}`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src={activeProject.image}
                alt={`${activeProject.name} Dashboard Interface`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Bottom Subtle Gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Quick Metric Pill on top right of the dashboard */}
              <div className="absolute top-3 right-3 z-10 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-md border border-border/80 shadow-md">
                <span className="text-[10px] font-mono text-muted-foreground">
                  {activeProject.metricLabel}:
                </span>
                <span 
                  className="text-[11px] font-mono font-bold"
                  style={{ color: activeProject.themeColor }}
                >
                  {activeProject.metric}
                </span>
              </div>

              {/* Sleek Animated Floating Tagline on bottom left */}
              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between gap-2 pointer-events-none">
                <motion.div
                  key={`tagline-${activeProject.id}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-background/90 backdrop-blur-md border border-border/80 shadow-md text-[11px] max-w-[85%] truncate"
                >
                  <span 
                    className="size-2 rounded-full shrink-0 animate-pulse"
                    style={{ backgroundColor: activeProject.themeColor }}
                  />
                  <span className="font-bold text-foreground shrink-0">
                    {activeProject.name}
                  </span>
                  <span className="text-muted-foreground truncate">
                    — {activeProject.headline}
                  </span>
                </motion.div>

                <div className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-background/90 backdrop-blur-md border border-border/80 text-[10px] font-mono text-muted-foreground shrink-0 shadow-md group-hover:text-primary transition-colors">
                  <span>Explore</span>
                  <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Link>
      </div>

      {/* Bottom Mobile Controls */}
      <div className="flex sm:hidden items-center justify-between px-1">
        <div className="flex items-center gap-1.5">
          {PROJECT_SLIDES.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              type="button"
              onClick={() => handleSelect(idx)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
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
