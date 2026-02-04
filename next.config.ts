import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
  },
  // Enable optimizations
  swcMinify: true,
  // Compression
  compress: true,
  // SEO improvements
  poweredByHeader: false,
};

export default nextConfig;
