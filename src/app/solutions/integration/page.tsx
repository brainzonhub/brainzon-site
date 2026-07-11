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
      "@type": "SoftwareApplication",
      name: "BrainConnect",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Integration Platform as a Service (iPaaS)",
      operatingSystem: "Web",
      url: new URL("/products/brainconnect", siteConfig.url).toString(),
      description: "Enterprise integration platform to connect applications, automate workflows, synchronize data, and create a unified digital ecosystem.",
      featureList: [
        "API Management",
        "Application Integration",
        "Data Synchronization",
        "Workflow Automation",
        "Monitoring & Analytics",
      ],
      publisher: { "@id": `${siteConfig.url}/#organization` },
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
      <div className="flex flex-col min-h-screen bg-background">
        <IntegrationHero />
        <IntegrationChallenges />
        <div id="showcase">
          <BrainConnectShowcase />
        </div>
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
