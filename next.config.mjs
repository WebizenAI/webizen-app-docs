import nextra from 'nextra';


const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  contentDirBasePath: 'content',
});

export default withNextra({
  output: 'export',
  basePath: '/webizen-app-docs',
  assetPrefix: '/webizen-app-docs',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['nextra-theme-docs'],
});
