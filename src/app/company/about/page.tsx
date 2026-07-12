import { Metadata } from "next";
import { companyConfig } from "@/config/company";

// Import modular sections
import { AboutHero } from "@/components/company/about/AboutHero";
import { CompanyStory } from "@/components/company/about/CompanyStory";
import { VisionMission } from "@/components/company/about/VisionMission";
import { CapabilityModel } from "@/components/company/about/CapabilityModel";
import { WhatWeDo } from "@/components/company/about/WhatWeDo";
import { EngineeringPhilosophy } from "@/components/company/about/EngineeringPhilosophy";
import { CoreValues } from "@/components/company/about/CoreValues";
import { GlobalImpact } from "@/components/company/about/GlobalImpact";
import { TechnologyStack } from "@/components/company/about/TechnologyStack";
import { PartnershipApproach } from "@/components/company/about/PartnershipApproach";
import { CulturePreview } from "@/components/company/about/CulturePreview";
import { AboutCTA } from "@/components/company/about/AboutCTA";

// Primary metadata config
export const metadata: Metadata = {
  title: "About Brainzon | Digital Transformation Partner",
  description: "Learn about Brainzon, a technology partner delivering enterprise software, ERP, CRM, AI, integration, and modernization solutions for businesses worldwide.",
  openGraph: {
    title: "About Brainzon | Digital Transformation Partner",
    description: "Learn about Brainzon, a technology partner delivering enterprise software, ERP, CRM, AI, integration, and modernization solutions for businesses worldwide.",
    type: "website",
    url: "https://www.brainzon.com/company/about"
  }
};

export default function AboutPage() {
  const { about } = companyConfig;

  // 1. Organization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Brainzon",
    "url": "https://www.brainzon.com",
    "logo": "https://www.brainzon.com/logo.png",
    "foundingDate": "2020",
    "description": about.description,
    "sameAs": [
      "https://www.linkedin.com/company/brainzon",
      "https://twitter.com/brainzon"
    ]
  };

  // 2. AboutPage Schema
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Brainzon",
    "description": "Enterprise digital story of Brainzon, a global digital transformation partner specializing in ERP, CRM, AI, and legacy modernization.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Brainzon",
      "foundingDate": "2020"
    }
  };

  // 3. Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.brainzon.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Company",
        "item": "https://www.brainzon.com/company"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About Us",
        "item": "https://www.brainzon.com/company/about"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Assemble Sections */}
      <AboutHero />
      <CompanyStory />
      <VisionMission />
      <CapabilityModel />
      <WhatWeDo />
      <EngineeringPhilosophy />
      <CoreValues />
      <GlobalImpact />
      <TechnologyStack />
      <PartnershipApproach />
      <CulturePreview />
      <AboutCTA />
    </div>
  );
}
