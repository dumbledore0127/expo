import { useAppStyles } from '@/providers/AppStyleProvider';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Button } from 'react-native';
import { AuthStackParamList } from '.';

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const appStyles = useAppStyles();
  return (
    <View style={appStyles.container}>
      <Button
        title='Login'
        onPress={() =>
          navigation.navigate('UserNavigator', {
            screen: 'User',
            params: { userId: 'passed-user-id' },
          })
        }
      />
    </View>
  );
};
