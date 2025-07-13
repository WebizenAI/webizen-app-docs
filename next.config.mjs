import nextra from 'nextra';
export default nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.mjs'
})({
  output: 'export',
  basePath: '/webizen-app-docs',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
});