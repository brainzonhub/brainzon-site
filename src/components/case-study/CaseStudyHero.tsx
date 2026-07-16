import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Database, Network, Sparkles, Users, Layers } from "lucide-react";
import { Container } from "@/components/layout/Container";
import type { CaseStudy } from "@/config/case-studies";

export function CaseStudyHero({ study }: { study: CaseStudy }) {
  return (
    <header className="relative isolate overflow-hidden border-b border-border bg-background py-14 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(6,182,212,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_70%_30%,#000_50%,transparent_100%)]" />
      <div className="absolute -right-48 top-0 -z-10 size-[34rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -left-48 bottom-0 -z-10 size-96 rounded-full bg-secondary/10 blur-3xl" />

      <Container>
        <Link href="/resources/case-studies" className="group mb-10 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          All case studies
        </Link>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="badge-primary">{study.industry} case study</div>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">{study.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">{study.summary}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={study.primaryCta.href} className="inline-flex items-center gap-2 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 px-5 py-3 text-sm font-bold shadow-glow-secondary transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {study.primaryCta.label}<ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href={study.secondaryCta.href} className="inline-flex items-center rounded-xl border border-border bg-card/70 px-5 py-3 text-sm font-bold text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {study.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[2rem] border border-primary/20 bg-card/60 p-5 shadow-elevated backdrop-blur-xl">
            {study.heroImage && <Image src={study.heroImage} alt="Abstract visualization of connected enterprise systems" fill priority sizes="(max-width: 1024px) 100vw, 480px" className="object-cover opacity-20" />}
            
            {/* SVG Connecting Mesh */}
            <svg className="absolute inset-0 size-full pointer-events-none" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="144" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4" className="opacity-20 animate-pulse" />
              <circle cx="200" cy="200" r="96" stroke="var(--secondary)" strokeWidth="1" strokeDasharray="2 2" className="opacity-15" />
              
              {/* Mesh connection paths */}
              <line x1="56" y1="200" x2="200" y2="200" stroke="var(--primary)" strokeWidth="1.5" className="opacity-50 animate-pulse" />
              <line x1="344" y1="200" x2="200" y2="200" stroke="var(--primary)" strokeWidth="1.5" className="opacity-50 animate-pulse" />
              <line x1="200" y1="96" x2="200" y2="200" stroke="var(--secondary)" strokeWidth="1.5" className="opacity-40 animate-pulse" />
              <line x1="200" y1="304" x2="200" y2="200" stroke="var(--secondary)" strokeWidth="1.5" className="opacity-40 animate-pulse" />
              
              {/* Outer boundary lines */}
              <path d="M 56 200 L 200 96 L 344 200 L 200 304 Z" stroke="var(--primary)" strokeWidth="0.75" strokeDasharray="3 3" className="opacity-25" />
            </svg>

            {/* Client Name badge */}
            <div className="absolute left-1/2 top-6 -translate-x-1/2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold text-primary z-10">{study.clientName}</div>

            {/* Top Node - CRM */}
            <div className="absolute top-16 left-1/2 flex size-16 -translate-x-1/2 items-center justify-center rounded-2xl border border-border bg-card-opaque shadow-card z-10">
              <Users className="size-7 text-primary" aria-hidden="true" />
            </div>

            {/* Left Node - ERP */}
            <div className="absolute left-6 top-1/2 flex size-16 -translate-y-1/2 items-center justify-center rounded-2xl border border-border bg-card-opaque shadow-card z-10">
              <Database className="size-7 text-secondary" aria-hidden="true" />
            </div>

            {/* Center Node - Core AI */}
            <div className="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-primary/30 bg-background shadow-glow-primary z-10">
              <Sparkles className="size-10 text-primary animate-pulse" aria-hidden="true" />
            </div>

            {/* Right Node - Connect */}
            <div className="absolute right-6 top-1/2 flex size-16 -translate-y-1/2 items-center justify-center rounded-2xl border border-border bg-card-opaque shadow-card z-10">
              <Network className="size-7 text-primary" aria-hidden="true" />
            </div>

            {/* Bottom Node - SaaS/Cloud */}
            <div className="absolute bottom-24 left-1/2 flex size-16 translate-y-1 -translate-x-1/2 items-center justify-center rounded-2xl border border-border bg-card-opaque shadow-card z-10">
              <Layers className="size-7 text-secondary" aria-hidden="true" />
            </div>

            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-background/90 px-4 py-2 text-xs font-semibold text-muted-foreground z-10">Connected enterprise operations</div>
          </div>
        </div>
      </Container>
    </header>
  );
}
