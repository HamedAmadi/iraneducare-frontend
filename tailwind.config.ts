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
        first: '#003366',
        // first: '#317EFE',
        second: '#ff6600',
        // second: '#E7F914',
        third: '#ffffff1a',
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
        'home-banner':
          "linear-gradient(180deg, #A0D7FE, #F6FBFF)",
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