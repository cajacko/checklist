// @flow

import React, { Fragment } from 'react';
import CardsListItem from '@cajacko/lib/components/Cards/ListItem';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import { EDIT } from '@cajacko/lib/config/icons';
import Text from '@cajacko/lib/components/Cards/ListItem/Text';
import Icon from '@cajacko/lib/components/Cards/ListItem/Icon';
import type { ReactRouter } from '../../../types/general';

type Props = ReactRouter & {
  checklistID: string,
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
const ListItem = ({ title, checklistID, history: { push } }: Props) => (
  <CardsListItem paddingLeft>
    <Text text={{ _textFromConst: title }} action={goTo(push, checklistID)} />
    <Icon icon={EDIT} action={edit(push, checklistID)} greyedOut />
  </CardsListItem>
);

export default withRouter(ListItem);
