// @flow

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
