// @flow

import React from 'react';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import ChecklistItem from '../components/ChecklistItem';
import type { ReactRouter } from '../types/general';

/**
 * The individual checklist scene, can edit and add new here
 */
const SceneChecklistItem = ({
  match: {
    params: { id },
  },
}: ReactRouter) => <ChecklistItem checklistItemID={id} isNew={id === 'new'} />;

export default withRouter(SceneChecklistItem);
