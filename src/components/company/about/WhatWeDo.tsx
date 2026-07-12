"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Sparkles, Cpu, Network, Code, Terminal } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { companyConfig } from "@/config/company";

export function WhatWeDo() {
  const { capabilities } = companyConfig;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "LayoutDashboard":
        return <LayoutDashboard size={20} className="text-primary" />;
      case "Sparkles":
        return <Sparkles size={20} className="text-secondary" />;
      case "Cpu":
        return <Cpu size={20} className="text-cyan-400" />;
      case "Network":
        return <Network size={20} className="text-violet-400" />;
      case "Code":
        return <Code size={20} className="text-emerald-400" />;
      default:
        return <Terminal size={20} className="text-muted-foreground" />;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section className="relative py-24 bg-surface/10 border-b border-border/40 overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono font-bold tracking-widest text-secondary uppercase bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
            CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-4">
            From Strategy To Digital Execution
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Providing full-spectrum software engineering expertise to build resilient, future-ready business ecosystems.
          </p>
        </div>

        {/* Capability Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              className="group relative p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col items-start overflow-hidden"
              variants={cardVariants}
            >
              {/* Subtle card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon Container */}
              <div className="flex size-10 items-center justify-center rounded-xl bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 mb-6 relative z-10">
                {getIcon(cap.icon)}
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-foreground mb-2 relative z-10 group-hover:text-primary transition-colors">
                {cap.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed relative z-10 flex-1">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
