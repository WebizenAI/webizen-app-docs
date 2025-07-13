import withNextra from 'nextra-theme-docs';

// The theme plugin now wraps the entire Next.js config.
// The themeConfig is automatically picked up from theme.config.jsx
export default withNextra({
  // Configure for static export for GitHub Pages
  output: 'export',

  // The basePath and assetPrefix are typically handled by the GitHub Pages action.
  // Manually setting them can sometimes cause conflicts.
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
});
