/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
  // GitHub Pages needs a basePath + static export, but those break HMR / dev
  // when running locally at http://localhost:3000.
  basePath: isProd ? "/kennedyyung.github.io" : undefined,
  output: isProd ? "export" : undefined,
};

module.exports = nextConfig;
