// @flow

import React from 'react';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import ChecklistItem from '../components/ChecklistItem';
import type { ReactRouter } from '../types/general';

/**
 * Get the props to apply to the checklist item
 */
const getProps = (id) => {
  if (id === 'new') return { isNew: true };

  return {
    checklistItemID: id,
  };
};

/**
 * The individual checklist scene, can edit and add new here
 */
const SceneChecklistItem = ({
  match: {
    params: { id },
  },
}: ReactRouter) => <ChecklistItem {...getProps(id)} />;

export default withRouter(SceneChecklistItem);
