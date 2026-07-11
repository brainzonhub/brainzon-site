import Link from "next/link";
import { CaseStudy } from "@/config/resources";
import { CheckCircle2, ArrowRight, Building } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <div
      className={cn(
        "group relative p-6 sm:p-8 rounded-3xl border border-border bg-card/45 backdrop-blur-md shadow-card",
        "hover:border-secondary/40 hover:shadow-glow-secondary transition-all duration-300 flex flex-col justify-between"
      )}
    >
      <div>
        {/* Metric Highlight & Client info */}
        <div className="flex items-start justify-between mb-4 gap-4">
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
            <Building size={10} className="text-secondary" />
            <span>{study.client}</span>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded bg-secondary/10 border border-secondary/20 text-[10px] font-mono font-bold text-secondary">
            {study.metric}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-foreground group-hover:text-secondary transition-colors duration-200 mb-2 leading-snug">
          {study.title}
        </h3>

        {/* Industry */}
        <span className="text-[9px] font-semibold text-muted-foreground/60 uppercase tracking-widest block mb-4">
          Industry: {study.industry}
        </span>

        {/* Summary */}
        <p className="text-xs text-muted-foreground leading-relaxed mb-6">
          {study.excerpt}
        </p>

        {/* Quick results list */}
        <div className="flex flex-col gap-2.5 mb-8">
          {study.results.slice(0, 2).map((res, i) => (
            <div key={i} className="flex items-start gap-2 text-[11px] text-muted-foreground/80 leading-normal">
              <CheckCircle2 size={12} className="text-secondary shrink-0 mt-0.5" />
              <span>{res}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="flex items-center justify-between pt-4 border-t border-border/40 mt-auto">
        <span className="text-[10px] font-semibold text-foreground/50">READ FULL CASE STUDY</span>
        <Link
          href={`/resources/case-studies/${study.slug}`}
          className="inline-flex items-center justify-center size-8 rounded-lg border border-border bg-muted/40 text-muted-foreground group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary transition-all duration-200"
        >
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
