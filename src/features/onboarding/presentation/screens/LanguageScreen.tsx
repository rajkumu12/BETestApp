import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import i18n from '../../../../core/localization/i18n';
import { saveLanguage } from '../../../../core/localization/languageStorage';
import Colors from '../../../../core/theme/colors';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import AppButton from '../../../../core/components/AppButton';
import ActionButton from '../../../../core/components/ActionButtons';
import Fonts from '../../../../core/theme/fonts';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../../auth/state/authSlice';

export default function LanguageScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [selectedLang, setSelectedLang] = useState<string>(
    i18n.locale || 'en'
  );
  const selectLang = async (lang: string) => {
    setSelectedLang(lang);
    i18n.locale = lang;
    await saveLanguage(lang);
    dispatch(setLanguage(lang));
  };
  const navigateToNextScreen = () => {
    navigation.replace('OnboardingMain');
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingBottom: insets.bottom + 16 },
      ]} edges={['top', 'left', 'right']}>
      <Text style={styles.title}>{i18n.t('onboarding.langueheader')}</Text>
      <AppButton
        title={i18n.t('onboarding.english')}
        onPress={() => selectLang('en')}
        selected={selectedLang === 'en'} />
      <AppButton
        title={i18n.t('onboarding.hindi')}
        onPress={() => selectLang('hi')}
        selected={selectedLang === 'hi'} />
      <ActionButton
        title={i18n.t('onboarding.continue')}
        onPress={() => navigateToNextScreen()}
        containerStyle={{
          position: 'absolute',
          bottom: insets.bottom + 30,
          alignSelf: 'center',
          width: '60%',
        }}
      />

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
    fontFamily:Fonts.semiBold,
    fontWeight: '600',
    color: Colors.black,
    marginTop: 20,
    marginBottom: 30
  },
});
