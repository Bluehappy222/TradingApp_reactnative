// App.js

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigation from './navigation/AppNavigator';

const App = () => {
  return (
    <PaperProvider>
      <AppNavigation />
    </PaperProvider>
  );
};

export default App;
