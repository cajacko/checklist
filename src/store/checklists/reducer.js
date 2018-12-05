// @flow

import createReducer from '@cajacko/lib/utils/createReducer';
import { fromJS } from 'immutable';
import {
  SAVE_CHECKLIST_ITEM,
  DELETE_CHECKLIST_ITEM,
} from '../checklistItems/actions';

const initialState = fromJS({
  'checklist-1': {
    id: 'checklist-1',
    title: 'Checklist title',
    checklistItems: ['id-1'],
  },
});

export default createReducer(initialState, {
  [SAVE_CHECKLIST_ITEM]: (state, { id }) => {
    const location = ['checklist-1', 'checklistItems'];

    let checklistItems = state.getIn(location);

    // Don't add if it already exists
    if (checklistItems.includes(id)) return state;

    checklistItems = checklistItems.push(id);

    return state.setIn(location, checklistItems);
  },
  [DELETE_CHECKLIST_ITEM]: (state, { id }) => {
    const location = ['checklist-1', 'checklistItems'];

    const checklistItems = state.getIn(location);

    const index = checklistItems.indexOf(id);

    // Do nothing if the checklist does not have it
    if (index === -1) return state;

    return state.deleteIn(location.concat(index), id);
  },
});
