/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/benjaminang',
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.benjaminang.tv' },
    ],
  },
  experimental: {
    optimizePackageImports: ['gsap'],
  },
};

export default nextConfig;
