import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/DeiviTech-Formatacao',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
