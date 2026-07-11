import { Container } from "@/components/layout/Container";
import { erpIndustries } from "@/config/erp";
import { ERPIcon } from "./erp-icons";
import { ERPSectionHeader } from "./ERPSectionHeader";

export function IndustrySolutions() {
  return (
    <section className="border-b border-border bg-surface py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-surface-glow opacity-25 pointer-events-none" />

      <Container>
        <ERPSectionHeader
          eyebrow="Industry operating models"
          title="ERP Solutions Built for Your Industry"
          description="Configure core ERP capabilities around the controls, workflows, and performance signals that define your sector."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {erpIndustries.map((industry) => (
            <article
              key={industry.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-6 shadow-glow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card/50 hover:shadow-glow-primary/10"
            >
              <div>
                {/* Header: Icon & Titles */}
                <div className="flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-glow-primary/5 transition-all duration-300 group-hover:border-primary/45 group-hover:bg-primary/25">
                    <ERPIcon
                      name={industry.icon}
                      className="size-6 transition-transform duration-300 group-hover:scale-110"
                    />
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground text-base tracking-tight">
                      {industry.title}
                    </h3>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {industry.description}
                    </p>
                  </div>
                </div>

                {/* Details: Challenge & Solution */}
                <div className="mt-6 space-y-4">
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-muted-foreground">
                      Industry Challenge
                    </span>
                    <p className="mt-1.5 text-xs leading-5 text-foreground/80">
                      {industry.challenge}
                    </p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-border/40 via-border/10 to-transparent" />
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-muted-foreground">
                      ERP Solution
                    </span>
                    <p className="mt-1.5 text-xs leading-5 text-foreground/80">
                      {industry.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlighted Business Benefit Bottom Section */}
              <div className="mt-6 rounded-xl border border-primary/15 bg-primary/5 p-4">
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-primary flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                  Business Benefit
                </span>
                <p className="mt-1.5 text-xs font-semibold leading-5 text-foreground">
                  {industry.benefit}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
