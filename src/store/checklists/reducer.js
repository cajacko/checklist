// @flow

import createReducer from '@cajacko/lib/utils/createReducer';
import { fromJS } from 'immutable';

const initialState = fromJS({
  'checklist-1': {
    id: 'checklist-1',
    title: 'Checklist title',
    checklistItems: ['id-1'],
  },
});

export default createReducer(initialState, {});
