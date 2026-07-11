import type { Metadata } from "next";
import { DemoHero } from "@/components/demo/DemoHero";
import { DemoForm } from "@/components/demo/DemoForm";
import { DemoBenefits } from "@/components/demo/DemoBenefits";
import { SolutionEcosystem } from "@/components/demo/SolutionEcosystem";
import { TransformationTimeline } from "@/components/demo/TransformationTimeline";
import { TrustMetrics } from "@/components/demo/TrustMetrics";
import { DemoFinalCTA } from "@/components/demo/DemoFinalCTA";

export const metadata: Metadata = {
  title: "Book a Demo | Brainzon Enterprise Software Solutions",
  description:
    "Schedule a personalized demo with Brainzon experts and discover ERP, CRM, AI, automation, and modernization solutions for your business.",
  openGraph: {
    title: "Book a Demo | Brainzon Enterprise Software Solutions",
    description:
      "Schedule a personalized demo with Brainzon experts and discover ERP, CRM, AI, automation, and modernization solutions for your business.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brainzon",
  description: "Digital Transformation Partner for Modern Businesses",
  url: "https://brainzon.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: "English",
  },
};

export default function BookDemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DemoHero />
      <DemoForm />
      <DemoBenefits />
      <SolutionEcosystem />
      <TransformationTimeline />
      <TrustMetrics />
      <DemoFinalCTA />
    </>
  );
}
