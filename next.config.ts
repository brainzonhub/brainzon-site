import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/products/brainai",
        destination: "/solutions/ai",
        permanent: true,
      },
      {
        source: "/products/brainconnect",
        destination: "/solutions/integration",
        permanent: true,
      },
      {
        source: "/company/culture",
        destination: "/company/careers",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/company/about",
        permanent: true,
      },
      {
        source: "/careers",
        destination: "/company/careers",
        permanent: true,
      },
      {
        source: "/partners",
        destination: "/company/partners",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/services/software-integration",
        destination: "/solutions/integration",
        permanent: true,
      },
      {
        source: "/services/legacy-system-modernization",
        destination: "/services/modernization",
        permanent: true,
      },
      {
        source: "/services/custom-software-development",
        destination: "/services/custom-development",
        permanent: true,
      },
      {
        source: "/services/api-integration",
        destination: "/solutions/integration",
        permanent: true,
      },
      {
        source: "/services/odoo",
        destination: "/solutions/odoo",
        permanent: true,
      },
      {
        source: "/services/business-central",
        destination: "/solutions/microsoft-dynamics-365-business-central",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/resources/case-studies",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-of-service",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
