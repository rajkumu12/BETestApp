import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { setOnboardingSeen } from '../../../auth/state/authSlice';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const dispatch = useDispatch();

  const finish = () => {
    dispatch(setOnboardingSeen());
  };

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    >
      <View style={[styles.slide, { backgroundColor: '#FFEDED' }]}>
        <Text style={styles.text}>Welcome to Kuebes 🎉</Text>
      </View>

      <View style={[styles.slide, { backgroundColor: '#E7FFE7' }]}>
        <Text style={styles.text}>Slide 2 - Features</Text>
      </View>

      <View style={[styles.slide, { backgroundColor: '#EDF1FF' }]}>
        <Text style={styles.text}>Slide 3 - Get Started</Text>
        <Button title="Continue" onPress={finish} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  slide: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
