import { Metadata } from "next";
import { servicesConfig } from "@/config/services";
import { ServiceTemplate } from "@/components/layout/ServiceTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Cloud & Managed Services - Brainzon",
  description: "Continuous infrastructure support, DevOps pipeline creation, security posture audits, and multi-cloud transformations.",
  openGraph: {
    title: "Cloud & Managed Services - Brainzon",
    description: "Continuous infrastructure support, DevOps pipeline creation, security posture audits, and multi-cloud transformations.",
    type: "website",
  }
};

export default function CloudServicePage() {
  const service = servicesConfig.find((s) => s.slug === "cloud");
  if (!service) {
    notFound();
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": service.title,
    "description": service.description,
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
      <ServiceTemplate service={service} />
    </>
  );
}
