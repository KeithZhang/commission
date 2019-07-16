/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2018/10/11
 **/
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Status from '../home/component/status';
import Button from 'antd-mobile-rn/es/button/index.native';
type Props = {};

export default class SummaryFiltrate extends Component<Props> {
  //TODO 怎么固定在底部 ?
  render() {
    return (
      <View style={styles.container}>
        <Status />
        <View style={styles.item}>
          <View style={styles.head}>
            <Text>订单状态</Text>
          </View>
          <View style={styles.list}>
            <TouchableOpacity style={styles.itemBtn}>
              <Text>全部</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBtn}>
              <Text>交易中</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBtn}>
              <Text>已结算</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBtn}>
              <Text>已失效</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.head}>
            <Text>佣金类型</Text>
          </View>
          <View style={styles.list}>
            <TouchableOpacity style={styles.itemBtn}>
              <Text>团队奖</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBtn}>
              <Text>管理奖</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBtn}>
              <Text>直推奖</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBtn}>
              <Text>次推奖</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.optAren}>
          <TouchableOpacity>
            <Button>重置</Button>
          </TouchableOpacity>

          <TouchableOpacity>
            <Button>确定</Button>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  item: {},
  head: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 5,
    paddingTop: 10
  },
  itemBtn: {
    width: 70,
    height: 40,
    borderWidth: 1,
    borderColor: 'blue'
  },
  optAren: {
    flexDirection: 'row'
    // backgroundColor:"red",
    // alignSelf:"flex-end",
  }
});
