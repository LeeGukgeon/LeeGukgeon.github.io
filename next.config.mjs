/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // User Pages에서는 basePath가 필요 없습니다
  // basePath 설정을 제거하거나 주석 처리
}

export default nextConfig
