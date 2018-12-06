// @flow

import React from 'react';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import Checklist from '../components/Checklist/List';
import type { ReactRouter } from '../types/general';

/**
 * Display a specific checklist
 */
const SceneChecklist = ({
  match: {
    params: { checklistID },
  },
}: ReactRouter) => <Checklist checklistID={checklistID} />;

export default withRouter(SceneChecklist);
