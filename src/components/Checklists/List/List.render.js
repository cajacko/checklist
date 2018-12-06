// @flow

import React from 'react';
import { createSelector } from 'reselect';
import CardsList from '@cajacko/lib/components/Cards/List';
import HeaderWithContent from '@cajacko/lib/components/Layout/HeaderWithContent';
import { PLUS } from '@cajacko/lib/config/icons';
import ListItem from '../ListItem';
import type { ImmutableChecklists } from '../../../types/Checklist';

type Props = {
  addChecklist: () => void,
  checklists: ImmutableChecklists,
};

const selector = createSelector(
  checklists => checklists,
  checklists => Object.keys(checklists.toJS())
);

/**
 * Render an individual list item
 */
const renderItem = ({ item }: { item: string }) => (
  <ListItem checklistID={item} />
);

/**
 * The checklist
 */
const List = ({ checklists, addChecklist }: Props) => (
  <HeaderWithContent
    header={{
      title: 'General.Header',
    }}
  >
    <CardsList
      cards={selector(checklists)}
      keyExtractor={id => id}
      renderItem={renderItem}
      bottomItem={{
        text: 'General.NewChecklist',
        leftIcon: PLUS,
        action: addChecklist,
        greyedOut: true,
      }}
    />
  </HeaderWithContent>
);

export default List;
