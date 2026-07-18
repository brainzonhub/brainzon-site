import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { aiHeroContent } from "@/config/ai";

export function AIHero() {
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
              {aiHeroContent.badge}
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1]">
              Unlock the Power of{" "}
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(6,182,212,0.12)] dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                Enterprise AI
              </span>{" "}
              With BrainAI
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              {aiHeroContent.subheadline}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
              <Link
                href="#showcase"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-primary-foreground shadow-glow-primary transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-center"
              >
                {aiHeroContent.primaryCta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-card/40 px-6 text-sm font-bold text-foreground backdrop-blur-md transition-all duration-300 hover:bg-card/60 hover:border-primary/45 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-center"
              >
                {aiHeroContent.secondaryCta}
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
                aria-label="BrainAI core connected to enterprise nodes"
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
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>

                {/* Connection Lines (Paths) */}
                <g stroke="var(--border)" strokeWidth="1.5" opacity="0.6">
                  {/* 1. BrainERP */}
                  <path id="toBrainERP" d="M 250 250 L 356 117" />
                  {/* 2. BrainCRM */}
                  <path id="toBrainCRM" d="M 250 250 L 420 250" />
                  {/* 3. BrainConnect */}
                  <path id="toBrainConnect" d="M 250 250 L 356 383" />
                  {/* 4. Business Data */}
                  <path id="toBusinessData" d="M 250 250 L 212 416" />
                  {/* 5. Documents */}
                  <path id="toDocuments" d="M 250 250 L 97 324" />
                  {/* 6. Cloud Applications */}
                  <path id="toCloudApps" d="M 250 250 L 97 176" />
                  {/* 7. Enterprise Systems */}
                  <path id="toEnterpriseSys" d="M 250 250 L 212 84" />
                </g>

                {/* Animated Particles flowing outward along connection paths */}
                <g fill="var(--primary)" filter="url(#svgGlow)">
                  <circle r="3.5">
                    <animateMotion dur="2.8s" repeatCount="indefinite" path="M 250 250 L 356 117" />
                  </circle>
                  <circle r="3.5" fill="var(--secondary)">
                    <animateMotion dur="3.4s" repeatCount="indefinite" path="M 250 250 L 420 250" />
                  </circle>
                  <circle r="3.5">
                    <animateMotion dur="2.2s" repeatCount="indefinite" path="M 250 250 L 356 383" />
                  </circle>
                  <circle r="3.5">
                    <animateMotion dur="4.0s" repeatCount="indefinite" path="M 250 250 L 212 416" />
                  </circle>
                  <circle r="3.5" fill="var(--accent)">
                    <animateMotion dur="3.0s" repeatCount="indefinite" path="M 250 250 L 97 324" />
                  </circle>
                  <circle r="3.5">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 250 250 L 97 176" />
                  </circle>
                  <circle r="3.5">
                    <animateMotion dur="3.8s" repeatCount="indefinite" path="M 250 250 L 212 84" />
                  </circle>
                </g>

                {/* Central BrainAI Hub */}
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
                    fontSize="11"
                    fontWeight="bold"
                    fontFamily="monospace"
                    letterSpacing="0.5"
                  >
                    BrainAI
                  </text>
                </g>

                {/* Outer Nodes (Glassmorphic Cards) */}
                
                {/* 1. BrainERP Node */}
                <g>
                  <rect x="306" y="99" width="100" height="36" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1" opacity="0.95" />
                  <text x="356" y="121" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                    BrainERP
                  </text>
                </g>

                {/* 2. BrainCRM Node */}
                <g>
                  <rect x="370" y="232" width="100" height="36" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1" opacity="0.95" />
                  <text x="420" y="254" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                    BrainCRM
                  </text>
                </g>

                {/* 3. BrainConnect Node */}
                <g>
                  <rect x="301" y="365" width="110" height="36" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1" opacity="0.95" />
                  <text x="356" y="387" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                    BrainConnect
                  </text>
                </g>

                {/* 4. Business Data Node */}
                <g>
                  <rect x="157" y="398" width="110" height="36" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1" opacity="0.95" />
                  <text x="212" y="420" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                    Business Data
                  </text>
                </g>

                {/* 5. Documents Node */}
                <g>
                  <rect x="47" y="306" width="100" height="36" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1" opacity="0.95" />
                  <text x="97" y="328" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                    Documents
                  </text>
                </g>

                {/* 6. Cloud Applications Node */}
                <g>
                  <rect x="22" y="158" width="150" height="36" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1" opacity="0.95" />
                  <text x="97" y="180" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                    Cloud Applications
                  </text>
                </g>

                {/* 7. Enterprise Systems Node */}
                <g>
                  <rect x="137" y="66" width="150" height="36" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1" opacity="0.95" />
                  <text x="212" y="88" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                    Enterprise Systems
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
