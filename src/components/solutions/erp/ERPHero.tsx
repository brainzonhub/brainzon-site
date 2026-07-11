import Link from "next/link";
import { ArrowRight, CheckCircle2, Database, TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { erpHeroModules } from "@/config/erp";

export function ERPHero() {
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Enterprise ERP Transformation
            </div>
            
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl">
              Transform Your Business Operations With{" "}
              <span className="text-primary dark:text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                Intelligent ERP Solutions
              </span>
            </h1>
            
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              From finance and supply chain to sales, manufacturing, and workforce management, Brainzon delivers scalable ERP solutions that improve efficiency, visibility, and business growth.
            </p>
            
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link 
                href="/book-demo" 
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-primary-foreground shadow-glow-primary transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Book ERP Consultation 
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              
              <Link 
                href="/products/brainerp" 
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-card/40 px-6 text-sm font-bold text-foreground backdrop-blur-md transition-all duration-300 hover:bg-card/60 hover:border-primary/45 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Explore BrainERP
              </Link>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-muted-foreground">
              {["Platform-neutral consulting", "Secure migration", "End-to-end delivery"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Holographic Dashboard Simulator */}
          <div className="relative mx-auto w-full max-w-2xl" aria-label="BrainERP connected module dashboard">
            <div className="absolute -inset-8 -z-10 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            
            <div className="overflow-hidden rounded-2xl bg-card/40 backdrop-blur-md border-border/60 hover:border-primary/50 shadow-card transition-all duration-300">
              
              {/* Header inside simulated dashboard */}
              <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
                <div className="flex items-center gap-3">
                  <Database className="size-4 text-primary animate-pulse" />
                  <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-primary">
                    BRAINERP OPERATIONS CORE
                  </span>
                </div>
                <span className="flex items-center gap-2 font-mono text-[9px] text-emerald-500">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  LIVE
                </span>
              </div>
              
              {/* Main Content inside dashboard */}
              <div className="grid gap-4 p-5 sm:grid-cols-[1.25fr_.75fr]">
                
                {/* Visual Analytics Card */}
                <div className="rounded-xl border border-border/40 bg-card/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
                  <div className="mb-7 flex items-start justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Unified operating efficiency</p>
                      <p className="mt-2 text-3xl font-extrabold text-foreground">94.8%</p>
                    </div>
                    <TrendingUp className="size-5 text-primary" />
                  </div>
                  
                  {/* Graph visualization */}
                  <div className="flex h-24 items-end gap-2" aria-hidden="true">
                    {[38, 52, 47, 68, 61, 76, 72, 91].map((height, index) => (
                      <span 
                        key={index} 
                        className="flex-1 rounded-t bg-gradient-to-t from-primary/20 to-primary/80 transition-all duration-300 hover:to-secondary hover:from-secondary/20" 
                        style={{ height: `${height}%` }} 
                      />
                    ))}
                  </div>
                  
                  {/* Sub stats */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-border/40 bg-card/25 p-3 transition-colors hover:border-border/60">
                      <p className="text-[10px] text-muted-foreground font-mono">DATA SYNC</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">Real time</p>
                    </div>
                    
                    <div className="rounded-lg border border-border/40 bg-card/25 p-3 transition-colors hover:border-primary/30">
                      <p className="text-[10px] text-muted-foreground font-mono">ACTIVE FLOWS</p>
                      <p className="mt-1 text-sm font-semibold text-primary">128</p>
                    </div>
                  </div>
                </div>

                {/* Modules Checklist */}
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
                  {erpHeroModules.map((module, index) => (
                    <div 
                      key={module} 
                      className="relative overflow-hidden rounded-lg border border-border/40 bg-card/30 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/50"
                    >
                      <span 
                        className="absolute inset-y-0 left-0 w-0.5 bg-primary/70 animate-pulse" 
                        style={{ animationDelay: `${index * 180}ms` }} 
                      />
                      <p className="text-[10px] text-muted-foreground font-mono">
                        MODULE {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-foreground/90">
                        {module}
                      </p>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
