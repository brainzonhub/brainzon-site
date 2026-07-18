import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { integrationHeroContent } from "@/config/integration";

export function IntegrationHero() {
  const { badge, headline, subheadline, primaryCta, secondaryCta } = integrationHeroContent;

  const outerNodes = [
    { name: "BrainERP", x: 420, y: 250, delay: "0.2s" },
    { name: "BrainCRM", x: 370, y: 370, delay: "0.8s" },
    { name: "BrainAI", x: 250, y: 420, delay: "0.5s" },
    { name: "eCommerce", x: 130, y: 370, delay: "1.1s" },
    { name: "Payment Systems", x: 80, y: 250, delay: "0.3s" },
    { name: "Cloud Apps", x: 130, y: 130, delay: "0.9s" },
    { name: "Legacy Systems", x: 250, y: 80, delay: "0.6s" },
    { name: "External APIs", x: 370, y: 130, delay: "1.4s" },
  ];

  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background py-20 sm:py-28 lg:py-32">
      {/* Dynamic background glows */}
      <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      {/* Decorative tech grid backdrop */}
      <div 
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
          
          {/* Left Column: Context & Action */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary dark:text-cyan-400 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary dark:bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary dark:bg-cyan-500"></span>
              </span>
              {badge}
            </div>
            
            <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1]">
              {headline.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(6,182,212,0.12)] dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                {headline.split(" ").slice(-2).join(" ")}
              </span>
            </h1>
            
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {subheadline}
            </p>
            
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link 
                href="#showcase" 
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-primary-foreground shadow-glow-primary transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {primaryCta} 
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              
              <Link 
                href="/contact" 
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-card/40 px-6 text-sm font-bold text-foreground backdrop-blur-md transition-all duration-300 hover:bg-card/60 hover:border-primary/45 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {secondaryCta}
              </Link>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-muted-foreground">
              {["Secure API Pipelines", "Zero-Message Loss", "Hybrid & Multi-Cloud Connectors"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary dark:text-cyan-400 shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Network Connectivity Simulator */}
          <div className="relative mx-auto w-full max-w-2xl aspect-square flex items-center justify-center" aria-label="Dynamic Network Connectivity Simulator">
            <div className="absolute -inset-8 -z-10 rounded-full bg-primary/10 dark:bg-cyan-500/5 blur-3xl pointer-events-none animate-pulse" />
            
            {/* SVG Network Graph */}
            <svg 
              viewBox="0 0 500 500" 
              className="w-full h-full max-w-[500px] overflow-visible"
            >
              {/* Pulsing Central Glow behind BrainConnect */}
              <circle cx="250" cy="250" r="70" className="fill-primary/5 dark:fill-cyan-500/5 stroke-none" />
              <circle cx="250" cy="250" r="50" className="fill-primary/10 dark:fill-cyan-500/10 stroke-primary/20 dark:stroke-cyan-500/20" />
              
              {/* Staggered Pulsing circles */}
              <circle cx="250" cy="250" r="60" className="fill-none stroke-primary/15 dark:stroke-cyan-500/15 stroke-[1.5] animate-ping [animation-duration:4s]" />
              <circle cx="250" cy="250" r="90" className="fill-none stroke-secondary/10 dark:stroke-cyan-500/10 stroke-[1.5] animate-ping [animation-duration:6s] [animation-delay:2s]" />

              {/* Network Connections (Lines & Travelling Signals) */}
              {outerNodes.map((node, index) => {
                const pathD = index % 2 === 0
                  ? `M 250 250 L ${node.x} ${node.y}`
                  : `M ${node.x} ${node.y} L 250 250`;
                
                return (
                  <g key={node.name}>
                    {/* Background Connection Line */}
                    <path
                      d={`M 250 250 L ${node.x} ${node.y}`}
                      stroke="currentColor"
                      className="text-border/60 dark:text-border/30"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    
                    {/* Travelling Pulse Signal */}
                    <circle r="4.5" className="fill-primary dark:fill-cyan-400 drop-shadow-[0_0_8px_var(--color-primary)]">
                      <animateMotion
                        dur={`${2.2 + (index % 3) * 0.6}s`}
                        repeatCount="indefinite"
                        path={pathD}
                        begin={node.delay}
                        calcMode="linear"
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Central Hub: BrainConnect */}
              <foreignObject x={180} y={230} width={140} height={40} className="overflow-visible">
                <div className="flex h-full w-full items-center justify-center rounded-xl border border-primary bg-background p-2 text-center shadow-[0_0_15px_rgba(59,130,246,0.35)] dark:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary dark:bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary dark:bg-cyan-400"></span>
                    </span>
                    <span className="text-[11px] font-extrabold tracking-wider uppercase text-foreground">
                      BrainConnect
                    </span>
                  </div>
                </div>
              </foreignObject>

              {/* Outer Nodes */}
              {outerNodes.map((node) => (
                <foreignObject 
                  key={node.name} 
                  x={node.x - 50} 
                  y={node.y - 16} 
                  width={100} 
                  height={32} 
                  className="overflow-visible"
                >
                  <div className="group/node flex h-full w-full items-center justify-center rounded-lg border border-border bg-card/90 backdrop-blur-md px-2 py-1 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 dark:hover:border-cyan-500/50 hover:shadow-glow-primary">
                    <span className="text-[9px] font-bold text-foreground transition-colors duration-300 group-hover/node:text-primary dark:group-hover/node:text-cyan-300">
                      {node.name}
                    </span>
                  </div>
                </foreignObject>
              ))}
            </svg>
          </div>

        </div>
      </Container>
    </section>
  );
}
