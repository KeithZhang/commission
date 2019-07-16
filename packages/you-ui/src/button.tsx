import React, { Component } from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import YouText from './text';
import YStyle from './y-style';
const noop = () => {};

interface IBtnProps {
  size?: 'large' | 'middle' | 'small';
  type?: 'primary' | 'danger' | 'warning';
  text?: string;
  onPress?: () => void;
}

export default class Button extends Component<IBtnProps> {
  static defaultProps = {
    size: 'large',
    type: 'primary',
    text: '',
    onPress: noop
  };

  render() {
    const container = YStyle(styles, {
      basic: true,
      large: this.props.size === 'large',
      middle: this.props.size === 'middle',
      small: this.props.size === 'small',
      primary: this.props.type === 'primary'
    });
    return (
      <TouchableOpacity
        style={container}
        activeOpacity={0.7}
        onPress={this.props.onPress}
      >
        <View style={styles.innerContainer}>
          <YouText
            style={this.props.size === 'small' ? styles.smallText : styles.text}
          >
            {this.props.text}
          </YouText>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  basic: {
    alignContent: 'center',
    justifyContent: 'center'
  } as ViewStyle,

  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  } as ViewStyle,

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF'
  } as TextStyle,

  smallText: {
    fontSize: 14,
    color: '#FFF'
  } as TextStyle,

  large: {
    width: 345,
    height: 44,
    padding: 23,
    borderRadius: 22
  } as ViewStyle,

  middle: {
    width: 180,
    height: 36,
    padding: 24,
    borderRadius: 22
  } as ViewStyle,

  small: {
    width: 60,
    height: 28,
    // padding: 20,
    borderRadius: 14
  } as ViewStyle,

  primary: {
    backgroundColor: '#4188FB'
  }
});
