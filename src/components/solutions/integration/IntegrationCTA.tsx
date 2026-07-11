import Link from "next/link";
import { ArrowRight, MessagesSquare } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { integrationFinalCta } from "@/config/integration";

export function IntegrationCTA() {
  const { headline, description, primaryButton, secondaryButton } = integrationFinalCta;

  return (
    <section className="relative py-20 sm:py-28 bg-background transition-colors duration-300">
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border/60 bg-card/45 backdrop-blur-md p-8 text-center shadow-card transition-all duration-500 hover:border-primary/50 dark:hover:border-cyan-500/50 hover:shadow-glow-primary sm:p-14 relative overflow-hidden group">
          {/* Subtle inside gradient background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          
          {/* Subtle Glow Ring */}
          <div className="absolute -inset-10 -z-10 rounded-full bg-primary/5 dark:bg-cyan-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary dark:text-cyan-300 dark:bg-cyan-300/10 dark:border-cyan-300/20 mb-7 transition-all duration-300 group-hover:scale-110">
            <MessagesSquare className="size-7 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            {headline}
          </h2>

          {/* Description */}
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link 
              href="/book-demo" 
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-primary-foreground shadow-glow-primary transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {primaryButton}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            
            <Link 
              href="/company/about" 
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-card/40 px-6 text-sm font-bold text-foreground backdrop-blur-md transition-all duration-300 hover:bg-card/60 hover:border-primary/45 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {secondaryButton}
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}
