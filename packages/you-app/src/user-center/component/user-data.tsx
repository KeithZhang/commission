/**
 * 用户数据
 **/
import { Relax } from 'plume2';
import React, { Component } from 'react';
import { StyleSheet, Text, View, PixelRatio } from 'react-native';
import { Kit } from 'you-kit';

@Relax
export default class Head extends Component<any> {
  props: {
    navigation?: any;
    relaxProps?: {
      userInfo: any;
    };
  };

  static relaxProps = {
    userInfo: 'userInfo'
  };

  render() {
    const { userInfo } = this.props.relaxProps;
    return (
      <View style={styles.priceView}>
        <View style={styles.rowView}>
          <View style={styles.columnView}>
            <Text style={styles.blackFont}>￥100</Text>
            <Text style={styles.shortFont}>今日预估</Text>
          </View>
          <View style={[styles.columnView, styles.borderView]}>
            <Text style={styles.blackFont}>￥100</Text>
            <Text style={styles.shortFont}>本月结算</Text>
          </View>
          <View style={styles.columnView}>
            <Text style={styles.blackFont}>￥100</Text>
            <Text style={styles.shortFont}>上月结算</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  whiteFont: {
    color: 'white',
    lineHeight: 25
  },
  blackFont: {
    fontSize: 15,
    color: '#383838',
    lineHeight: 25
  },
  redFont: {
    fontSize: 15,
    color: 'red',
    lineHeight: 25
  },
  shortFont: {
    color: '#999',
    lineHeight: 25
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    padding: 10
  },
  columnView: {
    width: Kit.screenWidth / 3 - 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowView: {
    flexDirection: 'row'
  },
  borderView: {
    borderColor: '#999',
    borderLeftWidth: 1 / PixelRatio.get(),
    borderRightWidth: 1 / PixelRatio.get()
  }
});
