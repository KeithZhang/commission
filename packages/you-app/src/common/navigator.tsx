import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';

type Props = {
  navigation: any;
};

const navs = [
  { routeName: '首页', path: 'Home' },
  { routeName: '分类', path: 'Category' },
  { routeName: '精选', path: 'Chosen' },
  { routeName: '我的', path: 'UserCenter' }
];

export default class Navigator extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.tabContainer}>
        {navs.map(route => (
          <NavigatorItem
            key={route.routeName}
            name={route.routeName}
            onPress={this._navigation.bind(this, route.path)}
          />
        ))}
      </SafeAreaView>
    );
  }

  _navigation(routerName: string) {
    console.log('跳转到路由:', routerName);
    this.props.navigation.navigate(routerName);
  }
}

type ItemProps = {
  name: string;
  img?: string;
  onPress: Function;
};

class NavigatorItem extends Component<ItemProps> {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()} style={styles.tab}>
        <Image
          style={styles.tabImg}
          source={require('assets/gray-default.png')}
        />
        <Text>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 48,
    paddingLeft: 6,
    paddingRight: 6,
    justifyContent: 'space-between'
  },
  tab: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 43
  },
  tabImg: {
    backgroundColor: 'black',
    width: 30,
    height: 30,
    marginTop: 20,
    marginBottom: 5
  }
});
