import { Container } from "@/components/layout/Container";
import { aiChallenges } from "@/config/ai";
import { Database, Cpu, TrendingUp, Users, Search } from "lucide-react";

const iconMap = {
  Database,
  Cpu,
  TrendingUp,
  Users,
  Search,
};

export function AIChallenges() {
  return (
    <section className="border-b border-border bg-surface py-20 sm:py-24">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            The AI Imperative
          </p>
          <h2 className="text-heading-2 font-bold text-foreground">
            Why Modern Businesses Need AI
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            Legacy tools create cognitive bottlenecks. Incorporating specialized artificial intelligence bridges the gap between siloed business data and decisive daily execution.
          </p>
        </div>

        {/* Challenges Grid (5-column responsive layout) */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {aiChallenges.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] ?? Database;
            return (
              <article
                key={item.title}
                className="group rounded-2xl bg-card/40 backdrop-blur-md border border-border/60 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container */}
                  <span className="flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary dark:text-cyan-300 dark:border-cyan-300/20 dark:bg-cyan-300/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40">
                    <IconComponent className="size-5" aria-hidden="true" />
                  </span>

                  {/* Challenge Title */}
                  <h3 className="mt-6 text-lg font-bold text-foreground transition-colors duration-200 group-hover:text-primary dark:group-hover:text-cyan-300">
                    {item.title}
                  </h3>

                  {/* Challenge Description */}
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
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
