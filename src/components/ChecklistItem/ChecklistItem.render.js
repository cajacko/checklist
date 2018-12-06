// @flow

import React from 'react';
import TextArea from '@cajacko/lib/components/Forms/TextArea';
import { TRASH, CHECK } from '@cajacko/lib/config/icons';
import HeaderWithContent from '@cajacko/lib/components/Layout/HeaderWithContent';

type Props = {
  text: string,
  onChange: string => void,
  onSubmit: () => void,
  onDelete: () => void,
  goBack: () => void,
};

/**
 * The home scene
 */
const ChecklistItem = ({
  text,
  onChange,
  onSubmit,
  goBack,
  onDelete,
}: Props) => (
  <HeaderWithContent
    header={{
      back: goBack,
      useCloseIconForBack: true,
      rightButtons: [
        {
          key: 'delete',
          icon: TRASH,
          action: onDelete,
        },
        {
          key: 'done',
          icon: CHECK,
          action: onSubmit,
        },
      ],
    }}
  >
    <TextArea
      value={text}
      autoFocus
      placeholder="ChecklistItem.Placeholder"
      disableNewLines
      submitOnReturn
      onChange={onChange}
      onSubmit={onSubmit}
      returnKeyType="done"
    />
  </HeaderWithContent>
);

export default ChecklistItem;
