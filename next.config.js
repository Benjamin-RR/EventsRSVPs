const [redirects] = require("./next.redirects");
const [rewrites] = require("./next.rewrites");
const nextConfig = {
  async redirects() {
    return redirects;
  },
  async rewrites() {
    return rewrites
  },
  reactStrictMode: true,
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [65, 75],
  },
}

module.exports = nextConfig