import { CheckCircle2, Cloud, Cpu, Network, ServerCog } from "lucide-react";
import { Container } from "@/components/layout/Container";
import type { CaseStudy } from "@/config/case-studies";

export function SolutionOverview({ study }: { study: CaseStudy }) {
  const icons = [ServerCog, Network, Cpu, Cloud, ServerCog];
  return (
    <section aria-labelledby="solution-overview" className="border-y border-border bg-surface/40 py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Brainzon solution</p>
          <h2 id="solution-overview" className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">One governed platform, connected end to end</h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">{study.solutionSummary}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" aria-label="Brainzon technologies used">
          {study.products.map((product) => <span key={product} className="rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold text-primary">{product}</span>)}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card/70 p-7 shadow-card backdrop-blur sm:p-8">
            <h3 className="text-xl font-bold text-foreground">Capabilities delivered</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {study.features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />{feature}</li>)}
            </ul>
            <div className="mt-8 border-t border-border pt-6"><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Deployment model</p><p className="mt-2 text-sm font-semibold leading-6 text-foreground">{study.deploymentModel}</p></div>
          </div>

          <figure className="rounded-3xl border border-primary/20 bg-technology-gradient p-7 text-white shadow-elevated sm:p-8">
            <figcaption className="text-sm font-bold uppercase tracking-[0.18em] text-brand-cyan-light">Solution architecture schematic</figcaption>
            <div className="mt-8 space-y-3">
              {study.architecture.map((node, index) => {
                const Icon = icons[index % icons.length] ?? ServerCog;
                return <div key={node} className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"><div className="flex size-10 items-center justify-center rounded-xl bg-brand-cyan/15"><Icon className="size-5 text-brand-cyan-light" aria-hidden="true" /></div><div><p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Layer {String(index + 1).padStart(2, "0")}</p><p className="text-sm font-semibold text-white">{node}</p></div>{index < study.architecture.length - 1 && <span className="absolute -bottom-4 left-9 h-4 w-px bg-brand-cyan/50" aria-hidden="true" />}</div>;
              })}
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
}
