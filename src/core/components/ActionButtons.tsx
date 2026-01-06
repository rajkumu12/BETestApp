import React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';
import Colors from '../theme/colors';
import Fonts from '../theme/fonts';

interface ActionButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  selected?: boolean;
  disabled?: boolean;
  containerStyle?: ViewStyle; 
}

export default function ActionButton({
  title,
  onPress,
  selected = false,
  disabled = false,
  containerStyle,
}: ActionButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        selected && styles.selected,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        containerStyle, // 👈 parent controls layout
      ]}
    >
      <Text style={[styles.text, selected && styles.selectedText]}>
        {title}
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: Colors.buttonbackground,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: Colors.purple,
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    fontFamily:Fonts.semiBold
  },
  selectedText: {
    color: Colors.white,
  },
});
