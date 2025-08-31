// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },      // ⬅ skip ESLint on build
  typescript: { ignoreBuildErrors: true },   // ⬅ optional: skip TS errors on build
};

export default nextConfig;
