import React, { Component } from 'react';
import { TextInput, View, Image, StyleSheet } from 'react-native';

import { YouText } from 'you-ui';
import { Relax } from 'plume2';
import { noop } from 'you-kit';

@Relax
export default class Form extends Component {
  props: {
    relaxProps?: {
      mobilePhone: string;
      smsCode: string;
      changeFormItemValue: (_: any) => void;
      sendSmsCode: () => void;
    };
  };

  static relaxProps = {
    mobilePhone: 'mobilePhone',
    smsCode: 'smsCode',
    changeFormItemValue: noop,
    sendSmsCode: noop
  };

  render() {
    const {
      mobilePhone,
      smsCode,
      changeFormItemValue,
      sendSmsCode
    } = this.props.relaxProps;

    return (
      <View style={[YouStyles.margin_16_0_16, styles.margin_top_65]}>
        <View
          style={[YouStyles.flex_direction_row, YouStyles.form_item_height]}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  margin_top_65: {
    marginTop: 65
  }
});
