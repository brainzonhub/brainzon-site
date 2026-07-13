import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { productsConfig } from "@/config/products";
import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductDetails } from "@/components/products/ProductDetails";
import { ProductEcosystem } from "@/components/products/ProductEcosystem";
import { ProductComparison } from "@/components/products/ProductComparison";
import { SuccessCarousel } from "@/components/products/SuccessCarousel";
import { ProductCTA } from "@/components/products/ProductCTA";

// Server-side SEO Metadata
export const metadata: Metadata = {
  title: "Products | Brainzon Enterprise Software Solutions",
  description: "Discover Brainzon enterprise software products including BrainERP, BrainCRM, BrainAI, and BrainConnect, engineered for digital transformation, ERP/CRM integration, AI automation, and enterprise modernization.",
  openGraph: {
    title: "Brainzon Enterprise Software Ecosystem",
    description: "Unified platforms for ERP, CRM, AI, and system integration—engineered for scale, efficiency, and growth.",
    url: "https://brainzon.com/products",
    type: "website",
    siteName: "Brainzon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brainzon Enterprise Software Ecosystem",
    description: "Unified platforms for ERP, CRM, AI, and system integration.",
  },
};

export default function ProductsPage() {
  // Structured Breadcrumb Schema
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
        "name": "Products",
        "item": "https://brainzon.com/products"
      }
    ]
  };

  // Structured Product Schema
  const productSuiteSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Brainzon Enterprise Software Suite",
    "description": "Unified platforms for ERP, CRM, AI, and system integration—engineered for scale, efficiency, and growth.",
    "numberOfItems": 4,
    "itemListElement": productsConfig.map((p, idx) => ({
      "@type": "Product",
      "position": idx + 1,
      "name": p.name,
      "description": p.description,
      "url": `https://brainzon.com${p.href}`,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0.00",
        "description": "Contact Sales for custom enterprise volume pricing and licensing options."
      }
    }))
  };

  return (
    <>
      {/* Inject Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSuiteSchema) }}
      />

      <div className="relative">
        {/* 1. Hero Section */}
        <ProductsHero />

        {/* 2. Core Products Overview Grid */}
        <section className="py-24 bg-background relative z-10 border-t border-border/60">
          <Container className="space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
                Product Suite
              </span>
              <h2 className="text-heading-2 font-bold tracking-tight">
                Our Core Products
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Explore our purpose-built cloud platforms designed to automate back-office ledgers, coordinate client relationships, inject AI cognitive flows, and connect API pipelines.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {productsConfig.map((product, idx) => (
                <ProductCard key={product.slug} product={product} index={idx} />
              ))}
            </div>
          </Container>
        </section>

        {/* 3. Detailed Features Section */}
        <ProductDetails />

        {/* 4. Ecosystem Connections Map */}
        <ProductEcosystem />

        {/* 5. Product Comparison Side by Side */}
        <ProductComparison />

        {/* 6. Success metrics & testimonials */}
        <SuccessCarousel />

        {/* 7. Call-to-action Section */}
        <ProductCTA />
      </div>
    </>
  );
}
