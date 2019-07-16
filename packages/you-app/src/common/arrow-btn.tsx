/**
 * @desc
 *
 * 公共的剪头按钮.
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2018/10/17
 **/
import React, {Component} from "react";
import {Text, View} from 'react-native';


type Props = {
  style?:any
};
export default class ArrowBtn extends Component<Props>{

  render(){
    return ( <View style={this.props.style}><Text>></Text></View>)
  }
}