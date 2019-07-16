/**
 * 粉丝统计
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
export default class FansStatistics extends Component<any> {
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
        <View style={styles.tagView}>
          <Text style={styles.tagText}>粉丝统计</Text>
        </View>

        <View style={styles.bottomView}>
          <View style={styles.teamView}>
            <Text style={styles.numFont}>230</Text>
            <Text style={styles.titleFont}>团队总人数</Text>
          </View>
          <View style={[styles.teamView, styles.borderView]}>
            <Text style={styles.numFont}>120</Text>
            <Text style={styles.titleFont}>直属粉丝人数</Text>
          </View>
          <View style={styles.teamView}>
            <Text style={styles.numFont}>110</Text>
            <Text style={styles.titleFont}>直属粉丝推荐人数</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginTop: 20
  },
  rowView: {
    flexDirection: 'column',
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
    backgroundColor: '#d9e7fe',
    paddingLeft: 10,
    paddingTop: 5,
    marginTop: 10,
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
    color: '#4188fb'
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
    marginLeft: 10,
    marginRight: 10,
    height: 100
  },
  borderView: {
    borderColor: '#EAEBEB',
    borderLeftWidth: 1 / PixelRatio.get(),
    borderRightWidth: 1 / PixelRatio.get()
  }
});
