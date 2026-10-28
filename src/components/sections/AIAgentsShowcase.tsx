"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ShieldCheck, ArrowRight, type LucideIcon, Megaphone, Users, Database, Receipt } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type AIAgentUseCase = {
  id: string;
  name: string;
  agentName: string;
  product: string;
  icon: LucideIcon;
  prompt: string;
  response: string;
  controls: string;
};

const aiAgentUseCases: AIAgentUseCase[] = [
  {
    id: "mkt",
    name: "Marketing Planning",
    agentName: "BrainMKT AI Agent",
    product: "BrainMKT",
    icon: Megaphone,
    prompt: "Summarize Q3 campaign performance and prepare next week's email calendar draft.",
    response: "✔ Analysis Prepared for Review.\n• Q3 Conversion Rate: 4.8% (+1.2% over target across paid ad channels).\n• Top Responding Segment: Enterprise SaaS Tech Leads.\n• Draft Email Calendar: 3 sequences scheduled with A/B subject variations.\n[Governance Notice: Requires marketing manager approval before dispatch]",
    controls: "Content review & publishing approval required"
  },
  {
    id: "crm",
    name: "Customer Relationships",
    agentName: "BrainCRM AI Agent",
    product: "BrainCRM",
    icon: Users,
    prompt: "Summarize recent touchpoints for Apex Manufacturing and draft follow-up proposal notes.",
    response: "✔ Account Summary Generated.\n• Total Interactions: 14 touchpoints across sales and support.\n• Key Interest: Multi-site warehouse synchronization.\n• Proposed Scope: 300 user tier with priority SLA.\n• Draft follow-up note staged in CRM notes.\n[Governance Notice: Customer-impacting actions require rep review]",
    controls: "Human review before external communication"
  },
  {
    id: "erp",
    name: "Operations & Supply Chain",
    agentName: "BrainERP AI Agent",
    product: "BrainERP",
    icon: Database,
    prompt: "Scan inventory for SKU-8994 and summarize supply chain exceptions.",
    response: "✔ Operational Scan Complete.\n• Current Stock: 1,240 units across Central and North warehouses.\n• Exception Flag: Supplier lead time extended by 4 days.\n• Recommendation: Reorder threshold reached. Draft Purchase Order #PO-8821 prepared for review.\n[Governance Notice: Consequential purchase order requires manager authorization]",
    controls: "Transaction authorization & human review required"
  },
  {
    id: "books",
    name: "Accounting & Ledgers",
    agentName: "BrainBooks AI Agent",
    product: "BrainBooks",
    icon: Receipt,
    prompt: "Explain the variance in accounts payable aging and prepare month-end reconciliation notes.",
    response: "✔ Financial Summary Prepared.\n• Accounts Payable Variance: +$14,200 due to accelerated vendor billing in Period 9.\n• Bank Feeds: 48 statement lines automatically matched; 2 flagged for review.\n• Reconciliation Draft Notes: Formatted for corporate review.\n[Governance Notice: Agent cannot independently approve payments or post journal entries]",
    controls: "Strict financial permissions; zero autonomous payment approval"
  }
];

export function AIAgentsShowcase() {
  const [selectedCase, setSelectedCase] = useState<AIAgentUseCase>(aiAgentUseCases[0] as AIAgentUseCase);
  const [typedResponse, setTypedResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const text = selectedCase.response;
    let index = 0;
    let interval: NodeJS.Timeout;

    const timer = setTimeout(() => {
      setTypedResponse("");
      setIsTyping(true);
      
      interval = setInterval(() => {
        setTypedResponse((prev) => prev + text.charAt(index));
        index++;
        if (index >= text.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 10);
    }, 0);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [selectedCase]);

  return (
    <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptions */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="badge-accent animate-blink-accent">
              Dedicated AI Assistance
            </span>
            <h2 className="text-heading-2 font-bold tracking-tight text-foreground mt-3">
              Product-Specific AI Agents
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Brainzon embeds dedicated AI assistants directly into each product workflow: BrainMKT, BrainCRM, BrainERP, and BrainBooks. Every agent operates within strict role permissions with human review controls.
            </p>

            <div className="mt-8 flex flex-col gap-2.5 w-full">
              {aiAgentUseCases.map((useCase) => {
                const Icon = useCase.icon;
                const isSelected = selectedCase.id === useCase.id;
                return (
                  <button
                    key={useCase.id}
                    type="button"
                    onClick={() => setSelectedCase(useCase)}
                    className={cn(
                      "w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isSelected 
                        ? "border-primary bg-primary/5 text-foreground shadow-glow-primary" 
                        : "border-border bg-card/20 text-muted-foreground hover:bg-card/45 hover:text-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "flex size-8 items-center justify-center rounded-lg transition-colors",
                        isSelected ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                      )}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <span className="text-xs font-bold block">{useCase.agentName}</span>
                        <span className="text-[10px] text-muted-foreground">{useCase.product}</span>
                      </div>
                    </div>
                    {isSelected && <div className="size-1.5 rounded-full bg-primary animate-pulse" />}
                  </button>
                );
              })}
            </div>

            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <span>Explore All Product AI Agents</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Column: Interactive Agent Console */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-border bg-card shadow-elevated overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              
              {/* Console Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-red-500/80" />
                    <div className="size-2.5 rounded-full bg-yellow-500/80" />
                    <div className="size-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground ml-2">
                    {selectedCase.agentName} Console
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span className="text-[9px] font-mono text-emerald-500">GOVERNED / HUMAN-IN-THE-LOOP</span>
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-5 font-mono text-xs text-foreground space-y-4 min-h-[220px] max-h-[320px] overflow-y-auto bg-black/40">
                {/* User Prompt */}
                <div className="flex items-start gap-2.5">
                  <span className="text-primary font-bold">&gt;</span>
                  <p className="text-muted-foreground leading-relaxed">{selectedCase.prompt}</p>
                </div>

                {/* AI Response */}
                <div className="pt-2 border-t border-border/20 flex items-start gap-2.5">
                  <Sparkles size={14} className="text-primary mt-0.5 shrink-0 animate-pulse" />
                  <pre className="whitespace-pre-wrap leading-relaxed font-sans text-foreground/90 select-text">
                    {typedResponse}
                    {isTyping && <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-primary animate-pulse align-middle" />}
                  </pre>
                </div>
              </div>

              {/* Status footer */}
              <div className="px-5 py-2.5 bg-muted/20 border-t border-border/60 text-[9px] font-mono text-muted-foreground flex justify-between">
                <span>POLICY: {selectedCase.controls}</span>
                <span>AUTHENTICATION: ROLE-GATED</span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
