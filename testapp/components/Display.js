import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function DisplayScreen({route, navigation}) {
  const {text} = route.params.input;
  return (
    <View style={styles.containter}>
      <Text>{JSON.stringify(text)}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  containter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DisplayScreen;
