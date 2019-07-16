/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2018/10/17
 **/

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

type Props = {};

export default class Item extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <View><Text>会员号：P1231231232333</Text></View>
          <View><Text>订单金额：¥88</Text></View>
        </View>
        <View style={styles.item}>
          <View><Text>订单号：T001100022000</Text></View>
          <View><Text>直推奖：¥12.12</Text></View>
        </View>
        <View style={styles.item}>
          <View><Text style={{color:"gray"}}>创建日期：2018-10-01 15:22:11</Text></View>
          <View><Text style={{backgroundColor:"red",color:"white",fontSize:14,padding:4}}>已结算</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:15,
    paddingRight:15,
  },
  item:{
    marginTop:20,
    flexDirection:"row",
    justifyContent:"space-between",
  }
});
