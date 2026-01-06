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
import i18n from '../../../../core/localization/i18n';
import TruecallerDialog from '../../../../core/components/TruecallerDialog';


export default function LoginScreen({ navigation }: any) {
  const [showModal, setShowModal] = useState(false);
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

          {/* TITLE */}
          <Text style={styles.title}>Welcome back!</Text>
          <Text style={styles.subtitle}>
            Sign in to continue your rewards journey
          </Text>

          {/* INPUTS */}
          {/* <TextInput
            placeholder="Name"
            placeholderTextColor={Colors.textSecondary}
            style={styles.input}
          /> */}

          <TextInput
            placeholder="Email Id"
            placeholderTextColor={Colors.textSecondary}
            keyboardType="email-address"
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor={Colors.textSecondary}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"   // iOS
            style={styles.input}
          />

          {/* SEND OTP */}
          <Pressable style={styles.primaryButton} onPress={() => { navigation.navigate('VerifyOtp') }}>
            <Text style={styles.primaryButtonText}>{i18n.t(`common.login`)}</Text>
          </Pressable>

          {/* OR */}
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>

          {/* GOOGLE SIGN IN */}
          <Pressable
            style={styles.googleButton}
            onPress={() => setShowModal(true)}
          >
            {/* TRUECALLER ICON */}
            <Image
              source={require('../../../../assets/images/login/truecallericon.png')}
              style={styles.tcicon}
              resizeMode="contain"
            />
            <Text style={styles.googleText}>Sign in using Truecaller</Text>
          </Pressable>

          {/* FOOTER */}
          <Text style={styles.footerText}>
            New here?{' '}
            <Text style={styles.link} onPress={() => navigation.navigate("Register")}>
              Register now
            </Text>
          </Text>

        </View>

      </SafeAreaView>
      <TruecallerDialog
        visible={showModal}
        onClose={() => setShowModal(false)}
        onContinue={() => {
          setShowModal(false);
          console.log("Truecaller Login Triggered");
        }}
      />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  logo: {
    width: 100,
    height: 100,
    marginTop: 40,
  },
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
    marginBottom: 32,
  },

  input: {
    width: '85%',
    height: 48,
    backgroundColor: Colors.white,
    borderRadius: 16,
    paddingHorizontal: 20,
    fontFamily: Fonts.mulishSemiBold,
    fontSize: 16,
    marginBottom: 14,
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
    marginVertical: 20,
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

  footerText: {
    marginTop: 24,
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: Colors.white,
  },

  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
    // TouchableOpacity view styles
  },
  link: {
    color: '#320346',
    fontSize: 15,
    marginTop: 4,
    fontFamily: Fonts.mulishExtraBold,
  },
  tcicon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
});
