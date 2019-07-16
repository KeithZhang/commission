/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2018/10/11
 **/
import { Icon } from 'antd-mobile-rn';
import React, { Component } from 'react';
import { View } from 'react-native';
import Status from '../home/component/status';
// import Iconn from 'react-native-vector-icons/iconfont';

type Props = {};

export default class Chosen extends Component<Props> {
  static navigationOptions = {
    tabBarLabel: '精选'
  };

  render() {
    // const tabs = [
    //   { title: 'aaa' },
    //   { title: 'bb' },
    //   { title: 'ccc' },
    // ];
    // const style = {
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   height: 150,
    //   backgroundColor: '#fff',
    // } as any;
    return (
      <View style={{ flex: 1 }}>
        <Status />
        {/*<Icon type="minus-circle" theme="twoTone" />*/}
        <Icon type={'\ue620'} size={55} color="red" />
        {/*<Iconn name="wechat" size={30} color="#900" />*/}

        {/*<Tabs tabs={tabs} initialPage={1}>*/}
        {/*<View style={style}>*/}
        {/*<Text>Content of First Tab</Text>*/}
        {/*</View>*/}
        {/*<View style={style}>*/}
        {/*<Text>Content of Second Tab</Text>*/}
        {/*</View>*/}
        {/*<View style={style}>*/}
        {/*<Text>Content of Third Tab</Text>*/}
        {/*</View>*/}
        {/*</Tabs>*/}
      </View>
    );
  }
}

// type ChosenItemProps = {};
//
// class ChosenItem extends Component<ChosenItemProps> {
//   render(){
//     return (<View>
//       <View style={style.head}>
//         <View style={style.headTitle}>
//         </View>
//         <View style={style.headOpt}>
//         </View>
//       </View>
//
//       <View  style={style.pic}></View>
//     </View>)
//
//   }
// }
//
// const style=StyleSheet.create({
//   head:{
//
//   },
//   headTitle:{
//
//   },
//   headOpt:{
//
//   },
//   pic:{
//
//   }
//
// });
