// theme.config.jsx

export default {
  // Project logo configuration
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: '0.5rem' }}
      >
        <path
          d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 7L12 12L22 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12V22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Webizen Docs
    </span>
  ),

  // Head component for SEO and metadata
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Webizen App Docs" />
      <meta property="og:description" content="Documentation for the Webizen App." />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </>
  ),

  // Project repository link for the navbar
  project: {
    link: 'https://github.com/webizenai/webizen-app-docs/',
  },

  // Configuration for the "Edit this page" link
  docsRepositoryBase: 'https://github.com/webizenai/webizen-app-docs/tree/main',

  // Function to dynamically set page titles
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Webizen Docs'
    }
  },

  // Footer configuration
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://webizen.ai" target="_blank" rel="noopener noreferrer">
          Webizen
        </a>
        .
      </span>
    )
  },

  // Show the table of contents on the right side
  toc: {
    float: true,
  },

  // Enable and configure search
  search: {
    placeholder: 'Search documentation...'
  },

  // Enable dark mode toggle
  darkMode: true,

  // Sidebar configuration
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
};
