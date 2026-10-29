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
