export default {
  logo: <span>Webizen Docs</span>,
  project: {
    link: 'https://github.com/webizenai/webizen-app-docs/'
  },
  docsRepositoryBase: 'https://github.com/webizenai/webizen-app-docs/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Webizen Docs'
    };
  }
};
