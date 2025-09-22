/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 啟用靜態導出以支援 Netlify
  trailingSlash: true,
  images: {
    unoptimized: true, // 靜態導出需要停用圖片優化
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '', // 啟用相對路徑
}

module.exports = nextConfig
