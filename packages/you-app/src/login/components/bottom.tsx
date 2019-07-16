import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Relax } from 'plume2';
import { YouText, YouButton } from 'you-ui';
import { noop } from 'you-kit';

import { loginDisabledQL } from '../ql';

@Relax
export default class Bottom extends Component {
  props: {
    relaxProps?: {
      loginDisabled: boolean;
      login: () => void;
    };
  };

  static relaxProps = {
    loginDisabled: loginDisabledQL,
    login: noop
  };

  render() {
    const { loginDisabled } = this.props.relaxProps;
    console.log('loginDisabled...', loginDisabled);
    return (
      <View style={[YouStyles.y_center, styles.margin_top_31]}>
        <YouButton
          text={'登录'}
          type={'primary'}
          disabled={loginDisabled}
          onPress={this.props.relaxProps.login}
        />

        <View
          style={[
            YouStyles.flex_direction_row,
            YouStyles.margin_16_0_16,
            styles.margin_top_18,
            {
              width: YouStyles.screen_width - 32,
              justifyContent: 'space-between'
            }
          ]}
        >
          <YouText
            style={[YouStyles.font_13, YouStyles.color_text_caption]}
            onPress={this.toForgotPassword}
          >
            忘记密码?
          </YouText>
          <YouText
            style={[YouStyles.font_13, YouStyles.color_brand_primary]}
            onPress={this.toSmsCodeLogin}
          >
            短信验证码登录
          </YouText>
        </View>
      </View>
    );
  }

  toForgotPassword = () => {
    YouNavigator.navigate('ForgotPassword');
  };

  toSmsCodeLogin = () => {
    YouNavigator.navigate('SmsCodeLogin');
  };
}

const styles = StyleSheet.create({
  margin_top_31: {
    marginTop: 31
  },
  margin_top_18: {
    marginTop: 18
  }
});
