"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquareCode } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function AboutCTA() {
  return (
    <section className="relative py-24 border-t border-border/40 bg-surface/10 overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-[-20%] left-[-20%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-65 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-45 blur-3xl pointer-events-none" />

      <Container>
        <motion.div 
          className="max-w-4xl mx-auto rounded-3xl border border-border bg-card/40 backdrop-blur-md p-8 md:p-14 text-center relative overflow-hidden shadow-elevated"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Tech target corners */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/30 rounded-tl" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/30 rounded-tr" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/30 rounded-bl" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/30 rounded-br" />

          {/* SVG floating tech elements */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 800 300">
            <circle cx="100" cy="50" r="1.5" fill="var(--primary)" />
            <circle cx="700" cy="250" r="1.5" fill="var(--secondary)" />
            <line x1="100" y1="50" x2="200" y2="120" stroke="currentColor" className="text-border/20" strokeWidth="0.5" />
            <line x1="700" y1="250" x2="600" y2="150" stroke="currentColor" className="text-border/20" strokeWidth="0.5" />
          </svg>

          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-8 shadow-sm">
            <MessageSquareCode size={22} className="animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Let's Build The Future Together
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Partner with Brainzon to transform your ideas into scalable, secure, and intelligent digital solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
            <Link
              href="/talk-to-expert"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span>Start A Conversation</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/50 backdrop-blur-xs text-foreground hover:bg-muted/40 transition-colors duration-200 focus-visible:outline-none"
            >
              <span>Contact Us</span>
              <ArrowRight size={16} className="text-primary" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
