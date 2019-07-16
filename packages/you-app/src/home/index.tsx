import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Config } from 'you-kit';
import { YouList } from 'you-ui';
import Category from './component/category';
import SearchBar from './component/search-bar';
import Swiper from './component/swiper';

interface IGoodsItem {
  thumbnail: string;
  rate: number;
  price: number;
  name: number;
  groupPrice: number;
  goodsId: number;
  coupon: {
    amount: number;
    endTime: number;
    remain: number;
    requireAmount: number;
    startTime: number;
    total: number;
  };
}

export default class App extends Component {
  static navigationOptions = {
    tabBarLabel: '首页'
  };

  render() {
    return (
      <YouList
        keyExtractor={(item: any) => item.goodsId}
        url={`${Config.Host}/goods/list`}
        renderHeader={this._renderHeader}
        renderItem={this._renderItem}
      />
    );
  }

  _renderHeader() {
    return (
      <View>
        <SearchBar />
        <Swiper />
        <Category />
      </View>
    );
  }

  _renderItem({ item }: { item: IGoodsItem }) {
    return (
      <YouList.ListItemWrapper>
        <TouchableHighlight
          style={styles.listItem}
          key={item.goodsId}
          onPress={() => {
            YouNavigator.navigate('SummaryDetail');
          }}
        >
          <View style={styles.listItem}>
            <Image
              source={{ uri: item.thumbnail }}
              style={styles.listItemImg}
            />
            <View style={styles.listItemInner}>
              <Text numberOfLines={2}>{item.name}</Text>
              <Text style={styles.price}>{`￥ ${item.price}`}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </YouList.ListItemWrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  blank: {
    width: '100%',
    height: 8,
    backgroundColor: '#F0F0F2'
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    width: 375,
    height: 136,
    paddingVertical: 8,
    paddingLeft: 15
  },
  listItemImg: {
    borderRadius: 8,
    width: 120,
    height: 120
  },
  listItemInner: {
    flex: 1,
    paddingLeft: 10
  },
  price: {
    fontSize: 16,
    color: '#FF5C33',
    marginTop: 10
  }
});
