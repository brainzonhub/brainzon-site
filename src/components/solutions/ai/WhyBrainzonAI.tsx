import { Container } from "@/components/layout/Container";
import { whyChooseAI } from "@/config/ai";
import { AIIcon } from "./ai-icons";

export function WhyBrainzonAI() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface py-20 sm:py-28">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/3 -z-10 size-[350px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 -z-10 size-[350px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Your transformation partner
          </p>
          <h2 className="text-heading-2 font-bold text-foreground">
            Why Choose Brainzon for AI
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            Technology is just the foundation. The strategic alignment, security posture, and collaborative implementation we deliver ensure long-term, high-impact business outcomes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseAI.map((benefit) => {
            return (
              <article
                key={benefit.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-primary/45 hover:shadow-glow-primary/30"
              >
                {/* Visual Glassmorphism Background Gradient */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                <div>
                  <span className="mb-6 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-inner transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/20">
                    <AIIcon name={benefit.icon} className="size-6 text-primary" />
                  </span>
                  
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {benefit.description}
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
