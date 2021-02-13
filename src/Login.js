import React from 'react';
import {KeyboardAvoidingView, Text, Button, StyleSheet} from 'react-native';
import InputField from './components/InputField';

export default function Login({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={[styles.largeText, styles.textStyle]}>Login</Text>
      <InputField placeholder="Email" />
      <InputField placeholder="Password" />
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textStyle: {
    fontFamily: 'AvenirNext-Regular',
  },
});
