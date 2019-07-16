/**
 * @desc
 * 顶部状态栏.
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2018/10/15
 **/

import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Status() {
  return (
    <View style={styles.container}>
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: '#4188FB'
  }
});
