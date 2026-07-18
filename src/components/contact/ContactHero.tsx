"use client";

import { Container } from "@/components/layout/Container";
import { ArrowRight, Globe } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface HubLocation {
  id: string;
  name: string;
  region: string;
  x: number;
  y: number;
  description: string;
  color: "primary" | "secondary" | "accent";
}

const mapHubs: HubLocation[] = [
  {
    id: "usa",
    name: "USA Hub (HQ)",
    region: "North America",
    x: 80,
    y: 130,
    description: "Enterprise advisory headquarters based in San Francisco, CA.",
    color: "secondary", // red for HQ
  },
  {
    id: "eu",
    name: "EU Hub",
    region: "Europe",
    x: 240,
    y: 105,
    description: "Systems integration, migration delivery, and data privacy hub in London and Frankfurt.",
    color: "primary",
  },
  {
    id: "asia",
    name: "ASIA Hub",
    region: "Asia-Pacific",
    x: 360,
    y: 190,
    description: "AI software development labs, deep-tech research, and ERP customization engineering in Bengaluru.",
    color: "accent",
  },
  {
    id: "africa",
    name: "AFRICA Hub",
    region: "Africa",
    x: 260,
    y: 230,
    description: "Regional cloud infrastructure provisioning, database migration, and digital services in Johannesburg.",
    color: "primary",
  },
  {
    id: "australia",
    name: "Australia Hub",
    region: "Oceania",
    x: 440,
    y: 300,
    description: "Oceania business operations, client success management, and modernization consulting in Sydney.",
    color: "accent",
  },
  {
    id: "canada",
    name: "Canada Hub",
    region: "North America",
    x: 100,
    y: 80,
    description: "Custom modernization services and client delivery in Toronto.",
    color: "primary",
  },
  {
    id: "south-america",
    name: "South America Hub",
    region: "Latin America",
    x: 180,
    y: 260,
    description: "Regional technology deployment and customer success in São Paulo, Brazil.",
    color: "primary",
  },
];

export function ContactHero() {
  const [hoveredHub, setHoveredHub] = useState<string | null>(null);
  const activeHub = mapHubs.find((h) => h.id === hoveredHub);

  const handleScrollToForm = () => {
    const formElement = document.getElementById("contact-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-border/40 bg-background transition-colors duration-300">
      {/* Decorative glows */}
      <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      {/* Grid background */}
      <div
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading and copy */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="badge-primary animate-blink-primary">
              Global Service Connection
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1]">
              Let&apos;s Build Your <br />
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(6,182,212,0.12)] dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                Digital Future
              </span>{" "}
              Together
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Tell us about your business challenges and discover how Brainzon can help you transform operations with ERP, CRM, AI, integration, and modernization solutions.
            </p>

            {/* Action button */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={handleScrollToForm}
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary hover:shadow-lg transition-all duration-200 cursor-pointer",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                )}
              >
                <span>Start a Conversation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: World Map Network Visualizer */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* World Map Container */}
            <div className="relative w-full max-w-[550px] aspect-[11/6.5] bg-card/40 border border-border rounded-3xl p-4 md:p-6 shadow-card backdrop-blur-md overflow-hidden">
              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,51,77,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

              <svg
                className="w-full h-full text-muted-foreground/30 relative z-10"
                viewBox="0 0 500 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simulated World Map Outline Details (Stylized circles for continents) */}
                {/* North America */}
                <circle cx="90" cy="110" r="40" fill="currentColor" opacity="0.08" />
                <circle cx="120" cy="140" r="30" fill="currentColor" opacity="0.08" />
                {/* South America */}
                <circle cx="165" cy="240" r="35" fill="currentColor" opacity="0.08" />
                <circle cx="180" cy="270" r="25" fill="currentColor" opacity="0.08" />
                {/* Europe */}
                <circle cx="240" cy="100" r="30" fill="currentColor" opacity="0.08" />
                <circle cx="260" cy="120" r="25" fill="currentColor" opacity="0.08" />
                {/* Africa */}
                <circle cx="250" cy="200" r="35" fill="currentColor" opacity="0.08" />
                <circle cx="270" cy="240" r="22" fill="currentColor" opacity="0.08" />
                {/* Asia */}
                <circle cx="360" cy="120" r="50" fill="currentColor" opacity="0.08" />
                <circle cx="390" cy="180" r="40" fill="currentColor" opacity="0.08" />
                {/* Australia */}
                <circle cx="440" cy="290" r="30" fill="currentColor" opacity="0.08" />

                {/* Connection lines from USA SF Hub (80, 130) to other regional hubs */}
                {mapHubs.map((hub) => {
                  if (hub.id === "usa") return null;
                  const isHovered = hoveredHub === hub.id;
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
                      {/* Packet Animation (Yellow/Accent Color) */}
                      <circle r={isHovered ? 3.5 : 2} fill="#eab308" opacity={isHovered ? 1 : 0.8}>
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
                {mapHubs.map((hub) => {
                  const isHovered = hoveredHub === hub.id;
                  const isHQ = hub.id === "usa";
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
                        onMouseEnter={() => setHoveredHub(hub.id)}
                        onMouseLeave={() => setHoveredHub(null)}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* High-tech status details overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center text-[10px] font-mono border border-border bg-card/90 px-3 py-2.5 rounded-xl backdrop-blur-sm">
                {activeHub ? (
                  <div className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom-1 duration-200">
                    <span className={cn(
                      "size-1.5 rounded-full animate-ping",
                      activeHub.color === "secondary" ? "bg-secondary" : "bg-primary"
                    )} />
                    <span className="font-bold text-foreground">{activeHub.name}</span>
                    <span className="text-muted-foreground hidden sm:inline">({activeHub.region})</span>
                    <span className="text-primary truncate max-w-[200px]">{activeHub.description}</span>
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
