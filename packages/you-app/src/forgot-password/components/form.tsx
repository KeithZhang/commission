import React, { Component } from 'react';
import {
  TextInput,
  View,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableOpacity
} from 'react-native';

import { Relax } from 'plume2';
import { YouText, TimerText } from 'you-ui';
import { noop } from 'you-kit';
import { sendSmsCodeDisabledQL } from '../ql';

@Relax
export default class Form extends Component {
  props: {
    relaxProps?: {
      mobilePhone: string;
      smsCode: string;
      newPassword: string;
      passwordSecurity: boolean;
      changeFormItemValue: (_: any) => void;
      sendSmsCode: () => void;
      clearFormItemValue: (_: string) => void;
      changePasswordSecurity: (_: boolean) => void;
      sendSmsCodeDisabled: boolean;
      changeTimeEnd: () => void;
    };
  };

  static relaxProps = {
    mobilePhone: 'mobilePhone',
    smsCode: 'smsCode',
    newPassword: 'newPassword',
    passwordSecurity: 'passwordSecurity',
    changeFormItemValue: noop,
    sendSmsCode: noop,
    changeTimeEnd: noop,
    clearFormItemValue: noop,
    changePasswordSecurity: noop,
    sendSmsCodeDisabled: sendSmsCodeDisabledQL
  };

  render() {
    const {
      mobilePhone,
      smsCode,
      newPassword,
      passwordSecurity,
      changeFormItemValue,
      sendSmsCode,
      clearFormItemValue,
      changePasswordSecurity,
      sendSmsCodeDisabled,
      changeTimeEnd
    } = this.props.relaxProps;

    return (
      <View style={[YouStyles.margin_16_0_16, styles.margin_top_20]}>
        <View
          style={[
            YouStyles.flex_direction_row,
            YouStyles.form_item_height,
            YouStyles.bottom_line
          ]}
        >
          <YouText
            style={[
              YouStyles.color_text_base,
              YouStyles.font_14,
              YouStyles.self_center
            ]}
          >
            手机号
          </YouText>
          <TextInput
            style={[
              YouStyles.flex_1,
              YouStyles.font_14,
              YouStyles.color_text_base,
              YouStyles.padding_51_18
            ]}
            placeholder="请输入你的手机号"
            placeholderTextColor={YouTheme.color.text_caption}
            value={mobilePhone}
            onChangeText={text => {
              changeFormItemValue({ mobilePhone: text });
            }}
          />

          {mobilePhone ? (
            <TouchableOpacity
              style={[YouStyles.self_center]}
              onPress={() => {
                clearFormItemValue('mobilePhone');
              }}
            >
              <Image source={require('assets/clear.png')} />
            </TouchableOpacity>
          ) : null}
        </View>
        <View
          style={[
            YouStyles.form_item_height,
            YouStyles.flex_direction_row,
            YouStyles.bottom_line
          ]}
        >
          <YouText
            style={[
              YouStyles.color_text_base,
              YouStyles.font_14,
              YouStyles.self_center
            ]}
          >
            验证码
          </YouText>
          <View
            style={[
              YouStyles.flex_1,
              {
                borderRightColor: YouTheme.color.border,
                borderRightWidth: 1,
                paddingLeft: 51,
                marginRight: 18
              }
            ]}
          >
            <TextInput
              style={[
                YouStyles.flex_1,
                YouStyles.font_14,
                YouStyles.color_text_base
              ]}
              keyboardType="numeric"
              placeholder="请输入验证码"
              placeholderTextColor={YouTheme.color.text_caption}
              value={smsCode}
              onChangeText={text => {
                changeFormItemValue({ smsCode: text });
              }}
            />
          </View>
          <TimerText
            style={[
              YouStyles.color_text_base,
              YouStyles.font_14,
              YouStyles.self_center,
              sendSmsCodeDisabled
                ? YouStyles.color_text_caption
                : YouStyles.color_brand_primary
            ]}
            maxTime={10}
            onTimeStart={changeTimeEnd}
            onPress={sendSmsCode}
            onTimeEnd={changeTimeEnd}
          >
            获取验证码
          </TimerText>
        </View>
        <View
          style={[
            YouStyles.flex_direction_row,
            YouStyles.form_item_height,
            YouStyles.bottom_line
          ]}
        >
          <YouText
            style={[
              YouStyles.color_text_base,
              YouStyles.font_14,
              YouStyles.self_center
            ]}
          >
            新密码
          </YouText>
          <TextInput
            style={[
              YouStyles.flex_1,
              YouStyles.font_14,
              YouStyles.color_text_base,
              YouStyles.padding_51_18
            ]}
            secureTextEntry={passwordSecurity}
            placeholder="请输入6-20位密码"
            placeholderTextColor={YouTheme.color.text_caption}
            value={newPassword}
            onChangeText={text => {
              changeFormItemValue({ newPassword: text });
            }}
          />
          <TouchableOpacity
            style={[YouStyles.self_center]}
            onPress={() => {
              changePasswordSecurity(!passwordSecurity);
            }}
          >
            <Image
              source={
                passwordSecurity
                  ? require('assets/lash.png')
                  : require('assets/eye.png')
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  margin_top_20: {
    marginTop: 20
  }
});
