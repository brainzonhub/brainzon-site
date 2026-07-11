import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { CRMHero } from "@/components/solutions/crm/CRMHero";
import { CRMChallenges } from "@/components/solutions/crm/CRMChallenges";
import { BrainCRMShowcase } from "@/components/solutions/crm/BrainCRMShowcase";
import CRMWithAI from "@/components/solutions/crm/CRMWithAI";
import CRMIntegration from "@/components/solutions/crm/CRMIntegration";
import { CRMFeatures } from "@/components/solutions/crm/CRMFeatures";
import CustomerJourney from "@/components/solutions/crm/CustomerJourney";
import CRMImplementation from "@/components/solutions/crm/CRMImplementation";
import CRMIndustries from "@/components/solutions/crm/CRMIndustries";
import { WhyBrainzonCRM } from "@/components/solutions/crm/WhyBrainzonCRM";
import { CRMCTA } from "@/components/solutions/crm/CRMCTA";

const title = "CRM Solutions | Brainzon Intelligent Customer Relationship Platform";
const description = "Brainzon delivers intelligent CRM solutions with sales automation, customer 360, marketing automation, analytics, AI-powered insights, and enterprise CRM integration.";
const canonicalUrl = new URL("/solutions/crm", siteConfig.url).toString();

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

export default function CRMPage() {
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
      name: "BrainCRM",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Enterprise Customer Relationship Management",
      operatingSystem: "Web",
      url: new URL("/products/braincrm", siteConfig.url).toString(),
      description: "Enterprise CRM platform to manage customer relationships, sales operations, marketing activities, and support processes.",
      featureList: [
        "Customer 360",
        "Sales Management",
        "Marketing Automation",
        "Customer Support",
        "CRM Analytics",
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
        <CRMHero />
        <CRMChallenges />
        <div id="showcase">
          <BrainCRMShowcase />
        </div>
        <CRMWithAI />
        <CRMIntegration />
        <CRMFeatures />
        <CustomerJourney />
        <CRMImplementation />
        <CRMIndustries />
        <WhyBrainzonCRM />
        <CRMCTA />
      </div>
    </>
  );
}
