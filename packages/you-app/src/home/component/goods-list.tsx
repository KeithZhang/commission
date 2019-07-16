import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import GoodsListHead from './goods-list-head';
import GoodsListItem from './goods-list-item';

export default class GoodsList extends Component {
  render() {
    return (
      <View style={Styles.Container}>
        <GoodsListHead />
        <GoodsListItem />
        <GoodsListItem />
        <GoodsListItem />
        <GoodsListItem />
        <GoodsListItem />
        <GoodsListItem />
        <GoodsListItem />
        <GoodsListItem />
        <GoodsListItem />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  Container: {
    width: '100%',
    paddingTop: 10,
    height: 800,
    backgroundColor: '#FFFFFF'
  }
});
