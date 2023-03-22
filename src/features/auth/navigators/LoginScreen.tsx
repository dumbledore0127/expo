import { AppStylesContext } from '@/providers/AppStylesProvider';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { View, Button } from 'react-native';
import { AuthStackParamList } from '.';

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { styles } = useContext(AppStylesContext);
  return (
    <View style={styles.container}>
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
