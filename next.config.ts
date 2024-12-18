import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
    ignoreDuringBuilds: true, // Disable ESLint checks during the build process
  },
    typescript: {
    // Disable type checking during the build process
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
