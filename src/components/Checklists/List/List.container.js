// @flow

import { connect } from '@cajacko/lib/lib/react-redux';
import List from './List.component';

/**
 * Grab the checklists from the state and pass as props
 */
const mapStateToProps = ({ checklists }) => ({ checklists });

export default connect(mapStateToProps)(List);
