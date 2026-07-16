import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { productsConfig } from "@/config/products";
import { industriesConfig } from "@/config/industries";
import { servicesConfig } from "@/config/services";
import { caseStudies } from "@/config/case-studies";
import { getInsights } from "@/lib/insights";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const insights = await getInsights();

  // Base paths
  const baseRoutes = [
    "",
    "/resources",
    "/insights",
    "/resources/case-studies",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Product paths
  const productRoutes = productsConfig.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Solutions paths
  const solutionRoutes = industriesConfig.map((i) => ({
    url: `${baseUrl}/solutions/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Services paths
  const serviceRoutes = servicesConfig.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Company paths
  const companyPaths = ["about", "culture", "partners", "careers"];
  const companyRoutes = companyPaths.map((c) => ({
    url: `${baseUrl}/company/${c}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const legalRoutes = ["privacy-policy", "terms-of-service", "security-policy"].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.3,
  }));

  // Insights detail paths
  const insightDetailRoutes = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Case study detail paths
  const caseStudyDetailRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...baseRoutes,
    ...productRoutes,
    ...solutionRoutes,
    ...serviceRoutes,
    ...companyRoutes,
    ...legalRoutes,
    ...insightDetailRoutes,
    ...caseStudyDetailRoutes,
  ];
}
