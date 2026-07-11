"use client";

import { cn } from "@/lib/utils";
import { solutionOptions } from "@/config/demo";
import {
  Database,
  Users,
  Cpu,
  Network,
  Package,
  RefreshCw,
  Code2,
  Cloud,
  type LucideIcon,
} from "lucide-react";

/* ── Icon map for dynamic rendering ── */
const iconMap: Record<string, LucideIcon> = {
  Database,
  Users,
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
                  : "border-border bg-card/40 text-muted-foreground hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-card"
              )}
            >
              {Icon && (
                <Icon
                  className={cn(
                    "h-4 w-4 flex-shrink-0 transition-colors duration-200",
                    selected
                      ? "text-primary"
                      : "text-muted-foreground/60 group-hover:text-primary/60"
                  )}
                />
              )}
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
