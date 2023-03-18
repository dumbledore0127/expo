import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserScreenParams } from '../../user/navigators/UserScreen';
import { LoginScreen } from './LoginScreen';

export type AuthStackParamList = {
  Login: undefined;
  UserNavigator: { screen: 'User'; params: UserScreenParams };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name='Login' component={LoginScreen} />
  </Stack.Navigator>
);
