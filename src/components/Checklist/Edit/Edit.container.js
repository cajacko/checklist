// @flow

import { connect } from '@cajacko/lib/lib/react-redux';
import Edit from './Edit.component';
import {
  saveChecklist,
  deleteChecklist,
} from '../../../store/checklists/actions';

/**
 * Get the checklist title from the store
 */
const mapStateToProps = ({ checklists }, { checklistID, isNew }) => ({
  title: isNew ? '' : checklists.getIn(['checklists', checklistID, 'title']),
});

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
