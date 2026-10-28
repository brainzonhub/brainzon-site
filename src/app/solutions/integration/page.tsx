import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { IntegrationHero } from "@/components/solutions/integration/IntegrationHero";
import { IntegrationChallenges } from "@/components/solutions/integration/IntegrationChallenges";
import { BrainConnectShowcase } from "@/components/solutions/integration/BrainConnectShowcase";
import { IntegrationArchitecture } from "@/components/solutions/integration/IntegrationArchitecture";
import { IntegrationServices } from "@/components/solutions/integration/IntegrationServices";
import { IntegrationUseCases } from "@/components/solutions/integration/IntegrationUseCases";
import { IntegrationProcess } from "@/components/solutions/integration/IntegrationProcess";
import { SecuritySection } from "@/components/solutions/integration/SecuritySection";
import { WhyBrainzonIntegration } from "@/components/solutions/integration/WhyBrainzonIntegration";
import { IntegrationCTA } from "@/components/solutions/integration/IntegrationCTA";

const title = "Integration Solutions | Brainzon Enterprise System Integration Platform";
const description = "Brainzon delivers enterprise integration solutions connecting ERP, CRM, eCommerce, APIs, cloud applications, and legacy systems through automation and intelligent data synchronization.";
const canonicalUrl = new URL("/solutions/integration", siteConfig.url).toString();

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

export default function IntegrationPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: "Brainzon",
      url: siteConfig.url,
      logo: new URL("/logo.png", siteConfig.url).toString(),
      description: "Digital Transformation Partner for Modern Businesses",
      contactPoint: {
        "@type": "ContactPoint",
        "contactType": "sales",
        "availableLanguage": "English",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Brainzon Enterprise Integration Services",
      serviceType: "Enterprise Integration & API Orchestration",
      provider: { "@id": `${siteConfig.url}/#organization` },
      url: new URL("/solutions/integration", siteConfig.url).toString(),
      description: "Enterprise integration services connecting applications, automating workflows, synchronizing data, and creating a unified digital ecosystem.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Integration Capabilities",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "API Management & Gateways" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Application Integration" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Synchronization" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Workflow Automation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Monitoring & Analytics" } },
        ],
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="flex flex-col min-h-screen">
        <IntegrationHero />
        <IntegrationChallenges />
        <BrainConnectShowcase />
        <IntegrationArchitecture />
        <IntegrationServices />
        <IntegrationUseCases />
        <IntegrationProcess />
        <SecuritySection />
        <WhyBrainzonIntegration />
        <IntegrationCTA />
      </div>
    </>
  );
}
