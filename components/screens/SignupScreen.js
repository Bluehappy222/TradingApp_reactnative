// components/screens/SignupScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Add signup logic here
    console.log('Signup Username:', username);
    console.log('Signup Password:', password);

    // For now, navigate back to Login screen after signup
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Sign Up</Title>
      <TextInput
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
        theme={{ colors: { primary: 'blue' } }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
        theme={{ colors: { primary: 'blue' } }}
      />
      <Button onPress={handleSignup} style={styles.button} color="blue">
        Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#aaf',
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
  },
  input: {
    marginBottom: 10,
    width: '80%',
    height: '10%',
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
    width: '60%',
    backgroundColor: '#0ff',
    borderRadius: 10,
  },
});

export default SignupScreen;
