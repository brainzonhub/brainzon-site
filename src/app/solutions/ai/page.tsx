import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { AIHero } from "@/components/solutions/ai/AIHero";
import { AIChallenges } from "@/components/solutions/ai/AIChallenges";
import { BrainAIShowcase } from "@/components/solutions/ai/BrainAIShowcase";
import { AIEcosystem } from "@/components/solutions/ai/AIEcosystem";
import { AIFunctionSolutions } from "@/components/solutions/ai/AIFunctionSolutions";
import { GenerativeAISection } from "@/components/solutions/ai/GenerativeAISection";
import { AIIntegration } from "@/components/solutions/ai/AIIntegration";
import { AIImplementation } from "@/components/solutions/ai/AIImplementation";
import { AISecurity } from "@/components/solutions/ai/AISecurity";
import { WhyBrainzonAI } from "@/components/solutions/ai/WhyBrainzonAI";
import { AICTA } from "@/components/solutions/ai/AICTA";

const title = "Dedicated AI Solutions & Agents | Brainzon Enterprise Platforms";
const description = "Brainzon delivers product-specific AI agents (BrainMKT, BrainCRM, BrainERP, BrainBooks) with permission-aware access, grounded answers, and responsible human-in-the-loop controls.";
const canonicalUrl = new URL("/solutions/ai", siteConfig.url).toString();

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

export default function AIPage() {
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
      name: "Brainzon Dedicated Product AI Agents",
      serviceType: "Product-Specific AI Assistance",
      provider: { "@id": `${siteConfig.url}/#organization` },
      url: new URL("/solutions/ai", siteConfig.url).toString(),
      description: "Product-specific AI agents embedded into BrainMKT, BrainCRM, BrainERP, and BrainBooks workflows with strict authorization controls.",
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
        <AIHero />
        <AIChallenges />
        <BrainAIShowcase />
        <AIEcosystem />
        <AIFunctionSolutions />
        <GenerativeAISection />
        <AIIntegration />
        <AIImplementation />
        <AISecurity />
        <WhyBrainzonAI />
        <AICTA />
      </div>
    </>
  );
}
