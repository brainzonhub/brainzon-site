import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { solutionsConfig } from "@/config/solutions";
import { getMenuIcon } from "@/components/navigation/menu-icons";
import { cn } from "@/lib/utils";

export function SolutionsGrid() {
  return (
    <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
      {/* Dynamic background highlights */}
      <div className="absolute top-[20%] right-[10%] -z-10 h-[50%] w-[50%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-heading-2 font-bold tracking-tight text-foreground">
            Enterprise Solutions
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Tailored digital blueprints designed to orchestrate resources, enhance intelligence, and unify communication channels for industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {solutionsConfig.map((solution) => (
            <div
              key={solution.title}
              className={cn(
                "group relative p-6 rounded-2xl border border-border shadow-card bg-card/45 backdrop-blur-md",
                "hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col justify-between"
              )}
            >
              <div>
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors mb-6">
                  {getMenuIcon(solution.icon, { size: 20 })}
                </div>

                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {solution.title}
                </h3>
                
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>

                {/* Benefits */}
                <div className="mt-5 space-y-2">
                  <h4 className="text-[10px] font-semibold uppercase tracking-wider text-foreground">
                    Key Advantages
                  </h4>
                  <ul className="space-y-1.5 mt-2">
                    {solution.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-1.5 text-[10px] text-muted-foreground">
                        <span className="size-1 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-border/40">
                <Link
                  href={solution.href}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:text-secondary-foreground transition-colors group/link focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded"
                >
                  <span>Explore Solution</span>
                  <ArrowRight size={12} className="transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
