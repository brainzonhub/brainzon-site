import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { AboutHero } from "@/components/company/about/AboutHero";
import { VisionMission } from "@/components/company/about/VisionMission";
import { CoreValues } from "@/components/company/about/CoreValues";
import { CompanyStory } from "@/components/company/about/CompanyStory";
import { WhatWeDo } from "@/components/company/about/WhatWeDo";
import { CapabilityModel } from "@/components/company/about/CapabilityModel";
import { TechnologyStack } from "@/components/company/about/TechnologyStack";
import { EngineeringPhilosophy } from "@/components/company/about/EngineeringPhilosophy";
import { PartnershipApproach } from "@/components/company/about/PartnershipApproach";
import { TeamSection } from "@/components/company/about/TeamSection";
import { CulturePreview } from "@/components/company/about/CulturePreview";
import { GlobalImpact } from "@/components/company/about/GlobalImpact";
import { AboutCTA } from "@/components/company/about/AboutCTA";

const pageUrl = new URL("/company/about", siteConfig.url).toString();
const title = "About Brainzon | Digital Transformation & Enterprise Engineering";
const description = "Learn about Brainzon's mission, leadership, and engineering approach to business software, dedicated AI agents, enterprise solutions, and legacy modernization.";

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

export default function AboutPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.url },
        { "@type": "ListItem", "position": 2, "name": "About Brainzon", "item": pageUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": pageUrl + "/#about",
      "name": "About Brainzon",
      "url": pageUrl,
      "description": description,
      "mainEntity": {
        "@type": "Organization",
        "@id": siteConfig.url + "/#organization",
        "name": "Brainzon",
        "url": siteConfig.url
      }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <AboutHero />
      <VisionMission />
      <CoreValues />
      <CompanyStory />
      <WhatWeDo />
      <CapabilityModel />
      <TechnologyStack />
      <EngineeringPhilosophy />
      <PartnershipApproach />
      <TeamSection />
      <CulturePreview />
      <GlobalImpact />
      <AboutCTA />
    </div>
  );
}
