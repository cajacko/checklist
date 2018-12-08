// @flow

import { Record, Map } from 'immutable';

export type ChecklistID = string;

export type Checklist = {
  id: ChecklistID,
  title: string,
  date: Date,
  dateCreated: Date,
  dateLastModified: Date,
};

export type ImmutableChecklists = {
  toJS: () => Array<Checklist>,
};

const checklistRecord = {
  id: null,
  title: '',
  checklistItems: Map(),
  dateCreated: null,
  dateLastModified: null,
};

export const ChecklistRecord = Record(checklistRecord);

export const ReduxChecklistRecord = Record({
  isOnline: false,
  ...checklistRecord,
});
