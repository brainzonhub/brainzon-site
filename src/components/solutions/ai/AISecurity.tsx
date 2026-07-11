import * as LucideIcons from "lucide-react";
import { Container } from "@/components/layout/Container";
import { aiSecurityCards } from "@/config/ai";
import { cn } from "@/lib/utils";

export function AISecurity() {
  return (
    <section className="relative py-20 border-b border-border bg-background transition-colors duration-300">
      {/* Background visual glows */}
      <div className="absolute inset-0 bg-surface-glow opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/10 text-xs font-mono font-bold tracking-widest text-secondary uppercase mb-4">
            Security & Governance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Enterprise Trust & Security Pillars
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Deploy cognitive models with assurance. BrainAI incorporates rigorous safety controls, governance standards, and performance scalability.
          </p>
        </div>

        {/* Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {aiSecurityCards.map((card, idx) => {
            // Resolve icon dynamically
            const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[card.icon] || LucideIcons.HelpCircle;

            return (
              <div
                key={idx}
                className={cn(
                  "group relative p-6 sm:p-8 rounded-2xl border border-border shadow-card bg-card/40 backdrop-blur-md",
                  "hover:border-secondary/50 hover:shadow-glow-secondary transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
                )}
              >
                {/* Visual hover top outline accent using the secondary brand color */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-secondary/0 to-transparent group-hover:via-secondary/50 transition-all duration-300" />

                {/* Icon box */}
                <div className="flex size-12 items-center justify-center rounded-xl bg-muted text-muted-foreground group-hover:bg-secondary/10 group-hover:text-secondary transition-all duration-300 shrink-0 border border-border/60">
                  <IconComponent className="size-6 transition-transform duration-300 group-hover:scale-110" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-secondary transition-colors duration-200 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certification logos or additional text trust footer */}
        <div className="mt-16 text-center text-xs text-muted-foreground/60 tracking-wider font-mono">
          ISO 27001 ALIGNED • SOC 2 TYPE II COMPLIANCE FRAMEWORK • GDPR AUDITED ARCHITECTURE
        </div>
      </Container>
    </section>
  );
}
