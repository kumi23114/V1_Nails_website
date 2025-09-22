/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // 暫時註解掉以支援 @next/third-parties
  trailingSlash: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    quality: 80,
    domains: [],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  // assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '', // 暫時註解掉
}

module.exports = nextConfig
