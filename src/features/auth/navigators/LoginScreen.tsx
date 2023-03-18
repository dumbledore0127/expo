import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Button } from 'react-native';
import { AuthStackParamList } from '.';

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => (
  <View>
    <Button
      title='Login'
      onPress={() =>
        navigation.navigate('UserNavigators', {
          screen: 'User',
          params: { userId: 'passed-user-id' },
        })
      }
    />
  </View>
);
