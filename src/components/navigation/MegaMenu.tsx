"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navigationConfig } from "@/config/navigation";
import { getMenuIcon } from "./menu-icons";

export function MegaMenu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const triggerRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleMouseEnter = (category: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 150); // Small delay to prevent accidental closing
  };

  const handleTriggerClick = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeCategory) {
        setActiveCategory(null);
        // Focus the trigger that opened it
        triggerRefs.current[activeCategory]?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCategory]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!activeCategory) return;
      
      const activeMenu = menuRefs.current[activeCategory];
      const activeTrigger = triggerRefs.current[activeCategory];
      
      if (
        activeMenu &&
        !activeMenu.contains(e.target as Node) &&
        activeTrigger &&
        !activeTrigger.contains(e.target as Node)
      ) {
        setActiveCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeCategory]);

  return (
    <nav 
      className="hidden lg:flex items-center gap-1"
      onMouseLeave={handleMouseLeave}
      aria-label="Main Enterprise Navigation"
    >
      {navigationConfig.map((item) => {
        const hasSubItems = !!item.items;
        const isOpen = activeCategory === item.title;

        if (!hasSubItems) {
          return (
            <Link
              key={item.title}
              href={item.href || "#"}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground",
                "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              {item.title}
            </Link>
          );
        }

        return (
          <div
            key={item.title}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.title)}
          >
            <button
              ref={(el) => { triggerRefs.current[item.title] = el; }}
              type="button"
              onClick={() => handleTriggerClick(item.title)}
              aria-expanded={isOpen}
              aria-haspopup="true"
              aria-controls={`menu-${item.title.toLowerCase()}`}
              className={cn(
                "inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground",
                "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isOpen && "text-foreground bg-muted/50"
              )}
            >
              <span>{item.title}</span>
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform duration-300",
                  isOpen && "transform rotate-180 text-primary"
                )}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id={`menu-${item.title.toLowerCase()}`}
                  ref={(el) => { menuRefs.current[item.title] = el; }}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 rounded-xl border border-border shadow-card bg-card/95 backdrop-blur-md",
                    "p-6 transition-all duration-300",
                    item.title === "Products" ? "w-[680px]" : "w-[300px]"
                  )}
                >
                  {/* Glowing background accent inside dropdown */}
                  <div className="absolute inset-0 -z-10 bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-60 rounded-xl pointer-events-none" />

                  {item.title === "Products" ? (
                    // Mega menu layout for Products
                    <div>
                      <div className="flex justify-between items-center pb-4 mb-4 border-b border-border/60">
                        <div>
                          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">
                            Brainzon Product Ecosystem
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Enterprise-grade SaaS & platform solutions for digital scale
                          </p>
                        </div>
                        <Link
                          href="/products"
                          onClick={() => setActiveCategory(null)}
                          className="text-xs font-medium text-secondary hover:text-secondary-foreground hover:underline inline-flex items-center gap-1"
                        >
                          <span>All Products</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => setActiveCategory(null)}
                            className={cn(
                              "group flex items-start gap-4 p-3 rounded-lg border border-transparent hover:border-border/80 hover:bg-muted/30 hover:shadow-glow-primary",
                              "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            )}
                          >
                            <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                              {getMenuIcon(subItem.iconName, { size: 20 })}
                            </div>
                            <div>
                              <h5 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                {subItem.title}
                              </h5>
                              <p className="text-xs text-muted-foreground mt-1 leading-normal">
                                {subItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Dropdown layout for Solutions, Company, Resources
                    <div className="flex flex-col gap-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          onClick={() => setActiveCategory(null)}
                          className={cn(
                            "group flex items-center gap-3 p-2.5 rounded-lg border border-transparent hover:border-border/60 hover:bg-muted/40",
                            "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          )}
                        >
                          <div className="flex size-8 items-center justify-center rounded bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                            {getMenuIcon(subItem.iconName, { size: 16 })}
                          </div>
                          <div>
                            <h5 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                              {subItem.title}
                            </h5>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
