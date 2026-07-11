"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { integrationUseCases } from "@/config/integration";
import {
  Factory,
  Store,
  HeartPulse,
  Truck,
  Hotel,
  AlertTriangle,
  Cpu,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const useCaseIcons: Record<string, LucideIcon> = {
  Factory,
  Store,
  HeartPulse,
  Truck,
  Hotel,
};

export function IntegrationUseCases() {
  const [activeTab, setActiveTab] = useState<string>(integrationUseCases[0]?.industry ?? "Manufacturing");

  const activeData = integrationUseCases.find((uc) => uc.industry === activeTab);

  return (
    <section className="relative border-b border-border bg-surface py-20 sm:py-28 overflow-hidden">
      {/* Background Visual Enhancements */}
      <div className="absolute inset-0 bg-surface-glow opacity-25 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4">
            Operational Scenarios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Industry Integration Use Cases
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            See how Brainzon configures custom workflows, microservice gateways, and real-time syncing templates to address specific industry problems.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-10 sm:mb-12">
          {integrationUseCases.map((uc) => {
            const Icon = useCaseIcons[uc.icon] ?? Factory;
            const isActive = uc.industry === activeTab;
            return (
              <button
                key={uc.industry}
                onClick={() => setActiveTab(uc.industry)}
                className={cn(
                  "flex items-center gap-2.5 px-5 py-3 rounded-xl border font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer shadow-sm",
                  isActive
                    ? "border-primary bg-primary/10 text-primary shadow-glow-primary/15"
                    : "border-border/40 bg-card/30 text-muted-foreground hover:border-primary/30 hover:bg-card/60 hover:text-foreground"
                )}
              >
                <Icon className={cn("size-4 transition-transform duration-300", isActive && "scale-110")} />
                {uc.industry}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        {activeData && (
          <div className="grid gap-8 lg:grid-cols-12 items-start mt-8">
            {/* Left Column: Summary Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="group relative rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-6 sm:p-8 shadow-glow-primary/5 transition-all duration-300 hover:border-primary/30">
                <span className="flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-glow-primary/5 mb-6">
                  {(() => {
                    const Icon = useCaseIcons[activeData.icon] ?? Factory;
                    return <Icon className="size-7" />;
                  })()}
                </span>
                <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
                  {activeData.industry} Sector
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-2 tracking-tight">
                  {activeData.description}
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Tailored workflow rules configured to link edge hardware, inventory ledgers, and operational databases into a single system.
                </p>
              </div>
            </div>

            {/* Right Column: Grid Details */}
            <div className="lg:col-span-8 grid gap-6 sm:grid-cols-3">
              {/* Challenge Card */}
              <div className="group relative flex flex-col justify-between rounded-2xl border border-amber-500/10 bg-card/20 backdrop-blur-sm p-6 shadow-md transition-all duration-300 hover:border-amber-500/30 hover:-translate-y-1">
                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="flex size-8 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-500">
                      <AlertTriangle className="size-4" />
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-500">
                      Operational Pain Point
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-foreground/90">
                    {activeData.challenge}
                  </p>
                </div>
              </div>

              {/* Solution Card */}
              <div className="group relative flex flex-col justify-between rounded-2xl border border-primary/20 bg-card/25 backdrop-blur-sm p-6 shadow-md transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="flex size-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                      <Cpu className="size-4" />
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">
                      Integration Solution
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-foreground/90">
                    {activeData.solution}
                  </p>
                </div>
              </div>

              {/* Benefit Card */}
              <div className="group relative flex flex-col justify-between rounded-2xl border border-emerald-500/15 bg-emerald-500/5 backdrop-blur-sm p-6 shadow-md transition-all duration-300 hover:border-emerald-500/35 hover:-translate-y-1">
                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="flex size-8 items-center justify-center rounded-lg border border-emerald-500/25 bg-emerald-500/10 text-emerald-500">
                      <TrendingUp className="size-4" />
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-500">
                      Business Outcome
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed text-foreground">
                    {activeData.benefit}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
