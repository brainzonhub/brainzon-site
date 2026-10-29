import {
  Building2,
  Globe,
  ShieldCheck,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { trustMetrics } from "@/config/demo";

/* ── Icon mapping ── */
const iconMap: Record<string, LucideIcon> = {
  Building2,
  Globe,
  ShieldCheck,
  Handshake,
};


const metricColors: Record<string, string> = {
  Building2: "text-blue-500 dark:text-blue-400",
  Globe: "text-cyan-500 dark:text-cyan-400",
  ShieldCheck: "text-emerald-500 dark:text-emerald-400",
  Handshake: "text-amber-500 dark:text-amber-400",
};

export function TrustMetrics() {
  return (
    <section className="relative py-20 border-b border-border/40 bg-surface/50 dark:bg-muted/20 transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustMetrics.map((metric, idx) => {
            const Icon = iconMap[metric.icon];
            const isLast = idx === trustMetrics.length - 1;

            return (
              <div
                key={metric.label}
                className={cn(
                  "flex flex-col items-center text-center gap-3 py-4",
                  /* Desktop divider on first 3 items */
                  !isLast && "md:border-r md:border-border/30"
                )}
              >
                {Icon && (
                  <Icon className={metricColors[metric.icon] || "text-primary"} size={32} strokeWidth={1.5} />
                )}

                <span className="text-2xl md:text-3xl font-extrabold text-foreground">
                  {metric.value}
                </span>

                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
