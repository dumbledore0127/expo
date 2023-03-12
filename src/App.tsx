import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './navigators';

const App = () => (
  <NavigationContainer>
    <AppRoutes />
  </NavigationContainer>
);

export default App;
