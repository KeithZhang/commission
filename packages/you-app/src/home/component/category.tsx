import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const categroy = [
  { title: '拼购', img: require('assets/index_category1.png') },
  { title: '热卖', img: require('assets/index_category2.png') },
  { title: '精选商家', img: require('assets/index_category3.png') },
  { title: '新手教程', img: require('assets/index_category4.png') }
];

export default class Categroy extends React.Component<any> {
  render() {
    return (
      <View style={styles.container}>
        {categroy.map((v, k) => (
          <TouchableOpacity
            key={k}
            style={styles.item}
            activeOpacity={0.7}
            onPress={() => {
              // BottomStack.navigation.navigate('chosen');
              // RootStack.navigation.navigate('Fans');
            }}
          >
            <Image style={styles.img} source={v.img} />
            <Text>{v.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: 'row'
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 40,
    height: 40
  }
});
