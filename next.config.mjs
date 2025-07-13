import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Important for static export to GitHub Pages
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default withNextra(nextConfig);