import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLanguage, finishLoading, setOnboardingSeen, } from '../../../auth/state/authSlice';
import Colors from '../../../../core/theme/colors';
import i18n from '../../../../core/localization/i18n';
import { getSavedLanguage, } from '../../../../core/localization/languageStorage';
import { getOnboardingStatus } from '../../../../core/localization/onboardingStorage';

export default function SplashScreen() {
  const dispatch = useDispatch();


  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      const startTime = Date.now();

      // Load data in parallel
      const [savedLang, onboardingSeen] = await Promise.all([
        getSavedLanguage(),
        getOnboardingStatus(),
      ]);

      if (!isMounted) return;

      if (savedLang) {
        i18n.locale = savedLang;
        dispatch(setLanguage(savedLang));
      }

      if (onboardingSeen) {
        dispatch(setOnboardingSeen());
      }

      // Ensure splash shows for at least 2 seconds
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(2000 - elapsed, 0);

      setTimeout(() => {
        if (isMounted) {
          dispatch(finishLoading());
        }
      }, remaining);
    };

    init();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/images/splash/splash_icon.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>
        {i18n.t('splash.appname')}
      </Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.background },
  logo: { width: 120, height: 120 },
  text: { fontSize: 24, fontWeight: 'bold', color: Colors.themecolor },
});
