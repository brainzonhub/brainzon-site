import { Building2, Globe2, MapPin, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import type { CaseStudy } from "@/config/case-studies";

export function ClientOverview({ study }: { study: CaseStudy }) {
  const facts = [
    { icon: Building2, label: "Company", value: study.clientName },
    { icon: Globe2, label: "Industry", value: study.industry },
    { icon: MapPin, label: "Location", value: study.location },
    { icon: Users, label: "Scale", value: study.size },
  ];

  return (
    <section aria-labelledby="client-overview" className="bg-surface/40 py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Client overview</p>
            <h2 id="client-overview" className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">The organization behind the transformation</h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">{study.clientSummary}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-border bg-card/70 p-5 shadow-card backdrop-blur transition-colors hover:border-primary/35">
                <Icon className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="mt-1 text-sm font-semibold leading-6 text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 rounded-3xl border border-secondary/25 bg-secondary/5 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Problem statement</p>
          <p className="mt-3 max-w-5xl text-xl font-bold leading-8 text-foreground">{study.challengeHighlight}</p>
        </div>
      </Container>
    </section>
  );
}
