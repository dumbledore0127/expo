import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppNavigators } from './navigators';

const App: React.FC = () => (
  <NavigationContainer>
    <AppNavigators />
  </NavigationContainer>
);

export default App;
