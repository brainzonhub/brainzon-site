"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Activity, ShieldCheck, Database, Layers } from "lucide-react";
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1]"
              variants={itemVariants}
            >
              Building The <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(6,182,212,0.12)] dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">Digital Foundations</span><br />
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
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/45 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>Work With Us</span>
                <ArrowRight size={16} className="text-primary" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Modern Tech Dashboard Viewport */}
          <motion.div 
            className="lg:col-span-6 hidden lg:flex justify-center relative w-full h-[420px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.3 }}
          >
            <div className="relative w-full h-full border border-border/30 rounded-3xl bg-surface/20 backdrop-blur-md overflow-hidden shadow-2xl flex items-center justify-center">
              {/* Outer Grid overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(30,51,77,0.04)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

              {/* Floating blur orbs */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-[pulse_4s_infinite]" />
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-[pulse_6s_infinite_reverse]" />

              {/* Mock Dashboard Window */}
              <div className="relative w-[90%] h-[90%] rounded-2xl border border-border/50 bg-card/90 backdrop-blur-md p-4 flex flex-col shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:border-primary/20 group">
                {/* HUD corners */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-primary/40 rounded-tl" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-primary/40 rounded-tr" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-primary/40 rounded-bl" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-primary/40 rounded-br" />

                {/* Top Control Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-border/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="text-[10px] font-mono text-foreground/80 tracking-wider flex items-center gap-1.5 bg-background/60 px-3 py-1 rounded border border-border/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                    <span className="font-bold">ENGINE STATUS: ONLINE</span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col justify-between pt-3">
                  {/* Dynamic Wave Chart */}
                  <div className="relative w-full h-20 rounded-lg bg-background/60 border border-border/10 overflow-hidden flex items-center justify-center p-2">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px]" />
                    
                    {/* SVG Pulsing Wave */}
                    <svg className="w-full h-full text-primary" viewBox="0 0 300 80" preserveAspectRatio="none">
                      <style>{`
                        @keyframes strokeOffset {
                          to {
                            stroke-dashoffset: -40;
                          }
                        }
                        .pulse-wave {
                          stroke-dasharray: 6 12;
                          animation: strokeOffset 3s linear infinite;
                        }
                      `}</style>
                      <path 
                        d="M0,45 Q40,15 80,55 T160,35 T240,70 T300,40" 
                        fill="none" 
                        stroke="var(--primary)" 
                        strokeWidth="2.5" 
                        className="pulse-wave"
                      />
                      <path 
                        d="M0,45 Q30,70 70,35 T150,60 T220,25 T300,50" 
                        fill="none" 
                        stroke="var(--secondary)" 
                        strokeWidth="1.5" 
                        className="opacity-55 animate-pulse"
                      />
                    </svg>

                    <span className="absolute top-2 left-3 text-[8px] font-mono text-muted-foreground font-semibold tracking-wider">
                      TRANSACTION & INTEGRATION THROUGHPUT
                    </span>
                  </div>

                  {/* Operational Logs */}
                  <div className="flex-1 my-2 flex flex-col justify-center gap-1 p-2.5 rounded-lg bg-background/60 border border-border/10 font-mono text-[9px] text-muted-foreground overflow-hidden">
                    <div className="flex items-center gap-2 mb-0.5">
                      <Terminal size={10} className="text-secondary" />
                      <span className="text-foreground font-bold">SYSTEM TELEMETRY LOGS</span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground border-t border-border/5 pt-1">
                      <span>&gt; ERP Ledger replication stream</span>
                      <span className="text-emerald-500 font-semibold">ACTIVE</span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span>&gt; Customer 360 models loading</span>
                      <span className="text-primary font-semibold">SYNCED</span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span>&gt; Multi-cloud replication sync</span>
                      <span className="text-cyan-400 font-semibold">AWS &lt;-&gt; AZURE</span>
                    </div>
                  </div>

                  {/* Telemetry Footer */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/10">
                    <div className="flex flex-col p-1.5 rounded bg-background/50 border border-border/5 text-center">
                      <span className="text-[8px] font-mono text-muted-foreground font-semibold tracking-wider uppercase">DELIVERY</span>
                      <span className="text-[11px] font-extrabold text-foreground mt-0.5 flex items-center justify-center gap-0.5">
                        <Activity size={9} className="text-primary animate-pulse" />
                        <span>100+ Clients</span>
                      </span>
                    </div>
                    <div className="flex flex-col p-1.5 rounded bg-background/50 border border-border/5 text-center">
                      <span className="text-[8px] font-mono text-muted-foreground font-semibold tracking-wider uppercase">AI UPTIME</span>
                      <span className="text-[11px] font-extrabold text-foreground mt-0.5 flex items-center justify-center gap-0.5">
                        <Sparkles size={9} className="text-secondary animate-pulse" />
                        <span>99.8%</span>
                      </span>
                    </div>
                    <div className="flex flex-col p-1.5 rounded bg-background/50 border border-border/5 text-center">
                      <span className="text-[8px] font-mono text-muted-foreground font-semibold tracking-wider uppercase">SECURITY</span>
                      <span className="text-[11px] font-extrabold text-foreground mt-0.5 flex items-center justify-center gap-0.5">
                        <ShieldCheck size={9} className="text-emerald-500" />
                        <span>ISO SECURE</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
