const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  standalone: true // For Vercel deployment
});
module.exports = withNextra();