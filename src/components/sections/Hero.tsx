"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Shield, 
  Database, 
  Users, 
  Cpu, 
  Network, 
  Briefcase, 
  Package, 
  GitBranch, 
  RefreshCw, 
  Code2, 
  Cloud 
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-20 border-b border-border/40 bg-background transition-colors duration-300">
      {/* Dynamic background glows */}
      <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      {/* Decorative tech grid backdrop */}
      <div 
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading and copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 mb-6 animate-pulse">
              Enterprise Software, Reimagined
            </span>

            <h1 className="text-display font-extrabold tracking-tight text-foreground leading-[1.05]">
              Architecting the <br className="hidden sm:inline" />
              <span className="bg-brand-gradient bg-clip-text text-transparent">Next Era</span> of Enterprise Innovation
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Unifying proprietary ERP engines, pipeline CRMs, predictive AI, and cloud legacy modernization into one secure, high-resilience digital foundation.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="/solutions"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                )}
              >
                <span>Explore Ecosystem</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/talk-to-expert"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/40 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                <span>Consult an Expert</span>
                <ArrowRight size={16} className="text-primary" />
              </Link>
            </div>

            {/* Micro-trust banner */}
            <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground/80">
              <div className="flex size-6 items-center justify-center rounded-full bg-accent/10 border border-accent/20 text-accent shrink-0">
                <Shield size={12} />
              </div>
              <span>Built for ambitious teams modernizing what matters.</span>
            </div>
          </div>          {/* Right Column: Ecosystem Grid Connection Dashboard Graphic */}
          <div className="lg:col-span-6 flex justify-center relative w-full h-[400px] sm:h-[480px] md:h-[520px] mt-6 lg:mt-0 lg:-translate-y-8">
            {/* SVG Topology Connections Map */}
            <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none" viewBox="0 0 500 500" preserveAspectRatio="none">
              {/* Glow Filters */}
              <defs>
                <filter id="glow-cyan-packet" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glow-red-packet" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glow-yellow-packet" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Static connection lines (background wires) */}
              <path d="M 250 250 L 250 100" stroke="currentColor" className="text-border/85" strokeWidth="2.2" />
              <path d="M 250 250 L 100 250" stroke="currentColor" className="text-border/85" strokeWidth="2.2" />
              <path d="M 250 250 L 400 250" stroke="currentColor" className="text-border/85" strokeWidth="2.2" />
              <path d="M 250 250 L 250 400" stroke="currentColor" className="text-border/85" strokeWidth="2.2" />

              <path d="M 250 250 L 120 90" stroke="currentColor" className="text-border/65" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 250 250 L 380 90" stroke="currentColor" className="text-border/65" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 250 250 L 60 160" stroke="currentColor" className="text-border/65" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 250 250 L 60 340" stroke="currentColor" className="text-border/65" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 250 250 L 440 160" stroke="currentColor" className="text-border/65" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 250 250 L 440 340" stroke="currentColor" className="text-border/65" strokeWidth="1.5" strokeDasharray="4 4" />

              {/* 2. Animated passing network packets (Data Pass Circles) */}
              {/* Core 4 Products */}
              <circle r="3.5" fill="#06b6d4" filter="url(#glow-cyan-packet)">
                <animateMotion dur="1.8s" repeatCount="indefinite" path="M 250 250 L 250 100" />
              </circle>
              <circle r="3.5" fill="#ef4444" filter="url(#glow-red-packet)">
                <animateMotion dur="2.0s" repeatCount="indefinite" path="M 250 250 L 100 250" />
              </circle>
              <circle r="3.5" fill="#eab308" filter="url(#glow-yellow-packet)">
                <animateMotion dur="1.6s" repeatCount="indefinite" path="M 250 250 L 400 250" />
              </circle>
              <circle r="3.5" fill="#06b6d4" filter="url(#glow-cyan-packet)">
                <animateMotion dur="2.2s" repeatCount="indefinite" path="M 250 250 L 250 400" />
              </circle>

              {/* Extensions and Partner integrations */}
              <circle r="2.5" fill="#06b6d4" filter="url(#glow-cyan-packet)">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M 250 250 L 120 90" />
              </circle>
              <circle r="2.5" fill="#ef4444" filter="url(#glow-red-packet)">
                <animateMotion dur="2.6s" repeatCount="indefinite" path="M 250 250 L 380 90" />
              </circle>
              <circle r="2.5" fill="#ef4444" filter="url(#glow-red-packet)">
                <animateMotion dur="2.3s" repeatCount="indefinite" path="M 250 250 L 60 160" />
              </circle>
              <circle r="2.5" fill="#eab308" filter="url(#glow-yellow-packet)">
                <animateMotion dur="2.7s" repeatCount="indefinite" path="M 250 250 L 60 340" />
              </circle>
              <circle r="2.5" fill="#06b6d4" filter="url(#glow-cyan-packet)">
                <animateMotion dur="2.4s" repeatCount="indefinite" path="M 250 250 L 440 160" />
              </circle>
              <circle r="2.5" fill="#eab308" filter="url(#glow-yellow-packet)">
                <animateMotion dur="2.8s" repeatCount="indefinite" path="M 250 250 L 440 340" />
              </circle>
            </svg>

            {/* 1. Center Core Logo */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="relative size-14 rounded-2xl bg-card border border-border shadow-glow-primary p-2 flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite]">
                <Image
                  src="/icon.png"
                  alt="Brainzon Icon"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
            </div>

            {/* 2. BrainERP */}
            <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/30 bg-card/90 hover:border-primary hover:shadow-[0_0_15px_rgba(6,182,212,0.35)] backdrop-blur-md shadow-card hover:scale-105 transition-all cursor-pointer group">
                <div className="flex size-4 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Database size={10} />
                </div>
                <span className="text-[9px] font-mono font-bold tracking-wider text-foreground">BrainERP</span>
                <span className="size-1 rounded-full bg-primary animate-pulse shrink-0" />
              </div>
            </div>

            {/* 3. BrainCRM */}
            <div className="absolute top-[50%] left-[20%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-secondary/30 bg-card/90 hover:border-secondary hover:shadow-[0_0_15px_rgba(239,68,68,0.35)] backdrop-blur-md shadow-card hover:scale-105 transition-all cursor-pointer group">
                <div className="flex size-4 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Users size={10} />
                </div>
                <span className="text-[9px] font-mono font-bold tracking-wider text-foreground">BrainCRM</span>
                <span className="size-1 rounded-full bg-secondary animate-pulse shrink-0" />
              </div>
            </div>

            {/* 4. BrainAI */}
            <div className="absolute top-[50%] left-[80%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent/30 bg-card/90 hover:border-accent hover:shadow-[0_0_15px_rgba(234,179,8,0.35)] backdrop-blur-md shadow-card hover:scale-105 transition-all cursor-pointer group">
                <div className="flex size-4 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Cpu size={10} />
                </div>
                <span className="text-[9px] font-mono font-bold tracking-wider text-foreground">BrainAI</span>
                <span className="size-1 rounded-full bg-accent animate-pulse shrink-0" />
              </div>
            </div>

            {/* 5. BrainConnect */}
            <div className="absolute top-[80%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/35 bg-card/90 hover:border-primary hover:shadow-[0_0_15px_rgba(6,182,212,0.35)] backdrop-blur-md shadow-card hover:scale-105 transition-all cursor-pointer group">
                <div className="flex size-4 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Network size={10} />
                </div>
                <span className="text-[9px] font-mono font-bold tracking-wider text-foreground">BrainConnect</span>
                <span className="size-1 rounded-full bg-primary animate-pulse shrink-0" />
              </div>
            </div>

            {/* 6. Dynamics 365 BC */}
            <div className="absolute top-[18%] left-[24%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/90 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] backdrop-blur-md shadow-card hover:scale-105 transition-all cursor-pointer group">
                <div className="flex size-4 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Briefcase size={10} />
                </div>
                <span className="text-[9px] font-mono font-bold tracking-wider text-foreground">Dynamics 365 BC</span>
              </div>
            </div>

            {/* 7. Odoo */}
            <div className="absolute top-[32%] left-[12%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/90 hover:border-secondary/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.25)] backdrop-blur-md shadow-card hover:scale-105 transition-all cursor-pointer group">
                <div className="flex size-4 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Package size={10} />
                </div>
                <span className="text-[9px] font-mono font-bold tracking-wider text-foreground">Odoo</span>
              </div>
            </div>

            {/* 8. ERPNext */}
            <div className="absolute top-[68%] left-[12%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/90 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(234,179,8,0.25)] backdrop-blur-md shadow-card hover:scale-105 transition-all cursor-pointer group">
                <div className="flex size-4 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <GitBranch size={10} />
                </div>
                <span className="text-[9px] font-mono font-bold tracking-wider text-foreground">ERPNext</span>
              </div>
            </div>

            {/* 9. Modernization */}
            <div className="absolute top-[18%] left-[76%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/90 hover:border-secondary/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.25)] backdrop-blur-md shadow-card hover:scale-105 transition-all cursor-pointer group">
                <div className="flex size-4 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <RefreshCw size={10} />
                </div>
                <span className="text-[9px] font-mono font-bold tracking-wider text-foreground">Modernization</span>
              </div>
            </div>

            {/* 10. Custom Software */}
            <div className="absolute top-[32%] left-[88%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/90 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] backdrop-blur-md shadow-card hover:scale-105 transition-all cursor-pointer group">
                <div className="flex size-4 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Code2 size={10} />
                </div>
                <span className="text-[9px] font-mono font-bold tracking-wider text-foreground">Custom Software</span>
              </div>
            </div>

            {/* 11. Cloud */}
            <div className="absolute top-[68%] left-[88%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/90 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(234,179,8,0.25)] backdrop-blur-md shadow-card hover:scale-105 transition-all cursor-pointer group">
                <div className="flex size-4 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Cloud size={10} />
                </div>
                <span className="text-[9px] font-mono font-bold tracking-wider text-foreground">Cloud</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Footer Bar: One Intelligent Foundation */}
        <div className="mt-20 pt-8 border-t border-border/40">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-1/4">
              <h3 className="text-lg font-bold text-foreground tracking-tight">One intelligent foundation</h3>
              <p className="text-xs text-muted-foreground mt-1">Transforming enterprise core workflows</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:w-3/4">
              {/* Item 1 */}
              <div className="flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <Database size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground">ERP & Operations</h4>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-normal">
                    Streamline processes. Optimize resources. Drive performance.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
                <div className="flex size-9 items-center justify-center rounded-lg bg-secondary/10 text-secondary shrink-0">
                  <Users size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground">CRM & Growth</h4>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-normal">
                    Deepen relationships. Accelerate pipeline. Retain with impact.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
                <div className="flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                  <GitBranch size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground">Legacy Modernization</h4>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-normal">
                    Modernize with confidence. Extend value. Future-proof your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
