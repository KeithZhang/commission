/**
 * @desc
 *
 * 定义一条间隔线.
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2018/10/17
 **/
import React from "react";
import {View} from 'react-native';


export default function(props:any){
  return  (
    <View style={[{
      height:1,
      backgroundColor:"black",
    },props.style||{}]}>
    </View>)
}