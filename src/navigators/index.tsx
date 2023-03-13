import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from './HomeScreen';

const Stack = createNativeStackNavigator();

export const AppNavigators: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} />
  </Stack.Navigator>
);
