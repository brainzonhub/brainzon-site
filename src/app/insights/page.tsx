import { Metadata } from "next";
import { getInsights, getAllCategories, getAllTags } from "@/lib/insights";
import { Container } from "@/components/layout/Container";
import { InsightCard, InsightFilters } from "@/components/ui";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{
    category?: string;
    tag?: string;
    search?: string;
    page?: string;
    sort?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Brainzon Insights | Enterprise Software & Digital Transformation Research",
  description: "Explore our latest research, system architectures, and thought leadership articles on enterprise ERP, CRM, AI, Integration, and Legacy Modernization.",
  alternates: { canonical: "/insights" },
  keywords: ["Brainzon Insights", "Enterprise Software", "Digital Transformation", "ERP Systems", "CRM Platforms", "Enterprise AI", "Legacy Modernization"],
  openGraph: {
    title: "Brainzon Insights | Enterprise Software Research",
    description: "Explore our latest research, system architectures, and thought leadership articles on enterprise ERP, CRM, AI, Integration, and Legacy Modernization.",
    type: "website",
    url: "/insights",
  },
};

export default async function InsightsListingPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const rawInsights = await getInsights();
  const categories = await getAllCategories();
  const tags = await getAllTags();

  // Extract query filters
  const activeCategory = resolvedSearchParams.category || "";
  const activeTag = resolvedSearchParams.tag || "";
  const searchQuery = resolvedSearchParams.search || "";
  const sort = resolvedSearchParams.sort || "latest";
  const page = parseInt(resolvedSearchParams.page || "1", 10);

  // Apply filters
  let filteredInsights = [...rawInsights];

  if (activeCategory) {
    filteredInsights = filteredInsights.filter(
      (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }

  if (activeTag) {
    filteredInsights = filteredInsights.filter((item) =>
      item.tags.some((t) => t.toLowerCase() === activeTag.toLowerCase())
    );
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredInsights = filteredInsights.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle?.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.content.toLowerCase().includes(q)
    );
  }

  // Sort
  if (sort === "popular") {
    // Sort by mock popularity (e.g. description length or title length)
    filteredInsights.sort((a, b) => b.description.length - a.description.length);
  }

  // Pagination (PAGE_SIZE = 3 to allow pagination with 3 articles per page)
  const PAGE_SIZE = 3;
  const totalItems = filteredInsights.length;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);
  const currentPage = Math.min(Math.max(1, page), totalPages || 1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedInsights = filteredInsights.slice(startIndex, startIndex + PAGE_SIZE);

  // JSON-LD structured data for article listings
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Brainzon Insights",
    "description": "Enterprise software research and digital transformation insights from Brainzon.",
    "publisher": {
      "@type": "Organization",
      "name": "Brainzon",
      "logo": {
        "@type": "ImageObject",
        "url": "https://brainzon.com/images/logo.png"
      }
    },
    "blogPost": filteredInsights.map((insight) => ({
      "@type": "BlogPosting",
      "headline": insight.title,
      "description": insight.description,
      "datePublished": insight.date,
      "author": {
        "@type": "Person",
        "name": insight.author
      },
      "image": insight.featuredImage,
      "url": `https://brainzon.com/insights/${insight.slug}`
    }))
  };

  // Helper for generating pagination links
  const createPaginationUrl = (pageNum: number) => {
    const params = new URLSearchParams();
    if (activeCategory) params.set("category", activeCategory);
    if (activeTag) params.set("tag", activeTag);
    if (searchQuery) params.set("search", searchQuery);
    if (sort !== "latest") params.set("sort", sort);
    params.set("page", pageNum.toString());
    return `/insights?${params.toString()}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border/40 bg-background">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-70 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />
        <div 
          className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        />

        <Container>
          <div className="max-w-4xl flex flex-col items-start text-left">
            <span className="badge-primary">
              Enterprise Hub
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.1] mb-4">
              Brainzon Insights
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mt-2 leading-[1.1]">
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-[size:200%_auto] bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_15px_rgba(6,182,212,0.12)] dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                Research, Architecture Guides, & Industry Vision
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Explore our latest research, thought leadership, and industry insights on ERP, CRM, AI, Integration, and Digital Transformation.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Listing Section */}
      <section className="py-16 bg-surface/30 flex-1">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="p-6 rounded-2xl border border-border bg-card/20 backdrop-blur-md">
                <InsightFilters categories={categories} tags={tags} />
              </div>
            </div>

            {/* Articles List / Grid */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Toolbar */}
              <div className="flex items-center justify-between pb-4 border-b border-border/40">
                <div className="text-xs text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredInsights.length}</span> article{filteredInsights.length !== 1 && "s"}
                </div>

                {/* Sort controller */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-muted-foreground">Sort by:</span>
                  <div className="inline-flex rounded-lg border border-border p-0.5 bg-card/50">
                    <Link
                      href={`/insights?${new URLSearchParams({
                        ...(activeCategory && { category: activeCategory }),
                        ...(activeTag && { tag: activeTag }),
                        ...(searchQuery && { search: searchQuery }),
                        sort: "latest",
                      }).toString()}`}
                      className={`px-3 py-1 rounded-md transition-colors ${
                        sort === "latest"
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Latest
                    </Link>
                    <Link
                      href={`/insights?${new URLSearchParams({
                        ...(activeCategory && { category: activeCategory }),
                        ...(activeTag && { tag: activeTag }),
                        ...(searchQuery && { search: searchQuery }),
                        sort: "popular",
                      }).toString()}`}
                      className={`px-3 py-1 rounded-md transition-colors ${
                        sort === "popular"
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Popular
                    </Link>
                  </div>
                </div>
              </div>

              {/* Grid of cards */}
              {paginatedInsights.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {paginatedInsights.map((insight) => (
                    <InsightCard key={insight.slug} insight={insight} />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center rounded-2xl border border-dashed border-border/60 p-8 bg-card/10">
                  <div className="text-muted-foreground font-medium mb-2">
                    No articles found matching your criteria.
                  </div>
                  <p className="text-xs text-muted-foreground/60 max-w-sm mx-auto mb-6">
                    Try broadening your filters, correcting your spelling, or resetting search constraints.
                  </p>
                  <Link
                    href="/insights"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                  >
                    Reset all filters
                  </Link>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="flex items-center justify-center gap-2 pt-8 border-t border-border/40" aria-label="Pagination Navigation">
                  {/* Previous button */}
                  {currentPage > 1 ? (
                    <Link
                      href={createPaginationUrl(currentPage - 1)}
                      className="inline-flex items-center justify-center gap-1.5 h-9 px-4 rounded-lg border border-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-200"
                      aria-label="Go to previous page"
                    >
                      <ArrowLeft size={12} />
                      <span>Prev</span>
                    </Link>
                  ) : (
                    <span className="inline-flex items-center justify-center gap-1.5 h-9 px-4 rounded-lg border border-border text-xs font-semibold text-muted-foreground/40 pointer-events-none opacity-50">
                      <ArrowLeft size={12} />
                      <span>Prev</span>
                    </span>
                  )}

                  {/* Page indexes */}
                  {Array.from({ length: totalPages }, (_, idx) => {
                    const pageNum = idx + 1;
                    const isCurrent = pageNum === currentPage;
                    return isCurrent ? (
                      <span
                        key={pageNum}
                        className="inline-flex items-center justify-center size-9 rounded-lg text-xs font-bold bg-primary text-primary-foreground select-none"
                        aria-current="page"
                      >
                        {pageNum}
                      </span>
                    ) : (
                      <Link
                        key={pageNum}
                        href={createPaginationUrl(pageNum)}
                        className="inline-flex items-center justify-center size-9 rounded-lg border border-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-200"
                        aria-label={`Go to page ${pageNum}`}
                      >
                        {pageNum}
                      </Link>
                    );
                  })}

                  {/* Next button */}
                  {currentPage < totalPages ? (
                    <Link
                      href={createPaginationUrl(currentPage + 1)}
                      className="inline-flex items-center justify-center gap-1.5 h-9 px-4 rounded-lg border border-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-200"
                      aria-label="Go to next page"
                    >
                      <span>Next</span>
                      <ArrowRight size={12} />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center justify-center gap-1.5 h-9 px-4 rounded-lg border border-border text-xs font-semibold text-muted-foreground/40 pointer-events-none opacity-50">
                      <span>Next</span>
                      <ArrowRight size={12} />
                    </span>
                  )}
                </nav>
              )}

            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
