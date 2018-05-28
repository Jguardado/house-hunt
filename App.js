import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { StyleSheet, Text, View } from 'react-native';

/*
Lets get this hooked up with redux
*/

export default class App extends React.Component {
  render() {
    console.log("what is store: ", store);
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>lets hook up that redux!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </Provider>
    );
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
