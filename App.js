import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import './global';
let levelup = require('levelup');
let asyncstorage = require('asyncstorage-down');
let db = levelup(new asyncstorage('/does/not/matter'));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: 'Welcome to level db!',
      instructions: 'Press any button'
    }
  }

  putString = async (key, value) => {
    try {
      await db.put(key, value);
      this.setState({ instructions: 'Save success' });
    } catch (e) {
      console.error(e);
    }
  }

  getString = async (key) => {
    let result;
    try {
      result = await db.get(key);
    } catch (e) {
      result = 'Nothing';
    }
    this.setState({ instructions: result.toString() });
  }

  delStringByKey = async (key) => {
    try {
      await db.del(key);
      this.setState({ instructions: 'Delete success' });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{ this.state.welcome }!</Text>
        <Text style={styles.instructions}>{ this.state.instructions }</Text>
        <Button
          onPress={() => this.putString('key', '123')}
          title="Put 123 to db"/>
        <Button
          onPress={() => this.getString('key')}
          title="Get text from db"/>
        <Button
          onPress={() => this.delStringByKey('key')}
          title="Del text from db"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
