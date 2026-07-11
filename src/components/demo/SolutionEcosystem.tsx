"use client";

import {
  Cpu,
  Database,
  Users,
  Network,
  Layers,
  Package,
  ShoppingCart,
  Globe,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

/* ── Node data types ── */
interface EcoNode {
  label: string;
  icon: LucideIcon;
}

/* ── Center hub ── */
const centerNode: EcoNode = { label: "BrainAI", icon: Cpu };

/* ── Inner ring — core products ── */
const innerNodes: EcoNode[] = [
  { label: "BrainERP", icon: Database },
  { label: "BrainCRM", icon: Users },
  { label: "BrainConnect", icon: Network },
  { label: "Integration", icon: Layers },
];

/* ── Outer ring — connected systems ── */
const outerNodes: EcoNode[] = [
  { label: "ERP Systems", icon: Package },
  { label: "eCommerce", icon: ShoppingCart },
  { label: "External APIs", icon: Globe },
  { label: "Legacy Apps", icon: RefreshCw },
];

/* ── Geometry helpers ── */

/** Place nodes evenly around a circle. Returns {x,y} as percentages. */
function radialPositions(
  count: number,
  radiusX: number,
  radiusY: number,
  offsetDeg = -90
): { x: number; y: number }[] {
  return Array.from({ length: count }, (_, i) => {
    const angle = ((360 / count) * i + offsetDeg) * (Math.PI / 180);
    return {
      x: 50 + radiusX * Math.cos(angle),
      y: 50 + radiusY * Math.sin(angle),
    };
  });
}

/* ── Radial positions (percentages of the container) ── */
const innerPositions = radialPositions(4, 22, 22);
const outerPositions = radialPositions(4, 40, 40, -45);

/* ── Reusable node component ── */
function NodeCircle({
  node,
  size,
  className,
  iconSize = 20,
}: {
  node: EcoNode;
  size: number;
  className?: string;
  iconSize?: number;
}) {
  const Icon = node.icon;
  return (
    <div className={cn("flex flex-col items-center gap-1.5", className)}>
      <div
        className={cn(
          "flex items-center justify-center rounded-full",
          "border backdrop-blur-sm transition-all duration-300"
        )}
        style={{ width: size, height: size }}
      >
        <Icon size={iconSize} strokeWidth={1.6} />
      </div>
      <span className="text-[10px] font-semibold tracking-wide text-foreground whitespace-nowrap">
        {node.label}
      </span>
    </div>
  );
}

/* ── Main component ── */
export function SolutionEcosystem() {
  const CenterIcon = centerNode.icon;

  return (
    <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <Container>
        {/* ── Section header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded border border-primary/20 bg-primary/10 text-[9px] font-mono font-bold tracking-widest text-primary uppercase">
            Solution Ecosystem
          </span>

          <h2 className="text-heading-2 font-bold tracking-tight text-foreground mt-4">
            Integrated Enterprise Architecture
          </h2>
        </div>

        {/* ─────────── Desktop: radial layout (≥ md) ─────────── */}
        <div className="hidden md:block">
          <div className="relative mx-auto w-full max-w-2xl h-[500px]">
            {/* SVG connection lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              aria-hidden="true"
            >
              {/* Center → inner ring */}
              {innerPositions.map((pos, i) => (
                <line
                  key={`ci-${i}`}
                  x1="50"
                  y1="50"
                  x2={pos.x}
                  y2={pos.y}
                  stroke="var(--color-primary)"
                  strokeWidth="0.25"
                  opacity="0.3"
                  strokeDasharray="4 4"
                />
              ))}

              {/* Inner ring → outer ring */}
              {outerPositions.map((outerPos, oi) => {
                // Connect each outer node to its two nearest inner nodes
                const nearest1 = innerPositions[oi % innerPositions.length]!;
                const nearest2 =
                  innerPositions[(oi + 1) % innerPositions.length]!;
                return (
                  <g key={`io-${oi}`}>
                    <line
                      x1={nearest1.x}
                      y1={nearest1.y}
                      x2={outerPos.x}
                      y2={outerPos.y}
                      stroke="var(--color-primary)"
                      strokeWidth="0.2"
                      opacity="0.2"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1={nearest2.x}
                      y1={nearest2.y}
                      x2={outerPos.x}
                      y2={outerPos.y}
                      stroke="var(--color-primary)"
                      strokeWidth="0.2"
                      opacity="0.2"
                      strokeDasharray="4 4"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Center hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
              {/* Pulsing outer glow ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/5 border border-primary/20 animate-pulse" />
              </div>

              {/* Core circle */}
              <div
                className={cn(
                  "relative flex items-center justify-center rounded-full",
                  "bg-primary/10 border-2 border-primary text-primary",
                  "shadow-glow-primary"
                )}
                style={{ width: 80, height: 80 }}
              >
                <CenterIcon size={32} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-bold tracking-wide text-primary mt-1">
                {centerNode.label}
              </span>
            </div>

            {/* Inner ring nodes */}
            {innerNodes.map((node, i) => {
              const pos = innerPositions[i]!;
              return (
                <div
                  key={node.label}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                >
                  <NodeCircle
                    node={node}
                    size={56}
                    iconSize={22}
                    className="[&>div:first-child]:bg-card/60 [&>div:first-child]:border-border [&>div:first-child]:text-primary [&>div:first-child]:hover:border-primary/50 [&>div:first-child]:hover:shadow-glow-primary"
                  />
                </div>
              );
            })}

            {/* Outer ring nodes */}
            {outerNodes.map((node, i) => {
              const pos = outerPositions[i]!;
              return (
                <div
                  key={node.label}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                >
                  <NodeCircle
                    node={node}
                    size={44}
                    iconSize={18}
                    className="[&>div:first-child]:bg-card/40 [&>div:first-child]:border-border/60 [&>div:first-child]:text-muted-foreground [&>div:first-child]:hover:border-primary/30 [&>div:first-child]:hover:text-primary"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ─────────── Mobile: grid layout (< md) ─────────── */}
        <div className="md:hidden">
          {/* Center hub */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <div
              className={cn(
                "relative flex items-center justify-center rounded-full",
                "bg-primary/10 border-2 border-primary text-primary",
                "shadow-glow-primary"
              )}
              style={{ width: 64, height: 64 }}
            >
              <CenterIcon size={26} strokeWidth={1.5} />
            </div>
            <span className="text-xs font-bold tracking-wide text-primary">
              {centerNode.label}
            </span>
            <p className="text-[10px] text-muted-foreground">Central AI Hub</p>
          </div>

          {/* Core products 2×2 */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {innerNodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.label}
                  className={cn(
                    "flex flex-col items-center gap-2 p-4 rounded-2xl",
                    "border border-border/40 bg-card/40 backdrop-blur-sm"
                  )}
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-card/60 border border-border text-primary">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <span className="text-[11px] font-semibold text-foreground">
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Connected systems 2×2 */}
          <div className="grid grid-cols-2 gap-4">
            {outerNodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.label}
                  className={cn(
                    "flex flex-col items-center gap-2 p-3 rounded-xl",
                    "border border-border/20 bg-card/20 backdrop-blur-sm"
                  )}
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-card/40 border border-border/60 text-muted-foreground">
                    <Icon size={16} strokeWidth={1.6} />
                  </div>
                  <span className="text-[10px] font-medium text-muted-foreground">
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
