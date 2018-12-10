// @flow

import { createSelector } from 'reselect';

/**
 * Sort items that contain the standard dateModified and dateCreated fields
 */
const sort = forward => (a, b) => {
  const dateAModified = a.get('dateModified');
  const dateBModified = b.get('dateModified');

  if (dateAModified > dateBModified) return forward ? 1 : -1;
  if (dateAModified < dateBModified) return forward ? -1 : 1;

  const dateACreated = a.get('dateCreated');
  const dateBCreated = b.get('dateCreated');

  if (dateACreated > dateBCreated) return forward ? 1 : -1;
  if (dateACreated < dateBCreated) return forward ? -1 : 1;

  return 0;
};

export const sortChecklists = createSelector(
  checklists => checklists,
  checklists => checklists.sort(sort(true))
);

export const sortChecklistItems = createSelector(
  (checklistItems, checklistItemsByID) => ({
    checklistItems,
    checklistItemsByID,
  }),
  ({ checklistItems, checklistItemsByID }) =>
    checklistItems.sort((a, b) => {
      const aID = a.get('id');
      const bID = b.get('id');

      // This handles if redux data is old and does not have ID's on
      // checklist items
      if (!aID && bID) return 1;
      if (aID && !bID) return -1;
      if (!aID && !bID) return 0;

      const checklistItemA = checklistItemsByID.get(aID);
      const checklistItemB = checklistItemsByID.get(bID);

      return sort(true)(checklistItemA, checklistItemB);
    })
);
