// @flow

import React from 'react';
import CardsListItem from '@cajacko/lib/components/Cards/ListItem';
import type { ChecklistItem as ChecklistItemType } from '../../types/ChecklistItem';

/**
 * The home scene
 */
const ChecklistItem = ({ text }: ChecklistItemType) => (
  <CardsListItem text={{ _textFromConst: text }} />
);

export default ChecklistItem;
