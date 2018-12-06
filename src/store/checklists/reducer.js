// @flow

import createReducer from '@cajacko/lib/utils/createReducer';
import { fromJS } from 'immutable';
import {
  SAVE_CHECKLIST_ITEM,
  DELETE_CHECKLIST_ITEM,
} from '../checklistItems/actions';
import { SET_CHECKED, RESET_CHECKLIST } from './actions';

const initialState = fromJS({
  'checklist-1': {
    id: 'checklist-1',
    title: 'Checklist title',
    checklistItems: {},
  },
});

export default createReducer(initialState, {
  [SAVE_CHECKLIST_ITEM]: (state, { id }) => {
    const location = ['checklist-1', 'checklistItems', id];

    if (state.hasIn(location)) return state;

    return state.setIn(
      location,
      fromJS({
        checked: false,
      })
    );
  },
  [DELETE_CHECKLIST_ITEM]: (state, { id }) => {
    const location = ['checklist-1', 'checklistItems', id];

    // Do nothing if the checklist does not have it
    if (!state.hasIn(location)) return state;

    return state.deleteIn(location);
  },
  [SET_CHECKED]: (state, { id, checked }) =>
    state.setIn(['checklist-1', 'checklistItems', id, 'checked'], checked),
  [RESET_CHECKLIST]: (state, { id }) => {
    const location = [id, 'checklistItems'];
    let checklistItems = state.getIn(location);

    checklistItems = checklistItems.map(val => val.set('checked', false));

    return state.setIn(location, checklistItems);
  },
});
