// @flow

import React, { Component } from 'react';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import Edit from './Edit.render';
import type { ReactRouter } from '../../../types/general';

type Props = ReactRouter & {
  title: ?string,
  isNew?: boolean,
  onSubmit: string => void,
  onDelete: () => void,
};

type State = {
  title: string,
};

/**
 * Business logic for the edit checklist component
 */
class EditComponent extends Component<Props, State> {
  /**
   * Initialise the class, set the initial state and bind the methods
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      title: props.title || '',
    };
  }

  onChange = (text: string) => {
    this.setState({ title: text });
  };

  onSubmit = () => {
    this.props.onSubmit(this.state.title);

    this.props.history.goBack();
  };

  onDelete = () => {
    if (!this.props.isNew) {
      this.props.onDelete();
    }

    if (this.props.isNew) {
      this.props.history.goBack();
    } else {
      this.props.history.push('/');
    }
  };

  /**
   * Render the component
   */
  render() {
    return (
      <Edit
        text={this.state.title}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        goBack={this.props.history.goBack}
        onDelete={this.onDelete}
      />
    );
  }
}

export default withRouter(EditComponent);
