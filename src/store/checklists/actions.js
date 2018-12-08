// @flow

import makeActionCreator from '@cajacko/lib/utils/makeActionCreator';
import uuid from '@cajacko/lib/utils/uuid';

export const SAVE_CHECKLIST_ITEM = 'SAVE_CHECKLIST_ITEM';
export const DELETE_CHECKLIST_ITEM = 'DELETE_CHECKLIST_ITEM';
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

export const saveChecklistItem = makeActionCreator(
  SAVE_CHECKLIST_ITEM,
  (text, checklistID, checklistItemID) => {
    const now = new Date().getTime();

    const checklistItem = {
      checklistID,
      checklistItemID: checklistItemID || uuid(),
      text,
      dateLastModified: now,
      dateCreated: checklistItemID ? undefined : now,
    };

    return checklistItem;
  }
);

export const deleteChecklistItem = makeActionCreator(
  DELETE_CHECKLIST_ITEM,
  'checklistID',
  'checklistItemID'
);
