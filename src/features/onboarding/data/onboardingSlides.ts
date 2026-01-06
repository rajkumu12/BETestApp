import i18n from "../../../core/localization/i18n";

export interface OnboardingSlide {
  id: number;
  titleKey: string;
  subtitleKey: string;
  image: any;
}

export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: 1,
    titleKey: 'onboarding.slide1.title',
    subtitleKey: 'onboarding.slide1.subtitle',
    image:require('../../../assets/images/onboarding/slide1.png'),
  },
  {
    id: 2,
    titleKey: 'onboarding.slide2.title',
    subtitleKey: 'onboarding.slide2.subtitle',
    image:require('../../../assets/images/onboarding/slide2.png'),
  },
  {
    id: 3,
    titleKey: 'onboarding.slide3.title',
    subtitleKey: 'onboarding.slide3.subtitle',
   image:require('../../../assets/images/onboarding/slide3.png'),
  },
  {
    id: 4,
    titleKey: 'onboarding.slide4.title',
    subtitleKey: 'onboarding.slide4.subtitle',
    image:require('../../../assets/images/onboarding/slide4.png'),
  },
  {
    id: 5,
    titleKey: 'onboarding.slide5.title',
    subtitleKey: 'onboarding.slide5.subtitle',
    image: require('../../../assets/images/onboarding/slide5.png'),
  },
  {
    id: 6,
    titleKey: 'onboarding.slide6.title',
    subtitleKey: 'onboarding.slide6.subtitle',
    image: require('../../../assets/images/onboarding/slide6.png'),
  },
];

export const LAST_SLIDE_INDEX = ONBOARDING_SLIDES.length - 1;
