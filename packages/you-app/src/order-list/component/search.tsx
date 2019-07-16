import { Map } from 'immutable';
import React, { Component } from 'react';
import { Relax, TViewAction } from 'plume2';
import { StyleSheet, Text, View } from 'react-native';
import { Badge, Tabs, Icon, DatePicker, Button } from 'antd-mobile-rn';
import { Kit, TimeUtil } from 'you-kit';

import Tab from './tab';

import * as ViewAction from '../action/order-action';
export type TCounterViewAction = TViewAction<typeof ViewAction>;

@Relax
export default class Search extends Component<any> {
  render() {
    const tabs = this.getTabs();
    return (
      <View style={[styles.centerView, styles.container]}>
        <Tabs tabs={tabs} initialPage={0}>
          <Tab type="pay" />
          <View style={styles.tabView}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={styles.tabView}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </View>
    );
  }

  /**
   * 获取tabs
   */
  getTabs = () => {
    const tabs = [
      {
        title: (
          <Badge style={styles.badgeView} text={9}>
            <Text>已支付</Text>
          </Badge>
        )
      },
      {
        title: (
          <Badge style={styles.badgeView} text={9}>
            <Text>未支付</Text>
          </Badge>
        )
      },
      {
        title: (
          <Badge style={styles.badgeView} text={9}>
            <Text>已结算</Text>
          </Badge>
        )
      }
    ];
    return tabs;
  };
}

const styles = StyleSheet.create({
  centerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  columnView: {
    flexDirection: 'column'
  },
  container: {
    flex: 1
  },
  tabView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  badgeView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Kit.screenWidth / 3,
    height: 50
  }
});
