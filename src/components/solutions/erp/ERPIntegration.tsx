import { Cable, Database, Radio } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { erpIntegrations } from "@/config/erp";
import { ERPSectionHeader } from "./ERPSectionHeader";

export function ERPIntegration() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-28">
      {/* Scope keyframe animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes flow-in {
              from { stroke-dashoffset: 24; }
              to { stroke-dashoffset: 0; }
            }
            @keyframes flow-out {
              from { stroke-dashoffset: 0; }
              to { stroke-dashoffset: 24; }
            }
            .animate-flow-in {
              stroke-dasharray: 6, 12;
              animation: flow-in 1.5s linear infinite;
            }
            .animate-flow-out {
              stroke-dasharray: 6, 12;
              animation: flow-out 1.5s linear infinite;
            }
          `,
        }}
      />

      <div className="absolute inset-0 bg-surface-glow opacity-60 pointer-events-none" />

      <Container className="relative">
        <ERPSectionHeader
          eyebrow="Connected enterprise"
          title="ERP Integration Ecosystem"
          description="Create one secure operational fabric across customer, commerce, financial, warehouse, API, and legacy systems."
        />

        <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-border bg-card/40 p-6 shadow-elevated backdrop-blur-xl sm:p-10">
          {/* Tech grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.04)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          {/* Symmetrical SVG connection lines for desktop layout */}
          <svg
            className="absolute inset-0 hidden lg:block w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Background connection guides (static low opacity) */}
            <path d="M 37 12.5 C 40 12.5, 41 50, 44 50" stroke="var(--color-primary, #06b6d4)" strokeWidth="0.75" strokeOpacity="0.15" fill="none" />
            <path d="M 37 37.5 C 40 37.5, 41 50, 44 50" stroke="var(--color-primary, #06b6d4)" strokeWidth="0.75" strokeOpacity="0.15" fill="none" />
            <path d="M 37 62.5 C 40 62.5, 41 50, 44 50" stroke="var(--color-primary, #06b6d4)" strokeWidth="0.75" strokeOpacity="0.15" fill="none" />
            <path d="M 37 87.5 C 40 87.5, 41 50, 44 50" stroke="var(--color-primary, #06b6d4)" strokeWidth="0.75" strokeOpacity="0.15" fill="none" />

            <path d="M 56 50 C 59 50, 60 16.6, 63 16.6" stroke="var(--color-secondary, #f97316)" strokeWidth="0.75" strokeOpacity="0.15" fill="none" />
            <path d="M 56 50 C 59 50, 60 50, 63 50" stroke="var(--color-secondary, #f97316)" strokeWidth="0.75" strokeOpacity="0.15" fill="none" />
            <path d="M 56 50 C 59 50, 60 83.3, 63 83.3" stroke="var(--color-secondary, #f97316)" strokeWidth="0.75" strokeOpacity="0.15" fill="none" />

            {/* Animated flow paths */}
            <path d="M 37 12.5 C 40 12.5, 41 50, 44 50" stroke="var(--color-primary, #06b6d4)" strokeWidth="1.25" strokeOpacity="0.7" fill="none" className="animate-flow-in" />
            <path d="M 37 37.5 C 40 37.5, 41 50, 44 50" stroke="var(--color-primary, #06b6d4)" strokeWidth="1.25" strokeOpacity="0.7" fill="none" className="animate-flow-in" />
            <path d="M 37 62.5 C 40 62.5, 41 50, 44 50" stroke="var(--color-primary, #06b6d4)" strokeWidth="1.25" strokeOpacity="0.7" fill="none" className="animate-flow-in" />
            <path d="M 37 87.5 C 40 87.5, 41 50, 44 50" stroke="var(--color-primary, #06b6d4)" strokeWidth="1.25" strokeOpacity="0.7" fill="none" className="animate-flow-in" />

            <path d="M 56 50 C 59 50, 60 16.6, 63 16.6" stroke="var(--color-secondary, #f97316)" strokeWidth="1.25" strokeOpacity="0.7" fill="none" className="animate-flow-out" />
            <path d="M 56 50 C 59 50, 60 50, 63 50" stroke="var(--color-secondary, #f97316)" strokeWidth="1.25" strokeOpacity="0.7" fill="none" className="animate-flow-out" />
            <path d="M 56 50 C 59 50, 60 83.3, 63 83.3" stroke="var(--color-secondary, #f97316)" strokeWidth="1.25" strokeOpacity="0.7" fill="none" className="animate-flow-out" />
          </svg>

          <div className="relative grid items-stretch gap-8 lg:grid-cols-[1fr_auto_1fr] lg:h-[480px]">
            {/* Left Column: Channels 01-04 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-4 gap-4 lg:h-full">
              {erpIntegrations.slice(0, 4).map((system, index) => (
                <div
                  key={system}
                  className="group relative z-10 flex flex-col justify-center rounded-xl border border-border/40 bg-background/70 backdrop-blur-md p-4 transition-all duration-300 hover:border-primary/45 hover:bg-background/90 hover:shadow-glow-primary/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 transition-colors group-hover:bg-primary/20">
                      <Radio className="size-4" />
                    </span>
                    <span className="flex size-2 items-center justify-center relative">
                      <span className="absolute size-2 rounded-full bg-emerald-500/80 animate-ping" />
                      <span className="relative size-1.5 rounded-full bg-emerald-500" />
                    </span>
                  </div>
                  <p className="mt-3 text-xs font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {system}
                  </p>
                  <p className="mt-0.5 font-mono text-[8px] tracking-wider text-muted-foreground">
                    CHANNEL 0{index + 1}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Core: ERP Core */}
            <div className="relative mx-auto flex items-center justify-center lg:h-full py-8 lg:py-0">
              <div className="relative flex size-40 items-center justify-center rounded-full border border-primary/35 bg-background shadow-glow-primary sm:size-48 z-10 transition-transform duration-500 hover:scale-105">
                {/* Rotating dashed outer rings */}
                <span className="absolute inset-3 animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-primary/30" />
                <span className="absolute inset-6 animate-[spin_16s_linear_infinite_reverse] rounded-full border border-secondary/20" />
                
                <div className="relative text-center">
                  <span className="flex size-14 mx-auto items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/25 shadow-glow-primary/5">
                    <Database className="size-6 animate-pulse" />
                  </span>
                  <p className="mt-3 text-sm font-extrabold text-foreground tracking-tight">ERP Core</p>
                  <p className="mt-1 font-mono text-[8px] tracking-widest text-primary font-bold">
                    SYNC ACTIVE
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Links 05-07 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 lg:grid-rows-3 gap-4 lg:h-full">
              {erpIntegrations.slice(4).map((system, index) => (
                <div
                  key={system}
                  className="group relative z-10 flex flex-col justify-center rounded-xl border border-border/40 bg-background/70 backdrop-blur-md p-4 transition-all duration-300 hover:border-secondary/45 hover:bg-background/90 hover:shadow-glow-secondary/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary border border-secondary/20 transition-colors group-hover:bg-secondary/20">
                      <Cable className="size-4 shrink-0" />
                    </span>
                    <span className="flex size-2 items-center justify-center relative">
                      <span className="absolute size-2 rounded-full bg-emerald-500/80 animate-ping" />
                      <span className="relative size-1.5 rounded-full bg-emerald-500" />
                    </span>
                  </div>
                  <div>
                    <p className="mt-3 text-xs font-bold text-foreground group-hover:text-secondary transition-colors duration-200">
                      {system}
                    </p>
                    <p className="mt-0.5 font-mono text-[8px] tracking-wider text-muted-foreground">
                      ENCRYPTED LINK 0{index + 5}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer of the ecosystem card */}
          <div className="relative mt-8 flex items-center justify-center gap-4 border-t border-border/40 pt-6 font-mono text-[9px] tracking-widest text-muted-foreground">
            <span className="relative h-px w-16 overflow-hidden bg-primary/30">
              <span className="absolute h-full w-1/2 animate-[pulse_1.5s_ease-in-out_infinite] bg-primary" />
            </span>
            <span className="uppercase text-center">Animated Bidirectional Data Flow</span>
            <span className="relative h-px w-16 overflow-hidden bg-secondary/30">
              <span className="absolute h-full w-1/2 animate-[pulse_1.5s_ease-in-out_infinite] bg-secondary" />
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
