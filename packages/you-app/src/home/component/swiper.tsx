/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2018/10/15
 **/

import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

export default class SwiperHead extends Component {
  render() {
    return (
      <View style={styles.swiperContainer}>
        <Swiper loadMinimal showsButtons={false}>
          <View style={styles.slide}>
            <Image style={styles.image} source={require('assets/s1.png')} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={require('assets/s2.png')} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={require('assets/s3.png')} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={require('assets/s4.png')} />
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  swiperContainer: {
    height: 190
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1
  }
});
