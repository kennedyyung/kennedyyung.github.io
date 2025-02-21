/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  basePath: '/kennedyyung.github.io', // Optional, if using a custom repo name for GitHub Pages
  output: 'export'
};

module.exports = nextConfig;
