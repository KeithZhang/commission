/**
 * 用户设置
 **/
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StoreProvider } from 'plume2';
import { YouHeader } from 'you-ui';

import AppStore from './store';
import Settings from './component/settings';

@StoreProvider(AppStore)
export default class UserCenter extends Component<any> {
  store: AppStore;

  componentDidMount() {
    this.store.init().then(() => {
      console.log('用户信息初始化完成');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <YouHeader back={true} middleTitle="设置" />
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
