import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Relax, IMap } from 'plume2';
import { YouText } from 'you-ui';

@Relax
export default class Mention extends Component {
  props: {
    relaxProps?: {
      mentions: IMap;
    };
  };

  static relaxProps = {
    mentions: 'mentions'
  };

  render() {
    const { mentions } = this.props.relaxProps;

    console.log('mentions...', mentions);
    const first = mentions.first();

    if (!first) {
      return null;
    }

    console.log('first...', first.toJS());
    return (
      <View style={[YouStyles.x_y_center, styles.mention_margin]}>
        <YouText
          style={[
            YouStyles.font_13,
            YouStyles.text_x_center,
            first.get('type') == 'normal'
              ? YouStyles.color_text_caption
              : YouStyles.color_brand_error
          ]}
        >
          {first.get('content')}
        </YouText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mention_margin: {
    marginLeft: 80,
    marginRight: 80,
    marginTop: 45
  }
});
