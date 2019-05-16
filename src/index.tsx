import * as React from 'react';
import { render, Color } from 'ink';

interface IProps {}

interface IState {
  i: number;
}

class Counter extends React.Component<IProps, IState> {
  timer: any;

  constructor(props: IProps) {
    super(props);

    this.state = {
      i: 0
    };
  }

  render() {
    return <Color green>{this.state.i} tests passed</Color>;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        i: this.state.i + 1
      });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

render(<Counter />);
