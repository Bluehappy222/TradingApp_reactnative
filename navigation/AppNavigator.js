// AppNavigation.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../components/screens/LoginScreen';
import SignupScreen from '../components/screens/SignupScreen';
import MainDashboard from '../components/screens/MainDashboard';
import TransactionHistoryScreen from '../components/screens/TransactionHistoryScreen';
// Import other screens here

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={MainDashboard} />
        <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
        {/* Define other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
