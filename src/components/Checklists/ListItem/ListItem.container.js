// @flow

import { connect } from '@cajacko/lib/lib/react-redux';
import { createSelector } from 'reselect';
import ListItem from './ListItem.render';

const selector = createSelector(
  ({ checklists }, { checklistID }) => checklists.get(checklistID),
  checklist => checklist.toJS()
);

/**
 * Get the checklist data from the store
 */
const mapStateToProps = selector;

export default connect(mapStateToProps)(ListItem);
