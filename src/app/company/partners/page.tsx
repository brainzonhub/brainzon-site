import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { companyConfig } from "@/config/company";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Handshake } from "lucide-react";
import Link from "next/link";

const pageUrl = new URL("/company/partners", siteConfig.url).toString();
const title = "Partner Ecosystem & Global Collaboration | Brainzon";
const description = "Discover Brainzon's global partner ecosystem. We collaborate across enterprise cloud platforms, technology integrators, and software vendors.";

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

export default function PartnersPage() {
  const { partners } = companyConfig;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.url },
        { "@type": "ListItem", "position": 2, "name": "Partners", "item": pageUrl }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-border/40 bg-background">
        <Container>
          <div className="max-w-4xl flex flex-col items-start text-left">
            <span className="badge-accent">Collaborative Ecosystem</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1] mb-4">
              Partner Ecosystem
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Brainzon collaborates with leading software providers, cloud infrastructures, and technology ecosystems to deliver unified enterprise operations.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-surface/20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Collaboration Streams</h2>
            <p className="mt-3 text-sm text-muted-foreground">Collaborating with leading cloud infrastructure providers and specialized integration networks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partners.map((partner) => (
              <div key={partner.name} className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Handshake size={20} />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase border border-border/60 px-2 py-0.5 rounded-full bg-surface">
                      {partner.tier}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{partner.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-glow-primary"
            >
              <span>Explore Partnership Opportunities</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
