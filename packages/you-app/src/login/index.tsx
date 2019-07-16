import React, { Component } from 'react';
import { StoreProvider } from 'plume2';
import { AppContainer, YouHeader } from 'you-ui';

import Store from './store';
import Mention from './components/mention';
import Form from './components/form';
import Bottom from './components/bottom';

@StoreProvider(Store)
export default class Login extends Component {
  state = {
    mobilePhone: '',
    password: ''
  };

  render() {
    return (
      <AppContainer>
        <YouHeader back={true} middleTitle="登录" />

        <Mention />
        <Form />
        <Bottom />
      </AppContainer>
    );
  }
}
