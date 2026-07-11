import { Container } from "@/components/layout/Container";
import { integrationProcessSteps } from "@/config/integration";

export function IntegrationProcess() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-28">
      {/* Background Visual Enhancements */}
      <div className="absolute inset-0 bg-surface-glow opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4">
            Our Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Structured Integration Process
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            From initial application analysis to live telemetry tuning, our structured phase gates ensure reliable and secure data pathways.
          </p>
        </div>

        <div className="relative mt-16 sm:mt-24">
          {/* Horizontal connection line for desktop */}
          <div
            className="absolute top-[32px] left-[8.33%] right-[8.33%] hidden h-[1.5px] bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 lg:block z-0"
            aria-hidden="true"
          />

          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-6 lg:gap-4 relative z-10">
            {integrationProcessSteps.map((step) => (
              <li
                key={step.number}
                className="group relative flex flex-col items-center text-center rounded-2xl border border-border/40 bg-card/30 p-5 shadow-glow-primary/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/45 hover:bg-card/50 hover:shadow-glow-primary/10 hover:-translate-y-1"
              >
                {/* Step Circle with animated pulse glow */}
                <div className="relative flex size-12 items-center justify-center rounded-full border border-primary/30 bg-background font-mono text-sm font-bold text-primary shadow-glow-primary transition-transform duration-300 group-hover:scale-110 group-hover:border-primary/60 group-hover:text-primary z-10">
                  <span className="absolute inset-0 rounded-full bg-primary/5 group-hover:animate-ping" />
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-5 flex flex-col items-center">
                  <h3 className="text-sm font-bold leading-5 text-foreground group-hover:text-primary transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[11px] sm:text-xs leading-5 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
