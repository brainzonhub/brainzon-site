"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, GitBranch, Terminal, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { companyConfig } from "@/config/company";

export function CompanyStory() {
  const { about, statistics } = companyConfig;
  const statisticIcons: readonly { icon: LucideIcon; className: string }[] = [
    { icon: Terminal, className: "bg-blue-500/10 text-blue-400" },
    { icon: GitBranch, className: "bg-cyan-500/10 text-cyan-400" },
    { icon: Cpu, className: "bg-violet-500/10 text-violet-400" },
    { icon: ShieldCheck, className: "bg-emerald-500/10 text-emerald-400" },
  ];
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const } 
    }
  };

  return (
    <section className="relative py-20 bg-background border-b border-border/40 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          {/* Left Side: Brand Story */}
          <motion.div 
            className="lg:col-span-6 flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
              WHO IS BRAINZON?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
              Global Scale Digital Transformation Partner
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              {about.description}
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed mb-8">
              {about.philosophy}
            </p>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card/25">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Terminal size={14} />
                </div>
                <span className="text-xs font-bold text-foreground">Software Engineering</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card/25">
                <div className="flex size-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Cpu size={14} />
                </div>
                <span className="text-xs font-bold text-foreground">Digital Transformation</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card/25">
                <div className="flex size-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <GitBranch size={14} />
                </div>
                <span className="text-xs font-bold text-foreground">Business Automation</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card/25">
                <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <ShieldCheck size={14} />
                </div>
                <span className="text-xs font-bold text-foreground">Enterprise Applications</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Diagnostics Stats */}
          <motion.div 
            className="lg:col-span-6 grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {statistics.map((stat, idx) => {
              const iconConfig = statisticIcons[idx] ?? statisticIcons[0]!;
              const StatisticIcon = iconConfig.icon;

              return (
                <motion.div
                  key={stat.label}
                  className="group relative p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300 flex flex-col items-start overflow-hidden"
                  variants={cardVariants}
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="mb-4 relative z-10">
                    <div className={`flex size-8 items-center justify-center rounded-xl ${iconConfig.className}`}>
                      <StatisticIcon size={16} />
                    </div>
                  </div>
                  <span className="text-3xl font-extrabold text-foreground tracking-tight relative z-10">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-muted-foreground uppercase mt-2 relative z-10">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
