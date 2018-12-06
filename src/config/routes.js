// @flow

import * as Scenes from '../scenes';

export const ENTRY = [
  {
    path: '/checklist/:checklistID',
    exact: true,
    component: Scenes.SceneChecklist,
  },
  {
    path: '/checklist-item/:checklistItemID',
    exact: true,
    component: Scenes.SceneChecklistItem,
  },
  {
    component: Scenes.SceneHome,
  },
];
