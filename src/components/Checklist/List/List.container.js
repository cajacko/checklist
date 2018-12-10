// @flow

import { connect } from '@cajacko/lib/lib/react-redux';
import { sortChecklistItems } from '../../../store/checklists/selectors';
import List from './List.component';
import { resetChecklist } from '../../../store/checklists/actions';

/**
 * Grab the title and sorted checklist items from the store
 */
const mapStateToProps = ({ checklists }, { checklistID }) => ({
  title: checklists.getIn(['checklists', checklistID, 'title']),
  checklistItems: sortChecklistItems(
    checklists.getIn(['checklists', checklistID, 'checklistItems']),
    checklists.get('checklistItems')
  ),
});

/**
 * Wrap some funcs in the redux dispatch method
 */
const mapDispatchToProps = (dispatch, { checklistID }) => ({
  onReset: () => dispatch(resetChecklist(checklistID)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
