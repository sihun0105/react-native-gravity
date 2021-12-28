/*https://yuddomack.tistory.com/entry/5React-Native-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EB%94%94%EC%9E%90%EC%9D%B8-2%EB%B6%80-%EB%B0%B0%EC%B9%98Flex-Direction%EC%99%80-%EC%A0%95%EB%A0%ACjustify-content-align-items */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item1} />
        <View style={styles.item2} />
        <View style={styles.item3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  item1: {
    width:50,
    height:50,
    backgroundColor: 'red',
  },
  item2: {
    width:50,
    height:50,
    backgroundColor: 'yellow',
  },
  item3: {
    width:50,
    height:50,
    backgroundColor: 'green',
  },
});