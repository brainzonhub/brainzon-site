"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { 
  Cloud, 
  Server, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Zap,
  Lock,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";

const cloudArchitectures = [
  {
    id: "aws",
    title: "AWS Enterprise Cloud Architecture",
    badge: "Amazon Web Services",
    badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    icon: Server,
    iconBg: "bg-amber-500/10 border-amber-500/20 text-amber-500",
    description: "Multi-AZ AWS cloud infrastructure designed for sub-second latency, auto-scaling compute pools, serverless Lambda triggers, and S3 Glacier storage tiering.",
    features: [
      "Multi-AZ EC2 Auto-Scaling Clusters",
      "Serverless Lambda Event Architecture",
      "IAM Role Governance & KMS Encryption",
      "CloudFront Global Edge CDN Routing"
    ],
    specs: ["99.99% Multi-AZ SLA", "<15ms Global Latency", "SOC 2 Type II Certified"]
  },
  {
    id: "azure",
    title: "Microsoft Azure Hybrid Cloud",
    badge: "Microsoft Azure",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    icon: Cloud,
    iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-500",
    description: "Enterprise Azure hybrid cloud setups connecting on-premises data centers to Azure App Services, AKS Kubernetes clusters, and Azure SQL Managed Instances.",
    features: [
      "AKS (Azure Kubernetes Service) Mesh",
      "Azure Active Directory & SSO Auth",
      "ExpressRoute Hybrid On-Prem Connect",
      "Azure SQL Managed Instance Failover"
    ],
    specs: ["Hybrid Multi-Region Mesh", "Enterprise AD Integration", "ISO 27001 Certified"]
  },
  {
    id: "gcp",
    title: "Google Cloud Platform & DevOps",
    badge: "Google Cloud (GCP)",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    icon: Globe,
    iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
    description: "High-performance GCP container orchestration, BigQuery real-time analytics data pipelines, and GitOps IaC automation using Terraform and Kubernetes.",
    features: [
      "GKE (Google Kubernetes Engine) Clusters",
      "BigQuery Real-Time Analytics Stream",
      "Terraform Infrastructure-as-Code (IaC)",
      "Automated GitOps & CI/CD Pipelines"
    ],
    specs: ["Automated GitOps CI/CD", "Zero-Downtime Releases", "24/7 Real-Time Telemetry"]
  }
];

export function CloudInfraShowcase() {
  return (
    <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
            <Activity size={12} className="text-primary animate-pulse" />
            <span>Multi-Cloud Architecture</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Enterprise Cloud Infrastructure & DevOps Operations
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We design, deploy, and manage high-availability multi-cloud environments across AWS, Azure, and GCP — backed by 24/7 security telemetry and zero-downtime CI/CD pipelines.
          </p>
        </div>

        {/* 3 Cloud Provider Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cloudArchitectures.map((cloud) => {
            const IconComp = cloud.icon;

            return (
              <div
                key={cloud.id}
                className="group relative p-6 sm:p-8 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-md shadow-card hover:border-primary/50 hover:shadow-glow-primary hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-border/30 pb-4 mb-6">
                    <div className={cn("flex size-12 items-center justify-center rounded-2xl border shrink-0 group-hover:scale-105 transition-transform duration-300", cloud.iconBg)}>
                      <IconComp size={24} />
                    </div>
                    <span className={cn("text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border", cloud.badgeColor)}>
                      {cloud.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {cloud.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mt-3">
                    {cloud.description}
                  </p>

                  {/* Architecture Features */}
                  <div className="mt-6 pt-4 border-t border-border/30">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground block mb-2.5">
                      Architecture Features:
                    </span>
                    <ul className="space-y-1.5">
                      {cloud.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                          <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-tight">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Specs & SLA */}
                <div className="mt-8 pt-4 border-t border-border/30 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {cloud.specs.map((s) => (
                      <span key={s} className="text-[9.5px] font-mono font-semibold bg-muted/60 border border-border/50 text-foreground px-2 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-semibold rounded-xl border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <span>Design {cloud.badge} Blueprint</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* 24/7 Operations Guarantee Banner */}
        <div className="mt-12 rounded-3xl border border-border/60 bg-gradient-to-r from-card via-surface/40 to-card p-6 md:p-8 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 shadow-glow-primary">
          <div className="flex items-start gap-4">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-foreground">
                24/7 Managed Operations & Automated Incident Response
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1 max-w-2xl">
                Our Cloud Site Reliability Engineers (SREs) provide continuous live telemetry monitoring, automated security vulnerability scanning, and cost-optimization audits across all active cloud accounts.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold rounded-xl text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary shrink-0 transition-all duration-200"
          >
            <span>Request Cloud Audit</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
