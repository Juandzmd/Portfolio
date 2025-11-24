import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  // IMPORTANT: If deploying to a user page (username.github.io), leave basePath empty.
  // If deploying to a project page (username.github.io/repo-name), uncomment and set the repo name.
  basePath: '/Portfolio',
};

export default nextConfig;
