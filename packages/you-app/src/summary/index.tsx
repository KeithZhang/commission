/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2018/10/11
 **/
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Status from '../home/component/status';
import ReturnBar from '../common/return-bar';

type Props = {};

export default class Summary extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Status />
        <ReturnBar />
        <View style={styles.titleG}>
          <Text>收益统计(元)</Text>
        </View>
        <View>
          <View style={styles.priceTitle}>
            <Text>团队总业绩 ¥2000000.55 </Text>
          </View>
          <View style={styles.priceTitle}>
            <Text>我的总消费 ¥3011.23</Text>
          </View>
          <View style={styles.priceDetailG}>
            <View style={styles.priceDetailItemG}>
              <Text>上月结算</Text>
              <Text>¥70.12</Text>
            </View>
            <View style={styles.priceDetailItemG}>
              <Text>上月结算</Text>
              <Text>¥70.12</Text>
            </View>
            <View style={styles.priceDetailItemG}>
              <Text>上月结算</Text>
              <Text>¥70.12</Text>
            </View>
          </View>
        </View>
        <View style={styles.titleG}>
          <Text>粉丝统计</Text>
        </View>
        <View>
          <View style={styles.fansItems}>
            <Text>团队总人数</Text>
            <Text>2000</Text>
          </View>
          <View style={styles.fansItems}>
            <Text>团队总人数</Text>
            <Text>2000</Text>
          </View>
          <View style={styles.fansItems}>
            <Text>团队总人数</Text>
            <Text>2000</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  titleG: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderTopColor: 'gray',
    borderTopWidth: 1
  },
  priceTitle: {
    paddingLeft: 25,
    marginTop: 20
  },
  priceDetailG: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-between',
    marginTop: 20
  },
  priceDetailItemG: {
    justifyContent: 'space-around',
    height: 50
  },
  fansItems: {
    marginTop: 20,
    flexDirection: 'row',
    paddingLeft: 20
  }
});
