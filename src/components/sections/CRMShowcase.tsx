"use client";

import { useState } from "react";
import Link from "next/link";
import { Kanban, UserCheck, MailCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type Deal = {
  id: string;
  company: string;
  value: string;
  stage: "prospect" | "proposal" | "won";
  contactName: string;
  contactEmail: string;
  probability: string;
};

const mockDeals: Deal[] = [
  {
    id: "deal-1",
    company: "Acme Enterprise",
    value: "$42,000",
    stage: "prospect",
    contactName: "Sarah Connor",
    contactEmail: "sarah@acme.io",
    probability: "20%"
  },
  {
    id: "deal-2",
    company: "Nova Technologies",
    value: "$85,000",
    stage: "proposal",
    contactName: "Julian Vance",
    contactEmail: "julian@nova.com",
    probability: "75%"
  },
  {
    id: "deal-3",
    company: "Vertex Global",
    value: "$120,000",
    stage: "won",
    contactName: "Marcus Aurelius",
    contactEmail: "marcus@vertex.co",
    probability: "100%"
  }
];

export function CRMShowcase() {
  const [selectedDeal, setSelectedDeal] = useState<Deal>(mockDeals[1] as Deal); // Default to Nova Technologies

  return (
    <section className="relative py-20 border-b border-border/40 bg-surface transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Holographic Pipeline & Customer 360 Simulator */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-elevated overflow-hidden backdrop-blur-md">
              {/* Decorative top-left highlight */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />

              {/* Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <Kanban size={16} className="text-secondary animate-pulse" />
                  <span className="text-[11px] font-mono tracking-widest text-secondary font-bold uppercase">
                    BrainCRM Live pipeline tracker
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-border/60 bg-muted/20 text-[9px] font-mono text-muted-foreground">
                  SYNCED W/ ERP
                </div>
              </div>

              {/* Kanban stages view */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                
                {/* Stage 1: Prospect */}
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-1 block">
                    Prospect
                  </span>
                  {mockDeals.filter(d => d.stage === "prospect").map(deal => (
                    <button
                      key={deal.id}
                      type="button"
                      onClick={() => setSelectedDeal(deal)}
                      className={cn(
                        "w-full p-2.5 rounded-lg border text-left transition-all",
                        selectedDeal.id === deal.id 
                          ? "border-secondary bg-secondary/5 shadow-glow-secondary" 
                          : "border-border/60 bg-muted/10 hover:bg-muted/20"
                      )}
                    >
                      <h4 className="text-xs font-bold text-foreground truncate">{deal.company}</h4>
                      <p className="text-[10px] text-muted-foreground mt-1">{deal.value}</p>
                    </button>
                  ))}
                </div>

                {/* Stage 2: Proposal */}
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-1 block">
                    Proposal
                  </span>
                  {mockDeals.filter(d => d.stage === "proposal").map(deal => (
                    <button
                      key={deal.id}
                      type="button"
                      onClick={() => setSelectedDeal(deal)}
                      className={cn(
                        "w-full p-2.5 rounded-lg border text-left transition-all",
                        selectedDeal.id === deal.id 
                          ? "border-secondary bg-secondary/5 shadow-glow-secondary" 
                          : "border-border/60 bg-muted/10 hover:bg-muted/20"
                      )}
                    >
                      <h4 className="text-xs font-bold text-foreground truncate">{deal.company}</h4>
                      <p className="text-[10px] text-muted-foreground mt-1">{deal.value}</p>
                    </button>
                  ))}
                </div>

                {/* Stage 3: Closed Won */}
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-1 block text-emerald-400">
                    Won
                  </span>
                  {mockDeals.filter(d => d.stage === "won").map(deal => (
                    <button
                      key={deal.id}
                      type="button"
                      onClick={() => setSelectedDeal(deal)}
                      className={cn(
                        "w-full p-2.5 rounded-lg border text-left transition-all",
                        selectedDeal.id === deal.id 
                          ? "border-secondary bg-secondary/5 shadow-glow-secondary" 
                          : "border-border/60 bg-muted/10 hover:bg-muted/20"
                      )}
                    >
                      <h4 className="text-xs font-bold text-foreground truncate">{deal.company}</h4>
                      <p className="text-[10px] text-muted-foreground mt-1">{deal.value}</p>
                    </button>
                  ))}
                </div>

              </div>

              {/* Customer 360 Detail View Panel */}
              <div className="mt-6 p-4 rounded-xl border border-border/60 bg-muted/10">
                <div className="flex justify-between items-start pb-3 mb-3 border-b border-border/30">
                  <div>
                    <span className="text-[8px] font-mono tracking-widest text-secondary font-bold uppercase block">
                      Customer 360 Profile
                    </span>
                    <h3 className="text-sm font-bold text-foreground mt-0.5">
                      {selectedDeal.company}
                    </h3>
                  </div>
                  <span className={cn(
                    "px-2 py-0.5 rounded text-[8px] font-bold uppercase",
                    selectedDeal.stage === "won" && "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
                    selectedDeal.stage === "proposal" && "bg-secondary/10 text-secondary border border-secondary/20",
                    selectedDeal.stage === "prospect" && "bg-muted text-muted-foreground border border-border"
                  )}>
                    {selectedDeal.stage}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-[11px]">
                  <div>
                    <span className="text-[9px] text-muted-foreground block">Key Contact</span>
                    <span className="text-foreground font-semibold">{selectedDeal.contactName}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-muted-foreground block">Email Address</span>
                    <span className="text-foreground font-semibold">{selectedDeal.contactEmail}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-muted-foreground block">Deal Value</span>
                    <span className="text-foreground font-semibold text-secondary">{selectedDeal.value}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-muted-foreground block">Probability</span>
                    <span className="text-foreground font-semibold text-primary">{selectedDeal.probability}</span>
                  </div>
                </div>
              </div>

              {/* Real-time sync log */}
              <div className="mt-4 flex items-center gap-2 text-[9px] font-mono text-muted-foreground/80 pt-2 border-t border-border/20">
                <span className="size-1.5 rounded-full bg-secondary animate-pulse" />
                <span>SYNC STATUS: PIPELINE MODIFIED IN REAL-TIME</span>
              </div>

            </div>
          </div>

          {/* Right Column: Descriptions */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 border border-secondary/20 mb-6">
              Growth Intelligence
            </span>
            <h2 className="text-heading-2 font-bold tracking-tight text-foreground">
              BrainCRM Showcase
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Consolidate marketing and conversion pipelines under one digital ecosystem. Track leads, sync operations, and automate outreach schedules.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary mt-0.5 shrink-0">
                  <UserCheck size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Lead Conversion Funnels</h4>
                  <p className="text-[11px] text-muted-foreground leading-normal mt-0.5">
                    Track clients across their lifecycle with customized Kanban boards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5 shrink-0">
                  <MailCheck size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Marketing Automation</h4>
                  <p className="text-[11px] text-muted-foreground leading-normal mt-0.5">
                    Schedule triggers, sync email flows, and run target-driven campaigns.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/products/braincrm"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:underline"
            >
              <span>Explore BrainCRM Capabilities</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}
