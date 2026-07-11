import { Metadata } from "next";
import { industriesConfig } from "@/config/industries";
import { IndustrySolutionTemplate } from "@/components/layout/IndustrySolutionTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Retail Solution - Omnichannel Commerce Hub",
  description: "Connect physical POS endpoints, e-commerce stores, client customer loyalty platforms, and back-office delivery systems.",
  openGraph: {
    title: "Retail Solution - Omnichannel Commerce Hub",
    description: "Connect physical POS endpoints, e-commerce stores, client customer loyalty platforms, and back-office delivery systems.",
    type: "website",
  }
};

export default function RetailPage() {
  const industry = industriesConfig.find((i) => i.slug === "retail");
  if (!industry) {
    notFound();
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${industry.name} Integration Solution`,
    "description": industry.description,
    "provider": {
      "@type": "Organization",
      "name": "Brainzon"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <IndustrySolutionTemplate industry={industry} />
    </>
  );
}
