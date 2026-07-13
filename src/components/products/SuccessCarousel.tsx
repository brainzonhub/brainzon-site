"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "BrainERP integrated our global warehouse supply chains in less than 3 months. The inventory accuracy metrics exceeded our wildest projections.",
    author: "Sarah Jenkins",
    role: "VP of Operations",
    company: "Apex Manufacturing",
    metric: "35%",
    metricLabel: "Efficiency Gain"
  },
  {
    quote: "BrainAI changed the way we parse legal document archives. What used to take junior lawyers days is completed in seconds with zero transcription errors.",
    author: "Marcus Chen",
    role: "Chief Technology Officer",
    company: "FintechFlow Legal",
    metric: "10x",
    metricLabel: "Processing Speed"
  },
  {
    quote: "Integrating our payment triggers and CRM pipelines via BrainConnect was seamless. Setup took half the time compared to traditional middleware options.",
    author: "David Ross",
    role: "Head of Infrastructure",
    company: "Omni Retail Group",
    metric: "75%",
    metricLabel: "Faster Integration"
  }
];

export function SuccessCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[index]!;

  return (
    <section className="py-24 bg-card/10 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-60 pointer-events-none" />
      <Container className="space-y-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 border border-secondary/20">
            Case Studies
          </span>
          <h2 className="text-heading-2 font-bold tracking-tight">
            Trusted by Enterprises Globally
          </h2>
          <p className="text-sm text-muted-foreground">
            See how organizations deploy Brainzon products to drive digital scale, process efficiency, and automation.
          </p>
        </div>

        {/* Testimonial slider / carousel box */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card-opaque p-8 md:p-12 shadow-card relative overflow-hidden">
          <div className="absolute top-6 right-6 opacity-10 text-primary">
            <Quote size={80} />
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center min-h-[220px]">
            {/* Left: Metric Callout */}
            <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-border/80 pb-6 md:pb-0 md:pr-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight">
                    {current.metric}
                  </div>
                  <div className="text-xs font-bold text-foreground mt-1 uppercase tracking-widest">
                    {current.metricLabel}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Quote and Info */}
            <div className="md:col-span-8 space-y-6">
              <div className="min-h-[100px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-base text-muted-foreground italic leading-relaxed"
                  >
                    &ldquo;{current.quote}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-bold text-foreground block text-sm">{current.author}</span>
                    <span className="text-xs text-muted-foreground block mt-0.5">{current.role}, {current.company}</span>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                <div className="flex gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="size-10 rounded-full border border-border bg-card-opaque flex items-center justify-center hover:bg-muted text-foreground transition-all focus-visible:outline-none"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="size-10 rounded-full border border-border bg-card-opaque flex items-center justify-center hover:bg-muted text-foreground transition-all focus-visible:outline-none"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="pt-8 text-center space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Supported Enterprise Deployments</span>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            {["Apex Mfg", "FintechFlow", "Omni Retail", "Logistics Inc", "Global Storage", "SecureSys"].map((logo) => (
              <span key={logo} className="text-sm font-extrabold text-muted-foreground select-none tracking-tight">
                {logo}
              </span>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
