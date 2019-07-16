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
import DefaultImage from '../common/default-image';
import Line from '../common/line';

import Status from '../home/component/status';
import ReturnBar from '../common/return-bar';
type Props = {};

export default class Fans extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Status />
        <ReturnBar />
        <View style={styles.date}>
          <Text style={{ fontSize: 18 }}>开始日期</Text>
          <Text style={{ fontSize: 18 }}>结束日期</Text>
        </View>
        <Line style={{ opacity: 0.22 }} />
        <View style={styles.count}>
          <View>
            <Text>直属粉丝</Text>
            <Text>(101)</Text>
          </View>
          <View>
            <Text>直属粉丝邀请</Text>
            <Text>(20998)</Text>
          </View>
        </View>
        <View style={styles.list}>
          <FansItem />
          <Line style={styles.line} />
          <FansItem />
          <Line style={styles.line} />
          <FansItem />
          <Line style={styles.line} />
          <FansItem />
          <Line style={styles.line} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  date: {
    flexDirection: 'row',
    paddingLeft: 50,
    paddingRight: 50,
    height: 50,
    justifyContent: 'space-between'
  },
  count: {
    marginTop: 20,
    flexDirection: 'row',
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'space-between'
  },
  list: {
    marginTop: 20
  },
  listItem: {},
  line: {
    marginTop: 20,
    marginBottom: 20,
    opacity: 0.22
  }
});

const itemStyles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    flexDirection: 'row'
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  subArea: {},

  infoContainer: {
    justifyContent: 'space-between',
    paddingBottom: 5
  },
  top: {
    flexDirection: 'row'
  },
  bottom: {
    flexDirection: 'row'
  }
});

class FansItem extends Component<Props> {
  render() {
    return (
      <View style={itemStyles.container}>
        <DefaultImage style={itemStyles.img} />
        <View style={itemStyles.infoContainer}>
          <View style={itemStyles.top}>
            <Text style={{ marginRight: 30 }}>昵称ABC</Text>
            <Text>金牌会员</Text>
          </View>
          <View style={itemStyles.bottom}>
            <Text style={{ marginRight: 30 }}>181****0000</Text>
            <Text>2018年10月11日</Text>
          </View>
        </View>
      </View>
    );
  }
}
