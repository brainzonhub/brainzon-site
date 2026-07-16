import { BarChart3, TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/Container";
import type { CaseStudy } from "@/config/case-studies";

export function ResultsMetrics({ study }: { study: CaseStudy }) {
  return (
    <section aria-labelledby="results-metrics" className="border-y border-border bg-surface/40 py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Results & ROI</p><h2 id="results-metrics" className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Measurable operational outcomes</h2></div><div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground"><BarChart3 className="size-5 text-primary" aria-hidden="true" />Client-approved measurement scope</div></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {study.resultsMetrics.map((metric) => (
            <article key={metric.label} className="rounded-3xl border border-border bg-card/75 p-6 shadow-card backdrop-blur">
              <TrendingUp className="size-5 text-primary" aria-hidden="true" /><p className="mt-5 text-4xl font-extrabold tracking-tight text-foreground">{metric.value}</p><h3 className="mt-2 text-sm font-bold text-foreground">{metric.label}</h3><p className="mt-3 min-h-16 text-xs leading-5 text-muted-foreground">{metric.detail}</p>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted" role="img" aria-label={`${metric.label}: ${metric.value}`}><div className="h-full rounded-full bg-brand-gradient" style={{ width: `${metric.progress}%` }} /></div>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-4xl text-sm leading-7 text-muted-foreground">{study.resultsSummary}</p>
      </Container>
    </section>
  );
}
