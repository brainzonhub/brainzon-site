"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Sparkles, CheckCircle2, Boxes, ShieldCheck, Layers, Network, Factory, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationConfig, SubNavItem, AIAgentItem } from "@/config/navigation";
import { getMenuIcon } from "./menu-icons";

export function MegaMenu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [productCategoryTab, setProductCategoryTab] = useState<"applications" | "ai">("applications");
  const [solutionCategoryTab, setSolutionCategoryTab] = useState<string>("Enterprise Platforms");
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const triggerRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleMouseEnter = (category: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveCategory(category);
    // Reset tabs to default whenever entering or switching
    if (category === "Products") {
      setProductCategoryTab("applications");
    }
    if (category === "Solutions") {
      setSolutionCategoryTab("Enterprise Platforms");
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
      setProductCategoryTab("applications");
      setSolutionCategoryTab("Enterprise Platforms");
    }, 180);
  };

  const handleTriggerClick = (category: string) => {
    setActiveCategory((prev) => {
      const next = prev === category ? null : category;
      if (next === "Products") {
        setProductCategoryTab("applications");
      }
      if (next === "Solutions") {
        setSolutionCategoryTab("Enterprise Platforms");
      }
      return next;
    });
  };

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeCategory) {
        const cat = activeCategory;
        setActiveCategory(null);
        setProductCategoryTab("applications");
        setSolutionCategoryTab("Enterprise Platforms");
        triggerRefs.current[cat]?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCategory]);

  // Helper for product badge & icon colors
  const getProductColorClasses = (color?: string) => {
    switch (color) {
      case "cyan":
        return {
          iconBox: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/25 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40",
          tag: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30",
        };
      case "amber":
        return {
          iconBox: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25 group-hover:bg-amber-500/20 group-hover:border-amber-500/40",
          tag: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
        };
      case "violet":
        return {
          iconBox: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/25 group-hover:bg-violet-500/20 group-hover:border-violet-500/40",
          tag: "bg-violet-500/15 text-violet-700 dark:text-violet-300 border-violet-500/30",
        };
      case "emerald":
        return {
          iconBox: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40",
          tag: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
        };
      default:
        return {
          iconBox: "bg-muted text-muted-foreground border-border/40 group-hover:bg-primary/10 group-hover:text-primary",
          tag: "bg-muted text-muted-foreground border-border/40",
        };
    }
  };

  // Helper for solution category icons
  const getSolutionCategoryIcon = (title: string) => {
    switch (title) {
      case "Enterprise Platforms":
        return <Layers size={18} />;
      case "Connected Operations":
        return <Network size={18} />;
      case "By Industry":
      case "Industry Solutions":
        return <Factory size={18} />;
      default:
        return <Building2 size={18} />;
    }
  };

  const activeItem = navigationConfig.find((item) => item.title === activeCategory);

  // Active solution section
  const activeSolutionSection = activeItem?.sections?.find((s) => s.title === solutionCategoryTab) 
    || activeItem?.sections?.[0];

  return (
    <nav
      className="hidden lg:flex items-center gap-1 static"
      onMouseLeave={handleMouseLeave}
      aria-label="Main Enterprise Navigation"
    >
      {/* Navigation Buttons Row */}
      {navigationConfig.map((item) => {
        const hasContent = !!item.items || !!item.sections || !!item.capabilities;
        const isOpen = activeCategory === item.title;

        if (!hasContent) {
          return (
            <Link
              key={item.title}
              href={item.href || "#"}
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50",
                "transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              {item.title}
            </Link>
          );
        }

        return (
          <div key={item.title}>
            <button
              ref={(el) => {
                triggerRefs.current[item.title] = el;
              }}
              type="button"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onClick={() => handleTriggerClick(item.title)}
              aria-expanded={isOpen}
              aria-haspopup="true"
              aria-controls={`menu-${item.title.toLowerCase()}`}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50",
                "transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer",
                isOpen && "text-foreground bg-muted font-semibold shadow-xs"
              )}
            >
              <span>{item.title}</span>
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform duration-200 text-muted-foreground/70",
                  isOpen && "transform rotate-180 text-primary"
                )}
              />
            </button>
          </div>
        );
      })}

      {/* 
        Container-Centered Mega Menu Card:
        Positioned relative to the Header Container so it is ALWAYS centered on screen
        and never cut off on the left or right edges.
      */}
      {activeItem && (
        <div
          id={`menu-${activeItem.title.toLowerCase()}`}
          className={cn(
            "absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 max-w-[calc(100vw-2rem)]",
            (activeItem.title === "Products" || activeItem.title === "Solutions") ? "w-[940px]" : "w-[980px]"
          )}
          onMouseEnter={() => {
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="rounded-2xl border border-border/90 shadow-2xl bg-white dark:bg-card-opaque text-foreground overflow-hidden animate-[fade-in_160ms_ease-out]">
            {/* ═══════════════════════════════════════════════════════════════
                1. PRODUCTS MEGA MENU
                - Left Side: Business Applications & AI Platforms categories
                - Right Side: Business Applications detail (BrainMKT, BrainCRM, BrainERP, BrainBooks)
                  or AI Platforms detail (product-wise AI agents)
               ═══════════════════════════════════════════════════════════════ */}
            {activeItem.title === "Products" && (
              <div className="flex flex-col">
                <div className="flex divide-x divide-border/60">
                  {/* LEFT SIDE: Category Selector (Business Applications & AI Platforms) */}
                  <div className="w-[280px] p-5 bg-slate-50/80 dark:bg-surface flex flex-col justify-between shrink-0">
                    <div>
                      <div className="mb-3 px-1">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">
                          Product Categories
                        </span>
                      </div>

                      {/* 2 Category Selector Cards */}
                      <div className="space-y-2">
                        {/* Category 1: Business Applications (Default) */}
                        <button
                          type="button"
                          onMouseEnter={() => setProductCategoryTab("applications")}
                          onClick={() => setProductCategoryTab("applications")}
                          className={cn(
                            "w-full flex items-start gap-3 p-3 rounded-xl border text-left transition-all duration-150 cursor-pointer",
                            productCategoryTab === "applications"
                              ? "bg-white dark:bg-card-opaque border-primary/40 shadow-xs ring-1 ring-primary/20"
                              : "border-transparent hover:bg-white/60 dark:hover:bg-card-opaque hover:border-border/60"
                          )}
                        >
                          <div
                            className={cn(
                              "flex size-9 items-center justify-center rounded-lg border transition-colors shrink-0",
                              productCategoryTab === "applications"
                                ? "bg-primary/10 text-primary border-primary/25"
                                : "bg-muted text-muted-foreground border-border/40"
                            )}
                          >
                            <Boxes size={18} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h5 className="text-xs font-bold text-foreground">
                                Business Applications
                              </h5>
                              {productCategoryTab === "applications" && (
                                <ArrowRight size={13} className="text-primary shrink-0" />
                              )}
                            </div>
                            <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                              BrainMKT, BrainCRM, BrainERP, BrainBooks
                            </p>
                          </div>
                        </button>

                        {/* Category 2: AI Platforms */}
                        <button
                          type="button"
                          onMouseEnter={() => setProductCategoryTab("ai")}
                          onClick={() => setProductCategoryTab("ai")}
                          className={cn(
                            "w-full flex items-start gap-3 p-3 rounded-xl border text-left transition-all duration-150 cursor-pointer",
                            productCategoryTab === "ai"
                              ? "bg-white dark:bg-card-opaque border-primary/40 shadow-xs ring-1 ring-primary/20"
                              : "border-transparent hover:bg-white/60 dark:hover:bg-card-opaque hover:border-border/60"
                          )}
                        >
                          <div
                            className={cn(
                              "flex size-9 items-center justify-center rounded-lg border transition-colors shrink-0",
                              productCategoryTab === "ai"
                                ? "bg-primary/10 text-primary border-primary/25"
                                : "bg-muted text-muted-foreground border-border/40"
                            )}
                          >
                            <Sparkles size={17} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <h5 className="text-xs font-bold text-foreground">
                                  AI Platforms
                                </h5>
                                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-primary/10 text-primary">
                                  Agents
                                </span>
                              </div>
                              {productCategoryTab === "ai" && (
                                <ArrowRight size={13} className="text-primary shrink-0" />
                              )}
                            </div>
                            <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                              Product-specific AI agents with human review controls
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Bottom link */}
                    <div className="pt-3.5 mt-4 border-t border-border/50">
                      <Link
                        href="/products"
                        onClick={() => setActiveCategory(null)}
                        className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1.5 group"
                      >
                        <span>Explore full ecosystem</span>
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT SIDE: Details View */}
                  <div className="flex-1 p-6 bg-white dark:bg-card-opaque flex flex-col justify-between">
                    {/* VIEW 1: Business Applications Detail (BrainMKT, BrainCRM, BrainERP, BrainBooks) */}
                    {productCategoryTab === "applications" && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-border/60">
                          <div>
                            <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                              Core Business Applications
                            </span>
                            <h4 className="text-sm font-bold text-foreground mt-1">
                              One Connected Enterprise Foundation
                            </h4>
                          </div>
                          <Link
                            href="/products"
                            onClick={() => setActiveCategory(null)}
                            className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                          >
                            <span>View All Products</span>
                            <ArrowRight size={12} />
                          </Link>
                        </div>

                        {/* 2x2 Grid of 4 Core Business Applications */}
                        <div className="grid grid-cols-2 gap-3.5">
                          {activeItem.items?.map((product: SubNavItem) => {
                            const colorStyles = getProductColorClasses(product.color);
                            return (
                              <Link
                                key={product.title}
                                href={product.href}
                                onClick={() => setActiveCategory(null)}
                                className={cn(
                                  "group relative flex items-start gap-3.5 p-3 rounded-xl border border-border/50 hover:border-border hover:bg-slate-50 dark:hover:bg-muted shadow-xs hover:shadow-sm",
                                  "transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                )}
                              >
                                <div
                                  className={cn(
                                    "flex size-10 items-center justify-center rounded-xl border transition-all shrink-0 mt-0.5",
                                    colorStyles.iconBox
                                  )}
                                >
                                  {getMenuIcon(product.iconName, { size: 32 })}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-1">
                                    <div className="flex items-center gap-1.5">
                                      <h5 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                                        {product.title}
                                      </h5>
                                      {product.badge && (
                                        <span
                                          className={cn(
                                            "text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded border",
                                            colorStyles.tag
                                          )}
                                        >
                                          {product.badge}
                                        </span>
                                      )}
                                    </div>
                                    <ArrowRight
                                      size={12}
                                      className="text-muted-foreground/40 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all group-hover:translate-x-0.5 shrink-0"
                                    />
                                  </div>
                                  <p className="text-[11px] font-medium text-foreground/85 line-clamp-1">
                                    {product.subtitle}
                                  </p>
                                  <p className="text-[11px] text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                                    {product.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* VIEW 2: AI Platforms Detail (Product-wise AI Agents) */}
                    {productCategoryTab === "ai" && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-border/60">
                          <div>
                            <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                              Dedicated AI Platforms
                            </span>
                            <h4 className="text-sm font-bold text-foreground mt-1">
                              Product-Specific AI Agents
                            </h4>
                          </div>
                          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium inline-flex items-center gap-1">
                            <ShieldCheck size={13} />
                            Human-in-the-Loop Enforced
                          </span>
                        </div>

                        {/* 2x2 Grid of 4 Product-wise AI Agents */}
                        <div className="grid grid-cols-2 gap-3.5">
                          {activeItem.aiAgents?.map((agent: AIAgentItem) => {
                            const colorStyles = getProductColorClasses(agent.color);
                            return (
                              <Link
                                key={agent.title}
                                href={agent.href}
                                onClick={() => setActiveCategory(null)}
                                className={cn(
                                  "group relative flex items-start gap-3.5 p-3 rounded-xl border border-border/50 hover:border-border hover:bg-slate-50 dark:hover:bg-muted shadow-xs hover:shadow-sm",
                                  "transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                )}
                              >
                                <div
                                  className={cn(
                                    "flex size-10 items-center justify-center rounded-xl border transition-all shrink-0 mt-0.5",
                                    colorStyles.iconBox
                                  )}
                                >
                                  <Sparkles size={18} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-1">
                                    <div className="flex items-center gap-1.5">
                                      <h5 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                                        {agent.title}
                                      </h5>
                                      <span
                                        className={cn(
                                          "text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded border",
                                          colorStyles.tag
                                        )}
                                      >
                                        {agent.product}
                                      </span>
                                    </div>
                                    <ArrowRight
                                      size={12}
                                      className="text-muted-foreground/40 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all group-hover:translate-x-0.5 shrink-0"
                                    />
                                  </div>
                                  <p className="text-[11px] font-medium text-foreground/85 line-clamp-1">
                                    {agent.subtitle}
                                  </p>
                                  <p className="text-[11px] text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                                    {agent.description}
                                  </p>
                                  <div className="mt-2 inline-flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                                    <ShieldCheck size={11} />
                                    <span className="line-clamp-1">{agent.controls}</span>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="px-6 py-2.5 bg-slate-50 dark:bg-surface border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    Human review gates on high-impact actions • Full decision audit trail & data provenance
                  </span>
                  <Link
                    href="/book-demo"
                    onClick={() => setActiveCategory(null)}
                    className="font-semibold text-foreground hover:text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Schedule a live architecture walk-through</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                2. SOLUTIONS MEGA MENU
                - Left Side: Solution Domains (Enterprise Platforms, Connected Operations, Industry Solutions)
                - Right Side: Category Detail View
               ═══════════════════════════════════════════════════════════════ */}
            {activeItem.title === "Solutions" && activeItem.sections && (
              <div className="flex flex-col">
                <div className="flex divide-x divide-border/60">
                  {/* LEFT SIDE: Category Selector (Enterprise Platforms, Connected Operations, Industry Solutions) */}
                  <div className="w-[280px] p-5 bg-slate-50/80 dark:bg-surface flex flex-col justify-between shrink-0">
                    <div>
                      <div className="mb-3 px-1">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">
                          Solution Domains
                        </span>
                      </div>

                      {/* 3 Solution Category Selector Cards */}
                      <div className="space-y-2">
                        {activeItem.sections.map((section) => {
                          const isSelected = (activeSolutionSection?.title === section.title);
                          return (
                            <button
                              key={section.title}
                              type="button"
                              onMouseEnter={() => setSolutionCategoryTab(section.title)}
                              onClick={() => setSolutionCategoryTab(section.title)}
                              className={cn(
                                "w-full flex items-start gap-3 p-3 rounded-xl border text-left transition-all duration-150 cursor-pointer",
                                isSelected
                                  ? "bg-white dark:bg-card-opaque border-primary/40 shadow-xs ring-1 ring-primary/20"
                                  : "border-transparent hover:bg-white/60 dark:hover:bg-card-opaque hover:border-border/60"
                              )}
                            >
                              <div
                                className={cn(
                                  "flex size-9 items-center justify-center rounded-lg border transition-colors shrink-0",
                                  isSelected
                                    ? "bg-primary/10 text-primary border-primary/25"
                                    : "bg-muted text-muted-foreground border-border/40"
                                )}
                              >
                                {getSolutionCategoryIcon(section.title)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <h5 className="text-xs font-bold text-foreground">
                                    {section.title}
                                  </h5>
                                  {isSelected && (
                                    <ArrowRight size={13} className="text-primary shrink-0" />
                                  )}
                                </div>
                                <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug line-clamp-1">
                                  {section.description}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom link */}
                    <div className="pt-3.5 mt-4 border-t border-border/50">
                      <Link
                        href="/solutions"
                        onClick={() => setActiveCategory(null)}
                        className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1.5 group"
                      >
                        <span>Explore all solutions</span>
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT SIDE: Selected Solution Category Detail View */}
                  <div className="flex-1 p-6 bg-white dark:bg-card-opaque flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Category Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-border/60">
                        <div>
                          <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {activeSolutionSection?.title}
                          </span>
                          <h4 className="text-sm font-bold text-foreground mt-1">
                            {activeSolutionSection?.description}
                          </h4>
                        </div>
                        <Link
                          href="/solutions"
                          onClick={() => setActiveCategory(null)}
                          className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                        >
                          <span>All Solutions</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>

                      {/* Detail Items Grid */}
                      <div className={cn(
                        "grid gap-3.5",
                        (activeSolutionSection?.items.length ?? 0) > 3 ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      )}>
                        {activeSolutionSection?.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => setActiveCategory(null)}
                            className={cn(
                              "group relative flex items-start gap-3 p-3 rounded-xl border border-border/50 hover:border-border hover:bg-slate-50 dark:hover:bg-muted shadow-xs hover:shadow-sm",
                              "transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            )}
                          >
                            <div className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0 border border-border/30 mt-0.5">
                              {getMenuIcon(subItem.iconName, { size: 16 })}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <h6 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                                  {subItem.title}
                                </h6>
                                <ArrowRight
                                  size={12}
                                  className="text-muted-foreground/40 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all group-hover:translate-x-0.5 shrink-0"
                                />
                              </div>
                              {subItem.subtitle && (
                                <p className="text-[10px] font-medium text-muted-foreground/80">
                                  {subItem.subtitle}
                                </p>
                              )}
                              <p className="text-[11px] text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                                {subItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Solutions Footer Note */}
                    <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
                      <span>Platform-neutral strategy: We evaluate your requirements without vendor bias.</span>
                      <Link
                        href="/contact"
                        onClick={() => setActiveCategory(null)}
                        className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                      >
                        <span>Book an architecture discovery call</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                3. MODERNIZATION MEGA MENU (3-Column Layout)
               ═══════════════════════════════════════════════════════════════ */}
            {activeItem.title === "Modernization" && activeItem.sections && (
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center pb-3.5 mb-5 border-b border-border/60">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        Zero-Downtime Delivery
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-foreground mt-1">
                      Enterprise Software Engineering & Modernization Services
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      From technical debt reduction to cloud transformation and 6 staged modernization pathways.
                    </p>
                  </div>
                  <Link
                    href="/services"
                    onClick={() => setActiveCategory(null)}
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 group"
                  >
                    <span>All Services</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

                {/* 3 Columns divided by subtle borders */}
                <div className="grid grid-cols-3 divide-x divide-border/60 -mx-3">
                  {activeItem.sections.map((section) => (
                    <div key={section.title} className="px-5 space-y-3">
                      <div>
                        <h5 className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          {section.title}
                        </h5>
                        {section.description && (
                          <p className="text-[11px] text-muted-foreground mt-0.5">
                            {section.description}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        {section.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => setActiveCategory(null)}
                            className={cn(
                              "group flex items-start gap-3 p-2.5 rounded-xl border border-transparent hover:border-border/60 hover:bg-slate-50 dark:hover:bg-muted",
                              "transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            )}
                          >
                            <div className="flex size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0 border border-border/30">
                              {getMenuIcon(subItem.iconName, { size: 15 })}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h6 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                                {subItem.title}
                              </h6>
                              {subItem.subtitle && (
                                <p className="text-[10px] font-medium text-muted-foreground/80">
                                  {subItem.subtitle}
                                </p>
                              )}
                              <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                                {subItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Modernization Footer Note */}
                <div className="mt-5 pt-3.5 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Every modernization engagement includes phased cutover rehearsals with automated fallback.</span>
                  <Link
                    href="/services/modernization"
                    onClick={() => setActiveCategory(null)}
                    className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Explore the 6 modernization pathways</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                4. RESOURCES MEGA MENU (3-Column Layout)
               ═══════════════════════════════════════════════════════════════ */}
            {activeItem.title === "Resources" && activeItem.sections && (
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center pb-3.5 mb-5 border-b border-border/60">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        Knowledge & Governance
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-foreground mt-1">
                      Learn, Company Information & Trust Framework
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Explore technical insights, client transformation benchmarks, and enterprise security policies.
                    </p>
                  </div>
                  <Link
                    href="/resources"
                    onClick={() => setActiveCategory(null)}
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 group"
                  >
                    <span>All Resources</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

                {/* 3 Columns divided by subtle borders */}
                <div className="grid grid-cols-3 divide-x divide-border/60 -mx-3">
                  {activeItem.sections.map((section) => (
                    <div key={section.title} className="px-5 space-y-3">
                      <div>
                        <h5 className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          {section.title}
                        </h5>
                        {section.description && (
                          <p className="text-[11px] text-muted-foreground mt-0.5">
                            {section.description}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        {section.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => setActiveCategory(null)}
                            className={cn(
                              "group flex items-start gap-3 p-2.5 rounded-xl border border-transparent hover:border-border/60 hover:bg-slate-50 dark:hover:bg-muted",
                              "transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            )}
                          >
                            <div className="flex size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0 border border-border/30">
                              {getMenuIcon(subItem.iconName, { size: 15 })}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h6 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                                {subItem.title}
                              </h6>
                              {subItem.subtitle && (
                                <p className="text-[10px] font-medium text-muted-foreground/80">
                                  {subItem.subtitle}
                                </p>
                              )}
                              <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                                {subItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Resources Footer Note */}
                <div className="mt-5 pt-3.5 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Enterprise-grade trust: Zero vendor lock-in, client IP ownership, and auditable models.</span>
                  <Link
                    href="/resources"
                    onClick={() => setActiveCategory(null)}
                    className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>View trust & security standards</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
