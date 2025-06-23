/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Wooden Color Palette
        wood: {
          50: '#fdf8f3',
          100: '#f9efe3',
          200: '#f1dcc4',
          300: '#e7c299',
          400: '#dba36c',
          500: '#d1894b',
          600: '#c3753f',
          700: '#a25f36',
          800: '#824e31',
          900: '#6a422a',
        },
        bark: {
          50: '#faf6f2',
          100: '#f3eade',
          200: '#e6d2ba',
          300: '#d6b690',
          400: '#c49966',
          500: '#b8844a',
          600: '#ab743e',
          700: '#8e5e34',
          800: '#734e2e',
          900: '#5e4026',
        },
        cream: {
          50: '#fefcf8',
          100: '#fdf8ed',
          200: '#fbf0d4',
          300: '#f8e5b3',
          400: '#f3d487',
          500: '#edc05e',
          600: '#e1a943',
          700: '#bc8d39',
          800: '#966e35',
          900: '#7a5a30',
        },
      },
      backgroundImage: {
        'wood-grain': "url('https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg')",
        'wood-texture': "url('https://images.pexels.com/photos/172276/pexels-photo-172276.jpeg')",
        'hero-bg': "url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};