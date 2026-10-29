import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { servicesConfig } from "@/config/services";
import { ServiceTemplate } from "@/components/layout/ServiceTemplate";
import { notFound } from "next/navigation";

const pageUrl = new URL("/services/cloud", siteConfig.url).toString();
const title = "Enterprise Cloud & DevOps Transformation Services | Brainzon";
const description = "Containerized workloads, multi-cloud and hybrid architectures, automated CI/CD pipelines, and 24/7 observability engineering.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function CloudServicePage() {
  const service = servicesConfig.find((item) => item.slug === "cloud");
  if (!service) {
    notFound();
  }

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteConfig.url
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": siteConfig.url + "/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.title,
          "item": pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": pageUrl + "/#service",
      "name": service.title,
      "serviceType": "cloud",
      "provider": {
        "@type": "Organization",
        "@id": siteConfig.url + "/#organization",
        "name": "Brainzon",
        "url": siteConfig.url
      },
      "description": service.description,
      "areaServed": "Worldwide"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <ServiceTemplate service={service} />
    </>
  );
}
