// @flow

import createReducer from '@cajacko/lib/utils/createReducer';
import setNewOrUpdateMap from '@cajacko/lib/utils/immutable/setNewOrUpdateMap';
import { fromJS } from 'immutable';
import { SAVE_CHECKLIST_ITEM, DELETE_CHECKLIST_ITEM } from './actions';
import { ReduxChecklistItemRecord } from '../../types/ChecklistItem';

const initialState = fromJS({});

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
  [DELETE_CHECKLIST_ITEM]: (state, { id }) => state.delete(id),
});
