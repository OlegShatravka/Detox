/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 // test push trigger

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import { Counter } from './Counter';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { buttonPressed: 0 };
  }

  handleButtonPress = () => {
    this.setState({ buttonPressed: this.state.buttonPressed + 1 });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text testID="welcome" style={styles.welcome}>Welcome to React Native!</Text>
        <View testID="CounterContainer">
          <Counter testID="runningState" value={this.state.buttonPressed} />
          <Button title="Start" testID="startButton" onPress={this.handleButtonPress}/>
        </View>
        <TextInput testID="input" style={styles.input} />
        <View style={styles.listContainer}>
          <FlatList testID="list" data={["Tom", "Anna", "Susanna", "Julia"]} renderItem={({item}) => <Text style={styles.listItem}>{item}</Text>}/>
        </View>
        <Button title="Start" testID="startButton" onPress={this.handleButtonPress}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  listContainer: {
    height: 100,
    width: "80%",
    backgroundColor: "#eeee",
  },
  listItem: {
    height: 100,
  }
});
