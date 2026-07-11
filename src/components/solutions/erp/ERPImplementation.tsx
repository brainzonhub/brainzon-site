import { Container } from "@/components/layout/Container";
import { erpImplementationSteps } from "@/config/erp";
import { ERPSectionHeader } from "./ERPSectionHeader";

export function ERPImplementation() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-28">
      {/* Background Visual Enhancements */}
      <div className="absolute inset-0 bg-surface-glow opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <ERPSectionHeader
          eyebrow="Structured delivery"
          title="ERP Implementation Process"
          description="A disciplined path from operational discovery to measurable, continuously improving business outcomes."
        />

        <div className="relative mt-16 sm:mt-24">
          {/* Horizontal connection line for desktop */}
          <div
            className="absolute top-[44px] left-[7.14%] right-[7.14%] hidden h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 lg:block z-0"
            aria-hidden="true"
          />

          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 lg:gap-4 relative z-10">
            {erpImplementationSteps.map((step) => (
              <li
                key={step.number}
                className="group relative flex flex-col items-center text-center rounded-2xl border border-border/40 bg-card/30 p-5 shadow-glow-primary/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/45 hover:bg-card/50 hover:shadow-glow-primary/10 hover:-translate-y-1"
              >
                {/* Step Circle with animated pulse glow */}
                <div className="relative flex size-12 items-center justify-center rounded-full border border-primary/30 bg-background font-mono text-xs font-bold text-primary shadow-glow-primary transition-transform duration-300 group-hover:scale-110 group-hover:border-primary/60 group-hover:text-primary z-10">
                  <span className="absolute inset-0 rounded-full bg-primary/5 group-hover:animate-ping" />
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-5 flex flex-col items-center">
                  <h3 className="text-sm font-bold leading-5 text-foreground group-hover:text-primary transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
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
