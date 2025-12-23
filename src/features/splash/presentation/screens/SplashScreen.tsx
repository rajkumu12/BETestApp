import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { finishLoading } from '../../../auth/state/authSlice';
import Colors from '../../../../core/theme/colors';
import i18n from '../../../../core/localization/i18n';
import { getSavedLanguage } from '../../../../core/localization/languageStorage';

export default function SplashScreen() {
  const dispatch = useDispatch();


  useEffect(() => {
    const init = async () => {
      const lang = await getSavedLanguage();
      if (lang) {
        i18n.locale = lang;
      }
      dispatch(finishLoading());
    };

    init();
  }, []);


  useEffect(() => {
    // simulate loading for 2 sec
    const timeout = setTimeout(() => {
      /// dispatch(finishLoading());
    }, 2000);

    return () => clearTimeout(timeout);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/images/splash/splash_icon.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>
        {"KUEBES"}
      </Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.background },
  logo: { width: 120, height: 120 },
  text: { fontSize: 24, fontWeight: 'bold', color: Colors.themecolor },
});
