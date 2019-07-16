import React, { Component } from 'react';
import {
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Relax } from 'plume2';
import { YouText } from 'you-ui';
import { noop } from 'you-kit';

@Relax
export default class Form extends Component {
  props: {
    relaxProps?: {
      mobilePhone: string;
      password: string;
      passwordSecurity: boolean;
      changeFormItemValue: (_: any) => void;
      clearFormItemValue: (_: string) => void;
      changePasswordSecurity: (_: boolean) => void;
    };
  };

  static relaxProps = {
    mobilePhone: 'mobilePhone',
    password: 'password',
    passwordSecurity: 'passwordSecurity',
    changeFormItemValue: noop,
    clearFormItemValue: noop,
    changePasswordSecurity: noop
  };

  render() {
    const {
      mobilePhone,
      password,
      passwordSecurity,
      changeFormItemValue,
      clearFormItemValue,
      changePasswordSecurity
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
            keyboardType="numeric"
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
          style={[YouStyles.flex_direction_row, YouStyles.form_item_height]}
        >
          <YouText
            style={[
              YouStyles.color_text_base,
              YouStyles.font_14,
              YouStyles.self_center
            ]}
          >
            密码
          </YouText>
          <TextInput
            style={[
              YouStyles.flex_1,
              YouStyles.font_14,
              YouStyles.color_text_base,
              YouStyles.padding_65_18
            ]}
            secureTextEntry={passwordSecurity}
            placeholder="请输入6-20位密码"
            placeholderTextColor={YouTheme.color.text_caption}
            value={password}
            onChangeText={text => {
              changeFormItemValue({ password: text });
            }}
          />
          {password ? (
            <TouchableOpacity
              style={[YouStyles.self_center, YouStyles.margin_right_10]}
              onPress={() => {
                clearFormItemValue('password');
              }}
            >
              <Image source={require('assets/clear.png')} />
            </TouchableOpacity>
          ) : null}

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
  margin_top_65: {
    marginTop: 65
  }
});
