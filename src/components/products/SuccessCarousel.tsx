"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container } from "@/components/layout/Container";

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
    quote: "Deploying BrainERP across our manufacturing facilities reduced material scheduling delays and unified our multi-warehouse inventory in real time.",
    author: "Sarah Jenkins",
    role: "VP of Operations",
    company: "Apex Manufacturing",
    metric: "35%",
    metricLabel: "Efficiency Gain"
  },
  {
    quote: "The BrainBooks AI Agent and structured general ledger transformed our monthly close. Reconciling banking feeds across entities now happens smoothly with complete auditability.",
    author: "Marcus Chen",
    role: "Chief Financial Officer",
    company: "FintechFlow Group",
    metric: "50%",
    metricLabel: "Faster Period-Close"
  },
  {
    quote: "Connecting BrainMKT campaign responses directly into our BrainCRM sales pipeline gave our sales team instant lead context and accelerated deal velocity.",
    author: "David Ross",
    role: "Head of Commercial Operations",
    company: "Omni Retail Group",
    metric: "40%",
    metricLabel: "Lead Velocity"
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

  const active = testimonials[index]!;

  return (
    <section className="py-24 bg-card/10 border-t border-border/50">
      <Container className="max-w-4xl space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Success Stories</span>
          <h2 className="text-heading-2 font-bold tracking-tight">Verified Enterprise Impact</h2>
        </div>

        <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-md p-8 md:p-12 shadow-elevated overflow-hidden min-h-[300px] flex flex-col justify-between">
          <Quote className="absolute top-6 right-6 size-16 text-primary/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed italic">
                &ldquo;{active.quote}&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border/50 pt-6">
                <div>
                  <h4 className="text-sm font-bold text-foreground">{active.author}</h4>
                  <p className="text-xs text-muted-foreground">
                    {active.role}, <span className="text-primary font-medium">{active.company}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-2xl font-black text-primary">{active.metric}</div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    {active.metricLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-end gap-2 pt-6">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-2 rounded-xl border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-2 rounded-xl border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
