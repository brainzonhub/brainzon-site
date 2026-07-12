import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Hero } from "@/components/sections/Hero";
import { ProductEcosystem } from "@/components/sections/ProductEcosystem";
import { ERPShowcase } from "@/components/sections/ERPShowcase";
import { CRMShowcase } from "@/components/sections/CRMShowcase";
import { AIShowcase } from "@/components/sections/AIShowcase";
import { ConnectShowcase } from "@/components/sections/ConnectShowcase";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { DemoCTA } from "@/components/sections/DemoCTA";

const title = "Brainzon | Digital Transformation Partner for Modern Businesses";
const description = "Brainzon is a global software enterprise providing proprietary SaaS, ERP platforms, CRM systems, AI reasoning engines, custom integration layers, legacy modernization, and cloud consulting.";
const canonicalUrl = siteConfig.url;

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
    "name": "Brainzon",
    "url": siteConfig.url,
    "logo": new URL("/logo.png", siteConfig.url).toString(),
    "description": "Digital Transformation Partner for Modern Businesses",
    "sameAs": [
      "https://github.com/brainzonhub",
      "https://www.linkedin.com/company/brainzon",
      "https://twitter.com/brainzon"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    "name": "Brainzon",
    "url": siteConfig.url,
    "description": "Digital Transformation Partner for Modern Businesses",
    "publisher": {
      "@id": `${siteConfig.url}/#organization`
    }
  }
] as const;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <ProductEcosystem />
      <ERPShowcase />
      <CRMShowcase />
      <AIShowcase />
      <ConnectShowcase />
      <SolutionsGrid />
      <WhyChoose />
      <DemoCTA />
    </>
  );
}
