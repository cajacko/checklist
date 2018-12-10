// @flow

import createReducer from '@cajacko/lib/utils/createReducer';
import { Map, fromJS } from 'immutable';
import setNewOrUpdateMap from '@cajacko/lib/utils/immutable/setNewOrUpdateMap';
import {
  SET_CHECKED,
  RESET_CHECKLIST,
  SAVE_CHECKLIST,
  DELETE_CHECKLIST,
  SAVE_CHECKLIST_ITEM,
  DELETE_CHECKLIST_ITEM,
} from './actions';
import { ReduxChecklistRecord } from '../../types/Checklist';
import { ReduxChecklistItemRecord } from '../../types/ChecklistItem';

const initialState = fromJS({
  checklists: Map(),
  checklistItems: Map(),
});

export default createReducer(initialState, {
  [SAVE_CHECKLIST_ITEM]: (
    state,
    {
      checklistItemID, checklistID, dateCreated, dateLastModified, text,
    }
  ) => {
    const newState = state.set(
      'checklistItems',
      setNewOrUpdateMap(
        state.get('checklistItems'),
        checklistItemID,
        dateCreated,
        dateLastModified,
        {
          id: checklistItemID,
          text,
          isOnline: false,
        },
        ReduxChecklistItemRecord
      )
    );

    const location = [
      'checklists',
      checklistID,
      'checklistItems',
      checklistItemID,
    ];

    if (newState.hasIn(location)) return newState;

    return newState.setIn(
      location,
      Map({
        id: checklistItemID,
        checked: false,
      })
    );
  },
  [DELETE_CHECKLIST_ITEM]: (state, { checklistItemID, checklistID }) => {
    const newState = state.deleteIn(['checklistItems', checklistItemID]);

    const location = [
      'checklists',
      checklistID,
      'checklistItems',
      checklistItemID,
    ];

    // Do nothing if the checklist does not have it
    if (!newState.hasIn(location)) return newState;

    return newState.deleteIn(location);
  },
  [SET_CHECKED]: (state, { checklistItemID, checklistID, checked }) =>
    state.setIn(
      ['checklists', checklistID, 'checklistItems', checklistItemID, 'checked'],
      checked
    ),
  [RESET_CHECKLIST]: (state, { checklistID }) => {
    const location = ['checklists', checklistID, 'checklistItems'];
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
    state.set(
      'checklists',
      setNewOrUpdateMap(
        state.get('checklists'),
        checklistID,
        dateCreated,
        dateLastModified,
        {
          id: checklistID,
          title,
          isOnline: false,
        },
        ReduxChecklistRecord
      )
    ),
  [DELETE_CHECKLIST]: (state, { checklistID }) => {
    let newState = state.deleteIn(['checklists', checklistID]);

    state
      .getIn(['checklists', checklistID, 'checklistItems'])
      .keySeq()
      .forEach((key) => {
        newState = newState.deleteIn(['checklistItems', key]);
      });

    return newState;
  },
});
