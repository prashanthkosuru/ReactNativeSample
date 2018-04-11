import React from 'react';
import {Alert, StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.scan}
          title="Scan for Bluetooth device"
        />
      </View>
    );
  }

  scan(){
    Alert.alert('Searching for bluetooth devices');
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
