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
import { YouHeader } from 'you-ui';
import { StoreProvider } from 'plume2';

import Content from './component/centent';
import AppStore from './store';

type Props = {};

@StoreProvider(AppStore, { debug: __DEV__ })
export default class UserInfo extends Component<Props> {
  store!: AppStore;

  componentDidMount() {
    this.store.init().then(() => {
      console.log('统计信息初始化完成');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <YouHeader leftTitle="邀请" />
        <Content />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
