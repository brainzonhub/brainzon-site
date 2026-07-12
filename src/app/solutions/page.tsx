import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { EnterpriseArchitecture } from "@/components/solutions/EnterpriseArchitecture";
import { DigitalPlatform } from "@/components/solutions/DigitalPlatform";
import { TransformationLayers } from "@/components/solutions/TransformationLayers";
import { ArchitecturePatterns } from "@/components/solutions/ArchitecturePatterns";
import { IndustryArchitecture } from "@/components/solutions/IndustryArchitecture";
import { TechnologyFoundation } from "@/components/solutions/TechnologyFoundation";
import { TransformationJourney } from "@/components/solutions/TransformationJourney";
import { WhyBrainzonSolutions } from "@/components/solutions/WhyBrainzonSolutions";
import { SolutionsCTA } from "@/components/solutions/SolutionsCTA";

const title = "Enterprise Solutions Architecture | Brainzon Digital Transformation";
const description = "Brainzon designs intelligent enterprise architectures combining ERP, CRM, AI, integration, cloud, and modernization solutions.";
const canonicalUrl = new URL("/solutions", siteConfig.url).toString();

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
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

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: "Brainzon",
    url: siteConfig.url,
    logo: new URL("/logo.png", siteConfig.url).toString(),
    description: "Digital Transformation Partner for Modern Businesses",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enterprise Solutions Architecture Consulting",
    serviceType: "Digital Transformation Consulting",
    provider: { "@id": `${siteConfig.url}/#organization` },
    description: "Architecting corporate system workflows using custom ERP, CRM, AI reasoning platforms, Event messaging channels, and containerized cloud setups.",
    areaServed: "Worldwide"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solutions Architecture",
        item: canonicalUrl
      }
    ]
  }
] as const;

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <SolutionsHero />
      <EnterpriseArchitecture />
      <DigitalPlatform />
      <TransformationLayers />
      <ArchitecturePatterns />
      <IndustryArchitecture />
      <TechnologyFoundation />
      <TransformationJourney />
      <WhyBrainzonSolutions />
      <SolutionsCTA />
    </>
  );
}
