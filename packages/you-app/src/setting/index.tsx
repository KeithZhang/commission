import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Status from '../home/component/status';
import ReturnBar from '../common/return-bar';
import InfoItem from '../common/info-item';

type Props = {};

export default class Setting extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Status />
        <ReturnBar />
        <SettingArea key={1}>
          <InfoItem title={'微信绑定'} />
          <InfoItem title={'手机号'} />
        </SettingArea>

        <SettingArea key={2}>
          <InfoItem title={'通知设置'} />
          <InfoItem title={'清除缓存'} />
          <InfoItem title={'当前版本'} />
        </SettingArea>

        <SettingArea key={3}>
          <InfoItem title={'切换帐号'} />
        </SettingArea>

        <SettingArea key={4}>
          <InfoItem title={'退出登录'} />
        </SettingArea>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray'
  }
});

class SettingArea extends Component<Props> {
  render() {
    return (
      <View style={SettingAreaStyles.container}>{this.props.children}</View>
    );
  }
}

const SettingAreaStyles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black'
  }
});
