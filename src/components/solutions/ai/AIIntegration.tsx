import { Container } from "@/components/layout/Container";
import { aiIntegrationOptions } from "@/config/ai";
import { cn } from "@/lib/utils";
import {
  Database,
  Users,
  GitBranch,
  Cloud,
  HardDrive,
  Server,
  Cpu,
  Brain,
  Link2,
  CheckCircle,
} from "lucide-react";

export function AIIntegration() {
  const getIcon = (name: string) => {
    switch (name) {
      case "BrainERP Core":
        return Database;
      case "BrainCRM Pipeline":
        return Users;
      case "BrainConnect iPaaS":
        return GitBranch;
      case "Microsoft Dynamics":
        return Cloud;
      case "Enterprise Databases":
        return HardDrive;
      case "Cloud Platforms":
        return Server;
      default:
        return Cpu;
    }
  };

  return (
    <section className="relative py-20 border-b border-border bg-background transition-colors duration-300 overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 h-[50%] w-[50%] rounded-full bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4">
              System Integration
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Coexist & Empower: Zero-Replacement Integration
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              You do not need to replace your legacy infrastructure or migration systems. BrainAI overlays securely on top of your existing tech platforms, utilizing active pipelines to ingest data and output cognitive actions.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-primary/15 text-primary mt-0.5 border border-primary/30">
                  <CheckCircle className="size-4" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Read/Write API Sync</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Dual-direction hooks ensure external records match real-time AI outputs.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-primary/15 text-primary mt-0.5 border border-primary/30">
                  <CheckCircle className="size-4" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Secure VPC Peering</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Encrypted tunnels bypass open internet vectors for on-premise configurations.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-primary/15 text-primary mt-0.5 border border-primary/30">
                  <CheckCircle className="size-4" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Fail-Safe State Caching</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Transaction buffers prevent data loss during third-party service outages.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Visual Diagram Board */}
          <div className="lg:col-span-7 relative">
            <div className="relative p-6 sm:p-8 rounded-3xl border border-border bg-card/20 backdrop-blur-md shadow-elevated">
              {/* Grid backdrop */}
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(30,51,77,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

              {/* Header Title */}
              <div className="flex justify-between items-center mb-8 border-b border-border/40 pb-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                  BrainAI Gateway Topology
                </span>
                <span className="text-[9px] font-mono text-muted-foreground/50">NON-INTRUSIVE OVERLAY</span>
              </div>

              <div className="flex flex-col gap-6 relative">
                {/* Central Overlay Node */}
                <div className="mx-auto w-full max-w-sm p-4 rounded-2xl border border-primary/40 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-md shadow-glow-primary flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-primary/20 text-primary border border-primary/30">
                      <Brain className="size-6 animate-pulse" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">BrainAI Central Hub</h4>
                      <p className="text-[10px] text-muted-foreground">Cognitive Processing & Direct Sync</p>
                    </div>
                  </div>
                  <span className="p-1 rounded-full bg-secondary/15 text-secondary border border-secondary/30 animate-pulse">
                    <Link2 className="size-4" />
                  </span>
                </div>

                {/* Connector lines visual indicator (CSS-only decorative elements) */}
                <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[1px] h-[calc(100%-80px)] bg-gradient-to-b from-primary/40 via-border/50 to-transparent -z-10" />

                {/* Integration Nodes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {aiIntegrationOptions.map((option, idx) => {
                    const Icon = getIcon(option.name);

                    return (
                      <div
                        key={idx}
                        className={cn(
                          "group p-4 rounded-xl border border-border/40 bg-card/60 backdrop-blur-sm transition-all duration-300",
                          "hover:border-primary/40 hover:bg-card hover:translate-y-[-2px] flex items-center gap-3.5"
                        )}
                      >
                        <span className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 shrink-0 border border-border/60">
                          <Icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
                        </span>
                        <div>
                          <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                            {option.name}
                          </h4>
                          <p className="text-[10px] text-muted-foreground mt-0.5">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
