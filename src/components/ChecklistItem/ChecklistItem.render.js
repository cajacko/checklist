// @flow

import React from 'react';
import TextArea from '@cajacko/lib/components/Forms/TextArea';
import HeaderWithContent from '@cajacko/lib/components/Layout/HeaderWithContent';

type Props = {
  text: string,
  onChange: string => void,
  onSubmit: () => void,
  goBack: () => void,
};

/**
 * The home scene
 */
const ChecklistItem = ({
  text, onChange, onSubmit, goBack,
}: Props) => (
  <HeaderWithContent
    header={{
      back: goBack,
      title: 'ChecklistItem.Header.New',
      rightText: 'General.Done',
      rightAction: onSubmit,
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
