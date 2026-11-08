"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Is the product tour the real product?",
    answer: "Yes. The tour is built from screens captured from the running application, with its real styles. It runs entirely in your browser with demo data and does not change anything on a server."
  },
  {
    question: "Can several companies use the same installation?",
    answer: "Yes. BrainCRM is multi-tenant. Each organization's records are separated on the server, and every list, report and direct link is checked against the signed-in user's organization."
  },
  {
    question: "Who can see which records?",
    answer: "Access combines role, team scope and ownership. The built-in roles are System Administrator, Sales Manager, Sales Representative, Read-Only Executive and Integration Service Account."
  },
  {
    question: "How are quotation totals calculated?",
    answer: "The page previews totals as you type, and the server recalculates quantities, discounts, taxes and the grand total when you save. The quotation PDF is produced from that saved data, and issued revisions stay traceable."
  },
  {
    question: "Can we connect it to other systems?",
    answer: "There is a versioned REST API with OpenAPI documentation, CSV import, and a webhook foundation. The architecture leaves room for ERP, support and marketing modules."
  }
];

export function BrainCRMFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 border-b border-border/40 bg-background" id="faq">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[300px] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border/80 bg-surface/80 text-xs font-bold tracking-widest uppercase text-primary mb-4 font-mono shadow-xs">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span>FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.14]">
            Common{" "}
            <span className="inline-block whitespace-nowrap bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:250%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(0,156,180,0.18)]">
              questions
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen 
                    ? "bg-card border-primary/50 shadow-md ring-1 ring-primary/20" 
                    : "bg-card/60 dark:bg-card/30 border-border/70 hover:border-border hover:bg-card/90"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-foreground">
                    {faq.question}
                  </span>
                  <span className={cn(
                    "size-7 rounded-lg border border-border/60 bg-surface flex items-center justify-center shrink-0 text-muted-foreground transition-transform duration-200",
                    isOpen && "rotate-180 text-primary border-primary/40 bg-primary/10"
                  )}>
                    <ChevronDown size={14} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/40 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
