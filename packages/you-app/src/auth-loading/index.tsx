import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { YouLoading } from 'you-ui';

export default class AuthLoading extends Component<any, any> {
  async componentWillMount() {
    let token = '';
    try {
      token = await AsyncStorage.getItem('token');
      console.log('token...', token);
      YouNavigator.navigate(token ? 'App' : 'Auth');
    } catch (err) {
      //report err
      console.log('err...', err);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <YouLoading />
      </View>
    );
  }
}
