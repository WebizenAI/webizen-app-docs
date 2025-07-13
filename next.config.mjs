import nextra from 'nextra';

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

export default withNextra({
  // Configure for static export
  output: 'export',
  
  // Set the base path for GitHub Pages
  basePath: basePath,
  assetPrefix: assetPrefix,

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
});