import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput, Alert} from 'react-native';

function InputScreen({navigation}) {
  const [inputText, setInputText] = useState('');
  function takeInput(enteredText) {
    setInputText(enteredText);
  }
  function saveInput() {
    if (/^\s*$/.test(inputText) || inputText === '') {
      Alert.alert('Warning', 'Opps you cannot enter empty message!', [
        {text: 'OK, got it.'},
      ]);
    } else {
      navigation.navigate('display', {
        input: {
          text: inputText,
          id: Date.now(),
        },
      });
      setInputText('');
    }
  }
  return (
    <View style={styles.containter}>
      <Text>This is Input Screen.</Text>
      <TextInput
        style={styles.inputbox}
        placeholder="Enter my goal!"
        onChangeText={takeInput}
        value={inputText}
      />
      <View style={styles.nextTabBox}>
        <Button title="see what you just typed.." onPress={saveInput} />
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
  inputbox: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8,
  },
  nextTabBox: {
    margin: 8,
    backgroundColor: 'lightgrey',
  },
});

export default InputScreen;
