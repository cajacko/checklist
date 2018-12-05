// @flow

import makeActionCreator from '@cajacko/lib/utils/makeActionCreator';
import uuid from '@cajacko/lib/utils/uuid';

export const SAVE_CHECKLIST_ITEM = 'SAVE_CHECKLIST_ITEM';
export const DELETE_CHECKLIST_ITEM = 'DELETE_CHECKLIST_ITEM';

export const saveChecklistItem = makeActionCreator(
  SAVE_CHECKLIST_ITEM,
  (text, id) => {
    const now = new Date().getTime();

    const checklistItem = {
      id: id || uuid(),
      text,
      dateLastModified: now,
      dateCreated: id ? undefined : now,
    };

    return checklistItem;
  }
);

export const deleteChecklistItem = makeActionCreator(
  DELETE_CHECKLIST_ITEM,
  'id'
);
