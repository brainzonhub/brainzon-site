import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { demoHeroContent } from "@/config/demo";
import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { ProductIcon } from "@/components/ui/ProductIcon";

/* ------------------------------------------------------------------ */
/*  Glassmorphic dashboard preview cards for the hero illustration     */
/* ------------------------------------------------------------------ */

function MiniBarChart() {
  const bars = [40, 65, 50, 80, 60, 90, 72];
  return (
    <div className="flex items-end gap-[3px] h-7">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-[5px] rounded-sm bg-violet-500/70"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function PipelineDots() {
  const stages = [
    "bg-amber-500/90",
    "bg-amber-500/70",
    "bg-amber-500/50",
    "bg-amber-500/30",
    "bg-amber-500/15",
  ];
  return (
    <div className="flex items-center gap-1.5">
      {stages.map((cls, i) => (
        <div key={i} className={cn("h-2.5 w-2.5 rounded-full", cls)} />
      ))}
    </div>
  );
}

function CampaignWave() {
  return (
    <svg
      width="64"
      height="26"
      viewBox="0 0 64 26"
      fill="none"
      className="text-cyan-500"
      aria-hidden="true"
    >
      <path
        d="M2 20 L14 14 L26 17 L40 8 L50 11 L62 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <circle cx="62" cy="3" r="2.5" fill="currentColor" />
    </svg>
  );
}

function LedgerStatus() {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <span className="text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">Balanced</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface DashCardProps {
  icon: React.ReactNode;
  iconBg?: string;
  title: string;
  metric: string;
  children: React.ReactNode;
  className?: string;
}

function DashCard({ icon, iconBg = "bg-primary/10", title, metric, children, className }: DashCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md shadow-card",
        "px-5 py-4 transition-all duration-300",
        className
      )}
    >
      {/* Neon top line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className={cn("flex h-7 w-7 items-center justify-center rounded-lg", iconBg)}>
              {icon}
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              {title}
            </span>
          </div>
          <p className="text-sm font-bold text-foreground">{metric}</p>
        </div>
        <div className="flex-shrink-0">{children}</div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  DemoHero — server component                                       */
/* ================================================================== */

export function DemoHero() {
  const { badge, headline, subheadline, primaryCta, secondaryCta } =
    demoHeroContent;

  return (
    <section className="relative py-20 md:py-28 bg-background overflow-hidden transition-colors duration-300">
      {/* Subtle grid pattern background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]"
      >
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundSize: "40px 40px",
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          }}
        />
      </div>

      {/* Ambient glow top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[48rem] rounded-full bg-primary/5 blur-3xl"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
          {/* ── Left column ── */}
          <div className="lg:col-span-6 space-y-6">
            {/* Badge */}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded border border-primary/20 bg-primary/10 text-[9px] font-mono font-bold tracking-widest text-primary uppercase">
              {badge}
            </span>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1]">
              {headline.includes("Business Operations") ? (
                <>
                  {headline.split("Business Operations")[0]}
                  <span className="bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(0,156,180,0.18)] dark:drop-shadow-[0_0_20px_rgba(0,156,180,0.3)]">
                    Business Operations
                  </span>
                  {headline.split("Business Operations")[1]}
                </>
              ) : headline.includes("Modernize Your Business") ? (
                <>
                  See How Brainzon Can{" "}
                  <span className="bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(0,156,180,0.18)] dark:drop-shadow-[0_0_20px_rgba(0,156,180,0.3)]">
                    Modernize Your Business
                  </span>
                </>
              ) : (
                <span className="bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(0,156,180,0.18)] dark:drop-shadow-[0_0_20px_rgba(0,156,180,0.3)]">
                  {headline}
                </span>
              )}
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg text-muted-foreground max-w-xl">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#demo-form"
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold",
                  "bg-primary text-primary-foreground shadow-glow-primary",
                  "hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]",
                  "transition-all duration-200"
                )}
              >
                {primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://calendly.com/brainzon/new-meeting" target="_blank" 
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold",
                  "border border-border bg-card/40 backdrop-blur-sm text-foreground",
                  "hover:border-primary/40 hover:bg-primary/5",
                  "transition-all duration-200"
                )}
              >
                <MessageCircle className="h-4 w-4" />
                {secondaryCta}
              </a>
            </div>
          </div>

          {/* ── Right column — Illustration ── */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Ambient radial glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 h-56 w-72 rounded-full bg-primary/8 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-4 right-8 h-40 w-48 rounded-full bg-secondary/6 blur-3xl"
            />

            {/* Stacked dashboard cards with connection lines */}
            <div className="relative w-full max-w-md space-y-3.5">
              {/* SVG connection lines */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 w-full h-full z-0"
                preserveAspectRatio="none"
                viewBox="0 0 400 380"
              >
                <defs>
                  <linearGradient id="conn-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.25" />
                    <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.25" />
                  </linearGradient>
                </defs>
                {/* Card 1 → Card 2 */}
                <line
                  x1="60"
                  y1="55"
                  x2="60"
                  y2="105"
                  stroke="url(#conn-grad)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                {/* Card 2 → Card 3 */}
                <line
                  x1="60"
                  y1="145"
                  x2="60"
                  y2="195"
                  stroke="url(#conn-grad)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                {/* Card 3 → Card 4 */}
                <line
                  x1="60"
                  y1="235"
                  x2="60"
                  y2="285"
                  stroke="url(#conn-grad)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                {/* Cross connection */}
                <line
                  x1="340"
                  y1="55"
                  x2="340"
                  y2="310"
                  stroke="url(#conn-grad)"
                  strokeWidth="1"
                  strokeDasharray="3 6"
                />
              </svg>

              {/* Card 1 — BrainERP */}
              <DashCard
                icon={<ProductIcon product="brainerp" size={18} />}
                iconBg="bg-white/80 dark:bg-card border border-border/50 shadow-xs"
                title="BrainERP"
                metric="98.7% Efficiency"
                className="relative z-10"
              >
                <MiniBarChart />
              </DashCard>

              {/* Card 2 — BrainCRM */}
              <DashCard
                icon={<ProductIcon product="braincrm" size={18} />}
                iconBg="bg-white/80 dark:bg-card border border-border/50 shadow-xs"
                title="BrainCRM"
                metric="2.4k Active Leads"
                className="relative z-10 ml-3 md:ml-6"
              >
                <PipelineDots />
              </DashCard>

              {/* Card 3 — BrainMKT */}
              <DashCard
                icon={<ProductIcon product="brainmkt" size={18} />}
                iconBg="bg-white/80 dark:bg-card border border-border/50 shadow-xs"
                title="BrainMKT"
                metric="+45% Campaign Velocity"
                className="relative z-10 ml-1 md:ml-2"
              >
                <CampaignWave />
              </DashCard>

              {/* Card 4 — BrainBooks */}
              <DashCard
                icon={<ProductIcon product="brainbooks" size={18} />}
                iconBg="bg-white/80 dark:bg-card border border-border/50 shadow-xs"
                title="BrainBooks"
                metric="100% Reconciled Ledgers"
                className="relative z-10 ml-4 md:ml-8"
              >
                <LedgerStatus />
              </DashCard>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
