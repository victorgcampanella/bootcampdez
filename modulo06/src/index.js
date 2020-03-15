import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import './config/ReactotronConfig';

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
    margin: 50,
    maxWidth: 350,
  },

  button: {
    borderRadius: 50,
  },
});

console.tron.log('Hello Agora');

export default function App() {
  return (
    <View style={styles.view}>
      <Text style={styles.welcome}>Bem vindo ao React Native</Text>
      <Button style={styles.button} title="Enviar" />
    </View>
  );
}
