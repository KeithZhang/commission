import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { YouText } from 'you-ui';
import { IMap, Relax } from 'plume2';

@Relax
export default class Mention extends Component {
  props: {
    relaxProps?: {
      mentions: IMap;
      mobilePhone: string;
    };
  };

  static relaxProps = {
    mentions: 'mentions',
    mobilePhone: 'mobilePhone'
  };

  render() {
    const { mentions } = this.props.relaxProps;

    console.log('mentions...', mentions);
    const first = mentions.first();

    return (
      <View style={[YouStyles.x_y_center, styles.mention_margin]}>
        {!first
          ? null
          : first.get('type') === 'normal'
          ? this.smsCodeMention()
          : this.errorMention()}
      </View>
    );
  }

  smsCodeMention = () => {
    const { mobilePhone } = this.props.relaxProps;
    return (
      <YouText
        style={[
          YouStyles.color_text_caption,
          YouStyles.font_13,
          YouStyles.text_x_center,
          YouStyles.color_text_caption
        ]}
      >
        我们已向
        <YouText style={YouStyles.color_text_base}>{mobilePhone}</YouText>
        发送验证码短信
      </YouText>
    );
  };

  errorMention = () => {
    const { mentions } = this.props.relaxProps;
    const first = mentions.first();

    return (
      <YouText
        style={[
          YouStyles.color_text_caption,
          YouStyles.font_13,
          YouStyles.text_x_center,
          YouStyles.color_brand_error
        ]}
      >
        {first.get('content')}
      </YouText>
    );
  };
}

const styles = StyleSheet.create({
  mention_margin: {
    marginLeft: 80,
    marginRight: 80,
    marginTop: 45
  }
});
