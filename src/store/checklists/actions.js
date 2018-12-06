// @flow

import makeActionCreator from '@cajacko/lib/utils/makeActionCreator';

export const SET_CHECKED = 'SET_CHECKED';
export const RESET_CHECKLIST = 'RESET_CHECKLIST';

export const setChecked = makeActionCreator(SET_CHECKED, 'id', 'checked');

export const resetChecklist = makeActionCreator(RESET_CHECKLIST, 'id');
