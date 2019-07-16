import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import BottomButton from './bottom-button';
import Button from './button';

export default class ExampleApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button text="hello-larger" size="large" type="primary" />
        <View style={{ height: 30 }} />
        <Button text="middle" size="middle" type="primary" />
        <View style={{ height: 30 }} />
        <Button text="确定" type="primary" size="small" />
        <View style={{ height: 30 }} />
        <BottomButton text="BottomButton" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  } as ViewStyle
});
