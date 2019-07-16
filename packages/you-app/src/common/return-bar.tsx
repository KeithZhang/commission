/**
 * @desc
 *
 *  头部返回条
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2018/10/17
 **/
import React, {Component} from "react";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';


type Props = {
  style?:any;
  navigation?:any;
};

//@ts-ignore TODO 为什么会报错呢 ?
@withNavigation
export default class ReturnBar extends Component<Props>{

  render() {
    return ( <View style={style.container}>
      <TouchableOpacity style={style.btn} onPress={()=>{
        console.log('点击返回. ');
        this.props.navigation.goBack();
      }}>
        <Text style={style.txt}>返回</Text>
      </TouchableOpacity>
      {
        this.props.children
      }
    </View>)
  }
}

const style  = StyleSheet.create({
  container:{
    flexDirection:"row",
    paddingTop:12,
    paddingBottom:12,
    marginBottom:10,
    paddingLeft:15,
    backgroundColor:"white",
    borderBottomColor:"black",
    borderBottomWidth:1,
  },
  btn:{
    paddingRight:20,
  },
  txt:{
    fontSize:16,
  }
});