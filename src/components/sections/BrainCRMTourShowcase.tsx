"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  ExternalLink, 
  Lock, 
  Play, 
  RefreshCw, 
  Receipt, 
  Kanban,
  Building2,
  Trophy,
  ListTodo,
  Calendar,
  Package,
  Target,
  Coins,
  BarChart3,
  Sparkles,
  Key,
  ScrollText,
  Puzzle,
  UserCheck,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const ROTATING_WORDS = ["leads", "accounts", "deals", "follow-ups", "quotations"];

const MARQUEE_ITEMS = [
  { icon: Puzzle, label: "REST API and webhooks" },
  { icon: Target, label: "Leads" },
  { icon: UserCheck, label: "Contacts" },
  { icon: Building2, label: "Customer 360" },
  { icon: Trophy, label: "Opportunities" },
  { icon: Kanban, label: "Visual pipeline" },
  { icon: ListTodo, label: "Work queue" },
  { icon: Calendar, label: "Calendar" },
  { icon: Package, label: "Product catalog" },
  { icon: Receipt, label: "Quotations and PDF" },
  { icon: Target, label: "Targets and quotas" },
  { icon: Coins, label: "Commissions" },
  { icon: BarChart3, label: "Reports" },
  { icon: Sparkles, label: "AI assistant" },
  { icon: Key, label: "Roles and permissions" },
  { icon: ScrollText, label: "Audit logs" },
];

const NUMBERS = [
  { value: 19, label: "modules in one workspace" },
  { value: 9, label: "steps from lead to report, connected" },
  { value: 5, label: "built-in roles with scoped access" },
  { value: 1, label: "transaction to convert a lead" },
];

function CountUpNumber({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1200; // ms
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const current = Math.round(target * (1 - Math.pow(1 - progress, 3)));
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
}

export function BrainCRMTourShowcase() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 12, ry: 0, scale: 0.96 });
  const [wordIndex, setWordIndex] = useState(0);

  // Rotating words effect
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -6 + 10; // resting tilt around 10-12 deg
    const ry = ((x - cx) / cx) * 6;
    setTilt({ rx, ry, scale: 0.98 });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 12, ry: 0, scale: 0.96 });
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-28 border-b border-border/40 bg-gradient-to-b from-background via-surface/40 to-background">
      <style>{`
        @keyframes halo-breathe {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.08); }
        }
        @keyframes play-ripple {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes shine-sweep {
          0%, 55% { background-position: 140% 0; }
          100% { background-position: -60% 0; }
        }
        @keyframes chip-bob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-halo {
          animation: halo-breathe 6s ease-in-out infinite;
        }
        .animate-ripple-1 {
          animation: play-ripple 2.4s ease-out infinite;
        }
        .animate-ripple-2 {
          animation: play-ripple 2.4s ease-out 1.2s infinite;
        }
        .animate-shine {
          background-size: 250% 100%;
          animation: shine-sweep 7s ease-in-out infinite;
        }
        .animate-bob {
          animation: chip-bob 5s ease-in-out infinite;
        }
        .animate-marquee {
          animation: marquee-scroll 45s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[700px] h-[400px] rounded-full bg-radial-gradient from-primary/15 via-secondary/10 to-transparent blur-3xl pointer-events-none" />

      {/* Section Header: "From first lead to signed quotation, in one workspace." */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        {/* Top Announcement Pill */}
        <div className="mb-6">
          <Link
            href="/product-tour.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-border/80 bg-surface/80 hover:bg-surface hover:border-[#19b8dc]/60 backdrop-blur-md text-xs sm:text-sm font-medium text-foreground transition-all duration-200 group/ann shadow-xs"
          >
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4)] text-[#04121f]">
              New
            </span>
            <span>Watch the 2-minute interactive product tour</span>
            <ArrowRight size={13} className="text-muted-foreground group-hover/ann:translate-x-1 group-hover/ann:text-foreground transition-all" />
          </Link>
        </div>

        {/* Hero Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-foreground leading-[1.08] max-w-4xl mx-auto">
          From first lead to signed quotation,{" "}
          <span className="bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(0,156,180,0.18)] dark:drop-shadow-[0_0_20px_rgba(0,156,180,0.3)]">
            in one workspace.
          </span>
        </h2>

        {/* Lead description with Rotating Keywords */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          BrainCRM connects{" "}
          <span className="inline-block relative min-w-[6.8ch] font-bold text-[#009cb4] dark:text-[#19b8dc] text-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROTATING_WORDS[wordIndex]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="inline-block"
              >
                {ROTATING_WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          with Customer 360, a visual pipeline, follow-ups and reports, so every deal has an owner, a next step and a clear history.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/product-tour.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#f1384a] to-[#ff5a78] hover:from-[#e02d3f] hover:to-[#f04f6d] shadow-lg shadow-[#f1384a]/25 transition-all duration-200 hover:scale-[1.02]"
          >
            <Play size={16} className="fill-white text-white" />
            <span>Watch the product tour</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm border border-border/80 bg-card/60 backdrop-blur-sm text-foreground hover:bg-muted transition-all duration-200"
          >
            <span>Sign in to workspace</span>
            <ArrowRight size={15} className="text-primary" />
          </Link>
        </div>

        {/* Helper Note */}
        <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
          <ExternalLink size={12} className="text-primary" />
          <span>Opens in a new tab. Self-playing, no sign-up.</span>
        </p>
      </div>

      {/* 3D Browser Showcase Stage */}
      <div 
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ perspective: 1600 }}
      >
        {/* Dynamic Glowing Halo */}
        <div 
          className="absolute inset-x-8 top-10 bottom-4 -z-10 rounded-full blur-[70px] opacity-75 pointer-events-none animate-halo"
          style={{
            background: "radial-gradient(closest-side, rgba(25, 184, 220, 0.45), rgba(139, 123, 255, 0.25) 55%, transparent 80%)"
          }}
        />

        {/* 3D Tilted Browser Mockup */}
        <motion.div
          animate={{
            rotateX: tilt.rx,
            rotateY: tilt.ry,
            scale: tilt.scale,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 25 }}
          className="relative rounded-2xl border border-white/20 dark:border-white/10 bg-[#0a1a33] shadow-2xl overflow-hidden group/browser"
        >
          {/* Top Chrome Bar */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 bg-[#0a1a33] border-b border-white/10">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="size-2.5 rounded-full bg-[#fb5a78] border border-[#e0443e]/40 shadow-xs" />
              <span className="size-2.5 rounded-full bg-[#fbbf24] border border-[#dea123]/40 shadow-xs" />
              <span className="size-2.5 rounded-full bg-[#34d399] border border-[#1aab29]/40 shadow-xs" />
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.08] text-[11px] font-mono text-slate-300 max-w-[260px] truncate shadow-inner">
              <Lock size={10} className="text-emerald-400 shrink-0" />
              <span className="truncate">BrainCRM workspace</span>
            </div>
          </div>

          {/* Clickable Image & Play Button Link */}
          <Link
            href="/product-tour.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative aspect-[2160/1350] w-full overflow-hidden cursor-pointer"
            aria-label="Play BrainCRM product tour in a new tab"
          >
            <Image
              src="/images/products/braincrm/app-dashboard.jpg"
              alt="BrainCRM dashboard showing lead funnel, sales pipeline, won revenue and activity execution"
              fill
              priority
              unoptimized
              className="object-cover object-top w-full h-full"
            />

            {/* Sweep Shine Effect */}
            <div 
              className="absolute inset-0 pointer-events-none animate-shine"
              style={{
                background: "linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.22) 50%, transparent 60%)",
                backgroundPosition: "120% 0",
              }}
            />

            {/* Centered Pulsing Play Button */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#050b18]/85 backdrop-blur-md border border-white/30 text-white shadow-2xl transition-transform duration-300 group-hover/browser:scale-105">
              <div className="relative size-10 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-tr from-[#f1384a] to-[#ff6b7d] shadow-lg">
                <Play size={18} className="fill-white translate-x-0.5 text-white" />
                <span className="absolute inset-0 rounded-full border-2 border-[#f1384a] animate-ripple-1 pointer-events-none" />
                <span className="absolute inset-0 rounded-full border-2 border-[#f1384a] animate-ripple-2 pointer-events-none" />
              </div>
              <span className="text-sm font-bold tracking-tight pr-1">
                Play product tour
              </span>
            </div>
          </Link>
        </motion.div>

        {/* 3 Floating Glass Chips with Depth & Micro-Bob */}
        {/* Chip A: Lead converted (Bottom Left) */}
        <div 
          className="absolute -left-2 sm:-left-6 bottom-[14%] z-20 hidden md:flex items-center gap-3 max-w-[270px] p-3 rounded-2xl border border-white/60 dark:border-white/20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-foreground shadow-2xl animate-bob"
          style={{ animationDelay: "0s" }}
        >
          <div className="flex size-9 items-center justify-center rounded-xl bg-[#009cb4]/15 text-[#009cb4] shrink-0">
            <RefreshCw size={17} />
          </div>
          <div className="min-w-0">
            <strong className="block text-xs font-bold text-foreground truncate">
              Lead converted
            </strong>
            <span className="block text-[11px] text-muted-foreground leading-tight">
              Contact, account and opportunity created together
            </span>
          </div>
        </div>

        {/* Chip B: Quotation totals (Top Right) */}
        <div 
          className="absolute -right-2 sm:-right-6 top-[16%] z-20 hidden md:flex items-center gap-3 max-w-[260px] p-3 rounded-2xl border border-white/60 dark:border-white/20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-foreground shadow-2xl animate-bob"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="flex size-9 items-center justify-center rounded-xl bg-[#f1384a]/15 text-[#f1384a] shrink-0">
            <Receipt size={17} />
          </div>
          <div className="min-w-0">
            <strong className="block text-xs font-bold text-foreground truncate">
              Quotation totals
            </strong>
            <span className="block text-[11px] text-muted-foreground leading-tight">
              Recalculated on the server on every save
            </span>
          </div>
        </div>

        {/* Chip C: Deal moved (Bottom Right) */}
        <div 
          className="absolute -right-2 sm:-right-4 bottom-[8%] z-20 hidden md:flex items-center gap-3 max-w-[240px] p-3 rounded-2xl border border-white/60 dark:border-white/20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-foreground shadow-2xl animate-bob"
          style={{ animationDelay: "3s" }}
        >
          <div className="flex size-9 items-center justify-center rounded-xl bg-[#8b5cf6]/15 text-[#8b5cf6] shrink-0">
            <Kanban size={17} />
          </div>
          <div className="min-w-0">
            <strong className="block text-xs font-bold text-foreground truncate">
              Deal moved
            </strong>
            <span className="block text-[11px] text-muted-foreground leading-tight">
              Prospecting to Qualification
            </span>
          </div>
        </div>
      </div>

      {/* Capabilities Infinite Marquee Strip */}
      <div 
        className="relative z-10 mt-14 sm:mt-18 py-4 sm:py-5 border-y border-border/40 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)"
        }}
      >
        <div className="flex gap-3 w-max animate-marquee">
          {/* Double items for endless seamless loop */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => {
            const Icon = item.icon;
            return (
              <span
                key={`${item.label}-${idx}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/60 bg-card/80 backdrop-blur-sm text-xs font-semibold text-foreground whitespace-nowrap shadow-xs hover:border-primary/50 transition-colors"
              >
                <Icon size={13} className="text-[#009cb4] shrink-0" />
                <span>{item.label}</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Numbers / Key Metric Counters Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4">
          {NUMBERS.map((num, idx) => (
            <div 
              key={num.label}
              className={cn(
                "px-4 py-2 text-center flex flex-col items-center justify-center",
                idx !== 0 && "md:border-l border-border/50",
                idx % 2 !== 0 && "max-md:border-l border-border/50"
              )}
            >
              <span className="block text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight tabular-nums bg-gradient-to-b from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent leading-none">
                <CountUpNumber target={num.value} />
              </span>
              <span className="block mt-3 text-xs sm:text-sm text-muted-foreground font-medium max-w-[180px]">
                {num.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
