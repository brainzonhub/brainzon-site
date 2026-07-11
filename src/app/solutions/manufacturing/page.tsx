import { Metadata } from "next";
import { industriesConfig } from "@/config/industries";
import { IndustrySolutionTemplate } from "@/components/layout/IndustrySolutionTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Manufacturing Solution - Smart Factory Operations",
  description: "High-performance enterprise software integrations linking shop floor machinery, supply logistics, and resource capacity planning.",
  openGraph: {
    title: "Manufacturing Solution - Smart Factory Operations",
    description: "High-performance enterprise software integrations linking shop floor machinery, supply logistics, and resource capacity planning.",
    type: "website",
  }
};

export default function ManufacturingPage() {
  const industry = industriesConfig.find((i) => i.slug === "manufacturing");
  if (!industry) {
    notFound();
  }

  // Inject structured JSON-LD schema
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
