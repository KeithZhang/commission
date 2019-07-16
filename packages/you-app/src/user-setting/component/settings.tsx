/**
 * @desc
 * 顶部状态栏.
 **/

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage
} from 'react-native';
import { List, Button } from 'antd-mobile-rn';
import { IMap } from 'src/typings/globalType';
import { Relax } from 'plume2';
const Item = List.Item;

@Relax
export default class Settings extends Component<any> {
  props: {
    relaxProps?: {
      // 用户信息
      userInfo: IMap;
    };
  };

  static relaxProps = {
    userInfo: 'userInfo'
  };

  render() {
    const { userInfo } = this.props.relaxProps;
    console.log('userInfo', userInfo);
    return (
      <View>
        <List>
          <Item
            extra={userInfo.get('userName')}
            onClick={() => {
              YouNavigator.navigate('BindWechat');
            }}
          >
            昵称
          </Item>

          <Item extra={userInfo.get('userName')} onClick={() => {}}>
            昵称
          </Item>
          <Item onClick={() => {}} extra={userInfo.get('userPhone')}>
            手机号码
          </Item>
        </List>

        <Button style={styles.btn}>
          <Text style={[YouStyles.color_brand_primary, YouStyles.font_14]}>
            切换账号
          </Text>
        </Button>

        <Button style={styles.btn}>
          <Text
            style={[YouStyles.color_brand_primary, YouStyles.font_14]}
            onPress={() => {
              AsyncStorage.clear();
              delete window.token;
              YouNavigator.navigate('Auth');
            }}
          >
            退出登录
          </Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 20
  }
});
