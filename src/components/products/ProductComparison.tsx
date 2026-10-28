"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";

interface ComparisonRow {
  label: string;
  brainmkt: string;
  braincrm: string;
  brainerp: string;
  brainbooks: string;
}

export function ProductComparison() {
  const products = [
    { name: "BrainMKT", slug: "brainmkt", cta: "/products/brainmkt", agent: "BrainMKT AI Agent" },
    { name: "BrainCRM", slug: "braincrm", cta: "/products/braincrm", agent: "BrainCRM AI Agent" },
    { name: "BrainERP", slug: "brainerp", cta: "/products/brainerp", agent: "BrainERP AI Agent" },
    { name: "BrainBooks", slug: "brainbooks", cta: "/products/brainbooks", agent: "BrainBooks AI Agent" }
  ];

  const rows: ComparisonRow[] = [
    {
      label: "Primary Focus",
      brainmkt: "Marketing planning, campaign coordination, audience lists, lead handoff",
      braincrm: "Customer 360, lead management, sales pipeline, service coordination",
      brainerp: "Operations, inventory, procurement, sales fulfillment, manufacturing",
      brainbooks: "General ledger, receivables, payables, cash/bank activity, reconciliations"
    },
    {
      label: "Dedicated AI Agent",
      brainmkt: "Campaign summaries, planning support, content drafting, marketing queries",
      braincrm: "Customer context summaries, record discovery, pipeline Q&A, follow-up drafts",
      brainerp: "Operational queries, exception summaries, trend analysis, workflow insights",
      brainbooks: "Financial summaries, entry lookup, variance analysis, reconciliation notes"
    },
    {
      label: "Key Controls",
      brainmkt: "Content review steps, brand rules, human publishing authorization",
      braincrm: "User role data permissions, duplicate checks, human review before sending",
      brainerp: "Transaction authorization, audit trails, human approval for stock/POs",
      brainbooks: "Financial access permissions, zero autonomous payment approval"
    },
    {
      label: "Deployment",
      brainmkt: "Cloud / Managed SaaS",
      braincrm: "Cloud / Hybrid Cloud",
      brainerp: "Cloud, Private Cloud, Hybrid",
      brainbooks: "Cloud / Compliant Financial Cloud"
    },
    {
      label: "Integrations",
      brainmkt: "BrainCRM, Google Ads, Meta Ads, LinkedIn, Mailchimp",
      braincrm: "BrainMKT, BrainERP, BrainBooks, Twilio, Stripe, Zendesk",
      brainerp: "BrainCRM, BrainBooks, Dynamics 365, Odoo, Logistics APIs",
      brainbooks: "BrainERP, BrainCRM, Plaid, Banking Feeds, Tax Systems"
    },
    {
      label: "Typical Users",
      brainmkt: "CMOs, Campaign Managers, Growth Teams, Content Leads",
      braincrm: "Sales Directors, Account Executives, Support Specialists",
      brainerp: "COOs, Plant Managers, Inventory Controllers, Procurement Leads",
      brainbooks: "CFOs, Controllers, Accounting Teams, Audit Partners"
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
            One Connected Foundation For Every Department
          </h2>
          <p className="text-sm text-muted-foreground">
            Explore how BrainMKT, BrainCRM, BrainERP, and BrainBooks connect business operations with dedicated AI assistance.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-border bg-card/40 backdrop-blur-md shadow-card">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border/70 bg-muted/40">
                <th className="p-5 font-bold text-foreground w-1/5">Capability</th>
                {products.map((p) => (
                  <th key={p.slug} className="p-5 font-bold text-foreground w-1/5">
                    <div className="space-y-1">
                      <div className="text-base text-primary font-bold">{p.name}</div>
                      <div className="inline-flex items-center gap-1 text-[11px] text-muted-foreground font-medium">
                        <Sparkles size={11} className="text-primary" />
                        <span>{p.agent}</span>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {rows.map((row, index) => (
                <tr key={index} className="hover:bg-muted/20 transition-colors">
                  <td className="p-5 font-semibold text-foreground bg-muted/10">
                    {row.label}
                  </td>
                  <td className="p-5 text-muted-foreground leading-relaxed">
                    {row.brainmkt}
                  </td>
                  <td className="p-5 text-muted-foreground leading-relaxed">
                    {row.braincrm}
                  </td>
                  <td className="p-5 text-muted-foreground leading-relaxed">
                    {row.brainerp}
                  </td>
                  <td className="p-5 text-muted-foreground leading-relaxed">
                    {row.brainbooks}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-border/70 bg-muted/20">
                <td className="p-5 font-semibold text-foreground">Action</td>
                {products.map((p) => (
                  <td key={p.slug} className="p-5">
                    <Link
                      href={p.cta}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline group"
                    >
                      <span>Explore {p.name}</span>
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </Container>
    </section>
  );
}
