// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smart Home Planner',
  tagline: 'Умный планировщик домов и квартир — техническая документация',
  favicon: 'img/favicon.ico',

  // Параметры для GitHub Pages
  url: 'https://7nrtfq5dhm-ai.github.io',
  baseUrl: '/smart-home-planner/',
  organizationName: '7nrtfq5dhm-ai',
  projectName: 'smart-home-planner',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Настройка обработки битых ссылок
  onBrokenLinks: 'warn',

  // Объединяем все настройки Markdown в один блок
  markdown: {
    mermaid: true, // Поддержка графиков
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', 
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    // Подключаем API через Redocusaurus
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'smart-planner-api',
            spec: 'static/openapi.yaml', 
            route: '/api-reference',
          },
        ],
        theme: {
          primaryColor: '#2563EB',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            label: 'API Reference',
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