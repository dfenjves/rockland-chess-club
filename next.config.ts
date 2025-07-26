import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  generateEtags: true,
  compress: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
