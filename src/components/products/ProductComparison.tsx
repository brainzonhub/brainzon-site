"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

interface ComparisonRow {
  label: string;
  brainerp: string;
  braincrm: string;
  brainai: string;
  brainconnect: string;
}

export function ProductComparison() {
  const products = [
    { name: "BrainERP", slug: "brainerp", cta: "/products/brainerp" },
    { name: "BrainCRM", slug: "braincrm", cta: "/products/braincrm" },
    { name: "BrainAI", slug: "brainai", cta: "/products/brainai" },
    { name: "BrainConnect", slug: "brainconnect", cta: "/products/brainconnect" }
  ];

  const rows: ComparisonRow[] = [
    {
      label: "Key Features",
      brainerp: "Finance, MRP Schedulers, Inventory Tracking, Procurement, HR Modules",
      braincrm: "Visual Pipelines, Predictive Lead Scoring, Customer 360 Portals",
      brainai: "Domain-specific AI Assistants, OCR Document Processing, RAG Search",
      brainconnect: "Visual Workflow Designer, Event Queue (Kafka), Change Data Capture"
    },
    {
      label: "Deployment",
      brainerp: "Cloud, Private Cloud, On-Premises",
      braincrm: "Cloud, Hybrid Cloud",
      brainai: "Private GPU Cluster, Cloud, Hybrid",
      brainconnect: "Cloud, Hybrid, On-Prem Agent"
    },
    {
      label: "Integrations",
      brainerp: "SAP, Odoo, Dynamics 365, AWS S3, Azure AD",
      braincrm: "Salesforce, HubSpot, Zendesk, Twilio, Stripe",
      brainai: "OpenAI, Hugging Face, LangChain, Pinecone",
      brainconnect: "Zapier, EventBridge, RabbitMQ, Kafka, Vault"
    },
    {
      label: "Industry Focus",
      brainerp: "Manufacturing, Retail, Logistics, Enterprise Groups",
      braincrm: "B2B Sales, Support Centers, Service Providers",
      brainai: "FinTech, Legal Operations, Healthcare, Operations",
      brainconnect: "System Integrators, IT Operations, Distributed Teams"
    },
    {
      label: "AI Capabilities",
      brainerp: "Intelligent reorder thresholds & predictive inventory forecasting",
      braincrm: "Predictive pipeline values & automatic support ticket routing",
      brainai: "Core LLM inference cluster, custom vector weights, context caching",
      brainconnect: "AI payload schema matching & auto-resolve connectivity failures"
    },
    {
      label: "Cloud Readiness",
      brainerp: "Highly optimized database sharding & containerized setup",
      braincrm: "100% cloud native, scalable multi-region endpoints",
      brainai: "GPU accelerated nodes, elastic container runtime support",
      brainconnect: "Event streams scaled auto-elastically via Kubernetes"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <Container className="space-y-12">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
            Compare Suite Products
          </span>
          <h2 className="text-heading-2 font-bold tracking-tight">
            Choose the Right Platform for Your scale
          </h2>
          <p className="text-sm text-muted-foreground">
            Analyze features, deployment modes, and capabilities side-by-side to determine the best path for your enterprise.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-border bg-card-opaque shadow-card">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/80 bg-muted/30">
                <th className="p-6 text-xs font-bold uppercase tracking-wider text-muted-foreground w-1/5">Specification</th>
                {products.map((p) => (
                  <th key={p.slug} className="p-6 w-1/5">
                    <h3 className="text-base font-extrabold text-foreground">{p.name}</h3>
                    <span className="text-[10px] text-muted-foreground font-medium block mt-0.5">Enterprise Platform</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row.label}
                  className={`border-b border-border/40 transition-colors hover:bg-muted/10 ${idx === rows.length - 1 ? "border-b-0" : ""}`}
                >
                  <td className="p-6 text-xs font-bold text-foreground bg-muted/5">{row.label}</td>
                  <td className="p-6 text-xs text-muted-foreground leading-relaxed">{row.brainerp}</td>
                  <td className="p-6 text-xs text-muted-foreground leading-relaxed">{row.braincrm}</td>
                  <td className="p-6 text-xs text-muted-foreground leading-relaxed">{row.brainai}</td>
                  <td className="p-6 text-xs text-muted-foreground leading-relaxed">{row.brainconnect}</td>
                </tr>
              ))}
              {/* Bottom Actions Row */}
              <tr className="bg-muted/10">
                <td className="p-6 text-xs font-bold text-foreground">Action</td>
                {products.map((p) => (
                  <td key={p.slug} className="p-6">
                    <div className="flex flex-col gap-2.5">
                      <Link
                        href="/book-demo"
                        className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/95 transition-all text-center"
                      >
                        Book a Demo
                      </Link>
                      <Link
                        href={p.cta}
                        className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-foreground hover:text-primary transition-colors text-center"
                      >
                        <span>Learn More</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:hidden">
          {products.map((p) => {
            const getProductRowData = (slug: string) => {
              switch (slug) {
                case "brainerp":
                  return {
                    features: rows[0]!.brainerp,
                    deployment: rows[1]!.brainerp,
                    integrations: rows[2]!.brainerp,
                    industry: rows[3]!.brainerp,
                    ai: rows[4]!.brainerp,
                    cloud: rows[5]!.brainerp
                  };
                case "braincrm":
                  return {
                    features: rows[0]!.braincrm,
                    deployment: rows[1]!.braincrm,
                    integrations: rows[2]!.braincrm,
                    industry: rows[3]!.braincrm,
                    ai: rows[4]!.braincrm,
                    cloud: rows[5]!.braincrm
                  };
                case "brainai":
                  return {
                    features: rows[0]!.brainai,
                    deployment: rows[1]!.brainai,
                    integrations: rows[2]!.brainai,
                    industry: rows[3]!.brainai,
                    ai: rows[4]!.brainai,
                    cloud: rows[5]!.brainai
                  };
                case "brainconnect":
                  return {
                    features: rows[0]!.brainconnect,
                    deployment: rows[1]!.brainconnect,
                    integrations: rows[2]!.brainconnect,
                    industry: rows[3]!.brainconnect,
                    ai: rows[4]!.brainconnect,
                    cloud: rows[5]!.brainconnect
                  };
                default:
                  return { features: "", deployment: "", integrations: "", industry: "", ai: "", cloud: "" };
              }
            };

            const data = getProductRowData(p.slug);

            return (
              <div key={p.slug} className="p-6 rounded-3xl border border-border bg-card-opaque shadow-sm space-y-4">
                <div className="border-b border-border/60 pb-3">
                  <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                  <span className="text-xs text-muted-foreground font-medium">Enterprise Platform</span>
                </div>
                <div className="space-y-3.5 text-xs">
                  <div>
                    <span className="font-bold text-foreground block">Key Features</span>
                    <p className="text-muted-foreground mt-0.5">{data.features}</p>
                  </div>
                  <div>
                    <span className="font-bold text-foreground block">Deployment</span>
                    <p className="text-muted-foreground mt-0.5">{data.deployment}</p>
                  </div>
                  <div>
                    <span className="font-bold text-foreground block">Integrations</span>
                    <p className="text-muted-foreground mt-0.5">{data.integrations}</p>
                  </div>
                  <div>
                    <span className="font-bold text-foreground block">Industry Focus</span>
                    <p className="text-muted-foreground mt-0.5">{data.industry}</p>
                  </div>
                  <div>
                    <span className="font-bold text-foreground block">AI Capabilities</span>
                    <p className="text-muted-foreground mt-0.5">{data.ai}</p>
                  </div>
                  <div>
                    <span className="font-bold text-foreground block">Cloud Readiness</span>
                    <p className="text-muted-foreground mt-0.5">{data.cloud}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border/40 grid grid-cols-2 gap-4">
                  <Link
                    href="/book-demo"
                    className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/95 transition-all text-center"
                  >
                    Book a Demo
                  </Link>
                  <Link
                    href={p.cta}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-xl border border-border bg-muted/40 text-foreground hover:bg-muted/80 transition-colors text-center"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
