import React from 'react';
import { Text, StyleSheet, Pressable, GestureResponderEvent } from 'react-native';
import Colors from '../theme/colors';

interface AppButtonProps {
    title: String;
    onPress: (event: GestureResponderEvent) => void;
    disabled?: boolean;
}

export default function LanguageButton({
    title,
    onPress,
    disabled = false,
}: AppButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.pressed,
            ]}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
