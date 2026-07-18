import { Container } from "@/components/layout/Container";
import { crmChallenges } from "@/config/crm";
import { Database, Workflow, Eye, Users, TrendingUp } from "lucide-react";

const iconMap = {
  Database,
  Workflow,
  Eye,
  Users,
  TrendingUp,
};

export function CRMChallenges() {
  return (
    <section className="border-b border-border bg-surface py-20 sm:py-24">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            The Relationship Gap
          </p>
          <h2 className="text-heading-2 font-bold text-foreground">
            Why Businesses Need Modern CRM
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            Consolidate fragmented customer profiles, automate manually repetitive processes, and gain predictive visibility into your growth pipelines with unified relationship management.
          </p>
        </div>

        {/* Challenges Rows */}
        <div className="flex flex-col gap-4">
          {crmChallenges.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] ?? Database;
            return (
              <article
                key={item.title}
                className="group rounded-2xl bg-card/40 backdrop-blur-md border border-border/60 p-5 sm:p-6 shadow-card transition-all duration-300 hover:translate-x-1.5 hover:border-primary/50 hover:shadow-glow-primary flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-left"
              >
                {/* Icon Container */}
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary dark:text-cyan-300 dark:border-cyan-300/20 dark:bg-cyan-300/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40">
                  <IconComponent className="size-5.5" aria-hidden="true" />
                </span>

                <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-6 justify-between">
                  {/* Challenge Title */}
                  <h3 className="text-base font-bold text-foreground transition-colors duration-200 group-hover:text-primary dark:group-hover:text-cyan-300 shrink-0 md:w-1/4">
                    {item.title}
                  </h3>

                  {/* Challenge Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
