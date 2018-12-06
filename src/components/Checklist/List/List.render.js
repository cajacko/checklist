// @flow

import React from 'react';
import { createSelector } from 'reselect';
import CardsList from '@cajacko/lib/components/Cards/List';
import HeaderWithContent from '@cajacko/lib/components/Layout/HeaderWithContent';
import { PLUS } from '@cajacko/lib/config/icons';
import ListItem from '../ListItem';
import type { ImmutableChecklistItems } from '../../../types/ChecklistItem';

type Props = {
  checklistItems: ImmutableChecklistItems,
  addItem: () => void,
  checklistID: string,
  onReset: () => void,
};

const selector = createSelector(
  checklistItems => checklistItems,
  checklistItems => Object.keys(checklistItems.toJS())
);

/**
 * Render an individual list item
 */
const renderItem = (checklistID: string) => ({ item }: { item: string }) => (
  <ListItem checklistItemID={item} checklistID={checklistID} />
);

/**
 * The checklist
 */
const List = ({
  checklistItems, checklistID, addItem, onReset,
}: Props) => (
  <HeaderWithContent
    header={{
      title: 'General.Header',
      rightText: 'Checklist.Reset',
      rightAction: onReset,
    }}
  >
    <CardsList
      cards={selector(checklistItems)}
      keyExtractor={id => id}
      renderItem={renderItem(checklistID)}
      bottomItem={{
        text: 'General.NewItem',
        leftIcon: PLUS,
        action: addItem,
        greyedOut: true,
      }}
    />
  </HeaderWithContent>
);

export default List;
