import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactOptions } from "@/components/contact/ContactOptions";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInformation } from "@/components/contact/ContactInformation";
import { GlobalPresence } from "@/components/contact/GlobalPresence";
import { WhyContactBrainzon } from "@/components/contact/WhyContactBrainzon";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactCTA } from "@/components/contact/ContactCTA";

const contactPageUrl = `${siteConfig.url}/contact`;

export const metadata: Metadata = {
  title: "Contact Brainzon | Enterprise Software & Digital Transformation Experts",
  description: "Contact Brainzon for ERP, CRM, AI, integration, modernization, and custom software solutions. Get in touch with our experts today.",
  alternates: {
    canonical: contactPageUrl,
  },
  openGraph: {
    title: "Contact Brainzon | Enterprise Software & Digital Transformation Experts",
    description: "Contact Brainzon for ERP, CRM, AI, integration, modernization, and custom software solutions. Get in touch with our experts today.",
    url: contactPageUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Brainzon | Enterprise Software & Digital Transformation Experts",
    description: "Contact Brainzon for ERP, CRM, AI, integration, modernization, and custom software solutions. Get in touch with our experts today.",
  },
};

export default function ContactPage() {
  // Structured Data (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    "name": "Brainzon",
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`, // placeholder logo path
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-800-555-0199",
        "contactType": "sales",
        "email": "sales@brainzon.com",
        "areaServed": "US",
        "availableLanguage": "en",
      },
      {
        "@type": "ContactPoint",
        "telephone": "+1-800-555-0199",
        "contactType": "customer support",
        "email": "support@brainzon.com",
        "areaServed": "US",
        "availableLanguage": "en",
      },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${contactPageUrl}/#webpage`,
    "url": contactPageUrl,
    "name": "Contact Brainzon | Enterprise Software & Digital Transformation Experts",
    "description": "Contact Brainzon for ERP, CRM, AI, integration, modernization, and custom software solutions.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      "name": "Brainzon",
      "url": siteConfig.url,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": contactPageUrl,
      },
    ],
  };

  return (
    <>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="flex flex-col w-full">
        <ContactHero />
        <ContactOptions />
        <ContactForm />
        <ContactInformation />
        <GlobalPresence />
        <WhyContactBrainzon />
        <ContactFAQ />
        <ContactCTA />
      </article>
    </>
  );
}
