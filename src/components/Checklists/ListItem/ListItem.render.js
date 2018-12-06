// @flow

import React from 'react';
import CardsListItem from '@cajacko/lib/components/Cards/ListItem';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import type { ReactRouter } from '../../../types/general';

type Props = ReactRouter & {
  id: string,
  title: string,
};

/**
 * Redirect to the checklist
 */
const action = (push, id) => () => push(`/checklist/${id}`);

/**
 * A checklist item component
 */
const ListItem = ({
  title, id, history: { push }, ...props
}: Props) => (
  <CardsListItem
    text={{ _textFromConst: title }}
    action={action(push, id)}
    {...props}
  />
);

export default withRouter(ListItem);
