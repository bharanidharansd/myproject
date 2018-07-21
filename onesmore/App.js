



import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar} from 'react-native';
import Login from './src/pages/Login';
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      backgroundColor="#190419"
      barStyle='light-content'
      />
      <Login/>

      </View>

    );
  }
}

const styles = StyleSheet.create({

   container :{
     backgroundColor: "#e8f442",
     flex: 1,
     alignItems: "center",
     justifyContent: "center",
}

});
