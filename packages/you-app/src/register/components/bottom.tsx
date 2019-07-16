import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { YouText, YouButton } from 'you-ui';
import { Relax } from 'plume2';
import { noop } from 'you-kit';

@Relax
export default class Bottom extends Component {
  props: {
    relaxProps?: {
      register: () => void;
    };
  };

  static relaxProps = {
    register: noop
  };

  render() {
    const { register } = this.props.relaxProps;
    return (
      <View
        style={[YouStyles.flex_2, YouStyles.y_center, styles.margin_top_36]}
      >
        <YouButton text={'注册'} onPress={register} />
        <View
          style={[
            YouStyles.flex_direction_row,
            YouStyles.y_center,
            styles.margin_to_14
          ]}
        >
          <YouText style={[YouStyles.font_13]}>
            点击上面按钮"注册"即表示同意
          </YouText>
          <YouText style={[YouStyles.font_13, YouStyles.color_brand_primary]}>
            《注册协议》
          </YouText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  margin_top_36: {
    marginTop: 36
  },
  margin_to_14: {
    marginTop: 14
  }
});
