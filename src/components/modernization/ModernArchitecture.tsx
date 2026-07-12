"use client";

import { ArrowDown, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ModernizationIcon } from "./modernization-icons";
import { ModernizationSectionHeader } from "./ModernizationSectionHeader";
import { cn } from "@/lib/utils";

// Detailed local layers config for high architectural impact
const detailedLayers = [
  {
    title: "Presentation Layer",
    icon: "PanelsTopLeft",
    role: "Micro-Frontends",
    description: "Decouple user interfaces using client-side SPAs or SSR systems to ensure fluid experiences and independent frontend releases.",
    metadata: "Protocols: HTTPS / WSS • Latency: < 80ms render • State: Stateless client",
    technologies: ["React", "Angular", "Vue.js"],
    color: "primary",
  },
  {
    title: "Application Layer",
    icon: "Boxes",
    role: "Microservices",
    description: "Refactor complex monolithic business logic into scalable containerized services communicating via REST or high-performance gRPC interfaces.",
    metadata: "Protocols: HTTP/2 • Core Latency: < 30ms • Isolation: Docker / K8s",
    technologies: [".NET", "Node.js", "Python"],
    color: "secondary",
  },
  {
    title: "Integration Layer",
    icon: "Cable",
    role: "Event-Driven Core",
    description: "Orchestrate decoupled system communication and automate cron schedules using webhooks, APIs, and fast pub/sub message brokers.",
    metadata: "Channels: gRPC • Architecture: Async Pub/Sub • Broker: Event Bus",
    technologies: ["BrainConnect", "APIs", "Workflow Automations"],
    color: "accent",
  },
  {
    title: "Data Layer",
    icon: "Database",
    role: "Distributed Storage",
    description: "Migrate legacy databases into high-availability relational or NoSQL platforms with multi-region replication and automated schema governance.",
    metadata: "Encryption: AES-256 • Replication: Multi-Region • Scaling: Auto-Sharded",
    technologies: ["SQL Server", "PostgreSQL", "Cloud Databases"],
    color: "primary",
  },
  {
    title: "Infrastructure",
    icon: "Cloud",
    role: "Cloud Native Host",
    description: "Deploy scalable, zero-downtime application clusters using infrastructure-as-code (IaC) and declarative pipeline automation.",
    metadata: "Host: Managed K8s • Target SLA: 99.99% Uptime • Security: Zero-Trust IAM",
    technologies: ["Azure", "AWS", "Google Cloud"],
    color: "secondary",
  },
];

export function ModernArchitecture() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface/30 py-20 sm:py-28 transition-colors duration-300">
      {/* Target architecture decorative overlay */}
      <div className="absolute inset-0 bg-surface-glow opacity-50 pointer-events-none" aria-hidden="true" />

      <Container className="relative">
        <ModernizationSectionHeader
          eyebrow="Target architecture"
          title="Build A Future-Ready Technology Foundation"
          description="A modular enterprise stack separates experience, application logic, integration, data, and infrastructure for independent scale and change."
        />

        <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-border/40 bg-card/45 p-4 shadow-sm backdrop-blur-xl sm:p-6 md:p-8">
          <div className="flex flex-col gap-4">
            {detailedLayers.map((layer, index) => {
              // Extract colors based on layer style mappings
              let badgeColorClass = "border-primary/20 bg-primary/5 text-primary";
              let iconColorClass = "bg-primary/10 text-primary border-primary/20";
              let hoverCardBorderClass = "hover:border-primary/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.12)]";

              if (layer.color === "secondary") {
                badgeColorClass = "border-secondary/20 bg-secondary/5 text-secondary";
                iconColorClass = "bg-secondary/10 text-secondary border-secondary/20";
                hoverCardBorderClass = "hover:border-secondary/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.12)]";
              } else if (layer.color === "accent") {
                badgeColorClass = "border-accent/20 bg-accent/5 text-accent";
                iconColorClass = "bg-accent/10 text-accent border-accent/20";
                hoverCardBorderClass = "hover:border-accent/50 hover:shadow-[0_0_15px_rgba(234,179,8,0.12)]";
              }

              return (
                <div key={layer.title} className="flex flex-col items-center">
                  <article 
                    className={cn(
                      "grid gap-5 rounded-2xl border border-border/40 bg-background/55 p-5 w-full transition-all duration-300 md:grid-cols-[1.1fr_1.85fr_1.05fr] md:items-center",
                      hoverCardBorderClass
                    )}
                  >
                    {/* Column 1: Icon, Title & Role */}
                    <div className="flex items-center gap-4 text-left">
                      <span className={cn("flex size-11 shrink-0 items-center justify-center rounded-xl border", iconColorClass)}>
                        <ModernizationIcon name={layer.icon} className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-[9px] font-bold text-muted-foreground tracking-widest uppercase">
                          LAYER 0{index + 1}
                        </p>
                        <h3 className="mt-0.5 text-sm font-extrabold text-foreground truncate">
                          {layer.title}
                        </h3>
                        <span className={cn("inline-block mt-1 text-[8px] font-mono font-bold tracking-wider uppercase border px-1.5 py-0.5 rounded", badgeColorClass)}>
                          {layer.role}
                        </span>
                      </div>
                    </div>

                    {/* Column 2: Detailed Role Description & Tech Specs */}
                    <div className="flex flex-col text-left">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {layer.description}
                      </p>
                      <div className="mt-2 text-[9px] font-mono text-muted-foreground/70 tracking-wide">
                        {layer.metadata}
                      </div>
                    </div>

                    {/* Column 3: Tech tags/chips */}
                    <div className="flex flex-wrap gap-1.5 justify-start md:justify-end">
                      {layer.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="rounded-lg border border-border bg-card/65 px-2.5 py-1 text-[10px] font-mono font-bold text-foreground/80 hover:border-primary/45 transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>

                  {/* Connecting ArrowDown pipeline indicator */}
                  {index < detailedLayers.length - 1 && (
                    <div className="flex h-6 items-center justify-center text-primary py-2 pointer-events-none">
                      <ArrowDown className="size-3.5 animate-pulse text-muted-foreground/60" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 border-t border-border/40 pt-5 text-xs font-semibold text-muted-foreground">
            <ShieldCheck className="size-4 text-primary animate-pulse" />
            <span>Secure, fully observable, API-first, and zero-trust cloud ready</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
