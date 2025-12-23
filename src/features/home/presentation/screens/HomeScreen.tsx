import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../../auth/state/authSlice';

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Home Screen 🏠</Text>
      <Button title="Logout" onPress={() => dispatch(logout())} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
