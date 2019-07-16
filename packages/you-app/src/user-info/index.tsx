/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2018/10/11
 **/
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Status from '../home/component/status';
import DefaultImage from '../common/default-image';
import Line from '../common/line';
import InfoItem from '../common/info-item';
import ReturnBar from '../common/return-bar';

type Props = {};

export default class UserInfo extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Status />
        <ReturnBar />
        <View style={styles.imgContainer}>
          <DefaultImage style={styles.image} />
          <Text style={styles.imgBtn}>点击修改头像</Text>
        </View>
        <View style={styles.infoContainer}>
          <Line style={{ opacity: 0.22 }} />
          <InfoItem title={'昵称'} />
          <InfoItem title={'我的标签'} />
          <InfoItem title={'微信绑定'} />
          <InfoItem title={'手机号'} />
          <InfoItem title={'我的邀请码'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  imgContainer: {
    alignItems: 'center'
  },
  image: {
    marginTop: 10,
    width: 80,
    height: 80
  },
  imgBtn: {
    marginTop: 10,
    fontSize: 14,
    color: '#101010',
    opacity: 0.42
  },
  infoContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },

  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingTop: 15,
    paddingBottom: 15
  },
  infoItemRight: {
    flexDirection: 'row'
  }
});
//
// type UserInfoItemProps = {
//   title:string
// };
//
// class UserInfoItem extends Component<UserInfoItemProps> {
//   render() {
//     return (
//       <View>
//         <View style={styles.infoItem}>
//           <Text style={{fontSize:16}}>{this.props.title}:</Text>
//           <View style={styles.infoItemRight}>
//             <Text style={{opacity:0.42,fontSize:16}}>keith</Text>
//             <ArrowBtn />
//           </View>
//         </View>
//         <Line style={{opacity: 0.22}} />
//       </View>
//     );
//   }
// }
