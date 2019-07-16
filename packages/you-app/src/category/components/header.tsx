import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class Header extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.header]}
        onPress={() => {
          console.log('search...');
        }}
      >
        <Icon name="search1" size={20} color="#767676" style={[styles.icon]} />
        <Text style={[styles.headerText]}>搜索你想要找的商品</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#EAEBEB',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 12,
    color: '#767676'
  },
  icon: {
    paddingRight: 5
  }
});
export default Header;
