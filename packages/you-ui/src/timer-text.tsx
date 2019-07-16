import React, { Component } from 'react';
import { TextProperties } from 'react-native';

import YouText from './text';
import { noop } from 'you-kit';

interface TimerTextPropsType extends TextProperties {
  maxTime: number;
  onTimeStart: () => void;
  onTimeEnd: () => void;
}

export default class TimerText extends Component<TimerTextPropsType, any> {
  constructor(props) {
    super(props);
    this.state = {
      timing: props.maxTime
    };
  }

  timingTimer = null;

  componentWillUnmount() {
    this.timingTimer && clearInterval(this.timingTimer);
  }

  render() {
    const { onPress, maxTime, ...others } = this.props;
    const { timing } = this.state;

    return (
      <YouText
        {...others}
        onPress={timing == maxTime ? this.handleOnPress : null}
      >
        {timing == maxTime ? this.props.children : `${timing}s`}
      </YouText>
    );
  }

  handleOnPress = () => {
    const { onPress, maxTime, onTimeEnd, onTimeStart } = this.props;

    this.timingTimer = setInterval(() => {
      const { timing } = this.state;
      if (timing == 0) {
        clearInterval(this.timingTimer);
        this.setState({
          timing: maxTime
        });
        onTimeEnd && onTimeEnd();
      } else {
        this.setState({
          timing: this.state.timing - 1
        });
      }
    }, 1000);

    onTimeStart && onTimeStart();
    this.setState(
      {
        timing: this.state.timing - 1
      },
      () => {
        onPress();
      }
    );
  };
}
