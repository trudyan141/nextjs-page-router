import type { NextConfig } from "next";
const isDev = process.env.NODE_ENV === 'development';
const repoName = 'nextjs-page-router';
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: isDev ? '' : `/${repoName}`,
  assetPrefix: isDev ? '' : `/${repoName}`,
};

export default nextConfig;
