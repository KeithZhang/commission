import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface ILoadingProps {
  content: string;
}

export default class Loading extends Component<ILoadingProps> {
  static defaultProps = {
    content: "拼命加载数据..."
  };

  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.innerContainer]}>
          <View style={[styles.wrapper]}>
            <ActivityIndicator color="white" size="large" />
            <Text style={[styles.toast]}>{this.props.content}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "transparent"
    // zIndex: YouThemes.zindexs.loading_zindex
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: 89
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 89,
    height: 89,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, .8)"
  },
  toast: {
    color: "#ffffff",
    fontSize: 14,
    marginTop: 6
  }
});
