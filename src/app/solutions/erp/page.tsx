import type { Metadata } from "next";
import { BrainERPShowcase } from "@/components/solutions/erp/BrainERPShowcase";
import { ERPChallenges } from "@/components/solutions/erp/ERPChallenges";
import { ERPCTA } from "@/components/solutions/erp/ERPCTA";
import { ERPHero } from "@/components/solutions/erp/ERPHero";
import { ERPImplementation } from "@/components/solutions/erp/ERPImplementation";
import { ERPIntegration } from "@/components/solutions/erp/ERPIntegration";
import { ERPPlatforms } from "@/components/solutions/erp/ERPPlatforms";
import { IndustrySolutions } from "@/components/solutions/erp/IndustrySolutions";
import { WhyBrainzonERP } from "@/components/solutions/erp/WhyBrainzonERP";
import { siteConfig } from "@/config/site";

const title = "ERP Solutions | Brainzon Enterprise ERP Consulting & Implementation";
const description = "Brainzon delivers intelligent ERP solutions including BrainERP, Microsoft Dynamics 365 Business Central, Odoo ERP, and ERPNext implementation services.";
const canonicalUrl = new URL("/solutions/erp", siteConfig.url).toString();

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
    name: "Brainzon",
    url: siteConfig.url,
    logo: new URL("/logo.png", siteConfig.url).toString(),
    description: "Digital Transformation Partner for Modern Businesses",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BrainERP",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Enterprise Resource Planning",
    operatingSystem: "Web",
    url: new URL("/products/brainerp", siteConfig.url).toString(),
    description: "Brainzon's enterprise resource planning platform for finance, operations, supply chain, sales, manufacturing, workforce management, and business intelligence.",
    featureList: ["Finance and Accounting", "Sales and CRM", "Inventory and Warehouse", "Procurement", "Manufacturing", "Human Resources", "Business Intelligence"],
    publisher: { "@id": `${siteConfig.url}/#organization` },
  },
] as const;

export default function ERPSolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <ERPHero />
      <ERPChallenges />
      <BrainERPShowcase />
      <ERPPlatforms />
      <ERPImplementation />
      <IndustrySolutions />
      <ERPIntegration />
      <WhyBrainzonERP />
      <ERPCTA />
    </>
  );
}
