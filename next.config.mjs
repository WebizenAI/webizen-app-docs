/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/webizen-app-docs',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;