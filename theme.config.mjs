import React from 'react';

export default {
  logo: () => React.createElement('span', { style: { fontWeight: 700 } }, 'Webizen Docs'),
  project: {
    link: 'https://github.com/webizenai/webizen-app-docs/'
  },
  docsRepositoryBase: 'https://github.com/webizenai/webizen-app-docs/tree/main',
  navigation: true,
  footer: {
    text: 'Webizen Docs © ' + new Date().getFullYear()
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  toc: {
    float: true
  },
  search: {
    placeholder: 'Search docs...'
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system',
    storageKey: 'theme'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Webizen Docs'
    };
  }
};
