import Link from "next/link";
import { BlogPost } from "@/config/resources";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div
      className={cn(
        "group relative p-6 sm:p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-md shadow-card",
        "hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col justify-between"
      )}
    >
      <div>
        {/* Category & Read time */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground">
            <Clock size={10} />
            <span>{post.readTime}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-muted-foreground leading-relaxed mb-6">
          {post.excerpt}
        </p>
      </div>

      {/* Author & Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border/40 mt-auto">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-foreground">{post.author}</span>
          <span className="text-[9px] text-muted-foreground flex items-center gap-1.5 mt-0.5">
            <Calendar size={8} />
            <span>{post.date}</span>
          </span>
        </div>
        <Link
          href={`/resources/blog/${post.slug}`}
          className="inline-flex items-center justify-center size-8 rounded-lg border border-border bg-muted/40 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-200"
        >
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
