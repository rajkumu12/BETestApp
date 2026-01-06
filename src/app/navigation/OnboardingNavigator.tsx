import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../../features/onboarding/presentation/screens/OnboardingScreen';
import LanguageScreen from '../../features/onboarding/presentation/screens/LanguageScreen';
import { OnboardingStackParamList } from './types';

//const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator<OnboardingStackParamList>();
interface OnboardingNavigatorProps {
  initialRouteName: keyof OnboardingStackParamList;
}

export default function OnboardingNavigator({ initialRouteName }: OnboardingNavigatorProps) {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="OnboardingMain" component={OnboardingScreen} />
    </Stack.Navigator>
  );
}
