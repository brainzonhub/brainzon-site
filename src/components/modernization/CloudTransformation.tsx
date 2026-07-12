"use client";

import { CheckCircle2, ArrowRight, Cloud, Server, Gauge, Globe, Cpu } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cloudBenefits } from "@/config/modernization";
import { ModernizationSectionHeader } from "./ModernizationSectionHeader";
import { cn } from "@/lib/utils";

const cloudProviders = [
  {
    title: "Microsoft Azure",
    description: "Enterprise-grade cloud migration with Azure App Services, AKS, and SQL Managed Instances for mission-critical workloads.",
    color: "primary",
    capabilities: ["App Services", "AKS", "SQL MI", "Entra ID"],
    metric: { label: "Regions", value: "60+" },
  },
  {
    title: "Amazon Web Services",
    description: "Scalable infrastructure transformation using ECS, Lambda, and RDS to modernize compute, storage, and networking layers.",
    color: "secondary",
    capabilities: ["ECS / EKS", "Lambda", "RDS", "CloudFront"],
    metric: { label: "Services", value: "200+" },
  },
  {
    title: "Google Cloud",
    description: "Cloud-native solutions powered by GKE, Cloud Run, and BigQuery for data-intensive and AI-ready enterprise platforms.",
    color: "accent",
    capabilities: ["GKE", "Cloud Run", "BigQuery", "Vertex AI"],
    metric: { label: "AI Models", value: "100+" },
  },
];

const migrationPatterns = [
  { icon: Server, label: "Rehost", description: "Lift & shift to cloud VMs" },
  { icon: Cpu, label: "Replatform", description: "Adapt to managed services" },
  { icon: Globe, label: "Refactor", description: "Rebuild as cloud-native" },
];

export function CloudTransformation() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface/30 py-20 sm:py-28 transition-colors duration-300">
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-[20%] -z-10 h-[50%] w-[50%] rounded-full bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      <Container>
        <ModernizationSectionHeader
          eyebrow="Cloud enablement"
          title="Move Legacy Applications To The Cloud"
          description="Select the right cloud landing zone, migration pattern, and operating model for reliable enterprise workloads."
        />

        {/* Cloud Provider Cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cloudProviders.map((provider) => {
            let borderHover = "hover:border-primary/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]";
            let iconBg = "bg-primary/10 text-primary border-primary/20";
            let metricColor = "text-primary";
            let capBadge = "border-primary/15 bg-primary/5 text-primary";

            if (provider.color === "secondary") {
              borderHover = "hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.12)]";
              iconBg = "bg-secondary/10 text-secondary border-secondary/20";
              metricColor = "text-secondary";
              capBadge = "border-secondary/15 bg-secondary/5 text-secondary";
            } else if (provider.color === "accent") {
              borderHover = "hover:border-accent/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.12)]";
              iconBg = "bg-accent/10 text-accent border-accent/20";
              metricColor = "text-accent";
              capBadge = "border-accent/15 bg-accent/5 text-accent";
            }

            return (
              <article
                key={provider.title}
                className={cn(
                  "flex flex-col justify-between rounded-2xl border border-border/40 bg-card/45 p-6 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 group cursor-pointer relative overflow-hidden",
                  borderHover
                )}
              >
                {/* Metric badge top-right */}
                <span className={cn("absolute top-5 right-5 text-[9px] font-mono font-bold tracking-wider select-none", metricColor)}>
                  {provider.metric.value} {provider.metric.label}
                </span>

                <div>
                  {/* Icon */}
                  <span className={cn("flex size-11 items-center justify-center rounded-xl border", iconBg)}>
                    <Cloud className="size-5" />
                  </span>

                  {/* Title & Description */}
                  <h3 className="mt-5 text-lg font-extrabold text-foreground">{provider.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {provider.description}
                  </p>

                  {/* Capability chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {provider.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className={cn("rounded-lg border px-2 py-0.5 text-[9px] font-mono font-bold", capBadge)}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom action */}
                <div className="mt-5 pt-4 border-t border-border/30 flex items-center justify-between text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  <span>Explore platform</span>
                  <ArrowRight className={cn("size-3.5 transition-transform group-hover:translate-x-1", metricColor)} />
                </div>
              </article>
            );
          })}
        </div>

        {/* Migration Patterns Strip */}
        <div className="mt-8 rounded-2xl border border-border/40 bg-card/45 p-5 backdrop-blur-sm shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            {/* Left: Migration strategy cards */}
            <div className="flex flex-wrap gap-4">
              {migrationPatterns.map(({ icon: Icon, label, description }) => (
                <div key={label} className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 px-4 py-3 min-w-[180px]">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/15">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-foreground">{label}</p>
                    <p className="text-[9px] text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Cloud readiness metrics */}
            <div className="flex items-center gap-3">
              <Gauge className="size-4 text-primary animate-pulse shrink-0" />
              <div>
                <p className="text-[9px] font-mono tracking-wider text-muted-foreground">CLOUD READINESS</p>
                <p className="text-sm font-extrabold text-primary">Enterprise Grade</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Bar */}
        <div className="mt-5 flex flex-wrap justify-center gap-2.5 rounded-2xl border border-border/40 bg-card/45 p-4 backdrop-blur-sm shadow-sm">
          {cloudBenefits.map((benefit) => (
            <span
              key={benefit}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/30 bg-muted/40 px-3 py-1.5 text-[10px] font-semibold text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default"
            >
              <CheckCircle2 className="size-3 text-primary" />
              {benefit}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
