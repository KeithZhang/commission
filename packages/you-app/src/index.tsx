import React, { Component } from 'react';
import { AppContainer } from 'you-ui';
import { StatusBar } from 'react-native';

import AuthNavigator from './navigator';
import * as WeChat from 'react-native-wechat';
import { Config } from 'you-kit';

export default class RootContainer extends Component {
  _ref: Object;

  componentDidMount() {
    (global || window)['YouNavigator'] = (this._ref as any)._navigation;

    WeChat.registerApp(Config.AppId);
  }

  render() {
    return (
      <AppContainer>
        <StatusBar />
        <AuthNavigator ref={ref => (this._ref = ref)} />
      </AppContainer>
    );
  }
}
