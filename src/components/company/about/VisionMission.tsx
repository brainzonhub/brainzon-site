"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { companyConfig } from "@/config/company";

export function VisionMission() {
  const { about } = companyConfig;

  return (
    <section className="relative py-24 bg-surface/20 border-b border-border/40 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[50%] w-[50%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <motion.div
            className="group relative p-8 sm:p-12 rounded-3xl border border-border bg-card/45 backdrop-blur-md hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-8 group-hover:scale-110 transition-transform">
              <Eye size={22} />
            </div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase mb-3">
              THE FUTURE WE ENVISION
            </span>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
              "{about.vision}"
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="group relative p-8 sm:p-12 rounded-3xl border border-border bg-card/45 backdrop-blur-md hover:border-secondary/50 hover:shadow-glow-secondary transition-all duration-300 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary mb-8 group-hover:scale-110 transition-transform">
              <Target size={22} />
            </div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-secondary uppercase mb-3">
              THE VALUE WE DELIVER
            </span>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
              "{about.mission}"
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
