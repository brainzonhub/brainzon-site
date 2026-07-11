import { Metadata } from "next";
import { industriesConfig } from "@/config/industries";
import { IndustrySolutionTemplate } from "@/components/layout/IndustrySolutionTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Construction Solution - Material Logistics & Cost Tracking",
  description: "Unify jobsite schedules, subcontractor tracking, materials logistics, and project cost compliance.",
  openGraph: {
    title: "Construction Solution - Material Logistics & Cost Tracking",
    description: "Unify jobsite schedules, subcontractor tracking, materials logistics, and project cost compliance.",
    type: "website",
  }
};

export default function ConstructionPage() {
  const industry = industriesConfig.find((i) => i.slug === "construction");
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
