import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { productsConfig } from "@/config/products";
import { ProductHero } from "@/components/sections/ProductHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { DemoCTA } from "@/components/sections/DemoCTA";
import { MKTHeroDiagram } from "@/components/diagrams/MKTHeroDiagram";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

const pageUrl = new URL("/products/brainmkt", siteConfig.url).toString();
const title = "BrainMKT | Marketing Management Software";
const description = "Plan marketing campaigns, coordinate multi-channel content workflows, segment target audiences, and automate CRM lead handoff with BrainMKT and dedicated AI assistance.";

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

export default function BrainMKTPage() {
  const product = productsConfig.find((item) => item.slug === "brainmkt");
  if (!product) {
    notFound();
  }

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
          "item": siteConfig.url + "/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": product.name,
          "item": pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": pageUrl + "/#software",
      "name": product.name,
      "headline": product.headline,
      "description": product.description,
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "MarketingApplication",
      "operatingSystem": "Web-based, Cloud, SaaS",
      "url": pageUrl,
      "publisher": {
        "@type": "Organization",
        "@id": siteConfig.url + "/#organization",
        "name": "Brainzon",
        "url": siteConfig.url
      },
      "featureList": product.features,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Custom enterprise deployment and consultation"
      }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <section className="border-b border-border/40 bg-surface/30 py-3 text-xs text-muted-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} className="text-muted-foreground/50" />
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight size={12} className="text-muted-foreground/50" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      <ProductHero 
        name={product.name} 
        headline={product.headline} 
        highlight={product.highlight}
        description={product.description} 
        icon={product.icon} 
        rightElement={<MKTHeroDiagram />}
      />

      <FeatureGrid 
        features={product.detailedFeatures} 
        productName={product.name} 
      />

      <ArchitectureDiagram 
        architecture={product.architecture} 
      />

      <IntegrationSection 
        integrations={product.integrations} 
        productName={product.name} 
      />

      <DemoCTA />
    </div>
  );
}