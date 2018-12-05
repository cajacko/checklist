// @flow

import { createSelector } from 'reselect';
import { connect } from '@cajacko/lib/lib/react-redux';
import ChecklistItem from './ChecklistItem.component';
import { saveChecklistItem } from '../../store/checklistItems/actions';

const selector = createSelector(
  ({ checklistItems }, { checklistItemID, isNew }) =>
    (isNew ? 'IS_NEW' : checklistItems.get(checklistItemID)),
  checklistItem => (checklistItem === 'IS_NEW' ? {} : checklistItem.toJS())
);

export const mapStateToProps = selector;

/**
 * Map the redux actions to props
 */
const mapDispatchToProps = (dispatch, { id }) => ({
  /**
   * On submit, dispatch the save checklist item action
   */
  onSubmit: text => dispatch(saveChecklistItem(text, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChecklistItem);
