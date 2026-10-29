"use client";



import { useState, useEffect, useRef } from "react";

import Link from "next/link";

import { Mail } from "lucide-react";

import { Container } from "@/components/layout/Container";

import { cn } from "@/lib/utils";



function WhatsAppIcon({ className }: { className?: string }) {

  return (

    <svg className={className} viewBox="0 0 24 24" fill="currentColor">

      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />

    </svg>

  );

}



function FacebookIcon({ className }: { className?: string }) {

  return (

    <svg className={className} viewBox="0 0 24 24" fill="currentColor">

      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />

    </svg>

  );

}



function InstagramIcon({ className }: { className?: string }) {

  return (

    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />

      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />

    </svg>

  );

}



function YouTubeIcon({ className }: { className?: string }) {

  return (

    <svg className={className} viewBox="0 0 24 24" fill="currentColor">

      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />

    </svg>

  );

}



function LinkedInIcon({ className }: { className?: string }) {

  return (

    <svg className={className} viewBox="0 0 24 24" fill="currentColor">

      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M5.07 18.5h2.79v-8.37H5.07v8.37z" />

    </svg>

  );

}



function XIcon({ className }: { className?: string }) {

  return (

    <svg className={className} viewBox="0 0 24 24" fill="currentColor">

      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />

    </svg>

  );

}



function GitHubIcon({ className }: { className?: string }) {

  return (

    <svg className={className} viewBox="0 0 24 24" fill="currentColor">

      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />

    </svg>

  );

}



export function TopBar() {

  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);



  useEffect(() => {

    const handleScroll = () => {

      const currentScrollY = window.scrollY;



      // Always show at top of page

      if (currentScrollY <= 15) {

        setIsVisible(true);

      } else if (currentScrollY > lastScrollY.current + 5) {

        // Scrolling down -> hide TopBar

        setIsVisible(false);

      } else if (currentScrollY < lastScrollY.current - 10) {

        // Scrolling up -> show TopBar

        setIsVisible(true);

      }



      lastScrollY.current = currentScrollY;

    };



    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);



  return (

    <div

      className={cn(

        "w-full overflow-hidden transition-all duration-300 ease-in-out",

        isVisible

          ? "max-h-12 opacity-100 translate-y-0"

          : "max-h-0 opacity-0 -translate-y-full pointer-events-none"

      )}

    >

      <div className="w-full border-b border-purple-200/60 dark:border-purple-900/40 bg-purple-50 dark:bg-purple-950/40 text-muted-foreground text-xs transition-colors">

      <Container className="flex h-9 items-center justify-between gap-4">

        {/* Left Side: Contact Information (WhatsApp & Email) */}

        <div className="flex items-center gap-3">

          {/* WhatsApp */}

          <a
            href="https://wa.me/8801343448074"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs hover:text-foreground transition-colors group"
            aria-label="Chat with Brainzon on WhatsApp"
          >
            <WhatsAppIcon className="size-3 text-emerald-500 transition-colors" />
            <span>WhatsApp</span>
          </a>



          <span className="text-border/70 hidden sm:inline" aria-hidden="true">|</span>



          {/* Email */}

          <a

            href="mailto:info@brainzon.com"

            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs hover:text-foreground transition-colors group"

            aria-label="Email Brainzon"

          >

            <Mail size={12} className="text-muted-foreground group-hover:text-primary transition-colors" />

            <span>info@brainzon.com</span>

          </a>

        </div>



        {/* Right Side: Quick Portal Link & Social Icons */}

        <div className="flex items-center gap-3">

          {/* Quick link: Advisory */}

          <Link

            href="/contact"

            className="hidden md:inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-primary transition-colors font-medium"

          >

            <span>Enterprise Advisory</span>

          </Link>



          <span className="text-border/70 hidden md:inline" aria-hidden="true">|</span>



          {/* Social Icons Row */}

          <div className="flex items-center gap-1 sm:gap-1.5" aria-label="Social media links">

            <a

              href="https://facebook.com"

              target="_blank"

              rel="noopener noreferrer"

              aria-label="Facebook"

              className="p-1 rounded text-muted-foreground hover:text-primary hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"

            >

              <FacebookIcon className="size-3.5" />

            </a>

            <a

              href="https://instagram.com"

              target="_blank"

              rel="noopener noreferrer"

              aria-label="Instagram"

              className="p-1 rounded text-muted-foreground hover:text-primary hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"

            >

              <InstagramIcon className="size-3.5" />

            </a>

            <a

              href="https://youtube.com"

              target="_blank"

              rel="noopener noreferrer"

              aria-label="YouTube"

              className="p-1 rounded text-muted-foreground hover:text-primary hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"

            >

              <YouTubeIcon className="size-3.5" />

            </a>

            <a

              href="https://linkedin.com"

              target="_blank"

              rel="noopener noreferrer"

              aria-label="LinkedIn"

              className="p-1 rounded text-muted-foreground hover:text-primary hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"

            >

              <LinkedInIcon className="size-3.5" />

            </a>

            <a

              href="https://x.com"

              target="_blank"

              rel="noopener noreferrer"

              aria-label="X (formerly Twitter)"

              className="p-1 rounded text-muted-foreground hover:text-primary hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"

            >

              <XIcon className="size-3.5" />

            </a>

            <a

              href="https://github.com"

              target="_blank"

              rel="noopener noreferrer"

              aria-label="GitHub"

              className="p-1 rounded text-muted-foreground hover:text-primary hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"

            >

              <GitHubIcon className="size-3.5" />

            </a>

          </div>

        </div>

      </Container>

      </div>

    </div>

  );

}

