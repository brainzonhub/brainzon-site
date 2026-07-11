"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navigationConfig } from "@/config/navigation";
import { getMenuIcon } from "./menu-icons";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<{ [key: string]: boolean }>({});
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  
  const toggleGroup = (title: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap & escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex="0"]'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close when clicking page routing links
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Menu Hamburger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-label="Open primary navigation drawer"
        className={cn(
          "inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
        )}
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleOpen}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-out Drawer */}
            <motion.div
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeInOut" }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-border bg-card shadow-elevated flex flex-col h-full"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Drawer"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-border/60">
                <Link 
                  href="/" 
                  onClick={handleLinkClick}
                  className="inline-flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded"
                >
                  <Logo height={28} />
                </Link>
                <button
                  type="button"
                  onClick={toggleOpen}
                  aria-label="Close navigation drawer"
                  className={cn(
                    "inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                  )}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content / Scrollable Area */}
              <div className="flex-1 overflow-y-auto px-5 py-6 space-y-5">
                <nav className="space-y-3" aria-label="Mobile Navigation Menu">
                  {navigationConfig.map((item) => {
                    const hasSubItems = !!item.items;
                    const isExpanded = !!expandedGroups[item.title];

                    if (!hasSubItems) {
                      return (
                        <Link
                          key={item.title}
                          href={item.href || "#"}
                          onClick={handleLinkClick}
                          className={cn(
                            "block px-3 py-2.5 text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                            "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          )}
                        >
                          {item.title}
                        </Link>
                      );
                    }

                    return (
                      <div key={item.title} className="space-y-1">
                        <button
                          type="button"
                          onClick={() => toggleGroup(item.title)}
                          aria-expanded={isExpanded}
                          className={cn(
                            "w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                            "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          )}
                        >
                          <span>{item.title}</span>
                          <ChevronDown
                            size={16}
                            className={cn(
                              "transition-transform duration-200 text-muted-foreground/60",
                              isExpanded && "transform rotate-180 text-primary"
                            )}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 pr-1 space-y-1"
                            >
                              {item.items?.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  onClick={handleLinkClick}
                                  className={cn(
                                    "flex items-start gap-3 p-2.5 rounded-lg hover:bg-muted/30 group",
                                    "transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                  )}
                                >
                                  <div className="flex size-7 items-center justify-center rounded bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                                    {getMenuIcon(subItem.iconName, { size: 14 })}
                                  </div>
                                  <div>
                                    <h5 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                                      {subItem.title}
                                    </h5>
                                    {item.title === "Products" && (
                                      <p className="text-[10px] text-muted-foreground mt-0.5 leading-normal">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer */}
              <div className="p-5 border-t border-border/60 space-y-4 bg-muted/20">
                <Link
                  href="/book-demo"
                  onClick={handleLinkClick}
                  className={cn(
                    "flex w-full items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground shadow-glow-primary hover:bg-primary/90 transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  )}
                >
                  Book a Demo
                </Link>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                  <span>Theme Preference</span>
                  <ThemeSwitcher />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
