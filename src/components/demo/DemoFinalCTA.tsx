import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { demoFinalCta } from "@/config/demo";

export function DemoFinalCTA() {
  return (
    <section className="relative py-20 bg-background transition-colors duration-300 overflow-hidden">
      {/* Neon line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Decorative radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <h2 className="text-heading-2 font-bold text-foreground">
            {demoFinalCta.headline}
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            Our enterprise consultants are ready to discuss your transformation
            goals.
          </p>

          <a
            href="#demo-form"
            className={cn(
              "inline-flex items-center gap-2",
              "bg-primary text-primary-foreground px-8 py-4 rounded-lg",
              "font-semibold shadow-glow-primary",
              "hover:bg-primary/90 hover:-translate-y-0.5",
              "transition-all duration-300"
            )}
          >
            {demoFinalCta.cta}
            <ArrowRight size={18} />
          </a>
        </div>
      </Container>
    </section>
  );
}
