// @flow

import * as Scenes from '../scenes';

export const ENTRY = [
  {
    path: '/checklist-item/:id',
    exact: true,
    component: Scenes.SceneChecklistItem,
  },
  {
    component: Scenes.SceneHome,
  },
];
