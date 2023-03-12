import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';

const Stack = createNativeStackNavigator();

export const AppNavigators = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} />
  </Stack.Navigator>
);
