import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppNavigator } from './navigators';

const App: React.FC = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;
