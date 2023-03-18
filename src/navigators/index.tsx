import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthNavigators } from '../features/auth';
import { HomeScreen, HomeScreenParams } from './HomeScreen';

export type RootStackParamList = { Auth: undefined; Home: HomeScreenParams };

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigators: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name='Auth' component={AuthNavigators} />
    <Stack.Screen name='Home' component={HomeScreen} />
  </Stack.Navigator>
);
