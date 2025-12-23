import React from 'react';
import {Text, StyleSheet } from 'react-native';
import i18n from '../../../../core/localization/i18n';
import { saveLanguage } from '../../../../core/localization/languageStorage';
import Colors from '../../../../core/theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../../../../core/components/AppButton';

export default function LanguageScreen({ navigation }: any) {
  const selectLang = async (lang: string) => {
    i18n.locale = lang;
    await saveLanguage(lang);
    navigation.replace('OnboardingMain');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Text style={styles.title}>Select your preferred language</Text>
      <AppButton title="English" onPress={() => selectLang('en')} />
      <AppButton title="हिंदी" onPress={() => selectLang('hi')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
  },
  button: {
    marginTop: 20,
    width: '80%',
  },
});
