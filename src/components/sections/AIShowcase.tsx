"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Brain, FileSearch, LineChart, Code2, ArrowRight, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type AIUseCase = {
  id: string;
  name: string;
  icon: LucideIcon;
  prompt: string;
  response: string;
};

const aiUseCases: AIUseCase[] = [
  {
    id: "doc",
    name: "Document Intelligence",
    icon: FileSearch,
    prompt: "Analyze the uploaded vendor contract and flag liability risk clauses.",
    response: "✔ Analysis Complete.\n• Found Section 14.2: Liability is capped at 150% of annual service fees.\n• Found Section 14.5: Indemnification covers system failures but excludes third-party data breaches.\n• Risk Rating: LOW (conforms to standard enterprise policy)."
  },
  {
    id: "predict",
    name: "Predictive Analytics",
    icon: LineChart,
    prompt: "Forecast inventory demand for SKU-8994 in Q4.",
    response: "✔ Models Calculated.\n• Estimated Q4 demand: 8,420 units (+14.2% YoY growth).\n• Confidence Level: 92% (based on historical seasonal patterns and current ERP procurement logs).\n• Recommendation: Scale manufacturing safety stock by +400 units before Nov 1st."
  },
  {
    id: "gen",
    name: "Generative Code",
    icon: Code2,
    prompt: "Generate a type-safe client endpoint to sync CRM data.",
    response: "✔ Code Generated.\nexport interface CRMContact {\n  id: string;\n  name: string;\n  email: string;\n  status: 'active' | 'prospect';\n}\n\nexport async function syncCRMContact(contact: CRMContact) {\n  return await fetch('/api/crm/sync', {\n    method: 'POST',\n    body: JSON.stringify(contact)\n  });\n}"
  }
];

export function AIShowcase() {
  const [selectedCase, setSelectedCase] = useState<AIUseCase>(aiUseCases[0] as AIUseCase);
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
      }, 12);
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 mb-6">
              Artificial Intelligence
            </span>
            <h2 className="text-heading-2 font-bold tracking-tight text-foreground">
              BrainAI Platform
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Integrate advanced neural models and generative workflows directly into your enterprise database layers. Automate data parsing, run predictive forecasts, and build conversational wrappers.
            </p>

            <div className="mt-8 flex flex-col gap-2 w-full">
              {aiUseCases.map((useCase) => {
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
                        ? "border-accent bg-accent/5 text-foreground shadow-glow-accent" 
                        : "border-border bg-card/20 text-muted-foreground hover:bg-card/45 hover:text-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "flex size-8 items-center justify-center rounded-lg transition-colors",
                        isSelected ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"
                      )}>
                        <Icon size={16} />
                      </div>
                      <span className="text-xs font-bold">{useCase.name}</span>
                    </div>
                    {isSelected && <div className="size-1.5 rounded-full bg-accent animate-pulse" />}
                  </button>
                );
              })}
            </div>

            <Link
              href="/products/brainai"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:underline"
            >
              <span>Explore BrainAI Platforms</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Column: Interactive Chat Interface */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-border bg-card shadow-elevated overflow-hidden backdrop-blur-md">
              {/* Top border decoration */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-red-500/80" />
                    <div className="size-2.5 rounded-full bg-yellow-500/80" />
                    <div className="size-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground ml-2">BrainAI Terminal v1.4</span>
                </div>
                <div className="flex items-center gap-1">
                  <Brain size={14} className="text-accent animate-pulse" />
                  <span className="text-[9px] font-mono text-accent">MODEL STATE: ONLINE</span>
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-5 font-mono text-xs text-foreground space-y-4 min-h-[220px] max-h-[320px] overflow-y-auto bg-black/40">
                
                {/* User Prompt */}
                <div className="flex items-start gap-2.5">
                  <span className="text-accent font-bold">&gt;</span>
                  <p className="text-muted-foreground leading-relaxed">{selectedCase.prompt}</p>
                </div>

                {/* AI Response */}
                <div className="pt-2 border-t border-border/20 flex items-start gap-2.5">
                  <Sparkles size={14} className="text-accent mt-0.5 shrink-0 animate-pulse" />
                  <pre className="whitespace-pre-wrap leading-relaxed font-sans text-foreground/90 select-text">
                    {typedResponse}
                    {isTyping && <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-accent animate-pulse align-middle" />}
                  </pre>
                </div>

              </div>

              {/* Status footer */}
              <div className="px-5 py-2.5 bg-muted/20 border-t border-border/60 text-[9px] font-mono text-muted-foreground flex justify-between">
                <span>MODEL: BRAIN-LLM-COGNITIVE-v4</span>
                <span>TOKENS: SECURE CHANNEL</span>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
