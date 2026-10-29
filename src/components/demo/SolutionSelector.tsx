"use client";

import { cn } from "@/lib/utils";
import { ProductIcon, normalizeProductSlug } from "@/components/ui/ProductIcon";
import { solutionOptions } from "@/config/demo";
import {
  Database,
  Users,
  Megaphone,
  Receipt,
  Layers,
  Cpu,
  Network,
  Package,
  RefreshCw,
  Code2,
  Cloud,
  type LucideIcon,
} from "lucide-react";

/* ── Distinct vivid color mapping for all 8 solution icons ── */
const optionIconColors: Record<string, string> = {
  // Core Products
  brainmkt: "text-cyan-500 dark:text-cyan-400",
  braincrm: "text-amber-500 dark:text-amber-400",
  brainerp: "text-violet-500 dark:text-violet-400",
  brainbooks: "text-emerald-500 dark:text-emerald-400",
  // Services
  "odoo-bc-implementation": "text-purple-500 dark:text-purple-400",
  "enterprise-integration": "text-blue-500 dark:text-blue-400",
  "legacy-modernization": "text-orange-500 dark:text-orange-400",
  "custom-software": "text-teal-500 dark:text-teal-400",
  // Fallbacks by icon name
  Megaphone: "text-cyan-500 dark:text-cyan-400",
  Users: "text-amber-500 dark:text-amber-400",
  Database: "text-violet-500 dark:text-violet-400",
  Receipt: "text-emerald-500 dark:text-emerald-400",
  Layers: "text-purple-500 dark:text-purple-400",
  Network: "text-blue-500 dark:text-blue-400",
  RefreshCw: "text-orange-500 dark:text-orange-400",
  Code2: "text-teal-500 dark:text-teal-400",
};

/* ── Icon map for dynamic rendering ── */
const iconMap: Record<string, LucideIcon> = {
  Database,
  Users,
  Megaphone,
  Receipt,
  Layers,
  Cpu,
  Network,
  Package,
  RefreshCw,
  Code2,
  Cloud,
};

/* ================================================================== */
/*  SolutionSelector                                                  */
/* ================================================================== */

interface SolutionSelectorProps {
  value: string[];
  onChange: (values: string[]) => void;
  error?: string;
}

export function SolutionSelector({
  value,
  onChange,
  error,
}: SolutionSelectorProps) {
  function toggle(id: string) {
    if (value.includes(id)) {
      onChange(value.filter((v) => v !== id));
    } else {
      onChange([...value, id]);
    }
  }

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {solutionOptions.map((option) => {
          const Icon = iconMap[option.icon];
          const selected = value.includes(option.id);
          const iconColor =
            optionIconColors[option.id] ||
            optionIconColors[option.icon] ||
            "text-primary";

          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => toggle(option.id)}
              className={cn(
                "group flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-xs font-medium",
                "transition-all duration-200 cursor-pointer",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                selected
                  ? "border-primary bg-primary/10 text-primary shadow-glow-primary/20 ring-1 ring-primary/20"
                  : "border-border bg-card/40 text-muted-foreground hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-card hover:text-foreground"
              )}
            >
              {normalizeProductSlug(option.id) ? (
                <div className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                  <ProductIcon product={option.id} size={16} />
                </div>
              ) : Icon ? (
                <Icon
                  className={cn(
                    "h-4 w-4 flex-shrink-0 transition-transform duration-200 group-hover:scale-110",
                    iconColor
                  )}
                />
              ) : null}
              <span className="truncate">{option.label}</span>
            </button>
          );
        })}
      </div>

      {error && (
        <p className="text-xs text-secondary mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
