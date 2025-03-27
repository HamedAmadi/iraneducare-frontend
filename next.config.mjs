/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  distDir: 'build',
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['media.proserfor.ir'],
  },
};

export default nextConfig;