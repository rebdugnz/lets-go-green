import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Firstscreen from './client/components/Firstscreen.js'
//Assets:
const logo = require('./assets/logo.jpg')

const SignedOut = createStackNavigator({
    Start: {
        screen: Firstscreen
    },
})

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
       <View style={styles.container}>
         <View style={styles.insideContainer}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.title}>Lets Go Green</Text>
          <Button style={styles.button} title="Enter" onPress={() => navigate('Start')}/>
         </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EAD29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideContainer: {
    width: 300,
    height: 525,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    marginVertical: 25,
    paddingVertical: 10,
    fontSize: 30,
  },
  button: {
    fontWeight: "700",
    backgroundColor: '#3EAD29',
    margin: 25,
    fontSize: 25,
    padding: 10,
  },
  logo: {
    alignSelf: 'center',
    width: 250,
    height: 150,
    padding: 10,
  },
});
