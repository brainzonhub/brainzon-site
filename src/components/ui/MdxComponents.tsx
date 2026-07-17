import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  getSafeExternalRel,
  getSafeMdxUrl,
  isExternalMdxUrl,
} from "@/lib/mdx-security";

const blockedMdxElement = () => null;

function SafeMdxLink({
  href,
  target,
  rel,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  const safeHref = getSafeMdxUrl(href);

  if (!safeHref) {
    return <span {...props}>{children}</span>;
  }

  const safeRel = getSafeExternalRel(target, rel);

  return (
    <a href={safeHref} target={target} rel={safeRel} {...props}>
      {children}
    </a>
  );
}

// --- CTAButton Component ---
interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
}

export function CTAButton({ href, children }: CTAButtonProps) {
  const safeHref = getSafeMdxUrl(href);
  const buttonClassName = cn(
    "inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "hover:scale-[1.02]",
  );

  return (
    <div className="my-8 flex justify-start">
      {safeHref ? (
        <Link
          href={safeHref}
          className={buttonClassName}
          {...(isExternalMdxUrl(safeHref)
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </Link>
      ) : (
        <span className={buttonClassName}>{children}</span>
      )}
    </div>
  );
}

// --- InsightQuote Component ---
interface InsightQuoteProps {
  author?: string;
  role?: string;
  children: React.ReactNode;
}

export function InsightQuote({ author, role, children }: InsightQuoteProps) {
  return (
    <figure className="my-10 p-6 md:p-8 rounded-2xl border-l-4 border-primary bg-card/30 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-4 right-6 text-primary/10 pointer-events-none">
        <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <blockquote className="text-base md:text-lg italic font-medium text-foreground leading-relaxed">
        &ldquo;{children}&rdquo;
      </blockquote>
      {(author || role) && (
        <figcaption className="mt-4 flex items-center gap-2 text-xs font-bold text-foreground">
          <span>{author}</span>
          {role && (
            <>
              <span className="text-muted-foreground/60">•</span>
              <span className="text-muted-foreground font-normal">{role}</span>
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}

// --- InsightChart Component ---
interface InsightChartProps {
  type?: "bar" | "stat";
  title: string;
  labels?: string[];
  values?: number[];
}

export function InsightChart({ type = "bar", title, labels = [], values = [] }: InsightChartProps) {
  const maxValue = Math.max(...values, 1);

  return (
    <div className="my-8 p-6 sm:p-8 rounded-2xl border border-border bg-card/20 backdrop-blur-md">
      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">
        {title}
      </h4>

      {type === "bar" ? (
        <div className="space-y-4">
          {labels.map((label, index) => {
            const val = values[index] || 0;
            const percentage = (val / maxValue) * 100;
            return (
              <div key={label} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-foreground">{label}</span>
                  <span className="text-primary">{val}</span>
                </div>
                <div className="h-3 w-full rounded-full bg-muted overflow-hidden relative border border-border/40">
                  <div
                    className="h-full rounded-full bg-brand-gradient transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {labels.map((label, index) => (
            <div key={label} className="p-4 rounded-xl border border-border/40 bg-muted/20">
              <span className="text-[10px] uppercase font-bold text-muted-foreground">{label}</span>
              <div className="text-xl font-extrabold text-foreground mt-1">
                {values[index] || 0}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- InsightImage Component ---
interface InsightImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function InsightImage({ src, alt, caption }: InsightImageProps) {
  const safeSrc = getSafeMdxUrl(src, {
    allowHttp: false,
    allowMailto: false,
    allowTel: false,
  });

  if (!safeSrc) return null;

  return (
    <figure className="my-8 rounded-2xl overflow-hidden border border-border bg-card/10 backdrop-blur-sm p-2">
      <div className="relative aspect-video w-full rounded-xl overflow-hidden">
        <Image
          src={safeSrc}
          alt={alt}
          fill
          sizes="(max-width: 1200px) 100vw, 800px"
          className="object-cover transition-transform duration-500 hover:scale-[1.01]"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-muted-foreground leading-normal">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// --- HighlightBlock Component ---
interface HighlightBlockProps {
  type?: "info" | "warning" | "success";
  title: string;
  children: React.ReactNode;
}

export function HighlightBlock({ type = "info", title, children }: HighlightBlockProps) {
  const getStyles = () => {
    switch (type) {
      case "warning":
        return {
          bg: "bg-brand-red-light/5 dark:bg-brand-red-dark/10 border-brand-red-light/30 dark:border-brand-red-dark/40",
          titleColor: "text-secondary",
          icon: <AlertTriangle size={18} className="text-secondary shrink-0 mt-0.5" />,
        };
      case "success":
        return {
          bg: "bg-green-500/5 border-green-500/25",
          titleColor: "text-green-500",
          icon: <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />,
        };
      case "info":
      default:
        return {
          bg: "bg-brand-cyan-light/5 dark:bg-brand-cyan-dark/10 border-brand-cyan-light/30 dark:border-brand-cyan-dark/40",
          titleColor: "text-primary",
          icon: <Info size={18} className="text-primary shrink-0 mt-0.5" />,
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={cn("my-6 p-5 rounded-2xl border flex gap-3.5", styles.bg)}>
      {styles.icon}
      <div className="space-y-1">
        <h5 className={cn("text-sm font-bold", styles.titleColor)}>{title}</h5>
        <div className="text-xs text-muted-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

// MdxComponents Map to pass to MDXRemote
export const MdxComponents = {
  CTAButton,
  InsightQuote,
  InsightChart,
  InsightImage,
  HighlightBlock,
  a: SafeMdxLink,
  iframe: blockedMdxElement,
  object: blockedMdxElement,
  embed: blockedMdxElement,
  script: blockedMdxElement,
  form: blockedMdxElement,
  base: blockedMdxElement,
  meta: blockedMdxElement,
  // Also pass native overrides if desired
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border/40 pb-2" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-lg sm:text-xl font-bold text-foreground mt-6 mb-3" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p className="text-sm md:text-base text-muted-foreground leading-relaxed my-4" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-5 my-4 space-y-2 text-sm md:text-base text-muted-foreground" {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-5 my-4 space-y-2 text-sm md:text-base text-muted-foreground" {...props} />
  ),
  pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
    <pre className="p-4 rounded-xl border border-border bg-muted/40 font-mono text-xs overflow-x-auto my-6 text-foreground" {...props} />
  ),
  code: (props: React.ComponentPropsWithoutRef<"code">) => (
    <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs text-foreground" {...props} />
  ),
  table: (props: React.ComponentPropsWithoutRef<"table">) => (
    <div className="overflow-x-auto my-6 border border-border rounded-xl">
      <table className="w-full text-left text-xs border-collapse" {...props} />
    </div>
  ),
  thead: (props: React.ComponentPropsWithoutRef<"thead">) => <thead className="bg-muted/40 border-b border-border text-foreground font-bold uppercase tracking-wider text-[10px]" {...props} />,
  tbody: (props: React.ComponentPropsWithoutRef<"tbody">) => <tbody className="divide-y divide-border/60" {...props} />,
  tr: (props: React.ComponentPropsWithoutRef<"tr">) => <tr className="hover:bg-muted/10 transition-colors" {...props} />,
  th: (props: React.ComponentPropsWithoutRef<"th">) => <th className="px-4 py-3 font-semibold" {...props} />,
  td: (props: React.ComponentPropsWithoutRef<"td">) => <td className="px-4 py-3 text-muted-foreground" {...props} />,
};
