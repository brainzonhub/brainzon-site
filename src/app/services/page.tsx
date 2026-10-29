import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { servicesConfig } from "@/config/services";
import { getMenuIcon } from "@/components/navigation/menu-icons";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { ServicesHeroDiagram } from "@/components/diagrams/ServicesHeroDiagram";

const pageUrl = new URL("/services", siteConfig.url).toString();
const title = "Enterprise Software & Transformation Services | Brainzon";
const description = "Brainzon provides end-to-end software engineering, cloud migrations, legacy system modernization, and ERP advisory consulting tailored to your enterprise.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ServicesPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteConfig.url
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": pageUrl + "/#collection",
      "name": "Brainzon Enterprise Engineering and Transformation Services",
      "url": pageUrl,
      "description": description,
      "publisher": {
        "@type": "Organization",
        "@id": siteConfig.url + "/#organization",
        "name": "Brainzon",
        "url": siteConfig.url
      },
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": servicesConfig.length,
        "itemListElement": servicesConfig.map((s, idx) => ({
          "@type": "Service",
          "position": idx + 1,
          "name": s.title,
          "description": s.description,
          "url": new URL(s.href, siteConfig.url).toString()
        }))
      }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <div className="relative overflow-hidden bg-background text-foreground">
        <section className="border-b border-border/40 bg-surface/30 py-3 text-xs text-muted-foreground">
          <Container>
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 font-medium">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={12} className="text-muted-foreground/50" />
              <span className="text-foreground">Services</span>
            </nav>
          </Container>
        </section>

        <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-border/40 bg-background">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <span className="badge-accent">End-to-End Enterprise Delivery</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1] mb-4">
                  Full-Lifecycle Engineering & Modernization
                </h1>
                <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  We engineer resilient digital backbones through modern cloud native architectures, strategic ERP implementations, custom software development, and staged zero-downtime legacy modernizations.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/book-demo"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
                  >
                    <span>Request Technical Discovery</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/40 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200"
                  >
                    <span>Talk to an Architect</span>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-6 flex items-center justify-center">
                <ServicesHeroDiagram />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20 bg-surface/20 border-b border-border/40">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">SERVICE OFFERINGS</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Architectural Capabilities Designed for Real-World Demands
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesConfig.map((s) => (
                <div key={s.slug} className="flex flex-col justify-between p-7 rounded-2xl border border-border bg-card shadow-xs hover:border-primary/45 transition-all">
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                      {getMenuIcon(s.icon, { size: 22 })}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.description}</p>
                    <div className="space-y-2 mb-6">
                      {s.capabilities.slice(0, 3).map((c) => (
                        <div key={c.title} className="flex items-start gap-2 text-xs text-foreground/80">
                          <Check size={14} className="text-primary mt-0.5 shrink-0" />
                          <span>{c.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link href={s.href} className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                    <span>Learn more about {s.title}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
