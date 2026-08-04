"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { 
  Search, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  GitBranch, 
  RefreshCw,
  Clock,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PhaseData {
  phase: string;
  step: string;
  title: string;
  subtitle: string;
  timeline: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  activities: string[];
  deliverables: string[];
  consoleTitle: string;
  consoleLogs: string[];
  metricLabel: string;
  metricValue: string;
}

const servicePhases = {
  modernization: [
    {
      phase: "PHASE 01",
      step: "01",
      title: "Legacy Monolith & AST Code Audit",
      subtitle: "Comprehensive System & Dependency Mapping",
      timeline: "WEEKS 1–2",
      icon: Search,
      description: "We analyze legacy source code, catalog relational database schemas, map hidden dependency graphs, and profile execution bottlenecks to build a zero-risk refactoring plan.",
      activities: [
        "Abstract Syntax Tree (AST) Legacy Code Analysis",
        "Relational Schema & Unindexed Query Audit",
        "API & Monolithic Dependency Graph Mapping",
        "Security Vulnerability & Compliance Risk Specs"
      ],
      deliverables: ["Legacy System Blueprint", "Dependency Graph Map", "Risk Mitigation Matrix"],
      consoleTitle: "AST_DEPENDENCY_AUDITOR_V2",
      consoleLogs: [
        "> Scanning 142,000 LOC legacy codebase...",
        "> 18 monolithic SQL query bottlenecks identified",
        "> Dependency graph generated: 4 core domains isolated",
        "[OK] Strangler Fig migration path validated"
      ],
      metricLabel: "AUDIT ACCURACY",
      metricValue: "100% COMPLETE"
    },
    {
      phase: "PHASE 02",
      step: "02",
      title: "Strangler Fig Microservice Sprints",
      subtitle: "Incremental Decoupling & Test-Driven Sprints",
      timeline: "WEEKS 3–6",
      icon: Code2,
      description: "We incrementally extract legacy business domains into containerized Go/Node microservices using the Strangler Fig pattern — validated by automated TDD unit and integration tests.",
      activities: [
        "Modular Microservices Development (.NET 9 / Go)",
        "Docker Containerization & Kubernetes Orchestration",
        "Automated TDD Test Suite Execution (90%+ Coverage)",
        "REST & GraphQL Gateway Security Proxy Setup"
      ],
      deliverables: ["Containerized Microservices", "API Proxy Wrapper", "Automated Test Suites"],
      consoleTitle: "MICROSERVICE_BUILD_PIPELINE",
      consoleLogs: [
        "> Compiling domain microservices in Docker...",
        "> Running 340 integration test suites...",
        "> gRPC protocol buffer definitions compiled",
        "[SUCCESS] 0 technical debt errors detected"
      ],
      metricLabel: "TEST COVERAGE",
      metricValue: "94.8% PASSED"
    },
    {
      phase: "PHASE 03",
      step: "03",
      title: "Kafka CDC Dual-Write Sync & Cutover",
      subtitle: "Zero-Downtime Data Parity & Production Cutover",
      timeline: "WEEKS 7+",
      icon: Rocket,
      description: "We initiate Kafka Change Data Capture (CDC) streams for live dual-writing between legacy and modern databases, ensuring 100% data parity before seamless traffic cutover.",
      activities: [
        "Apache Kafka CDC Replication Stream Setup",
        "Real-Time Bi-Directional Data Parity Auditing",
        "Load & Chaos Latency Stress Testing",
        "Zero-Downtime Production Traffic Cutover"
      ],
      deliverables: ["100% Parity Data Layer", "Live Telemetry Dashboard", "Zero-Downtime Cutover"],
      consoleTitle: "CDC_DATA_PARITY_MONITOR",
      consoleLogs: [
        "> Initiating Kafka CDC replication stream...",
        "> Comparing 2.4M database records...",
        "> Data parity: 100.00% verified (0 mismatches)",
        "[LIVE] Rerouting live traffic to modern engine"
      ],
      metricLabel: "MIGRATION DOWNTIME",
      metricValue: "0.0 SECONDS"
    }
  ],
  "erp-consulting": [
    {
      phase: "PHASE 01",
      step: "01",
      title: "ERP Requirements & Process GAP Analysis",
      subtitle: "Business Workflow & Chart of Accounts Discovery",
      timeline: "WEEKS 1–2",
      icon: Search,
      description: "We conduct deep discovery workshops to map your financial chart of accounts, supply chain workflows, POS needs, and customization requirements across Dynamics 365 BC, Odoo, or ERPNext.",
      activities: [
        "Business Process GAP & Workflow Analysis",
        "Chart of Accounts & General Ledger Structure Design",
        "ERP Platform Selection & Architecture Blueprint",
        "Custom Module & API Specification Docs"
      ],
      deliverables: ["ERP Functional Specs", "Chart of Accounts Map", "Implementation Roadmap"],
      consoleTitle: "ERP_GAP_ANALYZER_V1",
      consoleLogs: [
        "> Mapping sales, inventory & finance workflows...",
        "> Target ERP selected: Dynamics 365 BC / Odoo",
        "> 12 custom module specs finalized",
        "[OK] Implementation scope approved"
      ],
      metricLabel: "GAP RESOLUTION",
      metricValue: "100% SCOPED"
    },
    {
      phase: "PHASE 02",
      step: "02",
      title: "Module Configuration & Extension Sprints",
      subtitle: "Bespoke AL / Python Code & Report Engineering",
      timeline: "WEEKS 3–6",
      icon: Code2,
      description: "We configure core ERP modules and build custom extensions — AL apps for Dynamics 365 BC, Python/OWL modules for Odoo, or Frappe Doctypes for ERPNext.",
      activities: [
        "Custom AL Extension (.app) / Python Module Coding",
        "Role-Tailored Workspaces & Form Layout Setup",
        "QWeb / Jinja2 / Power BI Report Engine Setup",
        "Third-Party POS & E-Commerce API Gateways"
      ],
      deliverables: ["Custom ERP Extensions", "Tailored Reports", "E-Commerce Connectors"],
      consoleTitle: "ERP_EXTENSION_COMPILER",
      consoleLogs: [
        "> Compiling AL Extension package (.app)...",
        "> Deploying Odoo Python views & OWL frontend...",
        "> Testing XML-RPC / OData REST webhooks...",
        "[SUCCESS] All custom modules loaded cleanly"
      ],
      metricLabel: "CUSTOM MODULES",
      metricValue: "READY FOR UAT"
    },
    {
      phase: "PHASE 03",
      step: "03",
      title: "Data Migration, UAT & Go-Live Cutover",
      subtitle: "Historical Data Import, User Training & Go-Live",
      timeline: "WEEKS 7+",
      icon: Rocket,
      description: "We migrate historical general ledger, customer, and inventory data, conduct comprehensive User Acceptance Testing (UAT), and execute final production cutover.",
      activities: [
        "Historical Master & Ledger Data Cleaning & Migration",
        "User Acceptance Testing (UAT) & Team Training",
        "Parallel Trial Balance & Financial Reconciliation",
        "Production Cutover & Post-Go-Live Support"
      ],
      deliverables: ["Migrated Clean Master Data", "Trained Team", "Live Production ERP"],
      consoleTitle: "ERP_DATA_MIGRATION_ENGINE",
      consoleLogs: [
        "> Importing customer & inventory master tables...",
        "> Reconciling trial balance balances...",
        "> Trial balance discrepancy: $0.00",
        "[GO-LIVE] Production ERP deployed successfully"
      ],
      metricLabel: "DATA ACCURACY",
      metricValue: "100% RECONCILED"
    }
  ],
  cloud: [
    {
      phase: "PHASE 01",
      step: "01",
      title: "Cloud Infrastructure & Security Posture Audit",
      subtitle: "Multi-Cloud Topology & Cost Discovery",
      timeline: "WEEKS 1–2",
      icon: Search,
      description: "We audit existing cloud workloads across AWS, Azure, and GCP, analyzing resource utilization, security IAM roles, compliance postures, and network latency.",
      activities: [
        "Multi-Cloud Account & IAM Policy Security Audit",
        "Infrastructure Utilization & Cost Optimization Review",
        "Network Topology & Multi-AZ SLA Blueprinting",
        "SOC 2 / ISO 27001 Security Baseline Audit"
      ],
      deliverables: ["Cloud Audit Report", "Terraform IaC Blueprint", "Cost Reduction Plan"],
      consoleTitle: "CLOUD_SECURITY_AUDITOR",
      consoleLogs: [
        "> Auditing AWS/Azure IAM permissions...",
        "> 3 unused over-provisioned instances flagged",
        "> Projected monthly cost savings: 32%",
        "[OK] Multi-AZ topology blueprint created"
      ],
      metricLabel: "COST SAVINGS",
      metricValue: "32% IDENTIFIED"
    },
    {
      phase: "PHASE 02",
      step: "02",
      title: "Terraform IaC & Kubernetes Cluster Setup",
      subtitle: "Automated GitOps & Container Mesh Sprints",
      timeline: "WEEKS 3–6",
      icon: Code2,
      description: "We write modular Infrastructure-as-Code (IaC) using Terraform, provision Kubernetes (EKS/AKS/GKE) clusters, and establish GitOps CI/CD pipelines.",
      activities: [
        "Terraform Infrastructure-as-Code (IaC) Provisioning",
        "Kubernetes (EKS/AKS/GKE) Cluster & Service Mesh",
        "Automated GitHub Actions / GitOps Deployment Pipelines",
        "KMS Encryption & Secrets Governance Integration"
      ],
      deliverables: ["Terraform Scripts", "Production K8s Mesh", "GitOps CI/CD"],
      consoleTitle: "TERRAFORM_IAC_RUNNER",
      consoleLogs: [
        "> Executing terraform apply -auto-approve...",
        "> Provisioning Multi-AZ EKS Kubernetes cluster...",
        "> Configuring Ingress Controllers & TLS Certificates...",
        "[SUCCESS] Multi-cloud mesh online"
      ],
      metricLabel: "DEPLOY SPEED",
      metricValue: "AUTOMATED"
    },
    {
      phase: "PHASE 03",
      step: "03",
      title: "Zero-Downtime Cutover & 24/7 SRE Telemetry",
      subtitle: "Production Traffic Migration & Managed Operations",
      timeline: "WEEKS 7+",
      icon: Rocket,
      description: "We execute zero-downtime DNS cutover, attach 24/7 Datadog/Prometheus monitoring dashboards, and hand over to our SRE incident response team.",
      activities: [
        "Zero-Downtime Blue/Green Production Cutover",
        "Datadog & Prometheus 24/7 Telemetry Setup",
        "Automated Security Vulnerability Scanning",
        "24/7 SRE Incident Escalation & SLA Guarantee"
      ],
      deliverables: ["Zero-Downtime Migration", "24/7 SOC Telemetry", "SLA Guarantee"],
      consoleTitle: "SRE_TELEMETRY_DASHBOARD",
      consoleLogs: [
        "> Switching Route53 DNS to new Multi-AZ ingress...",
        "> Monitoring HTTP response latency across regions...",
        "> Global P99 latency: 12ms (Target: <50ms)",
        "[ONLINE] 24/7 SRE active monitoring active"
      ],
      metricLabel: "UPTIME SLA",
      metricValue: "99.99% GUARANTEED"
    }
  ],
  default: [
    {
      phase: "PHASE 01",
      step: "01",
      title: "Architecture & System Requirements Discovery",
      subtitle: "Domain Data Modeling & Technical Blueprinting",
      timeline: "WEEKS 1–2",
      icon: Search,
      description: "We analyze business requirements, model database entity relationships, define API protocols, and establish software engineering standards.",
      activities: [
        "Domain-Driven Design (DDD) Requirements Workshop",
        "Database Entity & Schema Blueprinting",
        "REST / gRPC / GraphQL API Contract Specs",
        "Security & Compliance Standards Setup"
      ],
      deliverables: ["Technical Design Doc", "Database Schema Map", "API Specs"],
      consoleTitle: "SYSTEM_DESIGN_ENGINE",
      consoleLogs: [
        "> Modeling domain entity relationships...",
        "> API contracts defined (gRPC & REST)...",
        "> Database schema specs validated",
        "[OK] Ready for agile engineering sprints"
      ],
      metricLabel: "DESIGN COVERAGE",
      metricValue: "100% COMPLETE"
    },
    {
      phase: "PHASE 02",
      step: "02",
      title: "Agile Development & Test-Driven Sprints",
      subtitle: "Clean Code & Continuous Integration Sprints",
      timeline: "WEEKS 3–6",
      icon: Code2,
      description: "We build features in 2-week agile sprints with test-driven development (TDD), continuous integration, and static code security analysis.",
      activities: [
        "Full-Stack Clean Architecture Coding (.NET 9 / React 19)",
        "Automated TDD Unit & Integration Testing",
        "Docker Containerization & Local Integration",
        "Code Review & Static Security Scanning"
      ],
      deliverables: ["Tested Production Code", "CI/CD Pipelines", "Docker Builds"],
      consoleTitle: "AGILE_SPRINT_RUNNER",
      consoleLogs: [
        "> Running automated test suite...",
        "> 100% type safety checked",
        "> Docker build passing cleanly",
        "[SUCCESS] Sprint 2 deliverables validated"
      ],
      metricLabel: "CODE QUALITY",
      metricValue: "0 TECH DEBT"
    },
    {
      phase: "PHASE 03",
      step: "03",
      title: "Production Deployment & High-Availability Scaling",
      subtitle: "Staging Validation, Load Testing & Go-Live",
      timeline: "WEEKS 7+",
      icon: Rocket,
      description: "We deploy to cloud staging, execute latency load testing, and roll out to production backed by high-availability auto-scaling infrastructure.",
      activities: [
        "Staging Environment Validation & UAT",
        "Load & Stress Performance Optimization",
        "Automated Cloud Production Deployment",
        "Ongoing Maintenance & Technical SLA Support"
      ],
      deliverables: ["Live Cloud Application", "Load Test Report", "SLA Support"],
      consoleTitle: "PRODUCTION_DEPLOYER",
      consoleLogs: [
        "> Deploying to production cluster...",
        "> Health checks passing across nodes",
        "> Load test: 10,000 req/sec handled at 8ms latency",
        "[LIVE] Platform online and operational"
      ],
      metricLabel: "LATENCY TARGET",
      metricValue: "<10ms RESPONSE"
    }
  ]
};

interface InteractiveProcessTimelineProps {
  serviceSlug?: string;
}

function getPhasesForSlug(slug: string): PhaseData[] {
  if (slug === "modernization") return servicePhases.modernization;
  if (slug === "erp-consulting") return servicePhases["erp-consulting"];
  if (slug === "cloud") return servicePhases.cloud;
  return servicePhases.default;
}

export function InteractiveProcessTimeline({ serviceSlug = "modernization" }: InteractiveProcessTimelineProps) {
  const phasesList = getPhasesForSlug(serviceSlug);
  const [activeTab, setActiveTab] = useState<number>(0);

  const activePhase = (phasesList[activeTab] || phasesList[0])!;
  const IconComponent = activePhase.icon;

  return (
    <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
            <GitBranch size={12} className="text-primary animate-pulse" />
            <span>Interactive Process Framework</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Structured 3-Phase Delivery Framework
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Click on any phase below to explore our step-by-step technical methodology, key deliverables, and live execution metrics.
          </p>
        </div>

        {/* Phase Stepper Bar */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-border/60 -translate-y-1/2 -z-10 hidden sm:block" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {phasesList.map((p, idx) => {
              const isActive = activeTab === idx;
              const TabIcon = p.icon;

              return (
                <button
                  key={p.phase}
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    "relative p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between group cursor-pointer select-none",
                    isActive
                      ? "border-primary bg-card shadow-glow-primary scale-[1.02] z-10"
                      : "border-border/60 bg-card/40 hover:border-primary/40 hover:bg-card/70"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "flex size-10 items-center justify-center rounded-xl font-mono font-bold text-xs transition-colors shrink-0",
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-xs" 
                        : "bg-muted text-muted-foreground group-hover:text-primary group-hover:bg-primary/10"
                    )}>
                      {p.step}
                    </div>
                    <div>
                      <span className={cn(
                        "text-[10px] font-mono font-bold uppercase tracking-wider block",
                        isActive ? "text-primary" : "text-muted-foreground/70"
                      )}>
                        {p.phase}
                      </span>
                      <span className="text-xs font-bold text-foreground line-clamp-1">
                        {p.title}
                      </span>
                    </div>
                  </div>

                  <span className={cn(
                    "text-[9px] font-mono font-semibold px-2 py-0.5 rounded border shrink-0 hidden md:inline-block",
                    isActive ? "bg-primary/10 text-primary border-primary/20" : "bg-muted/50 text-muted-foreground border-border/40"
                  )}>
                    {p.timeline}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Interactive Detail Display */}
        <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-card via-surface/40 to-card p-6 md:p-10 backdrop-blur-md shadow-card transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Detailed Copy & Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between border-b border-border/30 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest block">
                      {activePhase.phase}: {activePhase.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-0.5">
                      {activePhase.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20">
                  <Clock size={12} />
                  <span>{activePhase.timeline}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {activePhase.description}
              </p>

              {/* Activities Checklist */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-foreground block mb-2 flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-primary" />
                  <span>Phase Engineering Activities:</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePhase.activities.map((act) => (
                    <div key={act} className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/30 p-2.5 rounded-xl border border-border/30">
                      <span className="size-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span className="leading-tight font-medium text-foreground">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable Tags */}
              <div className="pt-4 border-t border-border/30 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono text-muted-foreground font-bold uppercase">Deliverables:</span>
                  {activePhase.deliverables.map((del) => (
                    <span key={del} className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20">
                      ✓ {del}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-muted-foreground">{activePhase.metricLabel}:</span>
                  <span className="text-xs font-mono font-extrabold text-emerald-500">{activePhase.metricValue}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interactive Execution Console Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border/80 bg-zinc-950 text-zinc-100 p-5 shadow-2xl font-mono text-xs overflow-hidden">
                {/* Console Header Bar */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3 text-zinc-400">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="size-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="size-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="size-2.5 rounded-full bg-green-500/80 inline-block" />
                    </div>
                    <span className="text-[10px] text-zinc-400 font-bold ml-2">
                      {activePhase.consoleTitle}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[9px] text-emerald-400 font-bold">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>EXECUTING</span>
                  </span>
                </div>

                {/* Console Log Output */}
                <div className="space-y-2 text-[11px] leading-relaxed">
                  {activePhase.consoleLogs.map((log, lIdx) => (
                    <div 
                      key={lIdx} 
                      className={cn(
                        "transition-all duration-300",
                        log.startsWith("[OK]") || log.startsWith("[SUCCESS]") || log.startsWith("[LIVE]") || log.startsWith("[GO-LIVE]") || log.startsWith("[ONLINE]")
                          ? "text-emerald-400 font-bold" 
                          : log.startsWith(">")
                          ? "text-zinc-300"
                          : "text-zinc-400"
                      )}
                    >
                      {log}
                    </div>
                  ))}
                </div>

                {/* Console Bottom Info Footer */}
                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[9px] text-zinc-500">
                  <span>STEP {activeTab + 1} OF 3</span>
                  <span className="text-primary font-bold">BRAINZON DEPLOYMENT ENGINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
