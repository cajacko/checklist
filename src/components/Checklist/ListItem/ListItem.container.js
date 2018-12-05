// @flow

import { createSelector } from 'reselect';
import { connect } from '@cajacko/lib/lib/react-redux';
import ListItem from './ListItem.render';

const selector = createSelector(
  ({ checklistItems }, { checklistItemID }) =>
    checklistItems.get(checklistItemID),
  checklistItem => checklistItem.toJS()
);

export const mapStateToProps = selector;

export default connect(mapStateToProps)(ListItem);
