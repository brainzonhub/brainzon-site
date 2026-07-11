import Link from "next/link";
import { ArrowRight, Check, ShieldAlert, LayoutGrid, RefreshCcw, GitBranch, TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { brainConnectFeatures } from "@/config/integration";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldAlert,
  LayoutGrid,
  RefreshCcw,
  GitBranch,
  TrendingUp,
};

export function BrainConnectShowcase() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-28">
      {/* Premium Background Glows */}
      <div className="absolute top-1/4 left-1/4 -z-10 size-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 size-[400px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
              Proprietary Integration Platform
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              BrainConnect &mdash; Integration & Workflow Automation
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              Power your business processes with BrainConnect. Designed to unify your APIs, synchronize database tables in real-time, and run event-driven automated workflows.
            </p>
          </div>
          <Link
            href="/products/brainconnect"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg border border-secondary/20 bg-secondary/5 px-5 py-2.5 text-sm font-bold text-secondary backdrop-blur transition-all duration-300 hover:bg-secondary/10 hover:shadow-glow-secondary hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <span>Explore BrainConnect</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {brainConnectFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || LayoutGrid;
            const isFeatured = index === 0;
            return (
              <article
                key={feature.title}
                className={cn(
                  "relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]",
                  isFeatured
                    ? "border-primary/45 bg-card/85 shadow-glow-primary hover:border-primary/70 hover:shadow-glow-primary/40"
                    : "border-border/60 bg-card/50 hover:border-primary/45 hover:shadow-glow-primary/25"
                )}
              >
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

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
                      <IconComponent className="size-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] font-bold tracking-widest text-primary uppercase">
                        Feature {String(index + 1).padStart(2, "0")}
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
                      <li key={bullet} className="flex items-center gap-2.5 text-sm text-foreground/85">
                        <Check className="size-4 shrink-0 text-primary" />
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
