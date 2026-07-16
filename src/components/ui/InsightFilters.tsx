"use client";

import { useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { 
  Search, 
  X, 
  Filter, 
  Database, 
  Users, 
  Cpu, 
  GitBranch, 
  RefreshCw, 
  Layers, 
  FileText 
} from "lucide-react";
import { cn } from "@/lib/utils";

function getCategoryIcon(category: string) {
  switch (category.toLowerCase()) {
    case "erp":
      return <Database size={13} />;
    case "crm":
      return <Users size={13} />;
    case "ai":
      return <Cpu size={13} />;
    case "integration":
      return <GitBranch size={13} />;
    case "modernization":
      return <RefreshCw size={13} />;
    case "saas":
      return <Layers size={13} />;
    default:
      return <FileText size={13} />;
  }
}

interface InsightFiltersProps {
  categories: string[];
  tags: string[];
  className?: string;
}

export function InsightFilters({ categories, tags, className }: InsightFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const activeCategory = searchParams.get("category") || "";
  const activeTag = searchParams.get("tag") || "";
  const searchQuery = searchParams.get("search") || "";

  const updateFilters = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Reset page if filters change
    params.delete("page");

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilters({ search: e.target.value });
  };

  const handleCategorySelect = (category: string) => {
    const newVal = activeCategory === category ? null : category;
    updateFilters({ category: newVal });
  };

  const handleTagSelect = (tag: string) => {
    const newVal = activeTag === tag ? null : tag;
    updateFilters({ tag: newVal });
  };

  const handleClearFilters = () => {
    updateFilters({ category: null, tag: null, search: null });
  };

  const hasActiveFilters = activeCategory || activeTag || searchQuery;

  return (
    <aside className={cn("space-y-6 lg:sticky lg:top-24", className)}>
      {/* Search Bar */}
      <div className="space-y-2">
        <label htmlFor="insight-search" className="text-xs font-bold uppercase tracking-wider text-foreground">
          Search Insights
        </label>
        <div className="relative">
          <input
            id="insight-search"
            type="text"
            placeholder="Type keyword..."
            value={searchQuery}
            onChange={handleSearchChange}
            className={cn(
              "w-full rounded-lg border border-border bg-card/40 pl-9 pr-4 py-2.5 text-xs text-foreground placeholder-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all duration-200"
            )}
          />
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          {searchQuery && (
            <button
              onClick={() => updateFilters({ search: null })}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-foreground">
            Categories
          </span>
          {activeCategory && (
            <button
              onClick={() => updateFilters({ category: null })}
              className="text-[10px] text-primary hover:underline font-semibold"
            >
              Reset
            </button>
          )}
        </div>
        <div className="flex flex-col gap-1">
          {categories.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategorySelect(category)}
                className={cn(
                  "w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium border transition-all duration-200 flex items-center justify-between",
                  isSelected
                    ? "border-primary bg-primary/10 text-primary font-semibold"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/40"
                )}
              >
                <div className="flex items-center gap-2">
                  <span className={cn(isSelected ? "text-primary" : "text-muted-foreground/80")}>
                    {getCategoryIcon(category)}
                  </span>
                  <span>{category}</span>
                </div>
                {isSelected && <X size={10} />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tags */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-foreground">
            Popular Tags
          </span>
          {activeTag && (
            <button
              onClick={() => updateFilters({ tag: null })}
              className="text-[10px] text-primary hover:underline font-semibold"
            >
              Reset
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => {
            const isSelected = activeTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagSelect(tag)}
                className={cn(
                  "px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all duration-200 border",
                  isSelected
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border bg-card/25 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                )}
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Clear All Filters Button */}
      {hasActiveFilters && (
        <button
          onClick={handleClearFilters}
          className={cn(
            "w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-border/80 bg-muted/40 text-xs font-semibold text-foreground hover:bg-muted hover:text-primary transition-all duration-200",
            isPending && "opacity-60 pointer-events-none"
          )}
        >
          <Filter size={12} />
          <span>Clear Filters</span>
        </button>
      )}

      {/* Pending transition status loader */}
      {isPending && (
        <div className="text-[10px] text-muted-foreground animate-pulse text-center">
          Filtering insights...
        </div>
      )}
    </aside>
  );
}
