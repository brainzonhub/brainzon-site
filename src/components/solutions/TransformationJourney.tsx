"use client";

import { Eye, Compass, RefreshCw, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import { timelineJourney } from "@/config/solutions";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

// Map step indexes to Lucide icons and themes
const stepMeta = [
  {
    icon: Eye,
    color: "primary",
    glowClass: "hover:border-primary/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    iconBg: "bg-primary/10 text-primary border-primary/20",
    badgeBg: "bg-primary/5 text-primary border-primary/20"
  },
  {
    icon: Compass,
    color: "secondary",
    glowClass: "hover:border-secondary/50 hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] dark:hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
    iconBg: "bg-secondary/10 text-secondary border-secondary/20",
    badgeBg: "bg-secondary/5 text-secondary border-secondary/20"
  },
  {
    icon: RefreshCw,
    color: "accent",
    glowClass: "hover:border-accent/50 hover:shadow-[0_0_25px_rgba(234,179,8,0.2)] dark:hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]",
    iconBg: "bg-accent/10 text-accent border-accent/20",
    badgeBg: "bg-accent/5 text-accent border-accent/20"
  },
  {
    icon: Gauge,
    color: "primary",
    glowClass: "hover:border-primary/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    iconBg: "bg-primary/10 text-primary border-primary/20",
    badgeBg: "bg-primary/5 text-primary border-primary/20"
  }
];

export function TransformationJourney() {
  return (
    <section className="relative py-20 md:py-28 border-b border-border/40 bg-background transition-colors duration-300">
      {/* Decorative backing glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[70%] w-[80%] rounded-full bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="badge-accent">Our Methodology</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-3">
            From Vision To Digital Reality
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            A structured, repeatable delivery framework designed to protect business operations while migrating databases and codebases safely.
          </p>
        </div>

        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting timeline line */}
          <span 
            className="absolute top-[48px] right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-transparent via-border/80 to-transparent lg:block" 
            aria-hidden="true" 
          />

          {timelineJourney.map((step, idx) => {
            const meta = stepMeta[idx] || stepMeta[0]!;
            const StepIcon = meta.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={cn(
                  "relative flex flex-col items-start text-left p-6 sm:p-7 rounded-2xl border border-border/60 bg-gradient-to-b from-card to-card/50 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-card/90",
                  meta.glowClass,
                  "group"
                )}
              >
                {/* Large watermark step number background */}
                <span className="absolute bottom-4 right-6 text-7xl font-extrabold font-mono select-none text-slate-400/5 dark:text-slate-600/5 group-hover:text-primary/10 dark:group-hover:text-primary/10 transition-colors duration-300">
                  {step.number}
                </span>

                {/* Top element: Step Circle & Icon */}
                <div className="flex items-center justify-between w-full relative z-10">
                  <div className={cn(
                    "flex size-14 items-center justify-center rounded-2xl border shadow-sm transition-all duration-300 group-hover:scale-105",
                    meta.iconBg
                  )}>
                    <StepIcon size={22} className="group-hover:animate-pulse" />
                  </div>

                  <span className={cn(
                    "text-[8px] font-bold font-mono tracking-widest px-2 py-0.5 rounded border uppercase",
                    meta.badgeBg
                  )}>
                    Phase {step.number}
                  </span>
                </div>

                {/* Text Content */}
                <div className="mt-6 relative z-10">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase">
                    {step.subtitle}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mt-1.5 flex items-center gap-1.5 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-muted-foreground mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Glow ring indicator */}
                <span className={cn(
                  "absolute inset-x-0 bottom-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  meta.color === "primary" && "bg-primary",
                  meta.color === "secondary" && "bg-secondary",
                  meta.color === "accent" && "bg-accent"
                )} />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
