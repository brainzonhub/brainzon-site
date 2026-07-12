"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, Workflow, Handshake } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { companyConfig } from "@/config/company";

export function EngineeringPhilosophy() {
  const { engineeringPhilosophy } = companyConfig;

  // Map icons for principles
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Workflow size={20} className="text-secondary animate-pulse" />;
      case 1:
        return <Shield size={20} className="text-primary" />;
      case 2:
        return <Terminal size={20} className="text-cyan-400" />;
      case 3:
        return <Handshake size={20} className="text-violet-400" />;
      default:
        return <Terminal size={20} className="text-muted-foreground" />;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section className="relative py-24 bg-background border-b border-border/40 overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
            ENGINEERING DNA
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-4">
            How We Build Technology
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Our guiding engineering principles ensure we write software that is clean, secure, performant, and aligned with client business outcomes.
          </p>
        </div>

        {/* Principles Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {engineeringPhilosophy.map((item, idx) => (
            <motion.div
              key={item.title}
              className="group relative p-6 rounded-2xl border border-border bg-card/45 backdrop-blur-md hover:border-primary/50 hover:shadow-glow-primary hover:scale-[1.02] transition-all duration-300 flex flex-col items-start overflow-hidden"
              variants={cardVariants}
            >
              {/* Card Corner Target Indicators */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-border/40 rounded-tl group-hover:border-primary/60 transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-border/40 rounded-tr group-hover:border-primary/60 transition-colors" />

              {/* Number Index */}
              <span className="absolute top-4 right-4 text-[9px] font-mono font-bold text-muted-foreground/30 group-hover:text-primary/30 transition-colors">
                {"//"} 0{idx + 1}
              </span>

              {/* Icon Container */}
              <div className="flex size-10 items-center justify-center rounded-xl bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 mb-6">
                {getIcon(idx)}
              </div>

              {/* Title & Description */}
              <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-xs text-muted-foreground leading-relaxed flex-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
