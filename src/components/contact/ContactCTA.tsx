"use client";

import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactCTA() {
  const handleScrollToForm = () => {
    const formElement = document.getElementById("contact-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-background border-b border-border/40 transition-colors duration-300">
      {/* Decorative gradients */}
      <div className="absolute inset-0 bg-surface-glow pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 -z-10 h-[70%] w-[70%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center p-8 md:p-16 rounded-3xl border border-border/60 bg-card/40 backdrop-blur-md shadow-elevated">
          <span className="badge-primary animate-blink-primary">Get Started</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight mt-4">
            Ready To Transform Your Business?
          </h2>
          <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Start a conversation with Brainzon technology experts today and design a customized digital system that empowers your team.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-demo"
              className={cn(
                "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-xs font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary hover:shadow-lg transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
            >
              <Calendar size={15} />
              <span>Book A Demo</span>
            </Link>

            <button
              onClick={handleScrollToForm}
              className={cn(
                "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-xs font-semibold rounded-lg border border-border bg-card/60 text-foreground hover:bg-muted/40 transition-all duration-200 cursor-pointer",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              <span>Contact Experts</span>
              <ArrowRight size={15} className="text-primary" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
