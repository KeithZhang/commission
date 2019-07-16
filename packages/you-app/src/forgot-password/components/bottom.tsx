import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Relax } from 'plume2';
import { YouButton } from 'you-ui';
import { noop } from 'you-kit';

import { doneDisabledQL } from '../ql';

@Relax
export default class Bottom extends Component {
  props: {
    relaxProps?: {
      done: () => void;
      doneDisabled: boolean;
    };
  };

  static relaxProps = {
    done: noop,
    doneDisabled: doneDisabledQL
  };

  render() {
    const { doneDisabled } = this.props.relaxProps;

    console.log('doneDisabled...', doneDisabled);

    return (
      <View style={[YouStyles.y_center, styles.margin_top_36]}>
        <YouButton
          text={'完成'}
          disabled={doneDisabled}
          onPress={() => {
            this.props.relaxProps.done();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  margin_top_36: {
    marginTop: 36
  }
});
