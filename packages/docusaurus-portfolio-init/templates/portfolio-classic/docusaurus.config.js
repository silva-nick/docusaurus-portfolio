/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My Portfolio',
  tagline: 'A React-based static github website template.',
  url: 'https://github.com',
  baseUrl: '/',
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: 'me', label: 'About Me', position: 'left' },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/<GITHUB-USERNAME>',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'MyPortfolio',
          items: [
            {
              label: 'Overview',
              to: 'www.google.com',
            },
          ],
        },
        {
          title: 'Guides',
          items: [
            {
              label: 'Installation',
              to: 'www.google.com',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} MyPortfolio. Built with Docusaurus.`,
    },
  },

  themes: ['docusaurus-portfolio-theme'],
  plugins: [
    [
      'docusaurus-portfolio-plugin',
      {
        username: '<GITHUB-USERNAME>',
        pageTitle: 'My Site',
        pageDescription: 'About me.',
        userOptions: {},
        repoOptions: {
          type: 'all',
          sort: 'updated',
          direction: 'desc',
        },
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
