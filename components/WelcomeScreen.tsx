import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export default function WelcomeScreen() {
  const [firstName, setFirstName] = useState<string>(''); // typer la state

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to My App</Text>
      <Text style={styles.regularText}>
        This is a simple demo application. Please enter your name below.
      </Text>

      <TextInput
        style={styles.inputBox}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    marginHorizontal: 20,
    marginVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#EDEFEE',
    borderRadius: 8,
    fontSize: 18,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
});
