// @flow

import { Record } from 'immutable';

export type ChecklistItemID = string;

export type ChecklistItem = {
  id: ChecklistItemID,
  text: string,
  date: Date,
  dateCreated: Date,
  dateLastModified: Date,
};

export type ImmutableChecklistItems = {
  toJS: () => Array<ChecklistItem>,
};

export const ChecklistItemRecord = Record({
  id: null,
  text: '',
  dateCreated: null,
  dateLastModified: null,
});
