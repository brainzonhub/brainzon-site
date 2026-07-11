import { Metadata } from "next";
import { productsConfig } from "@/config/products";
import { ProductHero } from "@/components/sections/ProductHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { DemoCTA } from "@/components/sections/DemoCTA";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "BrainConnect - Integration & Event Orchestration Platform",
  description: "Connect legacy databases, API structures, SaaS endpoints, and queuing message brokers in a zero-downtime integration hub.",
  openGraph: {
    title: "BrainConnect - Integration & Event Orchestration Platform",
    description: "Connect legacy databases, API structures, SaaS endpoints, and queuing message brokers in a zero-downtime integration hub.",
    type: "website",
  }
};

export default function BrainConnectPage() {
  const product = productsConfig.find((p) => p.slug === "brainconnect");
  if (!product) {
    notFound();
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Brainzon"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/PreOrder"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <ProductHero 
        name={product.name} 
        headline={product.headline} 
        description={product.description} 
        icon={product.icon} 
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
