import { Metadata } from "next";
import { productsConfig } from "@/config/products";
import { ProductHero } from "@/components/sections/ProductHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { DemoCTA } from "@/components/sections/DemoCTA";
import { AIHeroDiagram } from "@/components/diagrams/AIHeroDiagram";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "BrainAI - Enterprise Artificial Intelligence Platform",
  description: "Leverage secure, custom-trained LLM models, predictive intelligence systems, document text parsers, and neural analytics dashboards.",
  openGraph: {
    title: "BrainAI - Enterprise Artificial Intelligence Platform",
    description: "Leverage secure, custom-trained LLM models, predictive intelligence systems, document text parsers, and neural analytics dashboards.",
    type: "website",
  }
};

export default function BrainAIPage() {
  const product = productsConfig.find((p) => p.slug === "brainai");
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
        highlight={product.highlight}
        description={product.description} 
        icon={product.icon} 
        rightElement={<AIHeroDiagram />}
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
