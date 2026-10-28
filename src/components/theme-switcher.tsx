"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type ThemeSwitcherProps = {
  className?: string;
};

const emptySubscribe = () => () => undefined;

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const isDark = mounted && resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "group relative inline-flex size-9 items-center justify-center rounded-full",
        "border border-border/80 bg-background/70 hover:bg-muted text-foreground/80 hover:text-foreground",
        "shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
        className
      )}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {mounted ? (
        isDark ? (
          <Moon
            size={16}
            strokeWidth={2}
            className="text-primary transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
          />
        ) : (
          <Sun
            size={16}
            strokeWidth={2}
            className="text-amber-500 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110"
          />
        )
      ) : (
        <span className="size-4 opacity-0" />
      )}
    </button>
  );
}
