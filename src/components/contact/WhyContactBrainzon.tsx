"use client";

import { Container } from "@/components/layout/Container";
import { Shield, Sparkles, Network, HeartHandshake } from "lucide-react";

export function WhyContactBrainzon() {
  const cards = [
    {
      title: "Enterprise Expertise",
      description: "Proven experience designing, building, and deploying highly secure, custom software solutions for Fortune 500 companies and growing mid-market enterprises.",
      icon: Shield,
    },
    {
      title: "Business-Focused Approach",
      description: "We don't build technology for technology's sake. Every line of code, migration script, and ERP module we deploy is strictly aligned with your specific business goals.",
      icon: Sparkles,
    },
    {
      title: "Modern Architecture",
      description: "Our solutions are engineered for the future—leveraging cloud-native containers, API-first integrations, automated failovers, and modular databases.",
      icon: Network,
    },
    {
      title: "Long-Term Partnership",
      description: "We stick with you through the entire lifecycle—providing continuous training, 24/7/365 active monitoring, system audits, and roadmap planning long after go-live.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-border/40 bg-surface/50 transition-colors duration-300">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-accent animate-blink-accent">Why Brainzon</span>
          <h2 className="text-3xl md:text-heading-2 font-bold tracking-tight text-foreground mt-4">
            The Partner of Choice for Modern Enterprises
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            We merge robust software engineering with deep process optimization to deliver sustainable competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-8 rounded-3xl border border-border bg-card/65 backdrop-blur-md hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300 flex gap-6"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{card.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-3">
                    {card.description}
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
