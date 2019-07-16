import React, { Component } from 'react';

import { AppContainer, YouHeader } from 'you-ui';
import { StoreProvider } from 'plume2';

import Store from './store';
import Mention from './components/mention';
import Form from './components/form';
import Bottom from './components/bottom';

@StoreProvider(Store)
export default class Login extends Component {
  render() {
    return (
      <AppContainer>
        <YouHeader back={true} middleTitle="短信登录" />

        <Mention />
        <Form />
        <Bottom />
      </AppContainer>
    );
  }
}
