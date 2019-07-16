import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';
import { Config, Kit, TimeUtil } from 'you-kit';
import { YouList } from 'you-ui';
import { fromJS } from 'immutable';
import { Relax, TViewAction } from 'plume2';

import * as ViewAction from '../action/user-fans-action';
export type TCounterViewAction = TViewAction<typeof ViewAction>;

@Relax
export default class DirectList extends Component {
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
      <YouList
        keyExtractor={(item: any) => Math.random()}
        url={`${Config.Host}/fans/list`}
        searchParams={{ direct: 'true', begDate: startDate, endDate: endDate }}
        renderItem={this._renderItem}
      />
    );
  }

  _renderItem({ item }: { item: any }) {
    console.log('item', item);
    item = fromJS(item);
    const createTime = TimeUtil.timeFormat(
      new Date(item.get('createTime')),
      'yyyy-MM-dd'
    );
    const url =
      'https://pro.modao.cc/uploads3/images/2697/26979120/v2_phktzs.jpg';
    return (
      <YouList.ListItemWrapper>
        <TouchableHighlight
          key={item.goodsId}
          onPress={() => {
            YouNavigator.navigate('SummaryDetail');
          }}
        >
          <View style={styles.listItem}>
            <View style={[styles.leftView, styles.borderView]}>
              <Image style={styles.img} source={{ uri: url }} />
              <View style={styles.columnView}>
                <View style={styles.betweenView}>
                  <View style={styles.nameView}>
                    <Text>{item.get('name')}...</Text>
                    <View style={styles.tagView}>
                      <Text style={styles.tagText}>
                        {item.get('levelLabel')}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.titleFont}>{createTime}</Text>
                </View>
                <Text style={[styles.titleFont, styles.mobileText]}>
                  {item.get('mobile')}
                </Text>
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
    justifyContent: 'space-between',
    height: 80,
    width: Kit.screenWidth,
    padding: 10,
    backgroundColor: '#fff'
  },
  borderView: {
    flex: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  leftView: {
    flexDirection: 'row'
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  betweenView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5
  },
  tagView: {
    backgroundColor: '#ffdb20',
    paddingLeft: 10,
    paddingTop: 5,
    marginLeft: 5,
    width: 80,
    height: 25,
    borderRadius: 5
  },
  tagText: {
    color: '#fff'
  },
  columnView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  titleFont: {
    color: '#999'
  },
  mobileText: {
    paddingTop: 5,
    paddingLeft: 5
  }
});
