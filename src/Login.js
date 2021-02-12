import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function DetailsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
