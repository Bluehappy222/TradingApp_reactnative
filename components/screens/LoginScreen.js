// components/screens/LoginScreen.js

import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Dashboard');
    if (username == "User" && password == "password") {
    // Navigate to MainDashboard screen upon successful login
      navigation.navigate('Dashboard');
    } else {
    // Show an error message if credentials are invalid
      Alert.alert('Invalid Credentials', 'Please enter valid username and password.');
    } 
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

 return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/LOGO.jpg')} style={styles.background}>
        <View style={styles.logoContainer}>
          {/* Your logo image */}
        </View>
      </ImageBackground>
      <View style={styles.formContainer}>
        <Title style={styles.title}>Login</Title>
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
        <Button onPress={handleLogin} style={styles.loginbutton} color="red">
          Login
        </Button>
        <Button onPress={handleSignup} style={styles.signupbutton} color='blue'>
          Sign Up
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    backgroundColor: '#AAF',
  },
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 40, // Adjust spacing between logo and form
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    width: '80%',
    height: '10%',
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  loginbutton: {
    marginTop: 10,
    backgroundColor: '#Bff',
    width: '60%',
    borderRadius: 10,
  },
  signupbutton: {
    marginTop: 10,
    width: '60%',
    borderRadius: 10,
  },
});

export default LoginScreen;
