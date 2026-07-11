import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { brainAIFeatures } from "@/config/ai";
import { cn } from "@/lib/utils";
import { AIIcon } from "./ai-icons";

export function BrainAIShowcase() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-28">
      {/* Premium Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 -z-10 size-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 size-[400px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
              Brainzon proprietary platform
            </p>
            <h2 className="text-heading-2 font-bold text-foreground">
              BrainAI — Enterprise Artificial Intelligence Platform
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              BrainAI is Brainzon&apos;s proprietary enterprise AI platform, designed to bring context-aware intelligence, automated decision workflows, and secure generative models directly into your daily operations.
            </p>
          </div>
          <Link
            href="/products/brainai"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg border border-secondary/20 bg-secondary/5 px-5 py-2.5 text-sm font-bold text-secondary backdrop-blur transition-all duration-300 hover:bg-secondary/10 hover:shadow-glow-secondary hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <span>Explore the platform</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {brainAIFeatures.map((feature, index) => {
            const isFeatured = index === 0 || index === 3;
            return (
              <article
                key={feature.title}
                className={cn(
                  "group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02]",
                  isFeatured
                    ? "border-primary/45 bg-card/85 shadow-glow-primary hover:border-primary/70 hover:shadow-glow-primary/45"
                    : "border-border/60 bg-card/50 hover:border-secondary/45 hover:shadow-glow-secondary/30"
                )}
              >
                {/* Visual Glassmorphism Background Gradient and custom background glow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                <div className={cn(
                  "absolute -right-8 -top-8 -z-10 size-24 rounded-full blur-2xl opacity-10 transition-opacity duration-300 group-hover:opacity-20",
                  isFeatured ? "bg-primary" : "bg-secondary"
                )} />

                <div>
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        "flex size-11 items-center justify-center rounded-xl border transition-colors",
                        isFeatured
                          ? "border-primary/30 bg-primary/10 text-primary"
                          : "border-border/60 bg-muted/40 text-muted-foreground"
                      )}
                    >
                      <AIIcon name={feature.icon} className="size-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] font-bold tracking-widest text-primary uppercase">
                        Capability {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-foreground">{feature.title}</h3>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-border/60">
                  <ul className="grid gap-2.5">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
