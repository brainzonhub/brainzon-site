import { Metadata } from "next";
import { servicesConfig } from "@/config/services";
import { ServiceTemplate } from "@/components/layout/ServiceTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Custom Enterprise Software Development - Brainzon",
  description: "Architecting, coding, and deploying highly secure, cloud-native customized software platforms engineered to fit your proprietary workflows.",
  openGraph: {
    title: "Custom Enterprise Software Development - Brainzon",
    description: "Architecting, coding, and deploying highly secure, cloud-native customized software platforms engineered to fit your proprietary workflows.",
    type: "website",
  }
};

export default function CustomDevelopmentPage() {
  const service = servicesConfig.find((s) => s.slug === "custom-development");
  if (!service) {
    notFound();
  }

  // Inject structured JSON-LD schema
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
