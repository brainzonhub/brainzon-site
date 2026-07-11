import { blogPosts, caseStudies, BlogPost, CaseStudy } from "@/config/resources";

/**
 * Fetches all blog posts from the CMS database.
 * Swapping to a headless CMS (Sanity, Contentful, etc.) only requires changing this implementation.
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  // In the future: return fetch('https://api.mycms.com/posts').then(res => res.json())
  return blogPosts;
}

/**
 * Fetches a single blog post by its slug.
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((p) => p.slug === slug);
}

/**
 * Fetches all client case studies from the CMS database.
 */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  return caseStudies;
}

/**
 * Fetches a single client case study by its slug.
 */
export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
  const studies = await getCaseStudies();
  return studies.find((s) => s.slug === slug);
}
