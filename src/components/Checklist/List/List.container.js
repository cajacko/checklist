// @flow

import { createSelector } from 'reselect';
import { connect } from '@cajacko/lib/lib/react-redux';
import List from './List.component';
import { resetChecklist } from '../../../store/checklists/actions';

const selector = createSelector(
  ({ checklists }, { checklistID }) => checklists.get(checklistID),
  checklist => ({
    checklistItems: checklist.get('checklistItems'),
  })
);

const mapStateToProps = selector;

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
