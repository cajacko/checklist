// @flow

import React from 'react';
import CardsListItem from '@cajacko/lib/components/Cards/ListItem';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import { CHECKBOX, CHECKBOX_O } from '@cajacko/lib/config/icons';
import type { ReactRouter } from '../../../types/general';

type Props = ReactRouter & {
  id: string,
  text: string,
  checked: boolean,
  toggleChecked: (string, boolean) => void,
};

const action = (push, id) => () => push(`/checklist-item/${id}`);

/**
 * A checklist item component
 */
const ListItem = ({
  checked,
  toggleChecked,
  text,
  id,
  history: { push },
  ...props
}: Props) => (
  <CardsListItem
    leftIcon={checked ? CHECKBOX : CHECKBOX_O}
    text={{ _textFromConst: text }}
    textAction={action(push, id)}
    leftIconAction={toggleChecked(id, !checked)}
    {...props}
  />
);

export default withRouter(ListItem);
