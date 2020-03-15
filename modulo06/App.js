/* eslint-disable no-undef */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcome: {
    fontSize: 32,
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor: '#5179c1',
    borderRadius: 4,
    padding: 20,
    maxWidth: 300,
  },
});

export default function App() {
  return (
    <View style={styles.view}>
      <Text style={styles.welcome}>Bem vindo ao React Native</Text>
    </View>
  );
}
