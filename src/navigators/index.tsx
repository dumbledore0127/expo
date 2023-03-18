import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthNavigator } from '../features/auth';
import { UserNavigator } from '../features/user';

export type RootStackParamList = {
  AuthNavigator: undefined;
  UserNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name='AuthNavigator' component={AuthNavigator} />
    <Stack.Screen name='UserNavigator' component={UserNavigator} />
  </Stack.Navigator>
);
