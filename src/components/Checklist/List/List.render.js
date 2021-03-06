// @flow

import React from 'react';
import CardsList from '@cajacko/lib/components/Cards/List';
import HeaderWithContent from '@cajacko/lib/components/Layout/HeaderWithContent';
import CardsListItem from '@cajacko/lib/components/Cards/ListItem';
import Icon from '@cajacko/lib/components/Cards/ListItem/Icon';
import Text from '@cajacko/lib/components/Cards/ListItem/Text';
import { PLUS } from '@cajacko/lib/config/icons';
import ListItem from '../ListItem';

type Props = {
  checklistItems: Array<string>,
  addItem: () => void,
  checklistID: string,
  onReset: () => void,
  goBack: () => void,
  title: string,
  edit: () => void,
};

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
  checklistItems,
  checklistID,
  title,
  addItem,
  onReset,
  goBack,
  edit,
}: Props) => (
  <HeaderWithContent
    header={{
      back: goBack,
      title: { _textFromConst: title },
      rightText: 'Checklist.Reset',
      titleAction: edit,
      rightAction: onReset,
      horizontalMargin: 50,
    }}
  >
    <CardsList
      bottomPadding
      cards={checklistItems}
      keyExtractor={id => id}
      renderItem={renderItem(checklistID)}
      bottomItem={() => (
        <CardsListItem action={addItem}>
          <Icon icon={PLUS} greyedOut />
          <Text text="General.NewItem" greyedOut />
        </CardsListItem>
      )}
    />
  </HeaderWithContent>
);

export default List;
