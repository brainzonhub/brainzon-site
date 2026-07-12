"use client";

import { Container } from "@/components/layout/Container";
import { Globe, Cpu, HeartHandshake } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface HubLocation {
  id: string;
  name: string;
  region: string;
  x: number;
  y: number;
  ip: string;
  active: boolean;
}

const globalHubs: HubLocation[] = [
  { id: "sf", name: "San Francisco", region: "North America (HQ)", x: 80, y: 130, ip: "10.12.110.1", active: true },
  { id: "ny", name: "New York", region: "North America", x: 130, y: 125, ip: "10.12.110.14", active: true },
  { id: "lon", name: "London", region: "Europe", x: 230, y: 105, ip: "172.16.8.22", active: true },
  { id: "fra", name: "Frankfurt", region: "Europe", x: 252, y: 112, ip: "172.16.8.49", active: true },
  { id: "blr", name: "Bengaluru", region: "Asia Pacific", x: 360, y: 200, ip: "192.168.4.15", active: true },
  { id: "sg", name: "Singapore", region: "Asia Pacific", x: 385, y: 220, ip: "192.168.4.3", active: true },
  { id: "syd", name: "Sydney", region: "Oceania", x: 440, y: 310, ip: "192.168.9.11", active: true },
  { id: "sao", name: "São Paulo", region: "Latin America", x: 180, y: 260, ip: "10.40.2.80", active: true },
];

export function GlobalPresence() {
  const [activeHub, setActiveHub] = useState<string | null>(null);
  const selectedHub = globalHubs.find((h) => h.id === activeHub);

  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-border/40 bg-background transition-colors duration-300">
      <div className="absolute top-[20%] left-[-10%] -z-10 h-[50%] w-[50%] rounded-full bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Descriptive Trust Points */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="badge-secondary animate-blink-secondary">Global Footprint</span>
              <h2 className="text-3xl md:text-heading-2 font-bold tracking-tight text-foreground mt-4">
                Serving Businesses Globally
              </h2>
              <p className="mt-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                Brainzon operates an enterprise-grade digital transformation network, combining localized support with global delivery capacity.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <Globe size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Global Technology Delivery</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    Local implementation teams combined with global development resources ensure rapid rollout and low-latency integration architectures.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <Cpu size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Remote Consulting & Architecture</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    Connect instantly with senior solutions architects to plan migrations, validate integrations, and audit database performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <HeartHandshake size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Enterprise Partnerships</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    Collaborative relationships with Microsoft Azure, AWS, and Google Cloud developers to ensure maximum resilience and platform compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: World Map Network Graphic */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* World Map Container */}
            <div className="relative w-full max-w-[550px] aspect-[11/6] bg-card/40 border border-border rounded-3xl p-4 md:p-6 shadow-card backdrop-blur-md overflow-hidden">
              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,51,77,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

              <svg
                className="w-full h-full text-muted-foreground/30 relative z-10"
                viewBox="0 0 500 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simulated World Map Outline Details (Stylized circles for continents) */}
                {/* North America */}
                <circle cx="90" cy="110" r="40" fill="currentColor" opacity="0.1" />
                <circle cx="120" cy="140" r="30" fill="currentColor" opacity="0.1" />
                {/* South America */}
                <circle cx="165" cy="240" r="35" fill="currentColor" opacity="0.1" />
                <circle cx="180" cy="270" r="25" fill="currentColor" opacity="0.1" />
                {/* Europe */}
                <circle cx="240" cy="100" r="30" fill="currentColor" opacity="0.1" />
                <circle cx="260" cy="120" r="25" fill="currentColor" opacity="0.1" />
                {/* Asia */}
                <circle cx="360" cy="120" r="50" fill="currentColor" opacity="0.1" />
                <circle cx="390" cy="180" r="40" fill="currentColor" opacity="0.1" />
                {/* Australia */}
                <circle cx="440" cy="290" r="30" fill="currentColor" opacity="0.1" />

                {/* Connection lines from HQ SF (80, 130) to other active nodes */}
                {globalHubs.map((hub) => {
                  if (hub.id === "sf") return null;
                  const isHovered = activeHub === hub.id;
                  return (
                    <g key={`path-${hub.id}`}>
                      <path
                        d={`M 80 130 Q ${(80 + hub.x) / 2} ${Math.min(130, hub.y) - 30} ${hub.x} ${hub.y}`}
                        stroke={isHovered ? "var(--primary)" : "currentColor"}
                        strokeWidth={isHovered ? 1.5 : 0.8}
                        strokeDasharray={isHovered ? "none" : "3 3"}
                        className="transition-all duration-300"
                        opacity={isHovered ? 0.9 : 0.4}
                      />
                      {/* Packet Animation */}
                      <circle r={isHovered ? 3.5 : 2} fill={isHovered ? "var(--primary)" : "var(--accent)"} opacity={isHovered ? 1 : 0.7}>
                        <animateMotion
                          dur={isHovered ? "1s" : "3.5s"}
                          repeatCount="indefinite"
                          path={`M 80 130 Q ${(80 + hub.x) / 2} ${Math.min(130, hub.y) - 30} ${hub.x} ${hub.y}`}
                        />
                      </circle>
                    </g>
                  );
                })}

                {/* Draw Locations */}
                {globalHubs.map((hub) => {
                  const isHovered = activeHub === hub.id;
                  const isHQ = hub.id === "sf";
                  return (
                    <g key={hub.id}>
                      {/* Pulsing ring */}
                      <circle
                        cx={hub.x}
                        cy={hub.y}
                        r={isHovered ? 12 : isHQ ? 7 : 4}
                        fill="none"
                        stroke={isHQ ? "var(--secondary)" : "var(--primary)"}
                        strokeWidth={1.2}
                        className={cn(isHQ ? "animate-pulse" : "")}
                        opacity={isHovered ? 0.8 : 0.5}
                      />
                      {/* Solid Center */}
                      <circle
                        cx={hub.x}
                        cy={hub.y}
                        r={isHQ ? 4 : 2.5}
                        fill={isHQ ? "var(--secondary)" : "var(--primary)"}
                        className="cursor-pointer"
                        onMouseEnter={() => setActiveHub(hub.id)}
                        onMouseLeave={() => setActiveHub(null)}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Status details overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center text-[10px] font-mono border border-border bg-card/90 px-3 py-2 rounded-xl backdrop-blur-sm">
                {selectedHub ? (
                  <div className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom-1 duration-200">
                    <span className="size-1.5 rounded-full bg-primary animate-ping" />
                    <span className="font-bold text-foreground">{selectedHub.name} Hub</span>
                    <span className="text-muted-foreground">({selectedHub.region})</span>
                    <span className="text-primary">{selectedHub.ip}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-secondary" />
                    <span>Global Network Active</span>
                    <span className="text-[9px] text-muted-foreground/60">(Hover map nodes to scan)</span>
                  </div>
                )}
                <div className="text-primary font-bold hidden sm:inline-block">
                  ● SLA 100% ONLINE
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
