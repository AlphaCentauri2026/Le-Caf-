import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true, // Disable image optimization for now
  },
  /* config options here */
};

export default nextConfig;
