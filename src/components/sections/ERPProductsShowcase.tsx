"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { 
  Building2, 
  Boxes, 
  Layers, 
  Check, 
  Settings, 
  ArrowRight, 
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const erpProductsData = [
  {
    id: "dynamics-365",
    title: "Microsoft Dynamics 365 Business Central",
    shortName: "Dynamics 365 BC",
    badge: "Microsoft Cloud ERP",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    icon: Building2,
    iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-500",
    target: "Enterprise & Mid-Market Organizations",
    description: "Full-scale Microsoft cloud ERP implementation for organizations needing robust multi-entity financial accounting, global compliance, and native Azure & Power Platform integration.",
    modules: [
      "Financial Management & General Ledger",
      "Supply Chain & Procurement Tracking",
      "Warehouse & Inventory Management",
      "Sales & Service Order Operations"
    ],
    customizations: [
      "Custom AL Code Extensions & Event Apps",
      "Power Automate Workflow Integrations",
      "Power BI Custom Dashboards & Analytics",
      "Azure Active Directory & Office 365 Sync"
    ],
    bestFor: "Organizations invested in Microsoft ecosystem needing enterprise compliance."
  },
  {
    id: "odoo",
    title: "Odoo Enterprise & Community",
    shortName: "Odoo ERP",
    badge: "Modular & All-In-One",
    badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    icon: Boxes,
    iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-500",
    target: "Scaling Mid-Market & Retail Operations",
    description: "Highly modular, all-in-one suite of business apps ideal for companies wanting to start small and expand seamlessly across CRM, Sales, POS, Inventory, and Manufacturing.",
    modules: [
      "CRM & Sales Pipeline Management",
      "Inventory & Multi-Warehouse POS",
      "Manufacturing (MRP) & Work Orders",
      "E-Commerce & Accounting Integration"
    ],
    customizations: [
      "Custom Python & OWL View Modules",
      "Custom Automated Server Actions & Rules",
      "Third-Party Logistics & Payment API Connectors",
      "Tailored QWeb Invoices & Report Templates"
    ],
    bestFor: "Fast-growing businesses wanting an intuitive, modular all-in-one ERP."
  },
  {
    id: "erpnext",
    title: "ERPNext",
    shortName: "ERPNext",
    badge: "Open-Source Enterprise ERP",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    icon: Layers,
    iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
    target: "Agile Enterprises & Manufacturers",
    description: "Modern, open-source ERP powered by the Frappe framework. Delivered with zero vendor lock-in, providing powerful out-of-the-box HR, Buying, Selling, and Asset Management.",
    modules: [
      "Buying, Selling & Customer Quotations",
      "HR, Payroll & Expense Management",
      "BOM, Bill of Materials & Manufacturing",
      "Fixed Asset Management & Maintenance"
    ],
    customizations: [
      "Frappe Framework Custom App Development",
      "Custom Doctypes, Fields & Script Rules",
      "Server Scripts & Webhook Integrations",
      "Custom Print Formats & Portal Interfaces"
    ],
    bestFor: "Agile enterprises seeking full open-source ownership and total code control."
  }
];

export function ERPProductsShowcase() {
  return (
    <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
            <Sparkles size={12} className="text-primary animate-pulse" />
            <span>Readymade ERP Platforms</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            We Implement & Customize the World's Leading ERPs
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Whether you choose Microsoft Dynamics 365 Business Central, Odoo, or ERPNext, our core engineers deliver flawless implementation and build custom modules tailored to your exact workflows.
          </p>
        </div>

        {/* 3 Core Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {erpProductsData.map((prod) => {
            const IconComp = prod.icon;

            return (
              <div
                key={prod.id}
                className="group relative p-6 sm:p-8 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-md shadow-card hover:border-primary/50 hover:shadow-glow-primary hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Background ambient glow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-border/30 pb-4 mb-6">
                    <div className={cn("flex size-12 items-center justify-center rounded-2xl border shrink-0 group-hover:scale-105 transition-transform duration-300", prod.iconBg)}>
                      <IconComp size={24} />
                    </div>
                    <span className={cn("text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border", prod.badgeColor)}>
                      {prod.badge}
                    </span>
                  </div>

                  {/* Title & Target */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {prod.title}
                  </h3>
                  <span className="text-[11px] font-mono text-muted-foreground block mt-1">
                    Target: {prod.target}
                  </span>

                  <p className="text-xs text-muted-foreground leading-relaxed mt-3">
                    {prod.description}
                  </p>

                  {/* Modules Implemented List */}
                  <div className="mt-6 pt-4 border-t border-border/30">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground block mb-2.5">
                      Core Modules Implemented:
                    </span>
                    <ul className="space-y-1.5">
                      {prod.modules.map((m) => (
                        <li key={m} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                          <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-tight">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deep Customization Services */}
                  <div className="mt-5 pt-4 border-t border-border/30">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary block mb-2.5 flex items-center gap-1">
                      <Settings size={12} className="text-primary" />
                      <span>Customization Services Offered:</span>
                    </span>
                    <ul className="space-y-1.5">
                      {prod.customizations.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                          <span className="size-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          <span className="leading-tight">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Best For & CTA */}
                <div className="mt-8 pt-4 border-t border-border/30 flex flex-col gap-3">
                  <div className="text-[10px] font-mono text-muted-foreground/80 bg-muted/60 border border-border/50 p-2.5 rounded-xl">
                    <span className="font-bold text-foreground block mb-0.5">BEST FIT FOR:</span>
                    <span>{prod.bestFor}</span>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-semibold rounded-xl border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <span>Consult on {prod.shortName}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customization Guarantee Banner */}
        <div className="mt-12 rounded-3xl border border-border/60 bg-gradient-to-r from-card via-surface/40 to-card p-6 md:p-8 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 shadow-glow-primary">
          <div className="flex items-start gap-4">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary shrink-0">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-foreground">
                Need Custom Features Beyond Standard Out-of-the-Box ERP?
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1 max-w-2xl">
                Standard ERP modules rarely fit complex enterprise rules 100%. We build custom extensions, custom reporting engines, and API integrations for Dynamics 365 BC, Odoo, and ERPNext without breaking system upgradeability.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold rounded-xl text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary shrink-0 transition-all duration-200"
          >
            <span>Request Custom ERP Audit</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
