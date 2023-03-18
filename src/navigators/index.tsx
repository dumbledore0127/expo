import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthNavigators } from '../features/auth';
import { UserNavigators } from '../features/user';

export type RootStackParamList = {
  AuthNavigators: undefined;
  UserNavigators: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigators: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name='AuthNavigators' component={AuthNavigators} />
    <Stack.Screen name='UserNavigators' component={UserNavigators} />
  </Stack.Navigator>
);
