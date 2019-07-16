import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  AsyncStorage
} from 'react-native';

import { AppContainer, YouHeader, YouButton, YouText } from 'you-ui';
import * as WeChat from 'react-native-wechat';
import { http, Config } from 'you-kit';

export default class LoginRegister extends Component {
  render() {
    return (
      <AppContainer>
        <YouHeader middleTitle="魔女玛丽" />
        <View style={[YouStyles.flex_1]}>
          <View style={[YouStyles.flex_2, YouStyles.x_y_center]}>
            <Image
              source={require('assets/f.png')}
              style={[YouStyles.border_radius_12]}
            />
          </View>

          <View style={[YouStyles.flex_1, YouStyles.x_y_center]}>
            <View style={[YouStyles.margin_bottom_24]}>
              <YouButton
                type="primary"
                size="large"
                text="注册新账号"
                onPress={this.toRigister}
              />
            </View>

            <View style={[{}]}>
              <YouButton
                text="登录已有账号"
                type="ghost"
                size="large"
                onPress={this.toLogin}
              />
            </View>
          </View>

          <TouchableOpacity
            style={[
              YouStyles.flex_2,
              YouStyles.margin_bottom_18,
              YouStyles.x_flexend_y_center
            ]}
            onPress={this.wechatLogin}
          >
            <Image
              source={require('assets/wechat.png')}
              style={[YouStyles.border_radius_12, YouStyles.margin_bottom_10]}
            />
            <YouText style={[YouStyles.font_12, YouStyles.color_text_base]}>
              微信登录
            </YouText>
          </TouchableOpacity>
        </View>
      </AppContainer>
    );
  }

  toLogin = () => {
    YouNavigator.navigate('Login');
  };

  toRigister = () => {
    YouNavigator.navigate('RegisterInvite');
  };

  wechatLogin = async () => {
    const isWXAppInstalled = await WeChat.isWXAppInstalled();
    if (isWXAppInstalled) {
      const authResponse = await WeChat.sendAuthRequest('snsapi_userinfo');
      console.log('authResponse...', authResponse.code);
      const data = await http.post(`${Config.Host}/open/wx/app/login`, {
        code: authResponse.code
      });
      console.log('data...', data);
    } else {
    }
  };
}
