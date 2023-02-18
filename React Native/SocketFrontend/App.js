import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client';

export default class App extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const socket = io("http://192.168.4.138:3000")
  }
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.welcome}>
          Welcome
        </Text>
        <Text style = {styles.instructions}>
          Get Started
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
