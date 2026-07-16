import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface InsightFrontmatter {
  title: string;
  subtitle?: string;
  date: string;
  author: string;
  authorRole?: string;
  tags: string[];
  category: string;
  description: string;
  featuredImage: string;
  readTime: string;
}

export interface Insight extends InsightFrontmatter {
  slug: string;
  content: string;
}

const INSIGHTS_PATH = path.join(process.cwd(), "src/content/insights");

/**
 * Parses and returns all Insights, sorted by date descending.
 */
export async function getInsights(): Promise<Insight[]> {
  if (!fs.existsSync(INSIGHTS_PATH)) {
    return [];
  }

  const files = fs.readdirSync(INSIGHTS_PATH);
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  const insights: Insight[] = mdxFiles.map((filename) => {
    const filePath = path.join(INSIGHTS_PATH, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const slug = filename.replace(/\.mdx$/, "");

    const frontmatter = data as InsightFrontmatter;

    return {
      slug,
      content,
      title: frontmatter.title || "Untitled Insight",
      subtitle: frontmatter.subtitle || "",
      date: frontmatter.date || "",
      author: frontmatter.author || "Brainzon Team",
      authorRole: frontmatter.authorRole || "Expert Contributor",
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      category: frontmatter.category || "General",
      description: frontmatter.description || "",
      featuredImage: frontmatter.featuredImage || "/images/logo.png",
      readTime: frontmatter.readTime || "3 min read",
    };
  });

  // Sort by date descending
  return insights.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Returns a single Insight by its slug.
 */
export async function getInsightBySlug(slug: string): Promise<Insight | undefined> {
  try {
    const filePath = path.join(INSIGHTS_PATH, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      return undefined;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const frontmatter = data as InsightFrontmatter;

    return {
      slug,
      content,
      title: frontmatter.title || "Untitled Insight",
      subtitle: frontmatter.subtitle || "",
      date: frontmatter.date || "",
      author: frontmatter.author || "Brainzon Team",
      authorRole: frontmatter.authorRole || "Expert Contributor",
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      category: frontmatter.category || "General",
      description: frontmatter.description || "",
      featuredImage: frontmatter.featuredImage || "/images/logo.png",
      readTime: frontmatter.readTime || "3 min read",
    };
  } catch (error) {
    console.error(`Error loading insight by slug ${slug}:`, error);
    return undefined;
  }
}

/**
 * Gets all unique categories present in the insights.
 */
export async function getAllCategories(): Promise<string[]> {
  const insights = await getInsights();
  const categories = insights.map((item) => item.category);
  return Array.from(new Set(categories));
}

/**
 * Gets all unique tags present in the insights.
 */
export async function getAllTags(): Promise<string[]> {
  const insights = await getInsights();
  const tags = insights.flatMap((item) => item.tags);
  return Array.from(new Set(tags));
}
