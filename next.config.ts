import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig : NextConfig = {
  basePath: isProd ? '/nextjs-page-router' : '',
  trailingSlash: isProd, 
  assetPrefix: isProd ? '/nextjs-page-router' : ''
};

module.exports = nextConfig;
