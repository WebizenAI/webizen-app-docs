import withNextra from 'nextra-theme-docs';

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

// Initialize Nextra with the theme configuration
const nextraPlugin = withNextra({
  themeConfig: './theme.config.jsx',
});

// Export the final Next.js configuration
export default nextraPlugin({
  // Configure for static export
  output: 'export',
  
  // Set the base path for GitHub Pages
  basePath: basePath,
  assetPrefix: assetPrefix,

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Add this to fix the ESM import error in the dependency
  transpilePackages: ['nextra-theme-docs'],
});