// @flow

import React from 'react';
import CardsListItem from '@cajacko/lib/components/Cards/ListItem';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import { CHECKBOX, CHECKBOX_O } from '@cajacko/lib/config/icons';
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
  ...props
}: Props) => (
  <CardsListItem
    leftIcon={checked ? CHECKBOX : CHECKBOX_O}
    text={{ _textFromConst: text }}
    textAction={action(push, checklistID, checklistItemID)}
    leftIconAction={toggleChecked(!checked)}
    {...props}
  />
);

export default withRouter(ListItem);
