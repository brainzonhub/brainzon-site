import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { aiFunctionSolutions } from "@/config/ai";
import { AIIcon } from "./ai-icons";

export function AIFunctionSolutions() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface py-20 sm:py-28">
      {/* Decorative Glows */}
      <div className="absolute top-1/3 right-1/4 -z-10 size-[350px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 -z-10 size-[350px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Departmental intelligence
          </p>
          <h2 className="text-heading-2 font-bold text-foreground">
            AI Solutions by Business Function
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            Integrate specialized cognitive modules across every department to accelerate manual operations and uncover critical process insights.
          </p>
        </div>

        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {aiFunctionSolutions.map((solution) => {
            return (
              <article
                key={solution.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-primary/45 hover:shadow-glow-primary/30"
              >
                {/* Visual Glassmorphism Background Gradient */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                <div>
                  <span className="mb-6 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-inner transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/20">
                    <AIIcon name={solution.icon} className="size-6 text-primary" />
                  </span>

                  <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {solution.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-border/60">
                  <p className="mb-3 font-mono text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                    Use Cases
                  </p>
                  <ul className="grid gap-2">
                    {solution.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-start gap-2 text-xs text-foreground/80">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
