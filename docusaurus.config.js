// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smart Home Planner',
  tagline: 'Умный планировщик домов и квартир — техническая документация',
  favicon: 'img/favicon.ico',

  url: 'https://7nrtfq5dhm-ai.github.io',
  baseUrl: '/smart-home-planner/',
  organizationName: '7nrtfq5dhm-ai',
  projectName: 'smart-home-planner',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'smart-planner-api',
            spec: 'static/redocusaurus/openapi.yaml',
            route: '/api-reference',
          },
        ],
        theme: {
          primaryColor: '#2563EB',
        },
      },
    ],
  ],

  themeConfig: ({
    navbar: {
      title: 'Smart Home Planner',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Документация',
        },
        {
          to: '/api-reference',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://github.com/7nrtfq5dhm-ai/smart-home-planner',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            { label: 'Карточка продукта', to: '/docs/intro' },
            { label: 'Архитектура', to: '/docs/architecture/erd' },
            { label: 'API Reference', to: '/api-reference' },
          ],
        },
        {
          title: 'Репозиторий',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/7nrtfq5dhm-ai/smart-home-planner',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Smart Home Planner. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ['yaml', 'json'],
    },
  }),
};

module.exports = config;
