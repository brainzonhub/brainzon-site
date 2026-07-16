import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInsightBySlug, getInsights } from "@/lib/insights";
import { Container } from "@/components/layout/Container";
import { InsightCard } from "@/components/ui";
import { MdxComponents } from "@/components/ui/MdxComponents";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Calendar, Clock, Share2, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const insights = await getInsights();
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  if (!insight) return {};

  const canonicalPath = `/insights/${slug}`;

  return {
    title: `${insight.title} | Brainzon Insights`,
    description: insight.description,
    alternates: { canonical: canonicalPath },
    keywords: [insight.category, ...insight.tags, "Brainzon Insights", "Enterprise Technology", "Software Architectures", "Digital Transformation"],
    openGraph: {
      title: insight.title,
      description: insight.description,
      type: "article",
      url: canonicalPath,
      publishedTime: insight.date,
      authors: [insight.author],
      tags: insight.tags,
      images: [
        {
          url: insight.featuredImage,
          alt: insight.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: insight.title,
      description: insight.description,
      images: [insight.featuredImage],
    },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const allInsights = await getInsights();
  
  // Calculate recommended posts:
  // Filter current, match category or tags, fallback to latest
  const related = allInsights.filter((item) => item.slug !== slug);
  const categoryRelated = related.filter((item) => item.category === insight.category);
  const tagRelated = related.filter((item) => item.tags.some((t) => insight.tags.includes(t)));
  
  let combinedRelated = Array.from(new Set([...categoryRelated, ...tagRelated]));
  if (combinedRelated.length < 2) {
    const extraFallback = related.filter((r) => !combinedRelated.some((c) => c.slug === r.slug));
    combinedRelated = [...combinedRelated, ...extraFallback];
  }
  const finalRelated = combinedRelated.slice(0, 2);

  const shareUrl = `https://brainzon.com/insights/${slug}`;

  // Structured JSON-LD Article Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": insight.title,
    "description": insight.description,
    "image": insight.featuredImage,
    "datePublished": insight.date,
    "author": {
      "@type": "Person",
      "name": insight.author,
      "jobTitle": insight.authorRole || "Software Architect"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Brainzon",
      "logo": {
        "@type": "ImageObject",
        "url": "https://brainzon.com/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": shareUrl
    }
  };

  return (
    <article className="flex flex-col min-h-screen bg-background pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Back Button & Banner */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-border/40 bg-background">
        <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

        <Container>
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft size={12} className="transform group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Insights Hub</span>
            </Link>
          </div>

          <div className="max-w-4xl">
            {/* Category tag */}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 mb-6">
              {insight.category}
            </span>

            {/* Title & Subtitle */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              {insight.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {insight.subtitle}
            </p>

            {/* Metadata Footer */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-border/40">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full border border-primary/25 bg-muted flex items-center justify-center font-bold text-sm text-primary uppercase shadow-inner">
                  {insight.author.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-foreground">{insight.author}</span>
                  <span className="text-[10px] text-muted-foreground">{insight.authorRole || "Expert Architect"}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  <span>{insight.date}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} />
                  <span>{insight.readTime}</span>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Banner Image */}
      <section className="-mt-10 mb-16">
        <Container>
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-border shadow-elevated bg-muted/10">
            <Image
              src={insight.featuredImage}
              alt={insight.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Article content & sharing sidebar */}
      <section className="bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Share Sidebar (Desktop Only) */}
            <aside className="hidden lg:block lg:col-span-2 space-y-6 sticky top-24 self-start">
              <div className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                <Share2 size={12} className="text-primary" />
                <span>Share Post</span>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-border bg-card/20 text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <LinkedinIcon size={14} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(insight.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-border bg-card/20 text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <TwitterIcon size={14} />
                  <span>Twitter / X</span>
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent(insight.title)}&body=${encodeURIComponent(shareUrl)}`}
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-border bg-card/20 text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <Mail size={14} />
                  <span>Email</span>
                </a>
              </div>
            </aside>

            {/* Main content body */}
            <div className="lg:col-span-8 space-y-6">
              {/* MDX Body rendering */}
              <div className="prose prose-invert max-w-none border-b border-border/40 pb-12">
                <MDXRemote source={insight.content} components={MdxComponents} />
              </div>

              {/* Tags block */}
              {insight.tags.length > 0 && (
                <div className="py-6 border-b border-border/40 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-bold text-foreground mr-2">Tags:</span>
                  {insight.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/insights?tag=${encodeURIComponent(tag.toLowerCase())}`}
                      className="px-2.5 py-1 rounded bg-muted/40 border border-border/40 text-xs text-muted-foreground hover:text-primary hover:border-primary/45 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              )}

              {/* Mobile Share Block */}
              <div className="lg:hidden flex flex-col gap-3 py-6 border-b border-border/40">
                <span className="text-xs font-bold text-foreground">Share this insight:</span>
                <div className="flex gap-2">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 flex-1 py-2 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground bg-card/10"
                  >
                    <LinkedinIcon size={14} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(insight.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 flex-1 py-2 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground bg-card/10"
                  >
                    <TwitterIcon size={14} />
                    <span>Twitter / X</span>
                  </a>
                </div>
              </div>

              {/* Back to top-level link */}
              <div className="pt-6 flex justify-start">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft size={12} />
                  <span>Back to all insights</span>
                </Link>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* Recommended related posts section */}
      {finalRelated.length > 0 && (
        <section className="mt-24 pt-16 border-t border-border/40 bg-surface/10">
          <Container>
            <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-8">
              Recommended Related Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {finalRelated.map((relatedPost) => (
                <InsightCard key={relatedPost.slug} insight={relatedPost} />
              ))}
            </div>
          </Container>
        </section>
      )}

    </article>
  );
}
