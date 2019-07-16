import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'antd-mobile-rn';
import { Config, Kit } from 'you-kit';
import { YouList } from 'you-ui';
import { Relax, TViewAction, IMap } from 'plume2';

import * as ViewAction from '../action/user-summary-action';
import { IList } from 'src/typings/globalType';
export type TCounterViewAction = TViewAction<typeof ViewAction>;

@Relax
export default class Summary extends Component {
  props: {
    relaxProps?: {
      // 用户信息
      searchMode: string;
      viewAction: TCounterViewAction;
      // 统计列表
      summaryList: IList;
    };
  };

  static relaxProps = {
    searchMode: 'searchMode',
    viewAction: 'viewAction',
    summaryList: 'summaryList'
  };

  render() {
    const { searchMode } = this.props.relaxProps;

    const dayBgColor = searchMode == '0' ? '#4188fb' : '#fff';
    const dayColor = searchMode == '0' ? '#fff' : '#4188fb';
    const monthBgColor = searchMode == '0' ? '#fff' : '#4188fb';
    const monthColor = searchMode == '0' ? '#4188fb' : '#fff';
    return (
      <View style={styles.container}>
        <View style={styles.betweenView}>
          <Text>佣金数据</Text>
          <View style={styles.rowView}>
            <Button
              style={[styles.switchBtn, { backgroundColor: dayBgColor }]}
              onClick={this._onPress.bind(this, '0')}
            >
              <Text style={[styles.switchText, { color: dayColor }]}>按天</Text>
            </Button>
            <Button
              style={[styles.switchBtn, { backgroundColor: monthBgColor }]}
              onClick={this._onPress.bind(this, '1')}
            >
              <Text style={[styles.switchText, { color: monthColor }]}>
                按月
              </Text>
            </Button>
          </View>
        </View>

        {this._eachList()}
      </View>
    );
  }

  _eachList() {
    const { summaryList, searchMode } = this.props.relaxProps;
    console.log('summaryList..', summaryList.toJS());
    if (summaryList.isEmpty()) {
      return;
    }

    // 取出最大的，用于计算长度
    const max = summaryList.maxBy(item => item.get('forecast')).get('forecast');
    return summaryList.map(item => this._renderItem(item, searchMode, max));
  }

  _renderItem(item: IMap, searchMode: string, max: number) {
    console.log('item', item);
    const width = ((Kit.screenWidth - 10) * item.get('reality')) / max;
    let date = `${item.get('year')}-${item.get('month')}`;
    if (searchMode == '0') {
      date += `-${item.get('day')}`;
    }
    return (
      <View style={styles.itemParentView} key={Math.random()}>
        <View style={[styles.itemChlidView, { width: width }]}>
          <Text style={styles.itemText}>{date}</Text>
          <Text style={styles.itemText}>{item.get('reality')}</Text>
        </View>
      </View>
    );
  }

  /**
   * 检索时间change
   */
  _onPress = (searchMode: string) => {
    const { viewAction } = this.props.relaxProps;
    viewAction.UserSummaryAction.refreshList(searchMode);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  betweenView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff'
  },
  rowView: {
    flexDirection: 'row'
  },
  switchBtn: {
    width: 60,
    height: 30,
    marginLeft: 5
  },
  switchText: {
    fontSize: 12
  },
  itemParentView: {
    backgroundColor: '#ccc',
    height: 30,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5
  },
  itemChlidView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4188fb',
    width: 300,
    height: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  itemText: {
    color: '#fff'
  }
});
