import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../state/authSlice';

export default function LoginScreen() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ id: '1', name: 'User' }));
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
