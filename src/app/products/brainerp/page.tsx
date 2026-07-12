import { Metadata } from "next";
import { productsConfig } from "@/config/products";
import { ProductHero } from "@/components/sections/ProductHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { DemoCTA } from "@/components/sections/DemoCTA";
import { ERPHeroDiagram } from "@/components/diagrams/ERPHeroDiagram";
import { notFound } from "next/navigation";

// Dynamic metadata configuration
export const metadata: Metadata = {
  title: "BrainERP - Enterprise Resource Planning Platform",
  description: "Synchronize finance, inventory, manufacturing, procurement, and HR operations in a unified enterprise system. Built for real-time compliance and scale.",
  openGraph: {
    title: "BrainERP - Enterprise Resource Planning Platform",
    description: "Synchronize finance, inventory, manufacturing, procurement, and HR operations in a unified enterprise system.",
    type: "website",
  }
};

export default function BrainERPPage() {
  const product = productsConfig.find((p) => p.slug === "brainerp");
  if (!product) {
    notFound();
  }

  // Inject structured JSON-LD schema
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
      {/* Inject schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <ProductHero 
        name={product.name} 
        headline={product.headline} 
        highlight={product.highlight}
        description={product.description} 
        icon={product.icon} 
        rightElement={<ERPHeroDiagram />}
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
