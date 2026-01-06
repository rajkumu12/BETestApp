import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGE_KEY = 'APP_LANGUAGE';

export const saveLanguage = async (lang: string) => {
  await AsyncStorage.setItem(LANGUAGE_KEY, lang);
};

export const getSavedLanguage = async (): Promise<string | null> => {
  return AsyncStorage.getItem(LANGUAGE_KEY);
};
