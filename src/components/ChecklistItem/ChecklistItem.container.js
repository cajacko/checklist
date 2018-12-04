// @flow

import { createSelector } from 'reselect';
import { connect } from '@cajacko/lib/lib/react-redux';
import ChecklistItem from './ChecklistItem.render';

const selector = createSelector(
  ({ checklistItems }, { checklistItemID }) =>
    checklistItems.get(checklistItemID),
  checklistItem => checklistItem.toJS()
);

export const mapStateToProps = selector;

export default connect(mapStateToProps)(ChecklistItem);
