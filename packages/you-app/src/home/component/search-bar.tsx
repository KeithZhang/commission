import React from 'react';
import { Image, StyleSheet, TextInput, View, ViewStyle } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image style={styles.img} source={require('assets/search.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="搜索你想要找的商品关键字"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4188FB',
    width: '100%',
    height: 64,
    paddingTop: 20,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center'
  } as ViewStyle,
  inner: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 18,
    paddingHorizontal: 10
  } as ViewStyle,
  textInput: {
    flex: 1,
    height: 30,
    fontSize: 14,
    paddingLeft: 5
  },
  img: {
    width: 18,
    height: 18
  }
});
