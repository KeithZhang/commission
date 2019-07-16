/**
 * 用户统计
 **/
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StoreProvider } from 'plume2';
import { YouHeader } from 'you-ui';

import AppStore from './store';
import MyStatistics from './component/my-statistics';
import FansStatistics from './component/fans-statistics';

@StoreProvider(AppStore, { debug: __DEV__ })
export default class UserCenter extends Component<any> {
  static navigationOptions = {
    tabBarLabel: '设置'
  };

  store: AppStore;

  componentDidMount() {
    this.store.init().then(() => {
      console.log('用户信息初始化完成');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <YouHeader leftTitle="提现" />
        <MyStatistics />
        <FansStatistics />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  }
});
