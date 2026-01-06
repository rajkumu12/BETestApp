import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ONBOARDING_SLIDES, LAST_SLIDE_INDEX } from '../../data/onboardingSlides';
import { saveOnboardingStatus } from '../../../../core/localization/onboardingStorage';
import { setOnboardingSeen } from '../../../auth/state/authSlice';
import DotsIndicator from '../component/DotsIndicator';
import ActionButton from '../../../../core/components/ActionButtons';
import Colors from '../../../../core/theme/colors';
import i18n from '../../../../core/localization/i18n';
import Fonts from '../../../../core/theme/fonts';


const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const flatListRef = useRef<FlatList>(null);

  const [index, setIndex] = useState(0);
  const isLastSlide = index === LAST_SLIDE_INDEX;

  const onNext = () => {
    flatListRef.current?.scrollToIndex({
      index: index + 1,
      animated: true,
    });
  };

  const onSkip = () => {
    flatListRef.current?.scrollToIndex({
      index: LAST_SLIDE_INDEX,
      animated: true,
    });
  };

  const onFinish = async () => {
    await saveOnboardingStatus(true);
    dispatch(setOnboardingSeen());
  };

  return (
    <View style={styles.container}>
      {/* SLIDES */}
      <FlatList
        ref={flatListRef}
        data={ONBOARDING_SLIDES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onMomentumScrollEnd={(e) => {
          const slideIndex = Math.round(
            e.nativeEvent.contentOffset.x / width
          );
          setIndex(slideIndex);
        }}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <Image
              style={styles.image}
              source={item.image}
              resizeMode="cover" />
            <Text style={styles.title}>{i18n.t(item.titleKey)}</Text>
            <Text style={styles.subtitle}>{i18n.t(item.subtitleKey)}</Text>
          </View>
        )}
      />

      {/* FOOTER */}
      {!isLastSlide ? (
        <View
          style={[
            styles.footer,
            { bottom: insets.bottom +24 },
          ]}
        >
          <Text style={styles.skip} onPress={onSkip}>
            Skip
          </Text>

          <DotsIndicator currentIndex={index} />

          <Text style={styles.next} onPress={onNext}>
            Next →
          </Text>
        </View>
      ) : (
        <ActionButton
          title="Let’s Go"
          onPress={onFinish}
          containerStyle={{
            position: 'absolute',
            alignSelf: 'center',
            width: '80%',
            bottom: insets.bottom + 24
          }}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  image: {
    width: 242,
    height: 269,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily:Fonts.semiBold,
    textAlign:'center',
    color: Colors.themecolor,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
    fontFamily:Fonts.regular,
    color:  Colors.themecolor,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skip: {
    fontSize: 16,
     fontWeight: '600',
    color: Colors.purpleLight,
  },
  next: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.purpleLight,
  },
});
