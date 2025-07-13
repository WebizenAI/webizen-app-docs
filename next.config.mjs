import nextra from 'nextra';

// Initialize Nextra with the theme and theme configuration
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

// Export the final Next.js configuration, wrapped by the Nextra plugin
export default withNextra({
  // Configure for static export for GitHub Pages
  output: 'export',

  // The basePath and assetPrefix are typically handled by the GitHub Pages action.
  // Manually setting them can sometimes cause conflicts.
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // This is the crucial fix:
  // It forces Next.js to re-compile the theme package, fixing the import error.
  transpilePackages: ['nextra-theme-docs'],
});
