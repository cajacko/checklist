// @flow

import React from 'react';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import ChecklistEdit from '../components/Checklist/Edit';
import type { ReactRouter } from '../types/general';

/**
 * Get the props to apply to the checklist item
 */
const getProps = (checklistID) => {
  if (checklistID === 'new') return { isNew: true };

  return {
    checklistID,
  };
};

/**
 * The individual checklist scene, can edit and add new here
 */
const SceneEditChecklist = ({
  match: {
    params: { checklistID },
  },
}: ReactRouter) => <ChecklistEdit {...getProps(checklistID)} />;

export default withRouter(SceneEditChecklist);
