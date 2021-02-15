import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StylesContext} from './contexts/StylesProvider';

export default function HomeScreen({navigation}) {
  const {largeText, container} = useContext(StylesContext);

  return (
    <View style={container}>
      <Text style={[largeText]}>Tuneskies</Text>
      <Button
        onPress={() => navigation.navigate('Login')}
        title="Go to Login"
      />
    </View>
  );
}
