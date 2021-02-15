import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function InputField({placeholder}) {
  return (
    <TextInput
      style={[styles.input, styles.smallText, styles.textStyle]}
      placeholder={placeholder}
      placeholderTextColor="white"
      clearButtonMode="always"
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'AvenirNext-Regular',
  },
  smallText: {
    fontSize: 18,
  },
  input: {
    backgroundColor: '#483D8B',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 5,
  },
});
