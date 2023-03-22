import { AppStylesContext } from '@/providers/AppStylesProvider';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { UserStackParamList } from '.';

export type UserScreenParams = { userId: string };

type UserScreenProps = NativeStackScreenProps<UserStackParamList, 'User'>;

export const UserScreen: React.FC<UserScreenProps> = ({ route }) => {
  const { styles } = useContext(AppStylesContext);
  return (
    <View style={styles.container}>
      <Text>User Screen</Text>
      <Text>{route.params.userId}</Text>
      <StatusBar style='auto' />
    </View>
  );
};
