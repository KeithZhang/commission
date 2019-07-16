import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

export interface IBottomButtonProps {
  text?: string;
  onPress?: () => void;
}

export default function BottomButton(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={props.onPress}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

BottomButton.defaultProps = {
  text: '',
  onPress: () => {}
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 44,
    padding: 23,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#4188FB'
  } as ViewStyle,

  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  } as ViewStyle,

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF'
  } as TextStyle
});
