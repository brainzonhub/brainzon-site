"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Database, Users, Cpu, Network, ArrowRight } from "lucide-react";

export function ProductsHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const floatingNodes = [
    { name: "BrainAI", icon: Cpu, color: "text-primary border-primary/30 shadow-glow-primary", x: "12%", y: "20%", delay: 0 },
    { name: "BrainERP", icon: Database, color: "text-violet-400 border-violet-500/30 shadow-[0_0_15px_rgba(167,139,250,0.2)]", x: "78%", y: "15%", delay: 1.5 },
    { name: "BrainCRM", icon: Users, color: "text-amber-400 border-amber-500/30 shadow-[0_0_15px_rgba(251,191,36,0.2)]", x: "18%", y: "70%", delay: 0.8 },
    { name: "BrainConnect", icon: Network, color: "text-secondary border-secondary/30 shadow-glow-secondary", x: "72%", y: "65%", delay: 2.2 },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 bg-background-image-surface-glow">
      {/* Background glow animations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      <Container className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left: Content */}
        <motion.div
          className="lg:col-span-6 text-center lg:text-left space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              Brainzon Suite
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1]">
              Explore Brainzon’s <br className="hidden md:inline" />
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(6,182,212,0.12)] dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                Enterprise Software
              </span>{" "}
              Ecosystem
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Unified platforms for ERP, CRM, AI, and system integration—engineered for scale, efficiency, and growth.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/95 shadow-glow-primary transition-all duration-200"
            >
              <span>Book a Demo</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card-opaque text-foreground hover:bg-muted/40 hover:border-foreground/20 transition-all duration-200"
            >
              Talk to an Expert
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Modern Interactive Visual */}
        <motion.div
          className="lg:col-span-6 relative w-full aspect-square max-w-[500px] mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Inner Connecting Paths SVG */}
          <div className="absolute inset-0 z-0">
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
              {/* Central node connection lines */}
              <motion.line
                x1="200" y1="200" x2="80" y2="120"
                stroke="currentColor" className="text-primary/20 dark:text-primary/10" strokeWidth="2"
                strokeDasharray="4 4"
              />
              <motion.line
                x1="200" y1="200" x2="320" y2="100"
                stroke="currentColor" className="text-violet-500/20 dark:text-violet-500/10" strokeWidth="2"
                strokeDasharray="4 4"
              />
              <motion.line
                x1="200" y1="200" x2="100" y2="300"
                stroke="currentColor" className="text-amber-500/20 dark:text-amber-500/10" strokeWidth="2"
                strokeDasharray="4 4"
              />
              <motion.line
                x1="200" y1="200" x2="300" y2="280"
                stroke="currentColor" className="text-secondary/20 dark:text-secondary/10" strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Central Platform Core Node */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              {/* Outer pulsing ring */}
              <motion.div
                className="absolute inset-0 -m-6 rounded-full border border-primary/30 bg-primary/5 shadow-glow-primary pointer-events-none"
                animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0.1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Platform Core Shield */}
              <div className="flex flex-col items-center justify-center size-28 rounded-full border border-border bg-card-opaque shadow-elevated">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Platform</span>
                <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Core</span>
              </div>
            </div>
          </div>

          {/* Floating Product Nodes */}
          {floatingNodes.map((node) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.name}
                className="absolute z-20 flex flex-col items-center gap-2 group cursor-pointer"
                style={{ top: node.y, left: node.x }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: node.delay,
                }}
              >
                <div className={`size-14 rounded-2xl border bg-card-opaque flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${node.color}`}>
                  <Icon size={24} />
                </div>
                <div className="px-3 py-1 rounded-full border border-border bg-card-opaque text-xs font-semibold shadow-card text-foreground group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  {node.name}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
