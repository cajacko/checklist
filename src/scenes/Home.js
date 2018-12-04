// @flow

import React from 'react';
import HeaderWithContent from '@cajacko/lib/components/Layout/HeaderWithContent';
import CardsList from '@cajacko/lib/components/Cards/List';
import { PLUS } from '@cajacko/lib/config/icons';

/**
 * The home scene
 */
const SceneHome = () => (
  <HeaderWithContent
    header={{
      title: 'General.Header',
    }}
  >
    <CardsList
      cards={[{ text: { _textFromConst: 'Example List Item' }, key: 'yay' }]}
      bottomItem={{
        text: 'General.NewItem',
        leftIcon: PLUS,
        action: () => console.log('Add new item'),
        greyedOut: true,
      }}
    />
  </HeaderWithContent>
);

export default SceneHome;
