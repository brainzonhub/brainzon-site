import { Container } from "@/components/layout/Container";
import { integrationChallenges } from "@/config/integration";
import { SolutionsIcon } from "../solutions-icons";

export function IntegrationChallenges() {
  return (
    <section className="border-b border-border bg-surface py-20 sm:py-24">
      <Container>
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary dark:text-cyan-400">
            The Connectivity Gap
          </p>
          <h2 className="text-heading-2 font-bold text-foreground">
            Overcoming Modern Integration Challenges
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            Siloed systems generate operational friction. BrainConnect bridges the gap between your applications to ensure fluid, automated processes.
          </p>
        </div>
        
        {/* Challenges Grid - 5-column responsive layout */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {integrationChallenges.map((item) => (
            <article 
              key={item.title} 
              className="group relative flex flex-col justify-between rounded-2xl bg-card/45 backdrop-blur-md border border-border/50 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 dark:hover:border-cyan-500/50 hover:shadow-glow-primary"
            >
              <div>
                {/* Icon Container */}
                <span className="flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary dark:text-cyan-300 dark:border-cyan-300/20 dark:bg-cyan-300/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40 dark:group-hover:bg-cyan-300/20 dark:group-hover:border-cyan-300/45">
                  <SolutionsIcon name={item.icon} className="size-5" />
                </span>
                
                {/* Challenge Title */}
                <h3 className="mt-6 text-base font-bold text-foreground transition-colors duration-200 group-hover:text-primary dark:group-hover:text-cyan-300">
                  {item.title}
                </h3>
                
                {/* Challenge Description */}
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        
      </Container>
    </section>
  );
}
