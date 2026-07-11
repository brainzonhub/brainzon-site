"use client";

import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type ThemeOption = {
  label: string;
  value: "light" | "dark" | "system";
  icon: LucideIcon;
};

const themeOptions: readonly ThemeOption[] = [
  { label: "Light theme", value: "light", icon: Sun },
  { label: "Dark theme", value: "dark", icon: Moon },
  { label: "System theme", value: "system", icon: Monitor },
];

type ThemeSwitcherProps = {
  className?: string;
};

const emptySubscribe = () => () => undefined;

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-lg border border-border bg-card p-1",
        className,
      )}
      role="group"
      aria-label="Choose color theme"
    >
      {themeOptions.map(({ label, value, icon: Icon }) => {
        const isSelected = mounted && theme === value;

        return (
          <button
            key={value}
            type="button"
            className={cn(
              "inline-flex size-8 items-center justify-center rounded-md text-muted-foreground",
              "transition-colors hover:bg-secondary hover:text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isSelected && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
            )}
            onClick={() => setTheme(value)}
            aria-label={label}
            aria-pressed={isSelected}
            title={label}
            disabled={!mounted}
          >
            <Icon aria-hidden="true" size={16} strokeWidth={2} />
          </button>
        );
      })}
    </div>
  );
}
