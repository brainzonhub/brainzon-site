import Link from "next/link";
import { ArrowRight, RefreshCw, Clock, Shield, TrendingUp, Headphones } from "lucide-react";
import { Container } from "@/components/layout/Container";

const trustMetrics = [
  { icon: Clock, value: "2–4 Weeks", label: "Assessment Delivery" },
  { icon: Shield, value: "Zero Risk", label: "Migration Guarantee" },
  { icon: TrendingUp, value: "40%", label: "Cost Reduction Avg." },
  { icon: Headphones, value: "24/7", label: "Expert Support" },
];

export function ModernizationCTA() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28 transition-colors duration-300">
      {/* Subtle radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/[0.04] via-transparent to-transparent blur-3xl pointer-events-none" />

      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
              <RefreshCw className="size-3.5 animate-spin" style={{ animationDuration: "4s" }} />
              Start Your Transformation
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Ready To Modernize Your
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Business Applications?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Talk with Brainzon modernization experts and discover how to transform your legacy systems into future-ready platforms — with zero downtime and measurable ROI.
            </p>
          </div>

          {/* Trust metrics strip */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustMetrics.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-xl border border-border/40 bg-card/45 p-4 backdrop-blur-sm text-center"
              >
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/15">
                  <Icon className="size-4" />
                </span>
                <p className="text-lg font-extrabold text-foreground tracking-tight">{value}</p>
                <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/book-demo"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-bold text-primary-foreground shadow-glow-primary transition-all hover:bg-primary/85 hover:scale-[1.02] whitespace-nowrap"
            >
              Request Modernization Assessment
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/company/about"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-card px-7 text-sm font-bold text-foreground hover:bg-muted transition-all whitespace-nowrap"
            >
              Contact Experts
            </Link>
          </div>

          {/* Bottom trust line */}
          <p className="mt-6 text-center text-[10px] font-mono text-muted-foreground/60 tracking-wider">
            No obligation · Free initial assessment · Results in 2–4 weeks
          </p>
        </div>
      </Container>
    </section>
  );
}
