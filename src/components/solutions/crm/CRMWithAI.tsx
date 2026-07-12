"use client";

import React, { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { crmAiCapabilities } from "@/config/crm";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  Cpu,
  Compass,
  Search,
  ArrowRight,
  TrendingUp,
  Mail,
  ShieldAlert,
  CheckCircle2,
  Check,
  AlertCircle
} from "lucide-react";

// Helper to resolve Lucide Icons dynamically from config string
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Sparkles":
      return Sparkles;
    case "Cpu":
      return Cpu;
    case "Compass":
      return Compass;
    case "Search":
      return Search;
    default:
      return Sparkles;
  }
};

type ScenarioType = "dormant" | "api" | "billing";

export default function CRMWithAI() {
  const [activeTab, setActiveTab] = useState<number>(0);

  // --- Lead Scoring Simulator States ---
  const [visits, setVisits] = useState<number>(45);
  const [emailRate, setEmailRate] = useState<number>(70);
  const [downloads, setDownloads] = useState<number>(4);

  const leadScore = useMemo(() => {
    // Dynamic score formula
    const raw = Math.round(visits * 0.45 + emailRate * 0.35 + downloads * 4.5);
    return Math.min(100, Math.max(0, raw));
  }, [visits, emailRate, downloads]);

  const leadStatus = useMemo(() => {
    if (leadScore >= 80) return { label: "Hot Deal!", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" };
    if (leadScore >= 50) return { label: "Warm Lead", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30" };
    return { label: "Cold Pipeline", color: "text-amber-400 bg-amber-500/10 border-amber-500/30" };
  }, [leadScore]);

  // Lead scoring bar heights mapping (last 7 days engagement level)
  const leadChartBars = useMemo(() => {
    const base = [35, 50, 75, 40, 85, 60, 95];
    const factor = leadScore / 100;
    return base.map((b) => Math.max(10, Math.round(b * factor)));
  }, [leadScore]);

  // --- Customer Prediction States ---
  const [tenure, setTenure] = useState<number>(14); // months
  const [spend, setSpend] = useState<number>(1800); // monthly USD
  const [tickets, setTickets] = useState<number>(3); // support tickets last 30 days

  const churnProbability = useMemo(() => {
    const base = 25;
    const ticketImpact = tickets * 9;
    const tenureImpact = tenure * 0.6;
    const spendImpact = spend > 3000 ? -8 : 0;
    const raw = Math.round(base + ticketImpact - tenureImpact + spendImpact);
    return Math.min(99, Math.max(1, raw));
  }, [tenure, spend, tickets]);

  const projectedLtv = useMemo(() => {
    // Expected customer life in months = 1 / (monthly churn rate)
    // Monthly Churn Rate = Churn Probability / 100 / 12
    const monthlyChurnRate = Math.max(0.01, (churnProbability / 100) / 12);
    const expectedRemainingMonths = 1 / monthlyChurnRate;
    return Math.round(spend * Math.min(48, expectedRemainingMonths + tenure));
  }, [tenure, spend, churnProbability]);

  // --- Next Best Action Recommendations States ---
  const [scenario, setScenario] = useState<ScenarioType>("dormant");
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const scenarioData = useMemo(() => {
    const items: Record<ScenarioType, {
      title: string;
      actions: { title: string; confidence: number; actionLabel: string }[];
      emailSubject: string;
      emailBody: string;
    }> = {
      dormant: {
        title: "Client Unresponsive for 30 Days",
        actions: [
          { title: "Trigger Re-engagement Sequence via Marketing Hub", confidence: 96, actionLabel: "Queue Email Flow" },
          { title: "Schedule Direct Follow-up Call (Assigned to Account Executive)", confidence: 89, actionLabel: "Add Event" },
          { title: "Offer Extended 15-Day Free Beta Trial Access", confidence: 78, actionLabel: "Generate Token" },
        ],
        emailSubject: "Maximizing your operations with Brainzon—Let's reconnect",
        emailBody: "Hi Client,\n\nI noticed you haven't logged in to your portal lately. We have rolled out 3 new modules to help scale automated workflow distributions. Let's schedule a brief 10-minute catch-up next Tuesday.\n\nBest,\nYour Account Success Team",
      },
      api: {
        title: "Intent Detected: Custom API Integration",
        actions: [
          { title: "Send BrainConnect iPaaS Architecture & API Docs", confidence: 98, actionLabel: "Email PDF" },
          { title: "Invite to Developer Sandbox & Share Access Credentials", confidence: 91, actionLabel: "Provision Sandbox" },
          { title: "Schedule Technical Engineer Consultation Call", confidence: 84, actionLabel: "Book Call" },
        ],
        emailSubject: "Seamless Data Flows: Integrating Brainzon APIs",
        emailBody: "Hi Technical Team,\n\nWe detected a query regarding system pipeline endpoints. Here is our secure technical documentation suite along with instructions to set up sandbox webhook listeners. Let us know if you need assistance from an engineer.\n\nBest,\nIntegration Support",
      },
      billing: {
        title: "Contract Renewal Approaching (60 Days Out)",
        actions: [
          { title: "Auto-Draft Custom Expansion Addendum", confidence: 94, actionLabel: "Draft Proposal" },
          { title: "Propose Volume discount for Multi-Year Agreement", confidence: 87, actionLabel: "Apply Terms" },
          { title: "Flag for Executive Relationship Call Review", confidence: 75, actionLabel: "Alert CSM" },
        ],
        emailSubject: "Reviewing your Brainzon Annual Subscription Renewal",
        emailBody: "Hi Enterprise Partner,\n\nAs your subscription renewal approaches, we want to align your platform volume with future expansion plans. We've compiled a tailored growth framework with premium tier benefits. Let's connect this Friday.\n\nBest,\nCommercial Ops",
      },
    };
    return items[scenario];
  }, [scenario]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // --- Automated Insights States ---
  const [analyzedInput, setAnalyzedInput] = useState<string>(
    "We love the CRM dashboard but inventory status is out-of-sync. Sales reps need real-time warehouse count during client order entries so we don't sell out."
  );
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanDone, setScanDone] = useState<boolean>(true);

  const triggerScan = () => {
    setIsScanning(true);
    setScanDone(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanDone(true);
    }, 1200);
  };

  const detectedInsights = useMemo(() => {
    if (!scanDone) return [];
    
    const text = analyzedInput.toLowerCase();
    const insights = [];

    if (text.includes("inventory") || text.includes("warehouse") || text.includes("out-of-sync")) {
      insights.push({
        type: "System Gap",
        badge: "Critical",
        desc: "BrainERP integration is disconnected. Inventory counts require an active API bridge.",
        color: "border-rose-500/20 bg-rose-500/5 text-rose-400"
      });
    }
    if (text.includes("sales") || text.includes("order") || text.includes("sell out")) {
      insights.push({
        type: "Revenue Risk",
        badge: "High",
        desc: "Incorrect orders leading to customer cancellations and fulfillment failures.",
        color: "border-amber-500/20 bg-amber-500/5 text-amber-400"
      });
    }
    if (text.includes("love") || text.includes("dashboard") || text.includes("great")) {
      insights.push({
        type: "Product Sentiment",
        badge: "Positive",
        desc: "High adoption for CRM dashboards. Front-end layouts and sales analytics are highly rated.",
        color: "border-cyan-500/20 bg-cyan-500/5 text-cyan-400"
      });
    }

    if (insights.length === 0) {
      insights.push({
        type: "Intent Pattern",
        badge: "General",
        desc: "Logs scanned successfully. Clear intent indicators detected. Ready for routing.",
        color: "border-primary/20 bg-primary/5 text-primary"
      });
    }

    return insights;
  }, [analyzedInput, scanDone]);

  return (
    <section className="relative py-24 border-b border-border bg-background transition-colors duration-300 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-radial-gradient from-primary/10 via-secondary/5 to-transparent opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-2/3 -z-10 h-[350px] w-[350px] rounded-full bg-radial-gradient from-secondary/10 via-transparent to-transparent opacity-40 blur-2xl pointer-events-none" />

      <Container>
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="badge-primary animate-blink-primary mb-4 font-mono">
            <Sparkles className="size-3.5" /> Embedded AI Core
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
            Cognitive Sales & Relationship Intelligence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Simulate how BrainCRM&apos;s embedded AI model parses client telemetry, automates lead scoring, forecasts retention probabilities, and recommends real-time actions.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Dynamic Selector Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-1.5 rounded-2xl border border-border bg-card/40 backdrop-blur-md flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible no-scrollbar">
              {crmAiCapabilities.map((cap, idx) => {
                const Icon = getIcon(cap.icon);
                const isActive = activeTab === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={cn(
                      "flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left transition-all duration-300 shrink-0 lg:shrink",
                      isActive
                        ? "bg-primary/15 border border-primary/30 text-primary shadow-glow-primary"
                        : "border border-transparent text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                    )}
                  >
                    <span className={cn(
                      "p-2 rounded-lg transition-colors border",
                      isActive ? "bg-primary/25 border-primary/30 text-primary" : "bg-muted border-border text-muted-foreground"
                    )}>
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-foreground transition-colors group-hover:text-primary">
                        {cap.title}
                      </h4>
                      <p className="hidden md:block text-[10px] text-muted-foreground mt-0.5 line-clamp-1">
                        {cap.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Micro Feature Callout */}
            <div className="hidden lg:flex p-5 rounded-2xl border border-border bg-card/25 backdrop-blur-sm flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                <AlertCircle className="size-4 text-primary shrink-0" />
                <span>Zero-Lag Real-Time Processing</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                BrainCRM runs calculations inside our distributed cloud nodes, ensuring pipelines update instantly with zero cron-job delay.
              </p>
            </div>
          </div>

          {/* Right Column - Simulator Box */}
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl border border-border/80 bg-card/30 backdrop-blur-lg shadow-glow-secondary p-6 sm:p-8 overflow-hidden min-h-[460px] flex flex-col justify-between">
              {/* Decorative grid lines */}
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(30,51,77,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
              
              {/* Simulator Header */}
              <div className="flex justify-between items-center border-b border-border/40 pb-4 mb-6">
                <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                  BrainAI Core Sandbox Engine
                </span>
                <span className="text-[9px] font-mono text-muted-foreground/60 bg-muted/65 px-2 py-0.5 rounded border border-border">
                  SIMULATION ACTIVE
                </span>
              </div>

              {/* Dynamic Content Switching */}
              <div className="flex-1 flex flex-col justify-center">

                {/* 1. LEAD SCORING SIMULATOR */}
                {activeTab === 0 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Interactive Controls */}
                      <div className="space-y-4">
                        <h3 className="text-sm font-bold text-foreground">Adjust Lead Signals</h3>
                        
                        {/* Control 1 */}
                        <div>
                          <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                            <span>Website Engagement</span>
                            <span className="font-mono text-foreground font-bold">{visits} visits</span>
                          </div>
                          <input
                            type="range"
                            min="5"
                            max="100"
                            value={visits}
                            onChange={(e) => setVisits(Number(e.target.value))}
                            className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                          />
                        </div>

                        {/* Control 2 */}
                        <div>
                          <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                            <span>Email Open & Click Rate</span>
                            <span className="font-mono text-foreground font-bold">{emailRate}%</span>
                          </div>
                          <input
                            type="range"
                            min="10"
                            max="100"
                            value={emailRate}
                            onChange={(e) => setEmailRate(Number(e.target.value))}
                            className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                          />
                        </div>

                        {/* Control 3 */}
                        <div>
                          <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                            <span>Resource Downloads</span>
                            <span className="font-mono text-foreground font-bold">{downloads} downloads</span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="10"
                            value={downloads}
                            onChange={(e) => setDownloads(Number(e.target.value))}
                            className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                          />
                        </div>
                      </div>

                      {/* Display Gauge & Results */}
                      <div className="flex flex-col justify-between p-5 rounded-2xl border border-border bg-card/60 relative">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-muted-foreground">LEAD HEAT SCORE</span>
                            <h4 className="text-4xl font-bold tracking-tight text-foreground font-mono mt-1">
                              {leadScore}<span className="text-muted-foreground/40 text-xl">/100</span>
                            </h4>
                          </div>
                          <span className={cn("px-2.5 py-1 text-[10px] font-bold rounded-full border tracking-wide uppercase", leadStatus.color)}>
                            {leadStatus.label}
                          </span>
                        </div>

                        {/* Inline SVG Chart showing 7-day Engagement level */}
                        <div className="mt-6">
                          <span className="text-[9px] font-mono text-muted-foreground/60 block mb-2 uppercase">7-Day Lead Engagement Activity</span>
                          <div className="flex items-end justify-between h-16 pt-2 border-b border-border/40">
                            {leadChartBars.map((height, i) => (
                              <div key={i} className="flex flex-col items-center gap-1 w-full">
                                <div
                                  className="w-[8px] sm:w-[12px] rounded-t-sm bg-gradient-to-t from-primary/30 to-primary transition-all duration-300 shadow-glow-primary"
                                  style={{ height: `${height}%` }}
                                />
                                <span className="text-[8px] font-mono text-muted-foreground/45 mt-1">D{i+1}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. CUSTOMER PREDICTION (CHURN/LTV) */}
                {activeTab === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Inputs */}
                      <div className="space-y-4">
                        <h3 className="text-sm font-bold text-foreground">Adjust Account Telemetry</h3>

                        {/* Control 1 */}
                        <div>
                          <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                            <span>Customer Tenure</span>
                            <span className="font-mono text-foreground font-bold">{tenure} months</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="60"
                            value={tenure}
                            onChange={(e) => setTenure(Number(e.target.value))}
                            className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                          />
                        </div>

                        {/* Control 2 */}
                        <div>
                          <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                            <span>Monthly Spend</span>
                            <span className="font-mono text-foreground font-bold">${spend}</span>
                          </div>
                          <input
                            type="range"
                            min="200"
                            max="5000"
                            step="100"
                            value={spend}
                            onChange={(e) => setSpend(Number(e.target.value))}
                            className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                          />
                        </div>

                        {/* Control 3 */}
                        <div>
                          <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                            <span>Support Issues (Last 30 days)</span>
                            <span className="font-mono text-foreground font-bold">{tickets} tickets</span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="15"
                            value={tickets}
                            onChange={(e) => setTickets(Number(e.target.value))}
                            className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                          />
                        </div>
                      </div>

                      {/* Display Predictions */}
                      <div className="flex flex-col gap-4">
                        {/* Churn Prob Card */}
                        <div className={cn(
                          "p-4 rounded-xl border flex items-center justify-between transition-colors",
                          churnProbability > 50 
                            ? "bg-rose-500/5 border-rose-500/20" 
                            : "bg-emerald-500/5 border-emerald-500/20"
                        )}>
                          <div>
                            <span className="text-[9px] font-mono text-muted-foreground uppercase">CHURN RISK PROBABILITY</span>
                            <h4 className={cn(
                              "text-2xl font-bold font-mono tracking-tight mt-0.5",
                              churnProbability > 50 ? "text-rose-400" : "text-emerald-400"
                            )}>
                              {churnProbability}%
                            </h4>
                          </div>
                          <div>
                            {churnProbability > 50 ? (
                              <div className="flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold rounded bg-rose-500/10 text-rose-400 border border-rose-500/30">
                                <ShieldAlert className="size-3" /> ACTION REQ.
                              </div>
                            ) : (
                              <div className="flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                                <CheckCircle2 className="size-3" /> STABLE ACCT
                              </div>
                            )}
                          </div>
                        </div>

                        {/* LTV Projected Card */}
                        <div className="p-4 rounded-xl border border-border bg-card/60 flex items-center justify-between">
                          <div>
                            <span className="text-[9px] font-mono text-muted-foreground uppercase">FORECASTED ACCOUNT VALUE (LTV)</span>
                            <h4 className="text-2xl font-bold font-mono text-foreground tracking-tight mt-0.5">
                              ${projectedLtv.toLocaleString()}
                            </h4>
                          </div>
                          <span className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary font-bold">
                            <TrendingUp className="size-4" />
                          </span>
                        </div>

                        {/* Inline Area SVG Chart */}
                        <div className="p-3.5 rounded-xl border border-border/60 bg-muted/30">
                          <span className="text-[8px] font-mono text-muted-foreground/60 block mb-1.5 uppercase">LTV Growth Horizon Curve</span>
                          <svg className="w-full h-12 text-primary" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <path
                              d={`M0,30 Q20,25 40,20 T80,10 T100,${30 - (projectedLtv / 200000) * 20} L100,30 L0,30 Z`}
                              fill="url(#area-glow)"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <defs>
                              <linearGradient id="area-glow" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. SALES RECOMMENDATIONS (NEXT BEST ACTION) */}
                {activeTab === 2 && (
                  <div className="space-y-6">
                    {/* Scenario Selectors */}
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setScenario("dormant")}
                        className={cn(
                          "px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-200",
                          scenario === "dormant"
                            ? "bg-primary border-primary text-primary-foreground font-bold shadow-glow-primary"
                            : "border-border text-muted-foreground hover:bg-muted"
                        )}
                      >
                        Client Inactive
                      </button>
                      <button
                        onClick={() => setScenario("api")}
                        className={cn(
                          "px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-200",
                          scenario === "api"
                            ? "bg-primary border-primary text-primary-foreground font-bold shadow-glow-primary"
                            : "border-border text-muted-foreground hover:bg-muted"
                        )}
                      >
                        API Sync Intent
                      </button>
                      <button
                        onClick={() => setScenario("billing")}
                        className={cn(
                          "px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-200",
                          scenario === "billing"
                            ? "bg-primary border-primary text-primary-foreground font-bold shadow-glow-primary"
                            : "border-border text-muted-foreground hover:bg-muted"
                        )}
                      >
                        Contract Renewal
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Next Best Action Recommendations */}
                      <div className="space-y-3.5">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase block">RECOMMENDED NEXT ACTIONS</span>
                        
                        {scenarioData.actions.map((act, i) => (
                          <div key={i} className="group p-3 rounded-xl border border-border bg-card/70 hover:border-primary/40 transition-all duration-200 flex justify-between items-center">
                            <div className="max-w-[70%]">
                              <div className="flex items-center gap-1.5">
                                <span className="size-1.5 rounded-full bg-primary" />
                                <span className="text-[9px] font-mono text-muted-foreground">Confidence {act.confidence}%</span>
                              </div>
                              <h4 className="text-xs font-bold text-foreground mt-0.5 line-clamp-1 leading-normal">
                                {act.title}
                              </h4>
                            </div>
                            <button className="text-[10px] font-bold text-primary group-hover:text-foreground bg-primary/10 group-hover:bg-primary px-2.5 py-1 rounded transition-all duration-200 shrink-0">
                              {act.actionLabel}
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Smart Email Helper */}
                      <div className="p-4 rounded-xl border border-border bg-muted/40 relative flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] font-mono text-muted-foreground uppercase flex items-center gap-1">
                              <Mail className="size-3" /> SUGGESTED EMAIL COPY
                            </span>
                            <button
                              onClick={() => copyToClipboard(scenarioData.emailBody)}
                              className="text-[9px] font-bold bg-card border border-border px-2 py-0.5 rounded text-foreground hover:border-primary hover:text-primary transition-all duration-200"
                            >
                              {copiedEmail ? (
                                <span className="flex items-center gap-1 text-emerald-400">
                                  <Check className="size-2.5" /> Copied
                                </span>
                              ) : (
                                "Copy Text"
                              )}
                            </button>
                          </div>
                          <div className="p-2.5 rounded border border-border/80 bg-card/65 font-mono text-[10px] text-muted-foreground select-all leading-normal whitespace-pre-wrap max-h-36 overflow-y-auto">
                            <div className="font-bold text-foreground border-b border-border/40 pb-1 mb-1">
                              Subject: {scenarioData.emailSubject}
                            </div>
                            {scenarioData.emailBody}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. AUTOMATED INSIGHTS */}
                {activeTab === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-foreground">Scannable Customer Intercom Log</label>
                        <button
                          onClick={triggerScan}
                          disabled={isScanning}
                          className="px-3 py-1 rounded text-[10px] font-bold bg-primary text-primary-foreground disabled:opacity-50 hover:bg-primary/90 transition-colors"
                        >
                          {isScanning ? "Processing Logs..." : "Scan Logs with AI"}
                        </button>
                      </div>
                      
                      <textarea
                        value={analyzedInput}
                        onChange={(e) => setAnalyzedInput(e.target.value)}
                        className="w-full p-3 rounded-xl border border-border bg-card/60 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 font-sans resize-none h-16"
                        placeholder="Paste client support correspondence, chat interactions, or log text here..."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      {/* Sentiment Donut SVG */}
                      <div className="md:col-span-4 flex flex-col items-center justify-center p-4 border border-border rounded-xl bg-card/40">
                        <span className="text-[9px] font-mono text-muted-foreground/60 mb-2 uppercase">Signal breakdown</span>
                        
                        <div className="relative size-16">
                          <svg className="size-full rotate-[-90deg]" viewBox="0 0 36 36">
                            {/* Base Gray */}
                            <circle cx="18" cy="18" r="15.91" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                            {/* Positive Accent (cyan) */}
                            <circle
                              cx="18"
                              cy="18"
                              r="15.91"
                              fill="none"
                              stroke="var(--color-primary, #06b6d4)"
                              strokeWidth="3.2"
                              strokeDasharray="65 100"
                            />
                            {/* Risk Accent (rose) */}
                            <circle
                              cx="18"
                              cy="18"
                              r="15.91"
                              fill="none"
                              stroke="#f43f5e"
                              strokeWidth="3.2"
                              strokeDasharray="25 100"
                              strokeDashoffset="-65"
                            />
                            {/* Info Accent (gold) */}
                            <circle
                              cx="18"
                              cy="18"
                              r="15.91"
                              fill="none"
                              stroke="#eab308"
                              strokeWidth="3.2"
                              strokeDasharray="10 100"
                              strokeDashoffset="-90"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center flex-col">
                            <span className="text-[10px] font-mono font-bold text-foreground">AI</span>
                            <span className="text-[7px] text-muted-foreground uppercase">Tuned</span>
                          </div>
                        </div>
                        <div className="flex gap-2.5 mt-3">
                          <span className="text-[8px] text-cyan-400 flex items-center gap-1 font-mono">
                            <span className="size-1 rounded-full bg-cyan-400" /> Pos
                          </span>
                          <span className="text-[8px] text-rose-400 flex items-center gap-1 font-mono">
                            <span className="size-1 rounded-full bg-rose-400" /> Risk
                          </span>
                          <span className="text-[8px] text-yellow-400 flex items-center gap-1 font-mono">
                            <span className="size-1 rounded-full bg-yellow-400" /> Gap
                          </span>
                        </div>
                      </div>

                      {/* Scanned Insights Output */}
                      <div className="md:col-span-8 space-y-2">
                        {isScanning ? (
                          <div className="h-28 flex flex-col items-center justify-center border border-border border-dashed rounded-xl bg-muted/10">
                            <span className="size-6 border-2 border-primary border-t-transparent rounded-full animate-spin mb-2" />
                            <span className="text-[10px] font-mono text-muted-foreground animate-pulse">Running semantic parsing pipeline...</span>
                          </div>
                        ) : (
                          <>
                            <span className="text-[9px] font-mono text-muted-foreground uppercase block">AUTOMATED NLP EXTRACTIONS</span>
                            <div className="max-h-32 overflow-y-auto space-y-2 pr-1">
                              {detectedInsights.map((insight, idx) => (
                                <div key={idx} className={cn("p-2.5 rounded-lg border text-xs leading-normal flex flex-col gap-0.5", insight.color)}>
                                  <div className="flex justify-between items-center font-bold text-[10px] uppercase">
                                    <span>{insight.type}</span>
                                    <span className="text-[9px] px-1 py-0.2 rounded border bg-card/40">{insight.badge}</span>
                                  </div>
                                  <p className="text-muted-foreground text-[10px] leading-relaxed mt-0.5 font-normal">
                                    {insight.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Simulator CTA footer bar */}
              <div className="border-t border-border/40 pt-4 mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <p className="text-[10px] text-muted-foreground leading-normal font-normal">
                  Want to connect this simulator engine to your custom CRM records?
                </p>
                <a
                  href="/solutions/crm#demo"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:text-foreground transition-colors group shrink-0"
                >
                  Book Consultation Demo
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
