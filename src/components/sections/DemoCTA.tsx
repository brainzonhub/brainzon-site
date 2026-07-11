"use client";

import { useState } from "react";
import {
  ShieldCheck,
  ArrowRight,
  Sparkles,
  User,
  Mail,
  Building2,
  Layers,
  MessageSquare,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function DemoCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "brainerp",
    message: "",
  });
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
            <div className="lg:col-span-5 flex flex-col items-start text-left">
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
              <div className="mt-8 space-y-4">
                {[
                  "ISO 27001 Secure Data Mapping Protocols",
                  "99.99% Uptime Guarantee Cluster SLA",
                  "Dedicated Multi-Cloud Architect Allocation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex size-6 items-center justify-center rounded-full bg-primary/10 border border-primary/20 shrink-0">
                      <ShieldCheck className="text-primary" size={13} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl border border-border/60 bg-surface/80 dark:bg-muted/30 backdrop-blur-sm shadow-card p-6 sm:p-8">
                {/* Form header */}
                <div className="mb-6">
                  <h3 className="text-base font-bold text-foreground tracking-tight">
                    Request Enterprise Demo
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fill in your details and a Solutions Architect will reach out within 4 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="inline-flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-2">
                      <Sparkles size={26} className="animate-bounce" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">Request Received!</h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="text-primary font-semibold">{formData.name}</span>. A Brainzon Solutions Architect will contact you at <span className="text-foreground font-semibold">{formData.email}</span> within 4 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cta-name" className="block text-[11px] font-semibold text-muted-foreground mb-1.5">
                          Full Name
                        </label>
                        <div className="relative">
                          <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 pointer-events-none" />
                          <input
                            type="text"
                            id="cta-name"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="cta-email" className="block text-[11px] font-semibold text-muted-foreground mb-1.5">
                          Work Email
                        </label>
                        <div className="relative">
                          <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 pointer-events-none" />
                          <input
                            type="email"
                            id="cta-email"
                            required
                            placeholder="john@corporation.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all duration-200"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Company + Product */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cta-company" className="block text-[11px] font-semibold text-muted-foreground mb-1.5">
                          Company
                        </label>
                        <div className="relative">
                          <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 pointer-events-none" />
                          <input
                            type="text"
                            id="cta-company"
                            placeholder="Acme Corp"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="cta-product" className="block text-[11px] font-semibold text-muted-foreground mb-1.5">
                          Primary Interest
                        </label>
                        <div className="relative">
                          <Layers size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 pointer-events-none" />
                          <select
                            id="cta-product"
                            value={formData.product}
                            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all duration-200 appearance-none cursor-pointer"
                          >
                            <option value="brainerp">BrainERP System</option>
                            <option value="braincrm">BrainCRM Pipeline</option>
                            <option value="brainai">BrainAI Neural Models</option>
                            <option value="brainconnect">BrainConnect Integration</option>
                            <option value="modernization">Legacy Modernization</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Message */}
                    <div>
                      <label htmlFor="cta-message" className="block text-[11px] font-semibold text-muted-foreground mb-1.5">
                        Tell us about your project <span className="text-muted-foreground/50">(optional)</span>
                      </label>
                      <div className="relative">
                        <MessageSquare size={14} className="absolute left-3 top-3 text-muted-foreground/50 pointer-events-none" />
                        <textarea
                          id="cta-message"
                          rows={3}
                          placeholder="Describe your current challenges or goals..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all duration-200 resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className={cn(
                        "w-full flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      )}
                    >
                      <span>Request Enterprise Demo</span>
                      <ArrowRight size={16} />
                    </button>

                    {/* Privacy note */}
                    <p className="text-[10px] text-muted-foreground/60 text-center leading-relaxed">
                      By submitting, you agree to Brainzon&apos;s Privacy Policy. We never share your data with third parties.
                    </p>
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
