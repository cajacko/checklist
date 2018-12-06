// @flow

import { createSelector } from 'reselect';
import { connect } from '@cajacko/lib/lib/react-redux';
import Edit from './Edit.component';
import {
  saveChecklist,
  deleteChecklist,
} from '../../../store/checklists/actions';

const selector = createSelector(
  ({ checklists }, { checklistID, isNew }) =>
    (isNew || !checklistID ? 'IS_NEW' : checklists.get(checklistID)),
  checklists => (checklists === 'IS_NEW' ? {} : checklists.toJS())
);

export const mapStateToProps = selector;

/**
 * Map the redux actions to props
 */
const mapDispatchToProps = (dispatch, { checklistID }) => ({
  /**
   * On submit, dispatch the save checklist item action
   */
  onSubmit: text => dispatch(saveChecklist(text, checklistID)),
  onDelete: () => dispatch(deleteChecklist(checklistID)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
