import type { Metadata } from "next";
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
import { siteConfig } from "@/config/site";

const title = "Legacy Application Modernization | Brainzon Software Modernization Services";
const description = "Brainzon helps organizations modernize legacy applications, migrate outdated systems, upgrade databases, transform architectures, and move applications to modern cloud platforms.";
const canonicalUrl = new URL("/modernization", siteConfig.url).toString();

export const metadata: Metadata = { title: { absolute: title }, description, alternates: { canonical: canonicalUrl }, openGraph: { title, description, url: canonicalUrl, siteName: siteConfig.name, type: "website", locale: "en_US" }, twitter: { card: "summary_large_image", title, description } };

const structuredData = [
  { "@context": "https://schema.org", "@type": "Organization", "@id": `${siteConfig.url}/#organization`, name: "Brainzon", url: siteConfig.url, logo: new URL("/logo.png", siteConfig.url).toString(), description: "Digital Transformation Partner for Modern Businesses" },
  { "@context": "https://schema.org", "@type": "Service", name: "Legacy Application Modernization", serviceType: "Software modernization services", url: canonicalUrl, description, provider: { "@id": `${siteConfig.url}/#organization` }, areaServed: "Worldwide", hasOfferCatalog: { "@type": "OfferCatalog", name: "Application modernization capabilities", itemListElement: ["Application Assessment", "Architecture Modernization", "Application Migration", "Database Modernization", "Cloud Transformation", "Performance Optimization"].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) } },
] as const;

export default function ModernizationPage() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g,"\\u003c") }} /><ModernizationHero /><LegacyChallenges /><ModernizationServices /><TechnologyTransformation /><ModernizationApproach /><ModernArchitecture /><DatabaseModernization /><CloudTransformation /><WhyBrainzonModernization /><ModernizationCTA /></>; }
