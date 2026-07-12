"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { contactFAQs } from "@/config/contact";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-border/40 bg-background transition-colors duration-300">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-heading-2 font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            Quick answers to the common questions about our products, implementation capabilities, and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {contactFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className={cn(
                  "rounded-2xl border border-border bg-card/40 backdrop-blur-sm transition-all duration-300",
                  isOpen ? "border-primary/30 bg-card/85 shadow-card" : "hover:border-border/80"
                )}
              >
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left text-sm md:text-base font-bold text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle size={18} className="text-primary shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "text-muted-foreground shrink-0 transition-transform duration-300",
                        isOpen ? "transform rotate-180 text-primary" : ""
                      )}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 md:p-6 pt-0 border-t border-border/20 text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
