// @flow

import * as Scenes from '../scenes';

export const ENTRY = [
  {
    path: '/checklist/:checklistID/checklist-item/:checklistItemID',
    exact: true,
    component: Scenes.SceneChecklistItem,
  },
  {
    path: '/checklist/:checklistID/edit',
    exact: true,
    component: Scenes.SceneEditChecklist,
  },
  {
    path: '/checklist/:checklistID',
    exact: true,
    component: Scenes.SceneChecklist,
  },
  {
    component: Scenes.SceneHome,
  },
];
