import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserStackParamList } from '.';

export type UserScreenParams = { userId: string };

type UserScreenProps = NativeStackScreenProps<UserStackParamList, 'User'>;

export const UserScreen: React.FC<UserScreenProps> = ({ route }) => (
  <View style={styles.container}>
    <Text>User Screen</Text>
    <Text>{route.params.userId}</Text>
    <StatusBar style='auto' />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
