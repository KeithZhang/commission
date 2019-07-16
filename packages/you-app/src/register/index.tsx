import React, { Component } from 'react';

import { YouHeader, AppContainer } from 'you-ui';
import { StoreProvider } from 'plume2';

import Store from './store';
import Mention from './components/mention';
import Form from './components/form';
import Bottom from './components/bottom';
import { NavigationScreenProp } from 'react-navigation';

interface P {
  navigation?: NavigationScreenProp<any>;
}

@StoreProvider(Store)
export default class Register extends Component<P> {
  store: Store;

  componentDidMount() {
    const inviteCode = this.props.navigation.getParam('inviteCode', '0');
    console.log('inviteCode...', inviteCode);

    this.store.init(inviteCode);
  }

  render() {
    return (
      <AppContainer>
        <YouHeader middleTitle="注册" back={true} />

        <Mention />
        <Form />
        <Bottom />
      </AppContainer>
    );
  }
}
