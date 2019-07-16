/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2018/10/15
 **/

import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Line } from './goods-list-head';
type Props = {};
export default class GoodsListItem extends Component<Props> {
  render() {
    return (
      <View>
        <Line
          styles={{
            marginTop: 10,
            marginLeft: 15,
            marginRight: 15,
            opacity: 0.22
          }}
        />
        <View style={Styles.Container}>
          <View style={Styles.image}>
            <Image
              style={Styles.image}
              source={require('assets/goods-image-demo.png')}
            />
          </View>

          <View style={Styles.goodsInfo}>
            <Text style={Styles.goodsInfoTitle}>
              商品名称商品名称商品名称商1
            </Text>
            <View style={Styles.goodsInfoPriceArea}>
              <Text style={Styles.goodsInfoPrice}>¥34.00</Text>
              <Text style={Styles.goodsInfoMarketPrice}>¥49.00</Text>
            </View>
            <View style={Styles.goodsInfoOpt}>
              <View>
                <View style={Styles.goodsInfoTicket}>
                  <Text style={Styles.goodsInfoTicketFont}>券 ¥15</Text>
                </View>
                <View style={Styles.goodsInfoOptFlag}>
                  <Text>预估佣金：</Text>
                  <Text style={Styles.goodsinfoOptPrice}>¥10.20</Text>
                </View>
              </View>
              <View style={Styles.goodsInfoShareContainer}>
                <TouchableOpacity style={Styles.goodsInfoOptShareArea}>
                  <Image
                    style={Styles.shareImage}
                    source={require('assets/goods-image-demo.png')}
                  />
                  <Text style={Styles.shareFont}>分享 </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    marginRight: 10,
    paddingTop: 10,
    paddingLeft: 10,
    marginBottom: 10
  },
  image: {
    width: 144,
    height: 122
  },
  goodsInfo: {
    marginLeft: 10,
    marginRight: 10,
    width: 240
  },
  goodsInfoTitle: {
    fontSize: 16
  },
  goodsInfoPriceArea: {
    flexDirection: 'row',
    marginTop: 10
  },
  goodsInfoPrice: {
    color: '#E51C23'
  },
  goodsInfoMarketPrice: {
    color: '#AAAAAA'
  },
  goodsInfoTicket: {
    marginTop: 10,
    height: 25,
    backgroundColor: 'red',
    width: 54,
    paddingTop: 3,
    borderRadius: 5,
    marginBottom: 10
  },
  goodsInfoTicketFont: {
    color: 'white'
  },
  goodsInfoOpt: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  goodsinfoOptPrice: {
    color: '#E51C23'
  },
  goodsInfoShareContainer: {
    flexDirection: 'row',
    width: 76,
    height: 35,
    backgroundColor: '#FDB30A',
    alignSelf: 'flex-end'
  },
  goodsInfoOptFlag: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  goodsInfoOptShareArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareImage: {
    width: 24,
    height: 24,
    marginRight: 5
  },
  shareFont: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
