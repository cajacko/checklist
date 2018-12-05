// @flow

import React from 'react';
import CardsListItem from '@cajacko/lib/components/Cards/ListItem';

type Props = {
  text: string,
};

/**
 * The home scene
 */
const ListItem = ({ text, ...props }: Props) => (
  <CardsListItem text={{ _textFromConst: text }} {...props} />
);

export default ListItem;
