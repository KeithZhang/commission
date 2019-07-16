import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { YouButton } from 'you-ui';
import { Relax } from 'plume2';
import { noop } from 'you-kit';

@Relax
export default class Bottom extends Component {
  props: {
    relaxProps?: {
      smsLogin: () => void;
    };
  };

  static relaxProps = {
    smsLogin: noop
  };

  render() {
    return (
      <View style={[YouStyles.y_center, styles.margin_top_31]}>
        <YouButton
          text={'登录'}
          onPress={() => {
            this.props.relaxProps.smsLogin();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  margin_top_31: {
    marginTop: 31
  },
  margin_top_14: {
    marginTop: 14
  }
});
