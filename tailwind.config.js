/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    screens: {
      'xs': '475px',
      'ml': '900px',
      '3xl': '1537px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'head-banner': "url('/pexels-head-banner.jpg')",
        
      },

      gridTemplateColumns: {
        'gallery': 'repeat(auto-fit, minmax(250px, 1fr))',
      },

      colors: {
        'black-100': '#2B2C35',
        'primary-blue': {
          default: '2B59FF',
          100: 'F5F8FF'
        }
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
      },

      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 100s linear infinite',
        blink: 'blink 1.4s both infinite'
      }

    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries')
  ],
}

