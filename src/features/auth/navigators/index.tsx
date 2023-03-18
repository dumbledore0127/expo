import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreenParams } from '../../../navigators/HomeScreen';
import { LoginScreen } from './LoginScreen';

export type AuthStackParamList = { Login: undefined; Home: HomeScreenParams };

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigators: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name='Login' component={LoginScreen} />
  </Stack.Navigator>
);
