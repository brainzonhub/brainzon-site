"use client";

import { Container } from "@/components/layout/Container";
import { contactOptions } from "@/config/contact";
import { ShoppingBag, Presentation, Handshake, LifeBuoy, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  "shopping-bag": ShoppingBag,
  "presentation": Presentation,
  "handshake": Handshake,
  "life-buoy": LifeBuoy,
};

export function ContactOptions() {
  const handleOptionClick = (inquiryType: string) => {
    // Dispatch a custom event to change the form's inquiry type
    const event = new CustomEvent("set-inquiry-type", { detail: inquiryType });
    window.dispatchEvent(event);

    // Scroll to the contact section
    const section = document.getElementById("contact-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-border/40 bg-surface/50 transition-colors duration-300">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-heading-2 font-bold tracking-tight text-foreground">
            How Can We Help?
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            Choose an area of focus below to connect with the right team. We&apos;re ready to accelerate your digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactOptions.map((option) => {
            const Icon = iconMap[option.iconName as keyof typeof iconMap] || Presentation;

            return (
              <div
                key={option.id}
                className="relative p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-md shadow-card flex flex-col justify-between hover:border-primary/40 hover:shadow-glow-primary group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    {option.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-3">
                    {option.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/40">
                  <button
                    onClick={() => handleOptionClick(option.inquiryType)}
                    className={cn(
                      "inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 group/btn transition-colors cursor-pointer",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                    )}
                  >
                    <span>{option.ctaText}</span>
                    <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
