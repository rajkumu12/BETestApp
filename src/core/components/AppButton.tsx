import React from 'react';
import { Text, StyleSheet, Pressable, GestureResponderEvent } from 'react-native';
import Colors from '../theme/colors';
import Fonts from '../theme/fonts';

interface AppButtonProps {
  title: String;
  onPress: (event: GestureResponderEvent) => void;
  selected?: boolean;
}

export default function LanguageButton({
  title,
  onPress,
  selected = false,
}: AppButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        selected && styles.selected,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.text,{color:selected?Colors.white:Colors.black}]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '60%',
    height: 50,
    backgroundColor: Colors.white,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: Colors.purple,
    borderColor: Colors.purple,
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: Colors.black,
    fontSize: 16,
    fontFamily:Fonts.semiBold,
  },
});
