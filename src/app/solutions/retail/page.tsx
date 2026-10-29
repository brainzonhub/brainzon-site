import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { industriesConfig } from "@/config/industries";
import { IndustrySolutionTemplate } from "@/components/layout/IndustrySolutionTemplate";
import { notFound } from "next/navigation";

const pageUrl = new URL("/solutions/retail", siteConfig.url).toString();
const title = "Retail & Omnichannel Commerce Solutions | Brainzon";
const description = "Synchronize POS terminals, omnichannel inventory, unified catalogs, and customer records across warehouses.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RetailPage() {
  const industry = industriesConfig.find((i) => i.slug === "retail");
  if (!industry) {
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
          "name": "Solutions",
          "item": siteConfig.url + "/solutions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": industry.name + " Solutions",
          "item": pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": pageUrl + "/#service",
      "name": industry.name + " Industry Architecture Solution",
      "serviceType": "Industry Digital Transformation",
      "description": industry.description,
      "provider": {
        "@type": "Organization",
        "@id": siteConfig.url + "/#organization",
        "name": "Brainzon",
        "url": siteConfig.url
      }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <IndustrySolutionTemplate industry={industry} />
    </>
  );
}
