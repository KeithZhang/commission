import React, { Component } from 'react';

import { StoreProvider } from 'plume2';
import { AppContainer, YouHeader } from 'you-ui';

import Mention from './components/mention';
import Form from './components/form';
import Bottom from './components/bottom';

import Store from './store';

@StoreProvider(Store)
export default class Login extends Component {
  render() {
    return (
      <AppContainer>
        <YouHeader back={true} middleTitle="忘记密码" />

        <Mention />
        <Form />
        <Bottom />
      </AppContainer>
    );
  }
}
