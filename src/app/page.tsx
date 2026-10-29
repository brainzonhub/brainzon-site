import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Hero } from "@/components/sections/Hero";
import { ProductEcosystem } from "@/components/sections/ProductEcosystem";
import { MKTShowcase } from "@/components/sections/MKTShowcase";
import { CRMShowcase } from "@/components/sections/CRMShowcase";
import { ERPShowcase } from "@/components/sections/ERPShowcase";
import { BooksShowcase } from "@/components/sections/BooksShowcase";
import { AIAgentsShowcase } from "@/components/sections/AIAgentsShowcase";
import { IntegrationShowcase } from "@/components/sections/IntegrationShowcase";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { DemoCTA } from "@/components/sections/DemoCTA";

const title = "Brainzon | Business Software, AI Agents & Enterprise Solutions";
const description = "Brainzon helps businesses connect marketing, customer relationships, enterprise operations, and accounting through business applications, product-specific AI assistance, enterprise platform solutions, and integration services.";
const canonicalUrl = new URL("/", siteConfig.url).toString();

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
    "description": "Digital Transformation Partner providing business applications, product-specific AI agents, enterprise solutions, and legacy modernization.",
    "email": "info@brainzon.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "sales@brainzon.com",
        "availableLanguage": ["English"]
      },
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@brainzon.com",
        "availableLanguage": ["English"]
      }
    ],
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
    "description": "Connected Business Software and Enterprise Solutions",
    "publisher": {
      "@id": `${siteConfig.url}/#organization`
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Core Business Applications and Services",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "BrainMKT",
        "url": `${siteConfig.url}/products/brainmkt`,
        "description": "Marketing management platform for campaign planning, audience coordination, and CRM lead handoff."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "BrainCRM",
        "url": `${siteConfig.url}/products/braincrm`,
        "description": "Customer relationship management software for pipeline tracking, engagement history, and sales visibility."
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "BrainERP",
        "url": `${siteConfig.url}/products/brainerp`,
        "description": "Enterprise resource planning software for operations, multi-warehouse inventory, and procurement workflows."
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "BrainBooks",
        "url": `${siteConfig.url}/products/brainbooks`,
        "description": "Accounting management software for double-entry ledgers, receivables, payables, and bank reconciliation."
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Product-Specific AI Agents",
        "url": `${siteConfig.url}/ai-agents`,
        "description": "Dedicated deterministic AI agents operating within product workflows under human review controls."
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Enterprise Integration Services",
        "url": `${siteConfig.url}/solutions/integration`,
        "description": "Governed API integration, data synchronization, and workflow orchestration connecting disparate platforms."
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Legacy System Modernization",
        "url": `${siteConfig.url}/services/modernization`,
        "description": "Staged modernization pathways de-risking monolithic applications and databases while protecting continuity."
      }
    ]
  }
] as const;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        id="home-structured-data"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <ProductEcosystem />
      <MKTShowcase />
      <CRMShowcase />
      <ERPShowcase />
      <BooksShowcase />
      <AIAgentsShowcase />
      <IntegrationShowcase />
      <SolutionsGrid />
      <WhyChoose />
      <DemoCTA />
    </>
  );
}
