// @flow

import React from 'react';
import CardsListItem from '@cajacko/lib/components/Cards/ListItem';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import Icon from '@cajacko/lib/components/Cards/ListItem/Icon';
import Text from '@cajacko/lib/components/Cards/ListItem/Text';
import { CHECKBOX, CHECKBOX_O, EDIT } from '@cajacko/lib/config/icons';
import type { ReactRouter } from '../../../types/general';

type Props = ReactRouter & {
  checklistID: string,
  checklistItemID: string,
  text: string,
  checked: boolean,
  toggleChecked: (string, boolean) => void,
};

/**
 * Redirect to the edit checklist item scene
 */
const action = (push, checklistID, checklistItemID) => () =>
  push(`/checklist/${checklistID}/checklist-item/${checklistItemID}`);

/**
 * A checklist item component
 */
const ListItem = ({
  checked,
  toggleChecked,
  text,
  checklistID,
  checklistItemID,
  history: { push },
}: Props) => (
  <CardsListItem>
    <Icon
      icon={checked ? CHECKBOX : CHECKBOX_O}
      action={toggleChecked(!checked)}
    />
    <Text text={{ _textFromConst: text }} action={toggleChecked(!checked)} />
    <Icon
      icon={EDIT}
      action={action(push, checklistID, checklistItemID)}
      greyedOut
    />
  </CardsListItem>
);

export default withRouter(ListItem);
