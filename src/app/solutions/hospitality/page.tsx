import { Metadata } from "next";
import { industriesConfig } from "@/config/industries";
import { IndustrySolutionTemplate } from "@/components/layout/IndustrySolutionTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Hospitality Solution - Guest Services & Booking Systems",
  description: "Enterprise dashboards coordinating property management (PMS), reservation portals, and guest services workflows.",
  openGraph: {
    title: "Hospitality Solution - Guest Services & Booking Systems",
    description: "Enterprise dashboards coordinating property management (PMS), reservation portals, and guest services workflows.",
    type: "website",
  }
};

export default function HospitalityPage() {
  const industry = industriesConfig.find((i) => i.slug === "hospitality");
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
