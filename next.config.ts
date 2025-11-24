import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  // IMPORTANT: basePath and assetPrefix only apply in production (GitHub Pages)
  // In development, you can access the site at http://localhost:3000
  basePath: isProd ? '/Portfolio' : '',
  assetPrefix: isProd ? '/Portfolio' : '',
};

export default nextConfig;
