import { Metadata } from "next";
import { industriesConfig } from "@/config/industries";
import { IndustrySolutionTemplate } from "@/components/layout/IndustrySolutionTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Logistics Solution - Fleet Tracking & Route Optimization",
  description: "Supply chain control hubs coordinating dispatch systems, real-time fleet telematics, and inventory locations.",
  openGraph: {
    title: "Logistics Solution - Fleet Tracking & Route Optimization",
    description: "Supply chain control hubs coordinating dispatch systems, real-time fleet telematics, and inventory locations.",
    type: "website",
  }
};

export default function LogisticsPage() {
  const industry = industriesConfig.find((i) => i.slug === "logistics");
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
