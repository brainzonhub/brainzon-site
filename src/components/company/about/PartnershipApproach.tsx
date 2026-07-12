"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Braces, RefreshCcw, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { companyConfig } from "@/config/company";

export function PartnershipApproach() {
  const { partnershipApproach } = companyConfig;

  // Step icons
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Search size={18} className="text-primary" />;
      case 1:
        return <PenTool size={18} className="text-secondary" />;
      case 2:
        return <Braces size={18} className="text-cyan-400" />;
      case 3:
        return <RefreshCcw size={18} className="text-emerald-400" />;
      default:
        return <Search size={18} className="text-muted-foreground" />;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section className="relative py-24 bg-background border-b border-border/40 overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
            OUR ENGAGEMENT MODEL
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-4">
            More Than A Technology Vendor
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
            We collaborate as an engineering partner, establishing transparent development gates to drive long-term business value.
          </p>
        </div>

        {/* Steps Pipeline Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connecting line behind pipeline on md+ screens */}
          <div className="absolute top-[36px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-primary/30 via-secondary/40 to-emerald-500/30 hidden md:block -z-10" />

          {partnershipApproach.map((item, idx) => (
            <motion.div
              key={item.step}
              className="flex flex-col items-center text-center group relative p-4"
              variants={stepVariants}
            >
              {/* Step indicator bubble */}
              <div className="relative flex size-14 items-center justify-center rounded-2xl border border-border bg-card shadow-sm group-hover:border-primary/50 group-hover:shadow-glow-primary transition-all duration-300 mb-6 z-10">
                {getStepIcon(idx)}
                <span className="absolute -bottom-2 right-[-2px] text-[8px] font-mono font-bold px-1 rounded bg-background border border-border/30 text-muted-foreground/60">
                  {item.step}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-normal max-w-[160px]">
                {item.description}
              </p>

              {/* Mobile Separator Arrow */}
              {idx < partnershipApproach.length - 1 && (
                <div className="block md:hidden text-muted-foreground/30 my-4">
                  <ArrowRight size={14} className="rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
