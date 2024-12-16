import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig : NextConfig = {
  basePath: isProd ? '/nextjs-page-router' : '',
  trailingSlash: true, 
  assetPrefix: isProd ? '/nextjs-page-router/' : '',
  images: {
    unoptimized: true, 
  }
};

module.exports = nextConfig;
