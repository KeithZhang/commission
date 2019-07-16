/**
 * 精选
 **/
import { StoreProvider } from 'plume2';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { YouHeader } from 'you-ui';
import AppStore from './store';
import Search from './component/search';

@StoreProvider(AppStore, { debug: __DEV__ })
export default class OrderList extends Component<any> {
  store!: AppStore;

  componentDidMount() {
    // this.store.init().then(() => {
    //   console.log('用户信息初始化完成');
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <YouHeader leftTitle="精选" />
        <Search />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  }
});
