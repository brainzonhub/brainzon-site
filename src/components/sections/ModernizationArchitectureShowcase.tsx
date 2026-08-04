"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { 
  RefreshCw, 
  GitFork, 
  Code2, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck,
  Check,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const refactoringPatterns = [
  {
    id: "strangler",
    title: "Strangler Fig Refactoring Pattern",
    badge: "Zero-Downtime Migration",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    icon: GitFork,
    iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-500",
    description: "Gradually replace monolithic legacy code modules with modern microservices around the edges until the old system can be safely retired — with zero disruption to daily business.",
    features: [
      "Incremental Module-by-Module Cutover",
      "Zero Global Outage or Service Interruption",
      "Continuous Parallel Validation Testing",
      "Instant Fallback & Rollback Protection"
    ]
  },
  {
    id: "wrapper",
    title: "API Proxy Wrapping & Enveloping",
    badge: "Legacy API Layering",
    badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    icon: Code2,
    iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-500",
    description: "Envelop older mainframes, terminal databases, and legacy servers with secure, authenticated REST and GraphQL API gateways without touching brittle source code.",
    features: [
      "Modern REST / GraphQL API Gateway Layer",
      "OAuth2 & JWT Token Security Enveloping",
      "Rate-Limiting & Caching Response Proxy",
      "Extends Legacy System Lifespan by Years"
    ]
  },
  {
    id: "sync",
    title: "Dual-Write CDC Data Replication",
    badge: "Change Data Capture",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    icon: Database,
    iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
    description: "Establish real-time Change Data Capture (CDC) replication streams using Kafka to mirror data between legacy relational tables and modern cloud databases.",
    features: [
      "Real-Time Kafka CDC Replication Stream",
      "100% Data Parity Verification Checks",
      "Bi-Directional Sync During Migration",
      "Seamless Schema Refactoring & Indexing"
    ]
  }
];

export function ModernizationArchitectureShowcase() {
  return (
    <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
            <RefreshCw size={12} className="text-primary animate-spin" />
            <span>Legacy Refactoring Patterns</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Breathe New Life into Legacy Monoliths
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We deconstruct older enterprise systems, wrap legacy databases with modern security APIs, and migrate monolithic codebases into cloud-native microservices.
          </p>
        </div>

        {/* 3 Refactoring Pattern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {refactoringPatterns.map((pat) => {
            const IconComp = pat.icon;

            return (
              <div
                key={pat.id}
                className="group relative p-6 sm:p-8 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-md shadow-card hover:border-primary/50 hover:shadow-glow-primary hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-border/30 pb-4 mb-6">
                    <div className={cn("flex size-12 items-center justify-center rounded-2xl border shrink-0 group-hover:scale-105 transition-transform duration-300", pat.iconBg)}>
                      <IconComp size={24} />
                    </div>
                    <span className={cn("text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border", pat.badgeColor)}>
                      {pat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {pat.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mt-3">
                    {pat.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-6 pt-4 border-t border-border/30">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground block mb-2.5">
                      Technical Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {pat.features.map((f) => (
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
                    <span>Refactor Legacy System</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legacy vs. Modernized Comparison Grid */}
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-card via-surface/40 to-card p-6 md:p-8 backdrop-blur-md">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-foreground">
              Legacy Monolith vs. Modernized Architecture
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              What changes when Brainzon refactors your legacy infrastructure:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Legacy Box */}
            <div className="p-6 rounded-2xl border border-destructive/20 bg-destructive/5 space-y-3">
              <span className="text-xs font-mono font-bold text-destructive uppercase tracking-wider flex items-center gap-1.5">
                <X className="size-4 text-destructive" />
                <span>BEFORE: Legacy Monolith</span>
              </span>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-destructive" />
                  <span>Brittle codebase with zero test coverage or documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-destructive" />
                  <span>Unindexed monolithic database causes high latency locks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-destructive" />
                  <span>Manual deployment risks causing multi-hour outages</span>
                </li>
              </ul>
            </div>

            {/* Modernized Box */}
            <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-1.5">
                <Check className="size-4 text-emerald-500" />
                <span>AFTER: Modernized Cloud Engine</span>
              </span>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  <span>Decoupled microservices running on Docker & Kubernetes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  <span>High-speed REST/gRPC API wrappers with OAuth2 security</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  <span>Automated CI/CD pipelines enabling zero-downtime releases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
