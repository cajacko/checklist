// @flow

import React, { PureComponent } from 'react';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import type { ImmutableChecklistItems } from '../../../types/ChecklistItem';
import List from './List.render';
import type { ReactRouter } from '../../../types/general';

type Props = ReactRouter & {
  checklistItems: ImmutableChecklistItems,
  checklistID: string,
  onReset: () => void,
  title: string,
};

type State = {};

/**
 * Business logic for the checklist component
 */
class ListComponent extends PureComponent<Props, State> {
  addItem = () => {
    this.props.history.push(`/checklist/${this.props.checklistID}/checklist-item/new`);
  };

  /**
   * Render the component
   */
  render() {
    return (
      <List
        checklistItems={this.props.checklistItems}
        addItem={this.addItem}
        checklistID={this.props.checklistID}
        onReset={this.props.onReset}
        goBack={this.props.history.goBack}
        title={this.props.title}
      />
    );
  }
}

export default withRouter(ListComponent);
