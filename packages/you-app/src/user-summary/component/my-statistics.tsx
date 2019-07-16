/**
 * 我的统计
 **/

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PixelRatio
} from 'react-native';
import { List, Button } from 'antd-mobile-rn';
import { IMap } from 'src/typings/globalType';
import { Relax } from 'plume2';
import { Kit } from 'you-kit';
const Item = List.Item;

@Relax
export default class MyStatistics extends Component<any> {
  props: {
    relaxProps?: {
      // 用户信息
      userInfo: IMap;
    };
  };

  static relaxProps = {
    userInfo: 'userInfo'
  };

  render() {
    const { userInfo } = this.props.relaxProps;
    console.log('userInfo', userInfo);
    return (
      <View style={styles.container}>
        {/* 上半区 */}
        <View style={styles.rowView}>
          <View style={styles.tagView}>
            <Text style={styles.tagText}>收益统计</Text>
          </View>
          <View style={styles.columnView}>
            <View style={[styles.teamView, styles.priceView]}>
              <Text style={styles.titleFont}>团队总业绩</Text>
              <Text style={styles.priceFont}>￥2131223.11</Text>
            </View>
            <View style={[styles.teamView, styles.priceView]}>
              <Text style={styles.titleFont}>我的总消费</Text>
              <Text style={styles.numFont}>￥21313.11</Text>
            </View>
          </View>
          <View style={styles.moreView}>
            <Text style={styles.linkFont}>更多</Text>
          </View>
        </View>

        {/* 下半区 */}
        <View style={styles.bottomView}>
          <View style={styles.teamView}>
            <Text style={styles.numFont}>￥21313.11</Text>
            <Text style={styles.titleFont}>上月结算</Text>
          </View>
          <View style={[styles.teamView, styles.borderView]}>
            <Text style={styles.numFont}>￥21313.11</Text>
            <Text style={styles.titleFont}>本月预估</Text>
          </View>
          <View style={styles.teamView}>
            <Text style={styles.numFont}>￥21313.11</Text>
            <Text style={styles.titleFont}>下月预估</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 150,
    paddingRight: 10,
    paddingTop: 20
  },
  columnView: {
    flexDirection: 'column',
    width: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15
  },
  tagView: {
    backgroundColor: '#FFF2D2',
    paddingLeft: 10,
    paddingTop: 5,
    marginLeft: -5,
    width: (Kit.screenWidth - 200) / 2,
    height: 25,
    borderRadius: 5
  },
  moreView: {
    flex: 1,
    alignItems: 'flex-end'
  },
  tagText: {
    color: '#FFBD20'
  },
  titleFont: {
    color: '#999'
  },
  linkFont: {
    color: '#4188fb'
  },
  priceFont: {
    fontSize: 25,
    color: 'red',
    lineHeight: 25
  },
  priceView: {
    width: 300
  },
  teamView: {
    height: 50,
    width: (Kit.screenWidth - 20) / 3,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  numFont: {
    fontSize: 20,
    lineHeight: 25
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 100,
    borderColor: '#EAEBEB',
    borderTopWidth: 1 / PixelRatio.get()
  },
  borderView: {
    borderColor: '#EAEBEB',
    borderLeftWidth: 1 / PixelRatio.get(),
    borderRightWidth: 1 / PixelRatio.get()
  }
});
