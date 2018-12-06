// @flow

import makeActionCreator from '@cajacko/lib/utils/makeActionCreator';
import uuid from '@cajacko/lib/utils/uuid';

export const SET_CHECKED = 'SET_CHECKED';
export const RESET_CHECKLIST = 'RESET_CHECKLIST';
export const SAVE_CHECKLIST = 'SAVE_CHECKLIST';
export const DELETE_CHECKLIST = 'DELETE_CHECKLIST';

export const setChecked = makeActionCreator(
  SET_CHECKED,
  'checklistID',
  'checklistItemID',
  'checked'
);

export const resetChecklist = makeActionCreator(RESET_CHECKLIST, 'checklistID');

export const saveChecklist = makeActionCreator(
  SAVE_CHECKLIST,
  (title, checklistID) => {
    const now = new Date().getTime();

    const checklistItem = {
      checklistID: checklistID || uuid(),
      title,
      dateLastModified: now,
      dateCreated: checklistID ? undefined : now,
    };

    return checklistItem;
  }
);

export const deleteChecklist = makeActionCreator(
  DELETE_CHECKLIST,
  'checklistID'
);
