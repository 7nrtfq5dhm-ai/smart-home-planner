import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/smart-home-planner/docs',
    component: ComponentCreator('/smart-home-planner/docs', '152'),
    routes: [
      {
        path: '/smart-home-planner/docs',
        component: ComponentCreator('/smart-home-planner/docs', '853'),
        routes: [
          {
            path: '/smart-home-planner/docs',
            component: ComponentCreator('/smart-home-planner/docs', '019'),
            routes: [
              {
                path: '/smart-home-planner/docs/api/error-codes',
                component: ComponentCreator('/smart-home-planner/docs/api/error-codes', '680'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/docs/api/overview',
                component: ComponentCreator('/smart-home-planner/docs/api/overview', 'c88'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/docs/architecture/async-api',
                component: ComponentCreator('/smart-home-planner/docs/architecture/async-api', '4fa'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/docs/architecture/erd',
                component: ComponentCreator('/smart-home-planner/docs/architecture/erd', 'd9c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/docs/architecture/storage',
                component: ComponentCreator('/smart-home-planner/docs/architecture/storage', '30e'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/docs/integrations/platformization',
                component: ComponentCreator('/smart-home-planner/docs/integrations/platformization', '025'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/docs/integrations/sequence-diagrams',
                component: ComponentCreator('/smart-home-planner/docs/integrations/sequence-diagrams', 'f39'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/docs/intro',
                component: ComponentCreator('/smart-home-planner/docs/intro', '1ed'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/docs/requirements/nfr-fr',
                component: ComponentCreator('/smart-home-planner/docs/requirements/nfr-fr', 'cf3'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/smart-home-planner/docs/requirements/use-cases',
                component: ComponentCreator('/smart-home-planner/docs/requirements/use-cases', 'f48'),
                exact: true,
                sidebar: "mainSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/smart-home-planner/',
    component: ComponentCreator('/smart-home-planner/', '448'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
