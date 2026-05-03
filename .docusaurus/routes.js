import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/smart-home-planner/__docusaurus/debug',
    component: ComponentCreator('/smart-home-planner/__docusaurus/debug', 'dfa'),
    exact: true
  },
  {
    path: '/smart-home-planner/__docusaurus/debug/config',
    component: ComponentCreator('/smart-home-planner/__docusaurus/debug/config', '1b5'),
    exact: true
  },
  {
    path: '/smart-home-planner/__docusaurus/debug/content',
    component: ComponentCreator('/smart-home-planner/__docusaurus/debug/content', '39c'),
    exact: true
  },
  {
    path: '/smart-home-planner/__docusaurus/debug/globalData',
    component: ComponentCreator('/smart-home-planner/__docusaurus/debug/globalData', 'c6e'),
    exact: true
  },
  {
    path: '/smart-home-planner/__docusaurus/debug/metadata',
    component: ComponentCreator('/smart-home-planner/__docusaurus/debug/metadata', '3d9'),
    exact: true
  },
  {
    path: '/smart-home-planner/__docusaurus/debug/registry',
    component: ComponentCreator('/smart-home-planner/__docusaurus/debug/registry', '24c'),
    exact: true
  },
  {
    path: '/smart-home-planner/__docusaurus/debug/routes',
    component: ComponentCreator('/smart-home-planner/__docusaurus/debug/routes', '7f3'),
    exact: true
  },
  {
    path: '/smart-home-planner/api-reference',
    component: ComponentCreator('/smart-home-planner/api-reference', '8ad'),
    exact: true
  },
  {
    path: '/smart-home-planner/',
    component: ComponentCreator('/smart-home-planner/', '954'),
    routes: [
      {
        path: '/smart-home-planner/',
        component: ComponentCreator('/smart-home-planner/', 'cff'),
        routes: [
          {
            path: '/smart-home-planner/',
            component: ComponentCreator('/smart-home-planner/', '8a0'),
            routes: [
              {
                path: '/smart-home-planner/architecture/api-spec',
                component: ComponentCreator('/smart-home-planner/architecture/api-spec', 'aa5'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/architecture/async-api',
                component: ComponentCreator('/smart-home-planner/architecture/async-api', 'aba'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/architecture/erd',
                component: ComponentCreator('/smart-home-planner/architecture/erd', '3ce'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/architecture/storage',
                component: ComponentCreator('/smart-home-planner/architecture/storage', 'c29'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/integrations/platformization',
                component: ComponentCreator('/smart-home-planner/integrations/platformization', '5f8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/integrations/sequence-diagrams',
                component: ComponentCreator('/smart-home-planner/integrations/sequence-diagrams', '205'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/overview/business-goals',
                component: ComponentCreator('/smart-home-planner/overview/business-goals', '5ec'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/overview/product-description',
                component: ComponentCreator('/smart-home-planner/overview/product-description', 'e86'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/overview/stakeholders',
                component: ComponentCreator('/smart-home-planner/overview/stakeholders', 'a05'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/requirements/nfr-fr',
                component: ComponentCreator('/smart-home-planner/requirements/nfr-fr', '1f3'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/requirements/use-cases',
                component: ComponentCreator('/smart-home-planner/requirements/use-cases', '948'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/',
                component: ComponentCreator('/smart-home-planner/', '759'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
