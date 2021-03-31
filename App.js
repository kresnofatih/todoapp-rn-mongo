
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './store/store'
import { Provider } from 'react-redux'
import Internal from './Internal';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Internal/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
