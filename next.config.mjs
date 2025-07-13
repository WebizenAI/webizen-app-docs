import withNextra from 'nextra';

export default withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.mjs',
  standalone: true
})({
  output: 'export',
  basePath: '/webizen-app-docs',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
});