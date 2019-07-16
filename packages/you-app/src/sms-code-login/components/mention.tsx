import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { YouText } from 'you-ui';

export default class Mention extends Component {
  render() {
    return (
      <View style={[YouStyles.x_y_center, styles.mention_margin]}>
        <YouText
          style={[
            YouStyles.color_text_caption,
            YouStyles.font_13,
            YouStyles.text_x_center
          ]}
        >
          xxx
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
