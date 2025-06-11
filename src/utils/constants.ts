export const APP_CONFIG = {
    title: 'LinkedIn Yatri - Yatri Cloud',
    company: {
      name: 'Yatri Cloud',
      website: 'https://yatricloud.com',
      logo: 'https://raw.githubusercontent.com/yatricloud/yatri-images/refs/heads/main/Logo/yatricloud-round-transparent.png'
    },
    social: {
      linkedin: 'https://www.linkedin.com/company/yatricloud/'
    },
    copyright: {
      year: 2025,
      text: 'All rights reserved.'
    }
  } as const;
  
  export const ANIMATION_DURATIONS = {
    confetti: 3000,
    fadeIn: 500,
    fadeInDelay: 800,
    fadeInDelay2: 1000,
    float: 3000,
    slowSpin: 20000,
    slowSpinReverse: 25000
  } as const;