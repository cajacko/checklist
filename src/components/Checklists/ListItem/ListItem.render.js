// @flow

import React from 'react';
import CardsListItem from '@cajacko/lib/components/Cards/ListItem';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import { EDIT } from '@cajacko/lib/config/icons';
import Text from '@cajacko/lib/components/Cards/ListItem/Text';
import Icon from '@cajacko/lib/components/Cards/ListItem/Icon';
import type { ReactRouter } from '../../../types/general';

type Props = ReactRouter & {
  id: string,
  title: string,
};

/**
 * Redirect to the checklist
 */
const goTo = (push, id) => () => push(`/checklist/${id}`);

/**
 * Go to the edit view
 */
const edit = (push, id) => () => push(`/checklist/${id}/edit`);

/**
 * A checklist item component
 */
const ListItem = ({ title, id, history: { push } }: Props) => (
  <CardsListItem>
    <Text text={{ _textFromConst: title }} action={goTo(push, id)} />
    <Icon icon={EDIT} action={edit(push, id)} greyedOut />
  </CardsListItem>
);

export default withRouter(ListItem);
