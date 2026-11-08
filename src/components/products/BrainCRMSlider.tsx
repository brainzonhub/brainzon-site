"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Maximize2, 
  X, 
  LayoutDashboard, 
  Users, 
  UserPlus, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Sparkles, 
  ArrowUpRight,
  Shield,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface CRMSlide {
  id: string;
  number: string;
  name: string;
  shortTag: string;
  badge: string;
  headline: string;
  metric: string;
  metricLabel: string;
  metricIcon: typeof TrendingUp;
  url: string;
  image: string;
  themeColor: string;
  glowColor: string;
}

export const CRM_SLIDES: CRMSlide[] = [
  {
    id: "dashboard",
    number: "01",
    name: "Executive Dashboard",
    shortTag: "Dashboard",
    badge: "Executive Cockpit",
    headline: "Unified Customer Lifecycle & Sales Forecasting",
    metric: "BDT 5.26M",
    metricLabel: "Active Pipeline",
    metricIcon: TrendingUp,
    url: "app.brainzon.com/crm/workspace",
    image: "/images/products/braincrm/01-dashboard-overview.jpg",
    themeColor: "#f1384a",
    glowColor: "rgba(241, 56, 74, 0.4)",
  },
  {
    id: "leads",
    number: "02",
    name: "Lead Pipeline",
    shortTag: "Leads",
    badge: "Pipeline Velocity",
    headline: "Multi-Stage Lead Tracking & Filterable Funnel",
    metric: "25.0%",
    metricLabel: "Conversion Rate",
    metricIcon: Zap,
    url: "app.brainzon.com/crm/leads",
    image: "/images/products/braincrm/02-lead-management.jpg",
    themeColor: "#009cb4",
    glowColor: "rgba(0, 156, 180, 0.4)",
  },
  {
    id: "create-lead",
    number: "03",
    name: "Lead Intake Form",
    shortTag: "Intake",
    badge: "Rapid Onboarding",
    headline: "Frictionless Contact & Organization Intake",
    metric: "< 60s",
    metricLabel: "Intake Velocity",
    metricIcon: Sparkles,
    url: "app.brainzon.com/crm/leads/new",
    image: "/images/products/braincrm/03-create-lead.png",
    themeColor: "#fac316",
    glowColor: "rgba(250, 195, 22, 0.4)",
  },
  {
    id: "converted",
    number: "04",
    name: "Customer 360°",
    shortTag: "Customer 360",
    badge: "Entity Transform",
    headline: "1-Click Entity Conversion with Preserved Audit Trail",
    metric: "1-Click",
    metricLabel: "Entity Generation",
    metricIcon: ArrowUpRight,
    url: "app.brainzon.com/crm/leads/converted",
    image: "/images/products/braincrm/04-lead-conversion.jpg",
    themeColor: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.4)",
  },
  {
    id: "security",
    number: "05",
    name: "Enterprise Access",
    shortTag: "Security",
    badge: "Multi-Tenant Isolation",
    headline: "Zero-Trust Multi-Tenant Cloud Architecture",
    metric: "99.9%",
    metricLabel: "Uptime SLA",
    metricIcon: ShieldCheck,
    url: "app.brainzon.com/crm/auth/login",
    image: "/images/products/braincrm/05-enterprise-auth.jpg",
    themeColor: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.4)",
  },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

interface BrainCRMSliderProps {
  className?: string;
}

export function BrainCRMSlider({ className }: BrainCRMSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 3D Tilt state on hover
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  const activeSlide = CRM_SLIDES[currentIndex] ?? CRM_SLIDES[0]!;
  const MetricIcon = activeSlide.metricIcon;

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % CRM_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + CRM_SLIDES.length) % CRM_SLIDES.length);
  }, []);

  const handleSelect = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Mouse tilt handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4; // subtle -4 to +4 deg
    const rotateY = ((x - centerX) / centerX) * 4;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsPaused(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape" && isLightboxOpen) setIsLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, isLightboxOpen]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused || isLightboxOpen) return;

    timerRef.current = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused, isLightboxOpen, handleNext]);

  const getSlideIcon = (id: string) => {
    switch (id) {
      case "dashboard":
        return <LayoutDashboard size={13} className="shrink-0" />;
      case "leads":
        return <Users size={13} className="shrink-0" />;
      case "create-lead":
        return <UserPlus size={13} className="shrink-0" />;
      case "converted":
        return <CheckCircle2 size={13} className="shrink-0" />;
      case "security":
        return <ShieldCheck size={13} className="shrink-0" />;
      default:
        return <Layers size={13} className="shrink-0" />;
    }
  };

  return (
    <>
      {/* Interactive 3D Perspective Wrapper */}
      <div 
        className={cn("relative w-full select-none group/slider", className)}
        style={{ perspective: 1200 }}
      >
        {/* Dynamic ambient background glow */}
        <div 
          className="absolute -inset-4 sm:-inset-6 -z-10 rounded-3xl opacity-40 blur-3xl pointer-events-none transition-all duration-700"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${activeSlide.glowColor}, transparent 75%)`
          }}
        />

        {/* 3D Tilting Card Container */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
          animate={{
            rotateX: tilt.rotateX,
            rotateY: tilt.rotateY,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative rounded-2xl border border-border/80 bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden transition-shadow duration-300 hover:shadow-glow-primary"
        >
          {/* Top Integrated Interactive Bar */}
          <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-b border-border/60 bg-muted/40">
            {/* Left: Window Dots & Brand Tag */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 shadow-xs" />
                <span className="size-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 shadow-xs" />
                <span className="size-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]/40 shadow-xs" />
              </div>
              <div className="h-3 w-px bg-border/60 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
                <Shield size={10} className="text-emerald-500" />
                <span className="text-foreground/90 font-medium truncate max-w-[150px]">
                  {activeSlide.url}
                </span>
              </div>
            </div>

            {/* Center: Interactive Segmented Pill Tabs */}
            <div className="flex items-center gap-1 p-0.5 rounded-xl bg-background/80 border border-border/60 shadow-xs">
              {CRM_SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    className={cn(
                      "relative flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer overflow-hidden",
                      isActive 
                        ? "text-foreground font-bold shadow-xs" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                    )}
                    aria-label={`Jump to ${slide.name}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-crm-pill"
                        className="absolute inset-0 bg-card rounded-lg border border-border shadow-xs"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span 
                      className="relative z-10" 
                      style={{ color: isActive ? slide.themeColor : undefined }}
                    >
                      {getSlideIcon(slide.id)}
                    </span>
                    <span className="relative z-10 text-[10px] sm:text-[11px] hidden md:inline truncate">
                      {slide.shortTag}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: Autoplay toggle & Lightbox expand */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="flex size-7 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
                title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
                aria-label={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
              >
                {isPaused ? <Play size={11} /> : <Pause size={11} />}
              </button>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="flex size-7 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
                title="Expand screenshot to high resolution"
                aria-label="Expand screenshot to high resolution"
              >
                <Maximize2 size={12} />
              </button>
            </div>
          </div>

          {/* Screenshot Viewport: Exactly 2:1 aspect ratio matching the 1024x512 images */}
          <div 
            className="relative aspect-[2/1] w-full bg-slate-950 overflow-hidden group/canvas cursor-pointer"
            onClick={() => setIsLightboxOpen(true)}
            title="Click to view full image in high resolution"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Responsive Image with exact 2:1 fit */}
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.name}
                  fill
                  priority
                  unoptimized
                  className="object-contain sm:object-cover object-top w-full h-full transition-transform duration-500 group-hover/canvas:scale-[1.015]"
                />

                {/* Subtle border ring */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 pointer-events-none" />

                {/* Subtle gradient vignette at bottom for badges */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 via-black/15 to-transparent pointer-events-none" />

                {/* Floating Telemetry Badge: Top Right */}
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/95 backdrop-blur-md border border-border shadow-md"
                >
                  <MetricIcon size={11} style={{ color: activeSlide.themeColor }} />
                  <span className="text-[10px] font-mono text-muted-foreground hidden sm:inline">
                    {activeSlide.metricLabel}:
                  </span>
                  <span 
                    className="text-[10px] sm:text-[11px] font-mono font-bold"
                    style={{ color: activeSlide.themeColor }}
                  >
                    {activeSlide.metric}
                  </span>
                </motion.div>

                {/* Floating Title Pill: Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                  className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-2 px-2.5 py-1 rounded-xl bg-background/95 backdrop-blur-md border border-border/80 shadow-md pointer-events-auto"
                >
                  <span 
                    className="size-2 rounded-full shrink-0 animate-pulse"
                    style={{ backgroundColor: activeSlide.themeColor }}
                  />
                  <span className="font-bold text-[11px] font-mono text-foreground truncate">
                    {activeSlide.name}
                  </span>
                  <span className="text-muted-foreground/50 text-[10px] hidden sm:inline">•</span>
                  <span className="text-[10px] font-mono text-muted-foreground truncate hidden sm:inline">
                    {activeSlide.badge}
                  </span>
                </motion.div>

                {/* Floating Zoom Hint: Bottom Right */}
                <div className="absolute bottom-2.5 right-2.5 z-10 hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-lg bg-background/90 backdrop-blur-md border border-border/70 text-[9px] font-mono text-muted-foreground shadow-xs pointer-events-none">
                  <Maximize2 size={9} className="text-primary" />
                  <span>Click to zoom</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Hover Floating Navigation Arrows */}
            <div className="absolute inset-y-0 left-2 flex items-center z-20 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="pointer-events-auto flex size-8 items-center justify-center rounded-full bg-background/90 backdrop-blur-md border border-border/80 text-foreground hover:bg-background hover:scale-110 shadow-lg transition-all cursor-pointer"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={16} />
              </button>
            </div>

            <div className="absolute inset-y-0 right-2 flex items-center z-20 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="pointer-events-auto flex size-8 items-center justify-center rounded-full bg-background/90 backdrop-blur-md border border-border/80 text-foreground hover:bg-background hover:scale-110 shadow-lg transition-all cursor-pointer"
                aria-label="Next screenshot"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Bottom Integrated Multi-Segment Progress Track (Zero extra height!) */}
            <div className="absolute bottom-0 inset-x-0 h-1 bg-black/40 backdrop-blur-xs flex z-20">
              {CRM_SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={`segment-${slide.id}`}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(idx);
                    }}
                    className="flex-1 h-full relative cursor-pointer group/seg overflow-hidden"
                    title={`Jump to ${slide.name}`}
                    aria-label={`Jump to ${slide.name}`}
                  >
                    <div className="absolute inset-0 bg-white/20 group-hover/seg:bg-white/40 transition-colors" />
                    {isActive ? (
                      <motion.div
                        key={`seg-progress-${idx}-${currentIndex}`}
                        initial={{ width: "0%" }}
                        animate={{ width: isPaused ? undefined : "100%" }}
                        transition={{ 
                          duration: isPaused ? 0 : SLIDE_DURATION / 1000, 
                          ease: "linear" 
                        }}
                        className="h-full relative z-10"
                        style={{ backgroundColor: slide.themeColor }}
                      />
                    ) : (
                      idx < currentIndex && (
                        <div 
                          className="h-full w-full relative z-10 opacity-70"
                          style={{ backgroundColor: slide.themeColor }}
                        />
                      )
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* High-Resolution Fullscreen Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Screenshot lightbox preview"
          >
            {/* Click backdrop to close */}
            <div 
              className="absolute inset-0"
              onClick={() => setIsLightboxOpen(false)}
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-5xl rounded-2xl bg-card border border-border shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/40 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="size-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="h-4 w-px bg-border/60 mx-1" />
                  <span className="text-xs font-mono font-bold text-foreground">
                    {activeSlide.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {currentIndex + 1} of {CRM_SLIDES.length}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex size-7 items-center justify-center rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex size-7 items-center justify-center rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(false)}
                    className="flex size-7 items-center justify-center rounded-lg border border-border hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-500 text-muted-foreground transition-colors cursor-pointer ml-1"
                    aria-label="Close dialog"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Modal Image Viewport */}
              <div className="relative flex-1 min-h-[320px] sm:min-h-[500px] bg-slate-950 overflow-hidden flex items-center justify-center">
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.name}
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>

              {/* Minimal Modal Footer */}
              <div className="px-4 py-2.5 border-t border-border bg-card flex items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-2">
                  <span 
                    className="size-2 rounded-full" 
                    style={{ backgroundColor: activeSlide.themeColor }}
                  />
                  <span className="text-xs font-medium text-foreground truncate">
                    {activeSlide.headline}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono shrink-0">
                  <span className="text-muted-foreground">{activeSlide.metricLabel}:</span>
                  <span className="font-bold" style={{ color: activeSlide.themeColor }}>
                    {activeSlide.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
