import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageStyle,
  TextInput,
  PixelRatio
} from 'react-native';
import { AppContainer, YouHeader, YouText, YouButton } from 'you-ui';
import { http, Config, Util } from 'you-kit';

export default class RegisterInvite extends Component {
  state = {
    avatar: '',
    nickName: '',
    inviteCode: '',
    nextBtnDisabled: true
  };

  render() {
    const { inviteCode, nextBtnDisabled } = this.state;

    return (
      <AppContainer>
        <YouHeader back={true} middleTitle="注册" />
        <View style={[YouStyles.y_center, styles.margin_top_16]}>
          <Image source={require('assets/f.png')} style={[styles.photo]} />
          <YouText
            style={[
              YouStyles.font_13,
              YouStyles.color_text_caption,
              styles.margin_top_8
            ]}
          >
            xxx邀请你加入
          </YouText>
        </View>
        <View style={[YouStyles.flex_direction_row, styles.input]}>
          <TextInput
            style={[
              YouStyles.flex_1,
              YouStyles.font_14,
              YouStyles.color_text_base
            ]}
            placeholder="请输入上级邀请码或者手机号"
            placeholderTextColor={YouTheme.color.text_caption}
            value={inviteCode}
            onChangeText={this.changeFormItemValue}
          />
          <Image
            source={require('assets/clear.png')}
            style={[YouStyles.self_center]}
          />
        </View>
        <View style={[YouStyles.y_center, styles.margin_top_36]}>
          <YouButton
            text="下一步"
            disabled={nextBtnDisabled}
            type="primary"
            onPress={() => {
              YouNavigator.navigate('Register', { inviteCode });
            }}
          />
        </View>
      </AppContainer>
    );
  }

  changeFormItemValue = text => {
    this.setState(
      {
        inviteCode: text
      },
      async () => {
        const { inviteCode } = this.state;
        if (
          Util.inviteCodeReg.test(inviteCode) ||
          Util.mobilePhoneReg.test(inviteCode)
        ) {
          console.log('findInviter..');
          const { err, res } = await http.get(
            `${Config.Host}/open/inviter/${text}`
          );
          console.log('data res..', res);
          console.log('data err..', err);
          if (!err) {
            // this.setState({
            //   avatar: res.avatar,
            //   nickName: res.nickName,
            //   nextBtnDisabled: false
            // });
          }
        }
      }
    );
  };
}

const styles = StyleSheet.create({
  margin_top_8: {
    marginTop: 8
  },
  margin_top_16: {
    marginTop: 16
  },
  margin_top_36: {
    marginTop: 36
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25
  } as ImageStyle,
  input: {
    borderBottomColor: YouTheme.color.border,
    borderBottomWidth: 1 / PixelRatio.get(),
    height: 44,
    marginTop: 18,
    marginLeft: 16,
    marginRight: 16,
    paddingLeft: 4,
    paddingRight: 2
  }
});
