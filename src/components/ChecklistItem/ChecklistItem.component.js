// @flow

import React, { Component } from 'react';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import ChecklistItem from './ChecklistItem.render';
import type { ChecklistItem as ChecklistItemType } from '../../types/ChecklistItem';
import type { ReactRouter } from '../../types/general';

type Props = ReactRouter &
  ChecklistItemType & {
    isNew?: boolean,
    onSubmit: string => void,
    onDelete: () => void,
  };

type State = {
  text: string,
};

/**
 * Business logic for the checklist item
 */
class ChecklistItemComponent extends Component<Props, State> {
  /**
   * Initialise the class, set the initial state and bind the methods
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      text: props.isNew ? '' : props.text,
    };
  }

  onChange = (text: string) => {
    this.setState({ text });
  };

  onSubmit = () => {
    this.props.onSubmit(this.state.text);
    this.props.history.goBack();
  };

  onDelete = () => {
    if (!this.props.isNew) {
      this.props.onDelete();
    }

    this.props.history.goBack();
  };

  /**
   * Render the component
   */
  render() {
    return (
      <ChecklistItem
        text={this.state.text}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        goBack={this.props.history.goBack}
        onDelete={this.onDelete}
      />
    );
  }
}

export default withRouter(ChecklistItemComponent);
