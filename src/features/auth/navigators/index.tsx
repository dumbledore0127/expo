import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserScreenParams } from '../../user/navigators/UserScreen';
import { LoginScreen } from './LoginScreen';

export type AuthStackParamList = {
  Login: undefined;
  UserNavigators: { screen: 'User'; params: UserScreenParams };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigators: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name='Login' component={LoginScreen} />
  </Stack.Navigator>
);
