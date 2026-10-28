import { Metadata } from "next";
import { productsConfig } from "@/config/products";
import { ProductHero } from "@/components/sections/ProductHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { DemoCTA } from "@/components/sections/DemoCTA";
import { MKTHeroDiagram } from "@/components/diagrams/MKTHeroDiagram";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "BrainMKT - Marketing Management Platform | Brainzon",
  description: "Plan marketing initiatives, coordinate multi-channel campaigns and content activity, organize audiences, and streamline CRM lead handoffs with BrainMKT and BrainMKT AI Agent.",
  openGraph: {
    title: "BrainMKT - Marketing Management Platform | Brainzon",
    description: "Coordinate campaigns, audiences, and high-velocity growth with BrainMKT and dedicated AI assistance.",
    type: "website",
    url: "https://brainzon.com/products/brainmkt",
  }
};

export default function BrainMKTPage() {
  const product = productsConfig.find((p) => p.slug === "brainmkt");
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
