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

  // Core navigation & hub paths
  const coreHubRoutes = [
    { route: "", changeFrequency: "daily" as const, priority: 1.0 },
    { route: "/products", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/ai-agents", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/solutions", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/services", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/resources", changeFrequency: "daily" as const, priority: 0.8 },
    { route: "/insights", changeFrequency: "daily" as const, priority: 0.8 },
    { route: "/resources/case-studies", changeFrequency: "weekly" as const, priority: 0.8 },
    { route: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
    { route: "/book-demo", changeFrequency: "monthly" as const, priority: 0.8 },
  ].map(({ route, changeFrequency, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  // Product paths
  const productRoutes = productsConfig.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Specific solution architecture paths
  const platformSolutionRoutes = [
    "/solutions/odoo",
    "/solutions/microsoft-dynamics-365-business-central",
    "/solutions/erp",
    "/solutions/crm",
    "/solutions/ai",
    "/solutions/integration",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Industry solution paths
  const industryRoutes = industriesConfig.map((i) => ({
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
  const companyPaths = ["about", "partners", "careers"];
  const companyRoutes = companyPaths.map((c) => ({
    url: `${baseUrl}/company/${c}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Legal paths
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
    priority: 0.7,
  }));

  // Case study detail paths
  const caseStudyDetailRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...coreHubRoutes,
    ...productRoutes,
    ...platformSolutionRoutes,
    ...industryRoutes,
    ...serviceRoutes,
    ...companyRoutes,
    ...legalRoutes,
    ...insightDetailRoutes,
    ...caseStudyDetailRoutes,
  ];
}
