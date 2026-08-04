"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { 
  Building2, 
  Boxes, 
  Layers, 
  Settings, 
  Cpu, 
  CheckCircle2,
  Code2,
  Database,
  Server,
  Terminal,
  Layers3
} from "lucide-react";
import { cn } from "@/lib/utils";

const erpProductTechStacks = [
  {
    id: "d365-stack",
    title: "Dynamics 365 Business Central",
    subtitle: "Microsoft Enterprise Cloud Stack",
    badge: "MICROSOFT CERTIFIED",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    icon: Building2,
    iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-500",
    specs: [
      { label: "Core Language", value: "AL Language (VS Code AL Extension Framework)" },
      { label: "Runtime Engine", value: "C# / .NET 9 Core Enterprise Business Logic" },
      { label: "Database Engine", value: "Microsoft SQL Server (Azure SQL DB)" },
      { label: "Analytics & Flows", value: "Power BI Dashboards & Power Automate Flows" },
      { label: "API & Protocols", value: "OData v4, Web Services & RESTful APIs" },
      { label: "Identity & Security", value: "Azure Active Directory (Entra ID) & OAuth2" },
      { label: "Custom Packaging", value: "AL Extension Apps (.app) & Custom Pages" }
    ]
  },
  {
    id: "odoo-stack",
    title: "Odoo Enterprise & Community",
    subtitle: "Python & OWL Web Framework Stack",
    badge: "MODULAR & EXPANDABLE",
    badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    icon: Boxes,
    iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-500",
    specs: [
      { label: "Core Language", value: "Python 3.12+ (Backend) & JavaScript (Web)" },
      { label: "Frontend Library", value: "OWL (Odoo Web Library) & Web Client UI" },
      { label: "Database & ORM", value: "PostgreSQL Database Engine & Odoo ORM" },
      { label: "Reporting Engine", value: "QWeb Template Engine & Custom Invoices" },
      { label: "API Integrations", value: "XML-RPC, JSON-RPC & Custom REST APIs" },
      { label: "Extensibility", value: "Custom Python Modules & XML View Inheritance" },
      { label: "Automation", value: "Automated Server Actions & Python Scripts" }
    ]
  },
  {
    id: "erpnext-stack",
    title: "ERPNext & Frappe OS",
    subtitle: "Frappe Framework Open-Source Stack",
    badge: "OPEN-SOURCE AGILE",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    icon: Layers,
    iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
    specs: [
      { label: "Core Framework", value: "Frappe Open-Source Full-Stack Framework" },
      { label: "Languages", value: "Python (Server-side) & JS / Vue.js (Client)" },
      { label: "Database Engine", value: "MariaDB / PostgreSQL Relational Engine" },
      { label: "Caching & Queue", value: "Redis In-Memory Cache & Background Workers" },
      { label: "Print & Reports", value: "Jinja2 HTML Formats & Query Reports" },
      { label: "API Suite", value: "RESTful API Suite & Socket.io WebSockets" },
      { label: "Custom Architecture", value: "Frappe Custom Apps & Custom Doctypes" }
    ]
  },
  {
    id: "middleware-stack",
    title: "Brainzon ERP Integration Middleware",
    subtitle: "High-Speed Cross-System Sync",
    badge: "BESPOKE CONNECTORS",
    badgeColor: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    icon: Settings,
    iconBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-500",
    specs: [
      { label: "Middleware Core", value: "Node.js & Go (Golang) High-Throughput Engines" },
      { label: "Event Messaging", value: "Apache Kafka Event Bus & Redis Queue" },
      { label: "High-Speed Sync", value: "gRPC Binary Streaming & GraphQL Gateways" },
      { label: "Containerization", value: "Docker Containers & Kubernetes (K8s)" },
      { label: "Data Parity", value: "Bi-Directional CDC Sync & Real-Time Loops" },
      { label: "Security Layer", value: "OAuth2, JWT Tokens & AES-256 Encryption" },
      { label: "Audit Ledger", value: "100% ACID Audit Trail & Financial Sync" }
    ]
  }
];

export function ERPProductTechStack() {
  return (
    <section className="relative py-20 border-b border-border/40 bg-surface/30 transition-colors duration-300">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
            <Terminal size={12} className="text-primary animate-pulse" />
            <span>Product Tech Stack</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Product-Wise Technical Stack & Specifications
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Complete technical breakdown of languages, database engines, ORM frameworks, report builders, and integration protocols for Microsoft Dynamics 365 Business Central, Odoo, and ERPNext.
          </p>
        </div>

        {/* 4 Product-Wise Tech Spec Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {erpProductTechStacks.map((prod) => {
            const IconComp = prod.icon;

            return (
              <div
                key={prod.id}
                className="group relative p-6 sm:p-8 rounded-3xl border border-border/60 bg-gradient-to-b from-card to-card/50 backdrop-blur-md shadow-card hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Card Top Row Header */}
                  <div className="flex items-center justify-between border-b border-border/30 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className={cn("flex size-11 items-center justify-center rounded-2xl border shrink-0 group-hover:scale-105 transition-transform duration-300", prod.iconBg)}>
                        <IconComp size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {prod.title}
                        </h3>
                        <span className="text-[10px] font-mono text-muted-foreground block">
                          {prod.subtitle}
                        </span>
                      </div>
                    </div>
                    <span className={cn("text-[9.5px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border shrink-0", prod.badgeColor)}>
                      {prod.badge}
                    </span>
                  </div>

                  {/* Technical Specifications Specs Table/List */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary block mb-3 flex items-center gap-1">
                      <Code2 size={12} className="text-primary" />
                      <span>Technical Architecture Specifications:</span>
                    </span>

                    {prod.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start justify-between text-xs py-1 border-b border-border/20 last:border-0">
                        <span className="font-mono text-[11px] text-muted-foreground/80 font-medium shrink-0 w-36">
                          {spec.label}:
                        </span>
                        <span className="font-mono text-[11px] font-semibold text-foreground text-right">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-8 pt-4 border-t border-border/30 flex items-center justify-between text-[9.5px] font-mono text-muted-foreground">
                  <span className="flex items-center gap-1 text-emerald-500 font-bold">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>PRODUCTION VERIFIED</span>
                  </span>
                  <span className="text-primary font-bold">100% TAILORED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* All Product Stack Tags Grid */}
        <div className="max-w-4xl mx-auto pt-6 border-t border-border/40 text-center">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground block mb-4">
            Complete ERP Ecosystem Technologies & Frameworks:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              "Dynamics 365 BC", "AL Language", "C# / .NET 9", "SQL Server", "Power BI", "OData v4",
              "Odoo Enterprise", "Python 3.12+", "OWL Library", "PostgreSQL", "QWeb Engine", "XML-RPC",
              "ERPNext", "Frappe Framework", "MariaDB", "Redis Cache", "Socket.io", "Jinja2",
              "Kafka Event Bus", "gRPC Streaming", "Docker", "Kubernetes", "Azure Cloud"
            ].map((item) => (
              <span 
                key={item}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold bg-card border border-border/60 text-foreground shadow-xs hover:border-primary/60 hover:text-primary hover:shadow-glow-primary hover:-translate-y-0.5 transition-all duration-200"
              >
                <Cpu size={13} className="text-primary" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
