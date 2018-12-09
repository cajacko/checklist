// @flow

import { connect } from '@cajacko/lib/lib/react-redux';
import { createSelector } from 'reselect';
import { sortChecklists } from '../../../store/checklists/selectors';
import List from './List.component';

const selector = createSelector(
  ({ checklists }) => checklists.get('checklists'),
  checklists => ({
    checklists: Object.keys(sortChecklists(checklists).toJS()),
  })
);

/**
 * Grab the checklists from the state and pass as props
 */
const mapStateToProps = selector;

export default connect(mapStateToProps)(List);
