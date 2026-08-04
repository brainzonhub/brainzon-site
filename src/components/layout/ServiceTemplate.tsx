import Link from "next/link";
import { ArrowRight, ArrowLeft, Cpu, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Service } from "@/config/services";
import { getMenuIcon } from "@/components/navigation/menu-icons";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";
import { CustomDevHeroDiagram } from "@/components/diagrams/CustomDevHeroDiagram";
import { CloudHeroDiagram } from "@/components/diagrams/CloudHeroDiagram";
import { ERPHeroDiagram } from "@/components/diagrams/ERPHeroDiagram";
import { ModernizationHeroDiagram } from "@/components/diagrams/ModernizationHeroDiagram";

import { ERPProductsShowcase } from "@/components/sections/ERPProductsShowcase";
import { ERPProductTechStack } from "@/components/sections/ERPProductTechStack";
import { CloudInfraShowcase } from "@/components/sections/CloudInfraShowcase";
import { ModernizationArchitectureShowcase } from "@/components/sections/ModernizationArchitectureShowcase";
import { CustomDevArchitectureShowcase } from "@/components/sections/CustomDevArchitectureShowcase";
import { InteractiveProcessTimeline } from "@/components/sections/InteractiveProcessTimeline";

interface ServiceTemplateProps {
  service: Service;
}

export function ServiceTemplate({ service }: ServiceTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Service Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-border/40 bg-background transition-colors duration-300">
        <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />
        <div 
          className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        />

        <Container>
          {/* Back link */}
          <div className="mb-8">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft size={12} className="transform group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Services Overview</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Heading, Copy, Features & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="badge-accent mb-3">
                Professional Service
              </span>

              <div className="flex items-center gap-4 mb-3">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shrink-0">
                  {getMenuIcon(service.icon, { size: 24 })}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1]">
                  {service.title}
                </h1>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mt-1 leading-[1.1]">
                <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(6,182,212,0.12)] dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                  {service.headline}
                </span>
              </h2>

              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {service.description}
              </p>

              {/* Key Features Chips */}
              {service.features && service.features.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.features.map((feat) => (
                    <span 
                      key={feat}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                    >
                      <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  )}
                >
                  <span>Consult an Expert</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/book-demo"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/40 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                >
                  <span>Book Architecture Review</span>
                  <ArrowUpRight size={16} className="text-primary" />
                </Link>
              </div>
            </div>

            {/* Right Column: High-tech Interactive Architecture Diagram */}
            <div className="lg:col-span-5 flex justify-center w-full">
              {service.slug === "custom-development" ? (
                <CustomDevHeroDiagram />
              ) : service.slug === "cloud" ? (
                <CloudHeroDiagram />
              ) : service.slug === "erp-consulting" ? (
                <ERPHeroDiagram />
              ) : service.slug === "modernization" ? (
                <ModernizationHeroDiagram />
              ) : (
                <div className="relative w-full h-[320px] border border-border/40 rounded-3xl bg-surface/30 backdrop-blur-md overflow-hidden flex flex-col justify-between p-6 shadow-glow-primary group">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
                  
                  {/* Card Top Header */}
                  <div className="flex items-center justify-between border-b border-border/30 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                        {getMenuIcon(service.icon, { size: 20 })}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-foreground block">{service.title}</span>
                        <span className="text-[10px] font-mono text-muted-foreground">ENGINEERING SUITE</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-mono font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20">
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                      <span>ONLINE</span>
                    </span>
                  </div>

                  {/* Card Center Graphic */}
                  <div className="my-auto flex flex-col items-center justify-center text-center">
                    <div className="relative flex size-20 items-center justify-center rounded-3xl bg-card border border-border shadow-glow-primary p-4 animate-[pulse_4s_ease-in-out_infinite]">
                      {getMenuIcon(service.icon, { size: 36, className: "text-primary group-hover:scale-110 transition-transform duration-300" })}
                    </div>
                    <span className="text-xs font-mono font-bold text-foreground mt-3 uppercase tracking-wider">
                      {service.slug.replace("-", " ")} PLATFORM
                    </span>
                    <span className="text-[10px] text-muted-foreground mt-0.5">
                      High-Resilience Enterprise Architecture
                    </span>
                  </div>

                  {/* Card Bottom Tech Footer */}
                  <div className="border-t border-border/30 pt-3 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Cpu size={12} className="text-primary" />
                      <span>{service.technology.slice(0, 3).join(" • ")}</span>
                    </div>
                    <span className="text-primary font-bold">100% TAILORED</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Service-Specific Specialized Architectural Showcase Sections */}
      {service.slug === "custom-development" && <CustomDevArchitectureShowcase />}
      {service.slug === "cloud" && <CloudInfraShowcase />}
      {service.slug === "erp-consulting" && <ERPProductsShowcase />}
      {service.slug === "modernization" && <ModernizationArchitectureShowcase />}

      {/* 2. Service Capabilities */}
      <section className="relative py-20 border-b border-border/40 bg-surface/30 transition-colors duration-300">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Our Capabilities & Service Focus
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Targeted, production-grade solutions engineered by core software architects to align with modern enterprise scaling rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.capabilities.map((cap, idx) => {
              const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[cap.icon] || LucideIcons.HelpCircle;

              // Dynamic per-service capability tech tags, spec highlights, sub-titles & status badges
              let techTags = ["Next.js", "TypeScript", "PostgreSQL"];
              let specHighlights = ["Multi-Tenant SaaS Database Architecture", "Granular Role-Based Access Control (RBAC)", "Sub-Second Response Times & Caching", "Automated CI/CD Integration Pipelines"];
              let subTitle = "High-Resilience Enterprise Feature";
              let statusText = "PRODUCTION READY";

              if (service.slug === "erp-consulting") {
                techTags = idx === 0 
                  ? ["AL Language", "C# / .NET 9", "SQL Server"] 
                  : idx === 1 
                  ? ["Python 3.12+", "OWL Library", "PostgreSQL"] 
                  : ["Frappe OS", "Python / JS", "MariaDB"];

                specHighlights = idx === 0
                  ? ["Chart of Accounts & General Ledger Setup", "Azure SQL & Power BI Workspace Config", "Custom AL Extension App (.app) Development", "Role-Tailored RoleCenter Workspaces"]
                  : idx === 1
                  ? ["Custom Python & OWL View Modules", "Multi-Location POS & Inventory Integration", "Automated QWeb Invoices & Report Templates", "Server Actions & Automated Python Scripts"]
                  : ["Frappe Framework Custom Apps", "Custom Doctypes & Server Script Rules", "Jinja2 Print Formats & Webhooks", "Socket.io Real-Time Notifications"];

                subTitle = idx === 0 ? "Microsoft Cloud ERP Platform" : idx === 1 ? "Python & OWL Modular Engine" : "Open-Source Agile Framework";
                statusText = idx === 0 ? "MICROSOFT CERTIFIED" : idx === 1 ? "MODULAR & EXPANDABLE" : "OPEN-SOURCE AGILE";
              } else if (service.slug === "cloud") {
                techTags = idx === 0 
                  ? ["AWS EC2 / S3", "IAM Security", "CloudFront"] 
                  : idx === 1 
                  ? ["Terraform", "GitHub Actions", "GitOps"] 
                  : ["Datadog", "Prometheus", "24/7 Alerts"];

                specHighlights = idx === 0
                  ? ["Multi-AZ AWS Cloud Infrastructure", "IAM Role Governance & KMS Encryption", "Sub-15ms Edge CDN Routing", "Elastic Compute Auto-Scaling Pools"]
                  : idx === 1
                  ? ["Infrastructure-as-Code (IaC) Automation", "Automated CI/CD Deployment Pipelines", "Zero-Downtime Environment Releases", "Automated Rollback & Fallback Triggers"]
                  : ["24/7 Real-Time Telemetry & APM", "Automated Security Incident Alerts", "Continuous Cost & Utilization Audits", "SOC 2 Type II Security Compliance"];

                subTitle = idx === 0 ? "Multi-AZ Cloud Infrastructure" : idx === 1 ? "GitOps Infrastructure Automation" : "24/7 SRE Telemetry & Security";
                statusText = idx === 0 ? "99.99% MULTI-AZ SLA" : idx === 1 ? "AUTOMATED GITOPS" : "24/7 SOC MONITORING";
              } else if (service.slug === "modernization") {
                techTags = idx === 0 
                  ? ["Strangler Fig", "Docker", "Kubernetes", "Go / Node"] 
                  : idx === 1 
                  ? ["PostgreSQL", "Kafka CDC", "Dual-Write", "Redis"] 
                  : ["REST / GraphQL", "OAuth2", "BrainConnect", "JWT"];

                specHighlights = idx === 0
                  ? ["Strangler Pattern Monolith Migration", "Decoupled Containerized Microservices", "Zero Global Outage or Service Downtime", "Automated Parallel Execution Verification"]
                  : idx === 1
                  ? ["Legacy Unindexed Relational Schema Overhaul", "Kafka Change Data Capture (CDC) Streams", "Bi-Directional Dual-Write Data Parity", "Sub-Second Query Indexing & Performance"]
                  : ["REST & GraphQL API Gateway Layering", "OAuth2 & JWT Token Security Enveloping", "Extends Legacy System Lifespan by 5+ Years", "Rate-Limiting & High-Speed Response Caching"];

                subTitle = idx === 0 ? "Strangler Fig Microservice Migration" : idx === 1 ? "Real-Time CDC Replication & Indexing" : "REST & GraphQL Security Gateway";
                statusText = idx === 0 ? "ZERO-DOWNTIME MIGRATION" : idx === 1 ? "100% DATA PARITY" : "SECURE API ENVELOPING";
              } else {
                // Custom Development defaults
                techTags = idx === 0 
                  ? ["Next.js", "TypeScript", "PostgreSQL"] 
                  : idx === 1 
                  ? ["Docker", "Kubernetes", "gRPC / Kafka"] 
                  : ["ACID Ledger", "Double-Entry Audit", "Redis"];

                specHighlights = idx === 0
                  ? ["Multi-Tenant SaaS Database Architecture", "Granular Role-Based Access Control (RBAC)", "Sub-Second Response Times & Caching", "Automated CI/CD Integration Pipelines"]
                  : idx === 1
                  ? ["Event-Driven Microservices Communication", "Auto-scaling Container Orchestration", "High-Throughput Validated API Protocols", "Zero Technical Debt Standards"]
                  : ["ACID-Compliant Double-Entry Accounting", "Immutable Ledger & Auditing Logs", "Real-Time Transaction Integrity Checks", "Sub-10ms Financial Ledger Sync"];

                subTitle = idx === 0 ? "Multi-Tenant SaaS Engine" : idx === 1 ? "High-Speed Microservice Mesh" : "Financial ACID Ledger";
                statusText = "PRODUCTION READY";
              }

              return (
                <div
                  key={idx}
                  className="group relative p-6 sm:p-8 rounded-3xl border border-border/60 bg-gradient-to-b from-card to-card/50 backdrop-blur-md shadow-card hover:border-primary/50 hover:shadow-glow-primary hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <span className="absolute top-5 right-6 text-[10px] font-mono text-primary/40 font-bold tracking-wider select-none">
                    [CAP.0{idx + 1}]
                  </span>

                  <div>
                    {/* Icon & Title */}
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary mb-6 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <IconComponent size={22} />
                    </div>

                    <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider block mb-1">
                      {subTitle}
                    </span>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2.5">
                      {cap.description}
                    </p>

                    {/* Feature Highlights List */}
                    <div className="mt-6 pt-4 border-t border-border/30 space-y-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground block mb-2">
                        Key Deliverables:
                      </span>
                      {specHighlights.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                          <span className="size-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Footer: Tech Chips & Status */}
                  <div className="mt-8 pt-4 border-t border-border/30 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {techTags.map((tag) => (
                        <span key={tag} className="text-[9.5px] font-mono font-semibold bg-muted/60 border border-border/50 text-foreground px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-[9px] font-mono text-primary">
                      <span className="flex items-center gap-1 font-bold">
                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{statusText}</span>
                      </span>
                      <span className="text-muted-foreground/60 font-bold">100% SPEC COMPLIANT</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Interactive Process Timeline */}
      <InteractiveProcessTimeline serviceSlug={service.slug} />

      {/* 4. Technology Stack */}
      {service.slug === "erp-consulting" ? (
        <ERPProductTechStack />
      ) : (
        <section className="relative py-20 border-b border-border/40 bg-surface/30 transition-colors duration-300">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
                Engineering Stack
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Core Technologies & Engineering Stack
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
                We leverage production-grade frameworks, container networks, high-speed databases, and event message brokers to build resilient global platforms.
              </p>
            </div>

            {/* Categorized Tech Stack Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  category: "Frontend & Application",
                  icon: LucideIcons.Layout,
                  badge: "100% AUDITED",
                  items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "GraphQL", "WebSockets"]
                },
                {
                  category: "Backend & Enterprise APIs",
                  icon: LucideIcons.Server,
                  badge: "100% AUDITED",
                  items: [".NET 9 / C#", "ASP.NET Core", "Node.js", "Go (Golang)", "Python / FastAPI", "gRPC Protocols"]
                },
                {
                  category: "Databases & ORM Layers",
                  icon: LucideIcons.Database,
                  badge: "100% AUDITED",
                  items: ["SQL Server (T-SQL)", "EF Core ORM", "PostgreSQL", "Redis Caching", "MongoDB", "ACID Ledgers"]
                },
                {
                  category: "Cloud, DevOps & Real-time",
                  icon: LucideIcons.Cloud,
                  badge: "100% AUDITED",
                  items: ["Azure Cloud / DevOps", "SignalR Real-Time", "Docker Containers", "Kubernetes (K8s)", "AWS", "Kafka Stream"]
                }
              ].map((cat, idx) => {
                const CatIcon = cat.icon;

                return (
                  <div 
                    key={idx}
                    className="p-6 rounded-3xl border border-border/60 bg-gradient-to-b from-card to-card/50 backdrop-blur-md shadow-card hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4 border-b border-border/30 pb-3">
                        <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <CatIcon size={18} />
                        </div>
                        <h3 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                          {cat.category}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {cat.items.map((item) => (
                          <span 
                            key={item}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-muted/50 border border-border/40 text-foreground/90 hover:border-primary/40 hover:text-primary transition-colors"
                          >
                            <span className="size-1 rounded-full bg-primary/60" />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-3 border-t border-border/20 flex items-center justify-between text-[9px] font-mono text-muted-foreground">
                      <span>{cat.items.length} TECHNOLOGIES</span>
                      <span className="text-primary font-bold">{cat.badge}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Expanded Technology Chips */}
            <div className="max-w-4xl mx-auto pt-6 border-t border-border/40 text-center">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground block mb-4">
                All Technology Stack Specifications:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {service.technology.map((item) => (
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
      )}

      {/* 5. CTA Section */}
      <section className="relative py-20 bg-background transition-colors duration-300">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card/40 backdrop-blur-md p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Ready to Partner with Brainzon?
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Schedule an architecture discovery session with our core developers to review your blueprints and scope resources.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
                )}
              >
                <span>Consult an Expert</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/book-demo"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/40 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200"
                )}
              >
                <span>Book Architecture Review</span>
                <ArrowUpRight size={16} className="text-primary" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
