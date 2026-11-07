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

const title = "Brainzon | Enterprise Business Software, AI Agents & Connected Platforms";
const description = "Connect marketing, CRM, ERP, and accounting with Brainzon. Explore unified enterprise business applications and governed AI agents with human review controls.";
const canonicalUrl = new URL("/", siteConfig.url).toString();
const ogImage = new URL("/logo.png", siteConfig.url).toString();

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "Brainzon",
    "enterprise business software",
    "AI agents for business",
    "BrainMKT",
    "BrainCRM",
    "BrainERP",
    "BrainBooks",
    "marketing management software",
    "customer relationship management",
    "enterprise resource planning",
    "cloud accounting management",
    "deterministic AI agents",
    "human in the loop AI",
    "connected enterprise platform",
    "legacy system modernization",
    "enterprise software integration",
    "business process automation",
  ],
  authors: [{ name: "Brainzon Enterprise Team", url: siteConfig.url }],
  creator: "Brainzon",
  publisher: "Brainzon",
  category: "Enterprise Software & AI Automation",
  alternates: { canonical: canonicalUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Brainzon Enterprise Software & Governed AI Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  other: {
    "ai-content-type": "enterprise-software-platform",
    "subject": "Enterprise Business Applications, Governed AI Agents, and Digital Transformation",
    "topic": "ERP, CRM, Marketing Automation, Accounting & AI Agents",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    "name": "Brainzon",
    "legalName": "Brainzon Technologies",
    "url": siteConfig.url,
    "logo": new URL("/logo.png", siteConfig.url).toString(),
    "description": "Enterprise software provider delivering unified business applications (BrainMKT, BrainCRM, BrainERP, BrainBooks), governed AI agents, platform integration, and legacy system modernization.",
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
    ],
    "knowsAbout": [
      "Enterprise Resource Planning (ERP)",
      "Customer Relationship Management (CRM)",
      "Marketing Management & Campaign Workflows",
      "Accounting & Double-Entry Ledgers",
      "Product-Specific Governed AI Agents",
      "Human-in-the-Loop AI Automation",
      "Legacy System Modernization",
      "Enterprise Platform Integration"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    "name": "Brainzon",
    "url": siteConfig.url,
    "description": "Connected Business Software, Enterprise Applications and Governed AI Agents",
    "publisher": {
      "@id": `${siteConfig.url}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteConfig.url}/insights?q={search_term_string}`,
      "query-input": "required name=search_term_string"
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
        "description": "Marketing management platform for campaign planning, audience segmentation, content workflows, and CRM lead handoff."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "BrainCRM",
        "url": `${siteConfig.url}/products/braincrm`,
        "description": "Customer relationship management software for pipeline tracking, contact timelines, deal intelligence, and sales visibility."
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "BrainERP",
        "url": `${siteConfig.url}/products/brainerp`,
        "description": "Enterprise resource planning software for operations coordination, multi-warehouse inventory, procurement, and bill of materials."
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "BrainBooks",
        "url": `${siteConfig.url}/products/brainbooks`,
        "description": "Accounting management software for structured double-entry ledgers, accounts payable/receivable, and bank reconciliation."
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Product-Specific AI Agents",
        "url": `${siteConfig.url}/ai-agents`,
        "description": "Dedicated deterministic AI agents operating within product workflows under strict human review controls."
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Enterprise Integration Services",
        "url": `${siteConfig.url}/solutions/integration`,
        "description": "Governed API integration, data synchronization, and workflow orchestration connecting disparate enterprise platforms."
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Legacy System Modernization",
        "url": `${siteConfig.url}/services/modernization`,
        "description": "Staged modernization pathways de-risking monolithic applications and databases while protecting operational continuity."
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BrainMKT",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cloud, Web",
    "url": `${siteConfig.url}/products/brainmkt`,
    "description": "Enterprise marketing management suite for campaign orchestration, audience segmentation, and CRM lead handoff with dedicated AI assistance.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BrainCRM",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cloud, Web",
    "url": `${siteConfig.url}/products/braincrm`,
    "description": "Customer relationship management system offering unified records, touchpoint tracking, pipeline stages, and deal intelligence.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BrainERP",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cloud, Web",
    "url": `${siteConfig.url}/products/brainerp`,
    "description": "Operations and supply chain ERP software managing multi-location inventory, procurement thresholds, BOMs, and manufacturing workflows.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BrainBooks",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cloud, Web",
    "url": `${siteConfig.url}/products/brainbooks`,
    "description": "Compliance-ready accounting software featuring double-entry ledgers, automated reconciliation, AP/AR, and tax reporting.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Brainzon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brainzon is an enterprise software platform that unifies core business operations across marketing (BrainMKT), sales & CRM (BrainCRM), supply chain & ERP (BrainERP), and accounting (BrainBooks), powered by product-specific governed AI agents."
        }
      },
      {
        "@type": "Question",
        "name": "How do Brainzon's product-specific AI agents work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brainzon AI agents operate directly within each business application. They assist with data analysis, drafting proposals, inventory forecasting, and transaction reconciliation while requiring human review and approval for any high-impact actions."
        }
      },
      {
        "@type": "Question",
        "name": "Can Brainzon integrate with existing legacy enterprise platforms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Brainzon offers both enterprise API integration services and 6 proven legacy modernization pathways with phased zero-downtime cutovers and automated fallbacks."
        }
      },
      {
        "@type": "Question",
        "name": "How does Brainzon ensure enterprise security and data governance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brainzon enforces strict role-based access controls, complete decision audit trails for all automated and AI actions, zero vendor lock-in, and full client IP and data ownership."
        }
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
