// @flow

import { createSelector } from 'reselect';
import { connect } from '@cajacko/lib/lib/react-redux';
import ChecklistItem from './ChecklistItem.component';
import {
  saveChecklistItem,
  deleteChecklistItem,
} from '../../store/checklists/actions';

const selector = createSelector(
  ({ checklists }, { checklistItemID, isNew }) =>
    (isNew || !checklistItemID
      ? 'IS_NEW'
      : checklists.getIn(['checklistItems', checklistItemID])),
  checklistItem => (checklistItem === 'IS_NEW' ? {} : checklistItem.toJS())
);

export const mapStateToProps = selector;

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
