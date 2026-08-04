"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { 
  Code2, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Terminal,
  Lock,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

const engineeringStandards = [
  {
    id: "clean-arch",
    title: "Clean Architecture & Domain-Driven Design (DDD)",
    badge: "Architectural Rigor",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    icon: Layers,
    iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-500",
    description: "Strictly decoupled business domains, clean dependency inversion, repository patterns, and 100% type safety using TypeScript and .NET 9.",
    features: [
      "Decoupled Core Domain Business Logic",
      "Repository & Factory Design Patterns",
      "Strict End-to-End Type Safety",
      "Automated Unit & Integration Test Suites"
    ]
  },
  {
    id: "high-throughput",
    title: "High-Throughput Microservice Protocols",
    badge: "<10ms API Latency",
    badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    icon: Zap,
    iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-500",
    description: "Event-driven microservices communicating via gRPC binary streams, GraphQL, and Kafka event queues processing over 50,000+ requests per second.",
    features: [
      "gRPC High-Speed Binary Streaming",
      "Apache Kafka Event Bus Queuing",
      "Redis Distributed In-Memory Caching",
      "Sub-10ms API Response Latency Targets"
    ]
  },
  {
    id: "acid-security",
    title: "ACID Ledger & Row-Level Security",
    badge: "Financial Compliance",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    icon: Lock,
    iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
    description: "Enterprise database architecture featuring double-entry transaction ledgers, row-level security (RLS), and immutable audit logs.",
    features: [
      "ACID-Compliant Double-Entry Ledgers",
      "Granular Role-Based Access Control (RBAC)",
      "Immutable System-Wide Audit Logs",
      "AES-256 Data Encryption at Rest & In-Transit"
    ]
  }
];

export function CustomDevArchitectureShowcase() {
  return (
    <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
            <Terminal size={12} className="text-primary animate-pulse" />
            <span>Software Engineering Standards</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Bespoke Enterprise Software Engineered for High-Concurrency Scale
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We don't build generic web scripts. We engineer mission-critical, cloud-native platforms with strict architectural rigor, zero technical debt, and ACID-compliant security.
          </p>
        </div>

        {/* 3 Engineering Standards Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {engineeringStandards.map((std) => {
            const IconComp = std.icon;

            return (
              <div
                key={std.id}
                className="group relative p-6 sm:p-8 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-md shadow-card hover:border-primary/50 hover:shadow-glow-primary hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-border/30 pb-4 mb-6">
                    <div className={cn("flex size-12 items-center justify-center rounded-2xl border shrink-0 group-hover:scale-105 transition-transform duration-300", std.iconBg)}>
                      <IconComp size={24} />
                    </div>
                    <span className={cn("text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border", std.badgeColor)}>
                      {std.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {std.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mt-3">
                    {std.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-6 pt-4 border-t border-border/30">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground block mb-2.5">
                      Engineering Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {std.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                          <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-tight">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border/30">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-semibold rounded-xl border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <span>Consult Core Developers</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Code Quality & SLA Guarantee Banner */}
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-card via-surface/40 to-card p-6 md:p-8 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 shadow-glow-primary">
          <div className="flex items-start gap-4">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-foreground">
                100% Code Ownership & Production Quality Assurance
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1 max-w-2xl">
                You retain full source code IP ownership with zero vendor lock-in. All codebase repositories include CI/CD automated test suites, Docker containers, and complete architectural documentation.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold rounded-xl text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary shrink-0 transition-all duration-200"
          >
            <span>Start Software Project</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
