/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2018/10/17
 **/

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Status from '../home/component/status';
import ReturnBar from '../common/return-bar';
import Item from './component/Item';

type Props = {};
export default class SummaryDetail extends Component<Props> {
  render() {
    return (
      <View>
        <Status />
        <ReturnBar />
        <View style={styles.dateRange}>
          <Text>开始日期,结束日期</Text>
        </View>
        <View style={styles.list}>
          <Item />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  dateRange: {
    height: 50
  },
  list: {}
});
