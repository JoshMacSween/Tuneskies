import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBackward,
  faForward,
  faStop,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

export default function Player() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesomeIcon size={50} color="white" icon={faBackward} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesomeIcon size={50} color="white" icon={faStop} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesomeIcon size={50} color="white" icon={faPause} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesomeIcon size={50} color="white" icon={faPlay} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesomeIcon size={50} color="white" icon={faForward} />
      </TouchableOpacity>
      <Text />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
