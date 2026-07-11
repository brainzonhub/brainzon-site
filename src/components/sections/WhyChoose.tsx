"use client";

import { ShieldCheck, Cloud, RefreshCw, Activity, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";

type Differentiator = {
  metric: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const items: Differentiator[] = [
  {
    metric: "ISO 27001",
    title: "Security & Compliance",
    description: "End-to-end encryption for all API nodes, multi-factor authorization layers, and automated compliance ledgers.",
    icon: ShieldCheck
  },
  {
    metric: "99.99% SLA",
    title: "Global Scale & Uptime",
    description: "Multi-cloud infrastructure configurations across AWS, GCP, and Azure with automated failovers and low latency replication.",
    icon: Activity
  },
  {
    metric: "100% Wrapped",
    title: "Legacy Modernization",
    description: "Wrap old databases, COBOL files, and legacy core systems in modern, secure, and fast microservices API nodes.",
    icon: RefreshCw
  },
  {
    metric: "24/7/365",
    title: "Managed Cloud Support",
    description: "Continuous performance audits, DevOps automation triggers, and round-the-clock monitoring by certified architects.",
    icon: Cloud
  }
];

export function WhyChoose() {
  return (
    <section className="relative py-20 border-b border-border/40 bg-surface transition-colors duration-300">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-heading-2 font-bold tracking-tight text-foreground">
            Why Choose Brainzon
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            We merge global engineering capabilities with custom software methodologies to deliver reliable digital transformation foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title}
                className="relative p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-md shadow-card flex flex-col justify-between hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                      {item.metric}
                    </span>
                    <Icon className="text-muted-foreground/60" size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mt-4">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
