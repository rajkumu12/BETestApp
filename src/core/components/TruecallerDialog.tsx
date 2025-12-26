import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import Fonts from '../theme/fonts';
import Colors from '../theme/colors';

interface Props {
  visible: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export default function TruecallerDialog({ visible, onClose, onContinue }: Props) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
    
      <View style={styles.overlay}>
        <View style={styles.card}>

          {/* CLOSE BUTTON */}
          <Pressable style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>×</Text>
          </Pressable>

          {/* TRUECALLER ICON */}
          <Image
            source={require('../../assets/images/login/truecallericon.png')}
            style={styles.icon}
            resizeMode="contain"
          />

          <Text style={styles.title}>Sign in using</Text>
          <Text style={styles.titleBold}>Truecaller</Text>

          {/* CTA BUTTON */}
          <TouchableOpacity style={styles.button} onPress={onContinue}>
            <Image
              source={require('../../assets/images/login/callicon.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Continue with Truecaller</Text>
          </TouchableOpacity>

          <Text style={styles.policy}>
            By continuing, you agree to Truecaller's Terms and{'\n'}Privacy Policy.
          </Text>

        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 280,
    backgroundColor: Colors.white,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 20,
    elevation:12,
    alignItems: 'center',
  },
  closeBtn: {
    position: 'absolute',
    right: 12,
    top: 10,
    zIndex: 10,
  },
  closeText: {
    fontSize: 22,
    color: Colors.black,
    fontWeight: '400',
  },
  icon: {
    width: 41,
    height: 41,
    marginTop: 8,
    marginBottom: 12,
  },
  title: {
    fontFamily: Fonts.semiBold,
    fontSize: 24,
    color: Colors.black,
  },
  titleBold: {
    fontFamily: Fonts.semiBold,
    fontSize: 24,
    marginBottom: 18,
    color: Colors.black,
  },
  button: {
    width: '100%',
    backgroundColor: Colors.tcbuttonBackground,
    borderRadius: 30,
    borderWidth:0.5,
    borderColor:Colors.blue,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  buttonIcon: {
    width: 22,
    height: 22,
    marginRight: 2,
  },
  buttonText: {
    fontFamily: Fonts.semiBold,
    fontSize: 15,
    color: Colors.white,
  },
  policy: {
    fontFamily: Fonts.regular,
    fontSize: 9,
    textAlign: 'justify',
    color: Colors.textSecondary,
  },
});
