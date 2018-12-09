// @flow

import { createSelector } from 'reselect';
import { connect } from '@cajacko/lib/lib/react-redux';
import { sortChecklistItems } from '../../../store/checklists/selectors';
import List from './List.component';
import { resetChecklist } from '../../../store/checklists/actions';

const selector = createSelector(
  ({ checklists }, { checklistID }) => ({
    checklist: checklists.getIn(['checklists', checklistID]),
    checklistItems: checklists.get('checklistItems'),
  }),
  ({ checklist, checklistItems }) => ({
    title: checklist.get('title'),
    checklistItems: sortChecklistItems(
      checklist.get('checklistItems'),
      checklistItems
    ),
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
