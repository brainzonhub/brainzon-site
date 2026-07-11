import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { erpPlatforms } from "@/config/erp";
import { cn } from "@/lib/utils";
import { ERPIcon } from "./erp-icons";
import { ERPSectionHeader } from "./ERPSectionHeader";

export function ERPPlatforms() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface py-20 sm:py-28">
      {/* Decorative Glows */}
      <div className="absolute top-1/3 right-1/4 -z-10 size-[350px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 -z-10 size-[350px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <Container>
        <ERPSectionHeader
          eyebrow="Platform advisory"
          title="Choose the Right ERP for Your Business"
          description="Brainzon combines platform expertise with business-led architecture to select, implement, integrate, and optimize the right ERP environment."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {erpPlatforms.map((platform) => {
            const featured = "featured" in platform && platform.featured;
            return (
              <article
                key={platform.title}
                className={cn(
                  "relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]",
                  featured
                    ? "border-primary/45 bg-card/85 shadow-glow-primary hover:border-primary/75 hover:shadow-glow-primary/40"
                    : "border-border/60 bg-card/50 hover:border-secondary/45 hover:shadow-glow-secondary/25"
                )}
              >
                {/* Visual Glassmorphism/Gradient Accent */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "flex size-12 items-center justify-center rounded-xl border transition-colors",
                        featured
                          ? "border-primary/30 bg-primary/10 text-primary"
                          : "border-border/60 bg-muted/40 text-muted-foreground"
                      )}
                    >
                      <ERPIcon name={platform.icon} className="size-6" />
                    </span>
                    {featured && (
                      <span className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
                        Brainzon platform
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-foreground sm:text-2xl">
                    {platform.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {platform.description}
                  </p>

                  <div className="mt-6 rounded-xl border border-border/60 bg-surface/85 p-4 backdrop-blur-sm">
                    <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-primary">
                      Best for
                    </p>
                    <p className="mt-1.5 text-sm font-semibold leading-6 text-foreground">
                      {platform.bestFor}
                    </p>
                  </div>
                </div>

                <div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {platform.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-border/80 hover:text-foreground"
                      >
                        <Check className="size-3 text-primary shrink-0" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 pt-4 border-t border-border/60">
                    <Link
                      href={platform.href}
                      className="group inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:text-secondary/80 transition-colors"
                    >
                      <span>Discuss this platform</span>
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Custom ERP Callout */}
        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl border border-dashed border-primary/30 bg-primary/[0.03] p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:p-8 hover:bg-primary/[0.05] transition-all duration-300">
          <div>
            <h3 className="text-base font-bold text-foreground">Need a custom ERP solution?</h3>
            <p className="mt-1.5 text-sm text-muted-foreground max-w-xl leading-relaxed">
              We design domain-specific platforms when packaged ERP does not fit your operating model.
            </p>
          </div>
          <Link
            href="/services/custom-development"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary/10 border border-primary/20 px-5 py-2.5 text-sm font-bold text-primary transition-all duration-300 hover:bg-primary/20 hover:shadow-glow-primary hover:-translate-y-0.5"
          >
            <span>Explore custom development</span>
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
