import React from "react";
import { Container } from "@/components/layout/Container";
import { crmIntegrationOptions } from "@/config/crm";
import {
  Database,
  GitBranch,
  Network,
  Users,
  CheckCircle,
  Coins,
  Package,
  ShoppingCart,
  Headphones,
  ArrowRightLeft,
  Link
} from "lucide-react";

// Icon mapping helper
const getIntegrationIcon = (name: string) => {
  if (name.includes("ERP")) return Database;
  if (name.includes("iPaaS")) return GitBranch;
  return Network;
};

export default function CRMIntegration() {
  return (
    <section className="relative py-24 border-b border-border bg-background transition-colors duration-300 overflow-hidden">
      {/* Background glow visual decorators */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-45 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 -z-10 h-[350px] w-[350px] rounded-full bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-35 blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptive text and metadata */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/10 text-xs font-mono font-bold tracking-widest text-secondary uppercase mb-4">
              <Link className="size-3" /> Connected Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
              Unified Operational Synergy
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              BrainCRM is not a data silo. It acts as an orchestrator, connecting directly with backend operations, enterprise ERP workflows, inventory trackers, and third-party tools to create a 360-degree business picture.
            </p>

            {/* Integration Feature List */}
            <ul className="mt-8 space-y-4 w-full">
              <li className="flex items-start gap-3.5 group">
                <span className="p-1 rounded-full bg-secondary/15 text-secondary mt-0.5 border border-secondary/30 transition-colors group-hover:bg-secondary/25">
                  <CheckCircle className="size-4" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Real-Time Sync Operations</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 font-normal leading-normal">
                    Prevent stale data. Financial entries, inventory status updates, and order logs sync in real-time.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3.5 group">
                <span className="p-1 rounded-full bg-secondary/15 text-secondary mt-0.5 border border-secondary/30 transition-colors group-hover:bg-secondary/25">
                  <CheckCircle className="size-4" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Transactional Guarantee</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 font-normal leading-normal">
                    Built-in message buffering guarantees sales pipelines match fulfillment logs without packet dropouts.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3.5 group">
                <span className="p-1 rounded-full bg-secondary/15 text-secondary mt-0.5 border border-secondary/30 transition-colors group-hover:bg-secondary/25">
                  <CheckCircle className="size-4" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Secure Field Masking</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 font-normal leading-normal">
                    Encrypt sensitive financial logs while exposing CRM billing totals to customer success teams.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Custom Visual Diagram Board */}
          <div className="lg:col-span-7 relative">
            <div className="relative p-6 sm:p-8 rounded-3xl border border-border/80 bg-card/25 backdrop-blur-md shadow-elevated">
              {/* Subtle visual grid backdrop */}
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

              {/* Topology Title */}
              <div className="flex justify-between items-center mb-8 border-b border-border/40 pb-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-secondary uppercase flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-secondary animate-pulse" />
                  BrainCRM Integration Topology
                </span>
                <span className="text-[9px] font-mono text-muted-foreground/50">ACTIVE PIPELINES</span>
              </div>

              {/* Diagram Core Layout */}
              <div className="flex flex-col gap-8 relative">
                
                {/* Central BrainCRM Node */}
                <div className="mx-auto w-full max-w-sm p-4 rounded-2xl border border-secondary/40 bg-gradient-to-r from-secondary/10 to-primary/10 backdrop-blur-md shadow-glow-secondary flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-secondary/25 text-secondary border border-secondary/30">
                      <Users className="size-6 animate-pulse" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">BrainCRM Hub</h4>
                      <p className="text-[10px] text-muted-foreground font-normal">Customer Intelligence Core</p>
                    </div>
                  </div>
                  <span className="p-1 rounded-full bg-primary/15 text-primary border border-primary/30 animate-pulse">
                    <ArrowRightLeft className="size-4" />
                  </span>
                </div>

                {/* Grid of Peripheral Connected Systems */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  
                  {/* Left-Side: Operational / ERP Sub-nodes */}
                  <div className="space-y-3">
                    <span className="text-[9px] font-mono text-muted-foreground/60 uppercase block px-1">ERP Operations</span>
                    
                    {/* Finance Node */}
                    <div className="group p-3 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-secondary/40 hover:bg-card flex items-center gap-3">
                      <span className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:bg-secondary/10 group-hover:text-secondary transition-all duration-300 shrink-0 border border-border/60">
                        <Coins className="size-4" />
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-foreground group-hover:text-secondary transition-colors">Finance</h4>
                        <p className="text-[9px] text-muted-foreground font-normal mt-0.5">Billing & Invoices</p>
                      </div>
                    </div>

                    {/* Inventory Node */}
                    <div className="group p-3 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-secondary/40 hover:bg-card flex items-center gap-3">
                      <span className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:bg-secondary/10 group-hover:text-secondary transition-all duration-300 shrink-0 border border-border/60">
                        <Package className="size-4" />
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-foreground group-hover:text-secondary transition-colors">Inventory</h4>
                        <p className="text-[9px] text-muted-foreground font-normal mt-0.5">Real-time Stock Levels</p>
                      </div>
                    </div>

                    {/* Sales Orders Node */}
                    <div className="group p-3 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-secondary/40 hover:bg-card flex items-center gap-3">
                      <span className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:bg-secondary/10 group-hover:text-secondary transition-all duration-300 shrink-0 border border-border/60">
                        <ShoppingCart className="size-4" />
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-foreground group-hover:text-secondary transition-colors">Sales Orders</h4>
                        <p className="text-[9px] text-muted-foreground font-normal mt-0.5">Deal Fulfillment Sync</p>
                      </div>
                    </div>
                  </div>

                  {/* Right-Side: Services & Integration Sub-nodes */}
                  <div className="space-y-3">
                    <span className="text-[9px] font-mono text-muted-foreground/60 uppercase block px-1">Integration & Support</span>

                    {/* Customer Service Node */}
                    <div className="group p-3 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card flex items-center gap-3">
                      <span className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 shrink-0 border border-border/60">
                        <Headphones className="size-4" />
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">Customer Service</h4>
                        <p className="text-[9px] text-muted-foreground font-normal mt-0.5">Ticketing & SLA SLAs</p>
                      </div>
                    </div>

                    {/* config-defined options mapping */}
                    {crmIntegrationOptions.map((opt, idx) => {
                      const Icon = getIntegrationIcon(opt.name);
                      
                      return (
                        <div
                          key={idx}
                          className="group p-3 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card flex items-center gap-3"
                        >
                          <span className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 shrink-0 border border-border/60">
                            <Icon className="size-4" />
                          </span>
                          <div>
                            <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                              {opt.name.replace("Operations", "").replace("iPaaS", "")}
                            </h4>
                            <p className="text-[9px] text-muted-foreground font-normal mt-0.5 line-clamp-1">
                              {opt.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Decorative Connective Web */}
                <div className="absolute top-[48px] left-1/2 -translate-x-1/2 w-[1px] h-[calc(100%-88px)] bg-gradient-to-b from-secondary/40 via-border/50 to-transparent -z-10" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
