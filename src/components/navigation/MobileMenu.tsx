"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight, Boxes } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { navigationConfig, SubNavItem } from "@/config/navigation";
import { getMenuIcon } from "./menu-icons";
import { ThemeSwitcher } from "@/components/theme-switcher";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}


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

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
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
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-label="Open primary navigation drawer"
        className={cn(
          "inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors cursor-pointer"
        )}
      >
        <Menu size={24} />
      </button>

      {isOpen && mounted && createPortal(
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            onClick={toggleOpen}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          <div
            ref={drawerRef}
            className="fixed inset-y-0 right-0 z-[101] w-full max-w-sm border-l border-border bg-background shadow-2xl flex flex-col h-[100dvh] overflow-hidden animate-[slide-in-from-right_250ms_ease-in-out]"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Drawer"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border/60">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="inline-flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded"
              >
                <Logo height={24} />
              </Link>
              <button
                type="button"
                onClick={toggleOpen}
                aria-label="Close navigation drawer"
                className={cn(
                  "inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors cursor-pointer"
                )}
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable menu content */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-5 space-y-4">
              <nav className="space-y-1.5" aria-label="Mobile Navigation Menu">
                {navigationConfig.map((item) => {
                  const hasSubItems = !!item.items || !!item.sections || !!item.capabilities || !!item.aiAgents;
                  const isExpanded = !!expandedGroups[item.title];

                  if (!hasSubItems) {
                    return (
                      <Link
                        key={item.title}
                        href={item.href || "#"}
                        onClick={handleLinkClick}
                        className={cn(
                          "block px-3 py-2.5 text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                          "transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                          "w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-lg text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                          "transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer",
                          isExpanded && "text-foreground bg-muted/50"
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

                      {isExpanded && (
                        <div className="overflow-hidden pl-3 pr-1 py-1 space-y-3 border-l border-border/50 ml-3">
                          {/* Dedicated View for Products: Business Applications */}
                          {item.title === "Products" ? (
                            <div className="space-y-1">
                              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/90 px-2.5 flex items-center gap-1.5">
                                <Boxes size={12} className="text-primary" />
                                <span>Core Business Applications</span>
                              </p>
                              {item.items?.map((subItem: SubNavItem) => {
                                const colorStyles = getProductColorClasses(subItem.color);
                                return (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    onClick={handleLinkClick}
                                    className={cn(
                                      "flex items-start gap-3 p-2.5 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60 group",
                                      "transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    )}
                                  >
                                    <div
                                      className={cn(
                                        "flex size-10 items-center justify-center rounded-xl border transition-all shrink-0 mt-0.5",
                                        colorStyles.iconBox
                                      )}
                                    >
                                      {getMenuIcon(subItem.iconName, { size: 28 })}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between gap-1">
                                        <div className="flex items-center gap-1.5">
                                          <h5 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                                            {subItem.title}
                                          </h5>
                                          {subItem.badge && (
                                            <span
                                              className={cn(
                                                "text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded border",
                                                colorStyles.tag
                                              )}
                                            >
                                              {subItem.badge}
                                            </span>
                                          )}
                                        </div>
                                        <ArrowRight
                                          size={12}
                                          className="text-muted-foreground/40 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all group-hover:translate-x-0.5 shrink-0"
                                        />
                                      </div>
                                      {subItem.subtitle && (
                                        <p className="text-[11px] font-medium text-foreground/80 line-clamp-1 mt-0.5">
                                          {subItem.subtitle}
                                        </p>
                                      )}
                                      <p className="text-[10px] text-muted-foreground line-clamp-2 mt-0.5 leading-relaxed">
                                        {subItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          ) : (<>
                              {/* Render regular direct items */}
                              {item.items?.map((subItem: SubNavItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  onClick={handleLinkClick}
                                  className={cn(
                                    "flex items-start gap-3 p-2.5 rounded-lg hover:bg-muted/40 group",
                                    "transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                  )}
                                >
                                  <div className="flex size-7 items-center justify-center rounded-lg bg-muted/60 border border-border/40 shrink-0">
                                    {getMenuIcon(subItem.iconName, { size: 14 })}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h5 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                                      {subItem.title}
                                    </h5>
                                    <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                                      {subItem.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}

                              {/* Render regular sectioned items */}
                              {item.sections?.map((section) => (
                                <div key={section.title} className="pt-2 space-y-1">
                                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 px-2.5">
                                    {section.title}
                                  </p>
                                  {section.items.map((subItem) => (
                                    <Link
                                      key={subItem.title}
                                      href={subItem.href}
                                      onClick={handleLinkClick}
                                      className={cn(
                                        "flex items-start gap-3 p-2 rounded-lg hover:bg-muted/40 group",
                                        "transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                      )}
                                    >
                                      <div className="flex size-7 items-center justify-center rounded-lg bg-muted/60 border border-border/40 shrink-0">
                                        {getMenuIcon(subItem.iconName, { size: 14 })}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h6 className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                                          {subItem.title}
                                        </h6>
                                        <p className="text-[10px] text-muted-foreground line-clamp-1">
                                          {subItem.description}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </>
                          )}

                          {/* Link to view overview page */}
                          {item.href && (
                            <div className="pt-2 px-2 border-t border-border/40">
                              <Link
                                href={item.href}
                                onClick={handleLinkClick}
                                className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 group"
                              >
                                <span>View all {item.title.toLowerCase()}</span>
                                <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                              </Link>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer with Actions */}
            <div className="p-4 sm:p-5 border-t border-border/60 bg-muted/20 space-y-3">
              <div className="flex items-center gap-2">
                <Link
                  href="/book-demo"
                  onClick={handleLinkClick}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-150",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                >
                  <span>Book a Demo</span>
                  <ArrowRight size={14} />
                </Link>
                <div className="shrink-0">
                  <ThemeSwitcher />
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-1 border-t border-border/50 text-[11px] text-muted-foreground">
                <div className="flex items-center justify-between">
                  <a
                    href="https://wa.me/8801557253788"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-foreground bg-surface/80 hover:bg-surface border border-border/60 transition-colors font-medium"
                    title="Chat on WhatsApp"
                  >
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <WhatsAppIcon className="size-3.5 fill-emerald-500" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="mailto:info@brainzon.com"
                    className="hover:text-foreground transition-colors"
                  >
                    info@brainzon.com
                  </a>
                </div>
                <div className="text-center">
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Need help? Contact our enterprise advisors &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
