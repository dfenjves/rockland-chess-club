import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  generateEtags: false,
  compress: false,
  poweredByHeader: false,
  experimental: {
    outputFileTracingRoot: __dirname,
  },
};

export default nextConfig;
