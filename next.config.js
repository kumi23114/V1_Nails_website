/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // 暫時註解掉以支援 @next/third-parties
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '', // 暫時註解掉
}

module.exports = nextConfig
