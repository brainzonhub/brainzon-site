import * as LucideIcons from "lucide-react";
import { Container } from "@/components/layout/Container";
import { generativeAICapabilities } from "@/config/ai";
import { cn } from "@/lib/utils";

export function GenerativeAISection() {
  return (
    <section className="relative py-20 border-b border-border bg-card/10 transition-colors duration-300">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-surface-glow opacity-25 pointer-events-none" />
      <div className="absolute top-10 left-10 -z-10 h-[30%] w-[30%] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 -z-10 h-[30%] w-[30%] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4">
            Generative AI
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Enterprise Generative AI Capabilities
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Enhance operational intelligence with purpose-built LLMs and semantic frameworks configured for corporate datasets.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {generativeAICapabilities.map((capability, idx) => {
            // Resolve icon dynamically
            const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[capability.icon] || LucideIcons.HelpCircle;

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
                <div className="flex size-12 items-center justify-center rounded-xl bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 shrink-0 mb-6 border border-border/60">
                  <IconComponent className="size-6 transition-transform duration-300 group-hover:scale-110" />
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-3">
                  {capability.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Security & Privacy Compliance Notice */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm overflow-hidden">
            {/* Ambient subtle glow inside the notice */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/30 shrink-0">
                <LucideIcons.ShieldAlert className="size-6 animate-pulse" />
              </div>
              <div className="flex-1">
                <h4 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                  Security & Privacy Compliance Notice
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  BrainAI is designed with strict enterprise compliance boundaries. Your proprietary training inputs, corporate databases, and system prompts are executed in isolated tenants. They are never transmitted to public LLM platforms or utilized to train external foundational models.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-muted-foreground/80">
                  <span className="flex items-center gap-1 bg-muted px-2.5 py-1 rounded border border-border">
                    <LucideIcons.Lock className="size-3 text-primary" /> GDPR Compliant
                  </span>
                  <span className="flex items-center gap-1 bg-muted px-2.5 py-1 rounded border border-border">
                    <LucideIcons.ServerCrash className="size-3 text-primary" /> Isolated VPC
                  </span>
                  <span className="flex items-center gap-1 bg-muted px-2.5 py-1 rounded border border-border">
                    <LucideIcons.CheckCircle2 className="size-3 text-primary" /> SOC2 Type II Framework
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
