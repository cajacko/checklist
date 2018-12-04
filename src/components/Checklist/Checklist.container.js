// @flow

import { createSelector } from 'reselect';
import { connect } from '@cajacko/lib/lib/react-redux';
import Checklist from './Checklist.render';

const selector = createSelector(
  ({ checklists }, { checklistID }) => checklists.get(checklistID),
  checklist => ({ checklistItems: checklist.get('checklistItems') })
);

export const mapStateToProps = selector;

export default connect(mapStateToProps)(Checklist);
