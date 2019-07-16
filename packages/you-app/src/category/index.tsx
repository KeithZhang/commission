import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { http } from 'you-kit';
import Cates from './components/cates';
import Header from './components/header';

export default class Category extends Component {
  static navigationOptions = {
    tabBarLabel: '分类'
  };

  state = {
    isLoading: true,
    firstCates: [],
    secondCates: {},
    selectedFirstCateId: 0
  };

  async componentDidMount() {
    const firstCatesData = await http.get('/goods/cats');
    if (!firstCatesData.err) {
      console.log('firstCatesData.res...', firstCatesData.res);
      const firstCateId = firstCatesData.res[0].id;
      const secondCatesData = await http.get(`/goods/cats/${firstCateId}`);
      console.log('secondCatesData.res...', secondCatesData.res);
      if (!secondCatesData.err) {
        this.setState({
          firstCates: firstCatesData.res,
          isLoading: false,
          secondCates: {
            [firstCateId]: secondCatesData.res
          },
          selectedFirstCateId: firstCateId
        });
      }
    }
  }

  render() {
    const {
      isLoading,
      firstCates,
      secondCates,
      selectedFirstCateId
    } = this.state;

    if (isLoading) {
      return (
        <View>
          <TouchableHighlight
            onPress={() => {
              YouNavigator.goBack();
            }}
          >
            <Text>go back</Text>
          </TouchableHighlight>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Header />
        <View
          style={{ marginTop: 10, borderColor: '#EAEBEB', borderWidth: 1 }}
        />
        <Cates
          firstCates={firstCates}
          secondCates={secondCates}
          selectedFirstCateId={selectedFirstCateId}
          onSelectedFirstCate={(firstCateId: number) => {
            this.onSelectedFirstCate(firstCateId);
          }}
        />
      </View>
    );
  }

  onSelectedFirstCate = async (firstCateId: number) => {
    console.log('firstCateId...', firstCateId);
    const { secondCates } = this.state;
    if (secondCates[firstCateId]) {
      return;
    }
    const secondCatesData = await http.get(`/goods/cats/${firstCateId}`);
    this.setState({
      isLoading: true
    });
    console.log('secondCatesData...', secondCatesData);
    if (!secondCatesData.err) {
      this.setState({
        isLoading: false,
        secondCates: {
          [firstCateId]: secondCatesData.res
        },
        selectedFirstCateId: firstCateId
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
