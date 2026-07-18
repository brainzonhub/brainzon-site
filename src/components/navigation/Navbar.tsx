import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border transition-colors duration-300">
      {/* Glassmorphic background layer (avoids making header a containing block for fixed children) */}
      <div className="absolute inset-0 -z-10 bg-background/80 backdrop-blur-md" />
      <Container className="flex h-16 items-center justify-between relative">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg py-1"
        >
          <Logo height={32} />
        </Link>

        {/* Desktop Navigation */}
        <MegaMenu />

        {/* Action Elements / Right Section */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher - Desktop Only */}
          <ThemeSwitcher className="hidden sm:inline-flex" />

          {/* CTA - Desktop Only */}
          <Link
            href="/book-demo"
            className={cn(
              "hidden md:inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
          >
            Book a Demo
          </Link>

          {/* Mobile Navigation Drawer Trigger */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
