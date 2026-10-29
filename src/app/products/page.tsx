import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { productsConfig } from "@/config/products";
import { Container } from "@/components/layout/Container";
import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductDetails } from "@/components/products/ProductDetails";
import { ProductEcosystem } from "@/components/products/ProductEcosystem";
import { ProductComparison } from "@/components/products/ProductComparison";
import { SuccessCarousel } from "@/components/products/SuccessCarousel";
import { ProductCTA } from "@/components/products/ProductCTA";

const pageUrl = new URL("/products", siteConfig.url).toString();
const title = "Enterprise Business Software Suite | Brainzon";
const description = "Discover Brainzon's business applications: BrainMKT (Marketing), BrainCRM (Sales & Pipeline), BrainERP (Operations & Inventory), and BrainBooks (Accounting & Ledgers)—each supported by dedicated AI assistance.";

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

export default function ProductsPage() {
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
          "name": "Products",
          "item": pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": String(pageUrl) + "/#collection",
      "name": "Brainzon Enterprise Business Applications Suite",
      "url": pageUrl,
      "description": description,
      "publisher": {
        "@type": "Organization",
        "@id": String(siteConfig.url) + "/#organization",
        "name": "Brainzon",
        "url": siteConfig.url
      },
      "mainEntity": {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "numberOfItems": productsConfig.length,
        "itemListElement": productsConfig.map((p, idx) => ({
          "@type": "SoftwareApplication",
          "position": idx + 1,
          "name": p.name,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web-based, Cloud, SaaS",
          "description": p.description,
          "url": String(siteConfig.url) + p.href,
          "featureList": p.features
        }))
      }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\u003c"),
        }}
      />
      <div className="flex flex-col min-h-screen bg-background">
        <ProductsHero />
        <section className="py-24 bg-background relative z-10 border-t border-border/60">
          <Container className="space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
                Product Suite
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Our Core Business Applications
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Explore our four proprietary cloud platforms: BrainMKT, BrainCRM, BrainERP, and BrainBooks—each powered by a dedicated AI agent with enterprise-grade access and human approval controls.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {productsConfig.map((product, idx) => (
                <ProductCard key={product.slug} product={product} index={idx} />
              ))}
            </div>
          </Container>
        </section>
        <ProductDetails />
        <ProductEcosystem />
        <ProductComparison />
        <SuccessCarousel />
        <ProductCTA />
      </div>
    </>
  );
}
