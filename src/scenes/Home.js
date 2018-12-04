// @flow

import React from 'react';
import HeaderWithContent from '@cajacko/lib/components/Layout/HeaderWithContent';
import Checklist from '../components/Checklist';

/**
 * The home scene
 */
const SceneHome = () => (
  <HeaderWithContent
    header={{
      title: 'General.Header',
    }}
  >
    <Checklist checklistID="checklist-1" />
  </HeaderWithContent>
);

export default SceneHome;
