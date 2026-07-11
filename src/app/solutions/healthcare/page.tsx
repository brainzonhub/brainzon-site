import { Metadata } from "next";
import { industriesConfig } from "@/config/industries";
import { IndustrySolutionTemplate } from "@/components/layout/IndustrySolutionTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Healthcare Solution - Patient Portals & Operations Hub",
  description: "HIPAA-aligned platforms that streamline staff scheduling, patient pipelines, records scanning, and billing syncs.",
  openGraph: {
    title: "Healthcare Solution - Patient Portals & Operations Hub",
    description: "HIPAA-aligned platforms that streamline staff scheduling, patient pipelines, records scanning, and billing syncs.",
    type: "website",
  }
};

export default function HealthcarePage() {
  const industry = industriesConfig.find((i) => i.slug === "healthcare");
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
