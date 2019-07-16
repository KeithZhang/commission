import React, { Component } from 'react';
import { Relax, TViewAction } from 'plume2';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon, DatePicker } from 'antd-mobile-rn';
import { Kit, TimeUtil } from 'you-kit';

import * as ViewAction from '../action/user-summary-action';
import List from './list';
export type TCounterViewAction = TViewAction<typeof ViewAction>;

@Relax
export default class Head extends Component<any> {
  props: {
    relaxProps?: {
      startDate: any;
      endDate: string;
      viewAction: TCounterViewAction;
    };
  };

  static relaxProps = {
    // 开始时间
    startDate: 'startDate',
    // 结束时间
    endDate: 'endDate',
    viewAction: 'viewAction'
  };

  render() {
    const { startDate, endDate } = this.props.relaxProps;
    return (
      <View style={styles.tabView}>
        {/* DatePicker */}
        <View style={styles.pickerView}>
          <View style={styles.dateView}>
            <View style={styles.selectView}>
              <DatePicker
                mode="date"
                extra={startDate}
                minDate={new Date(2018, 10, 10)}
                maxDate={new Date(2020, 10, 10)}
                format="YYYY-MM-DD"
                onChange={this.onChange.bind(this, 'startDate')}
              >
                <CustomChildren>开始时间</CustomChildren>
              </DatePicker>
            </View>
          </View>
          <View style={styles.dateView}>
            <View style={styles.selectView}>
              <DatePicker
                mode="date"
                extra={endDate}
                minDate={new Date(2018, 10, 10)}
                maxDate={new Date(2020, 10, 10)}
                format="YYYY-MM-DD"
                onChange={this.onChange.bind(this, 'endDate')}
              >
                <CustomChildren>结束时间</CustomChildren>
              </DatePicker>
            </View>
          </View>
        </View>

        {/* List */}
        <List />
      </View>
    );
  }

  /**
   * 检索时间change
   */
  onChange = (key: string, value: any) => {
    const { relaxProps } = this.props;
    const startDate = TimeUtil.timeFormat(new Date(value), 'yyyy-MM-dd');
    relaxProps.viewAction.UserSummaryAction.setItem(key, startDate);
  };
}

/**
 * DatePicker的点击项
 * @param props
 */
const CustomChildren = props => (
  <TouchableOpacity onPress={props.onClick}>
    <View style={styles.centerView}>
      <Text style={{ lineHeight: 20 }}>{props.children}</Text>
      <Icon type="down" size="xxs" />
    </View>
    <Text style={styles.dateText}>{props.extra}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  centerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pickerView: {
    flexDirection: 'row',
    backgroundColor: '#FFF'
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
    marginTop: 16,
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
