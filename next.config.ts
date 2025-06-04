import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  generateEtags: false,
  compress: false,
  poweredByHeader: false,
};

export default nextConfig;
