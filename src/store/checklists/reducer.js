// @flow

import createReducer from '@cajacko/lib/utils/createReducer';
import { Map } from 'immutable';
import setNewOrUpdateMap from '@cajacko/lib/utils/immutable/setNewOrUpdateMap';
import {
  SAVE_CHECKLIST_ITEM,
  DELETE_CHECKLIST_ITEM,
} from '../checklistItems/actions';
import {
  SET_CHECKED,
  RESET_CHECKLIST,
  SAVE_CHECKLIST,
  DELETE_CHECKLIST,
} from './actions';
import { ReduxChecklistRecord } from '../../types/Checklist';

const initialState = Map();

export default createReducer(initialState, {
  [SAVE_CHECKLIST_ITEM]: (state, { checklistItemID, checklistID }) => {
    const location = [checklistID, 'checklistItems', checklistItemID];

    if (state.hasIn(location)) return state;

    return state.setIn(
      location,
      Map({
        checked: false,
      })
    );
  },
  [DELETE_CHECKLIST_ITEM]: (state, { checklistItemID, checklistID }) => {
    const location = [checklistID, 'checklistItems', checklistItemID];

    // Do nothing if the checklist does not have it
    if (!state.hasIn(location)) return state;

    return state.deleteIn(location);
  },
  [SET_CHECKED]: (state, { checklistItemID, checklistID, checked }) =>
    state.setIn(
      [checklistID, 'checklistItems', checklistItemID, 'checked'],
      checked
    ),
  [RESET_CHECKLIST]: (state, { checklistID }) => {
    const location = [checklistID, 'checklistItems'];
    let checklistItems = state.getIn(location);

    checklistItems = checklistItems.map(val => val.set('checked', false));

    return state.setIn(location, checklistItems);
  },
  [SAVE_CHECKLIST]: (
    state,
    {
      checklistID, title, dateLastModified, dateCreated,
    }
  ) =>
    setNewOrUpdateMap(
      state,
      checklistID,
      dateCreated,
      dateLastModified,
      {
        id: checklistID,
        title,
        isOnline: false,
      },
      ReduxChecklistRecord
    ),
  [DELETE_CHECKLIST]: (state, { checklistID }) => state.delete(checklistID),
});
