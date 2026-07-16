import { Container } from "@/components/layout/Container";
import type { CaseStudy } from "@/config/case-studies";

export function ImplementationTimeline({ study }: { study: CaseStudy }) {
  return (
    <section aria-labelledby="implementation-process" className="py-24">
      <Container>
        <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Implementation process</p><h2 id="implementation-process" className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">A controlled path from discovery to value</h2><p className="mt-5 text-base leading-8 text-muted-foreground">The program used measurable gates, repeated validation, and business ownership to reduce transformation risk.</p></div>
        <ol className="relative mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {study.implementationSteps.map((step, index) => (
            <li key={step.title} className="group rounded-3xl border border-border bg-card/60 p-6 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40">
              <div className="flex items-center justify-between"><span className="font-mono text-3xl font-extrabold text-primary/40">{String(index + 1).padStart(2, "0")}</span><span className="rounded-full bg-muted px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{step.duration}</span></div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{step.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
