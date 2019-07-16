import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TextStyle,
  ViewStyle,
  PixelRatio,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const noop = () => {};

export interface ButtonPropsType {
  text: string;
  type?: 'primary' | 'warning' | 'ghost';
  size?: 'large' | 'medium' | 'small' | 'extra_small';
  disabled?: boolean;
  onPress?: (_?: any) => void;
  onPressIn?: (_?: any) => void;
  onPressOut?: (_?: any) => void;
}

export default class Btn extends Component<ButtonPropsType> {
  static defaultProps = {
    disabled: false,
    text: '',
    type: 'primary',
    size: 'large',
    onPress: noop,
    onPressIn: noop,
    onPressOut: noop
  };

  render() {
    const { type, size, disabled } = this.props;

    const containerWrapperStyles = [
      YouStyles.x_y_center,
      styles[`container_${type}_${disabled ? 'disabled' : 'default'}`],
      styles[`container_${size}`]
    ];

    const textWrapperStyles = [
      styles[`text_${type}_${disabled ? 'disabled' : 'default'}`],
      styles[`text_${size}`]
    ];

    return (
      <TouchableHighlight
        style={containerWrapperStyles}
        disabled={disabled}
        activeOpacity={1}
        underlayColor={this.underlayColor()}
        onPress={this.onPress}
      >
        <Text style={textWrapperStyles}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }

  underlayColor = () => {
    const { type } = this.props;
    let result = '';
    if (type === 'primary') {
      result = YouTheme.color.brand_primary_tap;
    }
    if (type === 'ghost') {
      result = YouTheme.color.fill_grey;
    }

    return result;
  };

  onPress = (e?: any) => {
    this.props.onPress && this.props.onPress(e);
  };
}

const styles = StyleSheet.create({
  container_primary_default: {
    backgroundColor: YouTheme.color.brand_primary
  },

  container_warning_default: {
    backgroundColor: YouTheme.color.brand_warning
  },
  container_ghost_default: {
    backgroundColor: YouTheme.color.fill_white,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: YouTheme.color.border
  } as ViewStyle,
  container_primary_disabled: {
    backgroundColor: YouTheme.color.fill_grey
  },
  container_warning_disabled: {},
  container_ghost_disabled: {
    backgroundColor: YouTheme.color.fill_white,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: YouTheme.color.border
  },
  container_large: {
    width: width - 32,
    height: 44,
    borderRadius: YouTheme.radius.lg
  } as ViewStyle,
  container_medium: {
    height: 36
  },
  container_small: {
    height: 28
  },
  container_smallest: {
    height: 22
  },
  text_primary_default: {
    color: YouTheme.color.text_base_inverse
  },
  text_warning_default: {
    color: YouTheme.color.brand_warning
  },
  text_ghost_default: {
    color: YouTheme.color.text_base
  },
  text_primary_disabled: {
    color: YouTheme.color.text_caption
  },
  text_warning_disabled: {},
  text_ghost_disabled: {
    color: YouTheme.color.text_disabled
  },
  text_large: {
    fontSize: YouTheme.font.head
  },
  text_medium: {
    fontSize: YouTheme.font.head
  },
  text_small: {
    fontSize: YouTheme.font.subhead
  },
  text_extra_small: {
    fontSize: YouTheme.font.caption_sm
  }
});
