import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import ReturnBar from '../common/return-bar';
// import Status from '../index/component/status';

export default class AddAlipay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowG}>
          <View style={styles.rowTitleTxt}>
            <Text>支付宝帐号</Text>
          </View>
          <View>
            <Text>270048681@qq.com </Text>
          </View>
        </View>
        <View style={styles.rowG}>
          <View style={styles.rowTitleTxt}>
            <Text>真实姓名</Text>
          </View>
          <View>
            <Text>杨晓东 </Text>
          </View>
        </View>
        <View style={styles.btn}>
          <Text>完成</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  rowG: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  rowTitleTxt: {
    color: 'gray',
    minWidth: 100
  },
  btn: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
