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
        keyExtractor={(item: any) => item.id}
        url={`${Config.Host}/trade/list`}
        renderItem={this._renderItem}
      />
    );
  }

  _renderItem({ item }: { item: any }) {
    console.log('item', item);
    const tradeItem = item.tradeItemList[0];
    const date = TimeUtil.timeFormat(new Date(item.createTime), 'yyyy-MM-dd');
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
              <View style={styles.startView}>
                <Text>订单号：20123123131311</Text>
                <Button type="ghost" size="small" style={{ marginLeft: 4 }}>
                  复制
                </Button>
              </View>
              <View style={styles.betweenView}>
                <Text style={styles.shortFont}>下单日期：{date}</Text>
                <Text style={styles.shortFont}>会员号：201901010</Text>
              </View>
            </View>
            <View style={[styles.orderDetail, styles.startView]}>
              <Image
                style={styles.shopImagSize}
                source={{ uri: tradeItem.image }}
              />
              <View style={styles.goodsDetailView}>
                <View style={[styles.startView, styles.goodsView]}>
                  <Text style={{ flex: 1 }}>{tradeItem.name}</Text>
                  <Text style={[styles.numText, styles.shortFont]}>
                    X {tradeItem.count}
                  </Text>
                </View>
                <View style={[styles.columnView, styles.priceView]}>
                  <View style={styles.startView}>
                    <Text style={styles.shortFont}>订单金额：</Text>
                    <Text style={styles.redFont}>￥{item.payFee}</Text>
                  </View>
                  <View style={styles.startView}>
                    <Text style={styles.shortFont}>预估佣金：</Text>
                    <Text style={styles.redFont}>￥100.00</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </YouList.ListItemWrapper>
    );
  }
}

const styles = StyleSheet.create({
  centerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  columnView: {
    flexDirection: 'column'
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
  listItem: {
    flexDirection: 'column',
    height: 150,
    width: Kit.screenWidth,
    marginTop: 10,
    padding: 10,
    justifyContent: 'flex-start',
    backgroundColor: '#fff'
  },
  listItemTop: {
    paddingBottom: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  startView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
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
  redFont: {
    color: '#ff5c33'
  }
});
