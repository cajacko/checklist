// @flow

import React, { PureComponent } from 'react';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import type { ImmutableChecklists } from '../../../types/Checklist';
import List from './List.render';
import type { ReactRouter } from '../../../types/general';

type Props = ReactRouter & {
  checklists: ImmutableChecklists,
};

type State = {};

/**
 * Business logic for the checklist component
 */
class ListComponent extends PureComponent<Props, State> {
  addChecklist = () => {
    this.props.history.push('/checklist/new/edit');
  };

  /**
   * Render the component
   */
  render() {
    logger.log(this.props);
    return (
      <List
        checklists={this.props.checklists}
        addChecklist={this.addChecklist}
      />
    );
  }
}

export default withRouter(ListComponent);
