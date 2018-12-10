// @flow

import { connect } from '@cajacko/lib/lib/react-redux';
import ListItem from './ListItem.render';

/**
 * Get the checklist data from the store
 */
const mapStateToProps = ({ checklists }, { checklistID }) => ({
  title: checklists.getIn(['checklists', checklistID, 'title']),
});

export default connect(mapStateToProps)(ListItem);
