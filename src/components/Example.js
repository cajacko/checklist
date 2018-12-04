// @flow

import React from 'react';
import HeaderWithContent from '@cajacko/lib/components/Layout/HeaderWithContent';
import { Span } from '@cajacko/lib/components/UI';

const Example = () => (
  <HeaderWithContent
    header={{
      title: 'General.Header',
    }}
  >
    <Span>Example</Span>
  </HeaderWithContent>
);

export default Example;
