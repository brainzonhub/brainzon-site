"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lock,
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Maximize2, 
  X,
  Target, 
  CheckCircle2, 
  RefreshCw, 
  Building2, 
  Trophy, 
  Kanban, 
  CalendarCheck, 
  Receipt, 
  Gauge,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface LifecycleStep {
  id: string;
  label: string;
  sub: string;
  img: string;
  url: string;
  title: string;
  desc: string;
  icon: typeof Target;
}

const LIFECYCLE_STEPS: LifecycleStep[] = [
  {
    id: "leads",
    label: "Capture leads",
    sub: "Lead management",
    img: "/images/products/braincrm/app-leads.jpg",
    url: "Sales / Leads",
    title: "Capture and prioritize every lead",
    desc: "Search and filter by status, source, priority and sales rep. Each lead has an owner, an estimated value and a follow-up date.",
    icon: Target,
  },
  {
    id: "qualify",
    label: "Qualify",
    sub: "Lead details",
    img: "/images/products/braincrm/app-lead-qualify.jpg",
    url: "Sales / Leads / Details",
    title: "Qualify with context",
    desc: "Contact, organization, timeline, notes and attachments sit on one page. Qualify the lead with notes for the team.",
    icon: CheckCircle2,
  },
  {
    id: "convert",
    label: "Convert",
    sub: "Contact, account, deal",
    img: "/images/products/braincrm/app-lead-converted.jpg",
    url: "Sales / Leads / Details",
    title: "Convert in one step",
    desc: "Conversion creates the contact, account and opportunity together and links them back to the lead, which stays as read-only history.",
    icon: RefreshCw,
  },
  {
    id: "customer360",
    label: "Customer 360",
    sub: "Accounts",
    img: "/images/products/braincrm/app-customer360.jpg",
    url: "Sales / Accounts / Customer 360",
    title: "One view of every customer",
    desc: "Contacts, opportunities, activities, quotations, notes, attachments and the relationship timeline for an account.",
    icon: Building2,
  },
  {
    id: "opportunity",
    label: "Work the deal",
    sub: "Opportunities",
    img: "/images/products/braincrm/app-opportunity.jpg",
    url: "Sales / Opportunities / Details",
    title: "See where each deal stands",
    desc: "Stage progression, win probability, expected close date and next step, with actions to advance, add an activity or create a quotation.",
    icon: Trophy,
  },
  {
    id: "pipeline",
    label: "Visual pipeline",
    sub: "Kanban board",
    img: "/images/products/braincrm/app-pipeline.jpg",
    url: "Sales / Pipeline",
    title: "Move deals across stages",
    desc: "Drag and drop, or use the card menu from the keyboard. Stage totals and weighted values update as deals move.",
    icon: Kanban,
  },
  {
    id: "activities",
    label: "Follow up",
    sub: "Activities",
    img: "/images/products/braincrm/app-activities.jpg",
    url: "Activities / Work Queue",
    title: "Never miss a follow-up",
    desc: "Tasks, calls, meetings and follow-ups in one work queue with due-today, overdue and calendar views.",
    icon: CalendarCheck,
  },
  {
    id: "quotation",
    label: "Quote",
    sub: "Quotations",
    img: "/images/products/braincrm/app-quotation.jpg",
    url: "Commercial / Quotations / Create",
    title: "Build quotations from your catalog",
    desc: "Pick the customer and catalog items. Totals preview as you type and are recalculated on the server when you save.",
    icon: Receipt,
  },
  {
    id: "performance",
    label: "Measure",
    sub: "Performance and reports",
    img: "/images/products/braincrm/app-performance.jpg",
    url: "Performance / Overview",
    title: "Track targets and results",
    desc: "Targets, attainment and predefined reports, filtered by what each role is allowed to see.",
    icon: Gauge,
  },
];

const STEP_DURATION = 6000; // 6 seconds

export function BrainCRMLifecycleExplorer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeStep = LIFECYCLE_STEPS[currentIndex] ?? LIFECYCLE_STEPS[0]!;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % LIFECYCLE_STEPS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + LIFECYCLE_STEPS.length) % LIFECYCLE_STEPS.length);
  }, []);

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

  // Autoplay
  useEffect(() => {
    if (!isPlaying || isLightboxOpen) return;

    timerRef.current = setInterval(() => {
      handleNext();
    }, STEP_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPlaying, isLightboxOpen, handleNext]);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 border-b border-border/40 bg-surface/30">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -z-10 w-[600px] h-[600px] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border/80 bg-card/60 text-xs font-bold tracking-widest uppercase text-primary mb-4 font-mono shadow-xs">
            <span className="size-2 rounded-full bg-[#009cb4] animate-pulse" />
            <span>How it works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Follow one deal through the{" "}
            <span className="bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(0,156,180,0.18)]">
              whole product
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Pick a step to see the real screen. These are captures of the running product, not illustrations.
          </p>
        </div>

        {/* 2-Column Explorer: Left Steps + Right Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: 9 Interactive Step Buttons */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scroll-smooth snap-x snap-mandatory">
            {LIFECYCLE_STEPS.map((step, idx) => {
              const isActive = idx === currentIndex;
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={cn(
                    "relative flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer overflow-hidden shrink-0 lg:shrink w-64 lg:w-full snap-start group",
                    isActive
                      ? "bg-card border-primary/60 shadow-md ring-1 ring-primary/20"
                      : "bg-card/40 border-border/60 hover:border-border hover:bg-card/80 text-muted-foreground hover:text-foreground"
                  )}
                  aria-label={`Step ${idx + 1}: ${step.label}`}
                >
                  {/* Step Icon */}
                  <div className={cn(
                    "flex size-9 items-center justify-center rounded-lg border shrink-0 transition-colors",
                    isActive 
                      ? "bg-primary/10 border-primary/30 text-primary" 
                      : "bg-surface border-border/60 text-muted-foreground group-hover:text-foreground"
                  )}>
                    <Icon size={16} />
                  </div>

                  {/* Step Text */}
                  <div className="flex-1 min-w-0">
                    <span className={cn(
                      "block text-xs sm:text-sm font-bold truncate",
                      isActive ? "text-foreground" : "text-foreground/90"
                    )}>
                      {step.label}
                    </span>
                    <span className="block text-[11px] text-muted-foreground truncate font-mono">
                      {step.sub}
                    </span>
                  </div>

                  {/* Active Progress Underline */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted/60 overflow-hidden">
                      <motion.div
                        key={`explorer-bar-${idx}-${currentIndex}`}
                        initial={{ width: "0%" }}
                        animate={{ width: isPlaying ? "100%" : "100%" }}
                        transition={{ 
                          duration: isPlaying ? STEP_DURATION / 1000 : 0, 
                          ease: "linear" 
                        }}
                        className="h-full bg-primary"
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Screenshot Browser Window & Controls */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            {/* Browser Frame */}
            <div className="relative rounded-2xl border border-border/80 bg-card shadow-2xl overflow-hidden">
              {/* Chrome Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-muted/40 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-[#fb5a78]" />
                    <span className="size-2.5 rounded-full bg-[#fbbf24]" />
                    <span className="size-2.5 rounded-full bg-[#34d399]" />
                  </div>
                  <div className="h-3.5 w-px bg-border/60 mx-1.5" />
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-background border border-border/60 text-[11px] font-mono text-muted-foreground">
                    <Lock size={10} className="text-emerald-500" />
                    <span>BrainCRM / {activeStep.url}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="flex size-7 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                  title="Enlarge screenshot"
                  aria-label="Enlarge screenshot in full resolution"
                >
                  <Maximize2 size={13} />
                </button>
              </div>

              {/* Viewport */}
              <div 
                className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden group/canvas cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
                title="Click to view full image in high resolution"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={activeStep.img}
                      alt={activeStep.title}
                      fill
                      priority
                      unoptimized
                      className="object-cover object-top w-full h-full transition-transform duration-500 group-hover/canvas:scale-[1.015]"
                    />

                    {/* Hover Zoom Hint */}
                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-mono font-semibold shadow-md opacity-0 group-hover/canvas:opacity-100 transition-opacity">
                      <Maximize2 size={12} />
                      <span>Enlarge</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Caption & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-card/60 border border-border/60 backdrop-blur-sm">
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  {activeStep.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {activeStep.desc}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex size-9 items-center justify-center rounded-xl border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                  title="Previous step"
                  aria-label="Previous step"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex size-9 items-center justify-center rounded-xl border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                  title={isPlaying ? "Pause auto-tour" : "Resume auto-tour"}
                  aria-label={isPlaying ? "Pause auto-tour" : "Resume auto-tour"}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex size-9 items-center justify-center rounded-xl border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                  title="Next step"
                  aria-label="Next step"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Product Tour Callout Banner */}
        <Link
          href="/product-tour.html"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-5 p-6 sm:p-7 rounded-2xl border border-border/80 bg-gradient-to-r from-primary/10 via-purple-500/10 to-accent/10 hover:border-primary/50 shadow-card transition-all duration-300 hover:-translate-y-1 group/tour"
        >
          <div className="flex items-center gap-4">
            <div className="relative size-12 sm:size-14 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-tr from-[#f1384a] to-[#ff6b7d] text-white shadow-lg shadow-rose-500/30">
              <Play size={20} className="fill-white translate-x-0.5" />
            </div>
            <div>
              <strong className="block text-base sm:text-lg font-bold text-foreground">
                Prefer to watch it happen?
              </strong>
              <span className="block text-xs sm:text-sm text-muted-foreground mt-0.5 max-w-2xl">
                The product tour plays the full flow for you: sign in, create a lead, convert it, move the deal and draft a quotation.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 font-bold text-sm text-primary shrink-0 group-hover/tour:translate-x-1 transition-transform">
            <span>Open the tour</span>
            <ArrowUpRight size={16} />
          </div>
        </Link>
      </div>

      {/* Fullscreen Modal Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Screenshot preview"
          >
            <div 
              className="absolute inset-0"
              onClick={() => setIsLightboxOpen(false)}
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-5xl rounded-2xl bg-card border border-border shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Modal Chrome */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/40 shrink-0">
                <div className="flex items-center gap-2.5">
                  <span className="size-2.5 rounded-full bg-[#fb5a78]" />
                  <span className="size-2.5 rounded-full bg-[#fbbf24]" />
                  <span className="size-2.5 rounded-full bg-[#34d399]" />
                  <div className="h-3.5 w-px bg-border/60 mx-1.5" />
                  <span className="text-xs font-mono font-bold text-foreground">
                    {activeStep.title}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    Step {currentIndex + 1} of {LIFECYCLE_STEPS.length}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex size-7 items-center justify-center rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    aria-label="Previous step"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex size-7 items-center justify-center rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    aria-label="Next step"
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

              {/* Viewport */}
              <div className="relative flex-1 min-h-[320px] sm:min-h-[500px] bg-slate-950 overflow-hidden flex items-center justify-center">
                <Image
                  src={activeStep.img}
                  alt={activeStep.title}
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t border-border bg-card flex items-center justify-between text-xs text-muted-foreground shrink-0">
                <p className="max-w-3xl truncate">
                  {activeStep.desc}
                </p>
                <span className="font-mono text-[11px] shrink-0 text-foreground">
                  BrainCRM / {activeStep.url}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
