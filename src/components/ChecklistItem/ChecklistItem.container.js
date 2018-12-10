// @flow

import { connect } from '@cajacko/lib/lib/react-redux';
import ChecklistItem from './ChecklistItem.component';
import {
  saveChecklistItem,
  deleteChecklistItem,
} from '../../store/checklists/actions';

/**
 * Get the checklist item text from the store
 */
const mapStateToProps = ({ checklists }, { checklistItemID, isNew }) => ({
  text: isNew
    ? ''
    : checklists.getIn(['checklistItems', checklistItemID, 'text']),
});

/**
 * Map the redux actions to props
 */
const mapDispatchToProps = (dispatch, { checklistItemID, checklistID }) => ({
  /**
   * On submit, dispatch the save checklist item action
   */
  onSubmit: text =>
    dispatch(saveChecklistItem(text, checklistID, checklistItemID)),
  onDelete: () => dispatch(deleteChecklistItem(checklistID, checklistItemID)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChecklistItem);
