import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { CloudTransformation } from "@/components/modernization/CloudTransformation";
import { DatabaseModernization } from "@/components/modernization/DatabaseModernization";
import { LegacyChallenges } from "@/components/modernization/LegacyChallenges";
import { ModernArchitecture } from "@/components/modernization/ModernArchitecture";
import { ModernizationApproach } from "@/components/modernization/ModernizationApproach";
import { ModernizationCTA } from "@/components/modernization/ModernizationCTA";
import { ModernizationHero } from "@/components/modernization/ModernizationHero";
import { ModernizationServices } from "@/components/modernization/ModernizationServices";
import { TechnologyTransformation } from "@/components/modernization/TechnologyTransformation";
import { WhyBrainzonModernization } from "@/components/modernization/WhyBrainzonModernization";

const pageUrl = new URL("/services/modernization", siteConfig.url).toString();
const title = "Legacy System Modernization Services | Brainzon";
const description = "Brainzon de-risks mission-critical software through 6 staged modernization pathways: API encapsulation, re-hosting, re-platforming, database refactoring, and zero-downtime cutover.";

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

export default function ModernizationServicePage() {
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
          "name": "Legacy System Modernization",
          "item": pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": pageUrl + "/#service",
      "name": "Legacy Application Modernization Services",
      "serviceType": "Legacy System Modernization and Refactoring",
      "provider": {
        "@type": "Organization",
        "@id": siteConfig.url + "/#organization",
        "name": "Brainzon",
        "url": siteConfig.url
      },
      "description": description,
      "areaServed": "Worldwide"
    }
  ];

  return (
    <>
      <script
        id="modernization-service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <ModernizationHero />
      <LegacyChallenges />
      <ModernizationServices />
      <TechnologyTransformation />
      <ModernizationApproach />
      <ModernArchitecture />
      <DatabaseModernization />
      <CloudTransformation />
      <WhyBrainzonModernization />
      <ModernizationCTA />
    </>
  );
}
