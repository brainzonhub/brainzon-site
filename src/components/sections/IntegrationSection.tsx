import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { Link2 } from "lucide-react";

interface IntegrationSectionProps {
  integrations: string[];
  productName: string;
}

export function IntegrationSection({ integrations, productName }: IntegrationSectionProps) {
  return (
    <section className="relative py-20 border-b border-border/40 bg-surface/35 transition-colors duration-300">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Extensible Integrations
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {productName} connects natively with enterprise core platforms, database clusters, cloud vaults, and third-party systems to keep your workflows unified.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4">
          {integrations.map((item) => (
            <div
              key={item}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card/60 backdrop-blur-md shadow-sm hover:border-primary/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:scale-105 transition-all duration-300 cursor-default group"
              )}
            >
              <div className="flex size-6 items-center justify-center rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                <Link2 size={12} className="transform group-hover:rotate-45 transition-transform" />
              </div>
              <span className="text-xs font-semibold text-foreground tracking-wide font-mono">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
