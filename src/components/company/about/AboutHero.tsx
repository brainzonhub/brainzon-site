"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Database, Users, Cpu, Network, Cloud } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-36 border-b border-border/40 bg-background transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-70 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />

      {/* Tech grid background */}
      <div 
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div 
            className="lg:col-span-6 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              className="badge-accent mb-4"
              variants={itemVariants}
            >
              Enterprise Story
            </motion.span>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1]"
              variants={itemVariants}
            >
              Building The <br className="hidden sm:inline" />
              <span className="bg-brand-gradient bg-clip-text text-transparent">Digital Foundations</span><br />
              Of Tomorrow
            </motion.h1>

            <motion.p 
              className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              Brainzon helps businesses transform operations through enterprise software, intelligent platforms, AI innovation, and modern digital architecture.
            </motion.p>

            <motion.div 
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
              variants={itemVariants}
            >
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/talk-to-expert"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/45 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>Work With Us</span>
                <ArrowRight size={16} className="text-primary" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Ecosystem Visual */}
          <motion.div 
            className="lg:col-span-6 hidden lg:flex justify-center relative w-full h-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative w-full h-full border border-border/40 rounded-3xl bg-surface/30 backdrop-blur-md overflow-hidden shadow-elevated flex items-center justify-center">
              {/* Grid Overlay inside visual container */}
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

              {/* SVG Network Connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                <style>{`
                  @keyframes dash {
                    to {
                      stroke-dashoffset: -30;
                    }
                  }
                  .network-line {
                    stroke-dasharray: 4 8;
                    animation: dash 3s linear infinite;
                  }
                `}</style>
                {/* Center Hub to Outer Nodes */}
                <path d="M 200 200 L 90 90" stroke="currentColor" className="text-border/40" strokeWidth="1" />
                <path d="M 200 200 L 310 90" stroke="currentColor" className="text-border/40" strokeWidth="1" />
                <path d="M 200 200 L 70 200" stroke="currentColor" className="text-border/40" strokeWidth="1" />
                <path d="M 200 200 L 330 200" stroke="currentColor" className="text-border/40" strokeWidth="1" />
                <path d="M 200 200 L 90 310" stroke="currentColor" className="text-border/40" strokeWidth="1" />
                <path d="M 200 200 L 310 310" stroke="currentColor" className="text-border/40" strokeWidth="1" />

                {/* Flow lines */}
                <path d="M 200 200 L 90 90" stroke="var(--primary)" className="network-line opacity-60" strokeWidth="1.2" />
                <path d="M 200 200 L 310 90" stroke="var(--primary)" className="network-line opacity-60" strokeWidth="1.2" />
                <path d="M 200 200 L 70 200" stroke="var(--secondary)" className="network-line opacity-60" strokeWidth="1.2" />
                <path d="M 200 200 L 330 200" stroke="var(--secondary)" className="network-line opacity-60" strokeWidth="1.2" />
                <path d="M 200 200 L 90 310" stroke="var(--primary)" className="network-line opacity-60" strokeWidth="1.2" />
                <path d="M 200 200 L 310 310" stroke="var(--primary)" className="network-line opacity-60" strokeWidth="1.2" />
              </svg>

              {/* Central Core Node (Brainzon) */}
              <motion.div 
                className="absolute size-20 rounded-full border-2 border-primary bg-background shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center z-10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-bold text-foreground font-mono tracking-widest leading-none">BRAINZON</span>
                  <span className="text-[6px] text-cyan-400 font-mono tracking-wider mt-1 uppercase">HQ CORE</span>
                </div>
              </motion.div>

              {/* Satellite Node 1: ERP (Top-Left) */}
              <motion.div 
                className="absolute left-[22.5%] top-[22.5%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 p-1.5 pr-2.5 rounded-xl border border-border bg-card/85 backdrop-blur-xs shadow-sm hover:border-primary/40 hover:scale-105 transition-all duration-300"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                <div className="flex size-5 items-center justify-center rounded bg-blue-500/10 text-blue-400">
                  <Database size={10} />
                </div>
                <span className="text-[9px] font-bold text-foreground">BrainERP</span>
              </motion.div>

              {/* Satellite Node 2: CRM (Top-Right) */}
              <motion.div 
                className="absolute right-[22.5%] top-[22.5%] translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 p-1.5 pr-2.5 rounded-xl border border-border bg-card/85 backdrop-blur-xs shadow-sm hover:border-primary/40 hover:scale-105 transition-all duration-300"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex size-5 items-center justify-center rounded bg-rose-500/10 text-rose-400">
                  <Users size={10} />
                </div>
                <span className="text-[9px] font-bold text-foreground">BrainCRM</span>
              </motion.div>

              {/* Satellite Node 3: AI (Bottom-Right) */}
              <motion.div 
                className="absolute right-[22.5%] bottom-[22.5%] translate-x-1/2 translate-y-1/2 flex items-center gap-1.5 p-1.5 pr-2.5 rounded-xl border border-border bg-card/85 backdrop-blur-xs shadow-sm hover:border-primary/40 hover:scale-105 transition-all duration-300"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <div className="flex size-5 items-center justify-center rounded bg-cyan-500/10 text-cyan-400">
                  <Sparkles size={10} />
                </div>
                <span className="text-[9px] font-bold text-foreground">BrainAI</span>
              </motion.div>

              {/* Satellite Node 4: Integration (Bottom-Left) */}
              <motion.div 
                className="absolute left-[22.5%] bottom-[22.5%] -translate-x-1/2 translate-y-1/2 flex items-center gap-1.5 p-1.5 pr-2.5 rounded-xl border border-border bg-card/85 backdrop-blur-xs shadow-sm hover:border-primary/40 hover:scale-105 transition-all duration-300"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
              >
                <div className="flex size-5 items-center justify-center rounded bg-violet-500/10 text-violet-400">
                  <Network size={10} />
                </div>
                <span className="text-[9px] font-bold text-foreground">BrainConnect</span>
              </motion.div>

              {/* Satellite Node 5: Cloud (Mid-Left) */}
              <motion.div 
                className="absolute left-[17.5%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 p-1.5 pr-2.5 rounded-xl border border-border bg-card/85 backdrop-blur-xs shadow-sm hover:border-primary/40 hover:scale-105 transition-all duration-300"
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
              >
                <div className="flex size-5 items-center justify-center rounded bg-emerald-500/10 text-emerald-400">
                  <Cloud size={10} />
                </div>
                <span className="text-[9px] font-bold text-foreground">Cloud</span>
              </motion.div>

              {/* Satellite Node 6: Modernization (Mid-Right) */}
              <motion.div 
                className="absolute right-[17.5%] top-[50%] translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 p-1.5 pr-2.5 rounded-xl border border-border bg-card/85 backdrop-blur-xs shadow-sm hover:border-primary/40 hover:scale-105 transition-all duration-300"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
              >
                <div className="flex size-5 items-center justify-center rounded bg-amber-500/10 text-amber-400">
                  <Cpu size={10} />
                </div>
                <span className="text-[9px] font-bold text-foreground">Modernization</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
