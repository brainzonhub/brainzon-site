import { Metadata } from "next";
import { servicesConfig } from "@/config/services";
import { ServiceTemplate } from "@/components/layout/ServiceTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Legacy System Modernization - Brainzon",
  description: "Incorporate modern API wrappers, strangler refactoring patterns, and unified database layers to breathe new life into older enterprise monoliths.",
  openGraph: {
    title: "Legacy System Modernization - Brainzon",
    description: "Incorporate modern API wrappers, strangler refactoring patterns, and unified database layers to breathe new life into older enterprise monoliths.",
    type: "website",
  }
};

export default function ModernizationPage() {
  const service = servicesConfig.find((s) => s.slug === "modernization");
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
