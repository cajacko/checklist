// @flow

import React from 'react';
import CardsListItem from '@cajacko/lib/components/Cards/ListItem';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import type { ReactRouter } from '../../../types/general';

type Props = ReactRouter & {
  id: string,
  text: string,
};

const action = (push, id) => () => push(`/checklist-item/${id}`);

/**
 * A checklist item component
 */
const ListItem = ({
  text, id, history: { push }, ...props
}: Props) => (
  <CardsListItem
    text={{ _textFromConst: text }}
    action={action(push, id)}
    {...props}
  />
);

export default withRouter(ListItem);
