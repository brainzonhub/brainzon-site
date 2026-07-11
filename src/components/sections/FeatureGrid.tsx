import * as LucideIcons from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeatureGridProps {
  features: Feature[];
  productName: string;
}

export function FeatureGrid({ features, productName }: FeatureGridProps) {
  return (
    <section className="relative py-20 border-b border-border/40 bg-surface/50 transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute top-10 left-1/4 -z-10 h-[40%] w-[40%] rounded-full bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 -z-10 h-[40%] w-[40%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-30 blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {productName} Core Capabilities
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Data-driven enterprise features engineered for scale, reliability, and automated workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            // Resolve icon dynamically
            const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[feature.icon] || LucideIcons.HelpCircle;

            return (
              <div
                key={idx}
                className={cn(
                  "group relative p-6 sm:p-8 rounded-2xl border border-border shadow-card bg-card/40 backdrop-blur-md",
                  "hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col items-start"
                )}
              >
                {/* Visual hover top outline accent */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-300" />
                
                {/* Icon box */}
                <div className="flex size-10 items-center justify-center rounded-xl bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0 mb-6">
                  <IconComponent size={20} />
                </div>

                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
