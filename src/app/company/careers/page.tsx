import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { companyConfig } from "@/config/company";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const pageUrl = new URL("/company/careers", siteConfig.url).toString();
const title = "Careers at Brainzon | Engineering & Architecture Roles";
const description = "Join Brainzon's engineering squads. Explore open career opportunities in full-stack engineering, cloud architecture, and ERP transformation.";

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

export default function CareersPage() {
  const { careers } = companyConfig;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.url },
        { "@type": "ListItem", "position": 2, "name": "Careers", "item": pageUrl }
      ]
    },
    ...careers.roles.map((role) => ({
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": role.title,
      "description": role.description,
      "hiringOrganization": {
        "@type": "Organization",
        "@id": siteConfig.url + "/#organization",
        "name": "Brainzon",
        "sameAs": siteConfig.url
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Global Remote"
        }
      },
      "employmentType": "FULL_TIME"
    }))
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-border/40 bg-background">
        <Container>
          <div className="max-w-4xl flex flex-col items-start text-left">
            <span className="badge-accent">Join Our Team</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1] mb-4">
              Careers at Brainzon
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              {careers.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="relative py-20 bg-surface/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Current Openings</h2>
            <p className="mt-3 text-sm text-muted-foreground">Work with the latest modern toolsets to architect and scale systems worldwide.</p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {careers.roles.map((role) => (
              <div
                key={role.title}
                className="p-6 sm:p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-md hover:border-primary/50 transition-all flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">{role.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><Briefcase size={14} className="text-primary" /> {role.department}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> {role.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock size={14} className="text-primary" /> {role.type}</span>
                  </div>
                  <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shrink-0"
                >
                  <span>Apply Now</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
