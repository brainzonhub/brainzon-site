"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Server, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { getMenuIcon } from "@/components/navigation/menu-icons";
import type { Product } from "@/config/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  // Map custom borders/glow effects based on the product
  const getGlowStyles = (slug: string) => {
    switch (slug) {
      case "brainai":
        return "hover:border-primary/50 hover:shadow-glow-primary";
      case "brainerp":
        return "hover:border-violet-500/50 hover:shadow-[0_0_25px_rgba(167,139,250,0.25)]";
      case "braincrm":
        return "hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(251,191,36,0.25)]";
      case "brainconnect":
        return "hover:border-secondary/50 hover:shadow-glow-secondary";
      default:
        return "hover:border-primary/50 hover:shadow-glow-primary";
    }
  };

  const getIconColor = (slug: string) => {
    switch (slug) {
      case "brainai":
        return "bg-primary/10 text-primary border-primary/20";
      case "brainerp":
        return "bg-violet-500/10 text-violet-400 border-violet-500/20";
      case "braincrm":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "brainconnect":
        return "bg-secondary/10 text-secondary border-secondary/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative rounded-3xl border border-border bg-card/40 backdrop-blur-md p-8 md:p-10",
        "flex flex-col justify-between overflow-hidden transition-all duration-300",
        getGlowStyles(product.slug)
      )}
    >
      {/* Subtle background glow element */}
      <div className="absolute -top-12 -right-12 size-36 bg-foreground/5 rounded-full blur-2xl group-hover:bg-primary/5 transition-all duration-300 pointer-events-none" />

      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className={cn("size-12 rounded-2xl border flex items-center justify-center transition-colors", getIconColor(product.slug))}>
            {getMenuIcon(product.icon, { size: 24 })}
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
              {product.name}
            </h3>
            <span className="text-xs text-muted-foreground font-medium">Enterprise Platform</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {product.description}
        </p>

        {/* Capabilities / Features */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Capabilities</h4>
          <div className="flex flex-wrap gap-2">
            {product.features.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-muted/50 border border-border/60 text-foreground"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Specific Metadata Fields */}
        <div className="border-t border-border/50 pt-5 mt-4 grid grid-cols-2 gap-4">
          <div>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <Server size={12} className="text-primary" />
              Deployment
            </span>
            <span className="text-xs text-foreground font-medium mt-1 block">
              {product.slug === "brainerp" ? "Cloud, Private, On-Prem" : "Cloud / Hybrid"}
            </span>
          </div>
          <div>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <RefreshCw size={12} className="text-secondary" />
              Integration
            </span>
            <span className="text-xs text-foreground font-medium mt-1 block truncate" title={product.integrations.slice(0, 3).join(", ")}>
              {product.integrations.slice(0, 3).join(", ")}
            </span>
          </div>
        </div>
      </div>

      {/* Button Link */}
      <div className="pt-8">
        <Link
          href={product.href}
          className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl border border-border bg-card-opaque text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-200"
        >
          <span>Explore {product.name}</span>
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
