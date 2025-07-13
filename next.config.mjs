import nextra from 'nextra'

  const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
  })

  export default withNextra({
    output: 'export', // Important for static export to GitHub Pages
    images: {
      unoptimized: true
    }
  })


  