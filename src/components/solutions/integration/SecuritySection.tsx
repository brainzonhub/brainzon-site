import { Container } from "@/components/layout/Container";
import { securityCards } from "@/config/integration";
import { Shield, Key, Activity, Layers, type LucideIcon } from "lucide-react";

const securityIcons: Record<string, LucideIcon> = {
  Shield,
  Key,
  Activity,
  Layers,
};

export function SecuritySection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface py-20 sm:py-28">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 -z-10 size-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 size-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4">
            Zero-Trust Safeguards
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Enterprise-Grade Integration Security
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Protect your transactional flows, customer histories, and administrative databases with strict data custody protocols.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {securityCards.map((card) => {
            const Icon = securityIcons[card.icon] ?? Shield;
            return (
              <article
                key={card.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/40 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/45 hover:bg-card/50 hover:shadow-glow-primary/15"
              >
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                <div>
                  {/* Icon Frame */}
                  <span className="mb-6 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-glow-primary/5 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/25">
                    <Icon className="size-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm leading-6 text-muted-foreground">
                    {card.description}
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
