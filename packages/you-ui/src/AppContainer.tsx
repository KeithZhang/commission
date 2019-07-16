import React, { Component } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import YouStyles from './styles/common';

export default class AppContainer extends Component {
  render() {
    return (
      <SafeAreaView style={[YouStyles.flex_1, YouStyles.backgound_color_white]}>
        {this.props.children}
      </SafeAreaView>
    );
  }
}
