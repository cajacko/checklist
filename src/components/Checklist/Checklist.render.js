// @flow

import React from 'react';
import CardsList from '@cajacko/lib/components/Cards/List';
import { PLUS } from '@cajacko/lib/config/icons';
import ChecklistItem from '../ChecklistItem';
import type { ImmutableChecklistItems } from '../../types/ChecklistItem';

type Props = {
  checklistItems: ImmutableChecklistItems,
};

/**
 * The home scene
 */
const Checklist = ({ checklistItems }: Props) => (
  <CardsList
    cards={checklistItems.toJS()}
    keyExtractor={id => id}
    renderItem={({ item }) => <ChecklistItem checklistItemID={item} />}
    bottomItem={{
      text: 'General.NewItem',
      leftIcon: PLUS,
      action: () => logger.log('Add new item'),
      greyedOut: true,
    }}
  />
);

export default Checklist;
