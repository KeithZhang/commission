import React, { Component } from 'react';
import { Image, View, TextInput } from 'react-native';
import { YouText } from 'you-ui';
import { noop } from 'you-kit';
import { Relax } from 'plume2';

@Relax
export default class Form extends Component {
  props: {
    relaxProps?: {
      mobilePhone: string;
      smsCode: string;
      password: string;
      passwordSecurity: boolean;
      changeFormItemValue: (_?: any) => void;
      sendSmsCode: () => void;
    };
  };

  static relaxProps = {
    mobilePhone: 'mobilePhone',
    smsCode: 'smsCode',
    password: 'password',
    passwordSecurity: 'passwordSecurity',
    changeFormItemValue: noop,
    sendSmsCode: noop
  };

  render() {
    const {
      mobilePhone,
      smsCode,
      password,
      passwordSecurity,
      sendSmsCode,
      changeFormItemValue
    } = this.props.relaxProps;

    return (
      <View style={[YouStyles.flex_1, YouStyles.margin_16_0_16]}>
        <View
          style={[
            YouStyles.flex_1,
            YouStyles.flex_direction_row,
            YouStyles.form_item_height
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
          <Image
            source={require('assets/clear.png')}
            style={[YouStyles.self_center]}
          />
        </View>
        <View
          style={[
            YouStyles.flex_1,
            YouStyles.form_item_height,
            YouStyles.flex_direction_row
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
          <TextInput
            style={[
              YouStyles.flex_1,
              YouStyles.font_14,
              YouStyles.color_text_base,
              YouStyles.padding_51_18
            ]}
            keyboardType="numeric"
            placeholder="请输入验证码"
            placeholderTextColor={YouTheme.color.text_caption}
            value={smsCode}
            onChangeText={text => {
              changeFormItemValue({ smsCode: text });
            }}
          />

          <YouText
            style={[
              YouStyles.color_text_base,
              YouStyles.font_14,
              YouStyles.self_center,
              YouStyles.color_brand_primary
            ]}
            onPress={() => {
              sendSmsCode();
            }}
          >
            获取验证码
          </YouText>
        </View>
        <View
          style={[
            YouStyles.flex_1,
            YouStyles.form_item_height,
            YouStyles.flex_direction_row
          ]}
        >
          <YouText
            style={[
              YouStyles.color_text_base,
              YouStyles.font_14,
              YouStyles.self_center
            ]}
          >
            设置密码
          </YouText>
          <TextInput
            style={[
              YouStyles.flex_1,
              YouStyles.color_text_base,
              YouStyles.font_14,
              YouStyles.padding_37_18
            ]}
            placeholder="请输入6-20位密码"
            placeholderTextColor={YouTheme.color.text_caption}
            value={password}
            onChangeText={text => {
              changeFormItemValue({ password: text });
            }}
          />

          <Image
            source={require('assets/eye.png')}
            style={[YouStyles.self_center]}
          />
        </View>
      </View>
    );
  }
}
