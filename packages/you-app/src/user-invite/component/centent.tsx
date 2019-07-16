/**
 * 我的统计
 **/

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PixelRatio
} from 'react-native';
import { List, Button } from 'antd-mobile-rn';
import { Relax } from 'plume2';
import QRCode from 'react-native-qrcode';

import Line from '../../common/line';

import * as WeChat from 'react-native-wechat';

@Relax
export default class Content extends Component<any> {
  props: {
    relaxProps?: {
      // 二维码地址
      inviteUrl: string;
    };
  };

  static relaxProps = {
    inviteUrl: 'inviteUrl'
  };

  render() {
    const { inviteUrl } = this.props.relaxProps;
    const url =
      'https://pro.modao.cc/uploads3/images/2697/26979087/v2_phktg4.jpg';

    return (
      <View>
        <View style={styles.top}>
          <Image style={styles.imgView} source={{ uri: url }}>
            <QRCode
              value={inviteUrl}
              size={150}
              bgColor="black"
              fgColor="white"
            />
          </Image>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomTitle}>
            <Line
              style={{
                height: 1,
                width: 60,
                backgroundColor: 'black'
              }}
            />
            <Text
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                fontSize: 18
              }}
            >
              海报分享
            </Text>
            <Line
              style={{
                height: 1,
                width: 60,
                backgroundColor: 'black'
              }}
            />
          </View>
          <View style={styles.bottomListContainer}>
            <View style={styles.shareItem}>
              <TouchableOpacity
                onPress={() => {
                  WeChat.shareToSession({
                    type: 'text',
                    description: 'https://keith.wxdh.1000.com'
                  });
                }}
              >
                <Image
                  style={styles.shareItemImg}
                  source={{
                    uri:
                      'https://pro.modao.cc/uploads3/images/2711/27117844/v2_phs13f.png'
                  }}
                />
                <Text style={styles.shareItemTxt}>微信好友</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.shareItem}>
              <TouchableOpacity
                onPress={() => {
                  WeChat.shareToTimeline({
                    type: 'text',
                    description: 'https://keith.wxdh.1000.com'
                  });
                }}
              >
                <Image
                  style={styles.shareItemImg}
                  source={{
                    uri:
                      'https://pro.modao.cc/uploads3/images/2717/27173683/v2_phtuxb.png'
                  }}
                />
                <Text style={styles.shareItemTxt}>朋友圈</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.shareItem}>
              <Image
                style={styles.shareItemImg}
                source={{
                  uri:
                    'https://pro.modao.cc/uploads3/images/2717/27173697/v2_phtuyi.png'
                }}
              />
              <Text style={styles.shareItemTxt}>QQ</Text>
            </View>

            <View style={styles.shareItem}>
              <Image
                style={styles.shareItemImg}
                source={{
                  uri:
                    'https://pro.modao.cc/uploads3/images/2717/27173703/v2_phtuyx.png'
                }}
              />
              <Text style={styles.shareItemTxt}>新浪</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  img: {
    width: 100,
    height: 100
  },
  imgView: {
    width: 340,
    height: 500,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20
  },
  top: {
    alignItems: 'center',
    height: 500
  },
  bottom: {},
  bottomTitle: {
    height: 40,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  bottomListContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  shareItem: {
    alignItems: 'center'
  },
  shareItemImg: {
    width: 50,
    height: 50
  },
  shareItemTxt: {
    color: '#000',
    marginTop: 14,
    fontSize: 15
  }
});
