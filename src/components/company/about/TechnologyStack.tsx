"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, Cloud, Sparkles, Terminal } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { companyConfig } from "@/config/company";

export function TechnologyStack() {
  const { technologyStack } = companyConfig;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "frontend":
        return <Layout size={16} className="text-primary" />;
      case "backend":
        return <Server size={16} className="text-secondary" />;
      case "database":
        return <Database size={16} className="text-blue-400" />;
      case "cloud":
        return <Cloud size={16} className="text-emerald-400" />;
      case "ai":
        return <Sparkles size={16} className="text-yellow-400 animate-pulse" />;
      default:
        return <Terminal size={16} className="text-muted-foreground" />;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case "frontend":
        return "Frontend Layer";
      case "backend":
        return "Backend Engines";
      case "database":
        return "Data Stores";
      case "cloud":
        return "Cloud Architecture";
      case "ai":
        return "AI & Cognitive";
      default:
        return category;
    }
  };

  const categories = Object.keys(technologyStack) as Array<keyof typeof technologyStack>;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section className="relative py-24 bg-surface/20 border-b border-border/40 overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
            TECHNOLOGY DNA
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-4">
            Built With Modern Enterprise Technologies
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
            We utilize robust, industry-standard technology frameworks to ensure scale, low latency, high resilience, and compliance.
          </p>
        </div>

        {/* Technology Categorized Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category) => {
            const techList = technologyStack[category];
            return (
              <motion.div
                key={category}
                className="group relative p-5 rounded-2xl border border-border bg-card/45 backdrop-blur-md hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col items-start overflow-hidden"
                variants={cardVariants}
              >
                {/* Tech tag indicator */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/20 rounded-tl" />

                {/* Category Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-muted border border-border/10">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-xs font-bold text-foreground capitalize">
                    {getCategoryTitle(category)}
                  </h3>
                </div>

                {/* Tech Tags Cloud */}
                <div className="flex flex-col gap-2 w-full mt-2">
                  {techList.map((tech) => (
                    <div 
                      key={tech} 
                      className="flex items-center justify-between p-1.5 px-2.5 rounded bg-background/60 border border-border/10 text-[10px] text-muted-foreground font-medium group-hover:border-primary/10 transition-colors"
                    >
                      <span>{tech}</span>
                      <span className="inline-block w-1 h-1 rounded-full bg-emerald-500/60" />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
