/**
 * 用户金额
 **/
import { Relax } from 'plume2';
import React, { Component } from 'react';
import { StyleSheet, Text, View, PixelRatio } from 'react-native';
import { Kit } from 'you-kit';
import { Button } from 'antd-mobile-rn';

@Relax
export default class Head extends Component<any> {
  props: {
    navigation?: any;
    relaxProps?: {
      userInfo: any;
    };
  };

  static relaxProps = {
    userInfo: 'userInfo'
  };

  render() {
    const { userInfo } = this.props.relaxProps;
    return (
      <View style={styles.priceView}>
        <View style={styles.columnView}>
          <View style={styles.rowView}>
            <Text style={styles.blackFont}>可提现金额：</Text>
            <Text style={styles.redFont}>￥100</Text>
          </View>
          <Text style={styles.shortFont}>每个月25号结算上个月收入</Text>
        </View>
        <Button
          type="primary"
          size="small"
          style={[styles.copyBtn, styles.priceBtn]}
          onPress={() => {
            console.log('copy');
          }}
        >
          立即提现
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoView: {
    height: 160,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#4188fb',
    paddingLeft: 15,
    paddingTop: 10
  },
  infoChildView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 88
  },
  codeView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userLogo: {
    width: 78,
    height: 78,
    borderRadius: 39
  },
  whiteFont: {
    color: 'white',
    lineHeight: 25
  },
  blackFont: {
    fontSize: 15,
    color: '#383838',
    lineHeight: 25
  },
  redFont: {
    fontSize: 15,
    color: 'red',
    lineHeight: 25
  },
  shortFont: {
    color: '#999',
    lineHeight: 25
  },
  copyBtn: {
    marginLeft: 5,
    borderColor: 'white',
    backgroundColor: '#4188fb'
  },
  marginBottom: {
    marginBottom: 5
  },
  userName: {
    fontSize: 15
  },
  userView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 15
  },
  settingView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginTop: -40,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  priceBtn: {
    width: 80,
    borderColor: '#4188fb'
  },
  columnView: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  rowView: {
    flexDirection: 'row'
  }
});
