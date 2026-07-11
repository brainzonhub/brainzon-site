import { Database, Users, ShoppingCart, Cpu, Code2, Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { integrationServices } from "@/config/integration";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  Users,
  ShoppingCart,
  Cpu,
  Code2,
};

export function IntegrationServices() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface py-20 sm:py-28">
      {/* Decorative Glows */}
      <div className="absolute top-1/3 left-1/2 -z-10 size-[350px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 -z-10 size-[350px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Integration Capabilities
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Enterprise Integration Services
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            Connect your critical business applications, automate manual workflows, and build high-throughput data highways with our specialist integration services.
          </p>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {integrationServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Database;
            return (
              <article
                key={service.title}
                className={cn(
                  "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-primary/45 hover:shadow-glow-primary/30"
                )}
              >
                {/* Visual Glassmorphism Background Gradient */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                <div>
                  <span className="mb-6 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-inner transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/20">
                    <IconComponent className="size-6 text-primary" />
                  </span>

                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Target Systems */}
                  {service.targets && service.targets.length > 0 && (
                    <div className="mt-6">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-2">
                        Supported Platforms:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.targets.map((target) => (
                          <span
                            key={target}
                            className="rounded-md border border-border bg-muted/30 px-2 py-0.5 text-xs font-medium text-foreground/85 transition-colors hover:border-primary/30 hover:bg-primary/5"
                          >
                            {target}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Service Features */}
                {service.features && service.features.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-border/40">
                    <ul className="grid gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs text-foreground/80">
                          <Check className="size-4 shrink-0 text-primary mt-0.5" />
                          <span className="leading-5">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
