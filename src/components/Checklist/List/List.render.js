// @flow

import React from 'react';
import CardsList from '@cajacko/lib/components/Cards/List';
import { PLUS } from '@cajacko/lib/config/icons';
import ListItem from '../ListItem';
import type { ImmutableChecklistItems } from '../../../types/ChecklistItem';

type Props = {
  checklistItems: ImmutableChecklistItems,
  addItem: () => void,
};

/**
 * Render an individual list item
 */
const renderItem = ({ item }: { item: string }) => (
  <ListItem checklistItemID={item} />
);

/**
 * The checklist
 */
const List = ({ checklistItems, addItem }: Props) => (
  <CardsList
    cards={checklistItems.toJS()}
    keyExtractor={id => id}
    renderItem={renderItem}
    bottomItem={{
      text: 'General.NewItem',
      leftIcon: PLUS,
      action: addItem,
      greyedOut: true,
    }}
  />
);

export default List;
