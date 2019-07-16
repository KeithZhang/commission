/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2018/10/17
 **/
import React, { Component } from 'react';
import { Image } from 'react-native';

type Props = {
  style?: any;
};
export default class DefaultImage extends Component<Props> {
  render() {
    return (
      <Image
        style={this.props.style}
        source={require('assets/goods-image-demo.png')}
      />
    );
  }
}
