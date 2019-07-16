/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2018/10/11
 **/
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Line from '../common/line';
import ArrowBtn from './arrow-btn';

type InfoItemProps = {
  title: string;
};

export default class InfoItem extends Component<InfoItemProps> {
  render() {
    return (
      <View>
        <View style={styles.infoItem}>
          <Text style={{ fontSize: 16 }}>{this.props.title}:</Text>
          <View style={styles.infoItemRight}>
            <Text style={{ opacity: 0.42, fontSize: 16 }}>keith</Text>
            <ArrowBtn />
          </View>
        </View>
        <Line style={{ opacity: 0.22 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabContainer: {},
  infoContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingTop: 15,
    paddingBottom: 15
  },
  infoItemRight: {
    flexDirection: 'row'
  }
});
