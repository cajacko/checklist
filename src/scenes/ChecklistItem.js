// @flow

import React from 'react';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import ChecklistItem from '../components/ChecklistItem';
import type { ReactRouter } from '../types/general';

/**
 * Get the props to apply to the checklist item
 */
const getProps = (checklistItemID) => {
  if (checklistItemID === 'new') return { isNew: true };

  return {
    checklistItemID,
  };
};

/**
 * The individual checklist scene, can edit and add new here
 */
const SceneChecklistItem = ({
  match: {
    params: { checklistItemID, checklistID },
  },
}: ReactRouter) => (
  <ChecklistItem checklistID={checklistID} {...getProps(checklistItemID)} />
);

export default withRouter(SceneChecklistItem);
