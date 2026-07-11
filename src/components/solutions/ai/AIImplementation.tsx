import { Container } from "@/components/layout/Container";
import { aiProcessSteps } from "@/config/ai";
import { cn } from "@/lib/utils";

export function AIImplementation() {
  return (
    <section className="relative py-20 border-b border-border bg-card/5 transition-colors duration-300 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-surface-glow opacity-20 pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4">
            Implementation Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Your Journey to AI Transformation
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Our systematic, security-first process takes you from initial proof-of-concept design to full enterprise production scale.
          </p>
        </div>

        {/* ─────────── Desktop Timeline (lg:block) ─────────── */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Horizontal line running across the timeline */}
          <div className="absolute top-[48px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 -z-10" />

          <div className="grid grid-cols-6 gap-6 relative">
            {aiProcessSteps.map((step, idx) => {
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Step Bubble */}
                  <div
                    className={cn(
                      "size-24 rounded-full border border-border bg-card shadow-card flex items-center justify-center transition-all duration-300 relative z-10",
                      "group-hover:border-primary/50 group-hover:shadow-glow-primary group-hover:scale-105"
                    )}
                  >
                    {/* Inner Circle Glow */}
                    <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/15 opacity-60" />
                    
                    <span className="text-xl font-mono font-extrabold text-foreground group-hover:text-primary transition-colors duration-300 relative z-20">
                      {step.number}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <div className="mt-6 px-2">
                    <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─────────── Mobile Timeline (lg:hidden) ─────────── */}
        <div className="lg:hidden relative max-w-xl mx-auto px-4">
          {/* Vertical connecting line */}
          <div className="absolute left-[34px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/30 via-secondary/30 to-primary/30 -z-10" />

          <div className="space-y-10">
            {aiProcessSteps.map((step, idx) => {
              return (
                <div key={idx} className="flex gap-6 group items-start">
                  {/* Step Bubble */}
                  <div
                    className={cn(
                      "size-12 rounded-full border border-border bg-card shadow-card flex items-center justify-center shrink-0 transition-all duration-300 relative z-10",
                      "group-hover:border-primary/50 group-hover:shadow-glow-primary"
                    )}
                  >
                    <span className="text-sm font-mono font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>

                  {/* Text Container */}
                  <div className="flex-1 pt-1.5">
                    <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
