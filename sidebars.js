/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Карточка продукта',
    },
    {
      type: 'category',
      label: 'Требования',
      items: [
        'requirements/use-cases',
        'requirements/nfr-fr',
      ],
    },
    {
      type: 'category',
      label: 'Архитектура',
      items: [
        'architecture/erd',
        'architecture/storage',
        'architecture/async-api',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/overview',
        'api/error-codes',
      ],
    },
    {
      type: 'category',
      label: 'Интеграции',
      items: [
        'integrations/sequence-diagrams',
        'integrations/platformization',
      ],
    },
  ],
};

module.exports = sidebars;
