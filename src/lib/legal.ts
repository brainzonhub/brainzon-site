import type { Metadata } from "next";
import type { LegalDocument } from "@/config/legal";
import { siteConfig } from "@/config/site";

export function createLegalMetadata(document: LegalDocument): Metadata {
  const url = new URL(`/${document.slug}`, siteConfig.url).toString();
  const title = document.slug === "security-policy" ? "Security Policy | Brainzon Enterprise Security Practices" : `${document.title} | Brainzon`;
  return { title: { absolute: title }, description: document.description, alternates: { canonical: url }, openGraph: { title, description: document.description, url, siteName: siteConfig.name, type: "website", locale: "en_US" }, twitter: { card: "summary_large_image", title, description: document.description } };
}

export function createLegalBreadcrumb(document: LegalDocument) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: document.title, item: new URL(`/${document.slug}`, siteConfig.url).toString() },
  ] };
}
