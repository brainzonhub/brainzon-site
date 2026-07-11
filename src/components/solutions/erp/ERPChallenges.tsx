import { Container } from "@/components/layout/Container";
import { erpChallenges } from "@/config/erp";
import { ERPIcon } from "./erp-icons";
import { ERPSectionHeader } from "./ERPSectionHeader";

export function ERPChallenges() {
  return (
    <section className="border-b border-border bg-surface py-20 sm:py-24">
      <Container>
        
        {/* Section Header */}
        <ERPSectionHeader 
          eyebrow="The operational gap" 
          title="Why Businesses Need Modern ERP" 
          description="Legacy tools create friction between teams, data, and decisions. Modern ERP replaces operational blind spots with one governed source of truth." 
        />
        
        {/* Challenges Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {erpChallenges.map((item) => (
            <article 
              key={item.title} 
              className="group rounded-2xl bg-card/40 backdrop-blur-md border-border/60 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary"
            >
              {/* Icon Container */}
              <span className="flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary dark:text-cyan-300 dark:border-cyan-300/20 dark:bg-cyan-300/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40">
                <ERPIcon name={item.icon} className="size-5" />
              </span>
              
              {/* Challenge Title */}
              <h3 className="mt-6 text-lg font-bold text-foreground transition-colors duration-200 group-hover:text-primary dark:group-hover:text-cyan-300">
                {item.title}
              </h3>
              
              {/* Challenge Description */}
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        
      </Container>
    </section>
  );
}
