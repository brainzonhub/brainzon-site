import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BusinessChallenge } from "@/components/case-study/BusinessChallenge";
import { CaseStudyCTA } from "@/components/case-study/CaseStudyCTA";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ClientOverview } from "@/components/case-study/ClientOverview";
import { ClientQuote } from "@/components/case-study/ClientQuote";
import { ImplementationTimeline } from "@/components/case-study/ImplementationTimeline";
import { RelatedCaseStudies } from "@/components/case-study/RelatedCaseStudies";
import { ResultsMetrics } from "@/components/case-study/ResultsMetrics";
import { SolutionOverview } from "@/components/case-study/SolutionOverview";
import { caseStudies, getCaseStudy } from "@/config/case-studies";
import { siteConfig } from "@/config/site";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const canonicalPath = `/case-studies/${study.slug}`;
  return {
    title: { absolute: `${study.title} | Brainzon Case Study` },
    description: study.description,
    alternates: { canonical: canonicalPath },
    keywords: [study.industry, ...study.products, "Brainzon Case Study", "Customer Success", "Enterprise Solutions", "Software Architecture"],
    openGraph: {
      title: `${study.title} | Brainzon Case Study`,
      description: study.description,
      type: "article",
      url: canonicalPath,
      publishedTime: study.publishedDate,
      images: study.heroImage ? [{ url: study.heroImage, width: 1200, height: 630, alt: study.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Brainzon Case Study`,
      description: study.description,
      images: study.heroImage ? [study.heroImage] : undefined,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const pageUrl = new URL(`/case-studies/${study.slug}`, siteConfig.url).toString();
  const related = study.relatedCaseStudies
    .map((relatedSlug) => getCaseStudy(relatedSlug))
    .filter((item) => item !== undefined);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: study.title,
      description: study.description,
      image: study.heroImage ? new URL(study.heroImage, siteConfig.url).toString() : undefined,
      datePublished: study.publishedDate,
      dateModified: study.publishedDate,
      mainEntityOfPage: pageUrl,
      about: [study.industry, ...study.products],
      author: { "@type": "Organization", name: "Brainzon", url: siteConfig.url },
      publisher: {
        "@type": "Organization",
        name: "Brainzon",
        url: siteConfig.url,
        logo: { "@type": "ImageObject", url: new URL("/logo.png", siteConfig.url).toString() },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: new URL("/resources/case-studies", siteConfig.url).toString() },
        { "@type": "ListItem", position: 3, name: study.title, item: pageUrl },
      ],
    },
  ];

  return (
    <article className="overflow-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <CaseStudyHero study={study} />
      <ClientOverview study={study} />
      <BusinessChallenge study={study} />
      <SolutionOverview study={study} />
      <ImplementationTimeline study={study} />
      <ResultsMetrics study={study} />
      <ClientQuote study={study} />
      <RelatedCaseStudies studies={related} />
      <CaseStudyCTA study={study} />
    </article>
  );
}
