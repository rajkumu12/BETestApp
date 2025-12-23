import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

import AuthNavigator from './AuthNavigator';
import ProtectedNavigator from './ProtectedNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import SplashScreen from '../../features/splash/presentation/screens/SplashScreen';

export default function RootNavigator() {
  const { user, hasSeenOnboarding, isLoading } = useSelector(
    (state: RootState) => state.auth
  );

  if (isLoading) {
    return <SplashScreen />;
  }

  if (!hasSeenOnboarding) {
    return (
      <NavigationContainer>
        <OnboardingNavigator />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      {user ? <ProtectedNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
