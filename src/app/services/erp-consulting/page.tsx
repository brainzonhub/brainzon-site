import { Metadata } from "next";
import { servicesConfig } from "@/config/services";
import { ServiceTemplate } from "@/components/layout/ServiceTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Enterprise ERP Consulting - Brainzon",
  description: "Expert consulting to help you audit business operations, design target software specs, and successfully transition to modern ERP platforms.",
  openGraph: {
    title: "Enterprise ERP Consulting - Brainzon",
    description: "Expert consulting to help you audit business operations, design target software specs, and successfully transition to modern ERP platforms.",
    type: "website",
  }
};

export default function ErpConsultingPage() {
  const service = servicesConfig.find((s) => s.slug === "erp-consulting");
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
