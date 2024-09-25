import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/routes/RootNavigation';
import {AuthProvider} from './Hooks/useAuth';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
