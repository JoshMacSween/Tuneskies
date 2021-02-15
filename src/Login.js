import React, {useContext} from 'react';
import {KeyboardAvoidingView, Text, Button} from 'react-native';
import InputField from './components/InputField';
import {StylesContext} from './contexts/StylesProvider';

export default function Login({navigation}) {
  const {largeText, smallText, textStyle, container} = useContext(
    StylesContext,
  );
  return (
    <KeyboardAvoidingView style={container} behavior="padding">
      <Text style={[largeText, textStyle]}>Login</Text>
      <InputField placeholder="Email" />
      <InputField placeholder="Password" />
      <Button
        onPress={() => navigation.goBack()}
        title="Go back home"
        style={smallText}
      />
    </KeyboardAvoidingView>
  );
}
