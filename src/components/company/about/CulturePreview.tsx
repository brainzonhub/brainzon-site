"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Heart, TrendingUp, HelpCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { companyConfig } from "@/config/company";

export function CulturePreview() {
  const { culture } = companyConfig;

  const getBehaviorIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu size={16} className="text-primary animate-pulse" />;
      case "Heart":
        return <Heart size={16} className="text-rose-500 animate-[pulse_2s_infinite]" />;
      case "TrendingUp":
        return <TrendingUp size={16} className="text-emerald-500" />;
      default:
        return <HelpCircle size={16} className="text-muted-foreground" />;
    }
  };

  return (
    <section className="relative py-24 bg-surface/20 border-b border-border/40 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          {/* Left Column: Narrative & CTA */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
              LIFE AT BRAINZON
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
              People Behind The Technology
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              At Brainzon, our culture is built on innovation, collaboration, and a strong commitment to delivering real business value.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed mb-8">
              We support flexible setups, continuous learning, and equip our engineering squads with premium tools. We foster an environment where people are empowered to think creatively and grow continuously.
            </p>
            
            <Link
              href="/company/careers"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
            >
              <span>Join Brainzon</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right Column: Behaviors List */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {culture.behaviors.map((item, idx) => (
              <div 
                key={item.title}
                className="group relative p-5 rounded-2xl border border-border bg-card/45 backdrop-blur-md hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex items-start gap-4 overflow-hidden"
              >
                {/* Visual indicator corner */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/20 rounded-tl" />

                {/* Icon Container */}
                <div className="flex size-10 items-center justify-center rounded-xl bg-muted border border-border/10 shrink-0">
                  {getBehaviorIcon(item.icon)}
                </div>

                {/* Details */}
                <div className="flex flex-col min-w-0">
                  <h4 className="text-xs font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
