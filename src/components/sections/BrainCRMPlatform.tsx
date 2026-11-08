"use client";

import { 
  Building2, 
  ShieldCheck, 
  ArrowRightLeft, 
  Calculator, 
  Flag, 
  ScrollText, 
  Check,
  Server
} from "lucide-react";

const TRUST_CARDS = [
  {
    icon: Building2,
    title: "Organization isolation",
    description: "Every record belongs to exactly one organization. The tenant comes from the signed-in session, never from the request body.",
    accent: "#009cb4"
  },
  {
    icon: ShieldCheck,
    title: "Roles, teams and ownership",
    description: "A role grants a capability. Organization, team scope and record ownership decide which records it applies to.",
    accent: "#8b5cf6"
  },
  {
    icon: ArrowRightLeft,
    title: "All-or-nothing conversion",
    description: "Converting a lead creates the contact, account and opportunity in one transaction. A lead cannot be converted twice.",
    accent: "#fac316"
  },
  {
    icon: Calculator,
    title: "Server-authoritative totals",
    description: "Quantities, discounts, taxes and grand totals are calculated in decimal on the server. The PDF is generated from the saved quotation.",
    accent: "#10b981"
  },
  {
    icon: Flag,
    title: "Honest pipeline",
    description: "A deal needs an account before it can be won, and a loss reason before it can be lost. Won and lost are final states.",
    accent: "#f1384a"
  },
  {
    icon: ScrollText,
    title: "Audit trail",
    description: "Sign-ins, ownership changes, conversions and commercial changes are recorded with who, what and when. Users cannot edit it.",
    accent: "#009cb4"
  }
];

const STACK_CHIPS = [
  { label: "Runtime", value: ".NET 10 LTS" },
  { label: "API", value: "ASP.NET Core Minimal API" },
  { label: "Web", value: "ASP.NET Core MVC + Razor" },
  { label: "Data", value: "PostgreSQL + EF Core 10" },
  { label: "Identity", value: "ASP.NET Core Identity" },
  { label: "Design", value: "Clean Architecture" },
];

export function BrainCRMPlatform() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 border-b border-border/40 bg-background" id="platform">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 -z-10 w-[600px] h-[400px] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border/80 bg-surface/80 text-xs font-bold tracking-widest uppercase text-primary mb-4 font-mono shadow-xs">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span>Platform</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.14]">
            Rules enforced on the server,{" "}
            <span className="inline-block whitespace-nowrap bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:250%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(0,156,180,0.18)]">
              not in the browser
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            The things that must never go wrong in a CRM are handled where they cannot be bypassed.
          </p>
        </div>

        {/* 6 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TRUST_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-border/80 bg-card/80 dark:bg-card/40 backdrop-blur-md shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow-primary/25"
              >
                <div>
                  <span 
                    className="size-11 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 shadow-sm"
                    style={{ backgroundColor: `${card.accent}15`, color: card.accent }}
                  >
                    <Icon size={22} />
                  </span>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Clean Architecture Stack Showcase Card */}
        <div className="mt-8 rounded-2xl border border-border/80 bg-card/80 dark:bg-card/40 backdrop-blur-md shadow-card p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left copy & checklist */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#009cb4] bg-[#009cb4]/10 mb-3 border border-[#009cb4]/20">
                <Server size={12} />
                <span>Clean Architecture Monolith</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Built on a stack your team can own
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                A modular monolith in Clean Architecture: three deployable parts and a clear path to extend with ERP, support or marketing modules later.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Versioned REST API under /api/v1 with OpenAPI documentation",
                  "Web app talks to the API only, never to the database",
                  "CSV import and webhook foundation for integrations",
                  "Clear project boundaries and tests that make AI-assisted changes safer"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-foreground">
                    <span className="size-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/20">
                      <Check size={12} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Stack Chips Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4 p-5 rounded-xl border border-border/60 bg-surface/50 font-mono">
              {STACK_CHIPS.map((chip) => (
                <div key={chip.label} className="p-3 rounded-lg border border-border/60 bg-background/80 shadow-xs">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {chip.label}
                  </span>
                  <b className="block text-xs sm:text-sm font-bold text-foreground mt-1 truncate">
                    {chip.value}
                  </b>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
