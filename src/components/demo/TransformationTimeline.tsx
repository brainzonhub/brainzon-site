import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { demoTimeline } from "@/config/demo";

export function TransformationTimeline() {
  return (
    <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
      {/* Neon line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <Container>
        {/* ── Section heading ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded border border-primary/20 bg-primary/10 text-[9px] font-mono font-bold tracking-widest text-primary uppercase mb-4">
            Your Journey
          </span>
          <h2 className="text-heading-2 font-bold tracking-tight text-foreground">
            What Happens After You Book
          </h2>
        </div>

        {/* ── Timeline ── */}
        <div className="relative mx-auto max-w-2xl">
          {/* Vertical connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 to-primary/10"
          />

          <div className="flex flex-col gap-10">
            {demoTimeline.map((item, idx) => (
              <div key={item.step} className="relative flex items-start gap-5 md:gap-8">
                {/* ── Step indicator dot ── */}
                <div className="relative z-10 flex-shrink-0 mt-6">
                  <div
                    className={cn(
                      "flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full",
                      "border-2 border-primary/30 bg-background"
                    )}
                  >
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                </div>

                {/* ── Card ── */}
                <div
                  className={cn(
                    "group relative flex-1 p-6 rounded-xl",
                    "border border-border/40 bg-card/30 backdrop-blur-sm",
                    "hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-card",
                    "transition-all duration-300"
                  )}
                >
                  {/* Watermark step number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none text-[4rem] font-extrabold leading-none text-primary/15"
                  >
                    {item.step}
                  </span>

                  <h3 className="relative text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Hide the connecting line segment after the last item */}
                {idx === demoTimeline.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-5 md:left-6 top-[3.5rem] bottom-0 w-0.5 bg-background"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
