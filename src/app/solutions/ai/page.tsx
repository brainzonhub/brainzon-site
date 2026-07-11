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

const title = "AI Solutions | Brainzon Enterprise Artificial Intelligence Platform";
const description = "Brainzon delivers enterprise AI solutions including generative AI, AI assistants, predictive analytics, document intelligence, automation, and AI-powered business transformation.";
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
      "@type": "SoftwareApplication",
      name: "BrainAI",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Enterprise Artificial Intelligence Platform",
      operatingSystem: "Web",
      url: new URL("/products/brainai", siteConfig.url).toString(),
      description: "Enterprise AI platform to leverage artificial intelligence across operations, customer engagement, analytics, and decision-making.",
      featureList: [
        "AI Business Assistant",
        "Generative AI Solutions",
        "Document Intelligence",
        "Predictive Analytics",
        "AI Automation",
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
        <AIHero />
        <AIChallenges />
        <div id="showcase">
          <BrainAIShowcase />
        </div>
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
