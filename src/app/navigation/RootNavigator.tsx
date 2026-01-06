import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

import AuthNavigator from './AuthNavigator';
import ProtectedNavigator from './ProtectedNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import SplashScreen from '../../features/splash/presentation/screens/SplashScreen';

export default function RootNavigator() {
  const { user, language, hasSeenOnboarding, isLoading } = useSelector(
    (state: RootState) => state.auth
  );


  console.log("RootNavigator State:", { user, language, hasSeenOnboarding, isLoading });

  // Show splash screen while loading

  if (isLoading) {
    return <SplashScreen />;
  }

  // 1️⃣ Language NOT selected yet
  if (!language) {
    return (
      <NavigationContainer>
        <OnboardingNavigator initialRouteName="Language" />
      </NavigationContainer>
    );
  }

  // 2️⃣ Language selected BUT onboarding not completed
  if (!hasSeenOnboarding) {
    return (
      <NavigationContainer>
        <OnboardingNavigator initialRouteName="OnboardingMain" />
      </NavigationContainer>
    );
  }

  // 3️⃣ Onboarding done → Auth or Home
  return (
    <NavigationContainer>
      {user ? <ProtectedNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
