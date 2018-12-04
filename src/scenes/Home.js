// @flow

import React from 'react';
import HeaderWithContent from '@cajacko/lib/components/Layout/HeaderWithContent';
import CardsList from '@cajacko/lib/components/Cards/List';

/**
 * The home scene
 */
const SceneHome = () => (
  <HeaderWithContent
    header={{
      title: 'General.Header',
    }}
  >
    <CardsList cards={[{ text: { _textFromConst: 'Hello' } }]} />
  </HeaderWithContent>
);

export default SceneHome;
