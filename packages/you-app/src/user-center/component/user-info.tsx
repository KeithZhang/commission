/**
 * 用户信息
 **/
import { Relax } from 'plume2';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'antd-mobile-rn';

import UserData from './user-data';

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
    let img =
      'https://pro.modao.cc/uploads3/images/1728/17281807/raw_1519380292.png';
    console.log('userInfo', userInfo);
    return (
      <View style={styles.infoView}>
        <View style={styles.infoChildView}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('UserInfo');
            }}
          >
            <Image style={styles.userLogo} source={{ uri: img }} />
          </TouchableOpacity>

          <View style={styles.userView}>
            <View style={styles.settingView}>
              <Text style={[styles.userName, styles.whiteFont]}>
                {userInfo.get('userName')} >
              </Text>
              <Text
                style={[styles.whiteFont]}
                onPress={() => {
                  YouNavigator.navigate('UserSetting');
                }}
              >
                设置
              </Text>
            </View>
            <Text style={[styles.whiteFont]}>
              粉丝:
              {userInfo.get('fansCount')}
            </Text>
            <View style={styles.codeView}>
              <Text style={styles.whiteFont}>
                邀请码：
                {userInfo.get('invicodeCode')}
              </Text>
              <Button
                type="primary"
                size="small"
                style={styles.copyBtn}
                onPress={() => {
                  console.log('copy');
                }}
              >
                复制
              </Button>
            </View>
          </View>
        </View>
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
