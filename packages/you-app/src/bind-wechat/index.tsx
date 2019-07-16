import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { http, Config } from 'you-kit';
import * as Wechat from 'react-native-wechat';

export default class BindWechat extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={async () => {
            let scope = 'snsapi_userinfo';

            //判断微信是否安装
            const isWXAppInstalled = await Wechat.isWXAppInstalled();
            if (isWXAppInstalled) {
              const authResponse = await Wechat.sendAuthRequest(scope);
              const data = await http.post(
                `${Config.Host}/member/bind/wx/app`,
                {
                  code: authResponse.code
                }
              );
              console.log('data..', data);
            } else {
            }
          }}
        >
          <Text> bind </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
