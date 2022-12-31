import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Pressable} from 'react-native';

function HomeScreen({navigation}) {
  const [text, setText] = useState('');
  function Greeting(msg) {
    setText(msg);
  }
  return (
    <View style={styles.containter}>
      <Text style={styles.displayText}>{text}</Text>
      <View style={styles.greetingbox}>
        <Pressable
          onPressIn={() => Greeting('Hello')}
          onPressOut={() => Greeting(' ')}
          style={({pressed}) => [
            {opacity: pressed ? 0.5 : 1},
            styles.wrapperCustom,
          ]}>
          <Text>Greeting!</Text>
        </Pressable>
      </View>
      <View style={styles.nextTabBox}>
        <Button
          title="go to type something now.."
          onPress={() => navigation.navigate('input')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingbox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: 'lightblue',
  },
  displayText: {
    padding: 8,
  },
  nextTabBox: {
    margin: 8,
    padding: 8,
    backgroundColor: 'lightgrey',
  },
});

export default HomeScreen;
