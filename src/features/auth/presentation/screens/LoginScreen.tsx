import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../../../core/theme/colors';
import Fonts from '../../../../core/theme/fonts';


export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        {/* LOGO */}
        <Image
          source={require('../../../../assets/images/splash/splash_icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* TITLE */}
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>
          Sign in to continue your rewards journey
        </Text>

        {/* INPUTS */}
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

        {/* SEND OTP */}
        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Send OTP</Text>
        </Pressable>

        {/* OR */}
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* GOOGLE SIGN IN */}
        <Pressable style={styles.googleButton}>
          <Text style={styles.googleText}>Sign in using Truecaller</Text>
        </Pressable>

        {/* FOOTER */}
        <Text style={styles.footerText}>
          New here? <Text style={styles.link}>Register now</Text>
        </Text>

      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#EBDCF5',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  logo: {
    width: 120,
    height: 120,
    marginTop: 40,
    marginBottom: 24,
  },

  title: {
    fontFamily: Fonts.bold,
    fontSize: 26,
    color: Colors.purple,
    marginBottom: 6,
  },

  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 32,
  },

  input: {
    width: '100%',
    height: 48,
    backgroundColor: Colors.white,
    borderRadius: 24,
    paddingHorizontal: 20,
    fontFamily: Fonts.regular,
    fontSize: 14,
    marginBottom: 14,
  },

  primaryButton: {
    width: '100%',
    height: 48,
    backgroundColor: Colors.purple,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },

  primaryButtonText: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
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
    height: 1,
    backgroundColor: Colors.border,
  },

  orText: {
    marginHorizontal: 10,
    fontFamily: Fonts.medium,
    color: Colors.textSecondary,
  },

  googleButton: {
    width: '100%',
    height: 48,
    backgroundColor: Colors.white,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  googleText: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: Colors.black,
  },

  footerText: {
    marginTop: 24,
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: Colors.textSecondary,
  },

  link: {
    color: Colors.purple,
    fontFamily: Fonts.semiBold,
  },
});
