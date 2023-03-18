import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserScreen, UserScreenParams } from './UserScreen';

export type UserStackParamList = { User: UserScreenParams };

const Stack = createNativeStackNavigator<UserStackParamList>();

export const UserNavigators: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name='User' component={UserScreen} />
  </Stack.Navigator>
);
