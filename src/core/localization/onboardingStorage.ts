import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_KEY = 'HAS_SEEN_ONBOARDING';

export const saveOnboardingStatus = async (value: boolean) => {
  await AsyncStorage.setItem(ONBOARDING_KEY, JSON.stringify(value));
};

export const getOnboardingStatus = async (): Promise<boolean> => {
  const value = await AsyncStorage.getItem(ONBOARDING_KEY);
  return value === 'true';
};
