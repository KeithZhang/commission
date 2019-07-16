import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface CategoryType {
  name: string;
  id: number;
  pid: number;
}
interface SecondCatesType {
  [key: number]: Array<CategoryType>;
}
interface PropsType {
  firstCates: Array<CategoryType>;
  secondCates: SecondCatesType;
  selectedFirstCateId: number;
  onSelectedFirstCate: Function;
}

export default class Cates extends Component<PropsType, any> {
  static defaultProps = {
    firstCates: [],
    secondCates: {},
    selectedFirstCateId: 0,
    onSelectedFirstCate: (firstCateId: number) => {}
  };

  render() {
    const {
      firstCates,
      secondCates,
      selectedFirstCateId,
      onSelectedFirstCate
    } = this.props;

    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View
          style={{
            flex: 1,
            borderRightColor: '#EAEBEB',
            borderRightWidth: 1
          }}
        >
          <ScrollView
            automaticallyAdjustContentInsets={false}
            removeClippedSubviews={false}
          >
            {firstCates.map((v, i) => {
              return (
                <Text
                  key={i}
                  onPress={() => {
                    onSelectedFirstCate(v.id);
                  }}
                  style={{
                    fontSize: 12,
                    color: selectedFirstCateId == v.id ? '#37659F' : '#3F3C3B'
                  }}
                >
                  {v.name}
                </Text>
              );
            })}
          </ScrollView>
        </View>
        <View style={{ flex: 2 }}>
          <ScrollView
            automaticallyAdjustContentInsets={false}
            removeClippedSubviews={false}
          >
            {secondCates[selectedFirstCateId].map((v, i) => {
              return (
                <Text
                  key={i}
                  style={{
                    fontSize: 12,
                    color: selectedFirstCateId == v.id ? '#37659F' : '#3F3C3B'
                  }}
                >
                  {v.name}
                </Text>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
