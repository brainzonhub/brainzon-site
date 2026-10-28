import { Metadata } from "next";
import { productsConfig } from "@/config/products";
import { ProductHero } from "@/components/sections/ProductHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { DemoCTA } from "@/components/sections/DemoCTA";
import { BooksHeroDiagram } from "@/components/diagrams/BooksHeroDiagram";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "BrainBooks - Accounting Management Platform | Brainzon",
  description: "Maintain structured financial records, coordinate accounts receivable and payable, automate bank reconciliations, and generate statutory reports with BrainBooks and BrainBooks AI Agent.",
  openGraph: {
    title: "BrainBooks - Accounting Management Platform | Brainzon",
    description: "Precision accounting, audit-ready ledgers, and cash flow clarity with BrainBooks and dedicated AI assistance.",
    type: "website",
    url: "https://brainzon.com/products/brainbooks",
  }
};

export default function BrainBooksPage() {
  const product = productsConfig.find((p) => p.slug === "brainbooks");
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
        rightElement={<BooksHeroDiagram />}
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
