import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

// You can import from local files
import MainScreen from './components/mainScreen';
import Buzzer from './components/buzzer';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer />
      </View>
    )
  }
}

var switchContainer = createSwitchNavigator({
  MainScreen : MainScreen,
  Buzzer:Buzzer
})
const Appcontainer = createAppContainer(switchContainer)