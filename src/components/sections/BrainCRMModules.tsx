"use client";

import { useState } from "react";
import { 
  Filter,
  UserCheck,
  Building2,
  Trophy,
  Kanban,
  CheckSquare,
  Calendar,
  Bell,
  Package,
  Receipt,
  LayoutDashboard,
  Target,
  Coins,
  BarChart3,
  Sparkles,
  Users,
  ScrollText,
  UploadCloud,
  Puzzle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleItem {
  area: "sales" | "activities" | "commercial" | "insight" | "admin";
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  description: string;
}

const AREAS = {
  sales: { name: "Sales", tone: "#009cb4", bg: "bg-[#009cb4]/10 text-[#009cb4] border-[#009cb4]/30" },
  activities: { name: "Activities", tone: "#fac316", bg: "bg-[#fac316]/10 text-[#fac316] border-[#fac316]/30" },
  commercial: { name: "Commercial", tone: "#10b981", bg: "bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30" },
  insight: { name: "Performance & analytics", tone: "#8b5cf6", bg: "bg-[#8b5cf6]/10 text-[#8b5cf6] border-[#8b5cf6]/30" },
  admin: { name: "Administration", tone: "#f1384a", bg: "bg-[#f1384a]/10 text-[#f1384a] border-[#f1384a]/30" },
} as const;

const MODULES: ModuleItem[] = [
  { area: "sales", icon: Filter, name: "Leads", description: "Capture, assign, qualify and convert leads with source, priority and estimated value." },
  { area: "sales", icon: UserCheck, name: "Contacts", description: "The people you sell to, linked to their accounts, activities and quotations." },
  { area: "sales", icon: Building2, name: "Accounts and Customer 360", description: "Company profile with contacts, deals, quotations, notes and a relationship timeline." },
  { area: "sales", icon: Trophy, name: "Opportunities", description: "Deal value, stage, probability, expected close and next step, with won and lost outcomes." },
  { area: "sales", icon: Kanban, name: "Visual pipeline", description: "Kanban board with drag and drop, a keyboard alternative and weighted stage totals." },
  { area: "activities", icon: CheckSquare, name: "Tasks and work queue", description: "Tasks, calls, meetings and follow-ups with due-today, overdue and completed views." },
  { area: "activities", icon: Calendar, name: "Calendar", description: "The same activities on a calendar so the team can plan the week." },
  { area: "activities", icon: Bell, name: "Reminders and notifications", description: "In-app notifications for what needs attention, with reminders on activities." },
  { area: "commercial", icon: Package, name: "Products and services", description: "One catalog with unit price, unit and tax rate, reused on every quotation." },
  { area: "commercial", icon: Receipt, name: "Quotations and PDF", description: "Line items, discounts and taxes with server-calculated totals, revisions and PDF output." },
  { area: "insight", icon: LayoutDashboard, name: "Dashboard", description: "Lead funnel, pipeline, won revenue and activity execution for the period you choose." },
  { area: "insight", icon: Target, name: "Targets and quotas", description: "Targets per rep and team, with attainment measured against won revenue." },
  { area: "insight", icon: Coins, name: "Commissions", description: "Commission plans and payouts with an approval step." },
  { area: "insight", icon: BarChart3, name: "Reports", description: "Predefined reports for leads, pipeline, activities and revenue, filtered by permission." },
  { area: "insight", icon: Sparkles, name: "AI assistant", description: "A built-in assistant for drafting follow-ups and getting guidance while you work." },
  { area: "admin", icon: Users, name: "Users, roles and teams", description: "Users, role permissions and team hierarchy that decide who can see and do what." },
  { area: "admin", icon: ScrollText, name: "Audit logs", description: "A record of security, ownership and commercial changes that users cannot edit." },
  { area: "admin", icon: UploadCloud, name: "Data import", description: "CSV import that applies the same validation and permissions as manual entry." },
  { area: "admin", icon: Puzzle, name: "Integrations", description: "REST API and a webhook foundation for connecting other systems." }
];

export function BrainCRMModules() {
  const [selectedArea, setSelectedArea] = useState<string>("all");

  const filteredModules = selectedArea === "all" 
    ? MODULES 
    : MODULES.filter((m) => m.area === selectedArea);

  const tabs = [
    { id: "all", name: "All", count: MODULES.length },
    { id: "sales", name: "Sales", count: MODULES.filter((m) => m.area === "sales").length },
    { id: "activities", name: "Activities", count: MODULES.filter((m) => m.area === "activities").length },
    { id: "commercial", name: "Commercial", count: MODULES.filter((m) => m.area === "commercial").length },
    { id: "insight", name: "Performance & analytics", count: MODULES.filter((m) => m.area === "insight").length },
    { id: "admin", name: "Administration", count: MODULES.filter((m) => m.area === "admin").length },
  ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 border-b border-border/40 bg-background" id="modules">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 w-[650px] h-[350px] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border/80 bg-surface/80 text-xs font-bold tracking-widest uppercase text-primary mb-4 font-mono shadow-xs">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span>Modules</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.14]">
            Everything a sales team{" "}
            <span className="inline-block whitespace-nowrap bg-[linear-gradient(to_right,#f1384a,#fac316,#009cb4,#fac316,#f1384a)] bg-[size:250%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(0,156,180,0.18)]">
              touches in a day
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Filter by area. Every module shares the same contacts, permissions, notes, attachments and audit history.
          </p>

          {/* Area Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2" role="tablist">
            {tabs.map((tab) => {
              const isActive = selectedArea === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedArea(tab.id)}
                  className={cn(
                    "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-surface/80 border-border/80 text-muted-foreground hover:text-foreground hover:bg-card"
                  )}
                >
                  <span>{tab.name}</span>
                  <span className={cn(
                    "text-[10px] px-1.5 py-0.2 rounded-full font-mono",
                    isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                  )}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredModules.map((m) => {
            const Icon = m.icon;
            const areaInfo = AREAS[m.area];
            return (
              <article
                key={m.name}
                className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-border/80 bg-card/80 dark:bg-card/40 backdrop-blur-md shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow-primary/25"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="size-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm"
                      style={{ backgroundColor: `${areaInfo.tone}15`, color: areaInfo.tone }}
                    >
                      <Icon size={20} />
                    </span>
                    <span 
                      className={cn("px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider font-mono border", areaInfo.bg)}
                    >
                      {areaInfo.name}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
