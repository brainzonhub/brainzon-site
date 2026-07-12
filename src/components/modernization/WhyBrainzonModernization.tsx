"use client";

import { Container } from "@/components/layout/Container";
import { ModernizationIcon } from "./modernization-icons";
import { ModernizationSectionHeader } from "./ModernizationSectionHeader";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "Deep Technical Expertise",
    description: "15+ years modernizing VB6, Delphi, PowerBuilder, and .NET Framework into cloud-ready platforms.",
    icon: "BadgeCheck",
    color: "primary",
    metric: "15+",
    metricLabel: "Years",
  },
  {
    title: "Business-First Approach",
    description: "Every modernization decision is anchored to measurable business outcomes, not just technology upgrades.",
    icon: "BriefcaseBusiness",
    color: "secondary",
    metric: "100%",
    metricLabel: "Aligned",
  },
  {
    title: "Safe Migration Strategy",
    description: "Structured phased delivery with automated rollback gates protects production continuity at every stage.",
    icon: "ShieldCheck",
    color: "accent",
    metric: "0",
    metricLabel: "Downtime",
  },
  {
    title: "Modern Architecture",
    description: "Microservices, containerized deployments, and event-driven patterns built for horizontal scale.",
    icon: "Layers3",
    color: "primary",
    metric: "10×",
    metricLabel: "Scale",
  },
  {
    title: "Long-Term Partnership",
    description: "Post-launch optimization, monitoring, and SLA-backed managed services for ongoing reliability.",
    icon: "Handshake",
    color: "secondary",
    metric: "24/7",
    metricLabel: "Support",
  },
];

export function WhyBrainzonModernization() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-28 transition-colors duration-300">
      {/* Decorative glow */}
      <div className="absolute top-[20%] left-[-10%] -z-10 h-[50%] w-[50%] rounded-full bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      <Container>
        <ModernizationSectionHeader
          eyebrow="A safer path forward"
          title="Why Choose Brainzon for Modernization"
          description="Combine deep technology experience with a business-led transformation model and accountable long-term support."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, index) => {
            let iconBg = "bg-primary/10 text-primary border-primary/20";
            let hoverBorder = "hover:border-primary/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]";
            let metricColor = "text-primary";
            let tagBg = "border-primary/15 bg-primary/5 text-primary";

            if (benefit.color === "secondary") {
              iconBg = "bg-secondary/10 text-secondary border-secondary/20";
              hoverBorder = "hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.12)]";
              metricColor = "text-secondary";
              tagBg = "border-secondary/15 bg-secondary/5 text-secondary";
            } else if (benefit.color === "accent") {
              iconBg = "bg-accent/10 text-accent border-accent/20";
              hoverBorder = "hover:border-accent/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.12)]";
              metricColor = "text-accent";
              tagBg = "border-accent/15 bg-accent/5 text-accent";
            }

            return (
              <article
                key={benefit.title}
                className={cn(
                  "flex flex-col justify-between rounded-2xl border border-border/40 bg-card/45 p-5 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden",
                  hoverBorder
                )}
              >
                {/* Metric badge top-right */}
                <span className={cn("absolute top-4 right-4 text-[9px] font-mono font-bold tracking-wider select-none", metricColor)}>
                  [{String(index + 1).padStart(2, "0")}]
                </span>

                <div>
                  {/* Icon */}
                  <span className={cn("flex size-10 items-center justify-center rounded-xl border", iconBg)}>
                    <ModernizationIcon name={benefit.icon} className="size-5" />
                  </span>

                  {/* Metric highlight */}
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className={cn("text-2xl font-extrabold tracking-tight", metricColor)}>
                      {benefit.metric}
                    </span>
                    <span className="text-[9px] font-mono font-bold text-muted-foreground uppercase tracking-wider">
                      {benefit.metricLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 text-sm font-bold text-foreground leading-snug">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom status tag */}
                <div className="mt-5 pt-3 border-t border-border/30">
                  <span className={cn("inline-block rounded border px-2 py-0.5 text-[8px] font-mono font-bold tracking-wider uppercase", tagBg)}>
                    {benefit.color === "primary" ? "VERIFIED" : benefit.color === "secondary" ? "CERTIFIED" : "GUARANTEED"}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
