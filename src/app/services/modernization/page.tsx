import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Legacy Application Modernization Services - Brainzon",
  description: "Brainzon helps businesses modernize outdated applications, upgrade technology platforms, migrate databases, and build scalable cloud architectures without disrupting operations.",
  openGraph: {
    title: "Legacy Application Modernization Services - Brainzon",
    description: "Brainzon helps businesses modernize outdated applications, upgrade technology platforms, migrate databases, and build scalable cloud architectures without disrupting operations.",
    type: "website",
  }
};

export default function ModernizationServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Legacy Application Modernization Services",
    "description": "Brainzon helps businesses modernize outdated applications, upgrade technology platforms, migrate databases, and build scalable cloud architectures without disrupting operations.",
    "provider": {
      "@type": "Organization",
      "name": "Brainzon"
    }
  };

  return (
    <>
      <script
        id="modernization-service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
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
