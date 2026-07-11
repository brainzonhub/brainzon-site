import React from "react";
import { Container } from "@/components/layout/Container";
import { customerJourneySteps } from "@/config/crm";
import { ArrowRight, Sparkles, UserCheck, PhoneCall, TrendingUp, RefreshCw } from "lucide-react";

// Icon mapping based on step numbers
const getJourneyIcon = (num: string) => {
  switch (num) {
    case "01":
      return Sparkles;
    case "02":
      return UserCheck;
    case "03":
      return PhoneCall;
    case "04":
      return TrendingUp;
    case "05":
      return RefreshCw;
    default:
      return Sparkles;
  }
};

export default function CustomerJourney() {
  return (
    <section className="relative py-24 border-b border-border bg-background transition-colors duration-300 overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-radial-gradient from-primary/5 via-secondary/5 to-transparent opacity-50 blur-3xl pointer-events-none" />

      <Container>
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4">
            Lifecycle Strategy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
            The Customer Lifecycle Blueprint
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Trace the automated intelligence flow that routes customer touchpoints from initial campaign touch down to enterprise retention strategies.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Horizontal connecting line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/10 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {customerJourneySteps.map((step, idx) => {
              const Icon = getJourneyIcon(step.number);
              const isLast = idx === customerJourneySteps.length - 1;

              return (
                <div key={idx} className="relative flex flex-col items-center lg:items-start group">
                  {/* Step Connector Line (Mobile/Tablet Only) */}
                  {!isLast && (
                    <div className="lg:hidden absolute top-[72px] bottom-[-24px] left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-primary/40 to-secondary/20 -z-10" />
                  )}

                  {/* Icon & Milestone Node */}
                  <div className="flex items-center justify-center relative mb-6">
                    {/* Glowing outer ring */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10 animate-pulse" />
                    
                    <div className="size-16 sm:size-20 rounded-2xl border border-border bg-card/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:border-primary/40 group-hover:bg-card shadow-elevated">
                      <Icon className="size-6 sm:size-8 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
                    </div>

                    {/* Step Number Tag */}
                    <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md border border-secondary/30 bg-secondary/15 text-[10px] font-mono font-bold text-secondary tracking-widest shadow-glow-secondary">
                      {step.number}
                    </span>
                  </div>

                  {/* Card content */}
                  <div className="text-center lg:text-left mt-2 px-4 sm:px-6 lg:px-2">
                    <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Indicator between steps (Desktop only) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute top-[28px] right-[-24px] z-20 items-center justify-center text-muted-foreground/30 group-hover:text-primary/70 transition-colors duration-300">
                      <ArrowRight className="size-5 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
