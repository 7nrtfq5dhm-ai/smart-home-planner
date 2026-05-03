// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Название сайдбара должно совпадать с тем, что мы указали в config (mainSidebar)
  mainSidebar: [
    {
      type: 'category',
      label: 'Обзор проекта',
      items: [
        'overview/product-description',
        'overview/business-goals',
        'overview/stakeholders',
      ],
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
        'architecture/api-spec',
        'architecture/erd',
        'architecture/storage',
        'architecture/async-api',
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
