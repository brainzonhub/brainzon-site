import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { TopBar } from "./TopBar";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md transition-colors duration-300">
      {/* Top Header: Contact Information & Social Icons */}
      <TopBar />

      {/* Main Navigation Bar */}
      <div className="border-b border-border/80">
        <Container className="flex h-16 items-center justify-between gap-4 relative">
          {/* Left Side: Brand Logo & Desktop Navigation */}
          <div className="flex items-center gap-6 lg:gap-7 shrink-0">
            <Link 
              href="/" 
              className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg shrink-0 transition-opacity hover:opacity-90"
              aria-label="Brainzon Home"
            >
              <Logo className="h-6 sm:h-[26px] w-auto" />
            </Link>

            {/* Desktop Navigation Menu */}
            <MegaMenu />
          </div>

          {/* Right Side: Interactive Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Book a Demo Prominent Primary CTA Button */}
            <Link
              href="/book-demo"
              className={cn(
                "group relative hidden sm:inline-flex items-center justify-center gap-1.5 h-9 px-5 text-xs lg:text-sm font-semibold rounded-full",
                "text-primary-foreground bg-primary hover:bg-primary/95",
                "shadow-sm hover:shadow-md hover:shadow-primary/25 transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "active:scale-95 cursor-pointer"
              )}
            >
              <span>Book a Demo</span>
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Single Icon Theme Switcher */}
            <ThemeSwitcher />

            {/* Mobile Navigation Drawer Trigger */}
            <MobileMenu />
          </div>
        </Container>
      </div>
    </header>
  );
}
