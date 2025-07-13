export default {
  logo: <span>Webizen Developer Documentation</span>,
  project: {
    link: 'https://github.com/WebizenAI/webizen-dev'
  },
  docsRepositoryBase: 'https://github.com/webizenai/webizen-app-docs/tree/main',
  footer: {
    text: `© ${new Date().getFullYear()} Webizen. All rights reserved.`
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Webizen: Developer Documentation" />
      <meta name="og:title" content="Webizen: Developer Documentation" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Webizen'
    }
  },
  // Main navigation configuration
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  // Enable table of contents
  toc: {
    float: true,
  }
}