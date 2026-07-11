import React from "react";
import { Container } from "@/components/layout/Container";
import { crmIndustries } from "@/config/crm";
import { cn } from "@/lib/utils";
import {
  Store,
  HeartPulse,
  Hotel,
  Factory,
  Landmark,
  Briefcase,
  Building2
} from "lucide-react";

// Icon mapping helper for CRM industries
const getIndustryIcon = (iconName: string) => {
  switch (iconName) {
    case "Store":
      return Store;
    case "HeartPulse":
      return HeartPulse;
    case "Hotel":
      return Hotel;
    case "Factory":
      return Factory;
    case "Landmark":
      return Landmark;
    case "Briefcase":
      return Briefcase;
    default:
      return Building2;
  }
};

export default function CRMIndustries() {
  return (
    <section className="relative py-24 border-b border-border bg-background transition-colors duration-300 overflow-hidden">
      {/* Background glow visual decorators */}
      <div className="absolute inset-0 bg-surface-glow opacity-15 pointer-events-none" />
      <div className="absolute -top-10 right-10 -z-10 h-[300px] w-[300px] rounded-full bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      <Container>
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4">
            Vertical Markets
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
            Tailored Industry Architectures
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Deploy pre-configured CRM modules, schemas, and automation rules optimized for the specific relationship dynamics of your industry.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {crmIndustries.map((ind, idx) => {
            const Icon = getIndustryIcon(ind.icon);

            return (
              <article
                key={idx}
                className={cn(
                  "group relative flex flex-col justify-between rounded-2xl border border-border/45 bg-card/30 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300",
                  "hover:-translate-y-1.5 hover:border-primary/45 hover:bg-card/65 hover:shadow-glow-primary"
                )}
              >
                {/* Visual glow indicator border top */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  {/* Header containing Icon & Title */}
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary/45 group-hover:bg-primary/25">
                      <Icon className="size-6 transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <h3 className="font-bold text-foreground text-base sm:text-lg tracking-tight group-hover:text-primary transition-colors duration-200">
                      {ind.title}
                    </h3>
                  </div>

                  {/* Description of industry solutions */}
                  <p className="mt-6 text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                    {ind.description}
                  </p>
                </div>

                {/* Micro benefit highlight or tag */}
                <div className="mt-8 pt-4 border-t border-border/40 flex justify-between items-center text-[10px] font-mono text-muted-foreground/60">
                  <span>PRE-CONFIGURED SCHEMAS</span>
                  <span className="font-bold text-primary group-hover:translate-x-0.5 transition-transform">Active</span>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
