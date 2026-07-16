import { AlertTriangle, TrendingDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import type { CaseStudy } from "@/config/case-studies";

export function BusinessChallenge({ study }: { study: CaseStudy }) {
  return (
    <section aria-labelledby="business-challenge" className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">Business challenge</p>
            <h2 id="business-challenge" className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Operational friction was limiting scale</h2>
            <div className="mt-8 space-y-4">
              {study.challenges.map((challenge) => (
                <div key={challenge} className="flex gap-4 rounded-2xl border border-border bg-card/50 p-5 backdrop-blur">
                  <AlertTriangle className="mt-0.5 size-5 shrink-0 text-secondary" aria-hidden="true" />
                  <p className="text-sm leading-7 text-muted-foreground">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-technology-gradient p-7 text-white shadow-elevated sm:p-9">
            <div className="flex items-center gap-3"><TrendingDown className="size-6 text-brand-red-light" aria-hidden="true" /><h3 className="text-xl font-bold">Before Brainzon</h3></div>
            <p className="mt-3 text-sm leading-6 text-slate-300">Baseline indicators captured during discovery established a measurable transformation starting point.</p>
            <div className="mt-8 space-y-4">
              {study.beforeMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-extrabold text-brand-cyan-light">{metric.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
