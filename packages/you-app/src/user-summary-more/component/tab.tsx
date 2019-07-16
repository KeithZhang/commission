import { Map } from 'immutable';
import React, { Component } from 'react';
import { Relax, TViewAction } from 'plume2';
import { StyleSheet, Text, View } from 'react-native';
import { Badge, Tabs, Icon, DatePicker, Button } from 'antd-mobile-rn';
import { Kit, TimeUtil } from 'you-kit';

import Detail from './detail';
import Summary from './summary';

@Relax
export default class Tab extends Component<any> {
  render() {
    const tabs = this.getTabs();
    return (
      <View style={[styles.centerView, styles.container]}>
        <Tabs tabs={tabs} initialPage={0}>
          {/* 明细 */}
          <Detail />
          {/* 汇总 */}
          <Summary />
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
        title: <Text>明细</Text>
      },
      {
        title: <Text>汇总</Text>
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
