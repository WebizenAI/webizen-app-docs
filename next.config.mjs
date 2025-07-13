import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

export default withNextra({
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['nextra-theme-docs'],
});
