import { Award, Boxes, Briefcase, Network, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { whyChooseIntegration } from "@/config/integration";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Boxes,
  Briefcase,
  Network,
  ShieldCheck,
};

export function WhyBrainzonIntegration() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-28">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/3 -z-10 size-[350px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 -z-10 size-[350px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Your integration partner
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Why Choose Brainzon for Integration
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            Building reliable interfaces is about more than just matching database fields. It is about architectural resilience, security compliance, and long-term operating support.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {whyChooseIntegration.map((benefit) => {
            const IconComponent = iconMap[benefit.icon] || Award;
            return (
              <article
                key={benefit.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-primary/45 hover:shadow-glow-primary/30"
              >
                {/* Visual Glassmorphism Background Gradient */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                <div>
                  <span className="mb-6 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-inner transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/20">
                    <IconComponent className="size-6 text-primary" />
                  </span>

                  <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
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
