import Link from "next/link";
import Image from "next/image";
import { Insight } from "@/lib/insights";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  insight: Insight;
}

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-border bg-card/25 backdrop-blur-md shadow-card overflow-hidden flex flex-col justify-between",
        "hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300"
      )}
    >
      {/* Featured Image */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-border/40 bg-muted/20">
        <Image
          src={insight.featuredImage}
          alt={insight.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary bg-background/80 border border-primary/20 backdrop-blur-sm shadow-sm">
            {insight.category}
          </span>
        </div>
      </div>

      {/* Content body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Date and Read Time */}
        <div className="flex items-center gap-4 text-[10px] text-muted-foreground mb-3 font-medium">
          <span className="flex items-center gap-1">
            <Calendar size={10} />
            <span>{insight.date}</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock size={10} />
            <span>{insight.readTime}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-2 line-clamp-2">
          {insight.title}
        </h3>

        {/* Subtitle/Excerpt */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
          {insight.subtitle || insight.description}
        </p>

        {/* Tags */}
        {insight.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto mb-6">
            {insight.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-semibold text-muted-foreground/80 px-2 py-0.5 rounded bg-muted/30 border border-border/30"
              >
                #{tag}
              </span>
            ))}
            {insight.tags.length > 3 && (
              <span className="text-[9px] font-semibold text-muted-foreground/60 px-1.5 py-0.5">
                +{insight.tags.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 border-t border-border/30 bg-muted/5 flex items-center justify-between mt-auto">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-foreground">{insight.author}</span>
          <span className="text-[9px] text-muted-foreground mt-0.5">{insight.authorRole || "Architect"}</span>
        </div>

        <Link
          href={`/insights/${insight.slug}`}
          className={cn(
            "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider",
            "text-secondary-foreground bg-secondary hover:bg-secondary/90 transition-all duration-200 shadow-sm"
          )}
        >
          <span>Read More</span>
          <ArrowRight size={10} />
        </Link>
      </div>
    </div>
  );
}
