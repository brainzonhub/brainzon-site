import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { DemoHero } from "@/components/demo/DemoHero";
import { DemoForm } from "@/components/demo/DemoForm";
import { SolutionEcosystem } from "@/components/demo/SolutionEcosystem";
import { TransformationTimeline } from "@/components/demo/TransformationTimeline";
import { DemoBenefits } from "@/components/demo/DemoBenefits";
import { TrustMetrics } from "@/components/demo/TrustMetrics";
import { DemoFinalCTA } from "@/components/demo/DemoFinalCTA";

const pageUrl = new URL("/book-demo", siteConfig.url).toString();
const title = "Book an Enterprise Solution Demonstration | Brainzon";
const description = "Schedule an interactive product and solution consultation with Brainzon architects. Review custom capabilities for BrainMKT, BrainCRM, BrainERP, BrainBooks, Odoo, or integration.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function BookDemoPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Book a Solution Demonstration",
    "url": pageUrl,
    "description": description,
    "provider": {
      "@type": "Organization",
      "@id": siteConfig.url + "/#organization",
      "name": "Brainzon",
      "url": siteConfig.url
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <DemoHero />
      <DemoForm />
      <SolutionEcosystem />
      <TransformationTimeline />
      <DemoBenefits />
      <TrustMetrics />
      <DemoFinalCTA />
    </div>
  );
}
