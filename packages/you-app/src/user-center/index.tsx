/**
 * 我的
 **/
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StoreProvider } from 'plume2';
import { YouHeader } from 'you-ui';

import UserInfo from './component/user-info';
import AppStore from './store';
import UserPrice from './component/user-price';
import UserData from './component/user-data';
import Settings from './component/settings';

type Props = {};

//TODO debug 添加变量
@StoreProvider(AppStore)
export default class UserCenter extends Component<Props> {
  static navigationOptions = {
    tabBarLabel: '我的'
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
        <YouHeader
          middleTitle="我的"
          backgroundColor={YouTheme.color.brand_primary}
        />
        {/* 用户信息 */}
        <UserInfo />
        {/* 用户金额 */}
        <UserPrice />
        {/* 用户数据 */}
        <UserData />
        {/* 操作项 */}
        <Settings />
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
