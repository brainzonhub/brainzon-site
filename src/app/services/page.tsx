import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { servicesConfig } from "@/config/services";
import { getMenuIcon } from "@/components/navigation/menu-icons";
import { ArrowRight, Check } from "lucide-react";

const title = "Professional Services | Brainzon Enterprise Software & Cloud Solutions";
const description = "Explore Brainzon professional services including custom software development, cloud transformations, ERP consulting, and legacy system modernization.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    url: "https://brainzon.com/services",
    type: "website",
    siteName: "Brainzon",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://brainzon.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://brainzon.com/services"
      }
    ]
  };

  const servicesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Brainzon Professional Services Suite",
    "description": "Architecting secure, custom enterprise platforms and scalable multi-cloud setups.",
    "numberOfItems": servicesConfig.length,
    "itemListElement": servicesConfig.map((s, idx) => ({
      "@type": "Service",
      "position": idx + 1,
      "name": s.title,
      "description": s.description,
      "url": `https://brainzon.com${s.href}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />

      <div className="relative overflow-hidden bg-background">
        {/* Decorative background grids & glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,51,77,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

        {/* 1. Hero Section */}
        <section className="py-20 lg:py-28 relative">
          <Container className="text-center max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
              Professional Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1]">
              Enterprise Software &{" "}
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(6,182,212,0.12)] dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                Cloud Transformation
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Breathe life into legacy code, deploy multi-cloud infrastructures, and consult with system integration experts to scale operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/95 shadow-glow-primary transition-all duration-200"
              >
                <span>Book a Demo</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card-opaque text-foreground hover:bg-muted/40 transition-colors duration-200"
              >
                Talk to an Expert
              </Link>
            </div>
          </Container>
        </section>

        {/* 2. Services Grid */}
        <section className="py-16 border-t border-border/60">
          <Container className="space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Our Core Services
              </h2>
              <p className="text-sm text-muted-foreground">
                Deploy modular, structured software development services and strategic cloud transformation consulting.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {servicesConfig.map((service) => (
                <div
                  key={service.slug}
                  className="group relative rounded-3xl border border-border bg-card-opaque p-8 md:p-10 flex flex-col justify-between hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 overflow-hidden"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-2xl border border-primary/20 bg-primary/5 text-primary flex items-center justify-center">
                        {getMenuIcon(service.icon, { size: 24 })}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-0.5 block">
                          Consulting & Delivery
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Capabilities list */}
                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground block">
                        Capabilities & Deliverables
                      </span>
                      <ul className="space-y-2">
                        {service.capabilities.map((c) => (
                          <li key={c.title} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                            <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-foreground">{c.title}</strong>: {c.description}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology chips */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block">
                        Technologies Leveraged
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.technology.map((tech) => (
                          <span key={tech} className="text-[10px] font-semibold bg-muted border border-border/60 text-foreground px-2.5 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <Link
                      href={service.href}
                      className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl border border-border bg-card-opaque text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 3. CTA Section */}
        <section className="py-20 border-t border-border/40 bg-muted/20">
          <Container className="text-center max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Ready to Accelerate Your Transformation Journey?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Schedule an architecture workshop with our solutions specialists to audit your software dependency trees and draw up migration pathways.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/95 shadow-glow-primary transition-all duration-200"
              >
                Book a Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg border border-border bg-card-opaque text-foreground hover:bg-muted/40 transition-colors"
              >
                Contact Solutions Team
              </Link>
            </div>
          </Container>
        </section>

      </div>
    </>
  );
}
