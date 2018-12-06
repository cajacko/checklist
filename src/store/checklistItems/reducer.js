// @flow

import createReducer from '@cajacko/lib/utils/createReducer';
import setNewOrUpdateMap from '@cajacko/lib/utils/immutable/setNewOrUpdateMap';
import { Map } from 'immutable';
import { SAVE_CHECKLIST_ITEM, DELETE_CHECKLIST_ITEM } from './actions';
import { ReduxChecklistItemRecord } from '../../types/ChecklistItem';

const initialState = Map();

export default createReducer(initialState, {
  [SAVE_CHECKLIST_ITEM]: (
    state,
    {
      checklistItemID, text, dateLastModified, dateCreated,
    }
  ) =>
    setNewOrUpdateMap(
      state,
      checklistItemID,
      dateCreated,
      dateLastModified,
      {
        id: checklistItemID,
        text,
        isOnline: false,
      },
      ReduxChecklistItemRecord
    ),
  [DELETE_CHECKLIST_ITEM]: (state, { checklistItemID }) =>
    state.delete(checklistItemID),
});
