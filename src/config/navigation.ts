export interface SubNavItem {
  title: string;
  description: string;
  href: string;
  iconName: string;
}

export interface NavItem {
  title: string;
  href?: string;
  items?: SubNavItem[];
}

export const navigationConfig: NavItem[] = [
  {
    title: "Products",
    items: [
      {
        title: "BrainERP",
        description: "Enterprise Resource Planning platform for modern businesses",
        href: "/products/brainerp",
        iconName: "database",
      },
      {
        title: "BrainCRM",
        description: "Customer Relationship Management to empower sales and support",
        href: "/products/braincrm",
        iconName: "users",
      },
      {
        title: "BrainAI",
        description: "Enterprise Artificial Intelligence platform for automation",
        href: "/products/brainai",
        iconName: "cpu",
      },
      {
        title: "BrainConnect",
        description: "Integration platform to sync APIs and workflow engines",
        href: "/products/brainconnect",
        iconName: "network",
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        title: "ERP Solutions",
        description: "Tailored resource planning for complex operations",
        href: "/solutions/erp",
        iconName: "building-2",
      },
      {
        title: "CRM Solutions",
        description: "Client lifecycle management and support platforms",
        href: "/solutions/crm",
        iconName: "heart-handshake",
      },
      {
        title: "AI Solutions",
        description: "AI-driven decision systems and large language models",
        href: "/solutions/ai",
        iconName: "sparkles",
      },
      {
        title: "Integration Solutions",
        description: "Secure data sync and application connecting networks",
        href: "/solutions/integration",
        iconName: "git-branch",
      },
    ],
  },
  {
    title: "Modernization",
    href: "/modernization",
  },
  {
    title: "Company",
    items: [
      {
        title: "About Us",
        description: "Learn about Brainzon's vision, history and global footprint",
        href: "/company/about",
        iconName: "globe",
      },
      {
        title: "Careers",
        description: "Explore opportunities and join our high-performing team",
        href: "/company/careers",
        iconName: "briefcase",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Blog",
        description: "Latest insights, news, and technical deep-dives",
        href: "/resources/blog",
        iconName: "file-text",
      },
      {
        title: "Case Studies",
        description: "Customer success stories and digital transformations",
        href: "/resources/case-studies",
        iconName: "graduation-cap",
      },
    ],
  },
];
