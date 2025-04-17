import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'IRANSanse': ['var(--iransans)'],
      'LightIRANSanse': ['var(--iransans-light)'],
      'MediumIRANSanse': ['var(--iransans-medium)'],
      'BoldIRANSanse': ['var(--iransans-bold)'],
      'IRANSansWebEnNo': ['var(--iransans-enNo)'],
      'BYekan': ['var(--yekan)!important'],
      'InterFont': ['var(--inter-black)!important'],
    },
    extend: {
      boxShadow: {
        'universityCard': '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
        'contactUs': '0 20px 50px 0 rgba(0, 0, 0, 0.15)',
        'collapseMenu': '0 10px 30px 0 rgba(0, 0, 0, 0.15)'
      },
      screens: {
        'xs': '480px',
      },
      colors: {
        // first: '#317EFE',
        first: '#003366',
        first2: "#194373",
        first3: "#2e537f",
        first4: "#41638c",
        first5: "#557399",
        first6: "#6984a5",
        first7: "#7d95b2",
        first8: "#92a6bf",
        first9: "#a7b7cc",
        first10: "#bcc9d8",
        first11: "#d2dbe5",
        first12: "#e8edf2",
        second: '#ff6600',
        second2: '#ff7531',
        second3: '#ff844a',
        second4: '#ff915f',
        second5: '#ff9e73',
        second6: '#ffab85',
        second7: '#ffb897',
        second8: '#ffc4a8',
        second9: '#ffd0ba',
        second10: '#ffdccb',
        second11: '#ffe8dc',
        second12: '#fff3ee',
        // second: '#E7F914',
        third: '#f8f8f8',
        fourth: '#14203A',
        fifth: '#d0dde6',
        sixth: '#f0f4f7',
        seventh: '#9b59b6',
        text: '#14203A',
        inputText: '#34495E',
        bgColor: '#ffffff',
      },
      // backgroundImage: ( theme ) => ( {
      //   'home-banner':
      //     "linear-gradient(180deg, '#A0D7FE', '#F6FBFF'), url('/src/images/icon-bg.jpg')",
      // } ),
      backgroundImage: {
        'home-banner': "linear-gradient(180deg, #bcc9d8, #ffffff)",
        "footer": "linear-gradient(180deg, #d2dbe5, #ffffff)"
        // "linear-gradient(180deg, #A0D7FE, #F6FBFF)",
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        '.container': {
          marginRight: 'auto',
          marginLeft: 'auto',
          maxWidth: '100%',
          paddingRight: '2rem',
          paddingLeft: '2rem',
          '@screen lg': {
            maxWidth: '1020px',
            paddingRight: 0,
            paddingLeft: 0,
          },
          '@screen xl': {
            maxWidth: '1220px',
            paddingRight: 0,
            paddingLeft: 0,
          },
          '@screen 2xl': {
            maxWidth: '1280px',
            paddingRight: 0,
            paddingLeft: 0,
          },
        }
      })
    },
  ],
};
export default config;