// @flow

import createReducer from '@cajacko/lib/utils/createReducer';
import { fromJS } from 'immutable';

const initialState = fromJS({
  'id-1': {
    id: 'id-1',
    text: 'I am a checklist item',
  },
});

export default createReducer(initialState, {});
