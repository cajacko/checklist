// @flow

import { connect } from '@cajacko/lib/lib/react-redux';
import ListItem from './ListItem.render';
import { setChecked } from '../../../store/checklists/actions';

/**
 * Get the checklist data from the store
 */
const mapStateToProps = (
  { checklistItems, checklists },
  { checklistID, checklistItemID }
) => ({
  checked: checklists.getIn([
    checklistID,
    'checklistItems',
    checklistItemID,
    'checked',
  ]),
  ...checklistItems.get(checklistItemID).toJS(),
});

/**
 * Wrap some funcs in redux dispatch
 */
const mapDispatchToProps = (dispatch, { checklistID, checklistItemID }) => ({
  toggleChecked: checked => () =>
    dispatch(setChecked(checklistID, checklistItemID, checked)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);
