import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { crmHeroContent } from "@/config/crm";

export function CRMHero() {
  const headlineParts = crmHeroContent.headline.split("BrainCRM");
  const prefixText = headlineParts[0] || "";

  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background py-20 sm:py-28 lg:py-32">
      {/* Background glow effects */}
      <div 
        className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" 
        aria-hidden="true"
      />

      {/* Grid backdrop */}
      <div 
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Context & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {crmHeroContent.badge}
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1]">
              {prefixText}
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(6,182,212,0.12)] dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                BrainCRM
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              {crmHeroContent.subheadline}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
              <Link
                href="#showcase"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-primary-foreground shadow-glow-primary transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-center"
              >
                {crmHeroContent.primaryCta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-card/40 px-6 text-sm font-bold text-foreground backdrop-blur-md transition-all duration-300 hover:bg-card/60 hover:border-primary/45 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-center"
              >
                {crmHeroContent.secondaryCta}
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic SVG Simulator */}
          <div className="lg:col-span-6 flex justify-center items-center w-full">
            <div className="relative w-full max-w-[500px] aspect-square rounded-2xl bg-card/10 border border-border/20 p-4 backdrop-blur-sm overflow-hidden shadow-elevated">
              {/* Radial gradient glow behind the simulator */}
              <div 
                className="absolute inset-0 bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" 
                aria-hidden="true"
              />

              <svg
                viewBox="0 0 500 500"
                className="w-full h-full text-foreground"
                aria-label="BrainCRM core connected to enterprise modules"
              >
                <defs>
                  {/* Glow filter for nodes and particles */}
                  <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  
                  {/* Gradient for central hub */}
                  <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="var(--secondary)" />
                  </linearGradient>
                </defs>

                {/* Connection Lines (Paths) */}
                <g stroke="var(--border)" strokeWidth="1.5" opacity="0.6">
                  {/* 1. Sales Pipeline */}
                  <path id="toSalesPipeline" d="M 250 250 L 380 110" />
                  {/* 2. Customer 360 */}
                  <path id="toCustomer360" d="M 250 250 L 420 250" />
                  {/* 3. Marketing Automation */}
                  <path id="toMarketing" d="M 250 250 L 380 390" />
                  {/* 4. Support Center */}
                  <path id="toSupport" d="M 250 250 L 120 390" />
                  {/* 5. Analytics */}
                  <path id="toAnalytics" d="M 250 250 L 80 250" />
                  {/* 6. BrainAI */}
                  <path id="toBrainAI" d="M 250 250 L 120 110" />
                </g>

                {/* Animated Particles flowing outward along connection paths */}
                <g fill="var(--primary)" filter="url(#svgGlow)">
                  <circle r="3.5" fill="var(--secondary)">
                    <animateMotion dur="2.8s" repeatCount="indefinite" path="M 250 250 L 380 110" />
                  </circle>
                  <circle r="3.5">
                    <animateMotion dur="3.4s" repeatCount="indefinite" path="M 250 250 L 420 250" />
                  </circle>
                  <circle r="3.5" fill="var(--accent)">
                    <animateMotion dur="2.2s" repeatCount="indefinite" path="M 250 250 L 380 390" />
                  </circle>
                  <circle r="3.5" fill="#10b981">
                    <animateMotion dur="4.0s" repeatCount="indefinite" path="M 250 250 L 120 390" />
                  </circle>
                  <circle r="3.5" fill="var(--primary)">
                    <animateMotion dur="3.0s" repeatCount="indefinite" path="M 250 250 L 80 250" />
                  </circle>
                  <circle r="3.5" fill="#22d3ee">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 250 250 L 120 110" />
                  </circle>
                </g>

                {/* Central BrainCRM Hub */}
                <g>
                  {/* Pulsing Back Glow */}
                  <circle cx="250" cy="250" r="42" fill="var(--primary)" opacity="0.15">
                    <animate attributeName="r" values="36;50;36" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.1;0.25;0.1" dur="3s" repeatCount="indefinite" />
                  </circle>

                  {/* Core Circle */}
                  <circle cx="250" cy="250" r="32" fill="url(#hubGradient)" filter="url(#svgGlow)">
                    <animate attributeName="r" values="30;34;30" dur="3s" repeatCount="indefinite" />
                  </circle>

                  {/* Core Label */}
                  <text
                    x="250"
                    y="254"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="10.5"
                    fontWeight="bold"
                    fontFamily="monospace"
                    letterSpacing="0.5"
                  >
                    BrainCRM
                  </text>
                </g>

                {/* Outer Nodes (Glassmorphic Cards with Micro-charts) */}
                
                {/* 1. Sales Pipeline Node */}
                <g>
                  <rect x="320" y="80" width="120" height="55" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1" opacity="0.95" />
                  <text x="380" y="99" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                    Sales Pipeline
                  </text>
                  {/* Pipeline Bars */}
                  <rect x="335" y="111" width="90" height="3" rx="1.5" fill="var(--border)" opacity="0.3" />
                  <rect x="335" y="111" width="70" height="3" rx="1.5" fill="var(--primary)" />
                  
                  <rect x="335" y="119" width="90" height="3" rx="1.5" fill="var(--border)" opacity="0.3" />
                  <rect x="335" y="119" width="45" height="3" rx="1.5" fill="var(--secondary)" />
                </g>

                {/* 2. Customer 360 Node */}
                <g>
                  <rect x="360" y="222" width="120" height="55" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1" opacity="0.95" />
                  <text x="420" y="241" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                    Customer 360
                  </text>
                  {/* Circle Gauge & Score */}
                  <circle cx="380" cy="257" r="7" fill="none" stroke="var(--border)" strokeWidth="2" opacity="0.3" />
                  <circle cx="380" cy="257" r="7" fill="none" stroke="var(--primary)" strokeWidth="2" strokeDasharray="44" strokeDashoffset="12" transform="rotate(-90 380 257)" />
                  <text x="415" y="260" textAnchor="middle" fill="var(--foreground)" fontSize="9" fontWeight="bold" fontFamily="monospace">
                    98% Match
                  </text>
                </g>

                {/* 3. Marketing Automation Node */}
                <g>
                  <rect x="320" y="362" width="120" height="55" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1" opacity="0.95" />
                  <text x="380" y="381" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                    Marketing Auto
                  </text>
                  {/* Micro Bar Chart */}
                  <rect x="355" y="399" width="5" height="10" rx="1" fill="var(--primary)" />
                  <rect x="367" y="393" width="5" height="16" rx="1" fill="var(--primary)" />
                  <rect x="379" y="395" width="5" height="14" rx="1" fill="var(--secondary)" />
                  <rect x="391" y="397" width="5" height="12" rx="1" fill="var(--accent)" />
                </g>

                {/* 4. Support Center Node */}
                <g>
                  <rect x="60" y="362" width="120" height="55" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1" opacity="0.95" />
                  <text x="120" y="381" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                    Support Center
                  </text>
                  {/* SLA metric */}
                  <text x="120" y="402" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold" fontFamily="monospace">
                    SLA 99.9% OK
                  </text>
                </g>

                {/* 5. Analytics Node */}
                <g>
                  <rect x="20" y="222" width="120" height="55" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1" opacity="0.95" />
                  <text x="80" y="241" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                    CRM Analytics
                  </text>
                  {/* Sparkline */}
                  <path d="M 40 258 Q 55 248 70 258 T 100 252" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="100" cy="252" r="2.5" fill="var(--secondary)" className="animate-pulse" />
                </g>

                {/* 6. BrainAI Node */}
                <g>
                  <rect x="60" y="80" width="120" height="55" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1" opacity="0.95" />
                  <text x="120" y="99" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                    BrainAI
                  </text>
                  {/* AI Spark indicator */}
                  <circle cx="85" cy="115" r="2.5" fill="#22d3ee" className="animate-pulse" />
                  <text x="122" y="118" textAnchor="middle" fill="#22d3ee" fontSize="8" fontWeight="bold" fontFamily="monospace">
                    WIN RATE: 94%
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
