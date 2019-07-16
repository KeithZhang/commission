/**
 *
 **/

import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import DefaultImage from '../../common/default-image';
import { List } from 'antd-mobile-rn';
const Item = List.Item;

type Props = {
  navigation?: any;
};
export default class Settings extends Component<Props> {
  render() {
    return (
      <View>
        <List>
          <Item
            thumb={
              <Image style={styles.image} source={require('assets/统计.png')} />
            }
            arrow="horizontal"
            onClick={() => {
              YouNavigator.navigate('UserSummary');
            }}
          >
            统计
          </Item>
          <Item
            thumb={
              <Image
                style={styles.image}
                source={require('assets/订单信息.png')}
              />
            }
            onClick={() => {
              YouNavigator.navigate('OrderList');
            }}
            arrow="horizontal"
          >
            订单
          </Item>
          <Item
            thumb={
              <Image style={styles.image} source={require('assets/粉丝.png')} />
            }
            arrow="horizontal"
            onClick={() => {
              YouNavigator.navigate('UserFansList');
            }}
          >
            粉丝
          </Item>
          <Item
            thumb={
              <Image style={styles.image} source={require('assets/邀请.png')} />
            }
            onClick={() => {}}
            arrow="horizontal"
          >
            邀请
          </Item>
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
    marginRight: 10
  }
});
