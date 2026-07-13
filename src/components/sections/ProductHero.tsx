import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getMenuIcon } from "@/components/navigation/menu-icons";
import { cn } from "@/lib/utils";

interface ProductHeroProps {
  name: string;
  headline: string;
  highlight?: string;
  description: string;
  icon: string;
  rightElement?: React.ReactNode;
}

export function ProductHero({ name, headline, highlight, description, icon, rightElement }: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-border/40 bg-background transition-colors duration-300">
      {/* Dynamic background glows */}
      <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      {/* Decorative tech grid backdrop */}
      <div 
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true"
      />

      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={12} className="transform group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Ecosystem</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="badge-accent">
              Core Ecosystem Product
            </span>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                {getMenuIcon(icon, { size: 24 })}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                {name}
              </h1>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mt-2 leading-tight">
              {highlight && headline.includes(highlight) ? (
                <>
                  <span>{headline.split(highlight)[0]}</span>
                  <span className="bg-brand-gradient bg-clip-text text-transparent">{highlight}</span>
                  <span>{headline.split(highlight)[1]}</span>
                </>
              ) : (
                <span className="bg-brand-gradient bg-clip-text text-transparent">{headline}</span>
              )}
            </h2>

            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="/solutions"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                )}
              >
                <span>Explore Industry Solutions</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/40 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                <span>Consult an Expert</span>
                <ArrowRight size={16} className="text-primary" />
              </Link>
            </div>
          </div>

          {/* Right illustration or custom diagram */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center w-full">
            {rightElement ? (
              rightElement
            ) : (
              <div className="relative w-full h-[300px] border border-border/40 rounded-3xl bg-surface/30 backdrop-blur-md overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-24 items-center justify-center rounded-3xl bg-card border border-border shadow-glow-primary p-4 animate-[pulse_4s_ease-in-out_infinite]">
                    {getMenuIcon(icon, { size: 48, className: "text-primary animate-pulse" })}
                  </div>
                </div>
                {/* Tech details */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-muted-foreground/60 border-t border-border/20 pt-3">
                  <span>SYSTEM: ACTIVE</span>
                  <span>BRAINZON CORE PLATFORM</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
