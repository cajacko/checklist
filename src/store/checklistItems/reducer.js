// @flow

import createReducer from '@cajacko/lib/utils/createReducer';
import setNewOrUpdateMap from '@cajacko/lib/utils/immutable/setNewOrUpdateMap';
import { fromJS } from 'immutable';
import { SAVE_CHECKLIST_ITEM } from './actions';
import { ReduxChecklistItemRecord } from '../../types/ChecklistItem';

const initialState = fromJS({
  'id-1': {
    id: 'id-1',
    text: 'I am a checklist item',
    isOnline: true,
  },
});

export default createReducer(initialState, {
  [SAVE_CHECKLIST_ITEM]: (state, {
    id, text, dateLastModified, dateCreated,
  }) =>
    setNewOrUpdateMap(
      state,
      id,
      dateCreated,
      dateLastModified,
      {
        id,
        text,
        isOnline: false,
      },
      ReduxChecklistItemRecord
    ),
});
