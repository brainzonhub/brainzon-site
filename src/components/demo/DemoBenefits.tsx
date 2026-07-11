import { Search, Target, Monitor, Map, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { demoBenefits } from "@/config/demo";

/* ── Icon map keyed by string names from config ── */
const iconMap: Record<string, LucideIcon> = {
  Search,
  Target,
  Monitor,
  Map,
};

export function DemoBenefits() {
  return (
    <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
      {/* Neon accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <Container>
        {/* ── Section header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded border border-primary/20 bg-primary/10 text-[9px] font-mono font-bold tracking-widest text-primary uppercase">
            Why Schedule a Demo
          </span>

          <h2 className="text-heading-2 font-bold tracking-tight text-foreground mt-4">
            What You&apos;ll Gain From Your Demo Session
          </h2>

          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Every demo is a focused consultation — designed to map Brainzon
            products and services directly to your business priorities.
          </p>
        </div>

        {/* ── Benefits grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoBenefits.map((benefit) => {
            const Icon = iconMap[benefit.icon];

            return (
              <div
                key={benefit.title}
                className={cn(
                  "group relative p-6 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm",
                  "hover:border-primary/40 hover:-translate-y-1",
                  "hover:shadow-[0_8px_30px_rgba(6,182,212,0.06)]",
                  "transition-all duration-300"
                )}
              >
                {/* Icon badge */}
                <div
                  className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-full",
                    "bg-primary/10 border border-primary/20 text-primary",
                    "transition-colors duration-300 group-hover:bg-primary/15"
                  )}
                >
                  {Icon && <Icon size={22} strokeWidth={1.8} />}
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-foreground mt-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
