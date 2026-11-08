import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { productsConfig } from "@/config/products";
import { ProductHero } from "@/components/sections/ProductHero";
import { BrainCRMTourShowcase } from "@/components/sections/BrainCRMTourShowcase";
import { BrainCRMBento } from "@/components/sections/BrainCRMBento";
import { BrainCRMLifecycleExplorer } from "@/components/sections/BrainCRMLifecycleExplorer";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { DemoCTA } from "@/components/sections/DemoCTA";
import { BrainCRMSlider } from "@/components/products/BrainCRMSlider";
import { notFound } from "next/navigation";

const pageUrl = new URL("/products/braincrm", siteConfig.url).toString();
const title = "BrainCRM | Customer Relationship Management Software";
const description = "Track multi-channel customer interactions, manage sales pipelines, score lead momentum, and coordinate delivery touchpoints with BrainCRM and dedicated AI assistance.";

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

export default function BrainCRMPage() {
  const product = productsConfig.find((item) => item.slug === "braincrm");
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
      "applicationSubCategory": "CRMApplication",
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

      <ProductHero 
        name={product.name} 
        headline={product.headline} 
        highlight={product.highlight}
        description={product.description} 
        icon={product.icon} 
        leftColSpan="lg:col-span-6"
        rightColSpan="lg:col-span-6"
        showRightOnMobile={true}
        showBackLink={false}
        showBadge={false}
        rightElement={<BrainCRMSlider />}
      />

      {/* Interactive Product Tour, Marquee & Metric Counters */}
      <BrainCRMTourShowcase />

      {/* "Why BrainCRM" - Built around how deals actually move (6-Card Bento Grid) */}
      <BrainCRMBento />

      {/* "How it works" - Follow one deal through the whole product (9-Step Lifecycle Explorer) */}
      <BrainCRMLifecycleExplorer />

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
