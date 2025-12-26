import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../../../core/theme/colors';
import Fonts from '../../../../core/theme/fonts';
import LinearGradient from 'react-native-linear-gradient';
import TruecallerDialog from '../../../../core/components/TruecallerDialog';
import i18n from '../../../../core/localization/i18n';

export default function RegisterScreen({ navigation }: any) {
  const [showModal, setShowModal] = useState(false);
  const [isWhatsappSame, setIsWhatsappSame] = useState(false);

  return (
    <LinearGradient
      colors={['#EFE4F7', '#EFE4F7', '#9F71BB', '#874AAD', '#874AAD', '#874AAD']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>

          {/* LOGO */}
          <Image
            source={require('../../../../assets/images/splash/splash_icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appName}>{i18n.t('splash.appname')}</Text>

          {/* Title */}
          <Text style={styles.title}>Get Started</Text>
          <Text style={styles.subtitle}>Create an account to get started</Text>

          {/* FIELDS */}
          <TextInput
            placeholder="Name"
            placeholderTextColor={Colors.textSecondary}
            style={styles.input}
          />

          <TextInput
            placeholder="Mobile number"
            placeholderTextColor={Colors.textSecondary}
            keyboardType="phone-pad"
            style={styles.input}
          />

          {/* WhatsApp Checkbox */}
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setIsWhatsappSame(prev => !prev)}
          >
            <View style={[styles.checkbox, isWhatsappSame && styles.checkboxActive]}>
              {isWhatsappSame && <View style={styles.tick} />}
            </View>
            <Text style={styles.checkboxText}>Whatsapp number</Text>
          </TouchableOpacity>

          <TextInput
            placeholder="Email"
            placeholderTextColor={Colors.textSecondary}
            keyboardType="email-address"
            style={styles.input}
          />

          {/* Gender (dropdown placeholder for now) */}
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Gender</Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>

          <TextInput
            placeholder="City"
            placeholderTextColor={Colors.textSecondary}
            style={styles.input}
          />

          {/* SEND OTP */}
          <Pressable style={styles.primaryButton} onPress={() => navigation.navigate("VerifyOtp")}>
            <Text style={styles.primaryButtonText}>Send OTP</Text>
          </Pressable>

          {/* OR */}
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>

          {/* TRUECALLER CTA */}
          <Pressable
            style={styles.googleButton}
            onPress={() => setShowModal(true)}
          >
            <Image
              source={require('../../../../assets/images/login/truecallericon.png')}
              style={styles.tcicon}
              resizeMode="contain"
            />
            <Text style={styles.googleText}>Sign up using Truecaller</Text>
          </Pressable>

          {/* FOOTER */}
          <Text style={styles.footerText}>
            Already a member?{' '}
            <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
              Log in
            </Text>
          </Text>

        </View>
      </SafeAreaView>

      <TruecallerDialog
        visible={showModal}
        onClose={() => setShowModal(false)}
        onContinue={() => {
          setShowModal(false);
          console.log("Truecaller triggered");
        }}
      />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: { flex: 1 },
  safe: { flex: 1 },
  container: { flex: 1, alignItems: 'center', paddingHorizontal: 24 },
  checkboxRow: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.white,
    marginRight: 10,
  },
  checkboxActive: {
    backgroundColor: Colors.purleText,
    borderColor: Colors.purleText,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tick: {
    width: 8,
    height: 8,
    backgroundColor: Colors.white,
    borderRadius: 2,
  },
  checkboxText: {
    fontFamily: Fonts.mulishSemiBold,
    fontSize: 14,
    color: Colors.white,
  },
  dropdown: {
    width: '85%',
    height:40,
    backgroundColor: Colors.white,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  dropdownText: {
    fontFamily: Fonts.mulishRegular,
    color: Colors.textSecondary,
    fontSize: 16,
  },
  dropdownArrow: {
    fontSize: 18,
    color: Colors.textSecondary,
  },

  footerText: { marginTop: 8, fontFamily: Fonts.regular, fontSize: 13, color: Colors.white },
  link: { color: Colors.themecolor, fontFamily: Fonts.mulishExtraBold, fontSize: 15 },
  tcicon: { width: 28, height: 28, marginRight: 10 },
  appName: {
    fontFamily: Fonts.semiBold,
    fontSize: 22,
    color: Colors.themecolor,
    marginBottom: 6,
  },
   title: {
    fontFamily: Fonts.mulishExtraBold,
    fontSize: 36,
    color: Colors.themecolor,
  },
  subtitle: {
    fontFamily: Fonts.mulishRegular,
    fontSize: 14,
    marginTop: -4,
    color: Colors.themecolor,
    marginBottom: 12,
  },

  input: {
    width: '85%',
    height: 40,
    backgroundColor: Colors.white,
    borderRadius: 16,
    paddingHorizontal: 20,
    fontFamily: Fonts.mulishSemiBold,
    fontSize: 16,
    marginBottom: 8
  },
   primaryButton: {
    width: '85%',
    height: 48,
    backgroundColor: Colors.sendOtpBackground,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  primaryButtonText: {
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    color: Colors.white,
  },

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:8,
    width: '100%',
  },

  line: {
    flex: 1,
    height: 0,
    backgroundColor: Colors.border,
  },

  orText: {
    marginHorizontal: 10,
    fontSize: 20,
    fontFamily: Fonts.semiBold,
    color: Colors.white,
  },

  googleButton: {
    width: '85%',
    height: 48,
    backgroundColor: Colors.white,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
   googleText: {
    fontFamily: Fonts.semiBold,
    fontSize: 14,
    color: Colors.purleText,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
