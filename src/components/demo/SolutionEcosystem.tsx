"use client";

import {
  Database,
  Users,
  Megaphone,
  Receipt,
  Network,
  Layers,
  Package,
  ShoppingCart,
  Globe,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { cn } from "@/lib/utils";

/* ── Node data types ── */
interface EcoNode {
  label: string;
  icon?: LucideIcon;
  productSlug?: string;
  color?: string;
}

/* ── Center hub ── */
const centerNode: EcoNode = { label: "Brainzon Core", icon: Layers, color: "text-primary" };

/* ── Inner ring — core products ── */
const innerNodes: EcoNode[] = [
  { label: "BrainMKT", productSlug: "brainmkt", color: "text-cyan-500 dark:text-cyan-400" },
  { label: "BrainCRM", productSlug: "braincrm", color: "text-amber-500 dark:text-amber-400" },
  { label: "BrainERP", productSlug: "brainerp", color: "text-violet-500 dark:text-violet-400" },
  { label: "BrainBooks", productSlug: "brainbooks", color: "text-emerald-500 dark:text-emerald-400" },
];

/* ── Outer ring — connected systems ── */
const outerNodes: EcoNode[] = [
  { label: "ERP Systems", icon: Package, color: "text-purple-500 dark:text-purple-400" },
  { label: "eCommerce", icon: ShoppingCart, color: "text-amber-500 dark:text-amber-400" },
  { label: "External APIs", icon: Globe, color: "text-blue-500 dark:text-blue-400" },
  { label: "Legacy Apps", icon: RefreshCw, color: "text-orange-500 dark:text-orange-400" },
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
  const Icon = node.icon || Package;

  return (
    <div className={cn("flex flex-col items-center gap-1.5", className)}>
      <div
        className={cn(
          "flex items-center justify-center rounded-full",
          "border backdrop-blur-sm transition-all duration-300"
        )}
        style={{ width: size, height: size }}
      >
        {node.productSlug ? (
          <ProductIcon product={node.productSlug} size={iconSize} />
        ) : Icon ? (
          <Icon size={iconSize} strokeWidth={1.8} className={node.color || "text-primary"} />
        ) : null}
      </div>
      <span className="text-[10px] font-semibold tracking-wide text-foreground whitespace-nowrap">
        {node.label}
      </span>
    </div>
  );
}

/* ── Main component ── */
export function SolutionEcosystem() {
  const CenterIcon = centerNode.icon || Layers;

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
              {innerPositions.map((inPos, i) => {
                const outPos = outerPositions[i]!;
                return (
                  <line
                    key={`io-${i}`}
                    x1={inPos.x}
                    y1={inPos.y}
                    x2={outPos.x}
                    y2={outPos.y}
                    stroke="var(--color-border)"
                    strokeWidth="0.2"
                    opacity="0.25"
                    strokeDasharray="3 3"
                  />
                );
              })}

              {/* Concentric guide circles (subtle) */}
              <circle
                cx="50"
                cy="50"
                r="22"
                stroke="var(--color-primary)"
                strokeWidth="0.15"
                opacity="0.15"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="var(--color-border)"
                strokeWidth="0.15"
                opacity="0.12"
                fill="none"
              />
            </svg>

            {/* Center hub node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "relative flex items-center justify-center rounded-full",
                    "bg-primary/10 border-2 border-primary text-primary",
                    "shadow-glow-primary transition-all duration-300",
                    "hover:scale-105 hover:shadow-elevated"
                  )}
                  style={{ width: 80, height: 80 }}
                >
                  {/* Subtle pulsing outer ring */}
                  <div className="absolute inset-0 rounded-full border border-primary/40 animate-ping opacity-20 pointer-events-none" />
                  <CenterIcon size={32} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold tracking-wide text-primary">
                  {centerNode.label}
                </span>
              </div>
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
                    className="[&>div:first-child]:bg-card/60 [&>div:first-child]:border-border [&>div:first-child]:hover:border-primary/50 [&>div:first-child]:hover:shadow-glow-primary"
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
                    className="[&>div:first-child]:bg-card/40 [&>div:first-child]:border-border/60 [&>div:first-child]:hover:border-primary/30"
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
            <p className="text-[10px] text-muted-foreground">Central Core Hub</p>
          </div>

          {/* Core products 2×2 */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {innerNodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.label}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card/60"
                >
                  <div className="flex items-center justify-center size-9 rounded-lg bg-primary/10">
                    {node.productSlug ? (
                      <ProductIcon product={node.productSlug} size={20} />
                    ) : Icon ? (
                      <Icon size={18} strokeWidth={1.6} className={node.color || "text-primary"} />
                    ) : null}
                  </div>
                  <span className="text-xs font-semibold text-foreground">
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Connected systems 2×2 */}
          <div className="grid grid-cols-2 gap-3">
            {outerNodes.map((node) => {
              const Icon = node.icon || Package;
              return (
                <div
                  key={node.label}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg border border-border/60 bg-card/40"
                >
                  <div className="flex items-center justify-center size-7 rounded-md bg-muted/60">
                    <Icon size={14} strokeWidth={1.6} className={node.color || "text-muted-foreground"} />
                  </div>
                  <span className="text-[11px] font-medium text-muted-foreground">
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
