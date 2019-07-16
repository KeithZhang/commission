import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';
import { Badge, Tabs, Icon, DatePicker, Button } from 'antd-mobile-rn';
import { Config, Kit, TimeUtil } from 'you-kit';
import { YouList } from 'you-ui';

export default class App extends Component {
  render() {
    return (
      <YouList
        keyExtractor={(item: any) => Math.random()}
        url={`${Config.Host}/flow/list`}
        renderItem={this._renderItem}
      />
    );
  }

  _renderItem({ item }: { item: any }) {
    console.log('item', item);
    const date = TimeUtil.timeFormat(new Date(item.processTime), 'yyyy-MM-dd');
    return (
      <YouList.ListItemWrapper>
        <TouchableHighlight
          key={item.goodsId}
          onPress={() => {
            YouNavigator.navigate('SummaryDetail');
          }}
        >
          <View style={styles.listItem}>
            <View style={[styles.columnView, styles.listItemTop]}>
              <View style={styles.betweenView}>
                <Text>订单号：20123123131311</Text>
                {item.complete ? (
                  <Text>已结算</Text>
                ) : (
                  <Text style={styles.completeFont}>交易中</Text>
                )}
              </View>
              <View style={[styles.betweenView, styles.marginTop]}>
                <Text style={styles.shortFont}>下单日期：{date}</Text>
                <Text style={styles.shortFont}>会员号：{item.buyerId}</Text>
              </View>
            </View>
            <View style={[styles.columnView]}>
              <View style={styles.betweenView}>
                <Text>订单金额</Text>
                <Text>{item.tradeMoney}</Text>
              </View>
              <View style={[styles.betweenView, styles.marginTop]}>
                <Text>收入</Text>
                <Text>{item.money}</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </YouList.ListItemWrapper>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'column',
    height: 120,
    width: Kit.screenWidth,
    marginTop: 10,
    padding: 10,
    justifyContent: 'flex-start',
    backgroundColor: '#fff'
  },
  centerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  columnView: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50
  },
  container: {
    flex: 1
  },
  tabView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  dateView: {
    flexDirection: 'column',
    width: Kit.screenWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  },
  dateText: {
    paddingTop: 5,
    textAlign: 'center',
    lineHeight: 20
  },
  selectView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  datePicker: {
    height: 10
  } as any,
  listItemTop: {
    paddingBottom: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  startView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40
  },
  betweenView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  shortFont: {
    color: '#999'
  },
  orderDetail: {
    flex: 1,
    paddingTop: 10
  },
  shopImagSize: {
    width: 80,
    height: 80,
    borderRadius: 5
  },
  goodsDetailView: {
    flex: 1,
    height: 80,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  goodsView: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'flex-start'
  },
  numText: {
    width: 30,
    textAlign: 'right'
  },
  priceView: {
    paddingLeft: 5,
    paddingRight: 5
  },
  marginTop: {
    marginTop: 10
  },
  completeFont: {
    color: '#4188fb'
  }
});
