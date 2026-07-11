"use client";

import { useState } from "react";
import { ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function DemoCTA() {
  const [formData, setFormData] = useState({ name: "", email: "", product: "brainerp" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
      {/* Decorative center glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[50%] w-[50%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />

      <Container>
        <div className="relative rounded-3xl border border-border bg-card/40 backdrop-blur-md p-8 sm:p-12 md:p-16 shadow-elevated overflow-hidden">
          {/* Neon highlight line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:items-center">
            
            {/* Left Column: Callout and trust checklist */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded border border-primary/20 bg-primary/10 text-[9px] font-mono font-bold tracking-widest text-primary uppercase mb-6">
                Strategic Alliance
              </span>
              <h2 className="text-heading-2 font-bold tracking-tight text-foreground">
                Transform Your Enterprise Today
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                Partner with Brainzon&apos;s engineering teams to orchestrate resource pipelines, integrate conversational AI models, and secure legacy cores.
              </p>

              {/* Trust checklist */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="text-primary shrink-0" size={16} />
                  <span>ISO 27001 Secure Data Mapping Protocols</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="text-primary shrink-0" size={16} />
                  <span>99.99% Uptime Guarantee Cluster SLA</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="text-primary shrink-0" size={16} />
                  <span>Dedicated Multi-Cloud Architect Allocation</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-black/40 shadow-card relative">
                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="inline-flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                      <Sparkles size={24} className="animate-bounce" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">Blueprints Request Received!</h3>
                    <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="text-primary font-semibold">{formData.name}</span>. A Brainzon Solutions Architect will contact you at <span className="text-foreground font-semibold">{formData.email}</span> in less than 4 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="cta-name" className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="cta-name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-border bg-card/25 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="cta-email" className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                        Corporate Email Address
                      </label>
                      <input
                        type="email"
                        id="cta-email"
                        required
                        placeholder="john@corporation.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-border bg-card/25 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="cta-product" className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                        Primary System Interest
                      </label>
                      <select
                        id="cta-product"
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-card/25 text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      >
                        <option value="brainerp">BrainERP System</option>
                        <option value="braincrm">BrainCRM Pipeline</option>
                        <option value="brainai">BrainAI Neural Models</option>
                        <option value="brainconnect">BrainConnect Integration</option>
                        <option value="modernization">Legacy Modernization</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className={cn(
                        "w-full flex items-center justify-center gap-2 mt-4 px-4 py-2.5 text-xs font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200 cursor-pointer",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      )}
                    >
                      <span>Request Enterprise Demo</span>
                      <ArrowRight size={14} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
