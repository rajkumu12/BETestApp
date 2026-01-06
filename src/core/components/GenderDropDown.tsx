import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Colors from "../theme/colors";
import Fonts from "../theme/fonts";


interface Props {
  label: string;
  visible: boolean;
  options: string[];
  selected?: string | null;
  onClose: () => void;
  onSelect: (value: string) => void;
}

export default function GenderDropDown({
  label,
  visible,
  options,
  selected,
  onClose,
  onSelect,
}: Props) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>Select {label}</Text>

          {options.map((item) => (
            <Pressable
              key={item}
              onPress={() => onSelect(item)}
              style={[styles.option, selected === item && styles.selectedOption]}
            >
              <Text
                style={[
                  styles.optionText,
                  selected === item && styles.selectedOptionText,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}

          <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "flex-end",
  },
  box: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingVertical: 20,
    paddingHorizontal: 18,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 18,
    color: Colors.black,
    marginBottom: 14,
  },
  option: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lihtGray,
  },
  optionText: {
    color: Colors.black,
    fontFamily: Fonts.regular,
    fontSize: 15,
  },
  selectedOption: {
    backgroundColor: Colors.purpleLight,
  },
  selectedOptionText: {
    color: Colors.purple,
    fontFamily: Fonts.semiBold,
  },
  cancelBtn: {
    marginTop: 14,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: Colors.lihtGray,
  },
  cancelText: {
    textAlign: "center",
    color: Colors.black,
    fontFamily: Fonts.medium,
    fontSize: 15,
  },
});
