/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2018/10/15
 **/

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class GoodsListHead extends Component {
  //TODO 线条 怎么搞;
  render() {
    return (
      <View style={Styles.Container}>
        <View style={Styles.first}>
          <Line
            styles={{
              marginTop: 10,
              marginLeft: 15,
              marginRight: 15,
              width: 100
            }}
          />
          <Text style={Styles.firstFont}>大咖推荐</Text>
          <Line
            styles={{
              marginTop: 10,
              marginLeft: 15,
              marginRight: 15,
              width: 100
            }}
          />
        </View>
        <View>
          <Text style={Styles.second}>低价高佣好货</Text>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  Container: {
    // flexDirection:"row"
  },
  first: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  firstFont: {
    color: '#FF6800',
    fontSize: 18
  },
  second: {
    marginTop: 5,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    color: '#101010',
    opacity: 0.42
  },
  secondFont: {
    fontSize: 18
  },
  split: {
    height: 0.5,
    backgroundColor: 'black',
    marginBottom: 10
  }
});

type LineProps = { styles?: any };
export function Line(props: LineProps) {
  return <View style={[Styles.split, props.styles]} />;
}
