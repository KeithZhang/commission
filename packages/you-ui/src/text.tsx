import React, { Component } from 'react';
import { Text, TextProperties } from 'react-native';
import { noop } from 'you-kit';

export default class TextComponent extends Component<TextProperties> {
  doublePressTimes = 0;
  doublePressTimer = null;

  componentWillUnmount() {
    this.doublePressTimer && clearInterval(this.doublePressTimer);
  }

  render() {
    const { onPress, ...others } = this.props;

    return (
      <Text
        allowFontScaling={false}
        {...others}
        onPress={this.doublePressTimes == 0 ? this.handleOnPress : null}
      />
    );
  }

  handleOnPress = () => {
    const { onPress } = this.props;
    this.doublePressTimes++;
    this.doublePressTimer = setInterval(() => {
      this.doublePressTimes = 0;
    }, 1000);
    onPress && onPress();
  };
}
