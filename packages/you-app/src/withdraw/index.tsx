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
import ArrowBtn from '../common/arrow-btn';
import DefaultImage from '../common/default-image';
import ReturnBar from '../common/return-bar';
import Status from '../home/component/status';

type Props = {};

export default class WithDraw extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Status />
        <ReturnBar />

        <View style={styles.addAccountContainer}>
          <View style={styles.imgTxtGroup}>
            <DefaultImage style={styles.addImg} />
            <View style={styles.addTxtContainer}>
              <Text style={styles.addTxt}>支付宝</Text>
              <Text style={styles.addTxt}>还没有添加支付宝帐号点击添加</Text>
            </View>
          </View>
          <ArrowBtn />
        </View>

        <View style={styles.tipContainer}>
          <Text>请输入提取金额,当前可提取金额</Text>
          <Text style={styles.priceTxt}>¥123.22</Text>
        </View>
        <View style={styles.btn}>
          <Text>提交申请</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  addAccountContainer: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imgTxtGroup: {
    flexDirection: 'row'
  },
  addImg: {
    marginLeft: 10,
    marginRight: 10,
    height: 65,
    width: 65
  },
  addTxtContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between'
  },
  addTxt: {
    color: 'black'
  },
  tipContainer: {
    justifyContent: 'center',

    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    backgroundColor: 'gray'
  },
  priceTxt: {
    color: 'red'
  },
  btn: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center'
  }
});
