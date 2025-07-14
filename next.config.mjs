import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
});

export default withNextra({
  output: 'export',
  images: { unoptimized: true },
  // Optionally add basePath and assetPrefix for GitHub Pages if needed
});
