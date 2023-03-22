import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppNavigator } from './navigators';
import { AppStylesProvider } from './providers';

const App: React.FC = () => (
  <NavigationContainer>
    <AppStylesProvider>
      <AppNavigator />
    </AppStylesProvider>
  </NavigationContainer>
);

export default App;
